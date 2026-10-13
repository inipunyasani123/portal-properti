'use client';
import { useState } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { Home, ArrowDown, ArrowUpRight, MessageCircle, KeyRound, Check, Search, LayoutList, ImageIcon, CalendarCheck, Calculator, Smartphone, ClipboardList, Hammer, ChevronDown } from 'lucide-react';
import { templates } from './components/templates-data';

const WA = 'https://wa.me/6285190931399?text=Halo%2C%20saya%20tertarik%20template%20marketplace%20properti%20di%20PortalProperti';

const SPESIFIKASI = [
  { icon: Search, title: 'Pencarian & filter', desc: 'Status, jenis, kota, kamar, dan harga — rentang beli dan sewa dipisah, sewa tahunan disetarakan per bulan.' },
  { icon: LayoutList, title: 'Detail listing', desc: 'Spesifikasi lengkap termasuk harga per m², peta tingkat kawasan, dan listing serupa.' },
  { icon: ImageIcon, title: 'Galeri properti', desc: 'Foto besar dengan miniatur — kesan pertama yang menjual sebelum survei.' },
  { icon: CalendarCheck, title: 'Jadwal survei', desc: 'Pengunjung memilih hari dan jam di halaman listing. Saat dipasang, bisa diteruskan ke WhatsApp, email, atau CRM.' },
  { icon: Calculator, title: 'Halaman khas per wajah', desc: 'Kalkulator biaya beli, perbandingan listing, penyusun kunjungan, atau panduan kawasan.' },
  { icon: Smartphone, title: 'Responsif penuh', desc: 'Diuji sampai lebar 360 px, termasuk tabel perbandingan dan formulir jadwal.' },
];

const SERAH = [
  { icon: ClipboardList, no: '01', title: 'Survei Kebutuhan', desc: 'Ceritakan bisnismu: agen, developer, atau listing pribadi.' },
  { icon: Home, no: '02', title: 'Pilih Blok', desc: 'Tentukan wajah yang pas — butik, rumah pertama, mewah, atau kawasan.' },
  { icon: Hammer, no: '03', title: 'Renovasi', desc: 'Kami pasang logo, warna, dan data listing-mu ke dalam template.' },
  { icon: KeyRound, no: '04', title: 'Serah Terima Kunci', desc: 'Website live + akses penuh jadi milikmu. Garansi tetap berjalan.' },
];

const TANYA = [
  { q: 'Bisakah saya mengelola listing sendiri setelah jadi?', a: 'Bisa. Data listing tersimpan terstruktur dan mudah diubah — kami sertakan panduan menambah/mengubah properti. Kalau mau, kami juga bisa bantu kelola.' },
  { q: 'Berapa biaya membuat website properti seperti ini?', a: 'Website properti untuk satu agen atau developer Rp2 juta–Rp4,5 juta (5–8 hari kerja). Marketplace multi-agen dengan akun pemasang dan moderasi listing mulai Rp7,5 juta (2–4 minggu). Rinciannya ada di halaman paket PintuWeb.' },
  { q: 'Berapa banyak listing yang bisa ditampung?', a: 'Tidak ada batasan dari sisi template. Puluhan hingga ratusan listing tetap cepat karena halaman dibangun dengan Next.js yang ringan.' },
  { q: 'Apakah cocok untuk agen perorangan, bukan perusahaan?', a: 'Sangat cocok. Template "hangat" dan "editorial" justru dirancang untuk kesan personal — pembeli merasa bicara dengan orang, bukan korporasi.' },
  { q: 'Bagaimana calon pembeli menghubungi saya?', a: 'Di demo, setiap listing punya formulir jadwal survei yang hanya menampilkan ringkasan. Saat dipasang untuk bisnismu, formulir itu kami arahkan ke WhatsApp, email, atau sistem yang kamu pakai — lengkap dengan nama properti dan jadwal yang dipilih.' },
];

