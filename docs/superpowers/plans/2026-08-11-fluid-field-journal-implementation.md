# Fluid Field Journal Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use `superpowers:subagent-driven-development` (recommended) or `superpowers:executing-plans` to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Restyle the existing portfolio as a quieter, Apple-inspired editorial experience while preserving all content, links, data attributes, anchors, and interactions.

**Architecture:** `app/globals.css` remains the Tailwind v4 token and utility source; it establishes the spacing, type, material, and accessibility language. Existing components then consume those shared rules with surgical class and Motion-transition changes. No new components, dependencies, routes, data, or content-model changes are needed.

**Tech Stack:** Next.js 15, React 19, Tailwind CSS v4, Motion 12, TypeScript 5, existing Node smoke script.

## Global Constraints

- Do not edit `content/portfolio.ts`, `types/types.ts`, or public assets.
- Keep all section IDs: `top`, `about`, `work`, `research`, `life`, `contact`, and `main-content`.
- Preserve all existing actions: navigation anchors, mobile navigation close/Escape handling, CV downloads, external links, archive toggle, marquee pause toggle, and life-gallery caption reveal.
- Preserve the smoke-test data attributes and contracts: `data-featured`, `data-archive`, `data-life`, `data-about-layout`, `data-research-layout`, `data-marquee-toggle`, `data-stack-row`, `data-stack-direction`, and `data-skill-fallback`.
- Preserve keyboard focus, the skip link, section labels, and `prefers-reduced-motion`. Add contrast and transparency fallbacks without affecting normal rendering.
- Use no new dependencies. Use `pnpm build`, `pnpm exec tsc --noEmit`, and `node scripts/portfolio-smoke.mjs` for verification.
- Do not commit unless the user explicitly requests it.

---

## File Structure

| File | Responsibility |
| --- | --- |
| `app/globals.css` | Design tokens, global typography, layout cadence, material and accessibility fallbacks. |
| `app/page.tsx` | Make the skip-link target programmatically focusable. |
| `components/ui/button.tsx` | Shared press, hover, and focus response. |
| `components/ui/card.tsx` | Shared card density, material, and focus-within treatment. |
| `components/ui/badge.tsx` | Shared compact metadata presentation. |
| `components/ui/resizable-navbar.tsx` | Translucent scroll-aware desktop and mobile navigation material. |
| `components/Hero.tsx` | Editorial hero composition, portrait frame, coordinated entrance. |
| `components/AboutSkills.tsx` | About/capability rhythm and marquee control density. |
| `components/Projects.tsx` | Featured-work and archive presentation. |
| `components/ProjectCard.tsx` | Project-card hierarchy and image treatment. |
| `components/Research.tsx` | Text-only research reading layout. |
| `components/LifeExperiences.tsx` | Gallery framing and accessible caption contrast. |
| `components/Footer.tsx` | Contact-section closing rhythm. |

## Task 1: Establish the regression baseline

**Files:**
- Read: `package.json`, `scripts/portfolio-smoke.mjs`

- [ ] **Step 1: Build the current application.**

  Run: `pnpm build`

  Expected: exit code 0.

- [ ] **Step 2: Run the existing content-contract test.**

  Run: `node scripts/portfolio-smoke.mjs`

  Expected: every check passes, including three featured projects, the archive, eleven life photos, the marquee toggle, and text-only research.

- [ ] **Step 3: Capture baseline desktop and mobile screenshots.**

  Start the existing development server with `pnpm dev`. Capture `/` at 1440×900 and 375×812 before editing. Keep the files outside the repository unless the user asks to version visual baselines.

  Expected: two reference images for later visual comparison.

## Task 2: Refresh global tokens, rhythm, and accessibility

**Files:**
- Modify: `app/globals.css`
- Modify: `app/page.tsx`

**Consumes:** existing Tailwind v4 `@theme inline` tokens.

**Produces:** global rules used by every visual task below.

- [ ] **Step 1: Write the failing accessibility condition.**

  Confirm that the skip link in `app/layout.tsx` targets `#main-content`, while `app/page.tsx` currently contains:

  ```tsx
  <main id="main-content">
  ```

  The target is not programmatically focusable, so this does not complete keyboard skip navigation.

- [ ] **Step 2: Make the skip-link target focusable without a visible outline.**

  Change `app/page.tsx` to:

  ```tsx
  <main id="main-content" tabIndex={-1} className="outline-none">
  ```

