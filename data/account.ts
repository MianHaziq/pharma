import type { Address, CustomerProfile } from "@/lib/types";

// Mock signed-in customer — a poultry farm owner. A real app would hydrate this
// from the session.

export const customerProfile: CustomerProfile = {
  firstName: "Imran",
  lastName: "Ali",
  email: "imran.ali@example.com",
  phone: "+92 300 1234567",
  memberSince: "March 2024",
  loyaltyPoints: 2480,
};

export const savedAddresses: Address[] = [
  {
    id: "addr-farm",
    label: "Farm",
    fullName: "Imran Ali — Al-Falah Poultry Farm",
    line1: "Chak 44-GB, Satiana Road",
    city: "Faisalabad",
    province: "Punjab",
    postalCode: "38000",
    country: "Pakistan",
    phone: "+92 300 1234567",
    isDefault: true,
  },
  {
    id: "addr-office",
    label: "Office",
    fullName: "Imran Ali",
    line1: "Poultry Traders Market, Jhang Road",
    city: "Faisalabad",
    province: "Punjab",
    postalCode: "38040",
    country: "Pakistan",
    phone: "+92 301 7654321",
    isDefault: false,
  },
];
