# Interactive Monochrome Portfolio Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Recompose the existing `/` route into one accessible monochrome portfolio with seven ordered page sections, persisted Light or Dark theme selection, and persisted Full or Compact density selection.

**Architecture:** Keep records static and typed in `content/portfolio.ts`, keep display and density logic in focused components, and mount one client preference provider in `app/layout.tsx` around both `Nav` and page children. Use the existing page route, local assets, CSS tokens, native controls, and Motion reduced-motion conventions; do not create a second page, API, CMS, database, or runtime dependency.

**Tech Stack:** Next.js 15.5 App Router, React 19, TypeScript 5, Tailwind CSS 4, Motion 12, Lucide, existing shadcn primitives, and `pnpm`.

## Global Constraints

- The page has exactly seven sections in this order: Hero, About, Projects, Experience, Research, Life, Contact.
- The navbar has exactly six destinations: About, Projects, Experience, Research, Life, Contact. Hero uses `#top` only for the logo and back-to-top behavior.
- Theme choices are exactly `light | dark`; no System reset control is required.
- First visit follows `prefers-color-scheme`; a saved Light or Dark choice wins over later system changes.
- Density choices are exactly `full | compact`; Full is the default unless Compact is saved. Both modes use the same records and links.
- Preserve `components/Hero.tsx` in place and use `/gua.webp` as the default portrait source. Keep all existing portrait alternatives and do not delete user-owned images.
- Preserve verified project, research, Life, contact, typography, local asset, and reduced-motion content unless this plan explicitly changes an anchor or presentation.
- Use no new route, runtime dependency, CMS, database, API, remote content source, test framework, type suppression, pointer tracking machinery, or speculative abstraction.
- Use only monochrome surfaces, borders, and text with restrained green for links, active states, focus indicators, selected controls, and small evidence highlights. Do not use amber, neon, gradients, or decorative floating elements.
- Optional links and images are omitted or use a token-based local fallback. Never invent URLs, dates, issue dates, metrics, outcomes, or credentials.
- No commit steps are included because the user did not request commits.

---

## Dependency Waves

### Wave 1: Contract and static data

Task 1 writes the failing redesign contract. Task 2 adds the exact types and approved records consumed by later tasks.

### Wave 2: Theme and preference foundations

Task 3 defines the exact palette, density selectors, and prepaint theme script. Task 4 provides the client provider and controls consumed by the shell and sections.

### Wave 3: Composition and sections

Task 5 mounts the provider in the root layout and wires the exact page order and six-destination navbar. Tasks 6 and 7 adapt all content sections.

### Wave 4: Integration and verification

Task 8 runs the three required commands, diagnostics, and browser QA after Tasks 1 through 7 are complete.

## Task 1: Rewrite the smoke contract

**Files:**
- Modify: `scripts/portfolio-smoke.mjs`

**Interfaces:**
- Consumes: `.next/server/app/index.html` after a successful production build, or a clean checkout where the script must report the missing build prerequisite.
- Produces: deterministic `PASS` and `FAIL` output with process exit status `1` for any failed redesign contract, missing build artifact, or missing required local asset.

