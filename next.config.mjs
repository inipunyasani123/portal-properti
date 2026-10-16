/** @type {import('next').NextConfig} */
// Portal ini tayang di https://www.pintuweb.id/website-properti: PintuWeb meneruskan path /website-properti
// ke project ini (pola multi-zone), jadi semua rute & aset hidup di bawah basePath yang sama.
const nextConfig = {
  basePath: '/website-properti',
  // Gambar statis + varian siap pakai (lihat app/gambar-loader.js): tidak memakai kuota Image Optimization Vercel.
  images: { loader: 'custom', loaderFile: './app/gambar-loader.js', deviceSizes: [320, 480, 640, 800, 960, 1280, 1600], imageSizes: [160, 240] },
  async redirects() {
    // Alamat lama portal-properti.pintuweb.id di luar basePath -> alamat utama.
    return [
      { source: '/', destination: 'https://www.pintuweb.id/website-properti', basePath: false, permanent: true },
      { source: '/:lama((?!website-properti(?:/|$)).+)', destination: 'https://www.pintuweb.id/website-properti', basePath: false, permanent: true },
    ];
  },
};

export default nextConfig;
