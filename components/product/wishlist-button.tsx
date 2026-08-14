"use client";

import { Heart } from "lucide-react";
import { useStore } from "@/lib/store";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

export function WishlistButton({
  productId,
  variant = "icon",
  className,
}: {
  productId: string;
  variant?: "icon" | "full";
  className?: string;
}) {
  const { isInWishlist, toggleWishlist, hydrated } = useStore();
  const active = hydrated && isInWishlist(productId);

  if (variant === "full") {
    return (
      <Button
        type="button"
        variant="outline"
        onClick={() => toggleWishlist(productId)}
        aria-pressed={active}
        className={cn("gap-2", className)}
      >
        <Heart size={18} className={active ? "fill-sale text-sale" : ""} />
        {active ? "Saved" : "Save"}
      </Button>
    );
  }

  return (
    <button
      type="button"
      onClick={(e) => {
        e.preventDefault();
        e.stopPropagation();
        toggleWishlist(productId);
      }}
      aria-label={active ? "Remove from wishlist" : "Add to wishlist"}
      aria-pressed={active}
      className={cn(
        "inline-flex h-9 w-9 items-center justify-center rounded-full border border-border bg-card/90 text-foreground shadow-sm backdrop-blur transition-colors hover:bg-card hover:text-sale focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-1",
        className,
      )}
    >
      <Heart size={17} className={active ? "fill-sale text-sale" : ""} />
    </button>
  );
}
