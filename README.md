# almezi.github.io

Personal portfolio of Aulia Mei Azizi, Senior SDET. Static site built with [Astro](https://astro.build) and deployed to GitHub Pages.

## Stack

- Astro 5, static output (`outDir: _site`)
- Plain CSS design system in `src/assets/style.css`
- Featured projects fetched from the GitHub API at build time, with static fallback

## Requirements

- Node.js 18.17.1+ (CI uses Node 20)
- npm

## Commands

| Command | Action |
| :-- | :-- |
| `npm install` | Install dependencies |
| `npm run start` | Start dev server at `http://localhost:4321` |
| `npm run build` | Build production site to `./_site/` |
| `npm run preview` | Preview the production build locally |

## Project structure

```text
/
├── src/
│   ├── assets/          # CSS, images, CV PDF (bundled and optimized)
│   ├── data/            # static project list, fallback content
│   ├── layouts/         # Base.astro page shell: head, nav, footer, tab bar
│   ├── lib/             # GitHub API fetch helper
│   └── pages/
│       ├── index.astro
│       └── about.astro
├── astro.config.mjs
└── package.json
```

## Deployment

`.github/workflows/deploy.yml` builds with Astro and publishes `_site/` to GitHub Pages on every push to `master`. The repository's Pages source is set to GitHub Actions.

Optional: set a `GITHUB_TOKEN` repository secret to raise the GitHub API rate limit for the build-time project fetch. Without it the site falls back to the static list in `src/data/projects.ts`.

## Design reference

`design.md` documents the design tokens, typography scale, and component rules.
