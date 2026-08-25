import type { MetadataRoute } from "next";
import { company } from "@/data/company";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: company.name,
    short_name: "Bilal Pharma",
    description: company.descriptionShort,
    start_url: "/",
    display: "standalone",
    background_color: "#ffffff",
    theme_color: "#be1e7a", // brand magenta (--primary in globals.css)
    icons: [
      { src: "/logo-bi.png", type: "image/png", sizes: "any", purpose: "any" },
      { src: "/BilalPharmaLogo.jpeg", type: "image/jpeg", sizes: "1497x1284" },
    ],
  };
}
