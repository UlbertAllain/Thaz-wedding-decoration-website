import Image from "next/image";
import Link from "next/link";
import { SectionLabel } from "@/components/shared/section-label";
import { regions } from "@/modules/portfolio/data/regions";

const selectedSlugs = ["solo", "sukoharjo", "karanganyar", "boyolali"];
const featuredRegions = selectedSlugs.map(slug => regions.find(region => region.slug === slug)).filter((region): region is (typeof regions)[number] => region !== undefined);

export function RegionsSection() {
  return (
    <section className="venues shell section-divider" aria-labelledby="venues-title">
      <SectionLabel id="lokasi" index="03" title="Jelajahi Venue" meta="Berdasarkan Lokasi" />
      <div className="venues__intro">
        <h2 id="venues-title" className="display-heading">Dari satu<br />venue <span>ke venue lain.</span></h2>
        <p>Temukan dokumentasi dekorasi berdasarkan tempat acara. Mulai dari venue-venue di Solo, lalu lanjutkan ke wilayah lainnya.</p>
      </div>
      <div className="venues__body">
        <nav className="venues__list" aria-label="Arsip dekorasi berdasarkan kota">
          {featuredRegions.map(({ slug, name }, index) => <Link href={`/portfolio/${slug}`} className={index === 0 ? "venues__region is-first" : "venues__region"} key={slug}>
            <span className="venues__index">{String(index + 1).padStart(2, "0")}</span>
            <span className="venues__name">{name}</span>
            <span className="venues__arrow" aria-hidden="true">↗</span>
          </Link>)}
        </nav>
        <div className="media-frame venues__photo"><Image src="/images/venue-chairs.webp" alt="Kursi pernikahan dan rangkaian bunga dalam pencahayaan hangat" fill sizes="(max-width: 700px) 100vw, 55vw" /></div>
      </div>
    </section>
  );
}
