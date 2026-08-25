// ─────────────────────────────────────────────────────────────
// Bilal Pharmaceuticals — single source of truth for corporate content.
// The company is an IMPORTER & DISTRIBUTOR of poultry-health products (it does
// not manufacture). Swap any value here (name, contact, stats, people, nav) and
// it updates across the site.
//
// NOTE FOR REVIEW: values marked "// placeholder" (founding year, headline
// numbers, milestone dates, leadership beyond the CEO, testimonials) are demo
// figures — replace them with the client's real details before launch.
// ─────────────────────────────────────────────────────────────

import { photos, team } from "@/lib/images";

export const company = {
  name: "Bilal Pharmaceuticals",
  legalName: "Bilal Pharmaceuticals",
  tagline: "Importers & distributors of animal-health products",
  established: 2010, // placeholder — confirm real founding year
  domain: "bilalpharmaceuticals.pk",
  registration: "BP",
  description:
    "Bilal Pharmaceuticals imports and distributes trusted animal-health products — vaccines, medicines, nutrition and biosecurity from leading manufacturers — backed by reliable supply and expert technical support.",
  descriptionShort:
    "Trusted animal-health products from leading manufacturers.",
  phone: "+92 336 8883 198",
  phone2: "+92 302 8699 198",
  email: "chbilalpharmaceuticals@gmail.com",
  // Single mailbox on the card — role addresses point to the same inbox for now.
  salesEmail: "chbilalpharmaceuticals@gmail.com",
  vetEmail: "chbilalpharmaceuticals@gmail.com",
  mediaEmail: "chbilalpharmaceuticals@gmail.com",
  ceo: "Muhammad Imran",
  hq: {
    line1: "Rathore Heights, Plot No. 14, Johar Blvd",
    line2: "DHA Phase 5, Islamabad, Pakistan",
  },
  disclaimer:
    "Some figures, imagery and profiles on this site are placeholders for the design demo and will be replaced with final content.",
};

export const socials = [
  { name: "linkedin", label: "LinkedIn", href: "#" },
  { name: "facebook", label: "Facebook", href: "#" },
  { name: "x", label: "X", href: "#" },
  { name: "youtube", label: "YouTube", href: "#" },
] as const;

// ── Navigation ────────────────────────────────────────────────
export const primaryNav = [
  { label: "Company", href: "/about" },
  { label: "Products", href: "/solutions" },
  { label: "Brands", href: "/research" },
  { label: "Quality", href: "/quality" },
  { label: "Industries", href: "/industries" },
  { label: "Insights", href: "/insights" },
];

export const footerNav = [
  {
    title: "Company",
    links: [
      { label: "About us", href: "/about" },
      { label: "Brands we distribute", href: "/research" },
      { label: "Quality & handling", href: "/quality" },
      { label: "Industries", href: "/industries" },
      { label: "Insights", href: "/insights" },
      { label: "Contact", href: "/contact" },
    ],
  },
  {
    title: "Products",
    links: [
      { label: "Product portfolio", href: "/solutions" },
      { label: "Vaccines", href: "/solutions/vaccines" },
      { label: "Antibiotics", href: "/solutions/antibiotics" },
      { label: "Vitamins & Electrolytes", href: "/solutions/vitamins-electrolytes" },
      { label: "Probiotics & Gut Health", href: "/solutions/probiotics-gut-health" },
      { label: "Biosecurity", href: "/solutions/disinfectants-biosecurity" },
    ],
  },
  {
    title: "Resources",
    links: [
      { label: "Technical support", href: "/contact" },
      { label: "Standards we uphold", href: "/quality" },
      { label: "Newsroom", href: "/insights" },
      { label: "Become a partner", href: "/contact" },
    ],
  },
  {
    title: "Legal",
    links: [
      { label: "Privacy policy", href: "/privacy" },
      { label: "Terms of use", href: "/terms" },
    ],
  },
];

// ── Headline statistics (animated counters) ───────────────────
// Distributor metrics — no geographic/coverage claims. // placeholder numbers
export const stats = [
  { value: 15, prefix: "", suffix: "+", label: "Years serving poultry producers" },
  { value: 6, prefix: "", suffix: "", label: "Principal brands we represent" },
  { value: 200, prefix: "", suffix: "+", label: "Poultry-health products supplied" },
  { value: 800, prefix: "", suffix: "+", label: "Farms & vets served" },
];

