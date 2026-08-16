import type { Order, TrackingStep } from "@/lib/types";

const fullTimeline = (reached: number): TrackingStep[] => {
  const steps: Omit<TrackingStep, "done" | "current">[] = [
    {
      status: "placed",
      label: "Order placed",
      description: "We've received your order and sent a confirmation email.",
      date: "12 Aug 2026, 9:24 AM",
    },
    {
      status: "confirmed",
      label: "Confirmed",
      description: "Your order and payment have been confirmed.",
      date: "12 Aug 2026, 9:31 AM",
    },
    {
      status: "processing",
      label: "Processing",
      description: "Our team is preparing and cold-packing your items.",
      date: "12 Aug 2026, 11:05 AM",
    },
    {
      status: "shipped",
      label: "Shipped",
      description: "Your parcel is on its way to the regional delivery hub.",
      date: "12 Aug 2026, 3:40 PM",
    },
    {
      status: "out_for_delivery",
      label: "Out for delivery",
      description: "Your rider is on the way to the farm with your order.",
      date: "13 Aug 2026, 10:15 AM",
    },
    {
      status: "delivered",
      label: "Delivered",
      description: "Your order has been delivered. Healthy flocks!",
      date: "13 Aug 2026, 1:02 PM",
    },
  ];

  return steps.map((step, index) => ({
    ...step,
    date: index <= reached ? step.date : undefined,
    done: index < reached,
    current: index === reached,
  }));
};

export const orders: Order[] = [
  {
    id: "PH-10245",
    date: "12 Aug 2026",
    status: "out_for_delivery",
    items: [
      {
        productId: "p-nd-lasota",
        name: "Newcastle Disease Vaccine (LaSota)",
        image: "art:dropper:sky",
        brand: "Ceva",
        price: 320,
        quantity: 5,
      },
      {
        productId: "p-ad3e",
        name: "PoultriMed AD3E Vitamin Solution",
        image: "art:bottle:amber",
        brand: "PoultriMed",
        price: 780,
        quantity: 2,
      },
      {
        productId: "p-electrolyte-c",
        name: "Electrolyte + Vitamin C Powder",
        image: "art:sachet:amber",
        brand: "Phibro",
        price: 560,
        quantity: 3,
      },
    ],
    subtotal: 4840,
    discount: 340,
    deliveryFee: 0,
    total: 4500,
    paymentMethod: "Cash on Delivery",
    deliveryMethod: "Standard Delivery",
    address: {
      fullName: "Imran Ali — Al-Falah Poultry Farm",
      line1: "Chak 44-GB, Satiana Road",
      city: "Faisalabad",
      province: "Punjab",
      postalCode: "38000",
      country: "Pakistan",
      phone: "+92 300 1234567",
    },
    estimatedDelivery: "13 Aug 2026",
    timeline: fullTimeline(4),
  },
  {
    id: "PH-10231",
    date: "5 Aug 2026",
    status: "delivered",
    items: [
      {
        productId: "p-enrofloxacin",
        name: "Enrofloxacin 10% Oral Solution",
        image: "art:bottle:mint",
        brand: "PoultriMed",
        price: 1250,
        quantity: 2,
      },
      {
        productId: "p-probiotic-plus",
        name: "PoultriMed ProBiotic Plus",
        image: "art:sachet:sage",
        brand: "PoultriMed",
        price: 1150,
        quantity: 1,
      },
    ],
    subtotal: 3850,
    discount: 400,
    deliveryFee: 0,
    total: 3450,
    paymentMethod: "Credit / Debit Card",
    deliveryMethod: "Express Delivery",
    address: {
      fullName: "Imran Ali — Al-Falah Poultry Farm",
      line1: "Chak 44-GB, Satiana Road",
      city: "Faisalabad",
      province: "Punjab",
      postalCode: "38000",
      country: "Pakistan",
      phone: "+92 300 1234567",
    },
    estimatedDelivery: "6 Aug 2026",
    timeline: fullTimeline(5),
  },
  {
    id: "PH-10198",
    date: "22 Jul 2026",
    status: "delivered",
    items: [
      {
        productId: "p-glut-qac",
        name: "Glutaraldehyde + QAC Disinfectant",
        image: "art:spray:steel",
        brand: "Ceva",
        price: 3200,
        quantity: 1,
      },
      {
        productId: "p-thermo-hygro",
        name: "Digital Thermo-Hygrometer",
        image: "art:device:blush",
        brand: "PoultriMed",
        price: 2200,
        quantity: 1,
      },
    ],
    subtotal: 5400,
    discount: 600,
    deliveryFee: 0,
    total: 4800,
    paymentMethod: "Online Payment",
    deliveryMethod: "Standard Delivery",
    address: {
      fullName: "Imran Ali — Al-Falah Poultry Farm",
      line1: "Chak 44-GB, Satiana Road",
      city: "Faisalabad",
      province: "Punjab",
      postalCode: "38000",
      country: "Pakistan",
      phone: "+92 300 1234567",
    },
    estimatedDelivery: "24 Jul 2026",
    timeline: fullTimeline(5),
  },
];

export const buildTimeline = fullTimeline;
