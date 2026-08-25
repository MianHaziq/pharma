import type { Metadata } from "next";
import { Archivo, IBM_Plex_Sans, IBM_Plex_Mono } from "next/font/google";
import "./globals.css";
import { Providers } from "@/components/providers";
import { Sprite } from "@/components/site/sprite";
import { Curtain } from "@/components/site/curtain";
import { Motion } from "@/components/site/motion";
import { SiteHeader } from "@/components/layout/site-header";
import { SiteFooter } from "@/components/layout/site-footer";
import { WhatsAppButton } from "@/components/whatsapp-button";
import { company } from "@/data/company";

const archivo = Archivo({
  variable: "--font-archivo",
  subsets: ["latin"],
  axes: ["wdth"],
  display: "swap",
});

const plexSans = IBM_Plex_Sans({
  variable: "--font-plex-sans",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

const plexMono = IBM_Plex_Mono({
  variable: "--font-plex-mono",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(`https://${company.domain}`),
  title: {
    default: `${company.name} — ${company.tagline}`,
    template: `%s · ${company.name}`,
  },
  description: company.description,
  keywords: [
    "animal health",
    "animal health importer Pakistan",
    "veterinary vaccines",
    "feed additives",
    "water sanitizers",
    "biosecurity",
    "animal health distributor Islamabad",
  ],
  openGraph: {
    type: "website",
    title: `${company.name} — ${company.tagline}`,
    description: company.description,
    siteName: company.name,
    images: [{ url: "/BilalPharmaLogo.jpeg", width: 1497, height: 1284, alt: company.name }],
  },
  icons: {
    icon: [{ url: "/logo-bi.png", type: "image/png" }],
    apple: [{ url: "/logo-bi.png" }],
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="en"
      className={`${archivo.variable} ${plexSans.variable} ${plexMono.variable}`}
    >
      <body>
        <Providers>
          <Sprite />
          <Curtain />
          <div className="progress" id="prog" />
          <SiteHeader />
          <main id="pages">{children}</main>
          <SiteFooter />
          <WhatsAppButton />
          <Motion />
        </Providers>
      </body>
    </html>
  );
}
