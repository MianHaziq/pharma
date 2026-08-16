import { products } from "@/data/products";
import { categories } from "@/data/categories";
import { brands } from "@/data/brands";
import type { Brand, Category, Product, Review } from "./types";
import { discountPercent } from "./format";

// ─────────────────────────────────────────────────────────────
// Query layer. Every component reads catalog data through these
// functions, so a real API/database can replace the bodies here
// without any changes to the UI.
// ─────────────────────────────────────────────────────────────

export function getAllProducts(): Product[] {
  return products;
}

export function getAllCategories(): Category[] {
  return categories;
}

export function getAllBrands(): Brand[] {
  return brands;
}

export function getFeaturedBrands(): Brand[] {
  return brands.filter((b) => b.featured);
}

export function getProductBySlug(slug: string): Product | undefined {
  const product = products.find((p) => p.slug === slug);
  if (!product) return undefined;
  return { ...product, reviews: product.reviews ?? sampleReviews(product) };
}

export function getProductById(id: string): Product | undefined {
  return products.find((p) => p.id === id);
}

export function getCategoryBySlug(slug: string): Category | undefined {
  return categories.find((c) => c.slug === slug);
}

export function getBrandById(id: string): Brand | undefined {
  return brands.find((b) => b.id === id);
}

export function getBrandBySlug(slug: string): Brand | undefined {
  return brands.find((b) => b.slug === slug);
}

export function getBrandName(id: string): string {
  return getBrandById(id)?.name ?? "PoultriMed";
}

export function getProductsByCategory(categorySlug: string): Product[] {
  return products.filter((p) => p.categorySlug === categorySlug);
}

export function getProductCountByCategory(categorySlug: string): number {
  return getProductsByCategory(categorySlug).length;
}

export function getFeaturedProducts(limit = 8): Product[] {
  return products.filter((p) => p.tags.includes("featured")).slice(0, limit);
}

export function getBestSellers(limit = 8): Product[] {
  return products.filter((p) => p.tags.includes("bestseller")).slice(0, limit);
}

export function getNewArrivals(limit = 8): Product[] {
  return products.filter((p) => p.tags.includes("new")).slice(0, limit);
}

export function getOnSaleProducts(limit = 8): Product[] {
  return products
    .filter((p) => discountPercent(p) > 0)
    .sort((a, b) => discountPercent(b) - discountPercent(a))
    .slice(0, limit);
}

export function getRelatedProducts(product: Product, limit = 4): Product[] {
  return products
    .filter(
      (p) => p.id !== product.id && p.categorySlug === product.categorySlug,
    )
    .slice(0, limit);
}

/** "Frequently bought together" — cross-category everyday companions. */
export function getFrequentlyBoughtTogether(
  product: Product,
  limit = 2,
): Product[] {
  return products
    .filter((p) => p.id !== product.id && p.categorySlug !== product.categorySlug)
    .filter((p) => p.tags.includes("bestseller") || p.tags.includes("featured"))
    .slice(0, limit);
}

export interface SearchResults {
  query: string;
  products: Product[];
  categories: Category[];
  brands: Brand[];
}

export function searchCatalog(query: string, limitPer = 20): SearchResults {
  const q = query.trim().toLowerCase();
  if (!q) {
    return { query, products: [], categories: [], brands: [] };
  }
  const matchedProducts = products.filter((p) => {
    const brand = getBrandName(p.brandId).toLowerCase();
    return (
      p.name.toLowerCase().includes(q) ||
      p.shortDescription.toLowerCase().includes(q) ||
      brand.includes(q) ||
      p.categorySlug.replace("-", " ").includes(q) ||
      p.tags.some((t) => t.includes(q))
    );
  });
  const matchedCategories = categories.filter(
    (c) =>
      c.name.toLowerCase().includes(q) ||
      c.description.toLowerCase().includes(q),
  );
  const matchedBrands = brands.filter((b) => b.name.toLowerCase().includes(q));
  return {
    query,
    products: matchedProducts.slice(0, limitPer),
    categories: matchedCategories.slice(0, 6),
    brands: matchedBrands.slice(0, 6),
  };
}

// ─── Filtering & sorting for the shop / category pages ─────────

