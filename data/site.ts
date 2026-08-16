// Static site content: trust features, footer navigation and payment methods.

export interface TrustFeature {
  icon: string;
  title: string;
  description: string;
}

export const trustFeatures: TrustFeature[] = [
  {
    icon: "BadgeCheck",
    title: "100% genuine products",
    description: "Sourced from authorised animal-health manufacturers and distributors.",
  },
  {
    icon: "Snowflake",
    title: "Cold-chain vaccines",
    description: "Vaccines and biologicals handled at 2–8°C from depot to your farm.",
  },
  {
    icon: "Award",
    title: "GMP-certified quality",
    description: "Our own range is manufactured to good-manufacturing-practice standards.",
  },
  {
    icon: "Stethoscope",
    title: "Veterinary support",
    description: "Guidance from qualified poultry vets on products and programmes.",
  },
  {
    icon: "Truck",
    title: "Nationwide delivery",
    description: "Fast dispatch and farm delivery across the country.",
  },
  {
    icon: "Headset",
    title: "Farmer support",
    description: "Practical help for growers and distributors, 7 days a week.",
  },
];

export interface FooterColumn {
  title: string;
  links: { label: string; href: string }[];
}

export const footerColumns: FooterColumn[] = [
  {
    title: "Shop",
    links: [
      { label: "All products", href: "/shop" },
      { label: "Vaccines", href: "/category/vaccines" },
      { label: "Antibiotics", href: "/category/antibiotics" },
      { label: "Vitamins & Electrolytes", href: "/category/vitamins-electrolytes" },
      { label: "Disinfectants", href: "/category/disinfectants-biosecurity" },
      { label: "Offers", href: "/shop?filter=offers" },
    ],
  },
  {
    title: "Customer service",
    links: [
      { label: "Contact us", href: "/contact" },
      { label: "Delivery information", href: "/delivery" },
      { label: "Returns & refunds", href: "/returns" },
      { label: "Track your order", href: "/track" },
      { label: "FAQ", href: "/faq" },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "About PoultriMed", href: "/about" },
      { label: "Privacy policy", href: "/privacy" },
      { label: "Terms & conditions", href: "/terms" },
      { label: "My account", href: "/account" },
      { label: "Wishlist", href: "/wishlist" },
    ],
  },
];

export const paymentMethods = [
  "Visa",
  "Mastercard",
  "JazzCash",
  "EasyPaisa",
  "COD",
];
