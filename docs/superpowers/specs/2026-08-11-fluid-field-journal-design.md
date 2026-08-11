# Fluid Field Journal Design

## Purpose

Refine the existing single-page portfolio into a calmer, Apple-inspired editorial experience for recruiters and collaborators. The redesign improves hierarchy, spacing, responsiveness, and interaction feel without changing the portfolio's content, links, section order, or existing functionality.

## Constraints

- Keep `content/portfolio.ts` unchanged.
- Preserve the existing route, six sections, anchor IDs, navigation actions, external links, CV download, archive accordion, marquee pause control, and life-gallery caption behavior.
- Preserve the smoke-test invariants in `scripts/portfolio-smoke.mjs`: three featured projects, archive items, eleven life photos, merged About layout, text-only Research layout, and existing data attributes.
- Retain the existing dark archival palette as the base: archive ink, slate field, research field, paper mist, oxidized teal, and annotation amber.
- Preserve keyboard access, focus treatment, skip link, semantic section labels, and all reduced-motion behavior.

## Visual Direction

### Composition

Use a precise editorial grid: a broad desktop canvas with a narrower content measure, generous vertical breathing room, and a single-column mobile flow. Alternate the existing field colors by section, using hairline separators and spacing rather than new decorative elements to create rhythm.

The hero remains the thesis of the page. It presents the existing identity, description, actions, and portrait in a balanced asymmetric composition: reading content first, portrait second on large screens, and an intentional stacked sequence on small screens.

### Typography

Keep Plus Jakarta Sans for interface and body text and Newsreader for display headings. Increase contrast between the roles with tighter display leading and tracking, a restrained heading scale, and a calmer readable body width. Labels remain compact and legible rather than becoming ornamental.

### Material and Depth

The fixed navigation becomes a lightweight translucent surface that gains stronger blur and separation after scroll. Cards, buttons, badges, and section boundaries use a small, consistent radius system, subtle borders, and depth only where it helps establish hierarchy. Teal is reserved for focus, active, and primary interactive states; amber remains a rare annotation color.

### Motion

Use one coordinated page entrance and restrained section reveals. Interactive elements respond on press and can be redirected without input lockouts. Existing Motion animations use critically damped spring behavior by default; bounce is reserved for user-driven interactions such as accordion transitions. Motion remains compositor-only (`transform` and `opacity`) and honors `prefers-reduced-motion` with opacity/static alternatives.

## Component-Level Changes

- **Global styles and layout:** establish spacing, typography, materials, responsive grid utilities, focus styling, and transparency/contrast fallbacks in `app/globals.css`.
- **Navigation:** refine the existing floating navbar material, desktop spacing, mobile sheet, press/hover feedback, and scroll-state transition without changing links or controls.
- **Hero:** improve composition, portrait framing, CTA hierarchy, and entrance timing without modifying its text or actions.
- **About, Work, Research, Life, and Footer:** preserve all content and interactions while improving section cadence, card density, image framing, alignment, and responsive behavior.
- **Shared primitives:** align button, card, and badge styling with the same material, radius, and interaction language.

## Out of Scope

- New sections, copy, projects, media, data fields, routes, dependencies, or content-model changes.
- Reordering sections or changing anchor names.
- Reintroducing hidden research fields or unused content structures.
- Theme switching, a CMS, analytics, or new gesture systems.

## Verification

After implementation:

1. Run diagnostics on every edited TypeScript and CSS file.
2. Run the relevant test/build commands and `node scripts/portfolio-smoke.mjs` after a successful build.
3. Render desktop and mobile screenshots and verify hierarchy, navigation, interaction states, and reduced-motion behavior.
4. Perform visual QA with design-system and fidelity reviews before declaring completion.
