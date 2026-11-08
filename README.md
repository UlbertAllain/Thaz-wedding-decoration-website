# THAZ Decoration — Static Website

Responsive, editorial wedding-decoration portfolio based on the supplied **final** visual reference (5 November 2026). Replaces the previous dark/light serif layout entirely. Built with Next.js App Router, strict TypeScript, and custom CSS; no backend, database, or authentication.

## Local setup

Requires Node.js 20.9+ (Node 22 LTS recommended).

```bash
npm install
npm run dev
```

Open `http://localhost:3000`.

### Checks

```bash
npm run typecheck
npm run lint
npm run test
npm run build
```

`npm run build` creates a fully static export in `out/` (`output: "export"`). Deploy the `out/` folder on any static host. Set `NEXT_PUBLIC_SITE_URL` to your production domain before deploying.

> **Note:** Dependencies could not be installed in the author's sandbox due to an unavailable npm registry. A real Next.js build was **not** verified here. The standalone preview (`preview.html`) was rendered and smoke-tested in Chromium across three screen widths. Run all four commands above before production.

## Routes

- `/` — Homepage with hero, about, selected work, region archives, and contact.
- `/portfolio` — All supported regions.
- `/portfolio/[city]` — City archive; shows a truthful empty state until real entries are imported.
- `/karya/[slug]` — Featured project preview; currently `tania-ezra` and `salsa-alfi`.

## Architecture

```text
src/
  app/                   # Next.js routes, global styles, metadata
  components/shared/     # Navigation, section label, links, footer
  config/site.ts         # Verified brand and contact configuration
  modules/home/components/
  modules/portfolio/
    components/          # Archive presentation
    data/                # Static city/project entries
    lib/                 # Filtering and lookup functions
    types/               # TypeScript content contracts
docs/                    # Architecture and editorial asset notes
public/images/           # Local reference assets
preview.html             # Portable HTML preview, no dependencies
```

## IMPORTANT: placeholder media & content

The new reference image was supplied as a screenshot, not original photography. To match the composition, the current local images were cropped from that screenshot. **These are temporary low-resolution visual assets.** Replace them with original licensed images while preserving their filename or updating the corresponding `src` in the components. Project titles `Tania & Ezra` and `Salsa & Alfi` appear in the reference; **their actual photo documentation and region metadata have not been verified**.

The supplied Notion link could not be read with the current access. Therefore, do not treat placeholder images or empty city archives as imported portfolio data. When an export is available, map verified records into `src/modules/portfolio/data/projects.ts` (or a future statically generated content source). The content format is documented in `docs/CONTENT.md`.

The Instagram profile is based on the social media link attached to THAZ Decoration's publicly listed verified Glints company profile. Confirm with the business owner before launching. No WhatsApp number was invented; add it in `src/config/site.ts` only after verification.

## Design rules

- **This final screenshot is the visual baseline.** Do not revert to previous white sections, serif typography, dense cards, or generic project grids.
- Keep the mobile layout editorial rather than shrinking the desktop design.
- Maintain meaningful alt text, focus states, keyboard-accessible mobile menu and reduced-motion support.
- Avoid external UI libraries, unnecessary API routes and server-only behavior.