- [ ] **Step 1: Guard the build artifact before reading it.** Import `existsSync` from `node:fs` alongside `readFileSync`; check `.next/server/app/index.html` before calling `readFileSync`, print `FAIL: production build artifact missing; run pnpm build before the smoke check`, set `process.exitCode = 1`, and return or exit without an uncaught exception when it is absent.
- [ ] **Step 2: Replace stale section and navigation assertions.** Read the built HTML, locate the first `id="..."` occurrence for `top`, `about`, `projects`, `experience`, `research`, `life`, and `contact`, and assert those seven section IDs occur in that exact order.
- [ ] **Step 3: Add stable section markers.** Assert exactly one each of `data-section="hero"`, `data-section="about"`, `data-section="projects"`, `data-section="experience"`, `data-section="research"`, `data-section="life"`, and `data-section="contact"`.
- [ ] **Step 4: Assert the six navbar destinations.** Require `Projects` with `#projects`, `Experience` with `#experience`, and `#about`, `#research`, `#life`, and `#contact`. Require no `Work` label and no `#work` destination. Do not count `#top` as a navbar destination.
- [ ] **Step 5: Assert preference and About evidence hooks.** Require `data-preference-provider="portfolio"`, `data-theme-control="true"`, `data-density-control="true"`, `data-about-layout="about-with-evidence"`, `data-education-block="true"`, and `data-credentials-block="true"`. Require accessible state attributes on both preference control groups.
- [ ] **Step 6: Preserve verified content checks.** Keep checks for `Tubbu`, `https://tubbuwellness.com`, absence of an invented Tubbu GitHub URL, exactly three `data-featured="true"` records, at least ten `data-archive="true"` rows, both research titles, eleven `data-life="figure"` records, no `coming soon`, text-only skill fallbacks, and all four technology categories.
- [ ] **Step 7: Remove old marquee and dark-only checks.** Assert no `data-marquee-toggle="true"`, no `marquee-track` class, and no `data-stack-direction` contract. Do not require a dark initial root or any dark-only class.
- [ ] **Step 8: Add the Experience contract.** Assert all ten organization names, all exact role dates, both KSEP roles, both TEDxITB roles, `146 committees`, `9 divisions`, `17 subdivisions`, and `440+ registrants`.
- [ ] **Step 9: Add required local asset checks with Node stdlib.** Use `existsSync` against `public${assetPath}` for every required local path referenced by Hero, project records, and Life records: `/gua.webp`; `/tedx.png`, `/tubbu.png`, `/templeos.png`, `/infest.png`, `/dom.png`, `/mjolnir.png`, `/lokasharana.png`, `/tabung.png`, `/blueddit.png`, `/hospitalwebp.webp`, `/voxelizer.png`, `/calculator.png`, `/queens.png`; and `/life/ganesha.webp`, `/life/hmif.webp`, `/life/arak.webp`, `/life/gunung.webp`, `/life/waterfall.webp`, `/life/scenery.webp`, `/life/ring-impact.webp`, `/life/panit-impact.webp`, `/life/ring-ptd.webp`, `/life/aqua.webp`, `/life/tunes.webp`. Research records currently reference no local image paths, so their external source links require no `public/` check. Report each missing path as a named `FAIL` rather than silently accepting a broken `next/image` string path.
- [ ] **Step 10: Prove the intended red state.** If `.next/server/app/index.html` is absent, run `pnpm build` first, then run `node scripts/portfolio-smoke.mjs` and record the expected nonzero failure because the current page lacks `#experience`, the new preference hooks, the renamed Projects navigation, the replacement section markers, and the new required local asset contract. Do not weaken the assertions to pass the old output.

**Expected result:** The smoke script fails against the current implementation for the intended missing redesign behavior and later passes without depending on marquee class names or a dark-only palette.

## Task 2: Extend typed static data

**Files:**
- Modify: `types/types.ts`
- Modify: `content/portfolio.ts`

**Interfaces:**
- Consumes: existing `PortfolioLink`, `WorkItem`, `ResearchItem`, `LifeExperience`, and technology types.
- Produces: `DensityMode`, `ThemeChoice`, `TimelineRole`, `ExperienceGroup`, `EducationItem`, `CredentialItem`, `experienceGroups`, `educationItems`, and `credentialItems`.

- [ ] **Step 1: Add the preference unions.** Add exactly:

```ts
export type DensityMode = "full" | "compact";
export type ThemeChoice = "light" | "dark";
```

- [ ] **Step 2: Add the consumed timeline and About interfaces.** Add exactly:

```ts
export interface TimelineRole {
  title: string;
  dates: string;
}

export interface ExperienceGroup {
  organization: string;
  roles: TimelineRole[];
  summary?: string;
  metrics?: string[];
  links?: PortfolioLink[];
}

export interface EducationItem {
  institution: string;
  program: string;
  dates: string;
  result: string;
}

export interface CredentialItem {
  name: string;
}
```

