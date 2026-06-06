@echo off
REM Batch File - Save as optimize-images.bat
echo Starting WebP optimization...

cwebp -q 70 kitchen2.jpg -resize 400 0 -o kitchen2-sm.webp
echo Created small version (400px)

cwebp -q 70 kitchen2.jpg -resize 800 0 -o kitchen2-md.webp
echo Created medium version (800px)

cwebp -q 70 kitchen2.jpg -resize 1200 0 -o kitchen2-lg.webp
echo Created large version (1200px)

echo Optimization complete!
dir kitchen2-*.webp
pause