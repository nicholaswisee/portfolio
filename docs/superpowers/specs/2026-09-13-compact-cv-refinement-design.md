# Compact CV Refinement Design Specification

**Date:** 2026-09-13  
**Status:** Approved for implementation  
**Audience:** Recruiters, collaborators, and the broader professional network

This specification refines and supersedes the conflicting presentation details in the 2026-09-12 interactive monochrome portfolio specification. It retains that specification's theme behavior, accessibility requirements, one-route architecture, typed static data, shared content, restrained motion, and reduced-motion behavior.

## 1. Product direction

Keep one accessible Next.js portfolio at `/`, with two presentations of the same records:

- **Full:** A wide editorial portfolio with personal context, imagery, featured project cards, and the existing narrative hierarchy.
- **Compact:** A centered, CV-like composition with a readable width of approximately 760 to 840px. It is intentionally composed differently from Full, not merely a smaller or tighter version of the same layout.

Both modes use the same content and destination links. Density switching remains a preference on the single route and persists across reloads. Full remains the default.

Use `/me.png` for the portrait in both modes. The portrait is a rounded rectangle, never a circle. The crop, border, and scale may vary by composition, but the rectangular shape must remain clear.

The page order remains Hero, About, Projects, Experience, Research, Life, and Contact in Full. Compact omits Life entirely, including its navigation link, while retaining the other content in the same overall sequence.

## 2. Shared visual and interaction foundations

- Preserve Plus Jakarta Sans for body copy, navigation, labels, metadata, controls, dates, and technology names.
- Preserve Newsreader for the hero thesis, major section headings, and editorial research titles.
- Keep the monochrome light and dark themes, with restrained green only for active states, links, focus indicators, selected controls, and small evidence highlights.
- Keep the existing system-theme first visit behavior, persisted Light or Dark override, no System reset control, and no visible wrong-theme flash.
- Keep shared responsive containers, readable contrast, hairline rules, clear focus indicators, semantic landmarks, skip link, keyboard access, meaningful image alt text, and reduced-motion support.
- Keep the existing typed content model in `content/portfolio.ts` and `types/types.ts`. Extend types only when needed to represent approved display data, such as short experience descriptions.
- Keep one `/` route, one shared data source, existing local assets, Next.js 15, React 19, Tailwind v4, Motion, and existing primitives. Add no dependencies, routes, APIs, CMS, database, or remote content source.

## 3. Presentation requirements

### Hero

Full keeps the wide editorial hero with the thesis, identity, primary actions, and `/me.png` as a prominent rounded rectangle. Compact uses a centered CV header treatment with the same identity, thesis, portrait, and clear contact or CV actions. Compact may reduce supporting copy and portrait scale, but must not remove the main thesis or identity.

### About

Remove `capabilityGroups`, including Product Engineering, Systems & Algorithms, and Research & Data, education, credentials, and toolbox from About globally in both modes. About keeps only the short introduction and the technology stack.

The technology stack remains in both modes using the same sensible categories. Full must present those categories as moving lanes like the earlier marquee treatment and provide a clearly labeled pause control. The lanes must stop when paused, honor reduced-motion preferences, and remain usable without movement. Compact presents the same categories as static, dense wrapped text with no movement, marquee, or pause-dependent interaction.

### Projects

Full featured project cards remain unchanged in content and editorial role. Preserve the three selected records, their images, names, roles, outcomes, technologies, and available links.

The project archive is borderless and minimal in both modes. It may use a simple disclosure, but archive entries should not read as full cards.

Compact renders all project records, including featured and archive projects, as concise CV rows. Each row keeps the project name, category or role, a short outcome, and available links. Omit missing links instead of rendering dead controls. Do not use Full's large images or card treatment in Compact.

### Experience

Keep the ten approved experience groups and their distinct role dates. KSEP ITB and TEDxITB retain their nested progression roles. Each group needs a short description. A concise placeholder description is explicitly allowed when the verified source material does not make the description clear, but it must be neutral, visibly intentional, and must not invent an outcome, date, credential, or metric.

