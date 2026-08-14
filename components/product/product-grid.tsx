import { cn } from "@/lib/utils";
import type { Product } from "@/lib/types";
import { ProductCard } from "./product-card";

export function ProductGrid({
  products,
  className,
  columns = 4,
  priorityCount = 0,
}: {
  products: Product[];
  className?: string;
  columns?: 3 | 4 | 5;
  priorityCount?: number;
}) {
  const cols = {
    3: "grid-cols-2 md:grid-cols-3",
    4: "grid-cols-2 md:grid-cols-3 lg:grid-cols-4",
    5: "grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5",
  }[columns];

  return (
    <div className={cn("grid gap-4 sm:gap-5", cols, className)}>
      {products.map((product, i) => (
        <ProductCard
          key={product.id}
          product={product}
          priority={i < priorityCount}
        />
      ))}
    </div>
  );
}
