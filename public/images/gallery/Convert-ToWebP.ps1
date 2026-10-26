# Convert-ToWebP.ps1
# Converts all images in a directory to WebP format using cwebp
# Output files are named: {folder-name}-01.webp, {folder-name}-02.webp, etc.
# Images are sorted alphabetically before numbering — add new photos with names
# that sort after existing ones so they get the next sequential numbers.
# Image quality: 70 | Alpha quality: 70
#
# Auto-rotation: YES — EXIF orientation is applied before resize/crop,
# so portrait photos shot on a phone will come out correctly oriented.
#
# Requirements: cwebp + ImageMagick (magick) must be installed
#   cwebp      : https://developers.google.com/speed/webp/download
#              : choco install webp  |  scoop install libwebp
#   ImageMagick: https://imagemagick.org/script/download.php
#              : choco install imagemagick
#
# Usage:
#   .\Convert-ToWebP.ps1                          # Converts images in the current directory
#   .\Convert-ToWebP.ps1 -InputDir "C:\images"   # Converts images in a specific directory
#   .\Convert-ToWebP.ps1 -InputDir "C:\images" -OutputDir "C:\images\webp"  # Custom output folder
#   .\Convert-ToWebP.ps1 -DeleteOriginals         # Remove originals after conversion
#   .\Convert-ToWebP.ps1 -Stamp Crop              # Cut off the top band containing the stamp text
#   .\Convert-ToWebP.ps1 -Stamp Blur              # Blur the top-right stamp text box
#
# Stamp removal (date/address text burned into the top-right corner by the camera app):
#   The stamp box is given as a percentage of the image's width/height, measured from
#   the top-right corner, with separate sizes for landscape and portrait photos.
#   Crop : removes the full-width band at the top that contains the stamp
#   Blur : heavily blurs just the stamp box (feathered edges), keeping the full frame
#   Metadata (incl. GPS) is always stripped, regardless of -Stamp.

param (
    [string]$InputDir        = (Get-Location).Path,
    [string]$OutputDir       = "",        # Leave empty to save WebP alongside originals
    [switch]$DeleteOriginals = $false,    # Delete source files after successful conversion
    [int]$ImageQuality       = 70,
    [int]$AlphaQuality       = 70,
    [ValidateSet("None", "Crop", "Blur")]
    [string]$Stamp           = "None",    # How to remove the top-right location stamp
    [int]$StampWidthLandscape  = 42,      # Stamp box width,  % of image width  (landscape)
    [int]$StampHeightLandscape = 34,      # Stamp box height, % of image height (landscape)
    [int]$StampWidthPortrait   = 60,      # Stamp box width,  % of image width  (portrait)
    [int]$StampHeightPortrait  = 26       # Stamp box height, % of image height (portrait)
)

# ── Validate dependencies ─────────────────────────────────────────────────────
if (-not (Get-Command cwebp -ErrorAction SilentlyContinue)) {
    Write-Host ""
    Write-Host "  ERROR: cwebp not found in PATH." -ForegroundColor Red
    Write-Host "    Chocolatey : choco install webp" -ForegroundColor Cyan
    Write-Host "    Scoop      : scoop install libwebp" -ForegroundColor Cyan
    Write-Host "    Manual     : https://developers.google.com/speed/webp/download" -ForegroundColor Cyan
    Write-Host ""
    exit 1
}
if (-not (Get-Command magick -ErrorAction SilentlyContinue)) {
    Write-Host ""
    Write-Host "  ERROR: ImageMagick (magick) not found in PATH." -ForegroundColor Red
    Write-Host "    Chocolatey : choco install imagemagick" -ForegroundColor Cyan
    Write-Host "    Manual     : https://imagemagick.org/script/download.php" -ForegroundColor Cyan
    Write-Host ""
    exit 1
}

# ── Validate input directory ──────────────────────────────────────────────────
if (-not (Test-Path $InputDir -PathType Container)) {
    Write-Host "ERROR: Input directory not found: $InputDir" -ForegroundColor Red
    exit 1
}

