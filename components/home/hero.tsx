import Link from "next/link";
import { ArrowRight, Truck, ShieldCheck, Star } from "lucide-react";
import type { Banner, Product } from "@/lib/types";
import { ProductImage } from "@/components/product/product-image";
import { Price } from "@/components/product/price";
import { Button } from "@/components/ui/button";

const stats = [
  { value: "4.9", label: "Avg. rating", icon: Star },
  { value: "50k+", label: "Orders delivered" },
  { value: "7 days", label: "Support a week" },
];

export function Hero({
  banner,
  showcase,
}: {
  banner: Banner;
  showcase: Product[];
}) {
  const [lead, ...rest] = showcase;

  return (
    <section className="relative overflow-hidden border-b border-border bg-gradient-to-b from-brand-tint/60 to-background">
      <div className="container-page grid items-center gap-10 py-12 lg:grid-cols-[1.05fr_1fr] lg:py-20">
        {/* Copy */}
        <div className="max-w-xl">
          {banner.eyebrow && <span className="eyebrow">{banner.eyebrow}</span>}
          <h1 className="mt-4 font-display text-4xl font-semibold leading-[1.08] tracking-tight text-foreground sm:text-5xl lg:text-[3.4rem]">
            {banner.title}
          </h1>
          <p className="mt-4 max-w-md text-base leading-relaxed text-muted-foreground sm:text-lg">
            {banner.subtitle}
          </p>

          <div className="mt-7 flex flex-wrap items-center gap-3">
            <Button asChild size="lg" className="gap-2">
              <Link href={banner.ctaHref}>
                {banner.ctaLabel}
                <ArrowRight size={18} />
              </Link>
            </Button>
            {banner.secondaryCtaHref && (
              <Button asChild size="lg" variant="outline">
                <Link href={banner.secondaryCtaHref}>
                  {banner.secondaryCtaLabel}
                </Link>
              </Button>
            )}
          </div>

          {/* Trust chips */}
          <div className="mt-6 flex flex-wrap items-center gap-x-5 gap-y-2 text-sm text-muted-foreground">
            <span className="flex items-center gap-2">
              <ShieldCheck size={16} className="text-brand" />
              Pharmacist-checked
            </span>
            <span className="flex items-center gap-2">
              <Truck size={16} className="text-brand" />
              Free delivery over Rs. 3,000
            </span>
          </div>

          {/* Stats */}
          <dl className="mt-8 grid max-w-md grid-cols-3 gap-4 border-t border-border pt-6">
            {stats.map((s) => (
              <div key={s.label}>
                <dt className="sr-only">{s.label}</dt>
                <dd className="tnum flex items-center gap-1 text-xl font-semibold text-foreground">
                  {s.value}
                  {s.icon && <s.icon size={16} className="fill-gold text-gold" />}
                </dd>
                <dd className="mt-0.5 text-xs text-muted-foreground">{s.label}</dd>
              </div>
            ))}
          </dl>
        </div>

        {/* Visual */}
        <div className="relative">
          <div className="relative mx-auto grid max-w-md grid-cols-2 gap-4">
            {lead && (
              <Link
                href={`/product/${lead.slug}`}
                className="group col-span-1 row-span-2 flex flex-col overflow-hidden rounded-2xl border border-border bg-card shadow-[var(--shadow-elevated)] transition-transform hover:-translate-y-1"
              >
                <div className="relative aspect-square">
                  <ProductImage src={lead.images[0]} alt={lead.name} priority sizes="240px" />
                </div>
                <div className="p-3.5">
                  <p className="line-clamp-1 text-sm font-semibold text-foreground">
                    {lead.name}
                  </p>
                  <Price price={lead.price} originalPrice={lead.originalPrice} size="sm" className="mt-1" />
                </div>
              </Link>
            )}

            {rest.slice(0, 2).map((p) => (
              <Link
                key={p.id}
                href={`/product/${p.slug}`}
                className="group flex flex-col overflow-hidden rounded-2xl border border-border bg-card shadow-[var(--shadow-card)] transition-transform hover:-translate-y-1"
              >
                <div className="relative aspect-[4/3]">
                  <ProductImage src={p.images[0]} alt={p.name} sizes="180px" />
                </div>
                <div className="p-3">
                  <p className="line-clamp-1 text-xs font-semibold text-foreground">
                    {p.name}
                  </p>
                  <Price price={p.price} size="sm" className="mt-0.5" />
                </div>
              </Link>
            ))}
          </div>

          {/* Floating badge */}
          <div className="absolute -left-2 bottom-6 hidden items-center gap-2.5 rounded-xl border border-border bg-card px-3.5 py-2.5 shadow-[var(--shadow-elevated)] sm:flex">
            <span className="grid h-9 w-9 place-items-center rounded-full bg-brand text-primary-foreground">
              <Truck size={17} />
            </span>
            <span className="leading-tight">
              <span className="block text-sm font-semibold text-foreground">
                Same-day dispatch
              </span>
              <span className="block text-xs text-muted-foreground">
                Order before 4pm
              </span>
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
