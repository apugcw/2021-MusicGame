@ echo off
git add .
if "%1"=="" (
  git commit
) else (
  git commit -m %1
)
gh pr create