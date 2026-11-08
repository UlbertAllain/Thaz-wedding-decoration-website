import Image from "next/image";
import Link from "next/link";
import { SectionLabel } from "@/components/shared/section-label";

function EditorialPhoto({ src, alt, className }: { src: string; alt: string; className: string }) {
  return <div className={`media-frame ${className}`}><Image src={src} alt={alt} fill sizes="(max-width: 700px) 80vw, 40vw" /></div>;
}

export function FeaturedSection() {
  return (
    <section className="featured shell section-divider" aria-labelledby="featured-title">
      <SectionLabel id="karya" index="02" title="Pilihan Karya" meta="Arsip Selengkapnya ↗" metaHref="/portfolio" />
      <div className="featured__mosaic">
        <EditorialPhoto src="/images/featured-candles.webp" alt="Lilin dan rangkaian bunga untuk dekorasi acara" className="featured__candles" />
        <div className="featured__statement" id="featured-title"><span className="accent-rule" />
          <h2>Pilihan karya<br />yang mencerminkan<br />karakter setiap<br /><em>pasangan.</em></h2><span className="accent-rule" />
        </div>
        <EditorialPhoto src="/images/featured-fabric.webp" alt="Kain dekorasi yang mengalir" className="featured__fabric" />
        <Link href="/karya/tania-ezra" className="featured__project featured__project--one"><small>Project 01</small><strong>Tania &amp; Ezra</strong><span aria-hidden="true">↗</span></Link>
        <Link href="/karya/salsa-alfi" className="featured__project featured__project--two"><small>Project 02</small><strong>Salsa &amp; Alfi</strong><span aria-hidden="true">↗</span></Link>
        <EditorialPhoto src="/images/featured-roses.webp" alt="Detail kelopak bunga merah" className="featured__roses" />
        <EditorialPhoto src="/images/featured-shadows.webp" alt="Bayangan dedaunan dalam suasana sore" className="featured__shadows" />
      </div>
    </section>
  );
}
