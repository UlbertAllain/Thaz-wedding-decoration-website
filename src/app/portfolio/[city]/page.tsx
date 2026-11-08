import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { PortfolioGrid } from "@/modules/portfolio/components/portfolio-grid";
import { regions } from "@/modules/portfolio/data/regions";
import { getProjectsByRegion, getRegion } from "@/modules/portfolio/lib/portfolio";

type Props = { params: Promise<{ city: string }> };
export const dynamicParams = false;
export function generateStaticParams() { return regions.map(({ slug }) => ({ city: slug })); }
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const region = getRegion((await params).city);
  return { title: region ? `Arsip ${region.name}` : "Wilayah tidak ditemukan", description: region?.description };
}
export default async function RegionPage({ params }: Props) {
  const region = getRegion((await params).city);
  if (!region) notFound();
  return <main className="inner-page shell"><div className="inner-breadcrumbs"><Link href="/">Beranda</Link><span> / </span><Link href="/portfolio">Arsip Venue</Link><span> / {region.name}</span></div>
    <header className="inner-header"><small>THAZ / Wedding Decoration Studio</small><h1 className="display-heading">{region.name}<span>.</span></h1><p>{region.description}</p></header>
    <PortfolioGrid items={getProjectsByRegion(region.slug)} />
    <Link className="text-link back-link" href="/portfolio">Semua Wilayah <span aria-hidden="true">↗</span></Link>
  </main>;
}
