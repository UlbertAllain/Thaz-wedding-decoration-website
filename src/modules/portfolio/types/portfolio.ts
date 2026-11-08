export type Region = { slug: string; name: string; description: string };

export type PortfolioProject = {
  slug: string;
  title: string;
  /** Set after validating the project's actual location from source. */
  regionSlug: string | null;
  summary: string;
  coverImage: string;
  images: readonly string[];
  imageAlt: string;
  isPreview: boolean;
};
