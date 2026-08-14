"use client";

import { useState } from "react";
import { Check, ShoppingCart } from "lucide-react";
import { useStore } from "@/lib/store";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

export function AddToCartButton({
  productId,
  quantity = 1,
  disabled,
  size = "default",
  className,
  label = "Add to cart",
  fullWidth,
}: {
  productId: string;
  quantity?: number;
  disabled?: boolean;
  size?: "sm" | "default" | "lg";
  className?: string;
  label?: string;
  fullWidth?: boolean;
}) {
  const { addToCart } = useStore();
  const [justAdded, setJustAdded] = useState(false);

  return (
    <Button
      type="button"
      size={size}
      disabled={disabled}
      onClick={(e) => {
        e.preventDefault();
        e.stopPropagation();
        addToCart(productId, quantity);
        setJustAdded(true);
        window.setTimeout(() => setJustAdded(false), 1400);
      }}
      className={cn("gap-2", fullWidth && "w-full", className)}
    >
      {justAdded ? <Check size={17} /> : <ShoppingCart size={17} />}
      {justAdded ? "Added" : label}
    </Button>
  );
}
