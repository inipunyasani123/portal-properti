import Image from 'next/image';
import { Home, ArrowDown, ArrowUpRight, MessageCircle, KeyRound, Check, Search, LayoutList, ImageIcon, CalendarCheck, Calculator, Smartphone, ClipboardList, Hammer, ChevronDown } from 'lucide-react';
import { templates, slugOf } from './components/templates-data';
import { LANJUT, GALERI_LAIN, PINTUWEB, PAKET, PAKET_MARKETPLACE, WA_DISPLAY, wa } from './components/pintuweb';

const WA = wa('Halo PintuWeb, saya tertarik template website properti. Boleh minta info?');
const N = templates.length;

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
  { icon: KeyRound, no: '04', title: 'Serah Terima Kunci', desc: `Website live, dan setelah pelunasan akses penuhnya jadi milikmu. Garansi ${PAKET.garansiHari} hari dan maintenance sesuai paket tetap berjalan.` },
];

const TANYA = [
  { q: 'Bisakah saya mengelola listing sendiri setelah jadi?', a: `Bisa. Paket ${PAKET.nama} sudah termasuk panel admin untuk menambah dan mengubah listing, plus panduan singkatnya. Kalau mau, kami juga bisa bantu kelola.` },
  { q: 'Berapa biaya membuat website properti seperti ini?', a: `Website properti untuk satu agen atau developer ${PAKET.mulai}–${PAKET.sampai} (${PAKET.waktu}). Marketplace multi-agen dengan akun pemasang dan moderasi listing mulai ${PAKET_MARKETPLACE.mulai} (${PAKET_MARKETPLACE.waktu}). Rinciannya ada di halaman paket PintuWeb.` },
  { q: 'Berapa banyak listing yang bisa ditampung?', a: 'Tidak ada batasan dari sisi template. Puluhan hingga ratusan listing tetap cepat karena halaman dibangun dengan Next.js yang ringan.' },
  { q: 'Apakah cocok untuk agen perorangan, bukan perusahaan?', a: 'Sangat cocok. Template "hangat" dan "editorial" justru dirancang untuk kesan personal — pembeli merasa bicara dengan orang, bukan korporasi.' },
  { q: 'Bagaimana calon pembeli menghubungi saya?', a: 'Di demo, setiap listing punya formulir jadwal survei yang hanya menampilkan ringkasan. Saat dipasang untuk bisnismu, formulir itu kami arahkan ke WhatsApp, email, atau sistem yang kamu pakai — lengkap dengan nama properti dan jadwal yang dipilih.' },
];

const FAQ_LD = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: TANYA.map((t) => ({ '@type': 'Question', name: t.q, acceptedAnswer: { '@type': 'Answer', text: t.a } })),
};

