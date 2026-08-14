import Link from "next/link";
import { MapPin, CreditCard, Truck, Package } from "lucide-react";
import type { Order } from "@/lib/types";
import { formatPrice } from "@/lib/format";
import { ProductImage } from "@/components/product/product-image";
import { OrderTimeline } from "./order-timeline";
import { OrderStatusBadge } from "./status-badge";

export function OrderDetail({ order }: { order: Order }) {
  const delivered = order.status === "delivered";

  return (
    <div>
      {/* Header card */}
      <div className="rounded-2xl border border-border bg-card p-5 sm:p-6">
        <div className="flex flex-wrap items-start justify-between gap-4">
          <div>
            <div className="flex items-center gap-3">
              <h2 className="tnum font-display text-xl font-semibold text-foreground">
                Order {order.id}
              </h2>
              <OrderStatusBadge status={order.status} />
            </div>
            <p className="mt-1 text-sm text-muted-foreground">
              Placed on {order.date} · {order.items.length}{" "}
              {order.items.length === 1 ? "item" : "items"}
            </p>
          </div>
          <div className="text-right">
            <p className="text-xs text-muted-foreground">
              {delivered ? "Delivered on" : "Estimated delivery"}
            </p>
            <p className="text-sm font-semibold text-foreground">
              {order.estimatedDelivery}
            </p>
          </div>
        </div>
      </div>

      <div className="mt-5 grid gap-5 lg:grid-cols-[1fr_360px]">
        {/* Tracking */}
        <div className="rounded-2xl border border-border bg-card p-5 sm:p-6">
          <h3 className="flex items-center gap-2 text-base font-semibold text-foreground">
            <Package size={18} className="text-brand" />
            Tracking
          </h3>
          <div className="mt-6">
            <OrderTimeline steps={order.timeline} />
          </div>
        </div>

        {/* Right column */}
        <div className="space-y-5">
          {/* Items */}
          <div className="rounded-2xl border border-border bg-card p-5 sm:p-6">
            <h3 className="text-base font-semibold text-foreground">Items</h3>
            <ul className="mt-4 divide-y divide-border">
              {order.items.map((item) => (
                <li key={item.productId} className="flex items-center gap-3 py-3 first:pt-0 last:pb-0">
                  <span className="relative h-12 w-12 shrink-0 overflow-hidden rounded-lg border border-border">
                    <ProductImage src={item.image} alt={item.name} showWatermark={false} sizes="48px" />
                  </span>
                  <div className="min-w-0 flex-1">
                    <p className="truncate text-sm font-medium text-foreground">{item.name}</p>
                    <p className="tnum text-xs text-muted-foreground">Qty {item.quantity}</p>
                  </div>
                  <span className="tnum text-sm font-semibold text-foreground">
                    {formatPrice(item.price * item.quantity)}
                  </span>
                </li>
              ))}
            </ul>
            <dl className="mt-4 space-y-2 border-t border-border pt-4 text-sm">
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
              <div className="flex justify-between border-t border-border pt-2 text-base font-semibold">
                <dt className="text-foreground">Total</dt>
                <dd className="tnum text-foreground">{formatPrice(order.total)}</dd>
              </div>
            </dl>
          </div>

          {/* Delivery details */}
          <div className="rounded-2xl border border-border bg-card p-5 sm:p-6">
            <h3 className="text-base font-semibold text-foreground">Delivery details</h3>
            <div className="mt-4 space-y-4 text-sm">
              <div className="flex gap-3">
                <MapPin size={16} className="mt-0.5 shrink-0 text-brand" />
                <p className="text-foreground/80">
                  <span className="font-medium text-foreground">{order.address.fullName}</span>
                  <br />
                  {order.address.line1}
                  <br />
                  {order.address.city}, {order.address.province} {order.address.postalCode}
                  <br />
                  {order.address.phone}
                </p>
              </div>
              <div className="flex gap-3">
                <Truck size={16} className="mt-0.5 shrink-0 text-brand" />
                <p className="text-foreground/80">{order.deliveryMethod}</p>
              </div>
              <div className="flex gap-3">
                <CreditCard size={16} className="mt-0.5 shrink-0 text-brand" />
                <p className="text-foreground/80">{order.paymentMethod}</p>
              </div>
            </div>
            <Link
              href="/contact"
              className="mt-5 inline-block text-sm font-semibold text-brand hover:text-brand-deep"
            >
              Need help with this order?
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
