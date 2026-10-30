// Data 4 varian marketplace properti. `halaman` = halaman khas tiap varian.
export const templates = [
  {
    name: 'Propertia', gaya: 'Butik', terjual: 0,
    description: 'Agen properti butik. Listing sedikit, tampilan elegan hijau dan emas.',
    image: '/website-properti/images/properti/propertia.webp', imageM: '/website-properti/images/properti/propertia-m.webp', url: 'https://properti-propertia.pintuweb.id', warna: '#0f3d2e', teks: '#ffffff',
    fitur: ['Hitung total biaya beli rumah', 'Contoh rincian biaya di beranda', 'Jadwal survei di tiap listing'],
    halaman: [['/biaya', 'Hitung biaya beli'], ['/properti/1', 'Detail listing'], ['/tentang', 'Tentang']],
  },
  {
    name: 'Homigo', gaya: 'Rumah pertama', terjual: 1,
    description: 'Rumah, apartemen, dan kost untuk pembeli dan penyewa pertama.',
    image: '/website-properti/images/properti/homigo.webp', imageM: '/website-properti/images/properti/homigo-m.webp', url: 'https://properti-homigo.pintuweb.id', warna: '#1d4ed8', teks: '#ffffff',
    fitur: ['Bandingkan 2–3 properti berdampingan', 'Cicilan dan sewa dalam hitungan per bulan', 'Filter beli dan sewa terpisah'],
    halaman: [['/bandingkan?id=2,3', 'Bandingkan'], ['/properti?status=Disewakan', 'Listing sewa'], ['/properti/4', 'Detail kost']],
  },
  {
    name: 'Lumora', gaya: 'Mewah', terjual: 0,
    description: 'Enam hunian mewah di Bali dan Jakarta, dilihat lewat kunjungan privat.',
    image: '/website-properti/images/properti/lumora.webp', imageM: '/website-properti/images/properti/lumora-m.webp', url: 'https://properti-lumora.pintuweb.id', warna: '#c6a25c', teks: '#13100b',
    fitur: ['Atur jadwal kunjungan privat', 'Rute kunjungan diurutkan otomatis', 'Foto layar penuh yang bisa dijeda'],
    halaman: [['/kunjungan', 'Susun kunjungan'], ['/properti/1', 'Villa Uluwatu'], ['/properti', 'Koleksi']],
  },
  {
    name: 'Beranda', gaya: 'Per kawasan', terjual: 2,
    description: 'Cari rumah dari kawasannya, cocok untuk keluarga, mahasiswa, atau pensiunan.',
    image: '/website-properti/images/properti/beranda.webp', imageM: '/website-properti/images/properti/beranda-m.webp', url: 'https://properti-beranda.pintuweb.id', warna: '#b04e30', teks: '#ffffff',
    fitur: ['Panduan tiap kawasan, lengkap dengan kekurangannya', 'Kisaran harga tiap kawasan', 'Cari berdasarkan suasana'],
    halaman: [['/kawasan', 'Panduan kawasan'], ['/kawasan/sanur-denpasar', 'Sanur'], ['/properti?q=pensiun', 'Untuk pensiun']],
  },
];

/** "https://properti-homigo.pintuweb.id" -> "homigo" (sama dengan slug demo di PintuWeb/app/lib/demos.ts). */
export const slugOf = (t) => new URL(t.url).hostname.split('.')[0].replace(/^properti-/, '');
