import type { Metadata } from "next";
import { Inter, Fraunces } from "next/font/google";
import "./globals.css";
import { Providers } from "@/components/providers";
import { SiteHeader } from "@/components/layout/site-header";
import { SiteFooter } from "@/components/layout/site-footer";
import { MobileBottomBar } from "@/components/layout/mobile-bottom-bar";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const fraunces = Fraunces({
  variable: "--font-fraunces",
  subsets: ["latin"],
  display: "swap",
  axes: ["opsz"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://poultrimed.example"),
  title: {
    default: "PoultriMed — Healthy Flocks, Stronger Yields",
    template: "%s · PoultriMed",
  },
  description:
    "Genuine poultry vaccines, medicines, vitamins, supplements and biosecurity for broilers, layers and breeders. GMP-certified, cold-chain delivery to your farm.",
  keywords: [
    "poultry medicine",
    "poultry vaccines",
    "poultry health",
    "veterinary supplements",
    "poultry farm supplies",
    "biosecurity",
    "coccidiostats",
    "broiler layer health",
  ],
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={`${inter.variable} ${fraunces.variable} h-full`}>
      <body className="min-h-full flex flex-col bg-background text-foreground antialiased">
        <Providers>
          <SiteHeader />
          <main className="flex-1 pb-16 lg:pb-0">{children}</main>
          <SiteFooter />
          <MobileBottomBar />
        </Providers>
      </body>
    </html>
  );
}
