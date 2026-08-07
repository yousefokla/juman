import type { Metadata } from "next";
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
        <JsonLd />
        <link rel="icon" href="/logo.png" sizes="any" />
        <link rel="apple-touch-icon" href="/logo.png" />
      </head>
      <body className="min-h-full flex flex-col bg-[#F4F4F5] text-[#18181B] font-sans">
        <Header />
        <main className="flex-grow">{children}</main>
        <Footer />
        <FloatingWhatsApp />
      </body>
    </html>
  );
}