- [ ] **Step 3: Extend the existing CSS tokens and utilities.**

  In `app/globals.css`, retain the six archival colors and add only shared values that express the approved direction:

  ```css
  --leading-display: 1.05;
  --tracking-eyebrow: 0.2em;
  ```

  Update `.section-block` to use more deliberate vertical rhythm, update `.section-title` to use `leading-[var(--leading-display)]`, and update `.section-eyebrow` to use `tracking-[var(--tracking-eyebrow)]`.

  Add one reusable separator:

  ```css
  .section-rule {
    border-top: 1px solid var(--color-border);
  }
  ```

  Add preference fallbacks without changing normal rendering:

  ```css
  @media (prefers-reduced-transparency: reduce) {
    .glass-surface {
      backdrop-filter: none;
      background-color: var(--color-archive-ink);
    }
  }

  @media (prefers-contrast: more) {
    .glass-surface {
      border-color: var(--color-paper-mist);
    }
  }
  ```

- [ ] **Step 4: Verify the green state.**

  Run: `pnpm exec tsc --noEmit && pnpm build && node scripts/portfolio-smoke.mjs`

  Expected: all commands exit 0.

## Task 3: Align shared primitives with the material system

**Files:**
- Modify: `components/ui/button.tsx`
- Modify: `components/ui/card.tsx`
- Modify: `components/ui/badge.tsx`

**Consumes:** Task 2 tokens and `.glass-surface` fallback.

**Produces:** a consistent shared interaction surface for the sections.

- [ ] **Step 1: Update button interaction classes.**

  Replace the blanket `transition-all` base class with property-specific, motion-safe feedback and add press response:

  ```tsx
  "... transition-colors motion-safe:transition-transform motion-safe:active:scale-[0.98] ..."
  ```

  Keep all variants and public component props unchanged.

- [ ] **Step 2: Remove the card vertical-padding conflict.**

  `Card` currently supplies `py-6` while `ProjectCard` supplies `p-5` inside `CardContent`. Remove base `py-6` from `Card` so individual consumers own their vertical padding:

  ```tsx
  "bg-card text-card-foreground flex flex-col gap-6 rounded-xl border shadow-sm"
  ```

  Add `transition-colors motion-safe:transition-transform` and `focus-within:border-paper-mist/25` to the card base.

- [ ] **Step 3: Refine badge density without changing variants.**

  Keep the `default`, `secondary`, `destructive`, and `outline` variant names. Add `border-paper-mist/10` to the base and replace `transition-[color,box-shadow]` with `transition-colors`.

- [ ] **Step 4: Verify shared state behavior.**

  Run: `pnpm build && node scripts/portfolio-smoke.mjs`

  Expected: build and smoke test pass. In the browser, keyboard focus remains clearly teal, and button press feedback is immediate.

## Task 4: Refine the translucent navigation

**Files:**
- Modify: `components/ui/resizable-navbar.tsx`
- Modify: `components/Navbar.tsx`

**Consumes:** Tasks 2–3.

**Produces:** desktop and mobile navigation with the same glass material and preserved controls.

- [ ] **Step 1: Update the scroll-state material without animating blur or color.**

  Keep `visible` driven by `scrollY > 100`. Add `glass-surface` to `NavBody` and `MobileNav`; derive the material through conditional classes rather than animating `backdropFilter` or `backgroundColor` with Motion:

  ```tsx
  visible
    ? "backdrop-blur-xl bg-archive-ink/[0.88]"
    : "backdrop-blur-md bg-archive-ink/[0.65]"
  ```

  Keep the existing inset top-edge shadow, using teal only in the scrolled state. Motion may animate only opacity or transform; material state changes immediately.

- [ ] **Step 2: Make navigation feedback immediate.**

  Add `motion-safe:active:scale-[0.98]` to desktop anchor links, mobile links, and `MobileNavToggle`. Keep `aria-expanded`, `aria-label`, on-click close behavior, and Escape close behavior unchanged.

- [ ] **Step 3: Preserve layout contracts.**

  Do not change `NavbarLogo`, the `navItems` mapping, desktop/mobile breakpoints, link targets, or the shared `layoutId="hovered"` highlight.

- [ ] **Step 4: Verify navigation.**

  Run: `pnpm build && node scripts/portfolio-smoke.mjs`.

  Manual check: desktop blur changes only after scroll; mobile menu opens, closes on link click and Escape; all navigation links remain keyboard reachable.

