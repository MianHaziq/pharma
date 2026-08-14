import Link from "next/link";
import { getFeaturedBrands } from "@/lib/catalog";

export function BrandSection() {
  const brands = getFeaturedBrands();

  return (
    <div className="grid grid-cols-2 gap-3 sm:grid-cols-4 lg:grid-cols-8">
      {brands.map((brand) => (
        <Link
          key={brand.id}
          href={`/shop?brand=${brand.id}`}
          className="group flex h-20 items-center justify-center rounded-xl border border-border bg-card px-3 transition-all hover:-translate-y-0.5 hover:border-brand/30 hover:shadow-[var(--shadow-card)]"
          title={brand.description}
        >
          <span className="text-center font-display text-base font-semibold tracking-tight text-muted-foreground transition-colors group-hover:text-brand">
            {brand.logoText}
          </span>
        </Link>
      ))}
    </div>
  );
}
