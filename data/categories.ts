import type { Category } from "@/lib/types";

export const categories: Category[] = [
  {
    id: "cat-medicines",
    slug: "medicines",
    name: "Medicines",
    tagline: "Everyday relief & prescriptions",
    description:
      "Trusted over-the-counter relief and prescription medicines, sourced from verified suppliers and stored under proper conditions.",
    icon: "Pill",
    tone: "mint",
    subcategories: [
      { id: "sub-pain", slug: "pain-relief", name: "Pain Relief" },
      { id: "sub-cold", slug: "cold-and-flu", name: "Cold & Flu" },
      { id: "sub-allergy", slug: "allergy", name: "Allergy" },
      { id: "sub-digestive", slug: "digestive-health", name: "Digestive Health" },
    ],
  },
  {
    id: "cat-vitamins",
    slug: "vitamins",
    name: "Vitamins & Supplements",
    tagline: "Fill the everyday gaps",
    description:
      "Multivitamins, minerals and targeted supplements to support energy, immunity and everyday wellbeing.",
    icon: "Leaf",
    tone: "sage",
    subcategories: [
      { id: "sub-multi", slug: "multivitamins", name: "Multivitamins" },
      { id: "sub-immunity", slug: "immunity", name: "Immunity" },
      { id: "sub-minerals", slug: "minerals", name: "Minerals" },
      { id: "sub-omega", slug: "omega-and-fish-oil", name: "Omega & Fish Oil" },
    ],
  },
  {
    id: "cat-personal-care",
    slug: "personal-care",
    name: "Personal Care",
    tagline: "Daily self-care essentials",
    description:
      "Oral care, hair care, hygiene and everyday personal care products for the whole family.",
    icon: "Sparkles",
    tone: "blush",
    subcategories: [
      { id: "sub-oral", slug: "oral-care", name: "Oral Care" },
      { id: "sub-hair", slug: "hair-care", name: "Hair Care" },
      { id: "sub-hygiene", slug: "hygiene", name: "Hygiene" },
      { id: "sub-body", slug: "body-care", name: "Body Care" },
    ],
  },
  {
    id: "cat-skincare",
    slug: "skincare",
    name: "Skin Care",
    tagline: "Dermatologist-loved routines",
    description:
      "Gentle cleansers, moisturisers and treatments for sensitive, dry and everyday skin.",
    icon: "Droplets",
    tone: "peach",
    subcategories: [
      { id: "sub-cleanser", slug: "cleansers", name: "Cleansers" },
      { id: "sub-moist", slug: "moisturisers", name: "Moisturisers" },
      { id: "sub-sun", slug: "sun-care", name: "Sun Care" },
      { id: "sub-treat", slug: "treatments", name: "Treatments" },
    ],
  },
  {
    id: "cat-baby-care",
    slug: "baby-care",
    name: "Baby Care",
    tagline: "Gentle care for little ones",
    description:
      "Tender formulas and essentials designed for a baby's delicate skin and everyday needs.",
    icon: "Baby",
    tone: "sky",
    subcategories: [
      { id: "sub-babyskin", slug: "baby-skincare", name: "Baby Skincare" },
      { id: "sub-diaper", slug: "diapering", name: "Diapering" },
      { id: "sub-babyfeed", slug: "feeding", name: "Feeding" },
    ],
  },
  {
    id: "cat-medical-devices",
    slug: "medical-devices",
    name: "Medical Devices",
    tagline: "Monitor health at home",
    description:
      "Clinically accurate home monitoring devices for blood pressure, glucose, temperature and more.",
    icon: "Activity",
    tone: "steel",
    subcategories: [
      { id: "sub-bp", slug: "blood-pressure", name: "Blood Pressure" },
      { id: "sub-glucose", slug: "glucose", name: "Glucose Monitoring" },
      { id: "sub-thermo", slug: "thermometers", name: "Thermometers" },
      { id: "sub-oximeter", slug: "oximeters", name: "Oximeters" },
    ],
  },
  {
    id: "cat-first-aid",
    slug: "first-aid",
    name: "First Aid",
    tagline: "Be ready for the unexpected",
    description:
      "Bandages, antiseptics and complete kits to handle everyday cuts, scrapes and emergencies.",
    icon: "Cross",
    tone: "coral",
    subcategories: [
      { id: "sub-kits", slug: "first-aid-kits", name: "First Aid Kits" },
      { id: "sub-wound", slug: "wound-care", name: "Wound Care" },
      { id: "sub-antiseptic", slug: "antiseptics", name: "Antiseptics" },
    ],
  },
  {
    id: "cat-wellness",
    slug: "wellness",
    name: "Wellness",
    tagline: "Feel your everyday best",
    description:
      "Rehydration, sleep, digestion and lifestyle support to help you feel your best every day.",
    icon: "HeartPulse",
    tone: "lavender",
    subcategories: [
      { id: "sub-hydration", slug: "hydration", name: "Hydration" },
      { id: "sub-sleep", slug: "sleep-and-calm", name: "Sleep & Calm" },
      { id: "sub-fitness", slug: "fitness-nutrition", name: "Fitness Nutrition" },
    ],
  },
];
