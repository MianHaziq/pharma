import type { OrderStatus } from "@/lib/types";
import { cn } from "@/lib/utils";

const CONFIG: Record<OrderStatus, { label: string; className: string }> = {
  placed: { label: "Order placed", className: "bg-muted text-foreground" },
  confirmed: { label: "Confirmed", className: "bg-sky-100 text-sky-800" },
  processing: { label: "Processing", className: "bg-amber-100 text-amber-800" },
  shipped: { label: "Shipped", className: "bg-indigo-100 text-indigo-800" },
  out_for_delivery: {
    label: "Out for delivery",
    className: "bg-brand-tint text-brand-deep",
  },
  delivered: { label: "Delivered", className: "bg-brand text-primary-foreground" },
  cancelled: { label: "Cancelled", className: "bg-sale/10 text-sale" },
};

export function OrderStatusBadge({
  status,
  className,
}: {
  status: OrderStatus;
  className?: string;
}) {
  const cfg = CONFIG[status];
  return (
    <span
      className={cn(
        "inline-flex items-center gap-1.5 rounded-full px-2.5 py-1 text-xs font-semibold",
        cfg.className,
        className,
      )}
    >
      <span className="h-1.5 w-1.5 rounded-full bg-current opacity-70" />
      {cfg.label}
    </span>
  );
}