- [ ] **Step 3: Add exactly ten Experience groups.** Export `experienceGroups: ExperienceGroup[]` with `SPE ITB SC` / `DevOps Engineer` / `Jul 2026-Present`; `Kabinet KM ITB` / `Backend Engineer` / `Jul 2026-Present`; `KSEP ITB` with `Vice Director` / `Apr 2025-May 2026` and `President` / `May 2026-Present`; `ARKAVIDIA` / `Deputy Head of IT` / `May 2026-Present`; `Galva` / `MIS Intern` / `Jun-Aug 2026`; `TEDxITB` with `Frontend Developer` / `Nov 2024-May 2025` and `Director` / `Nov 2025-Jun 2026`; `Aku Masuk ITB 2026` / `Deputy Head of IT` / `Oct 2025-Feb 2026`; `OSKM ITB 2025` / `Backend Developer` / `Aug 2025`; `IMPACT 5.0` / `Project Officer` / `Jan-Jul 2025` with metrics `146 committees`, `9 divisions`, `17 subdivisions`; and `PTD KSEP` / `Head of OH-KM` / `Aug-Sep 2025` with metric `440+ registrants`.
- [ ] **Step 4: Keep Experience links absent.** Do not add links or unsupported summaries to Experience records because the approved spec provides no verified Experience links. Use summaries only when directly supported by current content.
- [ ] **Step 5: Add verified education records.** Export `educationItems: EducationItem[]` containing `Institut Teknologi Bandung`, `B.Eng in Computer Science`, `Aug 2024-Jul 2028 expected`, `GPA 3.69/4.00`, and `SMAK 1 PENABUR Jakarta`, `Natural Sciences`, `Jul 2021-May 2024`, `Grade 91.80/100`.
- [ ] **Step 6: Add verified credential names only.** Export `credentialItems: CredentialItem[]` containing exactly `The Ultimate React Course 2025`, `Responsive Web Design`, and `The Git and GitHub Bootcamp`. Do not add issuer, URL, or date fields.
- [ ] **Step 7: Update only approved anchors and nav labels.** Change capability evidence links from `#work` to `#projects`. Set `navItems` to exactly six records: `About/#about`, `Projects/#projects`, `Experience/#experience`, `Research/#research`, `Life/#life`, and `Contact/#contact`. Keep `#top` only for the logo or back-to-top link.
- [ ] **Step 8: Preserve existing records.** Keep selected work, project archive, research items, Life images, toolbox, technology categories, and verified URLs unchanged.

**Expected result:** All new data is typed and static, the About block has only verified education and credential names, and the navbar has six destinations for the seven page sections.

## Task 3: Define dual-theme and density foundations

**Files:**
- Modify: `app/globals.css`
- Modify: `app/layout.tsx`

**Interfaces:**
- Consumes: `ThemeChoice` and `DensityMode` values from Task 2.
- Produces: CSS variables under `:root` and `[data-theme="dark"]`, `[data-density="full"]` and `[data-density="compact"]` selectors, and a prepaint root theme attribute.

