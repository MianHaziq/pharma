// ─────────────────────────────────────────────────────────────
// AviCura — single source of truth for corporate content.
// All copy is original demo content for a fictional company. Swap any value
// here (name, contact, stats, people, nav) and it updates across the site.
// ─────────────────────────────────────────────────────────────

import { photos } from "@/lib/images";

export const company = {
  name: "AviCura",
  legalName: "AviCura Biosciences",
  tagline: "Advancing poultry health through science",
  established: 2004,
  domain: "avicura.example",
  registration: "AVC",
  description:
    "AviCura Biosciences develops and manufactures pharmaceuticals, vaccines and nutritional health solutions for modern poultry production — engineered in the laboratory and proven on the farm.",
  descriptionShort:
    "Pharmaceuticals, vaccines and nutrition for modern poultry production.",
  phone: "+31 30 555 0140",
  email: "hello@avicura.example",
  salesEmail: "partnerships@avicura.example",
  vetEmail: "vetsupport@avicura.example",
  mediaEmail: "media@avicura.example",
  hq: {
    line1: "Bioscience Park, Building 7",
    line2: "3584 CM Utrecht, Netherlands",
  },
  disclaimer:
    "AviCura is a fictional company. This site is a design demonstration and all content is illustrative — not veterinary advice.",
};

export const socials = [
  { name: "linkedin", label: "LinkedIn", href: "#" },
  { name: "x", label: "X", href: "#" },
  { name: "youtube", label: "YouTube", href: "#" },
  { name: "facebook", label: "Facebook", href: "#" },
] as const;

// ── Navigation ────────────────────────────────────────────────
export const primaryNav = [
  { label: "Company", href: "/about" },
  { label: "Solutions", href: "/solutions" },
  { label: "Research", href: "/research" },
  { label: "Quality", href: "/quality" },
  { label: "Industries", href: "/industries" },
  { label: "Insights", href: "/insights" },
];

