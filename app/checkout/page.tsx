import type { Metadata } from "next";
import { CheckoutView } from "@/components/checkout/checkout-view";

export const metadata: Metadata = {
  title: "Checkout",
  description: "Securely complete your VitalCare Pharmacy order.",
};

export default function CheckoutPage() {
  return <CheckoutView />;
}
