# Expertise Polish Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Make the expertise page present the supplied LinkedIn and CV experience more clearly while preserving its current behavior and accessible controls.

**Architecture:** Keep the page composition in the existing page component, keep experience content in the existing typed content module, and keep presentation changes in the existing global stylesheet. Use native HTML radio inputs for the two pill control groups, with CSS handling the visual treatment and existing theme and persistence code continuing to own state.

**Tech Stack:** Existing application framework and TypeScript, existing CSS, native HTML inputs, existing test and build tooling. Add no dependencies.

## Global Constraints

- Work only in the expertise-polish worktree, based on committed main `1c9c4bb`.
- Do not edit or commit the copied LinkedIn PDF. Read it only as source input for content alignment.
- Preserve existing theme switching, persistence, keyboard access, focus visibility, reduced-motion behavior, and responsive behavior.
- Do not add dependencies, type suppression, speculative abstractions, or placeholder implementation steps.
- Use the supplied LinkedIn and CV text as the source of truth for experience facts. Add no web research.

---

### Task 1: Smoke Red

**Files:**
- Modify: `src/app/page.tsx`
- Test: existing page test or the smallest existing application smoke check

- [ ] Establish the current smoke check for the expertise page, then make it red by asserting the requested post-polish structure before implementation: no Compact portrait control, native Light and Dark radio choices, native Full and Compact radio choices, About before technology stack, and the required Experience and Research sections.
- [ ] Run the focused smoke check and record the expected failure against the current page.
- [ ] Keep this task limited to the behavioral contract. Do not add production workarounds, dependency changes, PDF changes, or commits.

### Task 2: Typed Experience Enrichment

**Files:**
- Modify: `src/data/experience.ts`
- Modify: `src/app/page.tsx`
- Test: focused experience content smoke check

- [ ] Extend the existing typed experience model with the PDF-supported experience groups and highlights, preserving the exact role, organization, project, technology, and research facts present in the supplied LinkedIn and CV text.
- [ ] Add only the neutral `Kabinet` WIP placeholder where the source material supports an unfinished entry. Do not invent dates, claims, metrics, responsibilities, or additional placeholder projects.
- [ ] Render the enriched groups and highlights through the existing page data flow, keeping the current types and accessibility semantics intact.
- [ ] Run the focused content check and confirm every rendered group comes from typed source data.

### Task 3: Visual Presentation Polish

**Files:**
- Modify: `src/app/globals.css`
- Modify: `src/app/page.tsx`
- Modify: `public/` existing technology logo assets only when already present
- Test: focused interaction and accessibility smoke check

- [ ] Remove the Compact portrait option and replace both control pairs with native radio-based slider-pill controls for Light/Dark and Full/Compact. Keep labels associated with inputs, preserve keyboard operation, and retain the existing theme, layout, and persistence behavior.
- [ ] Present About, then technology stack, as two sequential full-width subsections. Add the existing technology logos to stack items without introducing new packages or inaccessible image-only labels.
- [ ] Give Experience and Research alternating surfaces while keeping the existing visual language, responsive layout, visible focus states, and reduced-motion behavior.
- [ ] Run the focused interaction check at narrow and wide layouts, confirming the radio controls, theme persistence, full/compact persistence, and accessible names remain usable.

### Task 4: Concise Verification

**Files:**
- Verify: `src/app/page.tsx`
- Verify: `src/data/experience.ts`
- Verify: `src/app/globals.css`

- [ ] Run the focused smoke and accessibility checks, then run the existing typecheck and build commands if defined by the project.
- [ ] Confirm the final diff contains only the intended source files and no PDF, dependency, generated, or commit artifacts.
- [ ] Confirm the final page has no Compact portrait control, uses both native radio slider-pill groups, orders About before technology stack, shows logos on stack items, uses alternating Experience and Research surfaces, includes the PDF-supported experience groups and highlights, and contains only the neutral Kabinet WIP placeholder.
- [ ] Report only the verification results and any pre-existing failures, without broadening the scope.