export const footerNav = [
  {
    title: "Company",
    links: [
      { label: "About AviCura", href: "/about" },
      { label: "Research & Innovation", href: "/research" },
      { label: "Quality & Compliance", href: "/quality" },
      { label: "Industries", href: "/industries" },
      { label: "Insights", href: "/insights" },
      { label: "Contact", href: "/contact" },
    ],
  },
  {
    title: "Solutions",
    links: [
      { label: "Portfolio overview", href: "/solutions" },
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
      { label: "Certifications", href: "/quality" },
      { label: "Newsroom", href: "/insights" },
      { label: "Partnerships", href: "/contact" },
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
export const stats = [
  { value: 20, prefix: "", suffix: "+", label: "Years of poultry science" },
  { value: 180, prefix: "", suffix: "+", label: "Registered products" },
  { value: 45, prefix: "", suffix: "", label: "Countries served" },
  { value: 30, prefix: "", suffix: "+", label: "Active research programs" },
];

export const heroStats = [
  { value: 45, prefix: "", suffix: "", label: "Countries served" },
  { value: 180, prefix: "", suffix: "+", label: "Registered products" },
  { value: 20, prefix: "", suffix: "+", label: "Years of science" },
];

export const capabilities = [
  { value: "1.8B", label: "Doses produced each year" },
  { value: "12", label: "Dedicated production lines" },
  { value: "98.7%", label: "On-time, in-full delivery" },
  { value: "2–8°C", label: "Validated cold chain" },
];

// ── Mission / vision ──────────────────────────────────────────
export const missionVision = {
  mission:
    "To protect the health and productivity of the world's poultry with science-led pharmaceuticals, vaccines and nutrition that producers can trust.",
  vision:
    "A world where every flock is raised healthier, more efficiently and more responsibly — supported by accessible veterinary science.",
};

// ── Why choose us ─────────────────────────────────────────────
export const differentiators = [
  {
    icon: "ShieldCheck",
    title: "Quality without compromise",
    description:
      "Every batch is released against pharmacopoeial specifications, with full traceability from raw material to finished vial.",
  },
  {
    icon: "FlaskConical",
    title: "Science at the core",
    description:
      "A dedicated R&D team and diagnostic partners turn real field challenges into targeted, proven solutions.",
  },
  {
    icon: "Factory",
    title: "Advanced manufacturing",
    description:
      "GMP-certified facilities with separate biological and pharmaceutical lines and validated cold-chain handling.",
  },
  {
    icon: "Stethoscope",
    title: "Veterinary expertise",
    description:
      "Poultry veterinarians support customers with vaccination programs, diagnostics and on-farm guidance.",
  },
  {
    icon: "Truck",
    title: "Reliable global supply",
    description:
      "A resilient supply network and cold-chain logistics keep 45+ markets consistently stocked.",
  },
  {
    icon: "ClipboardCheck",
    title: "Regulatory compliance",
    description:
      "Products registered and maintained to the standards of every market we serve, backed by full documentation.",
  },
];

// ── Company values ────────────────────────────────────────────
export const values = [
  {
    icon: "ShieldCheck",
    title: "Integrity",
    description:
      "We do what protects the flock and the farmer, even when no one is auditing. Quality is never a variable.",
  },
  {
    icon: "Microscope",
    title: "Scientific rigor",
    description:
      "Decisions are grounded in evidence — from the research bench to the field trial to the batch record.",
  },
  {
    icon: "Users",
    title: "Partnership",
    description:
      "We succeed when our customers do, so we invest in long-term technical relationships, not transactions.",
  },
  {
    icon: "Leaf",
    title: "Responsibility",
    description:
      "We champion antimicrobial stewardship and lower-impact production as part of a healthier food system.",
  },
];

// ── History / milestones ──────────────────────────────────────
export const milestones = [
  {
    year: "2004",
    title: "Founded in Utrecht",
    description:
      "AviCura is established to bring pharmaceutical-grade quality to poultry health.",
  },
  {
    year: "2009",
    title: "First GMP facility",
    description:
      "Commissioning of our first good-manufacturing-practice line for water-soluble medicines.",
  },
  {
    year: "2013",
    title: "Vaccine platform",
    description:
      "Launch of our live and inactivated vaccine platform for respiratory and enteric disease.",
  },
  {
    year: "2017",
    title: "Innovation Center",
    description:
      "Opening of the AviCura Innovation Center for diagnostics and formulation research.",
  },
  {
    year: "2021",
    title: "45 markets",
    description:
      "Registration and distribution expand across Europe, MEA, the Americas and Asia Pacific.",
  },
  {
    year: "2025",
    title: "Sustainable biologics",
    description:
      "A new biologics suite opens alongside a program to lower the footprint of every dose.",
  },
];

// ── Global presence ───────────────────────────────────────────
export const offices = [
  {
    region: "Europe",
    city: "Utrecht, Netherlands",
    detail: "Global headquarters & central R&D",
    isHq: true,
  },
  {
    region: "North America",
    city: "Atlanta, United States",
    detail: "Regional office & technical services",
    isHq: false,
  },
  {
    region: "Middle East & Africa",
    city: "Dubai, UAE",
    detail: "Distribution hub & veterinary support",
    isHq: false,
  },
  {
    region: "Asia Pacific",
    city: "Singapore",
    detail: "Regional office & product registration",
    isHq: false,
  },
];

// ── Research pillars ──────────────────────────────────────────
export const researchPillars = [
  {
    icon: "Microscope",
    title: "Applied diagnostics",
    description:
      "Serological and molecular monitoring that turns field data into sharper, more effective programs.",
  },
  {
    icon: "FlaskConical",
    title: "Formulation science",
    description:
      "Stable, palatable, water-soluble and in-feed formulations built for real farm conditions.",
  },
  {
    icon: "Dna",
    title: "Vaccine development",
    description:
      "Live, inactivated and vector platforms targeting the respiratory and enteric diseases that matter most.",
  },
  {
    icon: "Leaf",
    title: "Antimicrobial stewardship",
    description:
      "Gut-health and nutrition programs that reduce reliance on antibiotics without losing performance.",
  },
];

// ── Quality process (an ordered sequence) ─────────────────────
export const qualitySteps = [
  {
    step: "01",
    title: "Raw material control",
    description:
      "Every incoming material is sampled, tested and quarantined until it meets specification.",
  },
  {
    step: "02",
    title: "Validated manufacturing",
    description:
      "Production runs on qualified equipment under documented, GMP-controlled processes.",
  },
  {
    step: "03",
    title: "In-process testing",
    description:
      "Critical quality attributes are monitored at every stage — not only at the end of the line.",
  },
  {
    step: "04",
    title: "Independent batch release",
    description:
      "A qualified person releases each batch only against full pharmacopoeial specifications.",
  },
  {
    step: "05",
    title: "Cold chain & traceability",
    description:
      "Temperature-controlled logistics and lot-level traceability protect potency all the way to the farm.",
  },
];

// ── Certifications ────────────────────────────────────────────
export const certifications = [
  {
    code: "GMP",
    name: "Good Manufacturing Practice",
    description:
      "Manufacturing facilities audited and certified to WHO-aligned GMP standards.",
  },
  {
    code: "ISO 9001",
    name: "Quality Management",
    description: "A certified quality-management system across the organization.",
  },
  {
    code: "ISO 14001",
    name: "Environmental Management",
    description: "Independently certified environmental management and reporting.",
  },
  {
    code: "GLP",
    name: "Good Laboratory Practice",
    description: "Research and testing conducted under GLP-compliant conditions.",
  },
  {
    code: "HACCP",
    name: "Hazard Analysis",
    description: "Preventive food-safety controls across nutritional product lines.",
  },
  {
    code: "ISO 45001",
    name: "Occupational Health & Safety",
    description: "A certified framework protecting the people behind every product.",
  },
];

// ── Industries / applications ─────────────────────────────────
export const industries = [
  {
    slug: "broilers",
    name: "Broiler production",
    icon: "Drumstick",
    image: photos.brooderHouse,
    tagline: "From placement to processing",
    description:
      "Programs that protect growth, uniformity and feed efficiency across the grow-out cycle.",
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
      "Sustained immunity, calcium metabolism and shell quality across long laying cycles.",
    points: [
      "Multi-age immunity programs",
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
      "Immunity and reproductive performance that pass maternal protection to the chicks.",
    points: [
      "Maternal antibody programs",
      "Reproductive-health nutrition",
      "Vaccination & titre monitoring",
    ],
  },
  {
    slug: "hatcheries",
    name: "Hatcheries",
    icon: "Egg",
    image: photos.eggsCollect,
    tagline: "A strong, even start",
    description:
      "Day-one protection and hatchery hygiene for uniform, resilient chicks.",
    points: [
      "Hatchery vaccination",
      "Egg & environment disinfection",
      "Early-life nutrition",
    ],
  },
  {
    slug: "commercial",
    name: "Integrated production",
    icon: "Factory",
    image: photos.farmPanorama,
    tagline: "End-to-end health management",
    description:
      "Coordinated health programs for large, vertically integrated operations at scale.",
    points: [
      "Standardized health protocols",
      "Central technical services",
      "Supply reliability at volume",
    ],
  },
];

// ── Leadership (monogram avatars) ─────────────────────────────
export const leadership = [
  {
    name: "Dr. Elise Vermeer",
    role: "Chief Executive Officer",
    focus: "Veterinary microbiologist with 20 years in animal-health leadership.",
    initials: "EV",
  },
  {
    name: "Dr. Marcus Reilly",
    role: "Chief Scientific Officer",
    focus: "Leads vaccine and formulation research across all AviCura platforms.",
    initials: "MR",
  },
  {
    name: "Priya Nair",
    role: "VP, Global Quality",
    focus: "Accountable for GMP compliance and batch release worldwide.",
    initials: "PN",
  },
  {
    name: "Tomás Herrera",
    role: "VP, Commercial",
    focus: "Builds distributor and integrator partnerships across 45 markets.",
    initials: "TH",
  },
];

// ── Testimonials ──────────────────────────────────────────────
export const testimonials = [
  {
    quote:
      "AviCura's vaccination program and technical support cut our respiratory challenges dramatically. What keeps us with them is the consistency — batch after batch.",
    name: "Daniel Okonkwo",
    role: "Production Director",
    org: "Integrated broiler operation · 4.2M birds",
    initials: "DO",
  },
  {
    quote:
      "As a consulting vet I recommend products I can stand behind. AviCura's documentation, titre data and field results give me the confidence to do that.",
    name: "Dr. Sarah Bloom",
    role: "Consulting Poultry Veterinarian",
    org: "Independent practice",
    initials: "SB",
  },
  {
    quote:
      "Reliable supply is everything for a distributor. AviCura delivers on time, in full, with the cold chain intact — and their team picks up the phone.",
    name: "Rahul Mehta",
    role: "Head of Distribution",
    org: "Regional animal-health distributor",
    initials: "RM",
  },
];

// ── Trusted-by marquee ────────────────────────────────────────
export const partners = [
  "Nutrecta",
  "Avanor Group",
  "BioNexa",
  "Provet Global",
  "AgriHealth",
  "Vetalink",
  "Coretica",
  "Zenith Farms",
];

// ── Contact channels ──────────────────────────────────────────
export const contactChannels = [
  {
    icon: "Users",
    title: "Partnerships & distribution",
    description: "Become a distribution partner or discuss volume supply.",
    detail: "partnerships@avicura.example",
  },
  {
    icon: "Stethoscope",
    title: "Veterinary & technical support",
    description: "Program design, diagnostics and product guidance.",
    detail: "vetsupport@avicura.example",
  },
  {
    icon: "Newspaper",
    title: "Media & press",
    description: "Interviews, statements and company information.",
    detail: "media@avicura.example",
  },
];
