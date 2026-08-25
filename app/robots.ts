import type { MetadataRoute } from "next";
import { company } from "@/data/company";

const base = `https://${company.domain}`;

// The product/solutions catalog is hidden for now (307-redirected to home in
// next.config.ts). Disallow those paths so crawlers don't chase the redirects
// or index placeholder catalog data. Restore when real products go live.
export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: ["/solutions", "/products"],
    },
    sitemap: `${base}/sitemap.xml`,
    host: base,
  };
}
