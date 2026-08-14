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
    description: "Sourced directly from authorised distributors and verified suppliers.",
  },
  {
    icon: "Truck",
    title: "Fast & reliable delivery",
    description: "Same-day dispatch with temperature-safe packaging for medicines.",
  },
  {
    icon: "ShieldCheck",
    title: "Secure payments",
    description: "Encrypted checkout with trusted payment partners and COD.",
  },
  {
    icon: "Stethoscope",
    title: "Trusted healthcare",
    description: "Every order reviewed by qualified pharmacists before dispatch.",
  },
  {
    icon: "RotateCcw",
    title: "Easy returns",
    description: "Straightforward 7-day returns on eligible non-prescription items.",
  },
  {
    icon: "Headset",
    title: "Customer support",
    description: "Friendly pharmacists and support available 7 days a week.",
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
      { label: "Medicines", href: "/category/medicines" },
      { label: "Vitamins & Supplements", href: "/category/vitamins" },
      { label: "Personal Care", href: "/category/personal-care" },
      { label: "Medical Devices", href: "/category/medical-devices" },
      { label: "Offers", href: "/shop?sort=discount" },
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
      { label: "About VitalCare", href: "/about" },
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