Full may preserve a spacious timeline or organization-led presentation with role progression, descriptions, approved metrics, and links. Compact uses minimalist rows with three readable parts: date, role or organization, and short description. Nested progressions may show multiple role and date pairs inside the same organization row. Keep approved metrics available where they fit without turning the rows into cards.

The approved groups and facts remain:

1. SPE ITB SC, DevOps Engineer, Jul 2026-Present
2. Kabinet KM ITB, Backend Engineer, Jul 2026-Present
3. KSEP ITB, Vice Director, Apr 2025-May 2026; President, May 2026-Present
4. ARKAVIDIA, Deputy Head of IT, May 2026-Present
5. Galva, MIS Intern, Jun-Aug 2026
6. TEDxITB, Frontend Developer, Nov 2024-May 2025; Director, Nov 2025-Jun 2026
7. Aku Masuk ITB 2026, Deputy Head of IT, Oct 2025-Feb 2026
8. OSKM ITB 2025, Backend Developer, Aug 2025
9. IMPACT 5.0, Project Officer, Jan-Jul 2025, with 146 committees across 9 divisions and 17 subdivisions
10. PTD KSEP, Head of OH-KM, Aug-Sep 2025, with 440+ registrants

### Research

Research is brief in both modes. For each existing research record, synthesize one brief description from its verified context, problem, method, result, and qualifier fields. Each item renders only:

- Title
- Brief description
- Repository link
- Read or Paper link

Do not render verbose context, problem, method, result, or qualifier blocks, technology badges, research figures, or other metadata in either mode. Preserve the current research records and their honest source links. Map existing verified destinations to Repository and Read or Paper labels where applicable. If one of those destinations is absent from the shared record, omit that link rather than inventing one.

### Life

Full retains the prior photo-led Life presentation and its existing image set, captions, and personal character. Compact does not render Life at all. Compact navigation must not include a Life link, and Compact must not reserve an empty Life section or placeholder space.

### Contact

Keep the existing verified email, GitHub, LinkedIn, and CV destinations where available. Contact remains the final destination and works in both compositions. Use the current year in the footer.

## 4. Data and component boundaries

Keep records in `content/portfolio.ts` and display decisions in focused components. The implementation may add compact-specific markup or small presentational helpers inside the existing section components, but it must not duplicate content records or create a second page.

The density preference controls which composition each section renders. Full and Compact may have different layout primitives, spacing, ordering within a section, and metadata density. They must still share labels, values, links, image sources, and accessibility semantics wherever the same record is shown.

Compact must be centered and constrained to approximately 760 to 840px on wide screens, while remaining fluid with safe horizontal padding on smaller screens. Full keeps the existing wide editorial container. Neither composition may cause horizontal overflow.

## 5. Accessibility and resilience

- Keep semantic headings and landmarks, section labels tied to visible headings, and the skip link.
- Keep keyboard-reachable controls, visible focus indicators, accurate `aria-pressed` state for theme and density controls, and focus stability when switching composition.
- Keep meaningful alt text for `/me.png`, Full project images, and Full Life images. Compact's omitted project and Life images require no replacement alt text.
- Preserve sufficient contrast in both themes and honor `prefers-reduced-motion`. Compact's static stack must remain static regardless of motion preference.
- Omit missing optional links and images cleanly. Required local assets, especially `/me.png`, must fail clearly during production validation rather than fall back to remote placeholders.
- Do not render empty Compact sections for omitted Life content. Other empty collections use a short intentional empty state without fake records.

## 6. Focused verification

Before implementation is considered complete, run only the focused checks needed for this refinement:

1. TypeScript diagnostics pass for every modified TypeScript file, and the project's typecheck passes.
2. The production build completes successfully.
3. `scripts/portfolio-smoke.mjs` passes after a successful build.
4. Desktop and mobile sanity checks confirm Full and Compact composition, `/me.png` rectangular shape, Compact's 760 to 840px centered measure on desktop, Full's moving lanes and pause control, Compact's static categorized stack, omitted Life navigation and section in Compact, concise project and experience rows, minimal research rows, keyboard focus, reduced motion, and no horizontal overflow.

The refinement is complete when Full preserves the editorial portfolio and Compact reads as a deliberate, centered CV composition while both remain accessible, backed by typed static data, link-complete, and served from the same `/` route.
