# almezi.github.io

A personal website built with Eleventy (11ty) and deployed to GitHub Pages.

## Overview

This repository contains the source for a static site generated with Eleventy. Content lives under `src/` and is compiled to the `_site/` directory for deployment. A GitHub Actions workflow builds the site on each push to `master` and publishes it to GitHub Pages.

## Tech Stack

- Language/runtime: Node.js (CommonJS)
- Static site generator: [@11ty/eleventy](https://www.11ty.dev/)
- Package manager: npm
- Hosting/CI: GitHub Pages + GitHub Actions

## Requirements

- Node.js 20.x (matches CI configuration)
- npm 10.x (bundled with Node 20)

> Tip: Use `nvm` or `fnm` to match the Node version locally.

## Installation

```bash
# Install dependencies
npm ci
```

If you prefer a clean install without a lockfile check:
```bash
npm install
```

## Usage

- Start a local dev server with live reload:
  ```bash
  npm run start
  ```
  By default Eleventy serves at http://localhost:8080/ (the port may differ if already in use).

- Build the site for production (outputs to `_site/`):
  ```bash
  npm run build
  ```

## Scripts

Defined in `package.json`:

- `start`: `eleventy --serve` — run Eleventy in watch/serve mode
- `build`: `eleventy` — generate the static site into `_site/`
- `test`: placeholder (currently exits with an error)

## Project Structure

```
.
├─ src/                # Site content (Markdown, templates, assets)
├─ _site/              # Build output (generated)
├─ .github/workflows/  # CI workflow for GitHub Pages
├─ package.json        # Project metadata and scripts
├─ package-lock.json   # Exact dependency versions
└─ README.md           # This file
```

Notes:
- The file `src/index.md` references a layout `base.njk`. By Eleventy convention, layouts are typically stored under `src/_includes/`. If that layout is not present in the repo, add it so pages can render correctly. [TODO]
- No custom `.eleventy.js` configuration file was found; Eleventy defaults are assumed. [TODO if customization is needed]

## Environment Variables

Common Eleventy env usage:
- `ELEVENTY_ENV` — often used to distinguish `development` vs `production` in templates.

This project does not declare required env vars in code. If templates or shortcodes expect additional variables, document them here. [TODO]

## Tests

There are currently no automated tests. The `npm test` script is a placeholder.
- To add tests, consider using a tool like `vitest` or `jest` for any custom logic, and link-checkers or HTML validators for generated output. [TODO]

## Deployment

Deployment is handled by GitHub Actions to GitHub Pages.
- Workflow: `.github/workflows/deploy.yml`
- Trigger: push to `master` or manual dispatch
- Build job:
  - Sets up Node 20
  - Runs `npm ci`
  - Runs `npm run build`
  - Uploads `_site/` as the Pages artifact
- Deploy job:
  - Publishes the artifact to GitHub Pages environment

To deploy locally (for testing only), you can serve the contents of `_site/` with any static file server, e.g.:
```bash
npx http-server _site
```

## License

This project is licensed under the ISC license (see `package.json`).

## Acknowledgements

- Built with [Eleventy](https://www.11ty.dev/)
- Hosted on [GitHub Pages](https://pages.github.com/)
