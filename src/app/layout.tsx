import type { Metadata } from "next";
import Script from "next/script";
import { Alexandria } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { FloatingWhatsApp } from "@/components/FloatingWhatsApp";
import { JsonLd } from "@/components/JsonLd";
import { COMPANY_INFO } from "@/data/company";

const alexandria = Alexandria({
  subsets: ["arabic", "latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-alexandria",
  display: "swap",
});

const DOMAIN = "https://www.rawaheljuman.com";

export const metadata: Metadata = {
  metadataBase: new URL(DOMAIN),
  title: {
    default: "شركة رواحل جمان للنقل البري | توصيل مطار جدة إلى مكة المكرمة والمدينة 24/7",
    template: "%s | رواحل جمان للنقل البري"
  },
  description: COMPANY_INFO.seoDescription,
  keywords: COMPANY_INFO.keywords,
  authors: [{ name: COMPANY_INFO.name }],
  creator: COMPANY_INFO.name,
  publisher: COMPANY_INFO.name,
  icons: {
    icon: [
      { url: "/logo.png" },
      { url: "/favicon.ico" },
    ],
    shortcut: ["/logo.png"],
    apple: [
      { url: "/logo.png" },
    ],
  },
  formatDetection: {
    telephone: true,
    email: true,
    address: true,
  },
  openGraph: {
    title: "شركة رواحل جمان للنقل البري | حجز توصيل مطار جدة مكة",
    description: COMPANY_INFO.seoDescription,
    url: DOMAIN,
    siteName: COMPANY_INFO.name,
    locale: "ar_SA",
    type: "website",
    images: [
      {
        url: `${DOMAIN}/logo.png`,
        width: 512,
        height: 512,
        alt: "شعار شركة رواحل جمان للنقل البري",
      },
      {
        url: `${DOMAIN}/makkah_clock_tower.jpg`,
        width: 1200,
        height: 630,
        alt: "رواحل جمان للنقل البري - توصيل مطار جدة إلى مكة المكرمة",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "شركة رواحل جمان للنقل البري | حجز توصيل مطار جدة مكة",
    description: COMPANY_INFO.seoDescription,
    images: [`${DOMAIN}/logo.png`],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: DOMAIN,
    languages: {
      "ar-SA": DOMAIN,
      "x-default": DOMAIN
    }
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ar" dir="rtl" className={`${alexandria.variable} h-full antialiased scroll-smooth`}>
      <head>
        <Script
          id="google-tag-manager"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-T99MP2W2');`,
          }}
        />
        <JsonLd />
        <link rel="icon" href="/logo.png" sizes="any" />
        <link rel="apple-touch-icon" href="/logo.png" />
      </head>
      <body className="min-h-full flex flex-col bg-[#F4F4F5] text-[#18181B] font-sans">
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-T99MP2W2"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          />
        </noscript>
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-QZCFMBNRV3"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());

            gtag('config', 'G-QZCFMBNRV3');
          `}
        </Script>
        <Header />
        <main className="flex-grow">{children}</main>
        <Footer />
        <FloatingWhatsApp />
      </body>
    </html>
  );
}
