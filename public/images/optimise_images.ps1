# PowerShell Script - Save as optimize-images.ps1
$inputFile = "chuck-e-electrical-victoria-frontdesk2.webp"
$qualities = @(80, 80, 80) # Quality for sm, md, lg
$widths = @(400, 800, 1200)
$suffixes = @("sm", "md", "lg")

Write-Host "Starting WebP optimization..." -ForegroundColor Green

for ($i = 0; $i -lt $widths.Length; $i++) {
    $outputFile = "chuck-e-electrical-victoria-frontdesk2-$($suffixes[$i]).webp"
    Write-Host "Creating $outputFile at width $($widths[$i])px" -ForegroundColor Yellow
    cwebp -q $qualities[$i] $inputFile -resize $widths[$i] 0 -o $outputFile
}

Write-Host "Optimization complete! Files created:" -ForegroundColor Green
Get-ChildItem chuck-e-electrical-victoria-frontdesk2-*.webp | Select-Object Name, Length
# SIG # Begin signature block
# MIIFiwYJKoZIhvcNAQcCoIIFfDCCBXgCAQExCzAJBgUrDgMCGgUAMGkGCisGAQQB
# gjcCAQSgWzBZMDQGCisGAQQBgjcCAR4wJgIDAQAABBAfzDtgWUsITrck0sYpfvNR
# AgEAAgEAAgEAAgEAAgEAMCEwCQYFKw4DAhoFAAQU3PUHipXo6GlWE9Pt/KNVhOeE
# WLigggMcMIIDGDCCAgCgAwIBAgIQOe3e5dKRU65Fhkyod5WA+zANBgkqhkiG9w0B
# AQsFADAkMSIwIAYDVQQDDBlQb3dlclNoZWxsIFNjcmlwdCBTaWduaW5nMB4XDTI1
# MDkxMjA2MzgzMloXDTI2MDkxMjA2NTgzMlowJDEiMCAGA1UEAwwZUG93ZXJTaGVs
# bCBTY3JpcHQgU2lnbmluZzCCASIwDQYJKoZIhvcNAQEBBQADggEPADCCAQoCggEB
# APKQyrybOb6jD9+bGJuAELf6F8/nOjIRQ6cejNSbO9VfelELnZlZlpICc4ZL3aqP
# LexTzDkws1Lj94E97aWU8ER78PqHsmTn00RFu+GjIC3Ks5lQwRzHG8GufHntxajd
# Id5DML8XfPK8Kufg6KF7hNtTiHlq4YnEuzEN4BEh1Xh5Johbfxey1gp8D5f6d1s/
# S5KNuZvV+8VLZrjLJK+Lcmt/rOf14nwZdpZ+Pcpamgx+Z4MwinUuSUve4dI+LpYw
# XjyB9+ANhHwfpnjIUcNkABbFLwnubutF+96Esee2t+nbzSI40x8RH3Ot5+qL9h6A
# QIUlG8G/o56W24m7AVQCDEUCAwEAAaNGMEQwDgYDVR0PAQH/BAQDAgeAMBMGA1Ud
# JQQMMAoGCCsGAQUFBwMDMB0GA1UdDgQWBBRo5cmLazCxkH0cwyBxdMy1+EvUKjAN
# BgkqhkiG9w0BAQsFAAOCAQEA2idKh6zE7IInDRklGVs0YDrfpJrvsFeBXJAJDnT7
# /6xPy/eFWyBUd38YuYc7H+mAkRgpgWizfVs23shCdH6Red/z6FqlJS55exLz2puo
# xKko6I0VSAwckLcLMaeux3MS5OuGK8/ps4wc+8TJfXXEFmVzHsDbAcIZYA9nvSWu
# wJ5y1HxyXUkRl52QW+sT5lstnY1GvyJfHNONdQM97IpZbZ2XWNSAwJP57Y+hBgjI
# kadvnrdToHlop135uTX5IoXyK/GUzI84OSpONDLDmBte8cUqg5fXfBCYWcgXT+p5
# eh+o9BOlj+KA6JrrgoAWEcwZ74Pp+pLqXcoScHUVpZDR6DGCAdkwggHVAgEBMDgw
# JDEiMCAGA1UEAwwZUG93ZXJTaGVsbCBTY3JpcHQgU2lnbmluZwIQOe3e5dKRU65F
# hkyod5WA+zAJBgUrDgMCGgUAoHgwGAYKKwYBBAGCNwIBDDEKMAigAoAAoQKAADAZ
# BgkqhkiG9w0BCQMxDAYKKwYBBAGCNwIBBDAcBgorBgEEAYI3AgELMQ4wDAYKKwYB
# BAGCNwIBFTAjBgkqhkiG9w0BCQQxFgQUhsmu2PxZ31JcTUkslhlm800QW3QwDQYJ
# KoZIhvcNAQEBBQAEggEAlUGkff3jEQKnDgxXV3O9rL4CTDnlKKsUS0q9kKGOa1GX
# gxPsmSZZ9oUvb0Nb/OOdrROsLiafoOKfpo2NktIwAfGJ+hUJycimP2ONt6t362Cv
# ps8ONfBBZEyETGhx7rn6TCa5QC0JGOuNIa0TRy6d9tE7dqf1xzNp5vwMBubc09Oc
# UMyYSaeopFeHVN9GtjTcLI+4L/xclakVeP0XUedlb+ATE0RUHFReK//OcK5fLgje
# cMHFrDdGrjSGpGWUtQ23RlNauqynMTFHLPiy7BdyzksADifuX2fDZ3WCub4s95dj
# 8//LcBsMAZov0ifMBF7FzlMQH2KvFj3AiRZKs5dFXA==
# SIG # End signature block
