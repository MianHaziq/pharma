import type { Metadata } from "next";
import Link from "next/link";
import { SearchX, Search } from "lucide-react";
import {
  searchCatalog,
  getAllCategories,
  getAllBrands,
  getPriceBounds,
} from "@/lib/catalog";
import { SearchBar } from "@/components/search/search-bar";
import { ProductBrowser } from "@/components/shop/product-browser";
import { EmptyState } from "@/components/empty-state";
import { Icon } from "@/components/icon";

export const metadata: Metadata = {
  title: "Search",
  description: "Search our full range of pharmacy and healthcare products.",
};

export default async function SearchPage({
  searchParams,
}: {
  searchParams: Promise<{ q?: string }>;
}) {
  const { q = "" } = await searchParams;
  const query = q.trim();
  const results = searchCatalog(query, 100);
  const hasQuery = query.length > 0;
  const hasProducts = results.products.length > 0;

  return (
    <div className="container-page py-8">
      {/* Header */}
      <div className="mx-auto max-w-2xl text-center">
        <h1 className="font-display text-2xl font-semibold tracking-tight text-foreground sm:text-3xl">
          {hasQuery ? (
            <>
              Search results for{" "}
              <span className="text-brand">“{query}”</span>
            </>
          ) : (
            "Search our pharmacy"
          )}
        </h1>
        {hasQuery && (
          <p className="tnum mt-2 text-sm text-muted-foreground">
            {results.products.length} products
            {results.categories.length > 0 &&
              ` · ${results.categories.length} categories`}
            {results.brands.length > 0 && ` · ${results.brands.length} brands`}
          </p>
        )}
        <div className="mx-auto mt-5 max-w-xl">
          <SearchBar autoFocus={!hasQuery} placeholder="Search medicines, brands, health products…" />
        </div>
      </div>

      {!hasQuery ? (
        <EmptyState
          className="mx-auto mt-10 max-w-xl"
          icon={Search}
          title="What are you looking for?"
          description="Search by product name, brand or health need — like “vitamin D”, “Cetaphil” or “blood pressure”."
          actionLabel="Browse all products"
          actionHref="/shop"
        />
      ) : (
        <div className="mt-10">
          {/* Matched categories & brands */}
          {(results.categories.length > 0 || results.brands.length > 0) && (
            <div className="mb-8 space-y-4">
              {results.categories.length > 0 && (
                <div className="flex flex-wrap items-center gap-2">
                  <span className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">
                    Categories:
                  </span>
                  {results.categories.map((c) => (
                    <Link
                      key={c.id}
                      href={`/category/${c.slug}`}
                      className="inline-flex items-center gap-1.5 rounded-full border border-border bg-card px-3 py-1.5 text-sm font-medium text-foreground transition-colors hover:border-brand/40 hover:text-brand"
                    >
                      <Icon name={c.icon} size={14} className="text-brand" />
                      {c.name}
                    </Link>
                  ))}
                </div>
              )}
              {results.brands.length > 0 && (
                <div className="flex flex-wrap items-center gap-2">
                  <span className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">
                    Brands:
                  </span>
                  {results.brands.map((b) => (
                    <Link
                      key={b.id}
                      href={`/shop?brand=${b.id}`}
                      className="rounded-full border border-border bg-card px-3 py-1.5 text-sm font-medium text-foreground transition-colors hover:border-brand/40 hover:text-brand"
                    >
                      {b.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          )}

          {hasProducts ? (
            <ProductBrowser
              key={query}
              products={results.products}
              categories={getAllCategories()}
              brands={getAllBrands()}
              bounds={getPriceBounds(results.products)}
              emptyHref={`/search?q=${encodeURIComponent(query)}`}
            />
          ) : (
            <EmptyState
              icon={SearchX}
              title={`No products found for “${query}”`}
              description="Try a different search term, check your spelling, or browse our categories."
              actionLabel="Browse all products"
              actionHref="/shop"
            />
          )}
        </div>
      )}
    </div>
  );
}
