import type { BlogPost } from "@/lib/types";

// Poultry health editorial content. Original placeholder copy for demo purposes
// only — not veterinary advice.

export const blogPosts: BlogPost[] = [
  {
    id: "post-vaccination",
    slug: "building-a-vaccination-programme-for-broilers",
    title: "Building a vaccination programme for broilers",
    excerpt:
      "A clear, practical approach to timing Newcastle, Gumboro and IB protection through the flock cycle.",
    category: "Vaccination",
    readTime: "5 min read",
    date: "2026-08-04",
    author: "Bilal Technical Team",
    tone: "sky",
    content: [
      "A good vaccination programme is the backbone of flock health. The goal is simple: protect birds before disease challenge arrives, while working with — not against — the maternal antibodies chicks carry from the breeder.",
      "Newcastle disease and infectious bronchitis are usually primed in the first week, often by spray or eye-drop, then boosted through the cycle. Gumboro (IBD) timing is more sensitive: vaccinate too early and maternal antibodies neutralise the vaccine, too late and birds are exposed. Many farms use a bursal-antibody profile to pick the day.",
      "Whatever the schedule, the fundamentals matter most: vaccinate only healthy birds, keep vaccines on ice until use, mix in cool chlorine-free water, and use reconstituted product quickly. Record every batch and date.",
      "This article is original placeholder content for demonstration and is not a substitute for advice from your own veterinarian.",
    ],
  },
  {
    id: "post-coccidiosis",
    slug: "managing-coccidiosis-in-poultry",
    title: "Managing coccidiosis in poultry",
    excerpt:
      "How to recognise, treat and prevent one of the most costly gut diseases in the shed.",
    category: "Gut Health",
    readTime: "4 min read",
    date: "2026-07-26",
    author: "Bilal Technical Team",
    tone: "coral",
    content: [
      "Coccidiosis is caused by Eimeria parasites that damage the gut lining, leading to poor absorption, wet litter and — in clinical cases — blood in droppings and rising mortality. Even subclinical infection quietly erodes feed conversion.",
      "Prevention usually combines good litter management with an in-feed coccidiostat or a carefully timed vaccine. When a clinical outbreak appears, a curative anticoccidial such as amprolium or toltrazuril in the drinking water can bring it under control quickly.",
      "Support recovery with vitamins A and K, keep litter dry, and review your prevention programme so the same challenge doesn't return with the next flock.",
      "This article is original placeholder content for demonstration and is not a substitute for advice from your own veterinarian.",
    ],
  },
  {
    id: "post-biosecurity",
    slug: "biosecurity-essentials-for-your-farm",
    title: "Biosecurity essentials for your farm",
    excerpt:
      "The low-cost habits that keep disease off the farm and out of the shed.",
    category: "Biosecurity",
    readTime: "4 min read",
    date: "2026-07-16",
    author: "Bilal Technical Team",
    tone: "steel",
    content: [
      "The cheapest disease to treat is the one that never gets in. Strong biosecurity is mostly routine: control who and what enters, and clean thoroughly between flocks.",
      "Keep a functioning footbath at every entrance and refresh the disinfectant regularly. Limit visitors, provide dedicated boots and clothing, and control wild birds and rodents, which carry many poultry pathogens.",
      "Between flocks, dry-clean, wash, then disinfect — a disinfectant only works on a clean surface. Finish with terminal fogging and a proper down-time before restocking.",
      "This article is original placeholder content for demonstration and is not a substitute for advice from your own veterinarian.",
    ],
  },
  {
    id: "post-heat-stress",
    slug: "reducing-heat-stress-in-summer",
    title: "Reducing heat stress in summer",
    excerpt:
      "Practical steps to protect intake, growth and welfare when the temperature climbs.",
    category: "Management",
    readTime: "3 min read",
    date: "2026-07-06",
    author: "Bilal Technical Team",
    tone: "amber",
    content: [
      "Heat stress cuts feed intake, slows growth and, at its worst, raises mortality. Birds lose the ability to cool themselves efficiently as temperature and humidity rise, so management has to do the work for them.",
      "Improve airflow and ventilation, provide plenty of cool, clean water, and consider foggers during the hottest hours. Feeding during cooler parts of the day helps maintain intake.",
      "Electrolytes and vitamin C in the drinking water support hydration and reduce the impact of stress. Watch the flock closely at midday, when heat load peaks.",
      "This article is original placeholder content for demonstration and is not a substitute for advice from your own veterinarian.",
    ],
  },
];
