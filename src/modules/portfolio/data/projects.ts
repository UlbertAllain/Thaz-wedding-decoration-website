import type { PortfolioProject } from "../types/portfolio";

/**
 * Only names come from the supplied screenshot. Photos are visual placeholders
 * cropped from the screenshot — NOT verified documentation of these events.
 * Do not infer a city or publish as real project photography until verified.
 */
export const projects: readonly PortfolioProject[] = [
  {
    slug: "tania-ezra",
    title: "Tania & Ezra",
    regionSlug: null,
    summary: "Karya pilihan dalam arsip THAZ Decoration. Dokumentasi lengkap akan menyusul setelah materi sumber diverifikasi.",
    coverImage: "/images/featured-fabric.webp",
    images: ["/images/featured-fabric.webp", "/images/featured-candles.webp", "/images/featured-shadows.webp"],
    imageAlt: "Detail kain dekorasi dari referensi desain THAZ",
    isPreview: true,
  },
  {
    slug: "salsa-alfi",
    title: "Salsa & Alfi",
    regionSlug: null,
    summary: "Karya pilihan dalam arsip THAZ Decoration. Dokumentasi lengkap akan menyusul setelah materi sumber diverifikasi.",
    coverImage: "/images/featured-roses.webp",
    images: ["/images/featured-roses.webp", "/images/hero-babys-breath.webp", "/images/venue-chairs.webp"],
    imageAlt: "Detail bunga dari referensi desain THAZ",
    isPreview: true,
  },
];
