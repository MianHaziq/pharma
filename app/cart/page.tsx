import type { Metadata } from "next";
import { CartView } from "@/components/cart/cart-view";

export const metadata: Metadata = {
  title: "Shopping cart",
  description: "Review the items in your cart and proceed to a secure checkout.",
};

export default function CartPage() {
  return <CartView />;
}
