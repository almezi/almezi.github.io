# About section opens with concrete copy (hero tagline appears once on the page)

Written against: commit `1e23835` (HEAD of `feature/move-to-astro`). The working tree also carries uncommitted carousel and featured-projects changes; neither touches the lines this plan modifies.

## Evidence chain

- Surface: `src/pages/index.astro` → route `/` → `#about` section ("About Me")
- Problem: The sentence "I build reliable automation systems that help product teams ship with confidence." is rendered twice on the same page — once as the hero summary (`src/pages/index.astro:42`) and again as the first paragraph of the About section (`src/pages/index.astro:57`). The About section therefore opens with a repeated tagline instead of the concrete copy the content spec calls for.
- Design evidence: `design.md` §4.1 documents that sentence as hero content (it appears in the hero component spec only). `portfolio-redesign-prd.md` §5.2 requires the About section to open with 2–3 concrete, person-specific sentences (what you do day to day; what you're known for; a headline result). The current About section contains the duplicated tagline plus one concrete paragraph ("At Blibli.com, I helped my squad reach 60%+ automation coverage…").
- Owner: `src/pages/index.astro` (owns all section content on this route)
- Scope and affected surfaces: The About section of `/` only. The hero paragraph, all other sections, and the separate `/about` route are out of scope.
- Uncertainty: none — the correction is a deletion; the hero copy is explicitly documented to stay.

## Design decision

Delete the duplicated tagline paragraph from the About section so the section reads: eyebrow → "About Me" heading → the concrete Blibli.com coverage paragraph. This resolves the root problem (verbatim content duplication on one surface) without inventing new copy: the remaining paragraph already satisfies the concrete-copy requirement, and the hero keeps its documented tagline.

## Reuse

- No new primitive is required. The surviving paragraph is styled by the existing `.content section > p` rule in `src/assets/style.css` (secondary text color, 15/16px, max-width 36rem) — the same rule that styles it today.
- Exemplar: the hero's `.hero-summary` paragraph in `src/pages/index.astro` remains the documented home of this sentence (`design.md` §4.1).

## Changes

1. `src/pages/index.astro`
   - Change: Inside `<section id="about" aria-labelledby="about-title">`, delete the entire line `<p>I build reliable automation systems that help product teams ship with confidence.</p>` (currently line 57). The section body then starts with `<p>At Blibli.com, I helped my squad reach <strong>60%+ automation coverage</strong> …</p>`.
   - Preserve: The hero paragraph `<p class="hero-summary">I build reliable automation systems …</p>` (line 42) unchanged — it is the documented home of the sentence. Preserve the section's eyebrow, heading, `id`, and `aria-labelledby`; no markup restructuring.
   - Verify: On `/`, the sentence appears exactly once (hero). The About section shows heading followed directly by the Blibli.com paragraph. `#about` anchor navigation from the desktop nav and the mobile tab bar still lands on the section.

## Scope

- Inherit: none — single-page copy deletion; no tokens, components, or shared styles change.
- Verify: `/` at both 375px and ≥768px; `#about` anchor links in `Base.astro` nav/tab bar (section height shrinks by one paragraph — `scroll-margin-top` behavior is unaffected).
- Exclude: the `/about` route (`src/pages/about.astro` — separate surface with its own copy); hero copy; all other sections; any rewrite or expansion of About copy (that is a content task outside this plan).

## Validation

- Product: A recruiter reading the page encounters the positioning tagline once (hero) and finds About beginning with the specific, metric-backed paragraph.
- Interface: Load `/` at 375px and 1280px; use the "About" nav link and the mobile tab bar's Overview tab to reach the section; confirm spacing looks intentional (heading → paragraph) with no orphaned whitespace.
- System: Confirm no styling workaround was added — the surviving paragraph must rely on the existing `.content section > p` rule; `git diff` should show exactly one deleted line.
- Repository: `npm run build` → completes with no errors; `grep -c "I build reliable automation systems" src/pages/index.astro` → `1`.

## Stop conditions

- Stop if the sentence exists a third time elsewhere on the route (re-audit the surface rather than fixing only one instance).
- Stop if the About section has been restructured or new About copy has been authored since this plan was written — the deletion may then conflict with newer content decisions.
- Stop if section ownership moves out of `src/pages/index.astro` (e.g., sections are extracted into components).

## Design documentation

- None. The change aligns the implementation with existing `design.md` §4.1 and PRD §5.2; no system rule, token, or component contract changes, so there is nothing to record back into the design docs.
