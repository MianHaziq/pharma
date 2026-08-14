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
  metadataBase: new URL("https://vitalcare.example"),
  title: {
    default: "VitalCare Pharmacy — Your Health, Delivered With Care",
    template: "%s · VitalCare Pharmacy",
  },
  description:
    "Genuine medicines, vitamins, personal care and medical devices delivered safely to your doorstep. Trusted healthcare, secure payments, fast delivery.",
  keywords: [
    "pharmacy",
    "online pharmacy",
    "medicines",
    "vitamins",
    "supplements",
    "healthcare",
    "medical devices",
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
