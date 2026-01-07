import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "../styles/globals.css";
import ThemeRegistry from "@/components/ThemeRegistry";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ReduxProvider from "@/components/ReduxProvider";

const inter = Inter({ subsets: ["latin"] });

const siteConfig = {
  name: "Diamond Exchange99",
  description: "Diamond Exchange99 is the world's leading sports exchange and betting platform. Established in 2025, providing secure and transparent gaming for cricket, football, and more.",
  url: "https://www.daimondexch99.online",
};

export const metadata: Metadata = {
  verification: {
    google: "56155c3d3cff61b4",
  },
  metadataBase: new URL(siteConfig.url),
  title: {
    default: siteConfig.name,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  keywords: [
    "Cricket Betting India",
    "Diamond Exchange",
    "Cricket Betting ID",
    "Online Betting India",
    "Diamond Exchange Official",
    "Betting ID WhatsApp",
    "DiamondExchange",
    "DiamondExchange99",
    "DiamondExch99",
    "Online Betting ID"
  ],
  authors: [
    {
      name: "Diamond Exchange Team",
      url: siteConfig.url,
    },
  ],
  creator: "Diamond Exchange Team",
  publisher: "Diamond Exchange Team",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  alternates: {
    canonical: siteConfig.url,
  },
  openGraph: {
    title: siteConfig.name,
    description: siteConfig.description,
    url: siteConfig.url,
    siteName: siteConfig.name,
    images: [
      {
        url: `${siteConfig.url}/images/hero.png`,
        width: 1200,
        height: 630,
        alt: siteConfig.name,
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  icons: {
    icon: [
      { url: "/favicon.ico" },
      { url: "/images/logo.png", sizes: "32x32", type: "image/png" },
      { url: "/images/logo.png", sizes: "16x16", type: "image/png" },
    ],
    apple: [
      { url: "/images/logo.png", sizes: "180x180", type: "image/png" },
    ],
    shortcut: "/images/logo.png",
  },
  manifest: "/site.webmanifest",
  category: "Sports & Betting",
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "Diamond Exchange99",
  "url": siteConfig.url,
  "logo": `${siteConfig.url}/images/hero.png`,
  "description": siteConfig.description,
  "contactPoint": {
    "@type": "ContactPoint",
    "telephone": "+91-900-000-0000",
    "contactType": "customer service",
    "availableLanguage": ["en", "hi"]
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <ReduxProvider>
          <ThemeRegistry>
            <div className="flex flex-col min-h-screen">
              <Header />
              <main className="flex-grow">
                {children}
              </main>
              <Footer />
            </div>
          </ThemeRegistry>
        </ReduxProvider>
      </body>
    </html>
  );
}
