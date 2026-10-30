/* eslint-disable @next/next/no-img-element */
import Image, { getImageProps } from 'next/image';
import { Home, ArrowDown, ArrowUpRight, MessageCircle, KeyRound, Check, Search, LayoutList, ImageIcon, CalendarCheck, Calculator, Smartphone, ClipboardList, Hammer, ChevronDown } from 'lucide-react';
import { templates, slugOf } from './components/templates-data';
import { LANJUT, GALERI_LAIN, BACA_JUGA, PINTUWEB, PAKET, PAKET_MARKETPLACE, WA_DISPLAY, wa } from './components/pintuweb';
import GaleriMenu from './components/GaleriMenu';
import BilahLengket from './components/BilahLengket';
import SorotHash from './components/SorotHash';

const WA = wa('Halo PintuWeb, saya mau website properti. Boleh minta info?');
const N = templates.length;
const SLUGS = templates.map(slugOf);
const WA_BILAH = wa('Halo PintuWeb, saya mau website properti. Boleh minta info?');

/** Gambar potret ponsel < 768 px, gambar desktop untuk layar lebar (<picture> + <source media>). */
function Gambar({ t, sizes, priority = false, className }) {
  const { props: d } = getImageProps({ src: t.image, alt: '', width: 1600, height: 1000, sizes, priority });
  const { props: m } = getImageProps({ src: t.imageM, alt: '', width: 780, height: 1688, sizes, priority });
  return (
    <picture>
      <source media="(min-width: 768px)" srcSet={d.srcSet} sizes={sizes} />
      <source media="(max-width: 767px)" srcSet={m.srcSet} sizes={sizes} />
      <img src={d.src} alt="" width={1600} height={1000} sizes={sizes} className={className} loading={priority ? 'eager' : 'lazy'} fetchPriority={priority ? 'high' : undefined} decoding="async" />
    </picture>
  );
}

const SPESIFIKASI = [
  { icon: Search, title: 'Cari dan saring', desc: 'Pengunjung cari berdasarkan jenis, kota, kamar, dan harga.' },
  { icon: LayoutList, title: 'Detail properti', desc: 'Harga per m², peta kawasan, dan properti serupa.' },
  { icon: ImageIcon, title: 'Foto besar', desc: 'Galeri foto yang bikin orang tertarik datang survei.' },
  { icon: CalendarCheck, title: 'Jadwal survei', desc: 'Pengunjung pilih hari dan jam. Masuk ke WhatsApp atau email-mu.' },
  { icon: Calculator, title: 'Fitur khas', desc: 'Hitung biaya beli, bandingkan properti, atau panduan kawasan.' },
  { icon: Smartphone, title: 'Enak dibuka di HP', desc: 'Semua halaman rapi di layar ponsel.' },
];

const SERAH = [
  { icon: ClipboardList, no: '01', title: 'Ceritakan bisnismu', desc: 'Kamu agen, developer, atau jual properti pribadi?' },
  { icon: Home, no: '02', title: 'Pilih contoh', desc: 'Pilih tampilan yang paling cocok denganmu.' },
  { icon: Hammer, no: '03', title: 'Kami sesuaikan', desc: 'Logo, warna, dan data properti kami pasang.' },
  { icon: KeyRound, no: '04', title: 'Website siap', desc: `Setelah lunas, website jadi milikmu. Ada garansi ${PAKET.garansiHari} hari.` },
];

const TANYA = [
  { q: 'Berapa biaya membuat website properti?', a: `Untuk satu agen atau developer, mulai ${PAKET.mulai} (${PAKET.waktu}). Untuk portal banyak agen sekaligus, mulai ${PAKET_MARKETPLACE.mulai} (${PAKET_MARKETPLACE.waktu}).` },
  { q: 'Apa bedanya dua jenis itu?', a: 'Website untuk satu agen atau developer berisi properti milikmu saja. Portal banyak agen bisa dipakai banyak agen, masing-masing punya akun dan memasang propertinya sendiri.' },
  { q: 'Bisa saya kelola sendiri?', a: 'Bisa. Ada halaman pengelola untuk tambah dan ubah properti, plus panduan singkat. Kalau mau, kami bantu kelola.' },
  { q: 'Berapa banyak properti yang muat?', a: 'Tidak ada batas dari sisi desain. Puluhan sampai ratusan properti tetap cepat dibuka.' },
  { q: 'Cocok untuk agen perorangan?', a: 'Cocok. Tampilannya bisa dibuat personal, jadi pembeli merasa bicara dengan orang, bukan perusahaan.' },
  { q: 'Bagaimana calon pembeli menghubungi saya?', a: 'Lewat formulir jadwal survei di tiap properti. Di website milikmu, pesannya kami arahkan ke WhatsApp atau email.' },
];

