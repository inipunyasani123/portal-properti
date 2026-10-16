import Link from 'next/link';
import { templates } from './components/templates-data';

export const metadata = { title: 'Halaman tidak ditemukan', robots: { index: false } };

export default function NotFound() {
  return (
    <main id="konten" className="blueprint flex min-h-screen flex-col items-center justify-center bg-kabut px-6 text-center text-slatep">
      <p className="border border-zamrud/40 bg-white px-3 py-1 font-mono text-xs uppercase tracking-widest text-zamrud">Blok 404</p>
      <h1 className="mt-5 font-display text-4xl font-extrabold sm:text-5xl">Kavling ini kosong</h1>
      <p className="mt-4 max-w-md text-mutedp">Alamat yang kamu tuju tidak ada di denah. {templates.length} marketplace properti ada di halaman utama.</p>
      <Link href="/" className="mt-8 rounded-lg bg-zamrud px-6 py-3 text-sm font-bold text-white transition hover:bg-slatep">Kembali ke denah</Link>
    </main>
  );
}
