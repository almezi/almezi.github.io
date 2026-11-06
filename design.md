# Design System Specification: Cupertino Engineering & Responsive Web Portfolio
**Document**: `design.md`  
**Target Profile**: Aulia Mei Azizi — Senior SDET & QA Systems Architect  
**Scope**: Unified Design System & Component Library for both **Mobile (iOS HIG / Mobile Web)** and **Desktop Web Portfolio** implementations.

---

## 1. Visual Identity & Design Principles

1. **Clarity & Content-First (HIG & Engineering Precision)**:
   - Text is crisp and legible across all scales with strict typographical hierarchy.
   - Distinctive typography using high-contrast sans-serif system fonts (`SF Pro`, `Inter`, system sans-serif) with balanced tracking.
   - Clean, functional iconography paired with high-intent semantic badges and verification indicators.

2. **Depth & Inset Grouping**:
   - Mobile interfaces leverage iOS-style Inset Grouped cards (`rounded-2xl` / `16px–20px` radius).
   - Desktop interfaces leverage structured, spacious card grids with 1px border strokes (`#E2E8F0` / `#E5EDF5`) and subtle elevation (`shadow-[0_2px_8px_rgba(0,0,0,0.03)]`), eliminating heavy dropped shadows.

3. **Technical Precision & Trust**:
   - Primary accent color is **Cupertino Teal / Emerald (`#008272`)**, communicating test pass confidence, reliability, and engineering rigor.
   - Semantic status indicators (`#16A34A` / `#22C55E`) communicate live availability, automation pass rate, and verified credential status.

---

## 2. Design Tokens

### 2.1 Color Palette

| Token Name | Hex Code | Tailwind / CSS Var | Purpose / Usage |
| :--- | :--- | :--- | :--- |
| **`color-brand-primary`** | `#008272` | `bg-[#008272]`, `text-[#008272]` | Primary CTA button, active icons, card top accent borders |
| **`color-brand-hover`** | `#00685B` | `hover:bg-[#00685B]` | Active/pressed state for primary actions |
| **`color-brand-subtle`** | `#E6F5F2` | `bg-[#E6F5F2]` | Chip background, badge containers, metric highlight cards |
| **`color-surface-base`** | `#F8F9FD` | `bg-[#F8F9FD]` / `bg-[#F8F9FA]` | Global canvas background across mobile and desktop |
| **`color-surface-card`** | `#FFFFFF` | `bg-white` | Inset grouped cards, navigation headers, dialogs |
| **`color-surface-secondary`**| `#F1F5F9`| `bg-slate-100` | Secondary pill buttons, skill tags, code containers |
| **`color-border-subtle`** | `#E2E8F0` | `border-slate-200` | Hairline card borders, divider lines, tab bar borders |
| **`color-text-primary`** | `#0F172A` | `text-slate-900` | Headings, hero display typography, project names |
| **`color-text-secondary`** | `#475569` | `text-slate-600` | Body copy, job responsibilities, project summaries |
| **`color-text-muted`** | `#94A3B8` | `text-slate-400` | Eyebrow numbers, metadata dates, location labels |
| **`color-status-success`** | `#16A34A` | `text-emerald-600` | "Open to opportunities", verified checkmark, test status |

---

### 2.2 Typography Scale

System Stack: `-apple-system, BlinkMacSystemFont, "SF Pro Display", "SF Pro Text", "Inter", sans-serif`.

| Element | Mobile Size | Desktop Size | Weight | Tracking | Example Class |
| :--- | :--- | :--- | :--- | :--- | :--- |
| **Display / Hero H1** | `32px` (`2rem`) | `48px` (`3rem`) | Bold (`700`) | `-0.03em` | `text-3xl md:text-5xl font-bold tracking-tight text-slate-900` |
| **Section Eyebrow** | `11px` (`0.6875rem`) | `12px` (`0.75rem`) | SemiBold (`600`) | `+0.08em` | `text-[11px] md:text-xs font-semibold tracking-wider uppercase text-[#008272]` |
| **Section Title (H2)**| `22px` (`1.375rem`)| `30px` (`1.875rem`)| Bold (`700`) | `-0.02em` | `text-[22px] md:text-3xl font-bold text-slate-900` |
| **Card Title (H3)** | `17px` (`1.0625rem`)| `20px` (`1.25rem`) | SemiBold (`600`) | `-0.01em` | `text-[17px] md:text-xl font-semibold text-slate-900` |
| **Body (Regular)** | `15px` (`0.9375rem`)| `16px` (`1rem`) | Regular (`400`) | `0em` | `text-[15px] md:text-base font-normal text-slate-600 leading-relaxed` |
| **Body (Small / Meta)**| `13px` (`0.8125rem`)| `14px` (`0.875rem`)| Regular (`400`) | `0em` | `text-[13px] md:text-sm font-normal text-slate-500` |
| **Tags / Badges** | `11px`–`12px` | `12px` (`0.75rem`) | Medium (`500`) | `0.01em` | `text-xs font-medium text-slate-700` |

