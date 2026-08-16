import type { Metadata } from "next";
import { CheckoutView } from "@/components/checkout/checkout-view";

export const metadata: Metadata = {
  title: "Checkout",
  description: "Securely complete your PoultriMed order.",
};

export default function CheckoutPage() {
  return <CheckoutView />;
}
