import type { Banner } from "@/lib/types";

// Hero + promotional banners. In production these would be authored in the
// admin CMS; the UI reads only from this shape.

export const heroBanners: Banner[] = [
  {
    id: "hero-1",
    eyebrow: "Trusted online pharmacy",
    title: "Your health, delivered with care",
    subtitle:
      "Genuine medicines, vitamins and everyday essentials, checked by pharmacists and delivered safely to your doorstep.",
    ctaLabel: "Shop now",
    ctaHref: "/shop",
    secondaryCtaLabel: "Explore categories",
    secondaryCtaHref: "/#categories",
    tone: "mint",
    align: "left",
  },
];

export const wellnessPromo: Banner = {
  id: "promo-wellness",
  eyebrow: "Wellness essentials",
  title: "Save up to 20% on vitamins & supplements",
  subtitle:
    "Stock up on the daily nutrition that keeps you at your best — immunity, energy and everyday balance.",
  ctaLabel: "Shop wellness",
  ctaHref: "/category/vitamins",
  tone: "sage",
  align: "left",
};

export const deliveryPromo: Banner = {
  id: "promo-delivery",
  eyebrow: "Fast & careful delivery",
  title: "Free delivery on orders over Rs. 3,000",
  subtitle:
    "Same-day dispatch on orders placed before 4pm, with temperature-safe packaging for every medicine.",
  ctaLabel: "Start an order",
  ctaHref: "/shop",
  tone: "steel",
  align: "left",
};

export const announcementText = "Free delivery on orders over Rs. 3,000";
