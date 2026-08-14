import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { cn } from "@/lib/utils";
import type { Category } from "@/lib/types";
import { getTint } from "@/lib/tones";
import { Icon } from "@/components/icon";

export function CategoryCard({
  category,
  productCount,
  className,
}: {
  category: Category;
  productCount: number;
  className?: string;
}) {
  const tint = getTint(category.tone);

  return (
    <Link
      href={`/category/${category.slug}`}
      className={cn(
        "group relative flex flex-col justify-between overflow-hidden rounded-xl border border-border bg-card p-4 shadow-[var(--shadow-card)] transition-all duration-200 hover:-translate-y-0.5 hover:border-brand/30 hover:shadow-[var(--shadow-elevated)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring sm:p-5",
        className,
      )}
    >
      <div className="flex items-start justify-between">
        <span
          className="inline-flex h-12 w-12 items-center justify-center rounded-xl ring-1"
          style={{ backgroundColor: tint.bg, color: tint.icon, ["--tw-ring-color" as string]: tint.ring }}
        >
          <Icon name={category.icon} size={22} />
        </span>
        <ArrowUpRight
          size={18}
          className="text-muted-foreground/50 transition-all group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-brand"
        />
      </div>

      <div className="mt-5">
        <h3 className="text-sm font-semibold text-foreground sm:text-base">
          {category.name}
        </h3>
        <p className="tnum mt-0.5 text-xs text-muted-foreground">
          {productCount} {productCount === 1 ? "product" : "products"}
        </p>
      </div>
    </Link>
  );
}
