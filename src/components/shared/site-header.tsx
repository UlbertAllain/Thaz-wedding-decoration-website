import Image from "next/image";
import Link from "next/link";

const menu = [
  { label: "Tentang", href: "/#tentang" },
  { label: "Karya", href: "/#karya" },
  { label: "Arsip Venue", href: "/portfolio" },
  { label: "Kontak", href: "/#kontak" },
] as const;

export function SiteHeader() {
  return (
    <header className="site-header">
      <div className="header-shell">
        <Link href="/" aria-label="THAZ Decoration — beranda" className="brand-mark">
          <Image src="/images/brand-logo.png" width={246} height={93} alt="THAZ Decoration" priority />
        </Link>
        <nav className="desktop-nav" aria-label="Navigasi utama">
          {menu.map(({ label, href }) => <Link href={href} key={href}>{label}</Link>)}
        </nav>
        <Link className="header-consult" href="/#kontak">Konsultasi <span aria-hidden="true">↗</span></Link>
        <details className="mobile-menu">
          <summary aria-label="Buka menu navigasi">Menu <span className="menu-symbol" aria-hidden="true">☰</span></summary>
          <nav aria-label="Navigasi mobile">
            {menu.map(({ label, href }) => <Link href={href} key={href}>{label}<span aria-hidden="true">↗</span></Link>)}
            <Link href="/#kontak">Konsultasi<span aria-hidden="true">↗</span></Link>
          </nav>
        </details>
      </div>
    </header>
  );
}
