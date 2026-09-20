import type { Brand } from "@/lib/types";

// The principal brands Bilal Pharmaceuticals imports & distributes. Logos live
// in /public (company1–7.webp — sized to 240px tall, transparent) and are shown
// instead of a text name.
//
// Per-brand categories and descriptions were removed at the client's request —
// the copy was inaccurate. Re-add them only with wording confirmed by each
// principal.
//
// company5–7 were sourced from each principal's own public web presence and
// re-cut to match the house format. Request an official brand asset from each
// of those principals before launch.

export const brands: Brand[] = [
  {
    id: "brand-toppharma",
    slug: "top-pharma",
    name: "Top Pharma",
    logoText: "Top",
    logo: "/company2.webp",
    featured: true,
  },
  {
    id: "brand-leads",
    slug: "leads-pharma",
    name: "Leads Pharma",
    logoText: "Leads",
    logo: "/company3.webp",
    featured: true,
  },
  {
    id: "brand-multivet",
    slug: "multivet-pharma",
    name: "MultiVet Pharma",
    logoText: "MultiVet",
    logo: "/company1.webp",
    featured: true,
  },
  {
    id: "brand-innomax",
    slug: "innomax-international",
    name: "Innomax International",
    logoText: "Innomax",
    logo: "/company4.webp",
    featured: true,
  },
  {
    id: "brand-ghazi",
    slug: "ghazi-brothers",
    name: "Ghazi Brothers",
    logoText: "Ghazi",
    logo: "/company5.webp",
    featured: true,
  },
  {
    id: "brand-chakwal",
    slug: "chakwal-pharma",
    name: "Chakwal Pharma International",
    logoText: "Chakwal",
    logo: "/company6.webp",
    featured: true,
  },
  {
    id: "brand-orient",
    slug: "orient-traders",
    name: "Orient Traders International",
    logoText: "Orient",
    logo: "/company7.webp",
    featured: true,
  },
];
