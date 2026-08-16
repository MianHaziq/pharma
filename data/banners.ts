import type { Banner } from "@/lib/types";

// Hero + promotional banners. In production these would be authored in the
// admin CMS; the UI reads only from this shape.

export const heroBanners: Banner[] = [
  {
    id: "hero-1",
    eyebrow: "Trusted poultry health partner",
    title: "Healthy flocks, stronger yields",
    subtitle:
      "Genuine vaccines, medicines, supplements and biosecurity for broilers, layers and breeders — GMP-certified and delivered to your farm.",
    ctaLabel: "Shop products",
    ctaHref: "/shop",
    secondaryCtaLabel: "Browse categories",
    secondaryCtaHref: "/#categories",
    tone: "mint",
    align: "left",
    art: "chick",
  },
  {
    id: "hero-2",
    eyebrow: "Cold-chain vaccines",
    title: "Protect every bird, from day one",
    subtitle:
      "Newcastle, Gumboro, IB and Marek's — live, killed and hatchery vaccines handled at 2–8°C, all the way to your shed.",
    ctaLabel: "Shop vaccines",
    ctaHref: "/category/vaccines",
    secondaryCtaLabel: "Vaccination guide",
    secondaryCtaHref: "/blog/building-a-vaccination-programme-for-broilers",
    tone: "sky",
    align: "left",
    art: "vaccine",
  },
  {
    id: "hero-3",
    eyebrow: "Biosecurity range",
    title: "Keep disease out of the shed",
    subtitle:
      "Broad-spectrum disinfectants, footbath and fumigation solutions to protect your flock and your investment.",
    ctaLabel: "Shop biosecurity",
    ctaHref: "/category/disinfectants-biosecurity",
    secondaryCtaLabel: "Browse categories",
    secondaryCtaHref: "/#categories",
    tone: "steel",
    align: "left",
    art: "biosecurity",
  },
];

// Full-width campaign banner shown mid-homepage.
export const campaignBanner: Banner = {
  id: "campaign-vaccination",
  eyebrow: "Complete vaccination programme",
  title: "From day-old chick to market weight",
  subtitle:
    "Everything you need for a reliable vaccination schedule — live and killed vaccines, applicators and post-vaccination support, cold-chain delivered.",
  ctaLabel: "Shop vaccines",
  ctaHref: "/category/vaccines",
  secondaryCtaLabel: "Read the guide",
  secondaryCtaHref: "/blog/building-a-vaccination-programme-for-broilers",
  tone: "mint",
  art: "vaccine",
};

// Two compact promo cards.
export const promoCards: Banner[] = [
  {
    id: "promo-biosecurity",
    eyebrow: "Biosecurity",
    title: "Terminal cleaning made simple",
    subtitle: "Save on disinfectants, footbath and fumigation.",
    ctaLabel: "Shop biosecurity",
    ctaHref: "/category/disinfectants-biosecurity",
    tone: "steel",
    art: "biosecurity",
  },
  {
    id: "promo-distributor",
    eyebrow: "For distributors & large farms",
    title: "Bulk pricing, delivered",
    subtitle: "Scheduled delivery and volume rates for your operation.",
    ctaLabel: "Become a partner",
    ctaHref: "/contact",
    tone: "sage",
    art: "delivery",
  },
];

export const wellnessPromo: Banner = {
  id: "promo-vitamins",
  eyebrow: "Beat production stress",
  title: "Save up to 20% on vitamins & electrolytes",
  subtitle:
    "Support growth, immunity and recovery through vaccination, hot weather and transport with our stress-day essentials.",
  ctaLabel: "Shop vitamins",
  ctaHref: "/category/vitamins-electrolytes",
  tone: "amber",
  align: "left",
};

export const deliveryPromo: Banner = {
  id: "promo-delivery",
  eyebrow: "Cold-chain delivery",
  title: "Free delivery on farm orders over Rs. 3,000",
  subtitle:
    "Same-day dispatch on orders placed before 4pm, with cold-chain handling for every vaccine and biological.",
  ctaLabel: "Start an order",
  ctaHref: "/shop",
  tone: "steel",
  align: "left",
};

export const announcementText =
  "Free delivery on farm orders over Rs. 3,000 · Cold-chain vaccines";