export const heroStats = [
  { value: 6, prefix: "", suffix: "", label: "Brands represented" },
  { value: 200, prefix: "", suffix: "+", label: "Products supplied" },
  { value: 15, prefix: "", suffix: "+", label: "Years in poultry health" },
];

// Distributor capabilities — no coverage/geography. // placeholder figures
export const capabilities = [
  { value: "6", label: "Principal brands represented" },
  { value: "200+", label: "Products in the portfolio" },
  { value: "2–8°C", label: "Cold-chain storage & handling" },
  { value: "48h", label: "Typical order dispatch" },
];

// ── Mission / vision ──────────────────────────────────────────
export const missionVision = {
  mission:
    "To give poultry producers dependable access to the world's most trusted animal-health products — sourced with care, stored correctly and delivered with expert support.",
  vision:
    "To be the poultry sector's most trusted partner for quality animal-health products and the technical know-how to use them well.",
};

// ── Why choose us ─────────────────────────────────────────────
export const differentiators = [
  {
    icon: "ShieldCheck",
    title: "Trusted brands only",
    description:
      "We import and distribute only established, quality-assured animal-health brands — every product traceable to its manufacturer.",
  },
  {
    icon: "Truck",
    title: "Reliable supply",
    description:
      "Well-managed inventory and dependable dispatch keep the essential products within reach when your flock needs them.",
  },
  {
    icon: "Snowflake",
    title: "Cold chain protected",
    description:
      "Vaccines and sensitive biologicals are stored and handled under proper temperature control to protect their potency.",
  },
  {
    icon: "Stethoscope",
    title: "Veterinary support",
    description:
      "Our team helps you choose the right product and use it correctly, with practical poultry-health guidance.",
  },
  {
    icon: "PackageCheck",
    title: "Quality you can verify",
    description:
      "Product documentation, certificates and batch information are available on request for everything we supply.",
  },
  {
    icon: "Users",
    title: "Long-term partnership",
    description:
      "We build lasting relationships with farms, veterinarians and retailers — not one-off transactions.",
  },
];

// ── Company values ────────────────────────────────────────────
export const values = [
  {
    icon: "ShieldCheck",
    title: "Integrity",
    description:
      "We supply only what we would use ourselves. Authenticity and quality are never negotiable.",
  },
  {
    icon: "Truck",
    title: "Reliability",
    description:
      "Producers plan around us, so we hold stock and deliver on our word — consignment after consignment.",
  },
  {
    icon: "Users",
    title: "Partnership",
    description:
      "We succeed when our customers do, so we invest in long-term relationships, not transactions.",
  },
  {
    icon: "Stethoscope",
    title: "Expertise",
    description:
      "Sound, honest product advice grounded in real poultry-health experience.",
  },
];

// ── History / milestones ──────────────────────────────────────
// placeholder dates — confirm the real timeline with the client
export const milestones = [
  {
    year: "2010",
    title: "Founded in Islamabad",
    description:
      "Bilal Pharmaceuticals is established to bring quality poultry-health products to local producers.",
  },
  {
    year: "2013",
    title: "First brand partnerships",
    description:
      "Distribution agreements signed with leading international animal-health brands.",
  },
  {
    year: "2016",
    title: "Cold-chain storage",
    description:
      "Investment in temperature-controlled storage to protect vaccines and biologicals.",
  },
  {
    year: "2019",
    title: "A wider portfolio",
    description:
      "The range grows across vaccines, medicines, nutrition and biosecurity.",
  },
  {
    year: "2022",
    title: "Technical support team",
    description:
      "A dedicated team is added to advise producers on product selection and use.",
  },
  {
    year: "2025",
    title: "A trusted partner",
    description:
      "Serving poultry farms, veterinarians and retailers with a complete poultry-health range.",
  },
];

