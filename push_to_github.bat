@echo off
echo Adding all files...
git add .

echo Committing changes...
git commit -m "Fix color contrast issues and improve chat widget integration - Updated text colors for better readability - Fixed chat widget loading and error handling - Removed exclamation point from chat button"

echo Pushing to GitHub...
git push origin main

echo Done!
pause
