import Link from "next/link";
import { ArrowRight } from "lucide-react";
import type { Banner, Product } from "@/lib/types";
import { ProductImage } from "@/components/product/product-image";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export function PromoBanner({
  banner,
  products = [],
  variant = "brand",
}: {
  banner: Banner;
  products?: Product[];
  variant?: "brand" | "tint";
}) {
  const isBrand = variant === "brand";

  return (
    <section
      className={cn(
        "relative overflow-hidden rounded-2xl",
        isBrand ? "bg-brand-deep text-primary-foreground" : "bg-grid-mint text-foreground",
      )}
    >
      <div className="grid items-center gap-6 p-7 sm:p-10 lg:grid-cols-2 lg:gap-4">
        <div className="max-w-md">
          {banner.eyebrow && (
            <span
              className={cn(
                "inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.08em]",
                isBrand ? "text-primary-foreground/80" : "text-brand",
              )}
            >
              <span aria-hidden>+</span>
              {banner.eyebrow}
            </span>
          )}
          <h2 className="mt-3 font-display text-2xl font-semibold leading-tight tracking-tight sm:text-3xl lg:text-4xl">
            {banner.title}
          </h2>
          <p
            className={cn(
              "mt-3 text-sm leading-relaxed sm:text-base",
              isBrand ? "text-primary-foreground/85" : "text-muted-foreground",
            )}
          >
            {banner.subtitle}
          </p>
          <Button
            asChild
            size="lg"
            variant={isBrand ? "secondary" : "default"}
            className="mt-6 gap-2"
          >
            <Link href={banner.ctaHref}>
              {banner.ctaLabel}
              <ArrowRight size={18} />
            </Link>
          </Button>
        </div>

        {products.length > 0 && (
          <div className="grid grid-cols-3 gap-3 sm:gap-4">
            {products.slice(0, 3).map((p, i) => (
              <Link
                key={p.id}
                href={`/product/${p.slug}`}
                className={cn(
                  "group overflow-hidden rounded-xl border bg-card shadow-lg transition-transform hover:-translate-y-1",
                  isBrand ? "border-white/10" : "border-border",
                  i === 1 && "translate-y-4",
                )}
              >
                <div className="relative aspect-square">
                  <ProductImage src={p.images[0]} alt={p.name} showWatermark={false} sizes="160px" />
                </div>
              </Link>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
