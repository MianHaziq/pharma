import type { Brand } from "@/lib/types";

// The principal brands Bilal Pharmaceuticals imports & distributes. Logos live
// in /public (company1–7.webp — sized to 240px tall, transparent) and are shown
// instead of a text name. Product descriptions are original demo copy; confirm
// the final range and any specialist claims with each principal before launch.
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
    category: "Anti-infectives & medicines",
    description:
      "A broad range of veterinary pharmaceuticals — anti-infectives, water-soluble medicines and supportive care for everyday animal health.",
    featured: true,
  },
  {
    id: "brand-leads",
    slug: "leads-pharma",
    name: "Leads Pharma",
    logoText: "Leads",
    logo: "/company3.webp",
    category: "Vaccines & specialties",
    description:
      "Islamabad-based animal-health principal with a strong vaccine and specialty portfolio — a partner we work with directly at source and at international shows.",
    featured: true,
  },
  {
    id: "brand-multivet",
    slug: "multivet-pharma",
    name: "MultiVet Pharma",
    logoText: "MultiVet",
    logo: "/company1.webp",
    category: "Vitamins & nutrition",
    description:
      "Multivitamins, electrolytes and nutritional specialties engineered to support growth, hydration and stress recovery.",
    featured: true,
  },
  {
    id: "brand-innomax",
    slug: "innomax-international",
    name: "Innomax International",
    logoText: "Innomax",
    logo: "/company4.webp",
    category: "Imported specialties",
    description:
      "International sourcing of quality animal-health products and specialty ranges for poultry and livestock operations.",
    featured: true,
  },
  {
    id: "brand-ghazi",
    slug: "ghazi-brothers",
    name: "Ghazi Brothers",
    logoText: "Ghazi",
    logo: "/company5.webp",
    category: "Feed additives & diagnostics",
    description:
      "Karachi-based animal-health and specialty-nutrition house — pharmaceuticals, feed additives and diagnostics across poultry, ruminants and aqua.",
    featured: true,
  },
  {
    id: "brand-chakwal",
    slug: "chakwal-pharma",
    name: "Chakwal Pharma International",
    logoText: "Chakwal",
    logo: "/company6.webp",
    category: "Medicines & vaccines",
    description:
      "Importer and distributor of veterinary medicines, vaccines and supplements for poultry and livestock — a house built around quality and consistency.",
    featured: true,
  },
  {
    id: "brand-orient",
    slug: "orient-traders",
    name: "Orient Traders International",
    logoText: "Orient",
    logo: "/company7.webp",
    category: "Imported veterinary pharma",
    description:
      "Importing European veterinary pharmaceuticals since 1999 — antibiotics, nutraceuticals, feed additives and premixes, sourced only from GMP-compliant makers.",
    featured: true,
  },
];