// ── Why source through us (distribution pillars) ──────────────
export const researchPillars = [
  {
    icon: "Globe",
    title: "Global sourcing",
    description:
      "We bring proven poultry-health products from leading international manufacturers directly to your operation.",
  },
  {
    icon: "Snowflake",
    title: "Cold chain & storage",
    description:
      "Temperature-controlled storage and careful handling protect potency from arrival to delivery.",
  },
  {
    icon: "Stethoscope",
    title: "Technical guidance",
    description:
      "Practical advice on product selection, dosing and vaccination programs for your flock.",
  },
  {
    icon: "Truck",
    title: "Dependable supply",
    description:
      "Consistent availability and responsive service that farms and veterinarians can plan around.",
  },
];

// ── Sourcing → delivery process (an ordered sequence) ─────────
export const qualitySteps = [
  {
    step: "01",
    title: "Careful brand selection",
    description:
      "We partner only with reputable manufacturers whose quality systems we trust.",
  },
  {
    step: "02",
    title: "Verified sourcing",
    description:
      "Products are procured through official, authorised channels with complete documentation.",
  },
  {
    step: "03",
    title: "Proper storage",
    description:
      "Goods are held in clean, temperature-appropriate conditions — cold chain where required.",
  },
  {
    step: "04",
    title: "Careful handling & dispatch",
    description:
      "Orders are checked, handled and dispatched to preserve product integrity and shelf life.",
  },
  {
    step: "05",
    title: "Traceability & support",
    description:
      "Batch and expiry details are recorded, with documentation and advice available on request.",
  },
];

// ── Standards we uphold ───────────────────────────────────────
// Distributor-appropriate credentials (not manufacturing certs). // placeholder
export const certifications = [
  {
    code: "DRAP",
    name: "Regulatory compliance",
    description:
      "We handle and supply products in line with Drug Regulatory Authority of Pakistan requirements.",
  },
  {
    code: "2–8°C",
    name: "Temperature control",
    description:
      "Storage and handling procedures designed to protect vaccines and sensitive biologicals.",
  },
  {
    code: "QA",
    name: "Incoming quality checks",
    description:
      "Every consignment is verified for authenticity, condition and remaining shelf life.",
  },
  {
    code: "LOT",
    name: "Batch traceability",
    description:
      "Lot and expiry details are recorded so any product can be traced and documented.",
  },
  {
    code: "OEM",
    name: "Authorised sourcing",
    description:
      "Products are procured only through the manufacturers' authorised distribution channels.",
  },
  {
    code: "DOCS",
    name: "Full documentation",
    description:
      "Certificates of analysis and product data are available to customers on request.",
  },
];

// ── Industries / applications (poultry only) ──────────────────
export const industries = [
  {
    slug: "broilers",
    name: "Broiler production",
    icon: "Drumstick",
    image: photos.brooderHouse,
    tagline: "From placement to processing",
    description:
      "Products that protect growth, uniformity and feed efficiency across the grow-out cycle.",
    points: [
      "Respiratory & enteric disease control",
      "Gut-health and performance nutrition",
      "Water-line hygiene and biosecurity",
    ],
  },
  {
    slug: "layers",
    name: "Layer operations",
    icon: "Egg",
    image: photos.henClose,
    tagline: "Long-cycle health & shell quality",
    description:
      "Support for sustained immunity, calcium metabolism and shell quality across long laying cycles.",
    points: [
      "Multi-age immunity products",
      "Calcium & mineral support",
      "Stress and heat management",
    ],
  },
  {
    slug: "breeders",
    name: "Breeder flocks",
    icon: "Bird",
    image: photos.roosterProfile,
    tagline: "Protection for the next generation",
    description:
      "Immunity and reproductive-health products that help pass maternal protection to the chicks.",
    points: [
      "Maternal antibody programs",
      "Reproductive-health nutrition",
      "Vaccines & titre monitoring support",
    ],
  },
  {
    slug: "commercial",
    name: "Integrated production",
    icon: "Factory",
    image: photos.farmPanorama,
    tagline: "End-to-end supply",
    description:
      "Consistent supply of a full product range for large, vertically integrated operations.",
    points: [
      "Standardised product supply",
      "Central technical support",
      "Reliable availability at volume",
    ],
  },
];

