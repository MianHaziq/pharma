import type { Product } from "./types";

/** Format a PKR amount as "Rs. 1,290". */
export function formatPrice(amount: number): string {
  return `Rs. ${Math.round(amount).toLocaleString("en-PK")}`;
}

/** Whole-number discount percentage, or 0 when there is no original price. */
export function discountPercent(product: Pick<Product, "price" | "originalPrice">): number {
  if (!product.originalPrice || product.originalPrice <= product.price) return 0;
  return Math.round(
    ((product.originalPrice - product.price) / product.originalPrice) * 100,
  );
}

/** Amount saved versus the original price. */
export function savingsAmount(product: Pick<Product, "price" | "originalPrice">): number {
  if (!product.originalPrice || product.originalPrice <= product.price) return 0;
  return product.originalPrice - product.price;
}

export function formatDate(iso: string): string {
  const date = new Date(iso);
  if (Number.isNaN(date.getTime())) return iso;
  return date.toLocaleDateString("en-GB", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
}

/** e.g. 1284 -> "1.3k" for compact review counts. */
export function compactNumber(value: number): string {
  return Intl.NumberFormat("en", { notation: "compact" })
    .format(value)
    .toLowerCase();
}
