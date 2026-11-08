import Image from "next/image";
import { SectionLabel } from "@/components/shared/section-label";
import { ArrowLink } from "@/components/shared/arrow-link";

export function AboutSection() {
  return (
    <section className="about shell section-divider" aria-labelledby="about-title">
      <SectionLabel id="tentang" index="01" title="Tentang THAZ" meta="Form, Flowers & Atmosphere" />
      <div className="about__content">
        <h2 id="about-title" className="display-heading">Setiap ruang<br />punya <span>karakter.</span></h2>
        <div className="about__aside">
          <div className="media-frame about__photo"><Image src="/images/about-drapery.webp" alt="Detail kain dekorasi yang lembut" fill sizes="(max-width: 700px) 100vw, 40vw" /></div>
          <p>Di THAZ, kami menata dekorasi sesuai kebutuhan acara: dari susunan pelaminan, pilihan bunga, sampai detail yang melengkapi ruang.</p>
          <ArrowLink href="/#kontak">Lebih Tentang Kami</ArrowLink>
        </div>
      </div>
    </section>
  );
}
