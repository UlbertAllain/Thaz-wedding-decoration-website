import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { projects } from "@/modules/portfolio/data/projects";
import { getProject } from "@/modules/portfolio/lib/portfolio";

type Props = { params: Promise<{ slug: string }> };
export const dynamicParams = false;
export function generateStaticParams() { return projects.map(({ slug }) => ({ slug })); }
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const project = getProject((await params).slug);
  return { title: project ? project.title : "Karya tidak ditemukan", description: project?.summary };
}
export default async function ProjectDetailPage({ params }: Props) {
  const project = getProject((await params).slug);
  if (!project) notFound();
  return <main className="inner-page detail-page shell">
    <div className="inner-breadcrumbs"><Link href="/">Beranda</Link><span> / </span><Link href="/#karya">Pilihan Karya</Link><span> / {project.title}</span></div>
    <header className="inner-header"><small>THAZ / Selected Work</small><h1 className="display-heading">{project.title}<span>.</span></h1><p>{project.summary}</p></header>
    <div className="media-frame detail-hero"><Image src={project.coverImage} alt={project.imageAlt} fill priority sizes="100vw" /></div>
    <div className="detail-labels"><span>Selected Work / {project.title}</span><span>Visual preview — not verified event photography</span></div>
    <div className="detail-gallery">{project.images.slice(1).map((src, idx) => <div className="media-frame" key={src}><Image src={src} alt={`Detail dekorasi referensi ${idx + 1}`} fill sizes="(max-width: 700px) 100vw, 50vw" /></div>)}</div>
    <Link className="text-link back-link" href="/#karya">Kembali ke Pilihan Karya <span aria-hidden="true">↗</span></Link>
  </main>;
}
