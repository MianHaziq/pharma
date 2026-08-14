import { Star } from "lucide-react";
import { cn } from "@/lib/utils";
import { compactNumber } from "@/lib/format";

export function Rating({
  value,
  reviewCount,
  size = "sm",
  showValue = true,
  className,
}: {
  value: number;
  reviewCount?: number;
  size?: "sm" | "md";
  showValue?: boolean;
  className?: string;
}) {
  const px = size === "md" ? 16 : 13;
  const full = Math.floor(value);
  const hasHalf = value - full >= 0.25 && value - full < 0.75;
  const rounded = value - full >= 0.75 ? full + 1 : full;

  return (
    <div className={cn("flex items-center gap-1.5", className)}>
      <div
        className="flex items-center"
        aria-label={`Rated ${value} out of 5`}
        role="img"
      >
        {Array.from({ length: 5 }).map((_, i) => {
          const isFull = i < rounded && !(hasHalf && i === full);
          const isHalf = hasHalf && i === full;
          return (
            <span key={i} className="relative inline-flex">
              <Star size={px} className="text-border" fill="currentColor" strokeWidth={0} />
              {(isFull || isHalf) && (
                <span
                  className="absolute inset-0 overflow-hidden"
                  style={{ width: isHalf ? "50%" : "100%" }}
                >
                  <Star size={px} className="text-gold" fill="currentColor" strokeWidth={0} />
                </span>
              )}
            </span>
          );
        })}
      </div>
      {showValue && (
        <span className="tnum text-xs font-semibold text-foreground">
          {value.toFixed(1)}
        </span>
      )}
      {typeof reviewCount === "number" && (
        <span className="tnum text-xs text-muted-foreground">
          ({compactNumber(reviewCount)})
        </span>
      )}
    </div>
  );
}