const FAQ_LD = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: TANYA.map((t) => ({ '@type': 'Question', name: t.q, acceptedAnswer: { '@type': 'Answer', text: t.a } })),
};

function Logo({ kecil = false }) {
  return (
    <>
      {kecil
        ? <span className="grid h-9 shrink-0 place-items-center rounded-lg bg-white px-2"><img src="/website-properti/images/logo-pintuweb.png" alt="" width={367} height={512} className="h-6 w-auto" /></span>
        : <img src="/website-properti/images/logo-pintuweb.png" alt="" width={367} height={512} className="h-8 w-auto shrink-0" />}
      <span className="flex flex-col text-left leading-none">
        PintuWeb{' '}
        <span className={`mt-1 text-[10px] font-extrabold uppercase tracking-[0.18em] ${kecil ? 'text-zamrud-terang' : 'text-zamrud'}`}>Website Properti</span>
      </span>
    </>
  );
}

export default function PortalProperti() {
  return (
    <div id="top" className="blueprint min-h-screen">
      <a href="#konten" className="lewati">Lewati ke konten</a>
      {/* Jejak + menu galeri lain */}
      <GaleriMenu pintuweb={PINTUWEB} galeri={GALERI_LAIN} nama="Properti" />

      <header className="sticky top-0 z-40 border-b border-slatep/10 bg-kabut/90 backdrop-blur-xl">
        <div className="mx-auto flex max-w-6xl items-center justify-between gap-3 px-4 py-3 sm:px-6 sm:py-3.5">
          <a href="#top" className="flex items-center gap-2 text-lg font-extrabold tracking-tight">
            <Logo />
          </a>
          <nav aria-label="Navigasi halaman" className="hidden items-center gap-6 text-sm font-bold text-mutedp md:flex">
            <a href="#koleksi" className="transition hover:text-zamrud">Contoh</a>
            <a href="#spesifikasi" className="transition hover:text-zamrud">Fitur</a>
            <a href="#serah" className="transition hover:text-zamrud">Cara Pesan</a>
            <a href="#tanya" className="transition hover:text-zamrud">Tanya Jawab</a>
          </nav>
          <a href={WA} target="_blank" rel="noopener noreferrer" className="shrink-0 rounded-full bg-zamrud px-4 py-2 text-xs font-extrabold text-white transition hover:bg-slatep sm:px-5 sm:text-sm">
            Pesan website properti
          </a>
        </div>
      </header>

      <main id="konten" tabIndex={-1}>
        {/* Hero */}
        <section id="hero" className="px-4 pb-8 pt-6 text-center sm:px-6 sm:pb-12 sm:pt-16">
          <div className="mx-auto max-w-3xl">
            <span className="naik hidden items-center sm:inline-flex gap-2 rounded-full bg-white px-4 py-1.5 text-xs font-extrabold uppercase tracking-wide text-zamrud shadow-sm">
              <KeyRound size={13} aria-hidden="true" /> {N} contoh · bisa dicoba
            </span>
            <h1 className="text-[2.1rem] font-extrabold leading-[1.04] sm:mt-6 sm:text-6xl md:text-7xl">
              Website properti,<br /><span className="text-zamrud">empat gaya</span> pilihan.
            </h1>
            <p className="mx-auto mt-5 hidden max-w-xl text-base text-mutedp sm:block sm:text-lg">
              Pilih gaya yang cocok dengan bisnismu, lalu coba langsung.
            </p>
            <div className="naik naik-2 mt-5 flex flex-col items-center gap-3 sm:mt-9 sm:gap-4">
              <a href="#koleksi" className="inline-flex items-center gap-2 rounded-full bg-slatep px-7 py-3.5 text-sm font-extrabold text-white transition hover:bg-zamrud sm:px-8 sm:py-4">
                Lihat contoh <ArrowDown size={16} aria-hidden="true" />
              </a>
              {/* Ringkasan paket: angka dari PAKET (PintuWeb packages.ts) */}
              <p className="text-sm font-semibold text-slatep/80">Mulai <strong className="font-extrabold text-zamrud">{PAKET.mulai}</strong> <span className="whitespace-nowrap"><span aria-hidden="true" className="mx-1.5 text-zamrud">·</span>{PAKET.waktu}</span></p>
            </div>
          </div>
          {/* Strip demo (ponsel): geser mendatar, menaut ke kartu lewat #slug */}
          <div className="mt-5 md:hidden">
            <p className="text-xs font-extrabold uppercase tracking-widest text-mutedp">Geser untuk melihat {N} demo</p>
            <ul className="geser -mx-4 mt-3 flex snap-x snap-mandatory gap-3 overflow-x-auto px-4 pb-2 text-start" aria-label="Pintasan demo">
              {templates.map((t, i) => (
                <li key={t.name} className="w-[104px] shrink-0 snap-start">
                  <a href={`#${SLUGS[i]}`} className="block">
                    <span className="block aspect-[9/16] overflow-hidden rounded-xl border-2 border-white shadow-md ring-1 ring-slatep/15">
                      <Image src={t.imageM} alt="" width={780} height={1688} sizes="104px" className="h-full w-full object-cover object-top" />
                    </span>
                    <span className="mt-1.5 block text-sm font-extrabold leading-tight">{t.name}</span>
                    <span className="block text-[11px] font-bold text-mutedp">{t.gaya}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* Koleksi — kartu rumah */}
        <section id="koleksi" aria-label="Contoh website properti" className="scroll-mt-[88px] px-4 pb-16 sm:px-6 sm:pb-20">
          <ul className="mx-auto grid max-w-6xl gap-x-10 gap-y-14 md:grid-cols-2 md:gap-y-16">
            {templates.map((t, i) => {
              const slug = slugOf(t);
              return (
                <li key={t.name} id={slug} className="group flex scroll-mt-24 flex-col">
                  {/* Rumah: pratinjau (tautan untuk tetikus; papan ketik memakai tombol "Buka demo") */}
                  <div className="rumah-wrap relative">
                    <span className="cerobong" aria-hidden="true" />
                    <a href={t.url} target="_blank" rel="noopener noreferrer" className="block" tabIndex={-1} aria-hidden="true">
                      <div className="rumah relative bg-white p-2 pt-[12%]">
                        <div className="relative aspect-[4/5] overflow-hidden rounded-lg md:aspect-[16/10]">
                          <Gambar t={t} sizes="(max-width: 767px) calc(100vw - 48px), 520px" className="absolute inset-0 h-full w-full object-cover object-top" priority={i === 0} />
                        </div>
                      </div>
                    </a>
                    {/* Pintu: label gaya */}
                    <span className="pointer-events-none absolute bottom-0 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-t-xl px-5 py-2 text-xs font-extrabold uppercase tracking-wide" style={{ background: t.warna, color: t.teks }}>
                      {t.gaya}
                    </span>
                  </div>
                  <div className="mt-5 flex flex-1 flex-col px-1 sm:mt-6">
                    <div className="flex items-center justify-between gap-3">
                      <div className="flex flex-wrap items-center gap-3">
                        <h2 className="text-2xl font-extrabold">{t.name}</h2>
                        {/* Papan "terjual" ala agen properti */}
                        {t.terjual > 0 && <span className="-rotate-3 rounded-sm border-2 border-slatep bg-white px-2 py-0.5 text-[11px] font-extrabold uppercase tracking-wide text-slatep shadow-[2px_2px_0_var(--color-zamrud)]">{t.terjual} terjual</span>}
                      </div>
                      <span className="shrink-0 text-xs font-bold uppercase tracking-wide text-mutedp">Blok {String.fromCharCode(65 + i)}-0{i + 1}</span>
                    </div>
                    <p className="mt-2 text-[15px] leading-relaxed text-mutedp sm:text-base">{t.description}</p>
                    <ul className="mt-4 space-y-2">
                      {t.fitur.map((f) => (
                        <li key={f} className="flex items-start gap-2.5 text-sm font-semibold">
                          <span className="mt-0.5 grid h-5 w-5 shrink-0 place-items-center rounded-full" style={{ background: t.warna, color: t.teks }} aria-hidden="true"><Check size={11} strokeWidth={3.5} /></span>
                          {f}
                        </li>
                      ))}
                    </ul>
                    <p className="mt-5 text-xs font-extrabold uppercase tracking-widest text-mutedp">Coba langsung</p>
                    <ul className="mt-2 flex flex-wrap gap-2" aria-label={`Halaman khas ${t.name}`}>
                      {t.halaman.map(([href, label]) => (
                        <li key={href}><a href={t.url + href} target="_blank" rel="noopener noreferrer" className="inline-flex min-h-9 items-center gap-1 rounded-full border border-slatep/15 bg-white px-3 text-sm font-bold transition hover:border-zamrud hover:text-zamrud">{label} <ArrowUpRight size={13} aria-hidden="true" /></a></li>
                      ))}
                    </ul>
                    <div className="mt-auto flex flex-wrap gap-2.5 pt-5">
                      <a href={t.url} target="_blank" rel="noopener noreferrer" className="inline-flex min-h-11 items-center gap-1.5 rounded-full bg-slatep px-5 text-sm font-extrabold text-white transition hover:bg-zamrud">
                        Buka demo<span className="sr-only"> {t.name} (tab baru)</span> <ArrowUpRight size={15} aria-hidden="true" />
                      </a>
                      <a href={wa(`Halo PintuWeb, saya mau website properti seperti contoh ${t.name} (${t.url}). Boleh minta info?`)} target="_blank" rel="noopener noreferrer" className="inline-flex min-h-11 items-center gap-1.5 rounded-full border-2 border-zamrud px-5 text-sm font-extrabold text-zamrud transition hover:bg-zamrud hover:text-white">
                        Pesan yang mirip<span className="sr-only"> dengan {t.name} lewat WhatsApp</span>
                      </a>
                    </div>
                    <p className="mt-3 text-xs font-bold text-mutedp">Website Properti mulai <span className="text-zamrud">{PAKET.mulai}</span> · {PAKET.waktu}</p>
                  </div>
                </li>
              );
            })}
          </ul>
        </section>

        {/* Spesifikasi bangunan — fitur marketplace */}
        <section id="spesifikasi" aria-labelledby="judul-spesifikasi" className="scroll-mt-[64px] border-t border-slatep/10 bg-white px-4 py-12 sm:px-6 sm:py-16 lg:py-20">
          <div className="mx-auto max-w-6xl">
            <div className="sm:text-center">
              <p className="text-xs font-extrabold uppercase tracking-[0.25em] text-zamrud">Fitur</p>
              <h2 id="judul-spesifikasi" className="mt-3 text-3xl font-extrabold sm:text-4xl">Fitur yang <span className="text-zamrud">kamu dapat</span></h2>
              <p className="mt-3 max-w-xl text-mutedp sm:mx-auto sm:mt-4">Semua contoh punya fitur ini.</p>
            </div>
            <ul className="mt-8 grid grid-cols-1 gap-3 sm:mt-12 sm:grid-cols-2 sm:gap-5 lg:grid-cols-3">
              {SPESIFIKASI.map((s) => (
                <li key={s.title} className="flex items-start gap-4 rounded-2xl border border-slatep/10 bg-kabut p-4 transition sm:block sm:p-6 sm:hover:-translate-y-1 sm:hover:shadow-lg">
                  <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-slatep text-zamrud-terang"><s.icon size={20} aria-hidden="true" /></span>
                  <div className="sm:mt-4">
                    <h3 className="text-base font-extrabold sm:text-lg">{s.title}</h3>
                    <p className="mt-1 text-sm leading-relaxed text-mutedp sm:mt-1.5">{s.desc}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* Proses serah terima */}
        <section id="serah" aria-labelledby="judul-serah" className="scroll-mt-[64px] px-4 py-12 sm:px-6 sm:py-16 lg:py-20">
          <div className="mx-auto max-w-6xl">
            <div className="sm:text-center">
              <p className="text-xs font-extrabold uppercase tracking-[0.25em] text-zamrud">Cara Pesan</p>
              <h2 id="judul-serah" className="mt-3 text-3xl font-extrabold sm:text-4xl">Empat langkah <span className="text-zamrud">sampai jadi</span></h2>
            </div>
            <ol className="relative mt-8 grid grid-cols-1 gap-5 sm:mt-14 sm:grid-cols-2 sm:gap-8 lg:grid-cols-4">
              <span className="absolute left-0 right-0 top-7 hidden h-0.5 border-t-2 border-dashed border-zamrud/40 lg:block" aria-hidden="true" />
              <span className="absolute bottom-6 left-7 top-6 border-l-2 border-dashed border-zamrud/40 sm:hidden" aria-hidden="true" />
              {SERAH.map((s) => (
                <li key={s.no} className="relative flex items-start gap-4 sm:block sm:text-center">
                  <span className="relative z-10 grid h-14 w-14 shrink-0 place-items-center rounded-2xl bg-slatep text-zamrud-terang shadow-lg sm:mx-auto"><s.icon size={22} aria-hidden="true" /></span>
                  <div>
                    <p className="text-xs font-extrabold uppercase tracking-widest text-zamrud sm:mt-3">Langkah {s.no}</p>
                    <h3 className="mt-0.5 text-lg font-extrabold sm:mt-1">{s.title}</h3>
                    <p className="mt-1 max-w-[19rem] text-sm leading-relaxed text-mutedp sm:mx-auto sm:mt-1.5 sm:max-w-[15rem]">{s.desc}</p>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </section>

        {/* FAQ: <details> bawaan, satu terbuka sekaligus */}
        <section id="tanya" aria-labelledby="judul-tanya" className="scroll-mt-[64px] border-t border-slatep/10 bg-white px-4 py-12 sm:px-6 sm:py-16 lg:py-20">
          <div className="mx-auto max-w-3xl">
            <div className="sm:text-center">
              <p className="text-xs font-extrabold uppercase tracking-[0.25em] text-zamrud">Tanya Jawab</p>
              <h2 id="judul-tanya" className="mt-3 text-3xl font-extrabold sm:text-4xl">Yang sering <span className="text-zamrud">ditanya</span></h2>
            </div>
            <div className="mt-8 space-y-3 sm:mt-10">
              {TANYA.map((t, i) => (
                <details key={t.q} name="faq-properti" open={i === 0} className="tanya group rounded-2xl border border-slatep/10 bg-kabut open:border-zamrud open:shadow-md">
                  <summary className="flex min-h-12 cursor-pointer list-none items-center justify-between gap-4 px-5 py-4 text-left sm:px-6 [&::-webkit-details-marker]:hidden">
                    <span className="text-base font-extrabold leading-snug">{t.q}</span>
                    <span className="grid h-7 w-7 shrink-0 place-items-center rounded-full bg-slatep/10 text-slatep transition group-open:rotate-180 group-open:bg-zamrud group-open:text-white" aria-hidden="true">
                      <ChevronDown size={15} />
                    </span>
                  </summary>
                  <div className="border-t border-slatep/10 px-5 py-4 sm:px-6">
                    <p className="text-sm leading-relaxed text-mutedp">{t.a}</p>
                  </div>
                </details>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="bg-slatep px-4 py-16 text-center text-white sm:px-6">
          <div className="mx-auto max-w-xl">
            <span className="mx-auto grid h-14 w-14 place-items-center rounded-2xl bg-zamrud"><KeyRound size={24} aria-hidden="true" /></span>
            <h2 className="mt-6 text-3xl font-extrabold leading-tight md:text-4xl">Siap punya website properti?</h2>
            <p className="mt-3 text-white/80">Ceritakan bisnismu, kami bantu buatkan.</p>
            <a href={WA} target="_blank" rel="noopener noreferrer" className="mt-8 inline-flex items-center gap-2 rounded-full bg-zamrud px-8 py-4 text-sm font-extrabold text-white transition hover:scale-[1.03] active:scale-95">
              <MessageCircle size={16} aria-hidden="true" /> Chat WhatsApp
            </a>
          </div>
        </section>
      </main>

      <footer className="border-t border-white/10 bg-slatep px-4 pb-6 pt-10 text-white/80 sm:px-6">
        <div className="mx-auto grid max-w-6xl grid-cols-2 gap-x-6 gap-y-8 sm:grid-cols-3">
          <div className="col-span-2 sm:col-span-1">
            <p className="flex items-center gap-2 text-lg font-extrabold text-white"><Logo kecil /></p>
            <p className="mt-3 max-w-xs text-sm leading-relaxed">{N} contoh website properti. Pilih yang paling cocok denganmu.</p>
          </div>
          <nav aria-labelledby="kaki-jelajahi" className="text-sm">
            <p id="kaki-jelajahi" className="text-xs font-extrabold uppercase tracking-widest text-zamrud-terang">Jelajahi</p>
            <ul className="mt-3 space-y-1">
              <li><a href="#koleksi" className="inline-block py-1 transition hover:text-white">Semua Contoh</a></li>
              <li><a href="#spesifikasi" className="inline-block py-1 transition hover:text-white">Fitur</a></li>
              <li><a href="#serah" className="inline-block py-1 transition hover:text-white">Cara Pesan</a></li>
              <li><a href="#tanya" className="inline-block py-1 transition hover:text-white">Tanya Jawab</a></li>
            </ul>
          </nav>
          <div className="text-sm">
            <p className="text-xs font-extrabold uppercase tracking-widest text-zamrud-terang">Hubungi</p>
            <ul className="mt-3 space-y-1">
              <li><a href={WA} target="_blank" rel="noopener noreferrer" className="inline-block py-1 transition hover:text-white">WhatsApp <span className="whitespace-nowrap">{WA_DISPLAY}</span></a></li>
              <li><a href={PINTUWEB} className="inline-block py-1 transition hover:text-white">pintuweb.id</a></li>
            </ul>
          </div>
        </div>
        {/* Lanjut di PintuWeb: harga, layanan, semua demo, dan galeri lain di situs utama */}
        <nav aria-labelledby="lanjut-pintuweb" className="mx-auto mt-10 max-w-6xl border-t border-white/10 pt-8 text-sm">
          <p id="lanjut-pintuweb" className="text-xs font-extrabold uppercase tracking-widest text-zamrud-terang">Lanjut di PintuWeb</p>
          <ul className="mt-4 flex flex-wrap gap-2.5 sm:gap-3">
            {LANJUT.map((l) => (
              <li key={l.href}>
                <a href={l.href} className="inline-flex min-h-9 items-center gap-1.5 rounded-full border border-white/25 px-4 text-xs font-extrabold text-white transition hover:border-zamrud-terang hover:bg-zamrud">
                  {l.label} <ArrowUpRight size={13} aria-hidden="true" />
                </a>
              </li>
            ))}
          </ul>
          <p className="mt-6 text-xs font-extrabold uppercase tracking-widest text-white/70">Baca juga</p>
          <ul className="mt-2 flex flex-wrap gap-x-5 gap-y-1">
            {BACA_JUGA.map((b) => (
              <li key={b.href}><a href={b.href} className="inline-block py-1 underline decoration-white/25 underline-offset-4 transition hover:text-white hover:decoration-zamrud-terang">{b.label}</a></li>
            ))}
          </ul>
          <p className="mt-6 text-xs font-extrabold uppercase tracking-widest text-white/70">Galeri lain</p>
          <ul className="mt-2 flex flex-wrap gap-x-5 gap-y-1">
            {GALERI_LAIN.map((g) => (
              <li key={g.path}>
                <a href={`${PINTUWEB}/${g.path}`} className="inline-block py-1 underline decoration-white/25 underline-offset-4 transition hover:text-white hover:decoration-zamrud-terang">{g.label}</a>
              </li>
            ))}
          </ul>
        </nav>
        <p className="mx-auto mt-8 max-w-6xl border-t border-white/10 pt-5 text-xs text-white/75 sm:text-center">
          © {new Date().getFullYear()} PintuWeb · Galeri Website Properti
        </p>
      </footer>
      <BilahLengket waHref={WA_BILAH} />
      <SorotHash slugs={SLUGS} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(FAQ_LD) }} />
    </div>
  );
}
