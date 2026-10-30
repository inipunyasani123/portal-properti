'use client';
import { useEffect, useRef, useState } from 'react';
import { ChevronDown } from 'lucide-react';

// Bilah jejak: "PintuWeb / Properti" + tombol "Galeri lain" yang membuka daftar galeri sejenis (tautan <a> absolut ke zona lain).
export default function GaleriMenu({ pintuweb, galeri, nama }) {
  const [buka, setBuka] = useState(false);
  const kotak = useRef(null);
  const tombol = useRef(null);

  useEffect(() => {
    if (!buka) return;
    const tutupLuar = (e) => { if (kotak.current && !kotak.current.contains(e.target)) setBuka(false); };
    const tutupEsc = (e) => { if (e.key === 'Escape') { setBuka(false); tombol.current?.focus(); } };
    document.addEventListener('pointerdown', tutupLuar);
    document.addEventListener('keydown', tutupEsc);
    return () => { document.removeEventListener('pointerdown', tutupLuar); document.removeEventListener('keydown', tutupEsc); };
  }, [buka]);

  return (
    <nav aria-label="Jejak" className="bg-slatep text-xs text-kabut">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-2 px-4 sm:px-6">
        <ol className="flex items-center gap-2 py-1.5">
          <li><a href={pintuweb} className="font-semibold underline-offset-4 hover:underline">PintuWeb</a></li>
          <li aria-hidden="true" className="opacity-60">/</li>
          <li aria-current="page">{nama}</li>
        </ol>
        <div ref={kotak} className="relative">
          <button
            ref={tombol}
            type="button"
            aria-expanded={buka}
            aria-controls="daftar-galeri"
            onClick={() => setBuka((b) => !b)}
            className="inline-flex min-h-8 items-center gap-1 rounded-full px-3 font-extrabold text-white transition hover:bg-white/10"
          >
            Galeri lain <ChevronDown size={14} aria-hidden="true" className={`transition ${buka ? 'rotate-180' : ''}`} />
          </button>
          {buka && (
            <ul id="daftar-galeri" className="absolute end-0 top-full z-50 mt-1 w-64 max-w-[calc(100vw-2rem)] rounded-2xl bg-white p-1.5 text-sm text-slatep shadow-xl ring-1 ring-slatep/10">
              {galeri.map((g) => (
                <li key={g.path}>
                  <a href={`${pintuweb}/${g.path}`} className="flex min-h-11 items-center rounded-xl px-3 font-bold transition hover:bg-kabut hover:text-zamrud">{g.label}</a>
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </nav>
  );
}
