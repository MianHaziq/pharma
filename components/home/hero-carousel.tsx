"use client";

import { useCallback, useEffect, useState } from "react";
import Link from "next/link";
import {
  ArrowRight,
  Snowflake,
  ShieldCheck,
  Star,
  BadgeCheck,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import type { Banner, Product } from "@/lib/types";
import { getTint } from "@/lib/tones";
import { ProductImage } from "@/components/product/product-image";
import { Price } from "@/components/product/price";
import { Button } from "@/components/ui/button";
import { BannerArt } from "./banner-art";

const stats = [
  { value: "4.9", label: "Avg. rating", icon: Star },
  { value: "500+", label: "Farms served" },
  { value: "GMP", label: "Certified range" },
];

const AUTOPLAY_MS = 6500;

export function HeroCarousel({
  banners,
  showcase,
}: {
  banners: Banner[];
  showcase: Product[];
}) {
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);
  const count = banners.length;
  const banner = banners[active];
  const tint = getTint(banner.tone);
  const lead = showcase[0];

  const go = useCallback(
    (dir: number) => setActive((a) => (a + dir + count) % count),
    [count],
  );

  useEffect(() => {
    if (paused || count <= 1) return;
    const id = window.setInterval(() => setActive((a) => (a + 1) % count), AUTOPLAY_MS);
    return () => window.clearInterval(id);
  }, [paused, count]);

  return (
    <section
      className="relative overflow-hidden border-b border-border bg-gradient-to-b from-brand-tint/50 to-background"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      aria-roledescription="carousel"
    >
      <div className="container-page grid items-center gap-10 py-12 lg:grid-cols-[1.05fr_1fr] lg:py-20">
        {/* Copy */}
        <div className="max-w-xl">
          <div key={active} className="animate-in fade-in-0 slide-in-from-bottom-1 duration-500">
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
                  <Link href={banner.secondaryCtaHref}>{banner.secondaryCtaLabel}</Link>
                </Button>
              )}
            </div>
          </div>

          {/* Trust chips */}
          <div className="mt-6 flex flex-wrap items-center gap-x-5 gap-y-2 text-sm text-muted-foreground">
            <span className="flex items-center gap-2">
              <BadgeCheck size={16} className="text-brand" />
              GMP-certified quality
            </span>
            <span className="flex items-center gap-2">
              <Snowflake size={16} className="text-brand" />
              Cold-chain vaccines
            </span>
          </div>

          {/* Stats + controls */}
          <div className="mt-8 flex flex-wrap items-center justify-between gap-6 border-t border-border pt-6">
            <dl className="grid grid-cols-3 gap-5">
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

            {count > 1 && (
              <div className="flex items-center gap-3">
                <div className="flex items-center gap-1.5">
                  {banners.map((b, i) => (
                    <button
                      key={b.id}
                      type="button"
                      onClick={() => setActive(i)}
                      aria-label={`Go to slide ${i + 1}`}
                      aria-current={i === active}
                      className={
                        "h-2 rounded-full transition-all " +
                        (i === active ? "w-6 bg-brand" : "w-2 bg-border hover:bg-brand/40")
                      }
                    />
                  ))}
                </div>
                <div className="flex items-center gap-1">
                  <button
                    type="button"
                    onClick={() => go(-1)}
                    aria-label="Previous slide"
                    className="grid h-8 w-8 place-items-center rounded-full border border-border bg-card text-muted-foreground transition-colors hover:border-brand/40 hover:text-brand"
                  >
                    <ChevronLeft size={16} />
                  </button>
                  <button
                    type="button"
                    onClick={() => go(1)}
                    aria-label="Next slide"
                    className="grid h-8 w-8 place-items-center rounded-full border border-border bg-card text-muted-foreground transition-colors hover:border-brand/40 hover:text-brand"
                  >
                    <ChevronRight size={16} />
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Visual */}
        <div className="relative mx-auto w-full max-w-md">
          <div
            className="relative aspect-square overflow-hidden rounded-3xl border border-border shadow-[var(--shadow-elevated)] transition-colors duration-500"
            style={{ backgroundColor: tint.bg }}
          >
            <div key={active} className="h-full w-full animate-in fade-in-0 zoom-in-95 duration-500">
              <BannerArt variant={banner.art ?? "chick"} className="p-6" />
            </div>
          </div>

          {/* Floating product card */}
          {lead && (
            <Link
              href={`/product/${lead.slug}`}
              className="absolute -bottom-5 -left-3 flex w-48 items-center gap-3 rounded-2xl border border-border bg-card p-2.5 shadow-[var(--shadow-elevated)] transition-transform hover:-translate-y-1 sm:-left-6"
            >
              <span className="relative h-14 w-14 shrink-0 overflow-hidden rounded-xl border border-border">
                <ProductImage src={lead.images[0]} alt={lead.name} priority sizes="56px" />
              </span>
              <span className="min-w-0">
                <span className="block truncate text-xs font-semibold text-foreground">
                  {lead.name}
                </span>
                <Price price={lead.price} size="sm" className="mt-0.5" />
              </span>
            </Link>
          )}

          {/* Floating trust badge */}
          <div className="absolute -right-2 top-6 hidden items-center gap-2.5 rounded-xl border border-border bg-card px-3.5 py-2.5 shadow-[var(--shadow-elevated)] sm:flex">
            <span className="grid h-9 w-9 place-items-center rounded-full bg-brand text-primary-foreground">
              <ShieldCheck size={17} />
            </span>
            <span className="leading-tight">
              <span className="block text-sm font-semibold text-foreground">100% genuine</span>
              <span className="block text-xs text-muted-foreground">Authorised supply</span>
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
