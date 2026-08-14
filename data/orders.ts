import type { Order, TrackingStep } from "@/lib/types";

const fullTimeline = (
  reached: number,
): TrackingStep[] => {
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
      description: "Our pharmacy team is preparing and checking your items.",
      date: "12 Aug 2026, 11:05 AM",
    },
    {
      status: "shipped",
      label: "Shipped",
      description: "Your parcel is on its way to the local delivery hub.",
      date: "12 Aug 2026, 3:40 PM",
    },
    {
      status: "out_for_delivery",
      label: "Out for delivery",
      description: "Your rider is on the way with your order.",
      date: "13 Aug 2026, 10:15 AM",
    },
    {
      status: "delivered",
      label: "Delivered",
      description: "Your order has been delivered. Take care!",
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
        productId: "p-centrum-adults",
        name: "Centrum Multivitamins for Adults",
        image: "art:pillbottle:sage",
        brand: "Centrum",
        price: 2450,
        quantity: 1,
      },
      {
        productId: "p-vitamin-d3",
        name: "Vitamin D3 1000 IU",
        image: "art:pillbottle:amber",
        brand: "Abbott",
        price: 890,
        quantity: 2,
      },
      {
        productId: "p-ors-sachets",
        name: "ORS Rehydration Sachets",
        image: "art:sachet:amber",
        brand: "Abbott",
        price: 240,
        quantity: 1,
      },
    ],
    subtotal: 4470,
    discount: 450,
    deliveryFee: 0,
    total: 4020,
    paymentMethod: "Cash on Delivery",
    deliveryMethod: "Standard Delivery",
    address: {
      fullName: "Ayesha Khan",
      line1: "24-B, Gulberg III, Main Boulevard",
      city: "Lahore",
      province: "Punjab",
      postalCode: "54660",
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
        productId: "p-cetaphil-cleanser",
        name: "Cetaphil Gentle Skin Cleanser",
        image: "art:bottle:peach",
        brand: "Cetaphil",
        price: 1290,
        quantity: 1,
      },
      {
        productId: "p-sensodyne",
        name: "Sensodyne Repair & Protect",
        image: "art:tube:mint",
        brand: "Sensodyne",
        price: 480,
        quantity: 2,
      },
    ],
    subtotal: 2250,
    discount: 160,
    deliveryFee: 0,
    total: 2090,
    paymentMethod: "Credit / Debit Card",
    deliveryMethod: "Express Delivery",
    address: {
      fullName: "Ayesha Khan",
      line1: "24-B, Gulberg III, Main Boulevard",
      city: "Lahore",
      province: "Punjab",
      postalCode: "54660",
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
        productId: "p-omron-bp",
        name: "Omron Digital Blood Pressure Monitor",
        image: "art:device:steel",
        brand: "Omron",
        price: 8900,
        quantity: 1,
      },
    ],
    subtotal: 8900,
    discount: 1600,
    deliveryFee: 0,
    total: 7300,
    paymentMethod: "Online Payment",
    deliveryMethod: "Standard Delivery",
    address: {
      fullName: "Ayesha Khan",
      line1: "24-B, Gulberg III, Main Boulevard",
      city: "Lahore",
      province: "Punjab",
      postalCode: "54660",
      country: "Pakistan",
      phone: "+92 300 1234567",
    },
    estimatedDelivery: "24 Jul 2026",
    timeline: fullTimeline(5),
  },
];

export const buildTimeline = fullTimeline;