export default function PortalProperti() {
  const [buka, setBuka] = useState(0);
  return (
    <div id="top" className="blueprint min-h-screen">
      {/* Jejak: portal ini bagian dari PintuWeb */}
      <nav aria-label="Jejak" className="bg-slatep text-kabut text-xs">
        <ol className="mx-auto flex max-w-6xl px-4 sm:px-6 items-center gap-2 py-1.5">
          <li><a href="https://www.pintuweb.id" className="font-semibold underline-offset-4 hover:underline">PintuWeb</a></li>
          <li aria-hidden="true" className="opacity-60">/</li>
          <li aria-current="page">Website Properti</li>
        </ol>
      </nav>
      {/* Navbar */}
      <header className="sticky top-0 z-40 border-b border-slatep/10 bg-kabut/90 backdrop-blur-xl">
        <nav className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3.5 sm:px-6">
          <a href="#top" className="flex items-center gap-2 text-lg font-extrabold tracking-tight">
            <span className="grid h-9 w-9 place-items-center rounded-xl bg-slatep text-zamrud-terang"><Home size={17} /></span>
            PortalProperti
          </a>
          <div className="hidden items-center gap-6 text-sm font-bold text-mutedp md:flex" role="navigation" aria-label="Navigasi">
            <a href="#koleksi" className="transition hover:text-zamrud">Perumahan</a>
            <a href="#spesifikasi" className="transition hover:text-zamrud">Spesifikasi</a>
            <a href="#serah" className="transition hover:text-zamrud">Serah Terima</a>
            <a href="#tanya" className="transition hover:text-zamrud">FAQ</a>
          </div>
          <a href={WA} target="_blank" rel="noopener noreferrer" className="rounded-full bg-zamrud px-5 py-2 text-sm font-extrabold text-white transition hover:bg-slatep">
            Konsultasi
          </a>
        </nav>
      </header>

      {/* Hero */}
      <section className="px-4 pt-16 pb-12 text-center sm:px-6">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="mx-auto max-w-3xl">
          <span className="inline-flex items-center gap-2 rounded-full bg-white px-4 py-1.5 text-xs font-extrabold uppercase tracking-wide text-zamrud shadow-sm">
            <KeyRound size={13} /> 4 template · 4 kepribadian pasar
          </span>
          <h1 className="mt-6 text-4xl font-extrabold leading-[1.04] sm:text-6xl md:text-7xl">
            Satu industri,<br /><span className="text-zamrud">empat wajah</span> berbeda.
          </h1>
          <p className="mx-auto mt-5 max-w-xl text-lg text-mutedp">
            Marketplace properti tidak harus seragam. Butik yang dikurasi, rumah pertama yang mudah dibandingkan, hunian mewah yang dikunjungi privat, atau panduan kawasan — pilih wajah bisnismu.
          </p>
          <a href="#koleksi" className="mt-9 inline-flex items-center gap-2 rounded-full bg-slatep px-8 py-4 text-sm font-extrabold text-white transition hover:bg-zamrud">
            Masuk ke Perumahan <ArrowDown size={16} />
          </a>
        </motion.div>
      </section>

      {/* Koleksi — kartu rumah */}
      <section id="koleksi" className="scroll-mt-24 px-4 pb-20 sm:px-6">
        <div className="mx-auto grid max-w-6xl gap-x-10 gap-y-16 md:grid-cols-2">
          {templates.map((t, i) => (
            <motion.article
              key={t.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-70px' }}
              transition={{ duration: 0.55, delay: (i % 2) * 0.1, ease: [0.22, 1, 0.36, 1] }}
              className="group"
            >
              <a href={t.url} aria-label={`Buka demo ${t.name}`} className="block">
                <div className="rumah-wrap relative">
                  <span className="cerobong" aria-hidden="true" />
                  <div className="rumah relative bg-white p-2 pt-[12%]">
                    <div className="relative aspect-[16/10] overflow-hidden rounded-lg">
                      <Image src={t.image} alt="" fill sizes="(max-width:768px) 100vw, 50vw" className="object-cover object-top" priority={i < 2} />
                    </div>
                  </div>
                  {/* Pintu label */}
                  <span className="absolute bottom-0 left-1/2 -translate-x-1/2 rounded-t-xl px-5 py-2 text-xs font-extrabold uppercase tracking-wide" style={{ background: t.warna, color: t.teks }}>
                    {t.gaya}
                  </span>
                </div>
              </a>
              <div className="mt-6 px-1">
                <div className="flex items-center justify-between gap-3">
                  <div className="flex flex-wrap items-center gap-3">
                    <h2 className="text-2xl font-extrabold">{t.name}</h2>
                    {/* Papan "terjual" ala agen properti */}
                    {t.terjual > 0 && <span className="-rotate-3 rounded-sm border-2 border-slatep bg-white px-2 py-0.5 text-[11px] font-extrabold uppercase tracking-wide text-slatep shadow-[2px_2px_0_var(--color-zamrud)]">{t.terjual} terjual</span>}
                  </div>
                  <span className="text-xs font-bold uppercase tracking-wide text-mutedp">Blok {String.fromCharCode(65 + i)}-0{i + 1}</span>
                </div>
                <p className="mt-2 leading-relaxed text-mutedp">{t.description}</p>
                <ul className="mt-4 space-y-2">
                  {t.fitur.map((f) => (
                    <li key={f} className="flex items-start gap-2.5 text-sm font-semibold">
                      <span className="mt-0.5 grid h-5 w-5 shrink-0 place-items-center rounded-full" style={{ background: t.warna, color: t.teks }}><Check size={11} strokeWidth={3.5} /></span>
                      {f}
                    </li>
                  ))}
                </ul>
                <p className="mt-5 text-xs font-extrabold uppercase tracking-widest text-mutedp">Coba langsung</p>
                <ul className="mt-2 flex flex-wrap gap-2">
                  {t.halaman.map(([href, label]) => (
                    <li key={href}><a href={t.url + href} className="inline-flex items-center gap-1 rounded-full border border-slatep/15 bg-white px-3 py-1.5 text-sm font-bold transition hover:border-zamrud hover:text-zamrud">{label} <ArrowUpRight size={13} /></a></li>
                  ))}
                </ul>
                <a href={WA} target="_blank" rel="noopener noreferrer" className="mt-5 inline-flex items-center gap-1.5 text-sm font-extrabold text-zamrud underline-offset-4 hover:underline">
                  Pesan template {t.name} <ArrowUpRight size={15} />
                </a>
              </div>
            </motion.article>
          ))}
        </div>
      </section>

      {/* Spesifikasi bangunan — fitur marketplace */}
      <section id="spesifikasi" className="scroll-mt-24 border-t border-slatep/10 bg-white px-4 py-16 sm:px-6 lg:py-20">
        <div className="mx-auto max-w-6xl">
          <div className="text-center">
            <p className="text-xs font-extrabold uppercase tracking-[0.25em] text-zamrud">Spesifikasi Bangunan</p>
            <h2 className="mt-3 text-3xl font-extrabold sm:text-4xl">Semua unit <span className="text-zamrud">sudah termasuk</span></h2>
            <p className="mx-auto mt-4 max-w-xl text-mutedp">Apapun wajah yang kamu pilih, fondasinya sama kokoh — fitur marketplace lengkap sejak hari pertama.</p>
          </div>
          <div className="mt-12 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {SPESIFIKASI.map((s, i) => (
              <motion.div
                key={s.title}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.45, delay: (i % 3) * 0.08 }}
                className="rounded-2xl border border-slatep/10 bg-kabut p-6 transition hover:-translate-y-1 hover:shadow-lg"
              >
                <span className="grid h-11 w-11 place-items-center rounded-xl bg-slatep text-zamrud-terang"><s.icon size={20} /></span>
                <h3 className="mt-4 text-lg font-extrabold">{s.title}</h3>
                <p className="mt-1.5 text-sm leading-relaxed text-mutedp">{s.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Proses serah terima */}
      <section id="serah" className="scroll-mt-24 px-4 py-16 sm:px-6 lg:py-20">
        <div className="mx-auto max-w-6xl">
          <div className="text-center">
            <p className="text-xs font-extrabold uppercase tracking-[0.25em] text-zamrud">Proses</p>
            <h2 className="mt-3 text-3xl font-extrabold sm:text-4xl">Empat langkah sampai <span className="text-zamrud">serah terima kunci</span></h2>
          </div>
          <div className="relative mt-14 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
            <span className="absolute left-0 right-0 top-7 hidden h-0.5 border-t-2 border-dashed border-zamrud/40 lg:block" aria-hidden="true" />
            {SERAH.map((s, i) => (
              <motion.div
                key={s.no}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.45, delay: i * 0.1 }}
                className="relative text-center"
              >
                <span className="relative z-10 mx-auto grid h-14 w-14 place-items-center rounded-2xl bg-slatep text-zamrud-terang shadow-lg"><s.icon size={22} /></span>
                <p className="mt-3 text-xs font-extrabold uppercase tracking-widest text-zamrud">Langkah {s.no}</p>
                <h3 className="mt-1 text-lg font-extrabold">{s.title}</h3>
                <p className="mx-auto mt-1.5 max-w-[15rem] text-sm leading-relaxed text-mutedp">{s.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section id="tanya" className="scroll-mt-24 border-t border-slatep/10 bg-white px-4 py-16 sm:px-6 lg:py-20">
        <div className="mx-auto max-w-3xl">
          <div className="text-center">
            <p className="text-xs font-extrabold uppercase tracking-[0.25em] text-zamrud">FAQ</p>
            <h2 className="mt-3 text-3xl font-extrabold sm:text-4xl">Sebelum kamu <span className="text-zamrud">pindah masuk</span></h2>
          </div>
          <div className="mt-10 space-y-3">
            {TANYA.map((t, i) => {
              const open = buka === i;
              return (
                <div key={t.q} className={`rounded-2xl border bg-kabut transition ${open ? 'border-zamrud shadow-md' : 'border-slatep/10'}`}>
                  <button type="button" onClick={() => setBuka(open ? -1 : i)} aria-expanded={open} className="flex w-full items-center justify-between gap-4 px-6 py-4 text-left">
                    <span className="text-base font-extrabold leading-snug">{t.q}</span>
                    <span className={`grid h-7 w-7 shrink-0 place-items-center rounded-full transition ${open ? 'rotate-180 bg-zamrud text-white' : 'bg-slatep/10 text-slatep'}`}>
                      <ChevronDown size={15} />
                    </span>
                  </button>
                  {open && (
                    <div className="border-t border-slatep/10 px-6 py-4">
                      <p className="text-sm leading-relaxed text-mutedp">{t.a}</p>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-slatep px-4 py-16 text-center text-white sm:px-6">
        <motion.div initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.55 }} className="mx-auto max-w-xl">
          <span className="mx-auto grid h-14 w-14 place-items-center rounded-2xl bg-zamrud"><KeyRound size={24} /></span>
          <h2 className="mt-6 text-3xl font-extrabold leading-tight md:text-4xl">Kuncinya sudah di tangan kami.</h2>
          <p className="mt-3 text-white/75">Pilih wajah yang pas untuk bisnismu — kami pasang logo, warna, dan listing-mu ke dalamnya.</p>
          <a href={WA} target="_blank" rel="noopener noreferrer" className="mt-8 inline-flex items-center gap-2 rounded-full bg-zamrud px-8 py-4 text-sm font-extrabold text-white transition hover:scale-[1.03] active:scale-95">
            <MessageCircle size={16} /> Chat WhatsApp
          </a>
        </motion.div>
      </section>

      <footer className="border-t border-white/10 bg-slatep px-4 pb-6 pt-10 text-white/75">
        <div className="mx-auto grid max-w-6xl grid-cols-1 gap-8 text-center sm:grid-cols-3 sm:text-left">
          <div>
            <p className="flex items-center justify-center gap-2 text-lg font-extrabold text-white sm:justify-start">
              <span className="grid h-8 w-8 place-items-center rounded-lg bg-zamrud text-white"><Home size={15} /></span>
              PortalProperti
            </p>
            <p className="mt-2 text-sm leading-relaxed">Empat wajah marketplace properti — pilih yang paling menyerupai bisnismu.</p>
          </div>
          <nav aria-label="Tautan footer" className="text-sm">
            <p className="text-xs font-extrabold uppercase tracking-widest text-zamrud-terang">Jelajahi</p>
            <ul className="mt-3 space-y-2">
              <li><a href="#koleksi" className="transition hover:text-white">Kompleks Template</a></li>
              <li><a href="#spesifikasi" className="transition hover:text-white">Spesifikasi</a></li>
              <li><a href="#serah" className="transition hover:text-white">Proses Serah Terima</a></li>
              <li><a href="#tanya" className="transition hover:text-white">FAQ</a></li>
            </ul>
          </nav>
          <div className="text-sm">
            <p className="text-xs font-extrabold uppercase tracking-widest text-zamrud-terang">Hubungi</p>
            <ul className="mt-3 space-y-2">
              <li><a href={WA} target="_blank" rel="noopener noreferrer" className="transition hover:text-white">WhatsApp +62 851 9093 1399</a></li>
              <li><a href="https://www.pintuweb.id" className="transition hover:text-white">pintuweb.id</a></li>
            </ul>
          </div>
        </div>
        <p className="mt-10 border-t border-white/10 pt-5 text-center text-xs text-white/75">
          © {new Date().getFullYear()} PortalProperti · bagian dari PintuWeb — rumah untuk semua template.
        </p>
      </footer>
    </div>
  );
}
