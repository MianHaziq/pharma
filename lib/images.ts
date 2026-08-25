// Central image library. Every editorial photograph on the site is referenced
// through a named key here, so the client can later swap the dummy Unsplash
// photography for their own asset URLs in one place — no component changes.
//
// `img(id, w, q)` builds a sized, format-optimised Unsplash URL. Real photos
// (verified live). Replace the `photos` map values with production URLs later.

const BASE = "https://images.unsplash.com/photo-";

/** Build a sized image URL from an Unsplash photo id. */
export function img(id: string, w = 1600, q = 80): string {
  return `${BASE}${id}?auto=format&fit=crop&w=${w}&q=${q}`;
}

/** Named, curated photography. Keys describe intent, not the source. */
export const photos = {
  // Poultry · farms · flocks
  hero: "1682887123870-e53fcd4a3906",
  farmPanorama: "1569466593977-94ee7ed02ec9",
  farmHouse: "1582661629051-43eadd614098",
  flockField: "1517419800355-7ea1a4b1f68d",
  henPortrait: "1612170153139-6f881ff067e0",
  roosterProfile: "1548550023-2bdb3c5beed7",
  henClose: "1569396327972-6231a5b05ea8",
  henStanding: "1559201955-f4fcca776e57",
  brooderHouse: "1531155179084-3e1f15110922",
  freeRange: "1553531009-c4605f302b47",

  // Livestock · cattle · sheep · goats · mixed farm (animal-health scope)
  farmMixed: "1636986766802-a9bf23d30448", // hero — hens and lambs together on a farm (multi-species)
  cattleHerd: "1715798637010-8a4f27a0950f", // herd of cattle grazing a green field
  sheepFlock: "1744895484813-486bf97487a7", // flock of sheep across an open pasture
  goatHerd: "1622837699015-9a4cb8b7a94b", // goats grazing on green grass
  cowCloseup: "1660599138377-22e71f1eb93a", // close-up portrait of a dairy cow
  chickensOutdoor: "1624295886848-623d4d12c1d6", // free-range chickens on grass

  // Eggs · hatchery · chicks
  eggsTray: "1498654077810-12c21d4d6dc3",
  eggsCollect: "1598965675045-45c5e72c7d05",
  eggsFarm: "1589923188651-268a9765e432",
  chicks: "1589050593767-a754dd738587",
  chicksGroup: "1546272989-40c92939c6c2",

  // Science · lab · research
  labBench: "1581093577421-f561a654a353",
  labPipette: "1582560475093-ba66accbc424",
  microscope: "1581594549595-35f6edc7b762",
  labScientist: "1614935151651-0bea6508db6b",
  labMolecular: "1602052577122-f73b9710adba",

  // Pharmaceutical · manufacturing · QC
  manufacturing: "1631549916768-4119b2e5f926",
  production: "1607398027609-fbd1a06fb5d4",
  qualityControl: "1589792924333-edbfbe7c8be7",

  // Handling · storage · veterinary product (real animal-health imagery, no pills)
  vetBottles: "1606235357537-84aea24d4c4f", // veterinary injectable medicine bottles on a shelf
  warehouseRack: "1749244768351-2726dc23d26c", // racked distribution warehouse aisle
  warehouseStock: "1672552226380-486fe900b322", // cartons on pallets in a storage warehouse
} as const;

export type PhotoKey = keyof typeof photos;

/** Convenience: sized URL for a named photo. */
export function photo(key: PhotoKey, w = 1600, q = 80): string {
  return img(photos[key], w, q);
}

// ── Client photography (real, supplied by Bilal Pharmaceuticals) ───────────
// Served locally from /public/team. Optimised from the originals; framing is
// handled per-slot in CSS (object-position), so the source files stay intact.
// These document real events — see data/company.ts → onTheRecord.
export const team = {
  ceoPortrait: "/team/ceo-portrait.webp", // Muhammad Imran — studio portrait
  ippeExpo: "/team/ippe-expo.webp", // IPPE — International Production & Processing Expo, USA
  space2024: "/team/space-2024.webp", // SPACE 2024 — Rennes, France
  foshanVisit: "/team/foshan-visit.webp", // Supplier / packaging audit — Foshan, China
  industrySeminar: "/team/industry-seminar.webp", // Industry roundtable — Pakistan
  award2026: "/team/award-2026.webp", // Zaryans Business Group, 40 Years conference — 2026
  newYork: "/team/new-york.webp", // New York, USA — principal relationships in person
  // CEO's own photos (added), shown in the "On the road" section:
  field: "/team/field.webp", // CEO on a field/orchard visit — close to the source
  paris: "/team/paris.webp", // CEO at Paris Gare du Nord — leadership on the road
} as const;

export type TeamPhotoKey = keyof typeof team;

