import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import type { Product } from "@/lib/types";
import { getCategoryBySlug } from "@/lib/catalog";
import { catalogCode, productFormat } from "@/lib/portfolio";
import { ProductArt } from "@/components/product/product-art";
import { cn } from "@/lib/utils";

// Portfolio product card — no price, no cart. Presents the product as a
// catalogued item in the company's professional range.
export function ProductCard({
  product,
  className,
}: {
  product: Product;
  className?: string;
}) {
  const category = getCategoryBySlug(product.categorySlug);
  const isNew = product.tags.includes("new");

  return (
    <Link
      href={`/products/${product.slug}`}
      className={cn(
        "group relative flex flex-col overflow-hidden rounded-2xl border border-line bg-card transition-all duration-300 hover:-translate-y-1 hover:border-emerald/30 hover:shadow-[var(--shadow-elevated)]",
        className,
      )}
    >
      {/* Visual */}
      <div className="relative aspect-[4/3] overflow-hidden bg-mint-2">
        <div className="absolute inset-0 transition-transform duration-500 group-hover:scale-[1.04]">
          <ProductArt src={product.images[0]} />
        </div>
        <span className="absolute left-3 top-3 rounded-md bg-card/85 px-2 py-1 font-mono text-[0.66rem] font-medium tracking-wide text-emerald-700 backdrop-blur-sm ring-1 ring-line">
          {catalogCode(product)}
        </span>
        {isNew && (
          <span className="absolute right-3 top-3 rounded-md bg-gold px-2 py-1 font-mono text-[0.62rem] font-semibold uppercase tracking-wider text-emerald-deep">
            New
          </span>
        )}
      </div>

      {/* Body */}
      <div className="flex flex-1 flex-col p-5">
        <div className="flex items-center gap-2 text-[0.7rem] font-medium">
          <span className="eyebrow-plain text-emerald">
            {category?.name ?? "Portfolio"}
          </span>
          <span className="text-line-strong">·</span>
          <span className="font-mono tracking-wide text-muted-foreground">
            {productFormat(product)}
          </span>
        </div>

        <h3 className="mt-2 font-display text-lg leading-snug tracking-tight text-ink">
          {product.name}
        </h3>
        <p className="mt-2 line-clamp-2 text-sm leading-relaxed text-muted-foreground">
          {product.shortDescription}
        </p>

        <span className="mt-4 inline-flex items-center gap-1.5 pt-1 text-sm font-medium text-emerald transition-colors group-hover:text-emerald-700">
          View details
          <ArrowUpRight
            size={15}
            className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
          />
        </span>
      </div>
    </Link>
  );
}
