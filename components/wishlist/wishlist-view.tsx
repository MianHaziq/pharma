"use client";

import Link from "next/link";
import { Heart, X, ShoppingCart } from "lucide-react";
import { useStore } from "@/lib/store";
import { getBrandName } from "@/lib/catalog";
import { discountPercent } from "@/lib/format";
import { ProductImage } from "@/components/product/product-image";
import { Price } from "@/components/product/price";
import { Rating } from "@/components/product/rating";
import { DiscountBadge, PrescriptionBadge } from "@/components/product/product-badges";
import { EmptyState } from "@/components/empty-state";
import { ProductGrid } from "@/components/product/product-grid";
import { SectionHeader } from "@/components/section-header";
import { Button } from "@/components/ui/button";
import { Skeleton } from "@/components/ui/skeleton";
import { getBestSellers } from "@/lib/catalog";

export function WishlistView() {
  const { wishlistProducts, wishlistCount, moveToCart, removeFromWishlist, hydrated } =
    useStore();

  if (!hydrated) {
    return (
      <div className="container-page py-8">
        <Skeleton className="h-9 w-48" />
        <div className="mt-8 grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4">
          {Array.from({ length: 4 }).map((_, i) => (
            <Skeleton key={i} className="aspect-[3/4] w-full rounded-xl" />
          ))}
        </div>
      </div>
    );
  }

  if (wishlistCount === 0) {
    return (
      <div className="container-page py-10">
        <EmptyState
          icon={Heart}
          title="Your wishlist is empty"
          description="Save the products you love by tapping the heart icon. They'll show up here."
          actionLabel="Explore products"
          actionHref="/shop"
        />
        <div className="mt-14">
          <SectionHeader title="Popular right now" linkHref="/shop?filter=bestsellers" />
          <ProductGrid products={getBestSellers(4)} className="mt-6" />
        </div>
      </div>
    );
  }

  return (
    <div className="container-page py-8">
      <div className="flex items-end justify-between gap-4">
        <div>
          <h1 className="font-display text-3xl font-semibold tracking-tight text-foreground">
            My wishlist
          </h1>
          <p className="tnum mt-1 text-sm text-muted-foreground">
            {wishlistCount} {wishlistCount === 1 ? "item" : "items"} saved
          </p>
        </div>
        <Button
          onClick={() => wishlistProducts.forEach((p) => moveToCart(p.id))}
          className="gap-2"
        >
          <ShoppingCart size={17} />
          <span className="hidden sm:inline">Move all to cart</span>
          <span className="sm:hidden">Add all</span>
        </Button>
      </div>

      <div className="mt-8 grid grid-cols-2 gap-4 sm:gap-5 md:grid-cols-3 lg:grid-cols-4">
        {wishlistProducts.map((product) => {
          const percent = discountPercent(product);
          return (
            <div
              key={product.id}
              className="group relative flex flex-col overflow-hidden rounded-xl border border-border bg-card shadow-[var(--shadow-card)] transition-all hover:border-brand/30 hover:shadow-[var(--shadow-elevated)]"
            >
              <button
                type="button"
                onClick={() => removeFromWishlist(product.id)}
                aria-label="Remove from wishlist"
                className="absolute right-2.5 top-2.5 z-10 inline-flex h-8 w-8 items-center justify-center rounded-full border border-border bg-card/90 text-muted-foreground backdrop-blur transition-colors hover:text-sale"
              >
                <X size={15} />
              </button>

              <Link href={`/product/${product.slug}`} className="relative block aspect-square overflow-hidden">
                <ProductImage
                  src={product.images[0]}
                  alt={product.name}
                  sizes="(min-width: 1024px) 25vw, 50vw"
                />
                <DiscountBadge percent={percent} className="absolute left-2.5 top-2.5" />
              </Link>

              <div className="flex flex-1 flex-col gap-1.5 p-3.5">
                <div className="flex items-center justify-between gap-2">
                  <span className="text-[11px] font-semibold uppercase tracking-wide text-muted-foreground">
                    {getBrandName(product.brandId)}
                  </span>
                  {product.requiresPrescription && <PrescriptionBadge compact />}
                </div>
                <Link href={`/product/${product.slug}`}>
                  <h3 className="line-clamp-2 text-sm font-semibold leading-snug text-foreground transition-colors group-hover:text-brand">
                    {product.name}
                  </h3>
                </Link>
                <Rating value={product.rating} reviewCount={product.reviewCount} />
                <Price price={product.price} originalPrice={product.originalPrice} className="mt-1" />
                <Button
                  onClick={() => moveToCart(product.id)}
                  size="sm"
                  className="mt-2 w-full gap-2"
                  disabled={product.stock <= 0}
                >
                  <ShoppingCart size={15} />
                  Move to cart
                </Button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
