"use client";

import { useMemo, useState } from "react";
import { SlidersHorizontal, X, PackageSearch } from "lucide-react";
import type { Brand, Category, Product, Subcategory } from "@/lib/types";
import {
  filterAndSortProducts,
  getBrandName,
  type SortKey,
} from "@/lib/catalog";
import { discountPercent } from "@/lib/format";
import { ProductGrid } from "@/components/product/product-grid";
import { EmptyState } from "@/components/empty-state";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetFooter,
} from "@/components/ui/sheet";
import { FilterSidebar } from "./filter-sidebar";
import {
  type Collection,
  type UiFilters,
  defaultFilters,
  sortOptions,
  countActiveFilters,
} from "./filter-types";

const PAGE_SIZE = 12;

function applyCollection(products: Product[], collection: Collection): Product[] {
  switch (collection) {
    case "bestsellers":
      return products.filter((p) => p.tags.includes("bestseller"));
    case "featured":
      return products.filter((p) => p.tags.includes("featured"));
    case "new":
      return products.filter((p) => p.tags.includes("new"));
    case "offers":
      return products.filter((p) => discountPercent(p) > 0);
    case "prescription":
      return products.filter((p) => p.requiresPrescription);
    default:
      return products;
  }
}

export function ProductBrowser({
  products,
  categories,
  brands,
  bounds,
  showCategoryFilter = true,
  collection = "all",
  initialSort = "relevance",
  initialBrandId,
  emptyHref = "/shop",
  subcategories,
}: {
  products: Product[];
  categories: Category[];
  brands: Brand[];
  bounds: { min: number; max: number };
  showCategoryFilter?: boolean;
  collection?: Collection;
  initialSort?: SortKey;
  initialBrandId?: string;
  emptyHref?: string;
  subcategories?: Subcategory[];
}) {
  const [activeSub, setActiveSub] = useState<string | null>(null);
  const [filters, setFilters] = useState<UiFilters>(() => ({
    ...defaultFilters(bounds),
    brands: initialBrandId ? [initialBrandId] : [],
  }));
  const [sort, setSort] = useState<SortKey>(initialSort);
  const [visible, setVisible] = useState(PAGE_SIZE);
  const [sheetOpen, setSheetOpen] = useState(false);

  const collectionScoped = useMemo(() => {
    const base = applyCollection(products, collection);
    return activeSub
      ? base.filter((p) => p.subcategorySlug === activeSub)
      : base;
  }, [products, collection, activeSub]);

  const filtered = useMemo(() => {
    return filterAndSortProducts(
      collectionScoped,
      {
        categories: filters.categories,
        brands: filters.brands,
        minPrice: filters.priceRange[0],
        maxPrice: filters.priceRange[1],
        minRating: filters.minRating,
        inStockOnly: filters.inStockOnly,
        onSaleOnly: filters.onSaleOnly,
      },
      sort,
    );
  }, [collectionScoped, filters, sort]);

  const shown = filtered.slice(0, visible);
  const activeCount = countActiveFilters(filters, bounds);

  const countFor = ({
    categorySlug,
    brandId,
  }: {
    categorySlug?: string;
    brandId?: string;
  }) =>
    collectionScoped.filter(
      (p) =>
        (!categorySlug || p.categorySlug === categorySlug) &&
        (!brandId || p.brandId === brandId),
    ).length;

  const chips = [
    ...filters.categories.map((slug) => ({
      key: `cat-${slug}`,
      label: categories.find((c) => c.slug === slug)?.name ?? slug,
      remove: () =>
        setFilters((f) => ({
          ...f,
          categories: f.categories.filter((s) => s !== slug),
        })),
    })),
    ...filters.brands.map((id) => ({
      key: `brand-${id}`,
      label: getBrandName(id),
      remove: () =>
        setFilters((f) => ({ ...f, brands: f.brands.filter((b) => b !== id) })),
    })),
    ...(filters.minRating > 0
      ? [
          {
            key: "rating",
            label: `${filters.minRating}★ & up`,
            remove: () => setFilters((f) => ({ ...f, minRating: 0 })),
          },
        ]
      : []),
    ...(filters.onSaleOnly
      ? [
          {
            key: "sale",
            label: "On sale",
            remove: () => setFilters((f) => ({ ...f, onSaleOnly: false })),
          },
        ]
      : []),
    ...(filters.inStockOnly
      ? [
          {
            key: "stock",
            label: "In stock",
            remove: () => setFilters((f) => ({ ...f, inStockOnly: false })),
          },
        ]
      : []),
  ];

  const sidebar = (
    <FilterSidebar
      filters={filters}
      onChange={(f) => {
        setFilters(f);
        setVisible(PAGE_SIZE);
      }}
      categories={categories}
      brands={brands}
      bounds={bounds}
      showCategories={showCategoryFilter}
      productCountFor={countFor}
    />
  );

  return (
    <div className="grid gap-8 lg:grid-cols-[248px_1fr]">
      {/* Desktop sidebar */}
      <aside className="hidden lg:block">
        <div className="sticky top-28 rounded-xl border border-border bg-card p-5">
          {sidebar}
        </div>
      </aside>

      <div className="min-w-0">
        {/* Subcategory pills */}
        {subcategories && subcategories.length > 0 && (
          <div className="no-scrollbar -mx-4 mb-5 flex gap-2 overflow-x-auto px-4 sm:mx-0 sm:flex-wrap sm:px-0">
            <button
              type="button"
              onClick={() => {
                setActiveSub(null);
                setVisible(PAGE_SIZE);
              }}
              className={
                "shrink-0 rounded-full border px-3.5 py-1.5 text-sm font-medium transition-colors " +
                (activeSub === null
                  ? "border-brand bg-brand text-primary-foreground"
                  : "border-border bg-card text-foreground hover:border-brand/40")
              }
            >
              All
            </button>
            {subcategories.map((sub) => (
              <button
                key={sub.id}
                type="button"
                onClick={() => {
                  setActiveSub(activeSub === sub.slug ? null : sub.slug);
                  setVisible(PAGE_SIZE);
                }}
                className={
                  "shrink-0 rounded-full border px-3.5 py-1.5 text-sm font-medium transition-colors " +
                  (activeSub === sub.slug
                    ? "border-brand bg-brand text-primary-foreground"
                    : "border-border bg-card text-foreground hover:border-brand/40")
                }
              >
                {sub.name}
              </button>
            ))}
          </div>
        )}

        {/* Toolbar */}
        <div className="flex items-center justify-between gap-3">
          <p className="tnum text-sm text-muted-foreground">
            <span className="font-semibold text-foreground">{filtered.length}</span>{" "}
            {filtered.length === 1 ? "product" : "products"}
          </p>
          <div className="flex items-center gap-2">
            <Button
              type="button"
              variant="outline"
              onClick={() => setSheetOpen(true)}
              className="gap-2 lg:hidden"
            >
              <SlidersHorizontal size={16} />
              Filters
              {activeCount > 0 && (
                <span className="tnum grid h-5 min-w-5 place-items-center rounded-full bg-brand px-1 text-[11px] font-semibold text-primary-foreground">
                  {activeCount}
                </span>
              )}
            </Button>
            <Select value={sort} onValueChange={(v) => setSort(v as SortKey)}>
              <SelectTrigger className="w-[150px] sm:w-[180px]">
                <span className="hidden text-muted-foreground sm:inline">Sort:</span>
                <SelectValue />
              </SelectTrigger>
              <SelectContent align="end">
                {sortOptions.map((o) => (
                  <SelectItem key={o.value} value={o.value}>
                    {o.label}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
        </div>

        {/* Active filter chips */}
        {chips.length > 0 && (
          <div className="mt-4 flex flex-wrap gap-2">
            {chips.map((chip) => (
              <button
                key={chip.key}
                type="button"
                onClick={chip.remove}
                className="inline-flex items-center gap-1.5 rounded-full border border-border bg-card px-3 py-1 text-xs font-medium text-foreground transition-colors hover:border-brand/40"
              >
                {chip.label}
                <X size={13} className="text-muted-foreground" />
              </button>
            ))}
          </div>
        )}

        {/* Grid */}
        {shown.length > 0 ? (
          <>
            <ProductGrid products={shown} className="mt-6" columns={4} />
            {visible < filtered.length && (
              <div className="mt-10 flex flex-col items-center gap-3">
                <p className="tnum text-sm text-muted-foreground">
                  Showing {shown.length} of {filtered.length}
                </p>
                <Button
                  type="button"
                  variant="outline"
                  size="lg"
                  onClick={() => setVisible((v) => v + PAGE_SIZE)}
                >
                  Load more products
                </Button>
              </div>
            )}
          </>
        ) : (
          <EmptyState
            className="mt-6"
            icon={PackageSearch}
            title="No products match your filters"
            description="Try adjusting or clearing your filters to see more products."
            actionLabel="Clear filters"
            actionHref={emptyHref}
          />
        )}
      </div>

      {/* Mobile filter sheet */}
      <Sheet open={sheetOpen} onOpenChange={setSheetOpen}>
        <SheetContent side="left" className="w-[88%] max-w-sm gap-0 p-0">
          <SheetHeader className="border-b border-border p-4">
            <SheetTitle>Filters</SheetTitle>
          </SheetHeader>
          <div className="flex-1 overflow-y-auto p-4">{sidebar}</div>
          <SheetFooter className="border-t border-border p-4">
            <Button onClick={() => setSheetOpen(false)} className="w-full" size="lg">
              Show {filtered.length} results
            </Button>
          </SheetFooter>
        </SheetContent>
      </Sheet>
    </div>
  );
}
