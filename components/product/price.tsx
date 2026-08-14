import { cn } from "@/lib/utils";
import { formatPrice } from "@/lib/format";

export function Price({
  price,
  originalPrice,
  size = "md",
  className,
}: {
  price: number;
  originalPrice?: number;
  size?: "sm" | "md" | "lg";
  className?: string;
}) {
  const hasDiscount = originalPrice && originalPrice > price;
  const currentClass =
    size === "lg"
      ? "text-2xl md:text-3xl"
      : size === "sm"
        ? "text-sm"
        : "text-base";
  const originalClass = size === "lg" ? "text-base" : "text-xs";

  return (
    <div className={cn("flex flex-wrap items-baseline gap-x-2 gap-y-0.5", className)}>
      <span className={cn("tnum font-semibold text-foreground", currentClass)}>
        {formatPrice(price)}
      </span>
      {hasDiscount && (
        <span className={cn("tnum text-muted-foreground line-through", originalClass)}>
          {formatPrice(originalPrice)}
        </span>
      )}
    </div>
  );
}