## Task 5: Recompose the hero without changing its content

**Files:**
- Modify: `components/Hero.tsx`

**Consumes:** Tasks 2–4.

- [ ] **Step 1: Remove the empty decorative eyebrow element.**

  Delete the empty `motion.p` at lines 36–42. It contains no content and only adds dead vertical space.

- [ ] **Step 2: Tune typography and layout.**

  Keep the current name, paragraphs, CTAs, and portrait source. Apply `leading-[var(--leading-display)]` to the `h1`, constrain the text column with `max-w-3xl`, use `lg:gap-14`, and keep the existing 1.2fr/0.8fr grid. Remove the `order-2 lg:order-1` and `order-1 lg:order-2` classes so DOM order also presents the reading content before the portrait on mobile.

- [ ] **Step 3: Refine the portrait frame.**

  Keep the circular image, image alt text, and `/gua.png`. Reduce the large-screen size to `lg:h-72 lg:w-72`, retain the teal border, and reduce the glow opacity to `bg-oxidized-teal/15`.

- [ ] **Step 4: Keep motion coordinated and accessible.**

  Preserve the existing staggered entrance and `useReducedMotion` branch. Do not add an infinite animation or any extra content.

- [ ] **Step 5: Verify.**

  Run: `pnpm build && node scripts/portfolio-smoke.mjs`.

  Manual check: content is first on mobile, portrait is second; both CTAs work; no Build/Study/Life hero facet links appear.

## Task 6: Improve About and capability-marquee cadence

**Files:**
- Modify: `components/AboutSkills.tsx`

**Consumes:** Tasks 2–3.

- [ ] **Step 1: Add controlled visual separation.**

  Keep `data-about-layout="merged"` and both columns. Add `section-rule` and `pt-6` only around the capabilities list, not around the section title or existing copy.

- [ ] **Step 2: Apply the shared text and button treatment.**

  Increase bio paragraph leading with `leading-relaxed`, retain every sentence and every GitHub/Email/CV link, and let the shared outline button styles control hover/focus behavior.

- [ ] **Step 3: Make skill pills more deliberate.**

  Change only the pill classes to:

  ```tsx
  "inline-flex items-center gap-1.5 rounded-full border border-paper-mist/10 bg-archive-ink/50 px-3 py-1.5 text-xs text-paper-mist/80"
  ```

  Retain the doubled lane data, pause state, `aria-hidden` duplicate behavior, and every `data-*` attribute.

- [ ] **Step 4: Verify.**

  Run: `pnpm build && node scripts/portfolio-smoke.mjs`.

  Manual check: the pause/resume control changes state; reduced motion leaves the lanes static and horizontally scrollable.

## Task 7: Improve featured work and archive presentation

**Files:**
- Modify: `components/Projects.tsx`
- Modify: `components/ProjectCard.tsx`

**Consumes:** Tasks 2–3.

- [ ] **Step 1: Tune the featured-work header and grid.**

  Keep the text and 1/2/3-column breakpoints. Increase the section heading bottom margin to `mb-12 md:mb-16` and retain every `data-featured="true"` wrapper.

- [ ] **Step 2: Refine `ProjectCard` hierarchy.**

  Keep every field, link, badge, and image behavior. Use `rounded-xl` for the media frame; keep the image hover scale at `1.03`; use the shared card base with no duplicate base vertical padding.

- [ ] **Step 3: Refine the archive trigger and rows.**

  Keep `aria-expanded`, `aria-controls`, `aria-hidden`, `archive-panel`, and every `data-archive="true"` item. Use `rounded-xl`, `border-paper-mist/10`, and a `bg-slate-field/80` trigger; retain the existing CSS grid-row accordion rather than adding a library or a new animation system.

- [ ] **Step 4: Verify.**

  Run: `pnpm build && node scripts/portfolio-smoke.mjs`.

  Manual check: all three featured cards render, archive opens and closes, and project links retain their existing target/rel behavior.

## Task 8: Refine the text-only research reading layout

**Files:**
- Modify: `components/Research.tsx`

**Consumes:** Tasks 2–3.

- [ ] **Step 1: Adjust article density.**

  Keep `data-research-layout="text-only"`, the current title/body/link content, and no images. Change article class spacing to `rounded-xl border border-paper-mist/10 bg-slate-field p-6 sm:p-8 md:p-10`.

