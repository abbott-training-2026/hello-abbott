# Contributing to hello-abbott

This repository is used on the Abbott Git and GitHub course. Changes follow
the pull request workflow taught in Chapter 4:

1. Branch off `main` (`git switch -c my-change`). Never commit to `main` directly.
2. Make one focused change per branch, with a clear commit message.
3. Push the branch and open a pull request. Describe what changed and how to test it.
4. A reviewer reads the diff and approves or requests changes. Fix review
   comments on the same branch.
5. Merge only when the review is approved and the CI check (once added in
   Chapter 6) is green. Use "Squash and merge".

Never commit credentials. Local secrets belong in a `.env` file, which is
ignored (see `.gitignore` and `example.env`).
