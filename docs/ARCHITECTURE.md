# Architecture & rationale

## Responsibilities

`app/` defines routes and metadata, `components/shared/` holds truly shared UI primitives, `modules/home/` owns page sections, `modules/portfolio/` owns domain content and lookups, and `config/site.ts` centralizes verified brand/contact configuration. Nothing calls external APIs at runtime.

## Content model

Projects have stable URL-safe slugs, a title, optional verified region, cover image, gallery images, summary and display alt text. Unknown region is `null`; do not guess a region merely because the website's geographic focus is Solo. City routes are statically generated from `regions.ts`, and project routes from `projects.ts`.

## Practical extensions

When adding real projects, update the typed data array and image directory, run `npm run check`, and verify both the city listing and the detail page. If the catalogue grows large or business operators must update it frequently, introduce a CMS only then. The public website can remain statically generated.

## Security

No secret env vars, API keys or user forms. All current content is local and typed. External Instagram links use `target=_blank` with `rel=noopener noreferrer`. There is no browser-side analytics or third-party JavaScript in the template.

## Performance/accessibility

Images are loaded via Next Image (local assets, static export). Responsive crops preserve focal points. Navigation uses semantic links and a keyboard-accessible native `details` menu for mobile. Colors are high contrast and `prefers-reduced-motion` is honored.

## Verification status

Chromium preview checked at 390, 825 and 1440 CSS px, with no broken image or horizontal overflow. Next build/lint/typecheck/Vitest still need to run once npm packages can be installed.
