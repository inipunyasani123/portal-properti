'use client';
import { useEffect, useState } from 'react';
import { MessageCircle } from 'lucide-react';

// Bilah aksi lengket di ponsel: muncul setelah hero lewat, hilang saat footer terlihat.
export default function BilahLengket({ waHref }) {
  const [heroLewat, setHeroLewat] = useState(false);
  const [footerTampak, setFooterTampak] = useState(false);

  useEffect(() => {
    const hero = document.getElementById('hero');
    const footer = document.querySelector('footer');
    if (!hero || !footer || !('IntersectionObserver' in window)) return;
    const a = new IntersectionObserver(([e]) => setHeroLewat(!e.isIntersecting && e.boundingClientRect.top < 0));
    const b = new IntersectionObserver(([e]) => setFooterTampak(e.isIntersecting));
    a.observe(hero); b.observe(footer);
    return () => { a.disconnect(); b.disconnect(); };
  }, []);

  const tampak = heroLewat && !footerTampak;
  return (
    <div
      role="region"
      aria-label="Aksi cepat"
      aria-hidden={!tampak}
      className={`fixed inset-x-0 bottom-0 z-50 border-t border-white/10 bg-slatep/95 px-4 pt-3 backdrop-blur-xl transition-transform duration-300 md:hidden ${tampak ? 'translate-y-0' : 'invisible translate-y-full'}`}
      style={{ paddingBottom: 'calc(0.75rem + env(safe-area-inset-bottom))' }}
    >
      <div className="mx-auto flex max-w-md gap-2.5">
        <a href="#koleksi" className="inline-flex min-h-11 flex-1 items-center justify-center rounded-full border-2 border-white/40 px-4 text-sm font-extrabold text-white transition hover:bg-white/10">Lihat demo</a>
        <a href={waHref} target="_blank" rel="noopener noreferrer" className="inline-flex min-h-11 flex-[1.4] items-center justify-center gap-1.5 rounded-full bg-zamrud px-4 text-sm font-extrabold text-white transition hover:bg-zamrud-terang hover:text-slatep">
          <MessageCircle size={15} aria-hidden="true" /> Pesan via WhatsApp
        </a>
      </div>
    </div>
  );
}
