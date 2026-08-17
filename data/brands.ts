import type { Brand } from "@/lib/types";

// Brand names reference well-known animal-health companies as "brands carried"
// by this demo store. All descriptions are original placeholder copy.

export const brands: Brand[] = [
  {
    id: "brand-poultrimed",
    slug: "poultrimed",
    name: "AviCura",
    logoText: "PMD",
    description:
      "Our own GMP-certified range of poultry health essentials — formulated for local flocks and priced for the farm.",
    featured: true,
  },
  {
    id: "brand-zoetis",
    slug: "zoetis",
    name: "Zoetis",
    logoText: "Zoetis",
    description:
      "Global animal-health leader known for poultry vaccines, anti-infectives and medicated feed additives.",
    featured: true,
  },
  {
    id: "brand-ceva",
    slug: "ceva",
    name: "Ceva",
    logoText: "CEVA",
    description:
      "Poultry vaccination specialist with a strong hatchery and live-vaccine portfolio.",
    featured: true,
  },
  {
    id: "brand-msd",
    slug: "msd-animal-health",
    name: "MSD Animal Health",
    logoText: "MSD",
    description:
      "Research-driven vaccines and biologicals trusted across commercial poultry operations.",
    featured: true,
  },
  {
    id: "brand-boehringer",
    slug: "boehringer-ingelheim",
    name: "Boehringer Ingelheim",
    logoText: "BI",
    description:
      "Animal-health innovator with a broad poultry vaccine and health-management range.",
    featured: true,
  },
  {
    id: "brand-elanco",
    slug: "elanco",
    name: "Elanco",
    logoText: "Elanco",
    description:
      "Feed additives, anticoccidials and productivity solutions for modern poultry farming.",
    featured: true,
  },
  {
    id: "brand-hipra",
    slug: "hipra",
    name: "HIPRA",
    logoText: "HIPRA",
    description:
      "Vaccine-focused animal-health company with autogenous and conventional poultry biologicals.",
    featured: true,
  },
  {
    id: "brand-virbac",
    slug: "virbac",
    name: "Virbac",
    logoText: "Virbac",
    description:
      "Independent animal-health brand offering anti-infectives, dewormers and supplements.",
    featured: true,
  },
  {
    id: "brand-huvepharma",
    slug: "huvepharma",
    name: "Huvepharma",
    logoText: "Huve",
    description:
      "Anticoccidials, enzymes and probiotics engineered for gut health and performance.",
    featured: false,
  },
  {
    id: "brand-phibro",
    slug: "phibro",
    name: "Phibro",
    logoText: "Phibro",
    description:
      "Nutritional specialties, mineral premixes and mycotoxin management for poultry.",
    featured: false,
  },
  {
    id: "brand-vetoquinol",
    slug: "vetoquinol",
    name: "Vetoquinol",
    logoText: "Vetoq",
    description:
      "Veterinary pharmaceuticals spanning anti-infectives, tonics and supportive care.",
    featured: false,
  },
  {
    id: "brand-kepro",
    slug: "kepro",
    name: "Kepro",
    logoText: "Kepro",
    description:
      "Water-soluble medicines, vitamins and disinfectants for practical farm use.",
    featured: false,
  },
];
