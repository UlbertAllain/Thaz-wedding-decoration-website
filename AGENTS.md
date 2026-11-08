# Engineering Rules
1. Maintain the approved visual baseline: editorial typography, intentional whitespace, black/gold/ivory palette, asymmetric imagery. Do not redesign the hero without explicit approval.
2. Follow backend-first reasoning but do not add a backend to a static website without a real requirement.
3. Keep content (`modules/portfolio/data`) out of React presentation components.
4. One responsibility per file; no extra controller/service/repository boilerplate for static pages.
5. Never invent customer information, contact links, event dates, city/project mapping or photos; verify Notion exports before release.
6. Prefer Server Components. Prefer native HTML interaction for simple tasks (mobile navigation uses <details>); use Client Components only for genuine stateful UI.
7. Maintain the city → project route hierarchy and add new slugs through typed data.
8. Validate (`npm run check`) before deployment, and review responsive layouts at mobile/tablet/desktop widths.
