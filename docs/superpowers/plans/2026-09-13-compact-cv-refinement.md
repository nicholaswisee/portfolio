# Compact CV Refinement Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Preserve the existing editorial portfolio at `/` while adding a centered, compact CV presentation backed by the same typed records.

**Architecture:** Keep one Next.js route and the existing `PortfolioPreferencesProvider` as the density source. Section components branch on `density`, while `content/portfolio.ts` remains the only content source and `Navbar.tsx` filters the shared `navItems` for Compact instead of defining another navigation list.

**Tech Stack:** Next.js 15.5, React 19, TypeScript, Tailwind CSS v4, Motion, existing Lucide and Radix primitives, pnpm scripts.

## Global Constraints

- Use `/me.png` in both presentations as a rounded rectangle, never a circle.
- Keep Compact centered and fluid, with a wide-screen readable measure of approximately 760 to 840px, and keep Full on the existing wide editorial container.
- Remove `capabilityGroups`, education, credentials, and toolbox from About globally; keep only the introduction and the shared categorized technology stack.
- Full technology categories use moving lanes with a clearly labeled pause control, stop when paused, honor reduced motion, and remain usable without movement.
- Compact technology categories are static, dense wrapped text with no marquee or pause-dependent interaction.
- Keep Full featured projects unchanged in content and editorial role. Make the archive borderless and minimal in both modes.
- Compact renders every selected and archive project as a concise row with name, category or role, outcome, and only links that exist.
- Keep all ten approved experience groups, exact role dates, nested KSEP ITB and TEDxITB progressions, approved metrics, and a short description per group. Neutral intentional descriptions are allowed when source context is insufficient.
- Render Research as title, one brief verified description, Repository link when present, and Read or Paper link when present. Omit verbose fields, badges, figures, and absent links.
- Full retains the existing Life photo presentation. Compact renders no Life section, empty space, or Life navigation link.
- Preserve themes, accessibility semantics, keyboard focus, reduced motion, shared static data, one route, local assets, and existing dependencies. Add no dependency, route, API, CMS, database, or remote content source.

---

### Task 1: Replace the smoke contract first and prove it red

**Files:**
- Modify: `scripts/portfolio-smoke.mjs`

**Interfaces:**
- Consumes: The built Full HTML at `.next/server/app/index.html` and local asset paths under `public/`.
- Produces: Smoke assertions for the approved default Full contract, with Compact-only behavior left to the browser sanity check in Task 4.

- [ ] **Step 1: Replace stale About and stack assertions.**

  Remove assertions requiring `data-about-layout="about-with-evidence"`, education, capability groups, credentials, absent marquee markers, and absent stack-direction markers. Add assertions that the built default presentation has no `data-capability-group`, `data-education-block`, `data-credentials-block`, or `data-toolbox`; includes all four `data-stack` categories; includes a labeled pause control and moving-lane marker; includes concise research descriptions without `Context`, `Problem`, `Method`, `Result`, or `Qualifier` blocks; and includes `/me.png` as the portrait asset.

- [ ] **Step 2: Update the project, experience, research, and asset checks.**

  Keep the exact three `data-featured="true"` check, archive row count, all ten experience groups and approved dates and metrics, both research titles, eleven Life figures, and required project and Life assets. Add checks for an experience description marker on each group and for the `/me.png` file. Keep the existing preference, pressed-state, section-order, focus-label, and no-`#work` checks.

- [ ] **Step 3: Run the changed smoke contract against the current build.**

  Run `pnpm build && node scripts/portfolio-smoke.mjs`.

  Expected: the command reaches the smoke script and exits nonzero because the current implementation still uses `/gua.webp`, renders the removed About evidence, and lacks the new Full moving-lane, pause, research-summary, and experience-description markers. Do not weaken the new assertions to make this pass.

---

### Task 2: Add verified descriptions and compact navigation and container behavior

**Files:**
- Modify: `content/portfolio.ts`
- Modify: `types/types.ts`
- Modify: `components/Navbar.tsx`
- Modify: `app/globals.css`

**Interfaces:**
- Consumes: `DensityMode` and `usePortfolioPreferences()` from `components/PortfolioPreferences.tsx`, plus the existing `navItems`, `experienceGroups`, `researchItems`, and `techStackCategories` records.
- Produces: `ExperienceGroup.summary` populated for all ten groups, `ResearchItem.summary` populated with one verified brief description per record, and a shared navigation array filtered to exclude only Life when `density === "compact"`. Compact `.site-container` styling must cap the layout at `52.5rem` while preserving safe horizontal padding.

- [ ] **Step 1: Make the shared records match the approved data contract.**

  Add a required `summary: string` field to `ResearchItem` and populate each summary by combining only its existing context, problem, method, result, and qualifier. Populate `summary` on all ten `experienceGroups` with short factual descriptions, using neutral wording where the verified record does not establish an outcome. Remove the `CapabilityGroup`, education, credential, and toolbox imports and exports because About no longer consumes those records; retain `techStackCategories`, all project records, all research source links, all Life records, and all approved dates and metrics.

- [ ] **Step 2: Filter the existing navigation from density state.**

  In `Nav`, read `density` from `usePortfolioPreferences()` and derive `visibleNavItems` from `navItems.filter((item) => density !== "compact" || item.name !== "Life")`. Pass that same derived array to both desktop `NavItems` and the mobile menu. Do not create a second list or duplicate labels.

- [ ] **Step 3: Add the compact measure without changing Full.**

  Keep `.site-container` fluid with its current horizontal padding and add a Compact-only rule under `[data-density="compact"]` that sets `max-width: 52.5rem` and preserves `width: 100%` with `box-sizing: border-box`. Keep Full’s `max-w-7xl` behavior and ensure the rule cannot create horizontal overflow.

