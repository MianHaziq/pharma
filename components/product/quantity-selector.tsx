"use client";

import { Minus, Plus } from "lucide-react";
import { cn } from "@/lib/utils";

export function QuantitySelector({
  value,
  onChange,
  min = 1,
  max = 99,
  size = "md",
  className,
}: {
  value: number;
  onChange: (value: number) => void;
  min?: number;
  max?: number;
  size?: "sm" | "md";
  className?: string;
}) {
  const dim = size === "sm" ? "h-8 w-8" : "h-10 w-10";
  const width = size === "sm" ? "w-9" : "w-11";

  return (
    <div
      className={cn(
        "inline-flex items-center rounded-lg border border-border bg-card",
        className,
      )}
    >
      <button
        type="button"
        onClick={() => onChange(Math.max(min, value - 1))}
        disabled={value <= min}
        aria-label="Decrease quantity"
        className={cn(
          "inline-flex items-center justify-center rounded-l-lg text-foreground transition-colors hover:bg-muted disabled:cursor-not-allowed disabled:opacity-40",
          dim,
        )}
      >
        <Minus size={15} />
      </button>
      <span
        className={cn(
          "tnum text-center text-sm font-semibold tabular-nums",
          width,
        )}
        aria-live="polite"
      >
        {value}
      </span>
      <button
        type="button"
        onClick={() => onChange(Math.min(max, value + 1))}
        disabled={value >= max}
        aria-label="Increase quantity"
        className={cn(
          "inline-flex items-center justify-center rounded-r-lg text-foreground transition-colors hover:bg-muted disabled:cursor-not-allowed disabled:opacity-40",
          dim,
        )}
      >
        <Plus size={15} />
      </button>
    </div>
  );
}
