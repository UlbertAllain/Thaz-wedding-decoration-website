import Image from "next/image";
import { ArrowLink } from "@/components/shared/arrow-link";

export function HeroSection() {
  return (
    <section className="hero shell" aria-labelledby="hero-title">
      <div className="hero__eyebrow metadata-pair">
        <span>Wedding Decoration Studio</span>
        <span>Solo, Central Java</span>
      </div>
      <div className="hero__editorial">
        <div className="hero__flower-strip media-frame" aria-hidden="true">
          <Image src="/images/hero-flowers.webp" fill sizes="(max-width: 700px) 65vw, 39vw" alt="" priority />
        </div>
        <h1 id="hero-title">THAZ<br />DECORATION</h1>
        <span className="hero__side-note">Wedding<br />Decoration<br />Studio</span>
      </div>
      <div className="hero__visuals">
        <div className="media-frame hero__detail">
          <Image src="/images/hero-babys-breath.webp" fill sizes="(max-width: 700px) 29vw, 20vw" alt="Rangkaian bunga putih dalam pencahayaan hangat" priority />
        </div>
        <div className="media-frame hero__couple">
          <Image src="/images/hero-couple.webp" fill sizes="(max-width: 700px) 65vw, 66vw" alt="Pasangan pengantin dengan pencahayaan lembut" priority />
        </div>
      </div>
      <div className="hero__bottom">
        <p>Dekorasi pernikahan yang dirancang menyesuaikan estetika, konsep,<br className="desktop-only" /> dan karakter setiap pasangan.</p>
        <ArrowLink href="/#karya">Lihat Karya</ArrowLink>
      </div>
    </section>
  );
}
