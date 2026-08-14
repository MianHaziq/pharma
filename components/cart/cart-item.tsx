"use client";

import Link from "next/link";
import { Trash2, Heart } from "lucide-react";
import type { ResolvedCartLine } from "@/lib/store";
import { useStore } from "@/lib/store";
import { getBrandName } from "@/lib/catalog";
import { formatPrice } from "@/lib/format";
import { ProductImage } from "@/components/product/product-image";
import { QuantitySelector } from "@/components/product/quantity-selector";
import { PrescriptionBadge } from "@/components/product/product-badges";

export function CartItem({ line }: { line: ResolvedCartLine }) {
  const { updateQuantity, removeFromCart, toggleWishlist, isInWishlist } = useStore();
  const { product } = line;
  const brand = getBrandName(product.brandId);
  const saved = isInWishlist(product.id);

  return (
    <div className="flex gap-4 py-5">
      <Link
        href={`/product/${product.slug}`}
        className="relative h-24 w-24 shrink-0 overflow-hidden rounded-xl border border-border bg-card sm:h-28 sm:w-28"
      >
        <ProductImage src={product.images[0]} alt={product.name} showWatermark={false} sizes="112px" />
      </Link>

      <div className="flex min-w-0 flex-1 flex-col">
        <div className="flex items-start justify-between gap-3">
          <div className="min-w-0">
            <span className="text-[11px] font-semibold uppercase tracking-wide text-muted-foreground">
              {brand}
            </span>
            <Link
              href={`/product/${product.slug}`}
              className="block truncate text-sm font-semibold text-foreground hover:text-brand sm:text-base"
            >
              {product.name}
            </Link>
            <div className="mt-1 flex flex-wrap items-center gap-2">
              {product.packSize && (
                <span className="text-xs text-muted-foreground">{product.packSize}</span>
              )}
              {product.requiresPrescription && <PrescriptionBadge compact />}
            </div>
          </div>
          <div className="text-right">
            <p className="tnum text-sm font-semibold text-foreground sm:text-base">
              {formatPrice(line.lineTotal)}
            </p>
            {product.originalPrice && product.originalPrice > product.price && (
              <p className="tnum text-xs text-muted-foreground line-through">
                {formatPrice(line.lineOriginalTotal)}
              </p>
            )}
          </div>
        </div>

        <div className="mt-auto flex items-center justify-between gap-2 pt-3">
          <QuantitySelector
            value={line.quantity}
            onChange={(q) => updateQuantity(product.id, q)}
            min={1}
            max={Math.max(1, product.stock)}
            size="sm"
          />
          <div className="flex items-center gap-1">
            <button
              type="button"
              onClick={() => toggleWishlist(product.id)}
              className="inline-flex items-center gap-1.5 rounded-lg px-2.5 py-1.5 text-xs font-medium text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
            >
              <Heart size={15} className={saved ? "fill-sale text-sale" : ""} />
              <span className="hidden sm:inline">Save</span>
            </button>
            <button
              type="button"
              onClick={() => removeFromCart(product.id)}
              className="inline-flex items-center gap-1.5 rounded-lg px-2.5 py-1.5 text-xs font-medium text-muted-foreground transition-colors hover:bg-sale/10 hover:text-sale"
            >
              <Trash2 size={15} />
              <span className="hidden sm:inline">Remove</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