function Logo({ kecil = false }) {
  return (
    <>
      <span className={`grid shrink-0 place-items-center ${kecil ? 'h-8 w-8 rounded-lg bg-zamrud text-white' : 'h-9 w-9 rounded-xl bg-slatep text-zamrud-terang'}`}><Home size={kecil ? 15 : 17} aria-hidden="true" /></span>
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
      {/* Jejak: portal ini bagian dari PintuWeb */}
      <nav aria-label="Jejak" className="bg-slatep text-xs text-kabut">
        <ol className="mx-auto flex max-w-6xl items-center gap-2 px-4 py-1.5 sm:px-6">
          <li><a href={PINTUWEB} className="font-semibold underline-offset-4 hover:underline">PintuWeb</a></li>
          <li aria-hidden="true" className="opacity-60">/</li>
          <li aria-current="page">Website Properti</li>
        </ol>
      </nav>

      <header className="sticky top-0 z-40 border-b border-slatep/10 bg-kabut/90 backdrop-blur-xl">
        <div className="mx-auto flex max-w-6xl items-center justify-between gap-3 px-4 py-3 sm:px-6 sm:py-3.5">
          <a href="#top" className="flex items-center gap-2 text-lg font-extrabold tracking-tight">
            <Logo />
          </a>
          <nav aria-label="Navigasi halaman" className="hidden items-center gap-6 text-sm font-bold text-mutedp md:flex">
            <a href="#koleksi" className="transition hover:text-zamrud">Perumahan</a>
            <a href="#spesifikasi" className="transition hover:text-zamrud">Spesifikasi</a>
            <a href="#serah" className="transition hover:text-zamrud">Serah Terima</a>
            <a href="#tanya" className="transition hover:text-zamrud">FAQ</a>
          </nav>
          <a href={WA} target="_blank" rel="noopener noreferrer" className="shrink-0 rounded-full bg-zamrud px-5 py-2 text-sm font-extrabold text-white transition hover:bg-slatep">
            Konsultasi
          </a>
        </div>
      </header>

      <main id="konten" tabIndex={-1}>
        {/* Hero */}
        <section className="px-4 pb-10 pt-10 text-center sm:px-6 sm:pb-12 sm:pt-16">
          <div className="mx-auto max-w-3xl">
            <span className="naik inline-flex items-center gap-2 rounded-full bg-white px-4 py-1.5 text-xs font-extrabold uppercase tracking-wide text-zamrud shadow-sm">
              <KeyRound size={13} aria-hidden="true" /> {N} template · {N} kepribadian pasar
            </span>
            <h1 className="mt-6 text-[2.6rem] font-extrabold leading-[1.04] sm:text-6xl md:text-7xl">
              Satu industri,<br /><span className="text-zamrud">empat wajah</span> berbeda.
            </h1>
            <p className="mx-auto mt-5 max-w-xl text-base text-mutedp sm:text-lg">
              Marketplace properti tidak harus seragam. Butik yang dikurasi, rumah pertama yang mudah dibandingkan, hunian mewah yang dikunjungi privat, atau panduan kawasan — pilih wajah bisnismu.
            </p>
            <div className="naik naik-2 mt-8 flex flex-col items-center gap-4 sm:mt-9">
              <a href="#koleksi" className="inline-flex items-center gap-2 rounded-full bg-slatep px-8 py-4 text-sm font-extrabold text-white transition hover:bg-zamrud">
                Masuk ke Perumahan <ArrowDown size={16} aria-hidden="true" />
              </a>
              {/* Ringkasan paket: angka dari PAKET (PintuWeb packages.ts) */}
              <p className="text-sm font-semibold text-slatep/80">Mulai <strong className="font-extrabold text-zamrud">{PAKET.mulai}</strong> <span className="whitespace-nowrap"><span aria-hidden="true" className="mx-1.5 text-zamrud">·</span>{PAKET.waktu}</span></p>
            </div>
          </div>
        </section>

        {/* Koleksi — kartu rumah */}
        <section id="koleksi" aria-label="Empat template website properti" className="scroll-mt-[64px] px-4 pb-16 sm:px-6 sm:pb-20">
          <ul className="mx-auto grid max-w-6xl gap-x-10 gap-y-14 md:grid-cols-2 md:gap-y-16">
            {templates.map((t, i) => {
              const slug = slugOf(t);
              return (
                <li key={t.name} id={slug} className="group flex flex-col">
                  {/* Rumah: pratinjau (tautan untuk tetikus; papan ketik memakai tombol "Buka demo") */}
                  <div className="rumah-wrap relative">
                    <span className="cerobong" aria-hidden="true" />
                    <a href={t.url} target="_blank" rel="noopener noreferrer" className="block" tabIndex={-1} aria-hidden="true">
                      <div className="rumah relative bg-white p-2 pt-[12%]">
                        <div className="relative aspect-[16/10] overflow-hidden rounded-lg">
                          <Image src={t.image} alt="" fill sizes="(max-width: 767px) calc(100vw - 48px), 520px" className="object-cover object-top" priority={i === 0} />
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
                      <a href={wa(`Halo PintuWeb, saya tertarik template website properti ${t.name} (${t.gaya}). Boleh minta info?`)} target="_blank" rel="noopener noreferrer" className="inline-flex min-h-11 items-center gap-1.5 rounded-full border-2 border-zamrud px-5 text-sm font-extrabold text-zamrud transition hover:bg-zamrud hover:text-white">
                        Pesan<span className="sr-only"> template {t.name} lewat WhatsApp</span>
                      </a>
                    </div>
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
              <p className="text-xs font-extrabold uppercase tracking-[0.25em] text-zamrud">Spesifikasi Bangunan</p>
              <h2 id="judul-spesifikasi" className="mt-3 text-3xl font-extrabold sm:text-4xl">Semua unit <span className="text-zamrud">sudah termasuk</span></h2>
              <p className="mt-3 max-w-xl text-mutedp sm:mx-auto sm:mt-4">Apapun wajah yang kamu pilih, fondasinya sama kokoh — fitur inti listing sudah ada sejak hari pertama.</p>
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
              <p className="text-xs font-extrabold uppercase tracking-[0.25em] text-zamrud">Proses</p>
              <h2 id="judul-serah" className="mt-3 text-3xl font-extrabold sm:text-4xl">Empat langkah sampai <span className="text-zamrud">serah terima kunci</span></h2>
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
              <p className="text-xs font-extrabold uppercase tracking-[0.25em] text-zamrud">FAQ</p>
              <h2 id="judul-tanya" className="mt-3 text-3xl font-extrabold sm:text-4xl">Sebelum kamu <span className="text-zamrud">pindah masuk</span></h2>
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
            <h2 className="mt-6 text-3xl font-extrabold leading-tight md:text-4xl">Kuncinya sudah di tangan kami.</h2>
            <p className="mt-3 text-white/80">Pilih wajah yang pas untuk bisnismu — kami pasang logo, warna, dan listing-mu ke dalamnya.</p>
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
            <p className="mt-3 max-w-xs text-sm leading-relaxed">{N} wajah marketplace properti — pilih yang paling menyerupai bisnismu.</p>
          </div>
          <nav aria-labelledby="kaki-jelajahi" className="text-sm">
            <p id="kaki-jelajahi" className="text-xs font-extrabold uppercase tracking-widest text-zamrud-terang">Jelajahi</p>
            <ul className="mt-3 space-y-1">
              <li><a href="#koleksi" className="inline-block py-1 transition hover:text-white">Kompleks Template</a></li>
              <li><a href="#spesifikasi" className="inline-block py-1 transition hover:text-white">Spesifikasi</a></li>
              <li><a href="#serah" className="inline-block py-1 transition hover:text-white">Proses Serah Terima</a></li>
              <li><a href="#tanya" className="inline-block py-1 transition hover:text-white">FAQ</a></li>
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
          <p className="mt-6 text-xs font-extrabold uppercase tracking-widest text-white/70">Kompleks lain</p>
          <ul className="mt-2 flex flex-wrap gap-x-5 gap-y-1">
            {GALERI_LAIN.map((g) => (
              <li key={g.path}>
                <a href={`${PINTUWEB}/${g.path}`} className="inline-block py-1 underline decoration-white/25 underline-offset-4 transition hover:text-white hover:decoration-zamrud-terang">{g.label}</a>
              </li>
            ))}
          </ul>
        </nav>
        <p className="mx-auto mt-8 max-w-6xl border-t border-white/10 pt-5 text-xs text-white/75 sm:text-center">
          © {new Date().getFullYear()} PintuWeb · Galeri Website Properti — rumah untuk semua template.
        </p>
      </footer>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(FAQ_LD) }} />
    </div>
  );
}
