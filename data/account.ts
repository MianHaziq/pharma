import type { Address, CustomerProfile } from "@/lib/types";

// Mock signed-in customer. A real app would hydrate this from the session.

export const customerProfile: CustomerProfile = {
  firstName: "Ayesha",
  lastName: "Khan",
  email: "ayesha.khan@example.com",
  phone: "+92 300 1234567",
  memberSince: "March 2024",
  loyaltyPoints: 1840,
};

export const savedAddresses: Address[] = [
  {
    id: "addr-home",
    label: "Home",
    fullName: "Ayesha Khan",
    line1: "24-B, Gulberg III, Main Boulevard",
    city: "Lahore",
    province: "Punjab",
    postalCode: "54660",
    country: "Pakistan",
    phone: "+92 300 1234567",
    isDefault: true,
  },
  {
    id: "addr-office",
    label: "Office",
    fullName: "Ayesha Khan",
    line1: "Plot 12, Arfa Software Technology Park, Ferozepur Road",
    city: "Lahore",
    province: "Punjab",
    postalCode: "54600",
    country: "Pakistan",
    phone: "+92 301 7654321",
    isDefault: false,
  },
];
