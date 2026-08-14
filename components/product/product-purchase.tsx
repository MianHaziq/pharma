"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Check, ShoppingCart, Zap } from "lucide-react";
import type { Product } from "@/lib/types";
import { useStore } from "@/lib/store";
import { QuantitySelector } from "./quantity-selector";
import { WishlistButton } from "./wishlist-button";
import { Button } from "@/components/ui/button";

export function ProductPurchase({ product }: { product: Product }) {
  const router = useRouter();
  const { addToCart } = useStore();
  const [qty, setQty] = useState(1);
  const [added, setAdded] = useState(false);
  const outOfStock = product.stock <= 0;

  return (
    <div className="space-y-4">
      <div className="flex flex-wrap items-center gap-3">
        <span className="text-sm font-medium text-foreground">Quantity</span>
        <QuantitySelector
          value={qty}
          onChange={setQty}
          min={1}
          max={Math.max(1, product.stock)}
        />
        {!outOfStock && product.stock <= 20 && (
          <span className="text-xs font-medium text-amber-600">
            Only {product.stock} left in stock
          </span>
        )}
      </div>

      <div className="flex flex-col gap-3 sm:flex-row">
        <Button
          type="button"
          size="lg"
          variant="outline"
          disabled={outOfStock}
          onClick={() => {
            addToCart(product.id, qty);
            setAdded(true);
            window.setTimeout(() => setAdded(false), 1400);
          }}
          className="flex-1 gap-2"
        >
          {added ? <Check size={18} /> : <ShoppingCart size={18} />}
          {added ? "Added to cart" : "Add to cart"}
        </Button>
        <Button
          type="button"
          size="lg"
          disabled={outOfStock}
          onClick={() => {
            addToCart(product.id, qty);
            router.push("/checkout");
          }}
          className="flex-1 gap-2"
        >
          <Zap size={18} />
          Buy now
        </Button>
        <WishlistButton productId={product.id} variant="full" className="h-11 sm:w-auto" />
      </div>

      {outOfStock && (
        <p className="text-sm font-medium text-sale">
          This item is currently out of stock. Add it to your wishlist to be
          notified when it&apos;s back.
        </p>
      )}
    </div>
  );
}