export type SortKey =
  | "relevance"
  | "popularity"
  | "price-asc"
  | "price-desc"
  | "newest"
  | "rating"
  | "discount";

export interface ProductFilters {
  categories?: string[];
  brands?: string[];
  minPrice?: number;
  maxPrice?: number;
  minRating?: number;
  inStockOnly?: boolean;
  onSaleOnly?: boolean;
  query?: string;
}

export function filterAndSortProducts(
  source: Product[],
  filters: ProductFilters,
  sort: SortKey,
): Product[] {
  let result = [...source];

  if (filters.query) {
    const q = filters.query.trim().toLowerCase();
    result = result.filter((p) => {
      const brand = getBrandName(p.brandId).toLowerCase();
      return (
        p.name.toLowerCase().includes(q) ||
        p.shortDescription.toLowerCase().includes(q) ||
        brand.includes(q)
      );
    });
  }
  if (filters.categories?.length) {
    result = result.filter((p) => filters.categories!.includes(p.categorySlug));
  }
  if (filters.brands?.length) {
    result = result.filter((p) => filters.brands!.includes(p.brandId));
  }
  if (typeof filters.minPrice === "number") {
    result = result.filter((p) => p.price >= filters.minPrice!);
  }
  if (typeof filters.maxPrice === "number") {
    result = result.filter((p) => p.price <= filters.maxPrice!);
  }
  if (typeof filters.minRating === "number" && filters.minRating > 0) {
    result = result.filter((p) => p.rating >= filters.minRating!);
  }
  if (filters.inStockOnly) {
    result = result.filter((p) => p.stock > 0);
  }
  if (filters.onSaleOnly) {
    result = result.filter((p) => discountPercent(p) > 0);
  }

  switch (sort) {
    case "price-asc":
      result.sort((a, b) => a.price - b.price);
      break;
    case "price-desc":
      result.sort((a, b) => b.price - a.price);
      break;
    case "rating":
      result.sort((a, b) => b.rating - a.rating);
      break;
    case "popularity":
      result.sort((a, b) => b.reviewCount - a.reviewCount);
      break;
    case "newest":
      result.sort(
        (a, b) =>
          Number(b.tags.includes("new")) - Number(a.tags.includes("new")),
      );
      break;
    case "discount":
      result.sort((a, b) => discountPercent(b) - discountPercent(a));
      break;
    default:
      break;
  }
  return result;
}

export function getPriceBounds(source: Product[] = products): {
  min: number;
  max: number;
} {
  if (!source.length) return { min: 0, max: 0 };
  const prices = source.map((p) => p.price);
  return { min: Math.min(...prices), max: Math.max(...prices) };
}

// ─── Review sampling ───────────────────────────────────────────
// Products without hand-written reviews get a deterministic sample so
// the product page always feels populated.

const reviewBank: Omit<Review, "id">[] = [
  {
    author: "Kashif (Broiler farm)",
    rating: 5,
    date: "2026-07-30",
    title: "Genuine and well packed",
    body: "Product was genuine, well packaged and delivered next day. Cold packs were still cold on arrival. Will order again.",
    verified: true,
  },
  {
    author: "Naveed (Layer unit)",
    rating: 5,
    date: "2026-07-18",
    title: "Good value for the farm",
    body: "Better price than my local dealer and exactly the quality I expected for the flock. Reordering.",
    verified: true,
  },
  {
    author: "Farm supervisor",
    rating: 4,
    date: "2026-07-02",
    title: "Does the job",
    body: "Worked well for us and the delivery was quick. Clear instructions on the pack made dosing simple.",
    verified: true,
  },
  {
    author: "Adeel (Contract grower)",
    rating: 5,
    date: "2026-06-21",
    title: "Reliable supply",
    body: "I reorder this every cycle. Always authentic and the service is dependable — important when a shed is waiting.",
    verified: false,
  },
];

function sampleReviews(product: Product): Review[] {
  // Vary the count deterministically from the review count so it feels natural.
  const count = (product.reviewCount % 3) + 2;
  return reviewBank.slice(0, count).map((r, i) => ({
    ...r,
    id: `${product.id}-review-${i}`,
  }));
}
