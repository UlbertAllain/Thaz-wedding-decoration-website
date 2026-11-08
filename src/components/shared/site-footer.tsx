import Link from "next/link";
import { siteConfig } from "@/config/site";

export function SiteFooter() {
  return (
    <footer className="site-footer shell">
      <span>© {new Date().getFullYear()} THAZ Decoration</span>
      <span>Solo & Sekitarnya</span>
      {siteConfig.instagramUrl
        ? <a href={siteConfig.instagramUrl} target="_blank" rel="noopener noreferrer">Instagram <span aria-hidden="true">↗</span></a>
        : <Link href="/#kontak">Instagram <span aria-hidden="true">↗</span></Link>}
    </footer>
  );
}
