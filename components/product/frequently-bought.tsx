"use client";

import Link from "next/link";
import { Plus, ShoppingCart } from "lucide-react";
import type { Product } from "@/lib/types";
import { useStore } from "@/lib/store";
import { formatPrice } from "@/lib/format";
import { ProductImage } from "./product-image";
import { Button } from "@/components/ui/button";

export function FrequentlyBought({
  items,
}: {
  items: Product[];
}) {
  const { addToCart } = useStore();
  if (items.length < 2) return null;

  const total = items.reduce((sum, p) => sum + p.price, 0);

  return (
    <div className="rounded-2xl border border-border bg-card p-5 sm:p-6">
      <div className="flex flex-col gap-5 lg:flex-row lg:items-center lg:justify-between">
        <div className="flex flex-wrap items-center gap-3">
          {items.map((p, i) => (
            <div key={p.id} className="flex items-center gap-3">
              <Link
                href={`/product/${p.slug}`}
                className="relative h-20 w-20 shrink-0 overflow-hidden rounded-xl border border-border"
              >
                <ProductImage src={p.images[0]} alt={p.name} showWatermark={false} sizes="80px" />
              </Link>
              {i < items.length - 1 && (
                <Plus size={18} className="text-muted-foreground" />
              )}
            </div>
          ))}
        </div>

        <div className="flex items-center gap-4">
          <div>
            <p className="text-xs text-muted-foreground">Total price</p>
            <p className="tnum text-xl font-semibold text-foreground">
              {formatPrice(total)}
            </p>
          </div>
          <Button
            type="button"
            onClick={() => items.forEach((p) => addToCart(p.id, 1))}
            className="gap-2"
          >
            <ShoppingCart size={17} />
            Add all to cart
          </Button>
        </div>
      </div>
    </div>
  );
}
