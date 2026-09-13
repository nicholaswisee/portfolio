# Interactive Monochrome Portfolio Design Specification

**Date:** 2026-09-12  
**Status:** Approved  
**Audience:** Recruiters, collaborators, and the broader professional network

This specification supersedes the 2026-08-05 field-journal spec for this redesign while preserving its useful principles: a curated editorial presentation, one static page, evidence-led content, typed static data, semantic landmarks, restrained motion, and no speculative infrastructure. It also carries forward the calmer hierarchy and tactile interaction principles from the later field-journal refinement.

## 1. Product direction

Create one polished Next.js portfolio page that presents Nicholas as an engineer, researcher, leader, and person. The design should feel editorial and personal without becoming a résumé grid or a decorative experiment.

The page has two density modes that use the same content and links:

- **Full:** The default editorial and personal presentation. It gives projects, experience, research, and Life content enough space for context, imagery, and narrative.
- **Compact:** A recruiter-scan presentation. It keeps the same records and destinations but renders experience and project information as concise rows with clear dates, roles, categories, and outcomes. It is a density change, not a second page or alternate data source.

The single page is ordered exactly as follows:

1. Hero
2. About
3. Projects
4. Experience
5. Research
6. Life
7. Contact

Projects and Experience are separate sections. Education and credentials are also distinct from Experience and must not be merged into the employment or organization timeline. They render as a distinct typed visual block inside About, not as an eighth top-level section.

## 2. Visual system

### Typography

- Preserve **Plus Jakarta Sans** for body copy, navigation, labels, metadata, controls, dates, and technology names.
- Preserve **Newsreader** for the hero thesis, major section headings, and editorial research titles.
- Use one responsive heading scale and a readable body measure across sections.
- Keep utility labels compact and legible. Tracking should support hierarchy, not turn labels into decoration.

### Color and theme

Use a monochrome palette in both themes. Light and dark surfaces, borders, and text should be derived from neutral ink and paper tokens. Use restrained green accents only for active states, links, focus indicators, selected controls, and small evidence highlights. Do not add amber, neon, gradient, or unrelated decorative colors.

Theme behavior is explicit:

- On first visit, follow the operating system preference with `prefers-color-scheme`.
- A user-selected Light or Dark override is persisted in `localStorage`.
- The explicit Light or Dark override wins over later system preference changes.
- No reset-to-System control is required.
- The Light/Dark theme control has an accessible name and exposes the current choice.
- Theme application must avoid a visible flash of the wrong palette during initial load.

### Composition and interaction

Use a shared responsive container, consistent horizontal padding, clear section spacing, hairline separators, and restrained borders. Avoid forcing every section into identical cards. Full mode may use editorial compositions and imagery. Compact mode may use denser rows and metadata columns while retaining the same visual language.

Interactions should feel subtly tactile:

- Links, buttons, rows, and disclosure controls provide restrained hover, focus, press, and selected states.
- Motion is limited to opacity, transform, color, and height changes that communicate state or hierarchy.
- Avoid fake carousels, marquees, bouncing loaders, decorative floating elements, and interaction lockouts.
- Every motion path honors `prefers-reduced-motion`; reduced motion renders content immediately and removes nonessential movement.

## 3. Section requirements

### Hero

Present the portfolio thesis immediately with Nicholas's name, a concise engineering and research statement, primary navigation to the page sections, and one preferred portrait candidate. Use `gua.webp` as the preferred hero candidate because it has cleaner negative space. During implementation, allow the final crop selection to be made between the existing user-provided images. Do not add or generate new assets.

The hero must work in both density modes. Compact mode may reduce supporting copy and image prominence, but it must retain identity, the main thesis, and clear next actions.

### About

Keep the existing capability and toolbox content in the static portfolio model. Present a short personal and technical introduction, followed by representative capabilities and a readable toolbox. Use links to the relevant Projects or Research evidence where available.

Within About, render Education and credentials as a distinct typed visual block. It is part of About's content, not an eighth top-level section and not part of the Experience timeline. Use only verified existing content and links.

### Projects

Render the existing project records from `content/portfolio.ts`, preserving verified names, descriptions, images, technologies, and links. Full mode uses curated project features and supporting archive content. Compact mode uses the same project records as scan-friendly rows. Missing optional links are omitted rather than replaced with dead controls.

Projects describe software, systems, products, and technical outcomes. Organization roles and leadership records belong only in Experience.

### Experience

Render these ten approved timeline groups as typed static data. KSEP ITB and TEDxITB are groups that may contain nested progression roles. Dates and titles must remain distinct within each group, even when multiple roles belong to the same organization.