---

### 2.3 Layout, Breakpoints & Spacing

- **Desktop Container**: Centered layout constrained to `max-w-5xl mx-auto px-6 py-12`.
- **Mobile Container**: Full-bleed portrait layout constrained to `max-w-md mx-auto px-4 py-6` with safe-area padding `pb-24`.
- **Grid Layouts**:
  - **Featured Projects**: Mobile = 1 column stacked; Desktop = 2 columns (`grid grid-cols-1 md:grid-cols-2 gap-6`).
  - **Skills Categories**: Mobile = 1 column stacked; Desktop = 2×2 grid (`grid grid-cols-1 md:grid-cols-2 gap-6`).
  - **Education**: Mobile = 1 column stacked; Desktop = 3 columns (`grid grid-cols-1 md:grid-cols-3 gap-6`).
  - **Hero**: Mobile = stacked (avatar on top or right); Desktop = 2-column flex/grid with text on left, avatar illustration on right.

---

## 3. Navigation Architecture

The design system supports three distinct navigation patterns depending on device and deployment:

### 3.1 Pattern A: Desktop Web Navigation Bar
```html
<header class="sticky top-0 z-50 bg-white/90 backdrop-blur-md border-b border-slate-200/80">
  <div class="max-w-5xl mx-auto px-6 h-16 flex items-center justify-between">
    <div class="flex items-center gap-3">
      <a href="#top" class="text-base font-bold text-slate-900 tracking-tight">Aulia Mei Azizi</a>
      <span class="inline-flex items-center px-2 py-0.5 rounded-full text-xs font-semibold bg-emerald-50 text-emerald-700 border border-emerald-200">
        Senior SDET
      </span>
    </div>
    <nav class="flex items-center gap-6">
      <a href="#about" class="text-sm font-medium text-slate-600 hover:text-slate-900 transition-colors">About</a>
      <a href="#projects" class="text-sm font-medium text-slate-600 hover:text-slate-900 transition-colors">Projects</a>
      <a href="#skills" class="text-sm font-medium text-slate-600 hover:text-slate-900 transition-colors">Skills</a>
      <a href="#experience" class="text-sm font-medium text-slate-600 hover:text-slate-900 transition-colors">Experience</a>
      <a href="#education" class="text-sm font-medium text-slate-600 hover:text-slate-900 transition-colors">Education</a>
      <a href="mailto:contact@example.com" class="px-4 py-2 rounded-full text-xs font-semibold bg-[#008272] text-white hover:bg-[#00685B] shadow-sm transition-all active:scale-95">
        Get in touch
      </a>
    </nav>
  </div>
</header>
```

### 3.2 Pattern B: Mobile Web Sticky Header
```html
<header class="sticky top-0 z-50 flex items-center justify-between px-4 py-3 bg-white/90 backdrop-blur-md border-b border-slate-200/80">
  <div class="flex items-center space-x-2">
    <div class="w-7 h-7 rounded-full bg-[#E6F5F2] text-[#008272] flex items-center justify-center font-bold text-xs border border-[#008272]/20">
      AA
    </div>
    <span class="font-bold text-sm text-slate-900">Aulia Mei Azizi</span>
    <span class="text-[10px] font-semibold px-1.5 py-0.5 rounded bg-emerald-50 text-emerald-700 border border-emerald-200">
      SDET
    </span>
  </div>
  <div class="flex items-center gap-2">
    <a href="#about" class="text-xs text-slate-600 hover:text-slate-900 font-medium">About</a>
    <a href="#projects" class="text-xs text-slate-600 hover:text-slate-900 font-medium">Projects</a>
    <a href="mailto:contact@example.com" class="px-2.5 py-1 rounded-full text-[11px] font-semibold bg-[#008272] text-white">
      Contact
    </a>
  </div>
</header>
```

### 3.3 Pattern C: Cupertino Native Mobile Tab Bar (iOS Ergonomic)
```html
<nav class="fixed bottom-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-lg border-t border-slate-200/90 max-w-md mx-auto">
  <div class="grid grid-cols-5 h-14">
    <a href="#overview" class="flex flex-col items-center justify-center text-[#008272]">
      <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20"><path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z"/></svg>
      <span class="text-[10px] font-medium mt-0.5">Overview</span>
    </a>
    <a href="#projects" class="flex flex-col items-center justify-center text-slate-500 hover:text-slate-800">
      <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"/></svg>
      <span class="text-[10px] font-medium mt-0.5">Projects</span>
    </a>
    <a href="#skills" class="flex flex-col items-center justify-center text-slate-500 hover:text-slate-800">
      <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"/></svg>
      <span class="text-[10px] font-medium mt-0.5">Skills</span>
    </a>
    <a href="#experience" class="flex flex-col items-center justify-center text-slate-500 hover:text-slate-800">
      <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/></svg>
      <span class="text-[10px] font-medium mt-0.5">Career</span>
    </a>
    <a href="mailto:contact@example.com" class="flex flex-col items-center justify-center text-slate-500 hover:text-slate-800">
      <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/></svg>
      <span class="text-[10px] font-medium mt-0.5">Contact</span>
    </a>
  </div>
</nav>
```

