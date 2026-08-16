"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { CheckCircle2, Truck, MapPin, CreditCard, Package } from "lucide-react";
import { formatPrice } from "@/lib/format";
import { ProductImage } from "@/components/product/product-image";
import { EmptyState } from "@/components/empty-state";
import { Button } from "@/components/ui/button";
import { Skeleton } from "@/components/ui/skeleton";

interface StoredOrder {
  id: string;
  date: string;
  items: { productId: string; name: string; image: string; brand: string; price: number; quantity: number }[];
  subtotal: number;
  discount: number;
  deliveryFee: number;
  total: number;
  paymentMethod: string;
  deliveryMethod: string;
  customer: { firstName: string; lastName: string; email: string; phone: string };
  address: { line1: string; city: string; province: string; postalCode: string; country: string };
}

export function OrderConfirmationView() {
  const [order, setOrder] = useState<StoredOrder | null>(null);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    /* eslint-disable react-hooks/set-state-in-effect */
    try {
      const raw = window.localStorage.getItem("poultrimed.lastOrder");
      if (raw) setOrder(JSON.parse(raw) as StoredOrder);
    } catch {
      // ignore
    }
    setLoaded(true);
    /* eslint-enable react-hooks/set-state-in-effect */
  }, []);

  if (!loaded) {
    return (
      <div className="container-page py-10">
        <Skeleton className="mx-auto h-64 max-w-2xl rounded-2xl" />
      </div>
    );
  }

  if (!order) {
    return (
      <div className="container-page py-10">
        <EmptyState
          icon={Package}
          title="No recent order found"
          description="We couldn't find a recent order to show. Browse our products to place a new one."
          actionLabel="Start shopping"
          actionHref="/shop"
          secondaryLabel="View my orders"
          secondaryHref="/account/orders"
        />
      </div>
    );
  }

  const eta = "in 3–5 business days";

  return (
    <div className="container-page py-10">
      <div className="mx-auto max-w-2xl">
        {/* Success header */}
        <div className="flex flex-col items-center text-center">
          <span className="grid h-16 w-16 place-items-center rounded-full bg-brand-tint text-brand">
            <CheckCircle2 size={34} />
          </span>
          <h1 className="mt-5 font-display text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
            Thank you for your order!
          </h1>
          <p className="mt-2 text-sm text-muted-foreground sm:text-base">
            Hi {order.customer.firstName}, your order has been placed successfully.
            A confirmation has been sent to {order.customer.email}.
          </p>
          <div className="tnum mt-5 flex flex-wrap items-center justify-center gap-3 text-sm">
            <span className="rounded-full border border-border bg-card px-4 py-1.5 font-semibold text-foreground">
              Order {order.id}
            </span>
            <span className="rounded-full bg-brand-tint px-4 py-1.5 font-medium text-brand-deep">
              Estimated delivery {eta}
            </span>
          </div>
        </div>

        {/* Order details */}
        <div className="mt-8 rounded-2xl border border-border bg-card p-5 sm:p-6">
          <h2 className="text-base font-semibold text-foreground">Order details</h2>
          <ul className="mt-4 divide-y divide-border">
            {order.items.map((item) => (
              <li key={item.productId} className="flex items-center gap-3 py-3 first:pt-0 last:pb-0">
                <span className="relative h-14 w-14 shrink-0 overflow-hidden rounded-lg border border-border">
                  <ProductImage src={item.image} alt={item.name} showWatermark={false} sizes="56px" />
                </span>
                <div className="min-w-0 flex-1">
                  <p className="truncate text-sm font-medium text-foreground">{item.name}</p>
                  <p className="tnum text-xs text-muted-foreground">
                    {item.brand} · Qty {item.quantity}
                  </p>
                </div>
                <span className="tnum text-sm font-semibold text-foreground">
                  {formatPrice(item.price * item.quantity)}
                </span>
              </li>
            ))}
          </ul>

          <dl className="mt-4 space-y-2.5 border-t border-border pt-4 text-sm">
            <div className="flex justify-between">
              <dt className="text-muted-foreground">Subtotal</dt>
              <dd className="tnum text-foreground">{formatPrice(order.subtotal)}</dd>
            </div>
            {order.discount > 0 && (
              <div className="flex justify-between">
                <dt className="text-muted-foreground">Discount</dt>
                <dd className="tnum text-sale">−{formatPrice(order.discount)}</dd>
              </div>
            )}
            <div className="flex justify-between">
              <dt className="text-muted-foreground">Delivery</dt>
              <dd className="tnum text-foreground">
                {order.deliveryFee === 0 ? "Free" : formatPrice(order.deliveryFee)}
              </dd>
            </div>
            <div className="flex justify-between border-t border-border pt-2.5 text-base font-semibold">
              <dt className="text-foreground">Total paid</dt>
              <dd className="tnum text-foreground">{formatPrice(order.total)}</dd>
            </div>
          </dl>
        </div>

        {/* Info grid */}
        <div className="mt-4 grid gap-4 sm:grid-cols-3">
          <InfoTile icon={MapPin} title="Delivery address">
            {order.customer.firstName} {order.customer.lastName}
            <br />
            {order.address.line1}, {order.address.city}
            <br />
            {order.address.province} {order.address.postalCode}
          </InfoTile>
          <InfoTile icon={Truck} title="Delivery method">
            {order.deliveryMethod}
            <br />
            {eta}
          </InfoTile>
          <InfoTile icon={CreditCard} title="Payment">
            {order.paymentMethod}
          </InfoTile>
        </div>

        {/* Actions */}
        <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:justify-center">
          <Button asChild size="lg">
            <Link href={`/track?order=${order.id}`}>Track your order</Link>
          </Button>
          <Button asChild size="lg" variant="outline">
            <Link href="/shop">Continue shopping</Link>
          </Button>
        </div>
      </div>
    </div>
  );
}

function InfoTile({
  icon: Icon,
  title,
  children,
}: {
  icon: typeof MapPin;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div className="rounded-xl border border-border bg-card p-4">
      <p className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wide text-muted-foreground">
        <Icon size={14} className="text-brand" />
        {title}
      </p>
      <p className="mt-2 text-sm leading-relaxed text-foreground">{children}</p>
    </div>
  );
}