// ── Leadership (monogram avatars) ─────────────────────────────
// Only the CEO is confirmed (from the business card). Add the rest of the team
// with real names, roles and photos before launch. // placeholder
export const leadership = [
  {
    name: "Muhammad Imran",
    role: "Chief Executive Officer",
    focus:
      "Leads Bilal Pharmaceuticals' sourcing, brand partnerships and technical service to poultry producers — and represents the company personally at international trade shows and supplier audits.",
    initials: "MI",
    image: team.ceoPortrait,
  },
];

// ── Testimonials ──────────────────────────────────────────────
// placeholder testimonials — replace with real customer quotes
export const testimonials = [
  {
    quote:
      "Bilal Pharmaceuticals keeps the vaccines and medicines we depend on in stock and in good condition. Their team knows poultry and always picks up the phone.",
    name: "Daniel Okonkwo",
    role: "Production Director",
    org: "Integrated broiler operation",
    initials: "DO",
  },
  {
    quote:
      "As a consulting vet, I need reliable products and honest advice. Bilal supplies trusted brands and backs them with real technical support.",
    name: "Dr. Sarah Bloom",
    role: "Consulting Poultry Veterinarian",
    org: "Independent practice",
    initials: "SB",
  },
  {
    quote:
      "Consistent supply and correct cold-chain handling matter to us. Bilal delivers on both — order after order.",
    name: "Rahul Mehta",
    role: "Farm Owner",
    org: "Commercial layer farm",
    initials: "RM",
  },
];

// ── Brands we import & distribute (marquee) ───────────────────
export const partners = [
  "Top Pharma",
  "Leads Pharma",
  "MultiVet Pharma",
  "Innomax International",
];

// ── On the record — real trade-show, supplier & industry engagements ──────
// Documented by the client's own photography (see /public/team). Captions are
// deliberately factual: what the photo verifiably shows, no unconfirmed names.
export const onTheRecord = [
  {
    image: team.ippeExpo,
    tag: "IPPE · USA",
    title: "International Production & Processing Expo",
    caption:
      "On the floor at IPPE — the world's largest annual poultry, meat and feed event — keeping sourcing and product knowledge current.",
    aspect: "portrait" as const,
    position: "center 30%",
  },
  {
    image: team.space2024,
    tag: "SPACE 2024 · Rennes, France",
    title: "Salon International des Productions Animales",
    caption:
      "SPACE 2024, one of Europe's leading animal-production exhibitions — meeting principals and evaluating new animal-health lines.",
    aspect: "landscape" as const,
    position: "center 28%",
  },
  {
    image: team.foshanVisit,
    tag: "Foshan · China",
    title: "Supplier & packaging audit",
    caption:
      "A supplier visit in Foshan, Guangdong — seeing manufacturing and packaging first-hand before product reaches our customers.",
    aspect: "wide" as const,
    position: "center 42%",
  },
  {
    image: team.award2026,
    tag: "Zaryans Business Group · 2026",
    title: "40 Years Annual Business Conference of Excellence",
    caption:
      "Recognised at an annual business conference of excellence — staying visible and connected in the industry we serve.",
    aspect: "landscape" as const,
    position: "center 35%",
  },
  {
    image: team.industrySeminar,
    tag: "Industry roundtable · Pakistan",
    title: "At the table with the sector",
    caption:
      "Sitting in on a poultry-sector roundtable — staying close to the questions producers and veterinarians are actually asking.",
    aspect: "landscape" as const,
    position: "center 32%",
  },
  {
    image: team.newYork,
    tag: "New York · USA",
    title: "Relationships handled in person",
    caption:
      "Principal and supplier relationships are managed personally — from Islamabad to trade floors across Asia, Europe and North America.",
    aspect: "landscape" as const,
    position: "center bottom",
  },
];

// ── Contact channels ──────────────────────────────────────────
export const contactChannels = [
  {
    icon: "Boxes",
    title: "Sales & orders",
    description: "Product enquiries, pricing and placing an order.",
    detail: "chbilalpharmaceuticals@gmail.com",
  },
  {
    icon: "Stethoscope",
    title: "Technical & veterinary support",
    description: "Product selection, dosing and vaccination guidance.",
    detail: "chbilalpharmaceuticals@gmail.com",
  },
  {
    icon: "Users",
    title: "Brand partnerships",
    description: "Manufacturers seeking a distribution partner.",
    detail: "chbilalpharmaceuticals@gmail.com",
  },
];
