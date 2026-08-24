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
  ceoPortrait: "/team/ceo-portrait.jpg", // Muhammad Imran — studio portrait
  ippeExpo: "/team/ippe-expo.jpg", // IPPE — International Production & Processing Expo, USA
  space2024: "/team/space-2024.jpg", // SPACE 2024 — Rennes, France
  foshanVisit: "/team/foshan-visit.jpg", // Supplier / packaging audit — Foshan, China
  industrySeminar: "/team/industry-seminar.jpg", // Industry roundtable — Pakistan
  award2026: "/team/award-2026.jpg", // Zaryans Business Group, 40 Years conference — 2026
  newYork: "/team/new-york.jpg", // New York, USA — principal relationships in person
} as const;

export type TeamPhotoKey = keyof typeof team;