# ── Derive folder name prefix (e.g. "retaining-walls") ───────────────────────
$folderName = (Get-Item $InputDir).Name

# ── Gather + sort source images alphabetically ────────────────────────────────
$images = Get-ChildItem -Path $InputDir -File | Where-Object {
    $_.Extension -in @(".jpg", ".jpeg", ".png", ".gif", ".bmp", ".tiff", ".tif")
} | Sort-Object Name

if ($images.Count -eq 0) {
    Write-Host "No supported images found in: $InputDir" -ForegroundColor Yellow
    exit 0
}

# ── Determine output directory ────────────────────────────────────────────────
$targetDir = if ($OutputDir) { $OutputDir } else { $InputDir }
if (-not (Test-Path $targetDir)) {
    New-Item -ItemType Directory -Path $targetDir -Force | Out-Null
}

# ── Find the highest existing sequential number to resume from ────────────────
$existingPattern = "^$([regex]::Escape($folderName))-(\d+)\.webp$"
$highestExisting = Get-ChildItem -Path $targetDir -Filter "*.webp" |
    Where-Object { $_.Name -match $existingPattern } |
    ForEach-Object { [int]($Matches[1]) } |
    Measure-Object -Maximum |
    Select-Object -ExpandProperty Maximum

$counter = if ($highestExisting) { $highestExisting + 1 } else { 1 }

# ── Summary header ────────────────────────────────────────────────────────────
Write-Host ""
Write-Host "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━" -ForegroundColor Cyan
Write-Host "  WebP Batch Converter" -ForegroundColor Cyan
Write-Host "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━" -ForegroundColor Cyan
Write-Host "  Input dir      : $InputDir"
Write-Host "  Output dir     : $targetDir"
Write-Host "  Prefix         : $folderName"
Write-Host "  Starting at    : $("{0:D2}" -f $counter)"
Write-Host "  Image quality  : $ImageQuality"
Write-Host "  Alpha quality  : $AlphaQuality"
Write-Host "  Auto-rotation  : Yes (EXIF)"
Write-Host "  Stamp removal  : $Stamp"
Write-Host "  Delete orig.   : $DeleteOriginals"
Write-Host "  Images found   : $($images.Count)"
Write-Host "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━" -ForegroundColor Cyan
Write-Host ""

# ── Conversion loop ───────────────────────────────────────────────────────────
$successCount = 0
$failCount    = 0
$skipCount    = 0
$savedBytes   = 0

