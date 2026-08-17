import type { BlogPost, Product } from "./types";
import { img, photos } from "./images";

// Deterministic pharmaceutical-style registration code, e.g. "AVC-1042".
export function catalogCode(product: Product): string {
  let h = 0;
  for (const ch of product.id) h = (h * 31 + ch.charCodeAt(0)) % 9000;
  return `AVC-${String(1000 + h).padStart(4, "0")}`;
}

// A human product "format" label derived from the pack description.
export function productFormat(product: Product): string {
  const p = (product.packSize ?? "").toLowerCase();
  if (p.includes("dose") || p.includes("vial")) return "Biological";
  if (p.includes("ml") || p.includes("l ")) return "Oral solution";
  if (p.includes("kg") || p.includes("g ")) return "Water-soluble";
  return "Pharmaceutical";
}

// Editorial photograph for an insights article, mapped by topic.
const POST_IMAGE: Record<string, string> = {
  Vaccination: photos.labScientist,
  "Gut Health": photos.chicksGroup,
  Biosecurity: photos.farmHouse,
  Management: photos.flockField,
};

export function postImage(post: BlogPost, w = 1200, q = 75): string {
  return img(POST_IMAGE[post.category] ?? photos.henPortrait, w, q);
}

// Editorial photograph for a solution category, mapped by slug.
const CATEGORY_IMAGE: Record<string, string> = {
  vaccines: photos.labScientist,
  antibiotics: photos.production,
  "vitamins-electrolytes": photos.henClose,
  "anticoccidials-dewormers": photos.microscope,
  "probiotics-gut-health": photos.chicksGroup,
  "disinfectants-biosecurity": photos.farmHouse,
  "feed-supplements": photos.brooderHouse,
  "farm-equipment": photos.freeRange,
};

export function categoryImage(slug: string, w = 1600, q = 75): string {
  return img(CATEGORY_IMAGE[slug] ?? photos.labBench, w, q);
}
