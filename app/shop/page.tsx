import type { Metadata } from "next";
import {
  getAllProducts,
  getAllCategories,
  getAllBrands,
  getPriceBounds,
  type SortKey,
} from "@/lib/catalog";
import { Breadcrumbs } from "@/components/breadcrumbs";
import { ProductBrowser } from "@/components/shop/product-browser";
import type { Collection } from "@/components/shop/filter-types";

export const metadata: Metadata = {
  title: "Shop all products",
  description:
    "Browse genuine poultry vaccines, medicines, vitamins, supplements and biosecurity. Filter by category, brand, price and rating.",
};

const HEADINGS: Record<Collection, { title: string; description: string }> = {
  all: {
    title: "All products",
    description:
      "Browse our full range of genuine poultry vaccines, medicines, supplements and biosecurity.",
  },
  bestsellers: {
    title: "Best sellers",
    description: "The products our customers reach for again and again.",
  },
  offers: {
    title: "Special offers",
    description: "Save more on selected vaccines, medicines and supplements.",
  },
  featured: {
    title: "Featured products",
    description: "Handpicked favourites from our veterinary team.",
  },
  new: {
    title: "New arrivals",
    description: "The latest additions to our shelves.",
  },
  prescription: {
    title: "Veterinary (Rx) products",
    description:
      "Products that require a veterinary prescription. Add to cart and upload your prescription at checkout.",
  },
};

const VALID: Collection[] = [
  "all",
  "bestsellers",
  "offers",
  "featured",
  "new",
  "prescription",
];

export default async function ShopPage({
  searchParams,
}: {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}) {
  const params = await searchParams;
  const rawFilter = typeof params.filter === "string" ? params.filter : "all";
  const collection: Collection = VALID.includes(rawFilter as Collection)
    ? (rawFilter as Collection)
    : "all";
  const brandId = typeof params.brand === "string" ? params.brand : undefined;
  const sort = (typeof params.sort === "string" ? params.sort : "relevance") as SortKey;

  const products = getAllProducts();
  const categories = getAllCategories();
  const brands = getAllBrands();
  const bounds = getPriceBounds(products);
  const heading = HEADINGS[collection];

  return (
    <div className="container-page py-6 sm:py-8">
      <Breadcrumbs
        items={[{ label: "Home", href: "/" }, { label: heading.title }]}
      />

      <div className="mt-5 max-w-2xl">
        <h1 className="font-display text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
          {heading.title}
        </h1>
        <p className="mt-2 text-sm leading-relaxed text-muted-foreground sm:text-base">
          {heading.description}
        </p>
      </div>

      <div className="mt-8">
        <ProductBrowser
          products={products}
          categories={categories}
          brands={brands}
          bounds={bounds}
          collection={collection}
          initialSort={sort}
          initialBrandId={brandId}
        />
      </div>
    </div>
  );
}
