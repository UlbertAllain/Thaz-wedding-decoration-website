# Editorial assets and content

## Reference media mapping

All active image filenames are stored in `public/images`:

| Image | Source area | Replace with |
| --- | --- | --- |
| `brand-logo.png` | Screenshot header mark | Official transparent THAZ logo |
| `hero-flowers.webp` | Hero horizontal strip | Warm floral close-up, landscape |
| `hero-babys-breath.webp` | Hero narrow left image | White floral detail, portrait |
| `hero-couple.webp` | Hero wide primary photograph | Approved wedding couple photograph |
| `about-drapery.webp` | About strip | Decorative fabric close-up |
| `featured-candles.webp` | Featured tall photograph | Candle arrangement |
| `featured-fabric.webp` | Featured upper-right | Draped fabric |
| `featured-roses.webp` | Featured red accent | Red blossoms detail |
| `featured-shadows.webp` | Featured lower-right | Soft foliage shadows |
| `venue-chairs.webp` | Venue main image | Decorated seating/venue |

**All current photos are crops of the supplied visual reference, not downloaded from Notion.** Keep only images the business has approved to use.

## Notion import mapping

For each real project, add a record with:

```ts
{
  slug: "unique-lowercase-slug",
  title: "Verified project title",
  regionSlug: "solo", // use null until confirmed
  summary: "Brief factual description approved by THAZ",
  coverImage: "/images/your-approved-cover.webp",
  images: ["/images/your-approved-cover.webp"],
  imageAlt: "Specific accessible visual description",
  isPreview: false,
}
```

Only use supported region slugs from `src/modules/portfolio/data/regions.ts`. Do not put private client materials in `/public`. Once real photography is available, update the project detail content, region assignments, and add any relevant venue names. Verify all names and permission to publish before release.

## Verified public contact

Instagram: `https://www.instagram.com/thaz_decoration/` (linked from THAZ Decoration's publicly verified company profile on Glints).
WhatsApp: not verified; do not invent it.

Contact CTAs currently point to Instagram. For direct WhatsApp chat, populate `whatsappUrl` in site configuration and update the contact CTA if required.
