import type { Brand } from "@/lib/types";

// The principal brands Bilal Pharmaceuticals imports & distributes, plus its own
// curated house line. These are the client's confirmed partners — the Foshan and
// IPPE photographs on the About page document the Leads Pharma relationship
// first-hand. Product descriptions are original demo copy; confirm the final
// range and any specialist claims with each principal before launch.

export const brands: Brand[] = [
  {
    id: "brand-bilal-select",
    slug: "bilal-select",
    name: "Bilal Select",
    logoText: "BS",
    description:
      "Our own curated, exclusively-imported line of animal-health essentials — hand-picked for quality and priced for the farm.",
    featured: true,
  },
  {
    id: "brand-toppharma",
    slug: "top-pharma",
    name: "Top Pharma",
    logoText: "Top",
    description:
      "A broad range of veterinary pharmaceuticals — anti-infectives, water-soluble medicines and supportive care for everyday animal health.",
    featured: true,
  },
  {
    id: "brand-leads",
    slug: "leads-pharma",
    name: "Leads Pharma",
    logoText: "Leads",
    description:
      "Islamabad-based animal-health principal with a strong vaccine and specialty portfolio — a partner we work with directly at source and at international shows.",
    featured: true,
  },
  {
    id: "brand-vetycare",
    slug: "vety-care",
    name: "Vety Care (Pvt.) Ltd.",
    logoText: "Vety",
    description:
      "Veterinary-care specialists offering tonics, supplements and supportive therapies that keep animals performing through the cycle.",
    featured: true,
  },
  {
    id: "brand-orient",
    slug: "orient-traders",
    name: "Orient Traders",
    logoText: "Orient",
    description:
      "Trusted importers of feed additives, disinfectants and biosecurity products for modern operations.",
    featured: true,
  },
  {
    id: "brand-multivet",
    slug: "multivet-pharma",
    name: "Multivet Pharma",
    logoText: "Multivet",
    description:
      "Multivitamins, electrolytes and nutritional specialties engineered to support growth, hydration and stress recovery.",
    featured: true,
  },
];
