import Link from "next/link";
import { cn } from "@/lib/utils";
import type { Product } from "@/lib/types";
import { getBrandName } from "@/lib/catalog";
import { discountPercent } from "@/lib/format";
import { ProductImage } from "./product-image";
import { Rating } from "./rating";
import { Price } from "./price";
import { WishlistButton } from "./wishlist-button";
import { AddToCartButton } from "./add-to-cart-button";
import {
  DiscountBadge,
  PrescriptionBadge,
  TagPill,
} from "./product-badges";

export function ProductCard({
  product,
  className,
  priority,
}: {
  product: Product;
  className?: string;
  priority?: boolean;
}) {
  const brand = getBrandName(product.brandId);
  const percent = discountPercent(product);
  const href = `/product/${product.slug}`;
  const isNew = product.tags.includes("new");
  const isBestseller = product.tags.includes("bestseller");
  const outOfStock = product.stock <= 0;

  return (
    <div
      className={cn(
        "group relative flex h-full flex-col overflow-hidden rounded-xl border border-border bg-card shadow-[var(--shadow-card)] transition-all duration-200 hover:-translate-y-0.5 hover:border-brand/30 hover:shadow-[var(--shadow-elevated)]",
        className,
      )}
    >
      {/* Media */}
      <Link
        href={href}
        className="relative block aspect-square overflow-hidden focus-visible:outline-none"
        aria-label={product.name}
      >
        <div className="h-full w-full transition-transform duration-300 group-hover:scale-[1.03]">
          <ProductImage
            src={product.images[0]}
            alt={product.name}
            sizes="(min-width: 1280px) 20vw, (min-width: 768px) 33vw, 50vw"
            priority={priority}
          />
        </div>

        {/* Top-left badges */}
        <div className="absolute left-2.5 top-2.5 flex flex-col items-start gap-1.5">
          <DiscountBadge percent={percent} />
          {isNew && <TagPill label="New" className="bg-brand text-primary-foreground" />}
          {!isNew && isBestseller && <TagPill label="Bestseller" />}
        </div>

        {outOfStock && (
          <div className="absolute inset-0 flex items-center justify-center bg-background/55">
            <span className="rounded-full bg-foreground px-3 py-1 text-xs font-semibold text-background">
              Out of stock
            </span>
          </div>
        )}
      </Link>

      {/* Wishlist */}
      <div className="absolute right-2.5 top-2.5">
        <WishlistButton productId={product.id} />
      </div>

      {/* Body */}
      <div className="flex flex-1 flex-col gap-2 p-3.5">
        <div className="flex items-center justify-between gap-2">
          <span className="text-[11px] font-semibold uppercase tracking-wide text-muted-foreground">
            {brand}
          </span>
          {product.requiresPrescription && <PrescriptionBadge compact />}
        </div>

        <Link href={href} className="focus-visible:outline-none">
          <h3 className="line-clamp-2 text-sm font-semibold leading-snug text-foreground transition-colors group-hover:text-brand">
            {product.name}
          </h3>
        </Link>

        <p className="line-clamp-2 text-xs leading-relaxed text-muted-foreground">
          {product.shortDescription}
        </p>

        <Rating value={product.rating} reviewCount={product.reviewCount} className="mt-0.5" />

        <div className="mt-auto flex items-end justify-between gap-2 pt-2">
          <Price price={product.price} originalPrice={product.originalPrice} />
        </div>

        <AddToCartButton
          productId={product.id}
          disabled={outOfStock}
          size="sm"
          fullWidth
          className="mt-1"
          label={outOfStock ? "Notify me" : "Add to cart"}
        />
      </div>
    </div>
  );
}