- [ ] **Step 1: Replace dark-only tokens with the exact Light palette.** Define these CSS variables for the default Light theme: background `#f4f4f0`, surface `#ffffff`, elevated `#ecece7`, foreground `#171717`, muted `#626262`, border `rgba(23, 23, 23, 0.14)`, accent `#176b43`, and accent foreground `#ffffff`.
- [ ] **Step 2: Define the exact Dark palette.** Under `[data-theme="dark"]`, define background `#0a0a0a`, surface `#141414`, elevated `#1c1c1c`, foreground `#f2f2ed`, muted `#a3a3a3`, border `rgba(242, 242, 237, 0.14)`, accent `#66d39e`, and accent foreground `#08150f`.
- [ ] **Step 3: Map existing utilities to semantic tokens.** Keep Plus Jakarta Sans for body and utility text and Newsreader for display text. Preserve the shared container, responsive heading scale, readable measure, section spacing, hairline separators, focus ring, contrast handling, and reduced-transparency behavior while replacing hard-coded dark surface and text values with the exact semantic variables.
- [ ] **Step 4: Add density selectors.** Make `[data-density="full"]` the editorial spacing and image treatment and `[data-density="compact"]` the tighter spacing and row treatment. Compact may reduce supporting copy and image prominence but must not remove records or links.
- [ ] **Step 5: Remove marquee CSS.** Delete the marquee track, viewport, keyframes, and pause-only styles. Keep archive disclosure and Life image transitions only where used. Add subtle tactile hover, visible focus, selected, and press feedback using CSS transitions or Motion only.
- [ ] **Step 6: Preserve reduced motion.** Under `prefers-reduced-motion: reduce`, render content immediately, remove nonessential transforms and transitions, disable image movement, and set scrolling to auto. Do not add pointer tracking machinery.
- [ ] **Step 7: Add the prepaint script in `app/layout.tsx`.** Before body content, run an inline script that reads the valid `portfolio-theme` localStorage value, otherwise reads `matchMedia("(prefers-color-scheme: dark)")`, and sets `document.documentElement.dataset.theme` to exactly `light` or `dark`. The script must have no external request and must tolerate storage access failure.
- [ ] **Step 8: Keep root hydration safe.** Make `<html suppressHydrationWarning>` mandatory because the prepaint script sets `data-theme` before React hydration. Keep server HTML without a guessed `data-theme`. Do not mount the provider here yet; Task 5 mounts it around both `Nav` and `{children}`.

**Expected result:** Both exact palettes, density selectors, tactile states, reduced-motion behavior, and no-flash prepaint initialization are available without a new dependency.

## Task 4: Create the shared preference provider and controls

**Files:**
- Create: `components/PortfolioPreferences.tsx`

**Interfaces:**
- Consumes: `DensityMode`, `ThemeChoice`, root `data-theme`, and root `data-density`.
- Produces: `PortfolioPreferencesProvider`, `usePortfolioPreferences`, `ThemeControl`, and `DensityControl`.

- [ ] **Step 1: Define the client context in one file.** Mark the file `"use client"`; define the context value with `theme: ThemeChoice | null`, `density: DensityMode | null`, `setTheme(theme: ThemeChoice): void`, and `setDensity(density: DensityMode): void`.
- [ ] **Step 2: Implement exact-value storage parsing.** Use fixed keys `portfolio-theme` and `portfolio-density`; accept only `light` or `dark` for theme and only `full` or `compact` for density. Treat all other values as absent.
- [ ] **Step 3: Implement hydration sentinels.** Initialize both `theme` and `density` as `null` in the React state. SSR and first hydration render both theme buttons unpressed and both density buttons unpressed so controls do not lie before hydration. The root prepaint script remains the source of the already-painted theme.
- [ ] **Step 4: Resolve state after hydration.** In one effect, read the root `data-theme` attribute and set the exact `ThemeChoice`; read saved density or use `full`, set the root `data-density` attribute, and set the exact `DensityMode`. After this effect, state is never `null`.
- [ ] **Step 5: Persist changes.** `setTheme` must update the root attribute and localStorage with the exact union value. `setDensity` must update the root attribute and localStorage with the exact union value. Guard browser-only APIs.
- [ ] **Step 6: Build accessible controls.** Render Light and Dark native buttons with accessible names and `aria-pressed={theme === value}`. Render Full and Compact native buttons with accessible names and `aria-pressed={density === value}`. Add `data-theme-control="true"` and `data-density-control="true"` to their groups, and preserve focus on selection.
- [ ] **Step 7: Guard hook misuse.** Make `usePortfolioPreferences` throw a concise error when called outside `PortfolioPreferencesProvider`. Do not add a reducer, external store, cookie, URL state, generic preference abstraction, or animation layer.

