"use client";

import { Star } from "lucide-react";
import type { Brand, Category } from "@/lib/types";
import { formatPrice } from "@/lib/format";
import { cn } from "@/lib/utils";
import { Checkbox } from "@/components/ui/checkbox";
import { Slider } from "@/components/ui/slider";
import { Button } from "@/components/ui/button";
import type { UiFilters } from "./filter-types";
import { countActiveFilters } from "./filter-types";

interface FilterSidebarProps {
  filters: UiFilters;
  onChange: (next: UiFilters) => void;
  categories: Category[];
  brands: Brand[];
  bounds: { min: number; max: number };
  showCategories?: boolean;
  productCountFor?: (predicate: {
    categorySlug?: string;
    brandId?: string;
  }) => number;
}

function Group({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div className="border-t border-border py-5 first:border-t-0 first:pt-0">
      <h3 className="mb-3 text-sm font-semibold text-foreground">{title}</h3>
      {children}
    </div>
  );
}

export function FilterSidebar({
  filters,
  onChange,
  categories,
  brands,
  bounds,
  showCategories = true,
  productCountFor,
}: FilterSidebarProps) {
  const activeCount = countActiveFilters(filters, bounds);

  const toggleArray = (key: "categories" | "brands", value: string) => {
    const set = new Set(filters[key]);
    if (set.has(value)) set.delete(value);
    else set.add(value);
    onChange({ ...filters, [key]: Array.from(set) });
  };

  return (
    <div>
      <div className="flex items-center justify-between pb-4">
        <span className="text-sm font-semibold text-foreground">Filters</span>
        {activeCount > 0 && (
          <button
            type="button"
            onClick={() =>
              onChange({
                categories: [],
                brands: [],
                priceRange: [bounds.min, bounds.max],
                minRating: 0,
                inStockOnly: false,
                onSaleOnly: false,
              })
            }
            className="text-xs font-medium text-brand hover:text-brand-deep"
          >
            Clear all ({activeCount})
          </button>
        )}
      </div>

      {showCategories && (
        <Group title="Category">
          <div className="space-y-2.5">
            {categories.map((cat) => (
              <label
                key={cat.id}
                className="flex cursor-pointer items-center gap-2.5 text-sm text-foreground"
              >
                <Checkbox
                  checked={filters.categories.includes(cat.slug)}
                  onCheckedChange={() => toggleArray("categories", cat.slug)}
                />
                <span className="flex-1">{cat.name}</span>
                {productCountFor && (
                  <span className="tnum text-xs text-muted-foreground">
                    {productCountFor({ categorySlug: cat.slug })}
                  </span>
                )}
              </label>
            ))}
          </div>
        </Group>
      )}

      <Group title="Price range">
        <Slider
          value={filters.priceRange}
          min={bounds.min}
          max={bounds.max}
          step={50}
          minStepsBetweenThumbs={1}
          onValueChange={(v) =>
            onChange({ ...filters, priceRange: [v[0], v[1]] as [number, number] })
          }
          className="mt-1"
        />
        <div className="mt-3 flex items-center justify-between text-xs font-medium text-muted-foreground">
          <span className="tnum rounded-md border border-border bg-card px-2 py-1">
            {formatPrice(filters.priceRange[0])}
          </span>
          <span className="tnum rounded-md border border-border bg-card px-2 py-1">
            {formatPrice(filters.priceRange[1])}
          </span>
        </div>
      </Group>

      <Group title="Brand">
        <div className="max-h-56 space-y-2.5 overflow-y-auto pr-1">
          {brands.map((brand) => (
            <label
              key={brand.id}
              className="flex cursor-pointer items-center gap-2.5 text-sm text-foreground"
            >
              <Checkbox
                checked={filters.brands.includes(brand.id)}
                onCheckedChange={() => toggleArray("brands", brand.id)}
              />
              <span className="flex-1">{brand.name}</span>
              {productCountFor && (
                <span className="tnum text-xs text-muted-foreground">
                  {productCountFor({ brandId: brand.id })}
                </span>
              )}
            </label>
          ))}
        </div>
      </Group>

      <Group title="Customer rating">
        <div className="space-y-1">
          {[4, 3, 2].map((r) => (
            <button
              key={r}
              type="button"
              onClick={() =>
                onChange({ ...filters, minRating: filters.minRating === r ? 0 : r })
              }
              className={cn(
                "flex w-full items-center gap-2 rounded-lg px-2 py-1.5 text-sm transition-colors",
                filters.minRating === r
                  ? "bg-brand-tint text-brand-deep"
                  : "text-foreground hover:bg-muted",
              )}
            >
              <span className="flex">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star
                    key={i}
                    size={14}
                    className={i < r ? "fill-gold text-gold" : "fill-border text-border"}
                    strokeWidth={0}
                  />
                ))}
              </span>
              <span className="text-xs text-muted-foreground">& up</span>
            </button>
          ))}
        </div>
      </Group>

      <Group title="Availability">
        <div className="space-y-2.5">
          <label className="flex cursor-pointer items-center gap-2.5 text-sm text-foreground">
            <Checkbox
              checked={filters.inStockOnly}
              onCheckedChange={(v) =>
                onChange({ ...filters, inStockOnly: Boolean(v) })
              }
            />
            In stock only
          </label>
          <label className="flex cursor-pointer items-center gap-2.5 text-sm text-foreground">
            <Checkbox
              checked={filters.onSaleOnly}
              onCheckedChange={(v) =>
                onChange({ ...filters, onSaleOnly: Boolean(v) })
              }
            />
            On sale
          </label>
        </div>
      </Group>
    </div>
  );
}

export function MobileFilterButton({
  count,
  onClick,
}: {
  count: number;
  onClick: () => void;
}) {
  return (
    <Button
      type="button"
      variant="outline"
      onClick={onClick}
      className="gap-2 lg:hidden"
    >
      Filters
      {count > 0 && (
        <span className="tnum grid h-5 min-w-5 place-items-center rounded-full bg-brand px-1 text-[11px] font-semibold text-primary-foreground">
          {count}
        </span>
      )}
    </Button>
  );
}
