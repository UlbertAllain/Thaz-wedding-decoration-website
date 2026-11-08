import Link from "next/link";
export default function NotFound() {
  return <main className="inner-page shell"><div className="inner-header"><small>404 / Not Found</small><h1 className="display-heading">Halaman <span>tidak ditemukan.</span></h1><p>Halaman yang kamu cari tidak tersedia.</p><Link className="text-link back-link" href="/">Kembali ke beranda <span aria-hidden="true">↗</span></Link></div></main>;
}