- [ ] **Step 4: Re-run the red smoke check after the data and shell changes.**

  Run `pnpm build && node scripts/portfolio-smoke.mjs`.

  Expected: it remains nonzero, but failures are limited to presentation markers and `/me.png` usage that Task 3 has not implemented yet.

---

### Task 3: Implement the Full and Compact section presentations

**Files:**
- Modify: `components/Hero.tsx`
- Modify: `components/AboutSkills.tsx`
- Modify: `components/Projects.tsx`
- Modify: `components/Experience.tsx`
- Modify: `components/Research.tsx`
- Modify: `components/LifeExperiences.tsx`
- Modify: `app/page.tsx`
- Modify: `app/globals.css`

**Interfaces:**
- Consumes: `density` from `usePortfolioPreferences()`, shared records from `content/portfolio.ts`, and the `summary` fields created in Task 2.
- Produces: One accessible `/` composition where Full keeps the editorial hierarchy and Life gallery, Compact renders Hero, About, Projects, Experience, Research, and Contact as a centered CV sequence, and Compact omits Life entirely.

- [ ] **Step 1: Update Hero to use the required portrait and density compositions.**

  Replace the portrait source with `/me.png`, keep meaningful alt text, and replace every circular portrait and glow shape with a clearly rectangular rounded treatment. Keep Full’s thesis, identity, actions, and prominent image. Make Compact a centered CV header with the same thesis, identity, portrait, and clear contact or CV actions, allowing only supporting copy and scale to shrink.

- [ ] **Step 2: Simplify About and implement the two stack treatments.**

  Remove capability, education, credential, and toolbox markup and imports. Keep the short introduction and the four shared categories. Render Full categories as moving lanes with a visible button labeled `Pause technology lanes` or `Resume technology lanes`, an accurate pressed state, a data marker for smoke coverage, and a static readable fallback when paused or reduced motion is preferred. Render Compact categories as dense static wrapped text without lane animation or a pause control.

- [ ] **Step 3: Keep featured cards unchanged and make archive and Compact projects minimal.**

  Preserve `ProjectCard` for the three Full featured records and do not alter their content, images, roles, outcomes, technologies, or links. Keep the Full archive disclosure, but remove card-like borders, fills, icons, technology badges, and card spacing from archive entries. In Compact, render `selectedWork` and `projectArchive` together as concise rows showing name, category or role, short outcome, and existing links only; omit missing links and all project images.

- [ ] **Step 4: Add descriptions to both Experience layouts.**

  Keep the ten group and role markers and exact dates. Add each group’s `summary` to Full’s organization-led presentation and Compact’s minimalist row. Compact must expose readable date, role or organization, and description parts, with multiple role/date pairs retained inside KSEP ITB and TEDxITB rows. Keep approved metrics available without turning Compact rows into cards.

- [ ] **Step 5: Reduce Research and conditionally remove Life.**

  Replace Research’s verbose field lists, technology badges, and figures with each item’s title, `summary`, Repository link when present, and Read or Paper link when present. Preserve honest existing destinations and omit absent ones. Read `density` in `LifeExperiences` and return `null` for Compact so no Life section or reserved space is emitted; keep the existing Full photo-led gallery and alt text. Keep `app/page.tsx` on one route and one component sequence, with the conditional omission owned by the Life component rather than duplicated data.

- [ ] **Step 6: Add only the CSS needed for lanes, static Compact rows, and motion safety.**

  Add the moving-lane animation and pause state using existing CSS and Motion patterns, scope it to Full, and ensure `prefers-reduced-motion: reduce` disables movement while leaving content visible. Keep Compact rows, stack text, archive entries, and all section containers free of horizontal overflow in both themes.

- [ ] **Step 7: Run the smoke contract after the presentation implementation.**

  Run `pnpm build && node scripts/portfolio-smoke.mjs`.

  Expected: PASS for the focused default Full contract, including the new portrait, removed About records, moving lanes, pause control, concise Research, descriptions, exact experience facts, archive rows, and local assets.

---

### Task 4: Run concise typecheck, build, smoke, and desktop/mobile sanity checks

**Files:**
- Verify: `app/**/*.ts`, `components/**/*.tsx`, `content/portfolio.ts`, `types/types.ts`, `scripts/portfolio-smoke.mjs`

**Interfaces:**
- Consumes: The completed single-route implementation and the smoke contract from Tasks 1 through 3.
- Produces: Evidence that modified TypeScript has no diagnostics, the project typechecks and builds, smoke passes, and both density modes behave at one desktop and one mobile viewport.

- [ ] **Step 1: Run TypeScript diagnostics and the project typecheck.**

  Run `lsp_diagnostics` on every modified TypeScript or TSX file, then run `pnpm exec tsc --noEmit`.

  Expected: zero diagnostics errors and exit code 0 from TypeScript.

- [ ] **Step 2: Run the production build and focused smoke check.**

  Run `pnpm build && node scripts/portfolio-smoke.mjs`.

  Expected: both commands exit 0, with the smoke output reporting the required Full contract as passing.

- [ ] **Step 3: Perform one desktop and one mobile browser sanity check.**

  At one desktop viewport, verify Full and Compact through the density controls: Full keeps featured cards, moving categorized lanes and a working pause control, Life and its nav link exist, and Compact is centered within the 760 to 840px measure, uses rectangular `/me.png`, shows all project rows, static categorized skills, concise experience and research rows, and has neither Life section nor Life nav link. At one mobile viewport, verify both modes remain fluid with no horizontal overflow, links with missing destinations are omitted, keyboard focus remains visible and stable through density switching, and reduced motion leaves the Full stack usable without movement and Compact unchanged.
