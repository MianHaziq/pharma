import type { SortKey } from "@/lib/catalog";

export type Collection =
  | "all"
  | "bestsellers"
  | "offers"
  | "featured"
  | "new"
  | "prescription";

export interface UiFilters {
  categories: string[];
  brands: string[];
  priceRange: [number, number];
  minRating: number;
  inStockOnly: boolean;
  onSaleOnly: boolean;
}

export function defaultFilters(bounds: {
  min: number;
  max: number;
}): UiFilters {
  return {
    categories: [],
    brands: [],
    priceRange: [bounds.min, bounds.max],
    minRating: 0,
    inStockOnly: false,
    onSaleOnly: false,
  };
}

export const sortOptions: { value: SortKey; label: string }[] = [
  { value: "relevance", label: "Relevance" },
  { value: "popularity", label: "Popularity" },
  { value: "price-asc", label: "Price: Low to High" },
  { value: "price-desc", label: "Price: High to Low" },
  { value: "newest", label: "Newest" },
  { value: "rating", label: "Customer Rating" },
];

export function countActiveFilters(f: UiFilters, bounds: { min: number; max: number }): number {
  let n = f.categories.length + f.brands.length;
  if (f.minRating > 0) n += 1;
  if (f.inStockOnly) n += 1;
  if (f.onSaleOnly) n += 1;
  if (f.priceRange[0] > bounds.min || f.priceRange[1] < bounds.max) n += 1;
  return n;
}
