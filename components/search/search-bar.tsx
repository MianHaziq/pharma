"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import { useRouter } from "next/navigation";
import { Search, X, TrendingUp } from "lucide-react";
import { searchCatalog, getBrandName } from "@/lib/catalog";
import { formatPrice } from "@/lib/format";
import { ProductImage } from "@/components/product/product-image";
import { Icon } from "@/components/icon";
import { cn } from "@/lib/utils";

const POPULAR = ["Panadol", "Vitamin D3", "Cetaphil", "ORS", "Blood Pressure"];

export function SearchBar({
  className,
  autoFocus,
  onNavigate,
  placeholder = "Search medicines, brands, health products…",
}: {
  className?: string;
  autoFocus?: boolean;
  onNavigate?: () => void;
  placeholder?: string;
}) {
  const router = useRouter();
  const [query, setQuery] = useState("");
  const [open, setOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const results = useMemo(() => searchCatalog(query, 5), [query]);
  const hasResults =
    results.products.length + results.categories.length + results.brands.length >
    0;

  useEffect(() => {
    function onClick(e: MouseEvent) {
      if (containerRef.current && !containerRef.current.contains(e.target as Node)) {
        setOpen(false);
      }
    }
    document.addEventListener("mousedown", onClick);
    return () => document.removeEventListener("mousedown", onClick);
  }, []);

  function go(href: string) {
    setOpen(false);
    setQuery("");
    onNavigate?.();
    router.push(href);
  }

  function submit(e: React.FormEvent) {
    e.preventDefault();
    if (!query.trim()) return;
    go(`/search?q=${encodeURIComponent(query.trim())}`);
  }

  return (
    <div ref={containerRef} className={cn("relative w-full", className)}>
      <form onSubmit={submit} role="search">
        <div className="relative">
          <Search
            size={18}
            className="pointer-events-none absolute left-3.5 top-1/2 -translate-y-1/2 text-muted-foreground"
          />
          <input
            type="search"
            suppressHydrationWarning
            value={query}
            autoFocus={autoFocus}
            onChange={(e) => {
              setQuery(e.target.value);
              setOpen(true);
            }}
            onFocus={() => setOpen(true)}
            placeholder={placeholder}
            aria-label="Search products"
            className="h-11 w-full rounded-full border border-border bg-card pl-11 pr-10 text-sm text-foreground shadow-sm outline-none transition-colors placeholder:text-muted-foreground focus:border-brand/50 focus:ring-2 focus:ring-brand/15 [&::-webkit-search-cancel-button]:hidden"
          />
          {query && (
            <button
              type="button"
              onClick={() => {
                setQuery("");
                setOpen(false);
              }}
              aria-label="Clear search"
              className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground"
            >
              <X size={16} />
            </button>
          )}
        </div>
      </form>

      {open && (
        <div className="absolute left-0 right-0 top-[calc(100%+8px)] z-50 overflow-hidden rounded-xl border border-border bg-popover shadow-[var(--shadow-elevated)]">
          {!query.trim() ? (
            <div className="p-3">
              <p className="px-1 pb-2 text-[11px] font-semibold uppercase tracking-wide text-muted-foreground">
                Popular searches
              </p>
              <div className="flex flex-wrap gap-2">
                {POPULAR.map((term) => (
                  <button
                    key={term}
                    type="button"
                    onClick={() => go(`/search?q=${encodeURIComponent(term)}`)}
                    className="inline-flex items-center gap-1.5 rounded-full border border-border bg-card px-3 py-1.5 text-xs font-medium text-foreground transition-colors hover:border-brand/40 hover:text-brand"
                  >
                    <TrendingUp size={13} className="text-muted-foreground" />
                    {term}
                  </button>
                ))}
              </div>
            </div>
          ) : hasResults ? (
            <div className="max-h-[70vh] overflow-y-auto py-2">
              {results.products.length > 0 && (
                <div className="pb-1">
                  <p className="px-4 py-1.5 text-[11px] font-semibold uppercase tracking-wide text-muted-foreground">
                    Products
                  </p>
                  {results.products.map((p) => (
                    <button
                      key={p.id}
                      type="button"
                      onClick={() => go(`/product/${p.slug}`)}
                      className="flex w-full items-center gap-3 px-3 py-2 text-left transition-colors hover:bg-muted"
                    >
                      <span className="relative h-11 w-11 shrink-0 overflow-hidden rounded-lg border border-border">
                        <ProductImage
                          src={p.images[0]}
                          alt={p.name}
                          showWatermark={false}
                          sizes="44px"
                        />
                      </span>
                      <span className="min-w-0 flex-1">
                        <span className="block truncate text-sm font-medium text-foreground">
                          {p.name}
                        </span>
                        <span className="block truncate text-xs text-muted-foreground">
                          {getBrandName(p.brandId)}
                        </span>
                      </span>
                      <span className="tnum shrink-0 text-sm font-semibold text-foreground">
                        {formatPrice(p.price)}
                      </span>
                    </button>
                  ))}
                </div>
              )}

              {results.categories.length > 0 && (
                <div className="border-t border-border pt-1">
                  <p className="px-4 py-1.5 text-[11px] font-semibold uppercase tracking-wide text-muted-foreground">
                    Categories
                  </p>
                  {results.categories.map((c) => (
                    <button
                      key={c.id}
                      type="button"
                      onClick={() => go(`/category/${c.slug}`)}
                      className="flex w-full items-center gap-3 px-4 py-2 text-left text-sm transition-colors hover:bg-muted"
                    >
                      <Icon name={c.icon} size={16} className="text-brand" />
                      {c.name}
                    </button>
                  ))}
                </div>
              )}

              {results.brands.length > 0 && (
                <div className="border-t border-border pt-1">
                  <p className="px-4 py-1.5 text-[11px] font-semibold uppercase tracking-wide text-muted-foreground">
                    Brands
                  </p>
                  <div className="flex flex-wrap gap-2 px-4 py-1.5">
                    {results.brands.map((b) => (
                      <button
                        key={b.id}
                        type="button"
                        onClick={() => go(`/shop?brand=${b.id}`)}
                        className="rounded-full border border-border px-3 py-1 text-xs font-medium text-foreground transition-colors hover:border-brand/40 hover:text-brand"
                      >
                        {b.name}
                      </button>
                    ))}
                  </div>
                </div>
              )}

              <div className="border-t border-border px-3 pt-2">
                <button
                  type="button"
                  onClick={() => go(`/search?q=${encodeURIComponent(query.trim())}`)}
                  className="w-full rounded-lg px-3 py-2 text-left text-sm font-semibold text-brand transition-colors hover:bg-muted"
                >
                  See all results for “{query.trim()}”
                </button>
              </div>
            </div>
          ) : (
            <div className="px-4 py-6 text-center text-sm text-muted-foreground">
              No matches for “{query.trim()}”. Try a different term.
            </div>
          )}
        </div>
      )}
    </div>
  );
}
