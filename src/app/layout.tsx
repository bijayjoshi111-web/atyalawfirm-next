import type { Metadata } from "next";
import { Playfair_Display, Lato } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"],
  variable: "--font-playfair",
  display: "swap",
});

const lato = Lato({
  subsets: ["latin"],
  weight: ["300", "400", "700"],
  variable: "--font-lato",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Atya Law Firm | Justice. Integrity. Excellence.",
  description: "Atya Law Firm is a premier full-service law firm committed to providing exceptional legal counsel with dedication and professionalism. Trusted lawyers for all your legal needs.",
  keywords: ["Atya Law Firm", "Atya Law", "law firm", "legal services", "lawyers", "attorneys"],
  metadataBase: new URL("https://www.atyalawfirm.com.np"), // replace with your actual domain
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Atya Law Firm | Justice. Integrity. Excellence.",
    description: "Atya Law Firm is a premier full-service law firm committed to providing exceptional legal counsel with dedication and professionalism.",
    url: "https://www.atyalawfirm.com.np", // replace with your actual domain
    siteName: "Atya Law Firm",
    images: [
      {
        url: "/logo.jpeg",
        width: 800,
        height: 600,
        alt: "Atya Law Firm",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Atya Law Firm | Justice. Integrity. Excellence.",
    description: "Atya Law Firm is a premier full-service law firm committed to providing exceptional legal counsel with dedication and professionalism.",
    images: ["/logo.jpeg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "LegalService",
  name: "Atya Law Firm",
  alternateName: "Atya Law",
  description: "A premier full-service law firm committed to providing exceptional legal counsel with dedication and professionalism.",
  url: "https://www.atyalawfirm.com.np", // replace with your actual domain
  logo: "https://www.atyalawfirm.com.np/logo.jpeg", // replace with your actual domain
  telephone: "+977-9808450958",
  email: "info@atyalaw.com",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Gautam Buddha Marg",
    addressLocality: "Kathmandu",
    postalCode: "44600",
    addressRegion: "Bagmati",
    addressCountry: "NP",
  },
  openingHours: ["Mo-Fr 09:00-18:00", "Sa 10:00-14:00"],
  sameAs: [
    // Add your social media URLs here, e.g.:
    // "https://www.linkedin.com/company/atya-law-firm",
    // "https://www.facebook.com/atyalawfirm",
  ],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${playfair.variable} ${lato.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="antialiased">
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
