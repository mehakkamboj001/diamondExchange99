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
  description: "Diamond Exchange99 is the world's leading sports exchange and betting platform. Established in 2003, providing secure and transparent gaming for cricket, football, and more.",
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
    "Diamond Exchange",
    "Cricket Betting ID",
    "Sports Exchange",
    "Online Betting India",
    "Diamond Exchange Official",
    "Betting ID WhatsApp",
    "Daimond Exchange 99",
    "Cricket Betting India",
    "Online Betting ID"
  ],
  authors: [
    {
      name: "Diamond Exchange Team",
      url: "https://www.daimondexch99.online",
    },
  ],
  creator: "Diamond Exchange Team",
  icons: {
    icon: "/favicon.ico",
  },
  manifest: `/site.webmanifest`,
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
