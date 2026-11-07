# almezi.github.io

Personal portfolio of Aulia Mei Azizi, Senior SDET. Static site built with [Astro](https://astro.build) and deployed to GitHub Pages.

## Stack

- Astro 5, static output (`outDir: _site`)
- Plain CSS design system in `src/assets/style.css`
- Featured projects curated in `src/data/projects.ts`

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
│   ├── data/            # featured projects (source of truth)
│   ├── layouts/         # Base.astro page shell: head, nav, footer, tab bar
│   └── pages/
│       └── index.astro
├── astro.config.mjs
└── package.json
```

## Deployment

`.github/workflows/deploy.yml` builds with Astro and publishes `_site/` to GitHub Pages on every push to `master`. The repository's Pages source is set to GitHub Actions.

## Design reference

`design.md` documents the design tokens, typography scale, and component rules.
