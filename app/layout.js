import './globals.css';
import { Manrope } from 'next/font/google';

const manrope = Manrope({ subsets: ['latin'], variable: '--font-manrope', weight: ['400', '600', '800'] });

const __jsonld = {"@context":"https://schema.org","@type":"CollectionPage","name":"PortalProperti","description":"Koleksi 4 template marketplace properti: butik editorial, rumah pertama, hunian mewah, dan panduan kawasan","url":"https://www.pintuweb.id/website-properti","isPartOf":{"@type":"WebSite","name":"PintuWeb","url":"https://www.pintuweb.id"},"breadcrumb":{"@type":"BreadcrumbList","itemListElement":[{"@type":"ListItem","position":1,"name":"PintuWeb","item":"https://www.pintuweb.id"},{"@type":"ListItem","position":2,"name":"Website Properti","item":"https://www.pintuweb.id/website-properti"}]}};

export const metadata = {
  metadataBase: new URL("https://www.pintuweb.id/website-properti"),
  title: "PortalProperti — Empat Wajah Marketplace Properti",
  description: "Empat template marketplace properti, masing-masing dengan halaman khas: kalkulator biaya beli, perbandingan listing, penyusun kunjungan privat, dan panduan kawasan.",
  applicationName: "PortalProperti",
  keywords: ["template marketplace properti", "website properti", "koleksi template properti"],
  authors: [{ name: "PortalProperti" }],
  creator: "PortalProperti",
  publisher: "PortalProperti",
  alternates: { canonical: "https://www.pintuweb.id/website-properti" },
  openGraph: {
    type: "website",
    locale: "id_ID",
    url: "https://www.pintuweb.id/website-properti",
    siteName: "PortalProperti",
    title: "PortalProperti — Empat Wajah Marketplace Properti",
    description: "Empat template marketplace properti, masing-masing dengan halaman khas: kalkulator biaya beli, perbandingan listing, penyusun kunjungan privat, dan panduan kawasan.",
    images: [{ url: "/og.jpg", width: 1200, height: 630, alt: "PortalProperti — Empat Wajah Marketplace Properti" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "PortalProperti — Empat Wajah Marketplace Properti",
    description: "Empat template marketplace properti, masing-masing dengan halaman khas: kalkulator biaya beli, perbandingan listing, penyusun kunjungan privat, dan panduan kawasan.",
    images: ["/og.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1, "max-video-preview": -1 },
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="id" className={manrope.variable}>
      <body className="antialiased">
        <main>{children}</main>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(__jsonld) }} />
        </body>
    </html>
  );
}
