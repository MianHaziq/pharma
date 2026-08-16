// Structured content for informational pages. Original placeholder demo copy —
// this is a demo storefront, not a real company, and is not veterinary advice.

export interface ContentSection {
  heading: string;
  body?: string[];
  list?: string[];
}

export interface InfoPage {
  title: string;
  intro: string;
  updated?: string;
  sections: ContentSection[];
}

export const deliveryPage: InfoPage = {
  title: "Delivery information",
  intro:
    "We deliver genuine poultry-health products across the country with fast dispatch and proper cold-chain handling for vaccines and biologicals.",
  sections: [
    {
      heading: "Delivery options",
      list: [
        "Standard Delivery — 3 to 5 business days.",
        "Express Delivery — 1 to 2 business days for eligible areas.",
        "Free standard delivery on all farm orders over Rs. 3,000.",
      ],
    },
    {
      heading: "Cold-chain for vaccines",
      body: [
        "Vaccines and biologicals are dispatched with cold packs and insulated packaging to maintain 2–8°C in transit. Frozen products such as Marek's vaccine are handled separately — our team will contact you to arrange suitable delivery.",
      ],
    },
    {
      heading: "Dispatch times",
      body: [
        "Orders placed before 4:00 PM are dispatched the same day, Monday to Saturday. Orders placed later, or on Sundays and public holidays, are dispatched the next business day.",
      ],
    },
    {
      heading: "Tracking your order",
      body: [
        "You'll receive an order number by email as soon as your order is confirmed. You can follow your delivery any time from the Track Order page or your account.",
      ],
    },
  ],
};

export const returnsPage: InfoPage = {
  title: "Returns & refunds",
  intro:
    "Your flock's health depends on product integrity, so returns on medicines follow strict safety rules. Here's how it works.",
  sections: [
    {
      heading: "Our 7-day returns",
      body: [
        "You can return eligible, unopened equipment and non-temperature-sensitive products within 7 days of delivery for a refund or exchange. Items must be in their original, sealed packaging.",
      ],
    },
    {
      heading: "Items that cannot be returned",
      list: [
        "Vaccines and biologicals, once dispatched (cold-chain integrity cannot be re-verified).",
        "Opened medicines, supplements, disinfectants or feed additives.",
        "Products with broken safety seals.",
        "Any product past its stated shelf life.",
      ],
    },
    {
      heading: "Damaged or incorrect items",
      body: [
        "If a product arrives damaged, incorrect, or with compromised cold-chain, contact us within 24 hours of delivery with photos and your order number and we'll make it right quickly.",
      ],
    },
    {
      heading: "Refunds",
      body: [
        "Approved refunds are processed to your original payment method within 5 to 7 business days. Cash on delivery orders are refunded via bank transfer or store credit.",
      ],
    },
  ],
};

export const privacyPage: InfoPage = {
  title: "Privacy policy",
  intro:
    "We respect the privacy of your farm and business information. This policy explains what we collect and how we use it.",
  updated: "Last updated: August 2026",
  sections: [
    {
      heading: "Information we collect",
      body: [
        "We collect the information you provide when you create an account, place an order or contact us — such as your name, farm or business details, contact information, delivery address and order history. Payment details are handled securely by our payment partners and are not stored on our servers.",
      ],
    },
    {
      heading: "How we use your information",
      list: [
        "To process and deliver your orders.",
        "To provide technical and customer support.",
        "To improve our products, programmes and service.",
        "To send offers and poultry-health updates, only if you opt in.",
      ],
    },
    {
      heading: "Keeping your data secure",
      body: [
        "We use encryption and industry-standard safeguards to protect your data. Access to customer and order information is restricted to authorised staff only.",
      ],
    },
    {
      heading: "Your rights",
      body: [
        "You can access, update or request deletion of your personal data at any time from your account or by contacting our support team.",
      ],
    },
  ],
};

export const termsPage: InfoPage = {
  title: "Terms & conditions",
  intro:
    "These terms govern your use of the PoultriMed demo storefront. Please read them carefully.",
  updated: "Last updated: August 2026",
  sections: [
    {
      heading: "About this store",
      body: [
        "PoultriMed is a demonstration storefront created to showcase an online poultry-health store. It does not sell real products, process real payments or dispatch real medicines.",
      ],
    },
    {
      heading: "Responsible use of medicines",
      body: [
        "In a live store, antibiotics and other medicines should be used responsibly under veterinary guidance, and withdrawal periods must be observed before eggs or meat enter the food chain. Product information here is placeholder content and must not be used for real treatment decisions.",
      ],
    },
    {
      heading: "Veterinary prescription products",
      body: [
        "Some products are marked as requiring a veterinary prescription. In a live store these would be verified by a qualified veterinarian before dispatch. In this demo, no verification is performed.",
      ],
    },
    {
      heading: "Pricing & availability",
      body: [
        "All prices, offers and stock levels shown are illustrative and may change. Nothing on this demo constitutes a binding offer of sale.",
      ],
    },
  ],
};

export const aboutPage: InfoPage = {
  title: "About PoultriMed",
  intro:
    "PoultriMed is a demonstration of a modern poultry-health store — built to make genuine vaccines, medicines and supplements easy to source for every farm.",
  sections: [
    {
      heading: "Our mission",
      body: [
        "Healthy flocks are the foundation of a profitable farm. PoultriMed brings vaccines, medicines, supplements and biosecurity together in one trusted place, with cold-chain handling and delivery to the farm gate.",
      ],
    },
    {
      heading: "What we stand for",
      list: [
        "Only genuine products from authorised animal-health manufacturers.",
        "Proper cold-chain handling for every vaccine and biological.",
        "Clear guidance and responsible-use information for medicines.",
        "Practical support for growers and distributors, seven days a week.",
      ],
    },
    {
      heading: "A note on this demo",
      body: [
        "This site is a portfolio demonstration. Products, brands, prices and content are illustrative placeholders and do not represent a real company or veterinary advice.",
      ],
    },
  ],
};

export interface Faq {
  question: string;
  answer: string;
}

export const faqs: Faq[] = [
  {
    question: "Are your products genuine?",
    answer:
      "Yes. In our concept, every product is sourced from authorised animal-health manufacturers and distributors, with our own range manufactured to GMP standards. (This is a demo storefront.)",
  },
  {
    question: "How are vaccines kept cold in delivery?",
    answer:
      "Vaccines and biologicals are dispatched with cold packs and insulated packaging to hold 2–8°C in transit. Frozen products are arranged separately with a dedicated cold-chain delivery.",
  },
  {
    question: "Do I need a prescription for antibiotics?",
    answer:
      "Some products are marked as requiring a veterinary prescription and would be verified by a qualified vet before dispatch in a live store. Always use antibiotics responsibly and observe withdrawal periods. In this demo, no real verification is performed.",
  },
  {
    question: "What payment methods do you accept?",
    answer:
      "We support Cash on Delivery, credit and debit cards, and online payments such as JazzCash and EasyPaisa. This demo does not process real payments.",
  },
  {
    question: "Can I return a product?",
    answer:
      "Eligible, unopened equipment and non-temperature-sensitive items can be returned within 7 days. Vaccines, opened medicines and feed additives cannot be returned for safety reasons.",
  },
  {
    question: "Do you supply bulk or distributor orders?",
    answer:
      "Yes — for large flocks and distributors we can arrange bulk pricing and scheduled delivery. Contact our team with your requirements and we'll help.",
  },
];