1. **SPE ITB SC, DevOps Engineer, Jul 2026-Present**
2. **Kabinet KM ITB, Backend Engineer, Jul 2026-Present**
3. **KSEP ITB, leadership progression:** Vice Director, Apr 2025-May 2026; President, May 2026-Present
4. **ARKAVIDIA, Deputy Head of IT, May 2026-Present**
5. **Galva, MIS Intern, Jun-Aug 2026**
6. **TEDxITB progression:** Frontend Developer, Nov 2024-May 2025; Director, Nov 2025-Jun 2026
7. **Aku Masuk ITB 2026, Deputy Head of IT, Oct 2025-Feb 2026**
8. **OSKM ITB 2025, Backend Developer, Aug 2025**
9. **IMPACT 5.0, Project Officer, Jan-Jul 2025**, with **146 committees** across **9 divisions and 17 subdivisions**
10. **PTD KSEP, Head of OH-KM, Aug-Sep 2025**, with **440+ registrants**

The implementation may use a small typed timeline-group record that supports organization, roles, dates, summary, metrics, and optional links. It must not invent missing dates, outcomes, or credentials. Full mode can show progression and context. Compact mode renders one row per group, with nested role labels where needed for KSEP ITB and TEDxITB.

### Education and credentials block in About

Education and credentials use the distinct typed visual block inside About described above. Do not place them inside the Experience timeline, merge them into organization records, or imply employment through their presentation. Use only verified existing content and links.

### Research

Preserve the current research content and evidence from `content/portfolio.ts`, including its honest qualifiers and source links. Present research as editorial evidence rather than generic project cards. The current records are:

- Dynamic Programming for Optimal Model Partitioning in Pipeline-Parallel LLM Training
- M/M/1 Queue Analysis with Markov Chains and Eigenvalues

Keep the problem, method, result, qualifier, and source links visible in Full mode. Compact mode may collapse the presentation into rows or short summaries, but must preserve access to the same research records and links. Do not change research claims or invent additional findings.

### Life

Preserve the current Life content and image set from `content/portfolio.ts`. Life remains distinct from Projects and Experience and should retain its personal, photographic character. Full mode may use the existing editorial gallery treatment. Compact mode may use concise caption rows that still point to the same image and content records. Missing optional Life entries should not produce broken cards or placeholder copy.

### Contact

Provide a direct contact invitation and the existing verified contact destinations, such as email, GitHub, LinkedIn, and CV where available. Use the current year in the footer. The section is the final page destination and must remain usable in both density modes.

## 4. Architecture and data boundaries

- Keep one `/` route and one page composition. Do not add a duplicate compact route or separate compact page.
- Keep content static and typed in `content/portfolio.ts` and the existing type system in `types/types.ts`, extending types only when the approved Experience or density behavior requires it.
- Keep section rendering in focused components with clear boundaries: page shell, Light/Dark theme and density controls, Hero, About (including its Education and credentials block), Projects, Experience, Research, Life, and Contact.
- Keep display logic in components and record data in the content module. Do not embed repeated experience, project, research, or Life records directly in JSX.
- Reuse Next.js 15, React 19, Tailwind v4, Motion, existing primitives, and current assets.
- Add no runtime dependency, CMS, database, API, route, remote content source, or speculative abstraction.
- The density preference uses the same persistence approach as the theme preference and must survive reloads. The initial density is Full unless an existing user preference says Compact.

## 5. Accessibility and resilience

- Use semantic landmarks, one clear heading hierarchy, and `section` labels tied to visible headings.
- Provide a skip link before navigation and accurate anchor targets for all seven sections.
- Make every interactive element keyboard reachable with a visible focus indicator. Do not attach click behavior to noninteractive elements.
- Give theme and density controls useful accessible names, current-state semantics, and keyboard operation.
- Use meaningful alt text for the selected hero image, project images, research figures, and Life images. Decorative images use empty alt text.
- Keep contrast sufficient in both themes, including green accents and focus rings.
- Respect reduced motion and avoid focus loss when switching density or theme.
- Optional missing images or links must degrade to a clean omission or token-based fallback. Required local assets must fail clearly during production validation rather than silently loading remote placeholders.
- Empty collections render a short, intentional empty state without fake records, unresolved labels, or broken layout. The current approved static collections should not be empty.
- Unexpected render failures should remain contained to the affected section where practical, with the rest of the page still navigable. No network request is required for normal rendering.

## 6. Verification and acceptance

Before implementation is considered complete, verify:

1. TypeScript diagnostics pass for every modified TypeScript file.
2. The production build completes successfully.
3. The existing `scripts/portfolio-smoke.mjs` smoke script passes after a successful build.
4. Browser keyboard QA covers skip link, navigation, theme control, density control, links, disclosures, and focus visibility.
5. First-visit theme selection is verified against `prefers-color-scheme`, and explicit Light and Dark choices persist across reloads. No reset-to-System control is required.
6. Density persistence is verified for Full and Compact choices across reloads, and both modes show the same approved records and destinations.
7. Reduced-motion behavior is checked with the browser preference enabled.
8. Screenshots are captured and reviewed at **390x844**, **768x1024**, and **1440x900** in both relevant themes and in both density modes.
9. The screenshots confirm the exact section order, separate Projects and Experience sections, distinct Education and credentials, preserved Research and Life content, readable responsive layout, and no horizontal overflow.

The redesign is complete when the page is one accessible, static, responsive Next.js experience with the approved content, no duplicate compact page, no new runtime dependency, and no placeholder requirements left unresolved.