**Expected result:** Navbar and sections can share safe persisted preferences, and pre-hydration controls never claim a state that React has not resolved.

## Task 5: Recompose root layout, shell, navigation, and page order

**Files:**
- Modify: `app/layout.tsx`
- Modify: `app/page.tsx`
- Modify: `components/Navbar.tsx`
- Modify: `components/ui/resizable-navbar.tsx`

**Interfaces:**
- Consumes: `PortfolioPreferencesProvider`, `ThemeControl`, `DensityControl`, `Experience`, and the six-record `navItems` array.
- Produces: one root provider around Navbar and page content, and one page with exactly seven ordered sections.

- [ ] **Step 1: Mount the provider in `app/layout.tsx`.** Import `PortfolioPreferencesProvider`, render it around both `<Nav />` and `{children}`, and add `data-preference-provider="portfolio"` to its stable wrapper. The provider must be above Navbar because Navbar consumes the hook.
- [ ] **Step 2: Keep `app/page.tsx` presentation-only.** Import `Experience`, do not import or mount `PortfolioPreferencesProvider` there, and render exactly this order inside the existing `main id="main-content" tabIndex={-1}`:

```tsx
<Hero />
<AboutSkills />
<Projects />
<Experience />
<Research />
<LifeExperiences />
<Footer />
```

- [ ] **Step 3: Preserve the skip link.** Keep the skip link before `<Nav />`, target `#main-content`, and retain a visible focus style in both themes.
- [ ] **Step 4: Add shell controls.** Render `ThemeControl` and `DensityControl` in desktop and mobile Navbar layouts. Keep mobile menu Escape handling and close the menu after anchor activation.
- [ ] **Step 5: Create a non-overlapping desktop shell.** Put desktop `ThemeControl` and `DensityControl` in an explicit right-side actions region with a higher stacking layer than the navigation links. Change or constrain the current absolute `NavItems` center region with reduced width, right padding, or an equivalent minimal layout adjustment so it cannot overlay or intercept the actions region. On mobile, place both controls inside the expanded menu or another width-safe region rather than the narrow header row.
- [ ] **Step 6: Update shell colors and tactile states.** In `Navbar.tsx` and `components/ui/resizable-navbar.tsx`, replace dark-only classes with semantic tokens and keep restrained hover, visible focus, selected, and press feedback. Use CSS or Motion transitions only; do not add pointer tracking.
- [ ] **Step 7: Keep navigation counts correct.** Render only the six `navItems` destinations. Keep the logo href at `#top`; it is not a seventh navbar destination and does not create an eighth section.
- [ ] **Step 8: Mark all landmarks.** Ensure each section has its visible heading, `aria-labelledby`, exact section ID, and matching `data-section` marker. Keep Footer as the final `contact` landmark.

**Expected result:** Provider scope is correct, page composition has seven sections, Navbar has six destinations, and the skip link and controls are accessible.

## Task 6: Adapt Hero, About, and Projects

**Files:**
- Modify: `components/Hero.tsx`
- Modify: `components/AboutSkills.tsx`
- Modify: `components/Projects.tsx`
- Modify: `components/ProjectCard.tsx`

**Interfaces:**
- Consumes: `usePortfolioPreferences`, `educationItems`, `credentialItems`, `selectedWork`, `projectArchive`, technology categories, and `#projects`.
- Produces: Hero, About, and Projects content in both density modes with stable smoke markers.

