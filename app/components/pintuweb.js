import HARGA from './harga.json';
// Tautan ke situs utama PintuWeb. Portal ini zona terpisah (basePath /website-properti) di domain yang sama, jadi
// semua tautan ke situs utama memakai URL absolut dan <a> biasa: next/link akan menempelkan basePath.
/** Harga & kontak dibaca dari ./harga.json (salinan https://www.pintuweb.id/harga.json, diambil scripts/ambil-harga.mjs saat build). */
const P = (slug) => HARGA.paket[slug];
const rp = (n) => (n >= 1e6 ? `Rp${String(n / 1e6).replace('.', ',')} juta` : `Rp${n / 1e3} ribu`);

export const PINTUWEB = 'https://www.pintuweb.id';

/** Kontak dari PintuWeb/app/lib/site.ts (WA_NUMBER, WA_DISPLAY). Ganti di sana = ganti di sini. */
export const WA_NUMBER = HARGA.wa.nomor;
export const WA_DISPLAY = HARGA.wa.tampil;
export const wa = (teks) => `https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(teks)}`;

/**
 * Angka paket "website-properti" & "marketplace-properti" dari PintuWeb/app/lib/packages.ts dan GUARANTEE_DAYS di
 * site.ts. Satu-satunya tempat angka bisnis di portal ini: hero, langkah, dan FAQ mengambil dari sini.
 */
export const PAKET = {
  nama: 'Website Properti',
  mulai: rp(P('website-properti').mulai),
  sampai: rp(P('website-properti').sampai),
  waktu: P('website-properti').waktu,
  garansiHari: HARGA.garansiHari,
};
export const PAKET_MARKETPLACE = {
  nama: 'Marketplace Properti',
  mulai: rp(P('marketplace-properti').mulai),
  waktu: P('marketplace-properti').waktu,
};

/** Galeri yang tayang di www.pintuweb.id/<path> (lihat lib/portals.ts di PintuWeb). */
export const GALERI = [
  { path: 'landing-page', label: 'Landing Page' },
  { path: 'website-company-profile', label: 'Company Profile' },
  { path: 'toko-online', label: 'Toko Online' },
  { path: 'aplikasi-mobile', label: 'Aplikasi Mobile' },
  { path: 'menu-digital', label: 'Menu Digital' },
  { path: 'link-in-bio', label: 'Link in Bio' },
  { path: 'kontes-desain', label: 'Konsep Desain' },
  { path: 'undangan-digital', label: 'Undangan Digital' },
  { path: 'website-portofolio', label: 'Portofolio Pribadi' },
  { path: 'website-reservasi', label: 'Reservasi & Booking' },
  { path: 'website-properti', label: 'Properti' },
  { path: 'aplikasi-to-do', label: 'To-Do & Produktivitas' },
];

export const GALERI_LAIN = GALERI.filter((g) => g.path !== 'website-properti');

/** Paket harga (lib/packages.ts: website-properti), halaman layanan, dan galeri demo PintuWeb untuk kategori ini. */
export const LANJUT = [
  { href: `${PINTUWEB}/paket#website-properti`, label: 'Harga paket Website Properti' },
  { href: `${PINTUWEB}/services/website-custom`, label: 'Jasa website custom & aplikasi web' },
  { href: `${PINTUWEB}/demo#properti`, label: 'Semua demo PintuWeb' },
];

/** Artikel PintuWeb yang relevan, ditampilkan di bawah "Baca juga". */
export const BACA_JUGA = [
  { href: `${PINTUWEB}/artikel/biaya-membuat-website`, label: 'Biaya membuat website: rincian dan faktor harganya' },
];
