import { Truck } from "lucide-react";
import { formatPrice } from "@/lib/format";
import { FREE_DELIVERY_THRESHOLD } from "@/lib/store";
import { cn } from "@/lib/utils";

export function OrderSummary({
  subtotal,
  discount,
  deliveryFee,
  total,
  itemCount,
  children,
  showFreeDeliveryBar = true,
  className,
}: {
  subtotal: number;
  discount: number;
  deliveryFee: number;
  total: number;
  itemCount: number;
  children?: React.ReactNode;
  showFreeDeliveryBar?: boolean;
  className?: string;
}) {
  const merchandise = subtotal - discount;
  const remaining = Math.max(0, FREE_DELIVERY_THRESHOLD - merchandise);
  const progress = Math.min(100, (merchandise / FREE_DELIVERY_THRESHOLD) * 100);

  return (
    <div className={cn("rounded-2xl border border-border bg-card p-5 sm:p-6", className)}>
      <h2 className="text-lg font-semibold text-foreground">Order summary</h2>

      {showFreeDeliveryBar && (
        <div className="mt-4 rounded-xl bg-brand-tint/60 p-3.5">
          <p className="flex items-center gap-2 text-xs font-medium text-brand-deep">
            <Truck size={15} />
            {remaining > 0 ? (
              <span>
                Add <strong className="tnum">{formatPrice(remaining)}</strong> for
                free delivery
              </span>
            ) : (
              <span>You&apos;ve unlocked free delivery!</span>
            )}
          </p>
          <span className="mt-2 block h-1.5 overflow-hidden rounded-full bg-card">
            <span
              className="block h-full rounded-full bg-brand transition-all"
              style={{ width: `${progress}%` }}
            />
          </span>
        </div>
      )}

      <dl className="mt-5 space-y-3 text-sm">
        <div className="flex items-center justify-between">
          <dt className="text-muted-foreground">
            Subtotal{" "}
            <span className="tnum">
              ({itemCount} {itemCount === 1 ? "item" : "items"})
            </span>
          </dt>
          <dd className="tnum font-medium text-foreground">{formatPrice(subtotal)}</dd>
        </div>
        {discount > 0 && (
          <div className="flex items-center justify-between">
            <dt className="text-muted-foreground">Discount</dt>
            <dd className="tnum font-medium text-sale">−{formatPrice(discount)}</dd>
          </div>
        )}
        <div className="flex items-center justify-between">
          <dt className="text-muted-foreground">Delivery</dt>
          <dd className="tnum font-medium text-foreground">
            {deliveryFee === 0 ? (
              <span className="text-brand">Free</span>
            ) : (
              formatPrice(deliveryFee)
            )}
          </dd>
        </div>
      </dl>

      <div className="mt-4 flex items-center justify-between border-t border-border pt-4">
        <span className="text-base font-semibold text-foreground">Total</span>
        <span className="tnum text-xl font-semibold text-foreground">
          {formatPrice(total)}
        </span>
      </div>
      <p className="mt-1 text-xs text-muted-foreground">Inclusive of all taxes</p>

      {children && <div className="mt-5">{children}</div>}
    </div>
  );
}
