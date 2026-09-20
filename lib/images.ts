// Central image library. Every editorial photograph on the site is referenced
// through a named key here, so the client can later swap the dummy Unsplash
// photography for their own asset URLs in one place — no component changes.
//
// `img(id, w, q)` builds a sized, format-optimised URL from Unsplash or Pexels
// (see the `px:` prefix below). Real photos, verified live. Replace the
// `photos` map values with production URLs later.

const UNSPLASH = "https://images.unsplash.com/photo-";
const PEXELS = "https://images.pexels.com/photos/";

/**
 * Build a sized, format-optimised image URL from a photo id.
 *
 * Ids prefixed `px:` resolve to Pexels, everything else to Unsplash. Both
 * licences permit commercial use without attribution. The prefix keeps every
 * call site unchanged — components still just pass a key from `photos`.
 */
export function img(id: string, w = 1600, q = 80): string {
  if (id.startsWith("px:")) {
    const n = id.slice(3);
    return `${PEXELS}${n}/pexels-photo-${n}.jpeg?auto=compress&cs=tinysrgb&w=${w}`;
  }
  return `${UNSPLASH}${id}?auto=format&fit=crop&w=${w}&q=${q}`;
}

/** Named, curated photography. Keys describe intent, not the source. */
export const photos = {
  // Poultry · farms · flocks
  //
  // White commercial broilers throughout. The earlier set was brown/golden
  // backyard-type layer hens (Golden Misri and similar), which the client
  // rejected — it did not look like the commercial broiler operations this
  // business actually supplies. Keep any replacement to white broiler stock.
  hero: "px:26625882", // broiler house packed with white birds, feeders overhead
  farmPanorama: "px:27083552", // full length of a commercial broiler house
  farmHouse: "px:32840078", // broiler house with pan feeders and drinker lines
  flockField: "px:35221987", // white birds foraging on grass
  henPortrait: "px:35057569", // white hen, head and neck, dark background
  roosterProfile: "px:35877071", // white breeder cockerel in a production house
  henClose: "px:35057423", // pair of white hens, close
  henStanding: "px:36109430", // white hen standing, three-quarter view
  brooderHouse: "px:12995533", // day-olds under brooder lamps, feeders and drinkers
  freeRange: "px:35221319", // single white bird on grass under trees
  broilerHouse: "px:32840077", // home hero — white broilers at close range in a grow-out house

  // Livestock · cattle · sheep · goats (animal-health scope beyond poultry)
  cattleHerd: "1715798637010-8a4f27a0950f", // herd of cattle grazing a green field
  sheepFlock: "1744895484813-486bf97487a7", // flock of sheep across an open pasture
  goatHerd: "1622837699015-9a4cb8b7a94b", // goats grazing on green grass
  cowCloseup: "1660599138377-22e71f1eb93a", // close-up portrait of a dairy cow
  vetCattle: "px:4910780", // handler examining a dairy cow in the shed
  chickensOutdoor: "px:22816181", // white birds outside a shed

  // Eggs · hatchery · chicks
  eggsTray: "1498654077810-12c21d4d6dc3",
  eggsCollect: "1598965675045-45c5e72c7d05",
  eggsFarm: "1589923188651-268a9765e432",
  chicks: "1589050593767-a754dd738587",
  chicksGroup: "px:17064389", // white day-olds crowded round a feeder

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
  leadsAward: "/team/leads-award.webp", // Sales-target award presented by Leads Pharma
  newYork: "/team/new-york.webp", // New York, USA — principal relationships in person
  // CEO's own photos (added), shown in the "On the road" section:
  field: "/team/field.webp", // CEO on a field/orchard visit — close to the source
  paris: "/team/paris.webp", // CEO at Paris Gare du Nord — leadership on the road
} as const;

export type TeamPhotoKey = keyof typeof team;