- [ ] **Step 1: Adapt Hero in place.** Change the preferred portrait source to `/gua.webp`, preserve `/me.png` and other alternatives, retain meaningful alt text and priority loading, and keep the existing Motion reduced-motion guard.
- [ ] **Step 2: Update Hero actions.** Change the selected-work href from `#work` to `#projects`. Keep name, thesis, identity, CV link, and clear actions in both modes. Compact may reduce copy and image prominence only.
- [ ] **Step 3: Add Hero states.** Replace dark-only classes with semantic tokens and add restrained hover, focus, and press feedback plus restrained CSS or Motion image movement. Disable nonessential movement under reduced motion.
- [ ] **Step 4: Recompose About evidence.** Keep the current introduction, capabilities, toolbox, GitHub, email, and CV. Set `data-about-layout="about-with-evidence"`; render `educationItems` and `credentialItems` inside About with `data-education-block="true"` and `data-credentials-block="true"`.
- [ ] **Step 5: Remove the toolbox marquee.** Delete `MarqueeStrip`, duplicated lanes, direction state, pause state, pause button, `data-marquee-toggle`, `data-stack-direction`, and `data-stack-row`. Render each category as a static wrapped list; retain `data-skill-fallback="text"` when an icon is absent.
- [ ] **Step 6: Apply density without data branching.** Use the preference hook or `[data-density]` classes to tighten About spacing and copy in Compact while rendering the same capability, toolbox, education, and credential records.
- [ ] **Step 7: Rename Projects anchors.** Change the section and heading IDs from `work` to `projects`, add `data-section="projects"`, preserve exactly three featured wrappers, and keep archive disclosure semantics with `aria-expanded` and `aria-controls`.
- [ ] **Step 8: Keep project records and links identical.** Compact may use scan-friendly rows and Full may use editorial cards, but both modes must consume `selectedWork` and `projectArchive`, omit missing optional links, preserve image alt text and local fallback, and retain external-link security attributes.
- [ ] **Step 9: Add project tactile feedback.** Use restrained border, color, focus, press, and CSS or Motion image-scale movement. Do not add pointer tracking or a dependency; disable nonessential movement for reduced motion.

**Expected result:** The first three sections use the exact theme system, preserve evidence, render verified About records, and contain no marquee or `#work` contract.

## Task 7: Create Experience and adapt Research, Life, and Contact

**Files:**
- Create: `components/Experience.tsx`
- Modify: `components/Research.tsx`
- Modify: `components/LifeExperiences.tsx`
- Modify: `components/Footer.tsx`

**Interfaces:**
- Consumes: `usePortfolioPreferences`, `experienceGroups`, `researchItems`, and `lifeExperiences`.
- Produces: the exact Experience timeline plus density-aware Research, Life, and Contact sections.

- [ ] **Step 1: Create the Experience landmark.** Render `<section id="experience" data-section="experience" aria-labelledby="experience-title">` with one visible `h2` and one `data-experience-group="true"` item for each of the ten groups.
- [ ] **Step 2: Render all nested roles distinctly.** Show organization, each `TimelineRole.title`, and each `TimelineRole.dates`; KSEP ITB and TEDxITB must each show two separate roles with their exact dates. Add `data-experience-role="true"` to each role.
- [ ] **Step 3: Render approved metrics only.** Render metrics only for IMPACT 5.0 and PTD KSEP, preserving `146 committees`, `9 divisions`, `17 subdivisions`, and `440+ registrants`. Render no guessed links or outcomes.
- [ ] **Step 4: Apply Experience density.** Full may show supported summaries and progression context. Compact must show one scan-friendly row per group while retaining every role, date, and approved metric.
- [ ] **Step 5: Preserve Research evidence.** Keep both exact titles, context, problem, method, result, qualifiers, and source links. Keep `data-research-layout="text-only"`, add `data-section="research"`, and use a compact row or disclosure that still retains both records and links.
- [ ] **Step 6: Preserve Life records.** Keep all eleven local Life image records, meaningful alt text, captions, and Full gallery treatment. Add `data-section="life"`; Compact may use caption rows but must retain the same records and images. Do not render placeholders.
- [ ] **Step 7: Remove Life gradients.** Replace any gradient overlay with monochrome token-based overlay or omit it. Keep grayscale treatment, tactile focus states for interactive content, and reduced-motion behavior.
- [ ] **Step 8: Finish Contact.** Render exactly `<footer id="contact" data-section="contact" aria-labelledby="contact-title">` with `id="contact-title"` on its visible `h2`. Keep current-year output and the existing verified email, GitHub, LinkedIn, and CV links, and replace dark-only colors with semantic tokens. Keep it usable in both density modes.
- [ ] **Step 9: Check section resilience.** Keep semantic landmarks, heading hierarchy, contrast, keyboard focus, clean empty states, and no horizontal overflow. Use CSS or Motion only for restrained hover, focus, press, and image movement.

