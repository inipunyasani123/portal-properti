# PortalProperti — Empat Wajah Marketplace Properti

PortalProperti: 4 template marketplace properti dengan kepribadian berbeda — editorial, proptech, luxury, dan hangat.

**Demo live:** https://www.pintuweb.id/website-properti

![Tangkapan layar PortalProperti](public/og.jpg)

> Katalog demo milik PintuWeb. Setiap kartu menautkan ke demo live yang bisa dicoba.

## Konsep

Katalog marketplace properti. Gaya cetak biru dengan kartu berbentuk rumah lengkap dengan atap dan cerobong.

## Varian yang dipamerkan (4)

- [Beranda](https://properti-beranda.pintuweb.id)
- [Homigo](https://properti-homigo.pintuweb.id)
- [Lumora](https://properti-lumora.pintuweb.id)
- [Propertia](https://properti-propertia.pintuweb.id)

## Tautan langsung per demo

Setiap kartu punya `id` = slug demo: `propertia`, `homigo`, `lumora`, `beranda`. Buka `/website-properti#lumora` untuk menggulir ke kartunya dan menyorotnya ±2 detik. Gambar kartu: `public/images/properti/<slug>.webp` (desktop) dan `<slug>-m.webp` (potret ponsel); buat varian dengan `node scripts/gambar-varian.mjs` (sumber di SUMBER.md).

## Halaman

`/`

## Teknologi

- Next.js 15.5 (App Router) dan React 19
- Tailwind CSS v4
- JavaScript
- Framer Motion, Lucide (ikon)
- Font: Manrope (next/font)
- SEO: metadata per halaman, Open Graph, JSON-LD, sitemap.xml, dan robots.txt

## Menjalankan secara lokal

```bash
npm install
npm run dev
```

Buka http://localhost:3000. Untuk build produksi: `npm run build` lalu `npm start`.

---

Dibuat oleh [PintuWeb](https://www.pintuweb.id), jasa pembuatan website.
