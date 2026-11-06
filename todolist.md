# Astro Migration Todo List

## Phase 1: Initialize Astro - COMPLETE ✅
- [x] **Task 1**: Initialize Astro project (`npm create astro@latest . -- --template minimal --no-typescript`)
- [x] **Task 2**: Update package.json scripts (replace Eleventy with Astro)
- [x] **Task 3**: Configure astro.config.mjs (outDir: "_site")
- [x] **Task 4**: Verify assets copied (src/assets/style.css, images, CV PDF)

## Phase 2: Migrate Templates & Content - COMPLETE ✅
- [x] **Task 5**: Create `src/layouts/Base.astro` (from base.njk)
- [x] **Task 6**: Create `src/pages/index.astro` (from index.njk)
- [x] **Task 7**: Create `src/pages/about.astro` (from about.md)
- [x] **Task 8**: Create `src/data/projects.ts` (static fallback for featured projects)
- [x] **Task 9**: Wire projects data into index.astro (render project cards)

## Phase 3: Dynamic GitHub Projects (Optional Enhancement) - COMPLETE ✅
- [x] **Task 10**: Create `src/lib/github.ts` (fetch repo data from GitHub API)
- [x] **Task 11**: Integrate dynamic fetch into index.astro (build-time, with static fallback)
- [ ] **Task 12**: Add GITHUB_TOKEN to GitHub Actions secrets (optional, manual step)

## Phase 4: CI/CD & Deployment - COMPLETE ✅
- [x] **Task 13**: Update `.github/workflows/deploy.yml` for Astro build
- [ ] **Task 14**: Test build locally (`npm install && npm run build`)
- [ ] **Task 15**: Test dev server (`npm run start`)
- [ ] **Task 16**: Verify GitHub Actions deployment works

## Phase 5: Polish
- [ ] **Task 17**: Update README.md with new commands
- [ ] **Task 18**: Clean up old Eleventy files (.eleventy.js, etc.)
