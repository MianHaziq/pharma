import Link from "next/link";
import { ArrowRight } from "lucide-react";
import type { Category } from "@/lib/types";
import { Icon } from "@/components/icon";
import { cn } from "@/lib/utils";

// Solution-category card for the portfolio. Icon-led and quiet — the range is
// organised the way a poultry health program is planned.
export function CategoryCard({
  category,
  count,
  index,
  className,
}: {
  category: Category;
  count: number;
  index?: number;
  className?: string;
}) {
  return (
    <Link
      href={`/solutions/${category.slug}`}
      className={cn(
        "group relative flex flex-col overflow-hidden rounded-2xl border border-line bg-card p-6 transition-all duration-300 hover:-translate-y-1 hover:border-emerald/30 hover:shadow-[var(--shadow-elevated)] sm:p-7",
        className,
      )}
    >
      {typeof index === "number" && (
        <span className="absolute right-6 top-6 font-mono text-[0.72rem] tracking-wide text-line-strong">
          {String(index + 1).padStart(2, "0")}
        </span>
      )}

      <span className="grid h-12 w-12 place-items-center rounded-xl bg-mint text-emerald ring-1 ring-emerald/10 transition-colors duration-300 group-hover:bg-emerald group-hover:text-white">
        <Icon name={category.icon} size={22} />
      </span>

      <h3 className="mt-6 font-display text-xl leading-snug tracking-tight text-ink">
        {category.name}
      </h3>
      <p className="mt-2 flex-1 text-sm leading-relaxed text-muted-foreground">
        {category.tagline}
      </p>

      <div className="mt-6 flex items-center justify-between border-t border-line pt-4">
        <span className="font-mono text-xs tracking-wide text-muted-foreground">
          {count} product{count === 1 ? "" : "s"}
        </span>
        <ArrowRight
          size={17}
          className="text-emerald transition-transform duration-300 group-hover:translate-x-1"
        />
      </div>
    </Link>
  );
}
