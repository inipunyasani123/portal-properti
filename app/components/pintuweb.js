// Tautan ke situs utama PintuWeb. Portal ini zona terpisah (basePath /website-properti) di domain yang sama, jadi
// semua tautan ke situs utama memakai URL absolut dan <a> biasa: next/link akan menempelkan basePath.
export const PINTUWEB = 'https://www.pintuweb.id';

/** Kontak dari PintuWeb/app/lib/site.ts (WA_NUMBER, WA_DISPLAY). Ganti di sana = ganti di sini. */
export const WA_NUMBER = '6285190931399';
export const WA_DISPLAY = '+62 851 9093 1399';
export const wa = (teks) => `https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(teks)}`;

/**
 * Angka paket "website-properti" & "marketplace-properti" dari PintuWeb/app/lib/packages.ts dan GUARANTEE_DAYS di
 * site.ts. Satu-satunya tempat angka bisnis di portal ini: hero, langkah, dan FAQ mengambil dari sini.
 */
export const PAKET = {
  nama: 'Website Properti',
  mulai: 'Rp1 juta',
  sampai: 'Rp10 juta',
  waktu: '5–8 hari kerja',
  garansiHari: 30,
};
export const PAKET_MARKETPLACE = {
  nama: 'Marketplace Properti',
  mulai: 'Rp3 juta',
  waktu: '2–4 minggu',
};

/** Galeri yang tayang di www.pintuweb.id/<path> (lihat lib/portals.ts di PintuWeb). */
export const GALERI = [
  { path: 'landing-page', label: 'Landing Page' },
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
