"use client";

import { useState } from "react";
import { ProductArt } from "@/components/product/product-art";
import { cn } from "@/lib/utils";

export function ProductVisual({
  images,
  code,
}: {
  images: string[];
  code: string;
}) {
  const imgs = images.length ? images : ["art:box:mint"];
  const [active, setActive] = useState(0);

  return (
    <div>
      <div className="relative aspect-square overflow-hidden rounded-3xl border border-line bg-card">
        <ProductArt src={imgs[active]} />
        <span className="absolute left-5 top-5 rounded-md bg-card/80 px-2.5 py-1 font-mono text-[0.72rem] font-medium tracking-wide text-emerald-700 ring-1 ring-line backdrop-blur-sm">
          {code}
        </span>
      </div>
      {imgs.length > 1 && (
        <div className="mt-4 flex gap-3">
          {imgs.map((src, i) => (
            <button
              key={i}
              type="button"
              onClick={() => setActive(i)}
              aria-label={`View image ${i + 1}`}
              className={cn(
                "relative h-20 w-20 overflow-hidden rounded-xl border bg-card transition-all",
                i === active
                  ? "border-emerald ring-2 ring-emerald/20"
                  : "border-line hover:border-emerald/40",
              )}
            >
              <ProductArt src={src} showWatermark={false} />
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
