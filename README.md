# THAZ Decoration

Website portfolio statis untuk **THAZ Decoration**, studio dekorasi pernikahan yang berbasis di Solo, Jawa Tengah. Website menampilkan profil studio, pilihan karya, arsip berdasarkan lokasi, dan kanal konsultasi dalam desain editorial yang responsif.

## Status proyek

**Frontend implementation / content staging.** Struktur halaman dan navigasi telah dibuat, tetapi media saat ini masih berupa potongan dari referensi desain. Sebelum publikasi, ganti dengan foto asli yang telah mendapat izin penggunaan dan verifikasi seluruh informasi proyek.

## Tech stack

- Next.js 16 (App Router, static export)
- React 19 dan TypeScript (strict mode)
- Custom CSS untuk responsive layout
- Vitest untuk pengujian data dan ESLint untuk static analysis

Website tidak memerlukan backend, database, autentikasi, atau CMS pada fase statis ini.

## Menjalankan project

Persyaratan: **Node.js 20.9+** (direkomendasikan Node.js 22 LTS) dan npm.

```bash
npm ci
npm run dev
```

Buka `http://localhost:3000`.

### Perintah pengembangan

| Perintah | Fungsi |
| --- | --- |
| `npm run dev` | Menjalankan development server |
| `npm run typecheck` | Memeriksa tipe TypeScript |
| `npm run lint` | Menjalankan ESLint |
| `npm run test` | Menjalankan pengujian Vitest |
| `npm run build` | Menghasilkan website statis ke folder `out/` |
| `npm run check` | Menjalankan seluruh pemeriksaan dan build secara berurutan |

## Rute halaman

| Rute | Deskripsi |
| --- | --- |
| `/` | Homepage: hero, tentang, pilihan karya, arsip venue, dan kontak |
| `/portfolio` | Indeks wilayah portfolio |
| `/portfolio/[city]` | Arsip karya berdasarkan wilayah |
| `/karya/[slug]` | Detail karya |

Rute dinamis dibuat saat build berdasarkan data lokal bertipe.

## Struktur project

```text
src/
├── app/                       # Routing, metadata, global styles
├── components/shared/         # Komponen UI bersama
├── config/site.ts             # Identitas brand, URL, dan kontak
└── modules/
    ├── home/components/      # Section homepage
    └── portfolio/
        ├── components/       # UI portfolio
        ├── data/             # Data project dan wilayah
        ├── lib/              # Helper pencarian data
        └── types/            # TypeScript contracts
public/images/                # Media lokal
tests/                        # Automated tests
docs/                         # Dokumentasi teknis dan konten
preview.html                  # Preview visual mandiri
```

Komponen dibagi berdasarkan tanggung jawab. Data portfolio tidak ditempatkan langsung dalam komponen presentasi; arsitektur tidak menambahkan layer server yang tidak dibutuhkan.

## Pengelolaan konten

- `src/modules/portfolio/data/projects.ts`: judul, slug, lokasi, deskripsi, dan foto karya.
- `src/modules/portfolio/data/regions.ts`: daftar lokasi arsip.
- `src/config/site.ts`: konfigurasi identitas dan kontak.
- `public/images/`: foto asli dan aset visual.

Gunakan slug yang unik, teks alternatif gambar yang deskriptif, dan hanya tetapkan lokasi setelah terverifikasi. Panduan rinci tersedia di [docs/CONTENT.md](docs/CONTENT.md).

## Responsive design

Komposisi desktop mengikuti desain editorial yang disetujui. Section **Pilihan Karya** menggunakan CSS Grid khusus layar hingga 700 px supaya hierarki judul, gambar, dan tautan proyek tetap terbaca tanpa tumpang tindih. Section lain tidak diubah oleh penyesuaian ini.

## Build dan deployment

Konfigurasi `next.config.ts` menggunakan `output: "export"` dan `trailingSlash: true`. Jalankan `npm run build`, lalu deploy isi folder `out/` ke penyedia hosting statis.

Setel `NEXT_PUBLIC_SITE_URL` menjadi domain produksi **sebelum build** untuk memastikan metadata URL sesuai. Contohnya tersedia di `.env.example`.

### Checklist sebelum rilis

1. Ganti semua media hasil crop screenshot dengan aset resmi dan berlisensi.
2. Verifikasi nama pasangan, deskripsi, penempatan wilayah, dan izin publikasi.
3. Pastikan tautan konsultasi dan kontak telah disetujui THAZ.
4. Jalankan `npm run check` dan periksa output build.
5. Periksa navigasi, gambar, dan layout pada lebar layar 320, 390, 768, serta 1440 px.

## Dokumentasi

- [Arsitektur dan keputusan teknis](docs/ARCHITECTURE.md)
- [Panduan konten dan aset visual](docs/CONTENT.md)
