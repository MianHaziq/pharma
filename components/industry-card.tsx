import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { img } from "@/lib/images";
import { Icon } from "@/components/icon";
import { Photo } from "@/components/photo";
import { cn } from "@/lib/utils";

export interface IndustryItem {
  slug: string;
  name: string;
  icon: string;
  image: string;
  tagline: string;
  description: string;
}

export function IndustryCard({
  item,
  href = "/industries",
  className,
  priority = false,
}: {
  item: IndustryItem;
  href?: string;
  className?: string;
  priority?: boolean;
}) {
  return (
    <Link
      href={href}
      className={cn(
        "group relative flex min-h-[16rem] flex-col justify-end overflow-hidden rounded-2xl ring-1 ring-transparent transition-all duration-500 ease-out hover:-translate-y-1 hover:ring-gold/30 hover:shadow-[var(--shadow-elevated)]",
        className,
      )}
    >
      <Photo
        src={img(item.image, 900, 75)}
        alt={item.name}
        priority={priority}
        sizes="(min-width: 1024px) 40vw, 100vw"
        className="absolute inset-0"
        imgClassName="transition-transform duration-[900ms] ease-out group-hover:scale-105"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-emerald-deep via-emerald-deep/45 to-transparent transition-opacity duration-500 group-hover:from-emerald-deep group-hover:via-emerald-deep/55" />
      {/* Light sweep on hover */}
      <span aria-hidden className="sheen absolute inset-0" />

      <div className="relative z-10 p-6">
        <span className="grid h-11 w-11 place-items-center rounded-xl bg-white/12 text-white ring-1 ring-white/20 backdrop-blur-sm">
          <Icon name={item.icon} size={20} />
        </span>
        <h3 className="mt-4 font-display text-xl tracking-tight text-white">
          {item.name}
        </h3>
        <p className="mt-1.5 max-w-xs text-sm leading-relaxed text-white/70">
          {item.tagline}
        </p>
        <span className="mt-4 inline-flex items-center gap-1.5 font-mono text-[0.72rem] uppercase tracking-wider text-gold-soft">
          Explore
          <ArrowRight
            size={14}
            className="transition-transform duration-300 group-hover:translate-x-1"
          />
        </span>
      </div>
    </Link>
  );
}
