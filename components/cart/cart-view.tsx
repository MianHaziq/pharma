"use client";

import Link from "next/link";
import { ShoppingBag, ArrowLeft, Trash2, ShieldCheck, Lock } from "lucide-react";
import { useStore } from "@/lib/store";
import { getBestSellers } from "@/lib/catalog";
import { CartItem } from "./cart-item";
import { OrderSummary } from "./order-summary";
import { EmptyState } from "@/components/empty-state";
import { ProductGrid } from "@/components/product/product-grid";
import { SectionHeader } from "@/components/section-header";
import { Button } from "@/components/ui/button";
import { Skeleton } from "@/components/ui/skeleton";
import { paymentMethods } from "@/data/site";

export function CartView() {
  const {
    cartLines,
    cartCount,
    subtotal,
    discount,
    deliveryFee,
    total,
    clearCart,
    hydrated,
  } = useStore();

  if (!hydrated) {
    return (
      <div className="container-page py-8">
        <Skeleton className="h-9 w-48" />
        <div className="mt-8 grid gap-8 lg:grid-cols-[1fr_360px]">
          <div className="space-y-4">
            {Array.from({ length: 3 }).map((_, i) => (
              <Skeleton key={i} className="h-28 w-full rounded-xl" />
            ))}
          </div>
          <Skeleton className="h-72 w-full rounded-2xl" />
        </div>
      </div>
    );
  }

  if (cartLines.length === 0) {
    return (
      <div className="container-page py-10">
        <EmptyState
          icon={ShoppingBag}
          title="Your cart is empty"
          description="Looks like you haven't added anything yet. Explore our products and find what you need."
          actionLabel="Start shopping"
          actionHref="/shop"
          secondaryLabel="View wishlist"
          secondaryHref="/wishlist"
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
            Shopping cart
          </h1>
          <p className="tnum mt-1 text-sm text-muted-foreground">
            {cartCount} {cartCount === 1 ? "item" : "items"} in your cart
          </p>
        </div>
        <button
          type="button"
          onClick={clearCart}
          className="hidden items-center gap-1.5 text-sm font-medium text-muted-foreground transition-colors hover:text-sale sm:inline-flex"
        >
          <Trash2 size={15} />
          Clear cart
        </button>
      </div>

      <div className="mt-8 grid gap-8 lg:grid-cols-[1fr_360px]">
        {/* Items */}
        <div>
          <div className="divide-y divide-border rounded-2xl border border-border bg-card px-5">
            {cartLines.map((line) => (
              <CartItem key={line.productId} line={line} />
            ))}
          </div>

          <div className="mt-5 flex items-center justify-between">
            <Button asChild variant="ghost" className="gap-2 text-brand hover:text-brand-deep">
              <Link href="/shop">
                <ArrowLeft size={16} />
                Continue shopping
              </Link>
            </Button>
            <button
              type="button"
              onClick={clearCart}
              className="inline-flex items-center gap-1.5 text-sm font-medium text-muted-foreground transition-colors hover:text-sale sm:hidden"
            >
              <Trash2 size={15} />
              Clear
            </button>
          </div>
        </div>

        {/* Summary */}
        <div className="lg:sticky lg:top-28 lg:self-start">
          <OrderSummary
            subtotal={subtotal}
            discount={discount}
            deliveryFee={deliveryFee}
            total={total}
            itemCount={cartCount}
          >
            <Button asChild size="lg" className="w-full">
              <Link href="/checkout">Proceed to checkout</Link>
            </Button>
            <div className="mt-4 flex items-center justify-center gap-2 text-xs text-muted-foreground">
              <Lock size={13} />
              Secure, encrypted checkout
            </div>
          </OrderSummary>

          <div className="mt-4 flex flex-wrap items-center justify-center gap-2">
            {paymentMethods.map((m) => (
              <span
                key={m}
                className="rounded-md border border-border bg-card px-2.5 py-1 text-[10px] font-semibold uppercase tracking-wide text-muted-foreground"
              >
                {m}
              </span>
            ))}
          </div>
          <p className="mt-4 flex items-center justify-center gap-1.5 text-xs text-muted-foreground">
            <ShieldCheck size={14} className="text-brand" />
            100% genuine products guaranteed
          </p>
        </div>
      </div>
    </div>
  );
}
