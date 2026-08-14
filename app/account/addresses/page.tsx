import type { Metadata } from "next";
import { AddressesManager } from "@/components/account/addresses-manager";

export const metadata: Metadata = {
  title: "Addresses",
  description: "Manage your saved delivery addresses.",
};

export default function AddressesPage() {
  return <AddressesManager />;
}
