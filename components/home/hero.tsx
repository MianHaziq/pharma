import Link from "next/link";
import { ArrowRight, ShieldCheck, MousePointerClick } from "lucide-react";
import { company, heroStats } from "@/data/company";
import { photo } from "@/lib/images";
import { Button } from "@/components/ui/button";
import { ParallaxImage } from "@/components/parallax-image";
import { Counter } from "@/components/counter";

export function Hero() {
  return (
    <section className="relative flex flex-col justify-end overflow-hidden bg-emerald-deep sm:min-h-svh">
      {/* Background photograph — drifts slowly against the scroll for depth */}
      <ParallaxImage
        src={photo("hero", 2200, 82)}
        alt="A healthy bird in prime condition"
        priority
        sizes="100vw"
        speed={0.2}
        className="absolute inset-0"
        imgClassName="object-[80%_22%] sm:object-[68%_center] animate-slow-zoom"
      />

      {/* Legibility + depth overlays */}
      <div className="absolute inset-0 bg-gradient-to-t from-emerald-deep via-emerald-deep/45 to-emerald-deep/70" />
      <div className="absolute inset-0 bg-gradient-to-r from-emerald-deep/85 via-emerald-deep/35 to-emerald-deep/10 sm:to-transparent" />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(120%_90%_at_15%_10%,transparent_40%,rgb(4_26_21_/_0.55)_100%)]" />
      <div className="pointer-events-none absolute inset-0 bg-grid-dark opacity-20" />

      {/* Content */}
      <div className="container-page relative pt-28 pb-10 sm:pt-32 sm:pb-14">
        <div className="max-w-3xl">
          <p
            className="eyebrow text-gold-soft opacity-0"
            style={{ animation: "fade-in 0.7s ease-out 0.1s forwards" }}
          >
            {company.legalName} · Est. {company.established}
          </p>
          <h1
            className="mt-6 font-display text-[2.6rem] leading-[1.02] tracking-tight text-white text-balance opacity-0 sm:text-6xl lg:text-[4.4rem]"
            style={{ animation: "fade-in 0.8s ease-out 0.22s forwards" }}
          >
            Advancing poultry health through science.
          </h1>
          <p
            className="mt-6 max-w-xl text-lg leading-relaxed text-white/75 opacity-0"
            style={{ animation: "fade-in 0.8s ease-out 0.36s forwards" }}
          >
            AviCura develops and manufactures pharmaceuticals, vaccines and
            nutrition for modern poultry production — engineered in the
            laboratory, proven on the farm.
          </p>
          <div
            className="mt-9 flex flex-col gap-3 opacity-0 sm:flex-row"
            style={{ animation: "fade-in 0.8s ease-out 0.5s forwards" }}
          >
            <Button asChild size="xl" variant="onDark">
              <Link href="/solutions">
                Explore our solutions
                <ArrowRight data-icon="inline-end" />
              </Link>
            </Button>
            <Button asChild size="xl" variant="outlineDark">
              <Link href="/about">About our company</Link>
            </Button>
          </div>

          <div
            className="mt-8 flex items-center gap-2 text-sm text-white/60 opacity-0"
            style={{ animation: "fade-in 0.8s ease-out 0.64s forwards" }}
          >
            <ShieldCheck size={16} className="text-gold-soft" />
            GMP-certified manufacturing · Trusted in 45+ countries
          </div>
        </div>
      </div>

      {/* Stats bar */}
      <div
        className="relative border-t border-white/10 bg-emerald-deep/40 opacity-0 backdrop-blur-sm"
        style={{ animation: "fade-in 0.9s ease-out 0.8s forwards" }}
      >
        <div className="container-page grid grid-cols-3 divide-x divide-white/10">
          {heroStats.map((s) => (
            <div key={s.label} className="px-2 py-6 text-center sm:py-8">
              <div className="font-display text-3xl font-medium tracking-tight text-white sm:text-4xl">
                <Counter value={s.value} prefix={s.prefix} suffix={s.suffix} />
              </div>
              <p className="mt-1.5 font-mono text-[0.62rem] uppercase tracking-[0.14em] text-white/50 sm:text-[0.7rem]">
                {s.label}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Scroll cue */}
      <div className="pointer-events-none absolute right-6 top-[52%] hidden -translate-y-1/2 rotate-90 items-center gap-2 font-mono text-[0.6rem] uppercase tracking-[0.2em] text-white/40 lg:flex">
        <MousePointerClick size={13} className="-rotate-90 animate-float-soft" />
        Scroll
      </div>
    </section>
  );
}
