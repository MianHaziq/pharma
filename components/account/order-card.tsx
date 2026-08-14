import Link from "next/link";
import { ChevronRight } from "lucide-react";
import type { Order } from "@/lib/types";
import { formatPrice } from "@/lib/format";
import { ProductImage } from "@/components/product/product-image";
import { OrderStatusBadge } from "@/components/order/status-badge";

export function OrderCard({ order }: { order: Order }) {
  return (
    <Link
      href={`/account/orders/${order.id}`}
      className="group block rounded-2xl border border-border bg-card p-5 transition-colors hover:border-brand/30"
    >
      <div className="flex flex-wrap items-center justify-between gap-3">
        <div className="flex items-center gap-3">
          <span className="tnum text-sm font-semibold text-foreground">
            {order.id}
          </span>
          <OrderStatusBadge status={order.status} />
        </div>
        <span className="text-xs text-muted-foreground">{order.date}</span>
      </div>

      <div className="mt-4 flex items-center justify-between gap-4">
        <div className="flex -space-x-3">
          {order.items.slice(0, 4).map((item, i) => (
            <span
              key={item.productId}
              className="relative h-11 w-11 overflow-hidden rounded-lg border-2 border-card bg-muted"
              style={{ zIndex: 4 - i }}
            >
              <ProductImage src={item.image} alt={item.name} showWatermark={false} sizes="44px" />
            </span>
          ))}
          {order.items.length > 4 && (
            <span className="tnum grid h-11 w-11 place-items-center rounded-lg border-2 border-card bg-muted text-xs font-semibold text-muted-foreground">
              +{order.items.length - 4}
            </span>
          )}
        </div>

        <div className="flex items-center gap-3 text-right">
          <div>
            <p className="tnum text-sm font-semibold text-foreground">
              {formatPrice(order.total)}
            </p>
            <p className="tnum text-xs text-muted-foreground">
              {order.items.length} {order.items.length === 1 ? "item" : "items"}
            </p>
          </div>
          <ChevronRight
            size={18}
            className="text-muted-foreground transition-transform group-hover:translate-x-0.5 group-hover:text-brand"
          />
        </div>
      </div>
    </Link>
  );
}
