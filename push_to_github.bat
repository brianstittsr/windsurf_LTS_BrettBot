@echo off
echo Initializing git repository...
git init

echo Adding all files...
git add .

echo Committing files...
git commit -m "Initial commit: LTS BrettBot Next.js application with integrated AnythingLLM chat widget"

echo Adding remote origin...
git remote add origin https://github.com/brianstittsr/windsurf_LTS_BrettBot.git

echo Setting main branch...
git branch -M main

echo Pushing to GitHub...
git push -u origin main

echo Done!
pause
