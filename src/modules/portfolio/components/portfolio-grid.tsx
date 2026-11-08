import Image from "next/image";
import Link from "next/link";
import type { PortfolioProject } from "../types/portfolio";

export function PortfolioGrid({ items }: { items: readonly PortfolioProject[] }) {
  if (items.length === 0) {
    return <div className="archive-empty"><p>Dokumentasi proyek untuk wilayah ini belum tersedia dalam materi yang sudah terverifikasi.</p><Link className="text-link" href="/#karya">Kembali ke karya pilihan <span aria-hidden="true">↗</span></Link></div>;
  }
  return (
    <div className="archive-grid">
      {items.map((item, index) => <Link href={`/karya/${item.slug}`} className="archive-item" key={item.slug}>
        <div className="media-frame archive-item__image"><Image src={item.coverImage} alt={item.imageAlt} fill sizes="(max-width: 700px) 100vw, 60vw" /></div>
        <div className="archive-item__text"><span>Project {String(index + 1).padStart(2, "0")}</span><h2>{item.title}</h2><span aria-hidden="true">↗</span></div>
      </Link>)}
    </div>
  );
}
