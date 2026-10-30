'use client';
import { useEffect } from 'react';

// Buka halaman dengan #slug: gulir ke kartu demo (scroll-margin menghitung header sticky) lalu beri sorot ±2 detik.
export default function SorotHash({ slugs }) {
  useEffect(() => {
    let t;
    const sorot = () => {
      const slug = decodeURIComponent(location.hash.slice(1));
      if (!slugs.includes(slug)) return;
      const el = document.getElementById(slug);
      if (!el) return;
      const pelan = !matchMedia('(prefers-reduced-motion: reduce)').matches;
      el.scrollIntoView({ block: 'start', behavior: pelan ? 'smooth' : 'auto' });
      document.querySelectorAll('.sorot').forEach((n) => n.classList.remove('sorot'));
      el.classList.add('sorot');
      clearTimeout(t);
      t = setTimeout(() => el.classList.remove('sorot'), 2200);
    };
    // Gambar belum selesai memuat saat pertama dibuka: gulir ulang sekali setelah tata letak stabil.
    const awal = setTimeout(sorot, 150);
    window.addEventListener('hashchange', sorot);
    return () => { clearTimeout(awal); clearTimeout(t); window.removeEventListener('hashchange', sorot); };
  }, [slugs]);
  return null;
}
