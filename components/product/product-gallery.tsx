"use client";

import { useState } from "react";
import { cn } from "@/lib/utils";
import { ProductImage } from "./product-image";
import { DiscountBadge } from "./product-badges";

export function ProductGallery({
  images,
  alt,
  discountPercent = 0,
}: {
  images: string[];
  alt: string;
  discountPercent?: number;
}) {
  const [active, setActive] = useState(0);
  const gallery = images.length > 0 ? images : ["art:box:mint"];

  return (
    <div className="flex flex-col-reverse gap-3 sm:flex-row">
      {/* Thumbnails */}
      {gallery.length > 1 && (
        <div className="flex gap-3 sm:flex-col">
          {gallery.map((src, i) => (
            <button
              key={i}
              type="button"
              onClick={() => setActive(i)}
              aria-label={`View image ${i + 1}`}
              aria-current={active === i}
              className={cn(
                "relative aspect-square w-16 shrink-0 overflow-hidden rounded-lg border-2 bg-card transition-colors sm:w-20",
                active === i
                  ? "border-brand"
                  : "border-border hover:border-brand/40",
              )}
            >
              <ProductImage src={src} alt="" showWatermark={false} sizes="80px" />
            </button>
          ))}
        </div>
      )}

      {/* Main image */}
      <div className="relative aspect-square flex-1 overflow-hidden rounded-2xl border border-border bg-card">
        <ProductImage src={gallery[active]} alt={alt} priority sizes="(min-width: 1024px) 40vw, 90vw" />
        {discountPercent > 0 && (
          <DiscountBadge percent={discountPercent} className="absolute left-4 top-4 text-sm" />
        )}
      </div>
    </div>
  );
}
