import { SectionLabel } from "@/components/shared/section-label";
import { siteConfig } from "@/config/site";

export function ContactSection() {
  return (
    <section className="contact shell section-divider" aria-labelledby="contact-title">
      <SectionLabel id="kontak" index="04" title="Mari Bicara" meta="THAZ Decoration — Solo" />
      <div className="contact__content">
        <h2 id="contact-title" className="display-heading">Ceritakan<br /><span>rencanamu.</span></h2>
        <div className="contact__aside">
          <p>Sudah punya tanggal, venue, atau referensi dekorasi? Ceritakan kepada tim THAZ untuk mulai membahas kebutuhan acara.</p>
          <a className="outline-cta" href={siteConfig.instagramUrl ?? "/portfolio"} target="_blank" rel="noopener noreferrer" aria-label="Mulai konsultasi melalui Instagram THAZ Decoration">Mulai Konsultasi <span aria-hidden="true">↗</span></a>
        </div>
      </div>
    </section>
  );
}
