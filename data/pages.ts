// Structured content for informational pages. Placeholder demo copy — this is
// a demo storefront, not a real pharmacy.

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
    "We deliver genuine healthcare products across Pakistan with care, speed and temperature-safe packaging for medicines.",
  sections: [
    {
      heading: "Delivery options",
      list: [
        "Standard Delivery — 3 to 5 business days.",
        "Express Delivery — 1 to 2 business days for eligible areas.",
        "Free standard delivery on all orders over Rs. 3,000.",
      ],
    },
    {
      heading: "Dispatch times",
      body: [
        "Orders placed before 4:00 PM are dispatched the same day, Monday to Saturday. Orders placed after 4:00 PM or on Sundays and public holidays are dispatched the next business day.",
      ],
    },
    {
      heading: "Safe packaging",
      body: [
        "Every order is checked by a qualified pharmacist before dispatch. Temperature-sensitive medicines are packed with appropriate protection to preserve quality in transit.",
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
    "Your satisfaction matters. We offer straightforward returns on eligible items, in line with healthcare safety regulations.",
  sections: [
    {
      heading: "Our 7-day returns",
      body: [
        "You can return eligible, unopened non-prescription products within 7 days of delivery for a refund or exchange. Items must be in their original, sealed packaging.",
      ],
    },
    {
      heading: "Items that cannot be returned",
      list: [
        "Prescription medicines, once dispensed.",
        "Opened or used personal care, skincare or hygiene products.",
        "Products with broken safety seals.",
        "Refrigerated or temperature-sensitive medicines.",
      ],
    },
    {
      heading: "How to start a return",
      body: [
        "Contact our support team with your order number and the item you'd like to return. Once approved, we'll arrange collection or provide return instructions.",
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
    "We take the privacy of your health information seriously. This policy explains what we collect and how we use it.",
  updated: "Last updated: August 2026",
  sections: [
    {
      heading: "Information we collect",
      body: [
        "We collect the information you provide when you create an account, place an order or contact us — such as your name, contact details, delivery address and order history. Payment details are handled securely by our payment partners and are not stored on our servers.",
      ],
    },
    {
      heading: "How we use your information",
      list: [
        "To process and deliver your orders.",
        "To provide customer support and order updates.",
        "To improve our products and services.",
        "To send offers and health tips, only if you opt in.",
      ],
    },
    {
      heading: "Keeping your data secure",
      body: [
        "We use encryption and industry-standard safeguards to protect your data. Access to personal and health-related information is restricted to authorised staff only.",
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
    "These terms govern your use of the VitalCare Pharmacy demo storefront. Please read them carefully.",
  updated: "Last updated: August 2026",
  sections: [
    {
      heading: "About this store",
      body: [
        "VitalCare Pharmacy is a demonstration storefront created to showcase an online pharmacy experience. It does not sell real products, process real payments or dispense real medicines.",
      ],
    },
    {
      heading: "Use of the service",
      body: [
        "You agree to use this website lawfully and not to misuse any of its features. Product information is placeholder content and should not be relied upon for medical decisions.",
      ],
    },
    {
      heading: "Prescriptions",
      body: [
        "In a live pharmacy, prescription-only medicines require a valid prescription verified by a licensed pharmacist before dispatch. In this demo, no verification is performed.",
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
  title: "About VitalCare",
  intro:
    "VitalCare is a demonstration of a modern online pharmacy — built to make genuine healthcare feel accessible, trustworthy and effortless.",
  sections: [
    {
      heading: "Our mission",
      body: [
        "We believe getting the healthcare products you need should be simple and reassuring. VitalCare brings medicines, vitamins and everyday essentials together in one trusted place, delivered with care to your door.",
      ],
    },
    {
      heading: "What we stand for",
      list: [
        "Only genuine products from authorised suppliers.",
        "Every order checked by a qualified pharmacist.",
        "Clear pricing, honest information and easy returns.",
        "Support from real people, seven days a week.",
      ],
    },
    {
      heading: "A note on this demo",
      body: [
        "This site is a portfolio demonstration. Products, brands, prices and content are illustrative placeholders and do not represent a real pharmacy or medical advice.",
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
      "Yes. In our concept, every product is sourced from authorised distributors and verified suppliers, and each order is checked by a qualified pharmacist before dispatch. (This is a demo storefront.)",
  },
  {
    question: "How long does delivery take?",
    answer:
      "Standard delivery takes 3–5 business days and express delivery takes 1–2 business days for eligible areas. Free standard delivery applies to orders over Rs. 3,000.",
  },
  {
    question: "How do I order prescription medicines?",
    answer:
      "Add prescription items to your cart and you'll be prompted to upload your prescription at checkout. A pharmacist verifies it before dispatch. In this demo, no real verification is performed.",
  },
  {
    question: "What payment methods do you accept?",
    answer:
      "We support Cash on Delivery, credit and debit cards, and online payments such as JazzCash and EasyPaisa. This demo does not process real payments.",
  },
  {
    question: "Can I return a product?",
    answer:
      "Eligible, unopened non-prescription items can be returned within 7 days of delivery. Prescription medicines and opened personal care items cannot be returned for safety reasons.",
  },
  {
    question: "How do I track my order?",
    answer:
      "You'll receive an order number by email once your order is confirmed. Use the Track Order page or your account to follow your delivery in real time.",
  },
];