---

## 4. Key Component Patterns & Specifications

### 4.1 Hero Section (Responsive Multi-Column vs Stacked)
- **Desktop**: 2-column layout with left-aligned biographical content and right-aligned circular profile avatar framed by a mint accent ring (`w-48 h-48 md:w-56 md:h-56`).
- **Mobile**: Centered or left-aligned column with compact avatar and action pill grid.

```html
<!-- Responsive Hero Container -->
<section class="flex flex-col md:flex-row md:items-center justify-between gap-8 py-8 md:py-16">
  <div class="flex-1 space-y-4">
    <div class="text-[11px] md:text-xs font-semibold tracking-wider uppercase text-[#008272]">
      Quality Engineering • Test Automation • Open to opportunities
    </div>
    <h1 class="text-3xl md:text-5xl font-bold tracking-tight text-slate-900 leading-tight">
      Aulia Mei Azizi
    </h1>
    <div class="text-sm md:text-base font-semibold text-slate-700">
      Senior SDET <span class="text-slate-400 font-normal">• Yogyakarta, DIY</span>
    </div>
    <p class="text-base text-slate-600 max-w-xl leading-relaxed">
      I build reliable automation systems that help product teams ship with confidence.
    </p>
    <div class="flex flex-wrap items-center gap-3 pt-2">
      <a href="mailto:..." class="px-5 py-2.5 rounded-full bg-[#008272] text-white text-xs md:text-sm font-semibold hover:bg-[#00685B] shadow-sm transition-all">Email me</a>
      <a href="https://linkedin.com" target="_blank" class="px-5 py-2.5 rounded-full border border-slate-200 text-slate-700 text-xs md:text-sm font-semibold hover:bg-slate-50 transition-all">LinkedIn</a>
      <a href="https://github.com" target="_blank" class="px-5 py-2.5 rounded-full border border-slate-200 text-slate-700 text-xs md:text-sm font-semibold hover:bg-slate-50 transition-all">GitHub</a>
      <a href="#" class="px-5 py-2.5 rounded-full border border-slate-200 text-slate-700 text-xs md:text-sm font-semibold hover:bg-slate-50 transition-all">Download résumé</a>
    </div>
  </div>
  <div class="flex-shrink-0 flex justify-center md:justify-end">
    <div class="relative w-40 h-40 md:w-52 md:h-52 rounded-full p-1.5 ring-4 ring-[#008272]/20 bg-emerald-50/50">
      <img src="avatar.jpg" alt="Aulia Mei Azizi" class="w-full h-full rounded-full object-cover shadow-sm">
    </div>
  </div>
</section>
```

### 4.2 Featured Projects (Proof of Work) Card
- Highlights top teal accent border (`border-t-4 border-t-[#008272]`), numeric identifier badge, tech tag pills, and outbound link with arrow.

```html
<div class="bg-white rounded-2xl border border-slate-200 border-t-4 border-t-[#008272] p-6 shadow-[0_2px_8px_rgba(0,0,0,0.03)] flex flex-col justify-between">
  <div>
    <div class="flex items-center justify-between mb-3">
      <span class="text-xs font-bold text-[#008272]">01</span>
      <span class="text-xs text-slate-400">Web UI</span>
    </div>
    <h3 class="text-lg font-bold text-slate-900 leading-snug">
      Playwright Java Automation — The Jakarta Post
    </h3>
    <p class="text-sm text-slate-600 mt-2 leading-relaxed">
      Cross-browser web UI automation suite built with Java, Playwright, and the Page Object Model.
    </p>
    <div class="flex flex-wrap gap-2 mt-4">
      <span class="px-2.5 py-1 rounded-md text-xs font-medium bg-slate-100 text-slate-700">Java</span>
      <span class="px-2.5 py-1 rounded-md text-xs font-medium bg-slate-100 text-slate-700">Playwright</span>
      <span class="px-2.5 py-1 rounded-md text-xs font-medium bg-slate-100 text-slate-700">Page Object Model</span>
    </div>
  </div>
  <div class="pt-6">
    <a href="#" class="inline-flex items-center gap-1.5 text-xs font-semibold text-[#008272] hover:underline">
      View repository ↗
    </a>
  </div>
</div>
```

