import type { Brand } from "@/lib/types";

// The principal brands Bilal Pharmaceuticals imports & distributes. Client-
// supplied logos live in /public (company1–4.webp — sized, transparent) and are shown instead of a
// text name. Product descriptions are original demo copy; confirm the final
// range and any specialist claims with each principal before launch.

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
];
