git add .
if %0=="" (
  git commit
) else (
  git commit -m "%0"
)
gh pr create