**Expected result:** Experience has exactly ten approved groups, Research and Life preserve their records and evidence, and Contact is the final accessible section.

## Task 8: Integrate and verify

**Files:**
- Verify only the files listed in Tasks 1 through 7.

**Interfaces:**
- Consumes: completed implementation and successful production build output.
- Produces: passing typecheck, build, smoke contract, diagnostics, and browser QA evidence.

- [ ] **Step 1: Run TypeScript verification.** Run `pnpm exec tsc --noEmit`. Expected result: exit code `0` and no type errors or suppression directives.
- [ ] **Step 2: Run production verification.** Run `pnpm build`. Expected result: exit code `0`, the `/` route builds, and required local assets resolve.
- [ ] **Step 3: Run smoke verification.** Run `node scripts/portfolio-smoke.mjs`. Expected result: exit code `0` and every stable section, six-destination navigation, preference, content, Experience, no-marquee, and `existsSync` local asset check reports `PASS`.
- [ ] **Step 4: Run LSP diagnostics.** Check `app/layout.tsx`, `app/page.tsx`, `types/types.ts`, `content/portfolio.ts`, `components/Navbar.tsx`, `components/Hero.tsx`, `components/AboutSkills.tsx`, `components/Projects.tsx`, `components/ProjectCard.tsx`, `components/Research.tsx`, `components/LifeExperiences.tsx`, `components/Footer.tsx`, `components/ui/resizable-navbar.tsx`, `components/Experience.tsx`, and `components/PortfolioPreferences.tsx`. Expected result: zero errors for every modified TypeScript file.
- [ ] **Step 5: Run browser QA at exact viewports.** Use the existing browser workflow at `390x844`, `768x1024`, and `1440x900`, capturing Light and Dark screenshots in Full and Compact. Expected result: readable responsive layout, exact seven-section order, separate Projects and Experience, distinct About education and credentials, preserved Research and Life records, and no horizontal overflow.
- [ ] **Step 6: Verify theme initialization.** With no saved theme, test `prefers-color-scheme: light` and `dark`; confirm the first palette follows the system and no wrong-theme flash appears. Select Light and Dark, reload, change the system preference, and confirm the saved choice wins. Confirm there is no System control.
- [ ] **Step 7: Verify density persistence.** Select Full and Compact, reload each choice, and confirm the choice persists while the same ten Experience groups, project records and links, two research records and links, and eleven Life records and images remain available.
- [ ] **Step 8: Verify keyboard and motion behavior.** Keyboard-test the skip link, six navbar links, logo `#top` link, mobile menu toggle and Escape close, theme controls, density controls, project disclosure, external links, and any Research disclosure. Confirm visible focus and focus retention after preference changes. Enable reduced motion and confirm immediate content, no nonessential movement, no marquee, and no inaccessible content.
- [ ] **Step 9: Run final self-review.** Check every spec area: product direction, visual system, all seven sections, education and credentials, architecture, accessibility, resilience, persistence, reduced motion, and verification. Scan this plan and implementation for unfinished markers, vague requirements, stale `Work/#work`, stale marquee assertions, dark-only assumptions, invented links or metrics, incorrect navbar counts, wrong provider scope, and contradictions. Fix every finding before completion.

**Expected result:** The three required commands, diagnostics, and browser QA pass for one static, accessible, responsive portfolio with no unresolved requirements.

## Completion Boundary

No commit steps are included because the user did not request commits. Do not modify any file outside the exact file set in Tasks 1 through 7.
