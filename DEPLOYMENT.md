# Deployment Runbook (GitHub Pages)

This project is deployed to GitHub Pages using a GitHub Actions workflow.

## How deployment works

- `next.config.js` uses `output: 'export'` for static export.
- The workflow `.github/workflows/deploy-github-pages.yml` runs on pushes to `main`.
- In CI, it runs:
  - `npm ci`
  - `npm run build`
- The static output directory `out/` is uploaded and deployed to GitHub Pages.

## Local workflow while editing

1. Start local dev server:
   - `npm run dev`
2. Make changes and verify locally.
3. Optional pre-push check:
   - `npm run build`

## Publish changes online

1. Commit your changes.
2. Push to `main`.
3. Wait for **Deploy to GitHub Pages** in GitHub Actions to succeed.
4. Refresh the website (hard refresh if cache is stale).

## Important notes

- `npm run start` is only for running a local production server after build.
- `npm run start` does **not** publish to GitHub Pages.
- Online updates happen only after push + successful GitHub Actions deploy.
