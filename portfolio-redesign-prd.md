# Portfolio Site Redesign — PRD

**Site:** https://almezi.github.io/
**Owner:** Aulia Mei Azizi
**Goal:** Position for Senior SDET / QA Engineer (IC) roles
**Hosting:** GitHub Pages (static site)

---

## 1. Problem statement

The current site reads as a mid-level QA resume: flat skill tags, generic bullets with no metrics, no portfolio/project evidence, and a buzzword-heavy About section. It needs to read as senior: impact-driven, project-backed, architecture-level language.

## 2. Goals

- Add proof of work (linked projects) so recruiters/hiring managers can verify skill claims, not just read them.
- Rewrite experience bullets to lead with measurable impact.
- Group skills by capability (framework design, CI/CD, data) instead of a flat tag dump.
- Keep the site a single static page that's trivial to hand-edit as content changes — no build step, no framework, no CMS.

## 3. Non-goals

- No redesign of visual theme/branding (colors, fonts) — structure and content only, unless you want that separately.
- No backend, no contact form, no analytics dashboard.
- No multi-page site — stays a single scrolling page.

## 4. Content architecture (edit order = page order)

| # | Section | Status | Priority |
|---|---|---|---|
| 1 | Header (name, title, photo, links, résumé link) | Update | High |
| 2 | About | Rewrite | High |
| 3 | Featured projects | **New** | High |
| 4 | Skills (grouped) | Restructure | High |
| 5 | Experience | Rewrite bullets | High |
| 6 | Education | Keep as-is | Low |

## 5. Section-by-section requirements

### 5.1 Header
- Keep: name, title, location, photo.
- Add: a "Résumé (PDF)" link alongside Email / LinkedIn / GitHub.
- Update title from "Software Engineer In Test" → "Senior SDET" (or whatever title you're actively targeting) if that matches your job search framing.

### 5.2 About
- Replace buzzword paragraph ("robust," "scalable," "leveraging technology") with 2–3 concrete sentences:
  1. What you actually do day to day (e.g., build test automation frameworks, embed quality gates in CI/CD).
  2. One thing you're specifically known for or specialize in.
  3. Optional: one headline result/number.
- Constraint: no sentence should be replaceable by search-and-replace with a competitor's name — it should describe *you* specifically.

### 5.3 Featured projects (new)
- 2 cards confirmed from CV, real repos, ready to use as-is:
  1. **Playwright Java Automation — The Jakarta Post** ([repo](https://github.com/almezi/pw_java_thejakartapostcom)) — Java, Playwright, Page Object Model, cross-browser web UI suite.
  2. **Playwright Java API Automation — JSONPlaceholder** ([repo](https://github.com/almezi/pw_java_jsonplaceholder.typicode.com)) — Java, Playwright APIRequestContext, REST API/schema/CRUD validation.
- No third project needed — two real, linkable repos is enough; don't pad with a placeholder card.
- Tukar Tambah / SiPlah stay as Experience bullets only (internal, not public code) — do not create project cards for these.
- Data source: keep this as a simple array/list in the page's data section (see §7) so adding a project is a copy-paste, not a layout edit.

### 5.4 Skills (grouped)
- Replace flat tag list with 3–5 named groups, e.g.:
  - **Framework design & automation** — Playwright, Selenium, RestAssured, Badak (internal framework)
  - **CI/CD & release gating** — Jenkins, GitLab CI, deployment gateway criteria
  - **API & data** — Postman, SQL, MongoDB, Kafka
  - **Test management** — Jira, TestLink, TDS
- Each group = one array in the data section, so new skills are appended, not re-styled.

### 5.5 Experience
- Confirmed real metric from CV: **60%+ squad-level automation coverage** (Java + Playwright, API and web UI) at Blibli — use this as the headline number for the SDET role.
- Bullets to use (CV-sourced, ready to drop in, no placeholders needed):
  - Designed API and web UI automation frameworks for sprint features and releases, reaching 60%+ automation coverage at squad level.
  - Built end-to-end automated suites across multiple integrated services for complex new features, coordinating with developers on testable code paths and trigger conditions.
  - Integrated automated suites into CI/CD via Jenkins and Stash SCM, enforcing deployment gateway criteria so releases only ship when test thresholds are met.
- One line still vague and worth tightening if possible: "directly reducing production defects" has no number attached. Optional to quantify (e.g. defect rate before/after); fine to ship without it since the coverage % already carries the section.
- Employment: CV confirms Blibli role ended **October 2025** — site copy should reflect this as a completed role, not a current one (e.g. past tense, and update the header/about framing to read as actively job-searching rather than currently employed there).
- Domains confirmed: Tukar Tambah (trade-in marketplace) and SiPlah (B2G e-commerce catalog) — name both explicitly, as CV does.

### 5.6 Education
- No content changes. Structural only if needed for new layout.

## 6. Non-functional requirements

- **Static only** — plain HTML/CSS(+ minimal JS), no build tooling, deployable as-is via GitHub Pages.
- **Editable by hand** — content that changes often (projects, skills, bullets) must live in one clearly-marked data block (JS array or JSON-like object at the top of the file, or a separate `data.json` fetched at load) so updates don't require touching layout/CSS.
- **Mobile-responsive** — test at ~375px width minimum.
- **No broken links** — every project card and header link must resolve; broken/placeholder links block ship.
- **Accessible** — sufficient contrast, alt text on the profile image, semantic headings (h1 for name, h2 for section titles).

## 7. Recommended file structure for easy editing

```
/
├── index.html          # layout/markup only, minimal
├── style.css           # visual styling
├── data.js             # single source of truth: projects[], skillGroups[], experience[]
└── assets/
    └── images/
```

Rationale: keeping `data.js` separate means future edits (new project, new bullet, updated metric) are pure data edits — no risk of breaking layout while updating content.

Example shape for `data.js`:

```js
const projects = [
  { name: "Jakarta Post test suite", stack: "Java, Playwright, Cucumber, CI/CD", url: "https://github.com/almezi/pw_java_thejakartapostcom" },
  { name: "IFG Hackerrank project", stack: "Katalon, Kafka", url: "" }
];

const skillGroups = [
  { title: "Framework design & automation", items: ["Playwright", "Selenium", "RestAssured", "Badak"] },
  { title: "CI/CD & release gating", items: ["Jenkins", "GitLab CI"] }
];
```

## 8. Open items before ship

- [x] Employment status confirmed: Blibli role ended Oct 2025 — site should read as a completed role, framed for active job search.
- [x] Real metric secured: 60%+ squad-level automation coverage — use as headline number.
- [x] Tukar Tambah / SiPlah confirmed as experience bullets only, not project cards (internal, no public repo).
- [x] Résumé PDF exists (Aulia_Mei_Azizi_CV.pdf) — link directly from header.
- [x] Two real, linkable projects confirmed (Jakarta Post suite, JSONPlaceholder API suite) — no placeholder projects needed.
- [ ] Confirm final job title framing (Senior SDET vs QA Engineer vs SDET) — CV header currently says "SDET," site draft in §5.1 was proposing "Senior SDET." Decide which to use consistently across CV and site.
- [ ] Optional: quantify "directly reducing production defects" bullet with a number if one exists; otherwise ship as-is since coverage % already carries the section.
- [ ] Add SQL/NoSQL and Stash SCM to the grouped skills section (present in CV, missing from earlier mockup draft).

## 9. Success criteria

- A recruiter can find linked, verifiable project evidence within 10 seconds of landing on the page.
- Every experience bullet contains a number or a concrete named outcome.
- Adding a new project or skill requires editing only `data.js`.
