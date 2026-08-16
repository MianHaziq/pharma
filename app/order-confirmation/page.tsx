import type { Metadata } from "next";
import { OrderConfirmationView } from "@/components/checkout/order-confirmation-view";

export const metadata: Metadata = {
  title: "Order confirmed",
  description: "Your PoultriMed order has been placed successfully.",
};

export default function OrderConfirmationPage() {
  return <OrderConfirmationView />;
}
