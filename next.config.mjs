/** @type {import('next').NextConfig} */
// Portal ini tayang di https://www.pintuweb.id/website-properti: PintuWeb meneruskan path /website-properti
// ke project ini (pola multi-zone), jadi semua rute & aset hidup di bawah basePath yang sama.
const nextConfig = {
  basePath: '/website-properti',
  async redirects() {
    // Alamat lama portal-properti-nu.vercel.app di luar basePath -> alamat utama.
    return [
      { source: '/', destination: 'https://www.pintuweb.id/website-properti', basePath: false, permanent: true },
      { source: '/:lama((?!website-properti(?:/|$)).+)', destination: 'https://www.pintuweb.id/website-properti', basePath: false, permanent: true },
    ];
  },
};

export default nextConfig;
