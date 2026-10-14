// Data 4 varian marketplace properti. `halaman` = halaman khas tiap varian.
export const templates = [
  {
    name: 'Propertia', gaya: 'Butik editorial', terjual: 0,
    description: 'Sedikit listing, semuanya sudah didatangi dan diukur ulang. Serif Fraunces, lengkung katedral, zamrud dan emas.',
    image: '/website-properti/images/properti/propertia.webp', url: 'https://properti-propertia.pintuweb.id', warna: '#0f3d2e', teks: '#ffffff',
    fitur: ['Kalkulator dana tunai: uang muka, BPHTB, PPN, PPAT, biaya KPR', 'Contoh rincian biaya di beranda', 'Jadwal survei di tiap listing'],
    halaman: [['/biaya', 'Hitung biaya beli'], ['/properti/1', 'Detail listing'], ['/tentang', 'Tentang']],
  },
  {
    name: 'Homigo', gaya: 'Rumah pertama', terjual: 1,
    description: 'Untuk pembeli dan penyewa pertama: rumah terjangkau, apartemen, dan kost. Biru gaya aplikasi dengan Space Grotesk.',
    image: '/website-properti/images/properti/homigo.webp', url: 'https://properti-homigo.pintuweb.id', warna: '#1d4ed8', teks: '#ffffff',
    fitur: ['Bandingkan 2–3 listing berdampingan', 'Cicilan vs sewa dalam ukuran per bulan', 'Filter beli dan sewa yang dipisah'],
    halaman: [['/bandingkan?id=2,3', 'Bandingkan'], ['/properti?status=Disewakan', 'Listing sewa'], ['/properti/4', 'Detail kost']],
  },
  {
    name: 'Lumora', gaya: 'Hunian mewah', terjual: 0,
    description: 'Enam hunian di Bali dan Jakarta, tanpa open house. Gelap dan emas dengan Cormorant Garamond dan slideshow layar penuh.',
    image: '/website-properti/images/properti/lumora.webp', url: 'https://properti-lumora.pintuweb.id', warna: '#c6a25c', teks: '#13100b',
    fitur: ['Penyusun hari kunjungan privat', 'Rute diurutkan dengan waktu tempuh terpendek', 'Slideshow yang bisa dijeda'],
    halaman: [['/kunjungan', 'Susun kunjungan'], ['/properti/1', 'Villa Uluwatu'], ['/properti', 'Koleksi']],
  },
  {
    name: 'Beranda', gaya: 'Kawasan & tahap hidup', terjual: 2,
    description: 'Cari rumah dari kawasannya: untuk keluarga, mahasiswa, atau pensiunan. Terakota hangat dengan Bricolage Grotesque.',
    image: '/website-properti/images/properti/beranda.webp', url: 'https://properti-beranda.pintuweb.id', warna: '#b04e30', teks: '#ffffff',
    fitur: ['Panduan kawasan lengkap dengan kekurangannya', 'Kisaran harga dihitung dari listing', 'Cari berdasarkan suasana'],
    halaman: [['/kawasan', 'Panduan kawasan'], ['/kawasan/sanur-denpasar', 'Sanur'], ['/properti?q=pensiun', 'Untuk pensiun']],
  },
];
