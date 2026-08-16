import { FileText } from "lucide-react";
import { cn } from "@/lib/utils";

export function DiscountBadge({
  percent,
  className,
}: {
  percent: number;
  className?: string;
}) {
  if (percent <= 0) return null;
  return (
    <span
      className={cn(
        "tnum inline-flex items-center rounded-full bg-sale px-2 py-0.5 text-xs font-semibold text-sale-foreground",
        className,
      )}
    >
      -{percent}%
    </span>
  );
}

export function PrescriptionBadge({
  className,
  compact = false,
}: {
  className?: string;
  compact?: boolean;
}) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-1 rounded-full border border-brand/25 bg-brand-tint px-2 py-0.5 text-[11px] font-semibold text-brand-deep",
        className,
      )}
    >
      <FileText size={12} />
      {compact ? "Rx" : "Vet Rx"}
    </span>
  );
}

export function TagPill({
  label,
  className,
}: {
  label: string;
  className?: string;
}) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full bg-foreground px-2 py-0.5 text-[11px] font-semibold uppercase tracking-wide text-background",
        className,
      )}
    >
      {label}
    </span>
  );
}

export function StockStatus({
  stock,
  className,
}: {
  stock: number;
  className?: string;
}) {
  if (stock <= 0) {
    return (
      <span className={cn("inline-flex items-center gap-1.5 text-xs font-medium text-sale", className)}>
        <span className="h-1.5 w-1.5 rounded-full bg-sale" />
        Out of stock
      </span>
    );
  }
  if (stock <= 20) {
    return (
      <span className={cn("inline-flex items-center gap-1.5 text-xs font-medium text-amber-600", className)}>
        <span className="h-1.5 w-1.5 rounded-full bg-amber-500" />
        Only {stock} left
      </span>
    );
  }
  return (
    <span className={cn("inline-flex items-center gap-1.5 text-xs font-medium text-brand", className)}>
      <span className="h-1.5 w-1.5 rounded-full bg-brand" />
      In stock
    </span>
  );
}
