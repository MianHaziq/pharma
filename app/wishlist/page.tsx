import type { Metadata } from "next";
import { WishlistView } from "@/components/wishlist/wishlist-view";

export const metadata: Metadata = {
  title: "My wishlist",
  description: "Products you've saved for later.",
};

export default function WishlistPage() {
  return <WishlistView />;
}