- [ ] **Step 2: Normalize labels and metadata.**

  Keep Problem and Method terms exactly. Apply `section-eyebrow` to each `dt`; preserve the badge list and source links.

- [ ] **Step 3: Verify.**

  Run: `pnpm build && node scripts/portfolio-smoke.mjs`.

  Manual check: research remains text-only and supports a comfortable reading measure on desktop and mobile.

## Task 9: Refine the life-gallery framing

**Files:**
- Modify: `components/LifeExperiences.tsx`
- Modify: `app/globals.css`

**Consumes:** Tasks 2–3.

- [ ] **Step 1: Adjust the gallery rhythm.**

  In `app/globals.css`, change the masonry gap and item spacing from 0.75rem/1rem to 1rem/1.25rem at desktop. Preserve two columns on mobile and three at 768px.

- [ ] **Step 2: Keep accessible visual feedback.**

  Preserve the existing hover and `:focus-within` selectors. Under `prefers-reduced-motion`, explicitly set `.life-collage-image { transform: none; }` so the global short-duration fallback never leaves a partial image scale.

- [ ] **Step 3: Refine figure framing only.**

  Keep all eleven `data-life="figure"` figures, image source/alt text, and captions. Change figure rounding to `rounded-xl`; retain the gradient overlay and caption structure.

- [ ] **Step 4: Verify.**

  Run: `pnpm build && node scripts/portfolio-smoke.mjs`.

  Manual check: all 11 images render; hover reveals legible captions; reduced motion disables the scale effect. Do not claim keyboard caption focus behavior because each figure contains no focusable child.

## Task 10: Give the footer a calmer closing rhythm

**Files:**
- Modify: `components/Footer.tsx`

**Consumes:** Tasks 2–3.

- [ ] **Step 1: Increase closing space without changing content.**

  Retain the title, copy, email, GitHub, LinkedIn, CV, copyright, section ID, and link attributes. Change the inner padding to `py-20 md:py-28`.

- [ ] **Step 2: Reuse shared interaction language.**

  Add `motion-safe:active:scale-[0.98]` and `motion-safe:transition-colors` to contact links. Retain current icon sizes and link labels.

- [ ] **Step 3: Verify.**

  Run: `pnpm build && node scripts/portfolio-smoke.mjs`.

  Manual check: every contact link remains visible and functional at desktop and mobile widths.

## Task 11: Validate the complete redesign

**Files:**
- Inspect: all modified files
- Run: TypeScript, production build, smoke script, browser screenshots

- [ ] **Step 1: Run static diagnostics.**

  Run: `pnpm exec tsc --noEmit`

  Expected: exit code 0.

  Run OpenCode `lsp_diagnostics` against every edited `.tsx` file and `app/globals.css`.

  Expected: zero new errors; if CSS diagnostics are unavailable, record that limitation and rely on the successful production build.

- [ ] **Step 2: Run the production build and smoke test.**

  Run: `pnpm build && node scripts/portfolio-smoke.mjs`

  Expected: exit code 0 and every smoke check passes.

- [ ] **Step 3: Capture final screenshots.**

  Capture `/` at 1440×900 and 375×812. Check hierarchy, navigation material, mobile navigation, card density, archive opening, marquee pausing, life caption reveal, and footer links.

- [ ] **Step 4: Exercise accessibility preferences.**

  In browser emulation, enable `prefers-reduced-motion`, `prefers-reduced-transparency`, and `prefers-contrast: more`. Confirm motion becomes static/opacity-only, glass becomes solid, focus rings remain visible, and no text becomes low-contrast.

- [ ] **Step 5: Run visual QA.**

  Use the `visual-qa` skill to capture the final rendered screenshots and obtain both required read-only review passes. Address any blocking findings before declaring the redesign complete.

## Plan Self-Review

- **Spec coverage:** Tasks 2–10 cover the spec's layout, typography, materials, motion, component treatment, and accessibility requirements. Task 11 covers build, smoke, visual QA, and preference-mode verification.
- **Scope:** no task modifies content, adds a dependency, changes section order, or changes any existing interaction contract.
- **Placeholder scan:** no TODO/TBD markers or unspecified test steps remain.
- **Type consistency:** the plan changes only JSX classes, CSS rules, and an existing `<main>` attribute; it adds no interfaces, functions, or data-model APIs.
