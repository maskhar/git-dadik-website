import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import { Chatbot } from "@/components/Chatbot";
import { JsonLd } from "@/components/JsonLd";

const GA_MEASUREMENT_ID = "G-768XTFFCSW";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const siteUrl = "https://dadikwahyuchang.com";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  
  // Basic
  title: {
    default: "Dadik Wahyu Chang | Strategic Brand Consultant",
    template: "%s | Dadik Wahyu Chang"
  },
  description: "Konsultan brand strategis yang membantu bisnis bertransformasi dari 'Komoditas' menjadi 'Legacy' melalui Brand Strategy, Brand Identity, dan Legal Protection. Berbasis di Malang, Indonesia.",
  keywords: [
    "brand consultant",
    "konsultan brand",
    "brand strategy",
    "brand identity",
    "logo design",
    "trademark",
    "hak kekayaan intelektual",
    "HKI",
    "branding Malang",
    "branding Indonesia",
    "Dadik Wahyu Chang"
  ],
  authors: [{ name: "Dadik Wahyu Chang", url: siteUrl }],
  creator: "Dadik Wahyu Chang",

  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
    apple: "/favicon.svg",
  },
  
  // Open Graph
  openGraph: {
    type: "website",
    locale: "id_ID",
    url: siteUrl,
    siteName: "Dadik Wahyu Chang",
    title: "Dadik Wahyu Chang | Strategic Brand Consultant",
    description: "Membantu bisnis bertransformasi dari 'Komoditas' menjadi 'Legacy' melalui Brand Strategy, Brand Identity, dan Legal Protection.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Dadik Wahyu Chang - Strategic Brand Consultant",
      },
    ],
  },
  
  // Twitter
  twitter: {
    card: "summary_large_image",
    title: "Dadik Wahyu Chang | Strategic Brand Consultant",
    description: "Membantu bisnis bertransformasi dari 'Komoditas' menjadi 'Legacy'",
    images: ["/og-image.jpg"],
    creator: "@dadikwahyuchang",
  },
  
  // Robots
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
  
  // Verification (add actual values when available)
  // verification: {
  //   google: "google-site-verification-code",
  // },
  
  // Other
  category: "Business",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id">
      <head>
        <JsonLd />
        {/* Google Analytics */}
        <Script
          src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`}
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${GA_MEASUREMENT_ID}');
          `}
        </Script>
      </head>
      <body
        className={`${inter.variable} antialiased font-sans`}
        suppressHydrationWarning
      >
        {children}
        <Chatbot />
      </body>
    </html>
  );
}