### 4.3 Skills Grid & Pill Badges
```html
<div class="bg-white rounded-2xl border border-slate-200 p-6 shadow-sm space-y-3">
  <h3 class="text-base font-semibold text-slate-900">Framework design & automation</h3>
  <div class="flex flex-wrap gap-2">
    <span class="px-3 py-1 rounded-full text-xs font-medium bg-[#E6F5F2] text-[#00685B] border border-[#008272]/20">Playwright</span>
    <span class="px-3 py-1 rounded-full text-xs font-medium bg-[#E6F5F2] text-[#00685B] border border-[#008272]/20">Selenium</span>
    <span class="px-3 py-1 rounded-full text-xs font-medium bg-[#E6F5F2] text-[#00685B] border border-[#008272]/20">RestAssured</span>
    <span class="px-3 py-1 rounded-full text-xs font-medium bg-slate-100 text-slate-700">Java</span>
    <span class="px-3 py-1 rounded-full text-xs font-medium bg-slate-100 text-slate-700">JavaScript</span>
    <span class="px-3 py-1 rounded-full text-xs font-medium bg-slate-100 text-slate-700">Internal automation frameworks</span>
  </div>
</div>
```

### 4.4 Career & Experience Timeline
- Desktop format uses right-aligned date and location metadata for balanced horizontal layout.
- Mobile format gracefully wraps date and location underneath company name.

```html
<div class="space-y-4">
  <div class="flex flex-col md:flex-row md:items-baseline justify-between gap-1">
    <div class="flex items-center gap-2">
      <span class="text-base md:text-lg font-bold text-slate-900">SDET</span>
      <a href="https://blibli.com" class="text-sm md:text-base font-semibold text-[#008272] hover:underline">Blibli.com</a>
    </div>
    <div class="text-xs md:text-sm text-slate-500">
      Jan 2022 – Oct 2025 • 3 yrs 10 mos <span class="hidden md:inline">• Jakarta Metropolitan Area · Hybrid</span>
    </div>
  </div>
  <ul class="space-y-2 text-sm text-slate-600 list-disc list-outside pl-5 leading-relaxed">
    <li>Designed API and web UI automation frameworks for sprint features and releases, reaching <strong>60%+ squad automation coverage</strong>.</li>
    <li>Built end-to-end automated suites across multiple integrated services for trade-in and B2G e-commerce platforms.</li>
    <li>Integrated automated suites into CI/CD via Jenkins and source control workflows, enforcing deployment quality gates.</li>
  </ul>
</div>
```

### 4.5 Education Grid (3-Column Desktop / Stacked Mobile)
```html
<div class="grid grid-cols-1 md:grid-cols-3 gap-6">
  <div class="bg-white rounded-2xl border border-slate-200 p-5 shadow-sm space-y-2">
    <h4 class="text-base font-bold text-slate-900">BINUS ONLINE</h4>
    <p class="text-xs text-slate-600">Bachelor's degree, Information Systems</p>
    <p class="text-xs text-slate-400">2020 – 2022 • Grade 3.6</p>
  </div>
  <div class="bg-white rounded-2xl border border-slate-200 p-5 shadow-sm space-y-2">
    <h4 class="text-base font-bold text-slate-900">Telkom University</h4>
    <p class="text-xs text-slate-600">Associate's degree, Management Information Systems</p>
    <p class="text-xs text-slate-400">2015 – 2018 • Grade 3.4</p>
  </div>
  <div class="bg-white rounded-2xl border border-slate-200 p-5 shadow-sm space-y-2">
    <h4 class="text-base font-bold text-slate-900">Vocational High School 3 Mataram</h4>
    <p class="text-xs text-slate-600">High School Diploma</p>
    <p class="text-xs text-slate-400">2012 – 2015 • Grade —</p>
  </div>
</div>
```

---

## 5. Responsive & Ergonomic Standards

1. **Touch Targets (Mobile)**: All interactive buttons, tabs, and outbound repository links must maintain minimum **44×44 pt** touch bounding boxes.
2. **Safe Area Insets**: Honored with `env(safe-area-inset-top)` and `env(safe-area-inset-bottom)` for iOS devices; bottom page padding is set to `pb-24` on mobile tab layouts to avoid overlap with fixed navigation bars.
3. **Desktop Viewport Standards**: Fixed max container width (`max-w-5xl` / `1024px–1140px`) centered horizontally, ensuring comfortable reading line length (60–80 characters per line) and 60fps scrolling performance.
4. **Performance**: Native CSS backdrop filters (`backdrop-blur-md`) with solid background fallbacks (`bg-white/90`) to prevent frame drops on mobile WebKit and Chrome.
