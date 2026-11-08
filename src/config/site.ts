/** Contact details are intentionally unlinked until THAZ verifies them. */
export const siteConfig = {
  name: "THAZ Decoration",
  description:
    "THAZ Decoration — studio dekorasi pernikahan yang memperhatikan estetika, konsep, dan karakter setiap pasangan.",
  locality: "Solo, Central Java",
  siteUrl: process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000",
  instagramUrl: "https://www.instagram.com/thaz_decoration/" as string | null,
  whatsappUrl: null as string | null,
} as const;
