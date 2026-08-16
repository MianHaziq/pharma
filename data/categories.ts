import type { Category } from "@/lib/types";

export const categories: Category[] = [
  {
    id: "cat-vaccines",
    slug: "vaccines",
    name: "Vaccines",
    tagline: "Protect the flock from day one",
    description:
      "Live, killed and hatchery vaccines for Newcastle, Gumboro, IB, Marek's and more — cold-chain handled and quality assured.",
    icon: "Syringe",
    tone: "sky",
    subcategories: [
      { id: "sub-live", slug: "live-vaccines", name: "Live Vaccines" },
      { id: "sub-killed", slug: "killed-vaccines", name: "Killed Vaccines" },
      { id: "sub-hatchery", slug: "hatchery-vaccines", name: "Hatchery Vaccines" },
    ],
  },
  {
    id: "cat-antibiotics",
    slug: "antibiotics",
    name: "Antibiotics & Antibacterials",
    tagline: "Targeted infection control",
    description:
      "Water-soluble powders, oral solutions and injectables to manage respiratory and enteric bacterial infections in poultry.",
    icon: "Pill",
    tone: "mint",
    subcategories: [
      { id: "sub-soluble", slug: "water-soluble", name: "Water-Soluble" },
      { id: "sub-injectable", slug: "injectables", name: "Injectables" },
      { id: "sub-respiratory", slug: "respiratory", name: "Respiratory" },
    ],
  },
  {
    id: "cat-vitamins",
    slug: "vitamins-electrolytes",
    name: "Vitamins & Electrolytes",
    tagline: "Beat heat & production stress",
    description:
      "Multivitamins, electrolytes, amino acids and liver tonics to support growth, immunity and recovery from stress.",
    icon: "Droplets",
    tone: "amber",
    subcategories: [
      { id: "sub-multi", slug: "multivitamins", name: "Multivitamins" },
      { id: "sub-electrolyte", slug: "electrolytes", name: "Electrolytes" },
      { id: "sub-stress", slug: "stress-packs", name: "Stress Packs" },
      { id: "sub-amino", slug: "amino-acids", name: "Amino Acids & Tonics" },
    ],
  },
  {
    id: "cat-anticoccidials",
    slug: "anticoccidials-dewormers",
    name: "Anticoccidials & Dewormers",
    tagline: "Gut parasite control",
    description:
      "Coccidiostats, curative anticoccidials and broad-spectrum dewormers to keep the gut clean and feed efficient.",
    icon: "Bug",
    tone: "coral",
    subcategories: [
      { id: "sub-cocci", slug: "coccidiostats", name: "Coccidiostats" },
      { id: "sub-curative", slug: "curatives", name: "Curatives" },
      { id: "sub-dewormer", slug: "dewormers", name: "Dewormers" },
    ],
  },
  {
    id: "cat-probiotics",
    slug: "probiotics-gut-health",
    name: "Probiotics & Gut Health",
    tagline: "Build a healthy microbiome",
    description:
      "Probiotics, acidifiers, prebiotics and mycotoxin binders that support digestion, gut integrity and feed conversion.",
    icon: "Leaf",
    tone: "sage",
    subcategories: [
      { id: "sub-pro", slug: "probiotics", name: "Probiotics & Prebiotics" },
      { id: "sub-acid", slug: "acidifiers", name: "Acidifiers" },
      { id: "sub-binder", slug: "toxin-binders", name: "Toxin Binders" },
    ],
  },
  {
    id: "cat-disinfectants",
    slug: "disinfectants-biosecurity",
    name: "Disinfectants & Biosecurity",
    tagline: "Keep pathogens out",
    description:
      "Broad-spectrum disinfectants, footbath and fumigation solutions to maintain a strong biosecurity programme on farm.",
    icon: "ShieldCheck",
    tone: "steel",
    subcategories: [
      { id: "sub-disinfect", slug: "disinfectants", name: "Disinfectants" },
      { id: "sub-footbath", slug: "footbath", name: "Footbath" },
      { id: "sub-fumigation", slug: "fumigation", name: "Fumigation" },
    ],
  },
  {
    id: "cat-feed",
    slug: "feed-supplements",
    name: "Feed Supplements & Growth",
    tagline: "More from every kilo of feed",
    description:
      "Growth promoters, feed enzymes and trace-mineral premixes that improve weight gain, shell quality and feed efficiency.",
    icon: "Wheat",
    tone: "cream",
    subcategories: [
      { id: "sub-growth", slug: "growth-promoters", name: "Growth Promoters" },
      { id: "sub-enzyme", slug: "enzymes", name: "Feed Enzymes" },
      { id: "sub-mineral", slug: "minerals", name: "Mineral Premixes" },
    ],
  },
  {
    id: "cat-equipment",
    slug: "farm-equipment",
    name: "Farm Equipment",
    tagline: "Tools for a well-run shed",
    description:
      "Drinkers, feeders, foggers and monitoring tools to manage climate, water and feed across brooding and grow-out.",
    icon: "Thermometer",
    tone: "blush",
    subcategories: [
      { id: "sub-drink", slug: "drinkers-feeders", name: "Drinkers & Feeders" },
      { id: "sub-climate", slug: "climate", name: "Climate & Brooding" },
      { id: "sub-monitor", slug: "monitoring", name: "Monitoring" },
    ],
  },
];
