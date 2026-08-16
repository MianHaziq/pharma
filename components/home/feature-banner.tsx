import Link from "next/link";
import { ArrowRight } from "lucide-react";
import type { Banner } from "@/lib/types";
import { getTint } from "@/lib/tones";
import { Button } from "@/components/ui/button";
import { BannerArt } from "./banner-art";

// Full-width illustrated campaign banner. Dark brand panel with a framed
// illustration — the visual anchor of the homepage.
export function FeatureBanner({ banner }: { banner: Banner }) {
  const tint = getTint(banner.tone);

  return (
    <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-brand-deep via-brand-deep to-brand text-primary-foreground">
      {/* soft glow */}
      <div className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full bg-white/5" />
      <div className="pointer-events-none absolute -bottom-28 left-1/3 h-72 w-72 rounded-full bg-white/5" />

      <div className="relative grid items-center gap-8 p-7 sm:p-10 lg:grid-cols-[1.15fr_1fr] lg:gap-12 lg:p-12">
        {/* Copy */}
        <div>
          {banner.eyebrow && (
            <span className="inline-flex items-center gap-2 rounded-full bg-white/12 px-3 py-1 text-xs font-semibold uppercase tracking-[0.08em] text-primary-foreground/90">
              {banner.eyebrow}
            </span>
          )}
          <h2 className="mt-4 font-display text-3xl font-semibold leading-tight tracking-tight sm:text-4xl">
            {banner.title}
          </h2>
          <p className="mt-3 max-w-lg text-sm leading-relaxed text-primary-foreground/85 sm:text-base">
            {banner.subtitle}
          </p>
          <div className="mt-7 flex flex-wrap items-center gap-3">
            <Button asChild size="lg" variant="secondary" className="gap-2 bg-white text-brand-deep hover:bg-white/90">
              <Link href={banner.ctaHref}>
                {banner.ctaLabel}
                <ArrowRight size={18} />
              </Link>
            </Button>
            {banner.secondaryCtaHref && (
              <Button
                asChild
                size="lg"
                variant="outline"
                className="border-white/30 bg-transparent text-primary-foreground hover:bg-white/10 hover:text-primary-foreground"
              >
                <Link href={banner.secondaryCtaHref}>{banner.secondaryCtaLabel}</Link>
              </Button>
            )}
          </div>
        </div>

        {/* Illustration */}
        <div className="relative mx-auto w-full max-w-sm">
          <div
            className="aspect-[5/4] overflow-hidden rounded-2xl ring-1 ring-white/15"
            style={{ backgroundColor: tint.bg }}
          >
            <BannerArt variant={banner.art ?? "vaccine"} className="p-5" />
          </div>
        </div>
      </div>
    </div>
  );
}
