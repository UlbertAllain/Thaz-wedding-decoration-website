import type { Metadata } from "next";
import Link from "next/link";
import { regions } from "@/modules/portfolio/data/regions";

export const metadata: Metadata = { title: "Arsip Venue", description: "Jelajahi arsip dekorasi THAZ Decoration berdasarkan wilayah." };
export default function PortfolioIndexPage() {
  return <main className="inner-page shell">
    <p className="inner-kicker">THAZ / Venue Archive <span>— Berdasarkan Lokasi</span></p>
    <header className="inner-header"><h1 className="display-heading">Arsip <span>venue.</span></h1><p>Jelajahi dokumentasi dekorasi berdasarkan wilayah.</p></header>
    <nav aria-label="Semua wilayah" className="archive-region-list">{regions.map((region, index) => <Link key={region.slug} href={`/portfolio/${region.slug}`}><small>{String(index + 1).padStart(2, "0")}</small><span>{region.name}</span><span aria-hidden="true">↗</span></Link>)}</nav>
  </main>;
}
