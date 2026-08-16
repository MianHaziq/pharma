import Link from "next/link";
import { ArrowRight } from "lucide-react";
import type { Banner } from "@/lib/types";
import { getTint } from "@/lib/tones";
import { BannerArt } from "./banner-art";

// Two compact illustrated promo cards side by side.
export function PromoGrid({ cards }: { cards: Banner[] }) {
  return (
    <div className="grid gap-5 sm:grid-cols-2">
      {cards.map((card) => {
        const tint = getTint(card.tone);
        return (
          <Link
            key={card.id}
            href={card.ctaHref}
            className="group relative flex items-center gap-4 overflow-hidden rounded-2xl border border-border p-6 transition-all hover:-translate-y-0.5 hover:shadow-[var(--shadow-elevated)]"
            style={{ backgroundColor: tint.bg }}
          >
            <div className="relative z-10 min-w-0 flex-1">
              {card.eyebrow && (
                <span
                  className="text-[11px] font-semibold uppercase tracking-[0.08em]"
                  style={{ color: tint.text }}
                >
                  {card.eyebrow}
                </span>
              )}
              <h3 className="mt-1.5 font-display text-xl font-semibold leading-snug text-foreground">
                {card.title}
              </h3>
              <p className="mt-1.5 text-sm text-foreground/70">{card.subtitle}</p>
              <span
                className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold"
                style={{ color: tint.text }}
              >
                {card.ctaLabel}
                <ArrowRight
                  size={15}
                  className="transition-transform group-hover:translate-x-0.5"
                />
              </span>
            </div>
            <div className="relative h-28 w-28 shrink-0 sm:h-32 sm:w-32">
              <BannerArt variant={card.art ?? "delivery"} />
            </div>
          </Link>
        );
      })}
    </div>
  );
}