foreach ($image in $images) {

    $outputName = "{0}-{1:D2}.webp" -f $folderName, $counter
    $outputFile = Join-Path $targetDir $outputName

    # Skip if this sequential output file already exists
    if (Test-Path $outputFile) {
        Write-Host "  SKIP  $($image.Name) → $outputName already exists" -ForegroundColor DarkGray
        $counter++
        $skipCount++
        continue
    }

    # ── Step 1: Auto-orient (fix EXIF rotation) ───────────────────────────────
    $tempFile = [System.IO.Path]::GetTempFileName() + ".png"

    $null = & magick $image.FullName -auto-orient -strip $tempFile 2>&1
    if ($LASTEXITCODE -ne 0 -or -not (Test-Path $tempFile)) {
        Write-Host "  FAIL  $($image.Name) (auto-orient failed)" -ForegroundColor Red
        $failCount++
        continue
    }

    # ── Step 2: Read corrected dimensions ─────────────────────────────────────
    $dimensions = & magick identify -format "%w %h" $tempFile 2>&1
    if ($LASTEXITCODE -ne 0) {
        Write-Host "  FAIL  $($image.Name) (could not read dimensions)" -ForegroundColor Red
        Remove-Item $tempFile -Force -ErrorAction SilentlyContinue
        $failCount++
        continue
    }

    $parts  = $dimensions.Trim().Split(" ")
    $width  = [int]$parts[0]
    $height = [int]$parts[1]

    # Portrait → mobile crop | Landscape → desktop crop
    $isPortrait = $height -gt $width
    $targetSize = if ($isPortrait) { "800x1067" } else { "1920x1080" }

    # ── Step 3: Remove location stamp (top-right corner) ─────────────────────
    if ($Stamp -ne "None") {
        $boxW = [int]($width  * $(if ($isPortrait) { $StampWidthPortrait }  else { $StampWidthLandscape })  / 100)
        $boxH = [int]($height * $(if ($isPortrait) { $StampHeightPortrait } else { $StampHeightLandscape }) / 100)

        if ($Stamp -eq "Crop") {
            # Drop the full-width band at the top that holds the stamp
            $null = & magick $tempFile -gravity South -crop "${width}x$($height - $boxH)+0+0" +repage $tempFile 2>&1
        } else {
            # Blur the whole frame cheaply (downscale/upscale), give it a feathered alpha
            # mask covering only the stamp box, then lay it over the original
            $feather = [math]::Max(4, [int]($width * 0.015))
            $null = & magick $tempFile `
                "(" +clone -resize 3% -resize "${width}x${height}!" `
                    "(" -size "${width}x${height}" xc:black -fill white `
                        -draw "rectangle $($width - $boxW),0 $($width - 1),$boxH" -blur "0x$feather" ")" `
                    -alpha off -compose CopyOpacity -composite ")" `
                -compose Over -composite $tempFile 2>&1
        }

        if ($LASTEXITCODE -ne 0) {
            Write-Host "  FAIL  $($image.Name) (stamp $($Stamp.ToLower()) failed)" -ForegroundColor Red
            Remove-Item $tempFile -Force -ErrorAction SilentlyContinue
            $failCount++
            continue
        }
    }

    # ── Step 4: Resize + centre-crop ─────────────────────────────────────────
    $null = & magick $tempFile `
        -resize "${targetSize}^" `
        -gravity Center `
        -extent $targetSize `
        $tempFile 2>&1

    if ($LASTEXITCODE -ne 0) {
        Write-Host "  FAIL  $($image.Name) (resize failed)" -ForegroundColor Red
        Remove-Item $tempFile -Force -ErrorAction SilentlyContinue
        $failCount++
        continue
    }

    # ── Step 5: Convert to WebP ───────────────────────────────────────────────
    $null = & cwebp -q $ImageQuality -alpha_q $AlphaQuality -mt $tempFile -o $outputFile 2>&1

    Remove-Item $tempFile -Force -ErrorAction SilentlyContinue

    if ($LASTEXITCODE -eq 0 -and (Test-Path $outputFile)) {
        $origSize  = $image.Length
        $webpSize  = (Get-Item $outputFile).Length
        $saving    = $origSize - $webpSize
        $savingPct = if ($origSize -gt 0) { [math]::Round(($saving / $origSize) * 100, 1) } else { 0 }
        $savedBytes += $saving

        $sizeLabel = "{0,8} KB → {1,8} KB  ({2,5}%)" -f `
            [math]::Round($origSize / 1KB, 1), `
            [math]::Round($webpSize / 1KB, 1), `
            "$savingPct"

        $color = if ($savingPct -ge 0) { "Green" } else { "Yellow" }
        Write-Host ("  OK    {0} → {1,-25} {2}" -f $image.Name.PadRight(35), $outputName, $sizeLabel) -ForegroundColor $color

        if ($DeleteOriginals) {
            Remove-Item $image.FullName -Force
        }

        $counter++
        $successCount++
    } else {
        Write-Host "  FAIL  $($image.Name) → $outputName" -ForegroundColor Red
        $failCount++
        # Don't increment counter on failure so the number isn't skipped
    }
}

# ── Summary footer ────────────────────────────────────────────────────────────
$totalSavedMB = [math]::Round($savedBytes / 1MB, 2)

Write-Host ""
Write-Host "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━" -ForegroundColor Cyan
Write-Host "  Done!" -ForegroundColor Green
Write-Host "  Converted  : $successCount"
Write-Host "  Skipped    : $skipCount"
Write-Host "  Failed     : $failCount"
Write-Host "  Space saved: $totalSavedMB MB"
Write-Host "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━" -ForegroundColor Cyan
Write-Host ""