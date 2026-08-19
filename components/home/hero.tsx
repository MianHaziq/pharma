import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Phone, Syringe, Wheat, Stethoscope } from "lucide-react";
import { company } from "@/data/company";
import { Button } from "@/components/ui/button";

// The three pillars, echoed as a professional feature row over the hero art.
const heroFeatures = [
  { icon: Syringe, title: "Vaccines & Medicines", note: "GMP-certified, field-proven" },
  { icon: Wheat, title: "Nutrition & Gut Health", note: "Balanced performance nutrition" },
  { icon: Stethoscope, title: "Veterinary Support", note: "Expert care for every flock" },
];

// Trust cluster — monogram initials stand in for producer logos/photos.
const trustAvatars = ["DO", "SB", "RM"];

export function Hero() {
  return (
    <section className="relative flex min-h-svh flex-col justify-start overflow-hidden bg-emerald-deep xl:justify-center">
      {/* Bespoke composed hero artwork — art-directed at the xl breakpoint. Swap
          the files at public/hero-poultry-farm{,-mobile}.jpg (same compositions:
          green panel left/desktop, green panel top/mobile).
          Below xl (phones, tablets, small laptops): the portrait, green-panel-top
          image with content stacked above the photo — the hen stays fully in view.
          xl+ (laptops): the landscape image with content in the left green panel,
          where there is genuinely room for the split composition. */}
      <Image
        src="/hero-poultry-farm-mobile.jpg"
        alt="Sunrise over a poultry farm with a healthy hen on a fence"
        fill
        priority
        unoptimized
        sizes="100vw"
        className="object-cover object-center xl:hidden"
      />
      <Image
        src="/hero-poultry-farm.jpg"
        alt="Sunrise over a poultry farm with a healthy hen on a fence"
        fill
        priority
        unoptimized
        sizes="100vw"
        className="hidden object-cover object-center xl:block"
      />

      {/* Legibility overlays — dark toward the text (top below xl, left on
          laptops), fading to keep the photography crisp. */}
      <div className="absolute inset-0 bg-gradient-to-b from-emerald-deep from-2% via-emerald-deep/70 via-42% to-transparent to-72% xl:hidden" />
      <div className="absolute inset-0 hidden bg-gradient-to-r from-emerald-deep via-emerald-deep/60 to-transparent xl:block" />

      {/* Content */}
      <div className="container-page relative pt-24 pb-10 xl:py-32">
        <div className="max-w-xl xl:max-w-2xl">
          <p
            className="eyebrow text-gold-soft opacity-0"
            style={{ animation: "fade-in 0.7s ease-out 0.1s forwards" }}
          >
            {company.legalName} · Est. {company.established}
          </p>

          <h1
            className="mt-4 font-display text-[2.05rem] leading-[1.07] tracking-tight text-white text-balance opacity-0 sm:text-[2.5rem] xl:mt-6 xl:text-[4.2rem]"
            style={{ animation: "fade-in 0.8s ease-out 0.22s forwards" }}
          >
            Advancing poultry health
            <br className="hidden xl:block" />{" "}
            <span className="text-gold-soft">through science.</span>
          </h1>

          {/* Supporting line — laptops only; kept off smaller screens to reveal
              the photo */}
          <p
            className="hidden max-w-lg text-lg leading-relaxed text-white/80 opacity-0 xl:mt-6 xl:block"
            style={{ animation: "fade-in 0.8s ease-out 0.36s forwards" }}
          >
            From vaccines and medicines to nutrition and veterinary support —
            AviCura is with you at every stage of the flock, from the laboratory
            to the farm.
          </p>

          {/* Feature pillars — clean stack below xl, a compact divided row on
              laptops, width-capped so it stays within the green panel */}
          <div
            className="mt-6 flex flex-col gap-1 opacity-0 sm:max-w-md xl:mt-9 xl:max-w-lg xl:flex-row xl:gap-0 xl:divide-x xl:divide-white/15"
            style={{ animation: "fade-in 0.8s ease-out 0.5s forwards" }}
          >
            {heroFeatures.map((f) => (
              <div
                key={f.title}
                className="flex items-center gap-3 py-2.5 xl:gap-2.5 xl:px-3.5 xl:py-0 xl:first:pl-0 xl:last:pr-0"
              >
                <span className="grid h-10 w-10 shrink-0 place-items-center rounded-full bg-white/[0.06] text-gold-soft ring-1 ring-gold/25 xl:h-9 xl:w-9">
                  <f.icon size={18} />
                </span>
                <div className="min-w-0">
                  <div className="text-sm font-semibold text-white xl:text-[0.8rem] xl:leading-tight">
                    {f.title}
                  </div>
                  <div className="text-xs leading-relaxed text-white/60 xl:text-[0.68rem] xl:leading-snug">
                    {f.note}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* CTAs — compact, left-aligned (stacked below xl, inline on laptops) */}
          <div
            className="mt-6 flex flex-col items-start gap-3 opacity-0 xl:mt-9 xl:flex-row xl:items-center"
            style={{ animation: "fade-in 0.8s ease-out 0.62s forwards" }}
          >
            <Button asChild size="xl" variant="accent">
              <Link href="/solutions">
                Explore our solutions
                <ArrowRight data-icon="inline-end" />
              </Link>
            </Button>
            <Button asChild size="xl" variant="outlineDark">
              <Link href="/contact">
                Contact us
                <Phone data-icon="inline-end" />
              </Link>
            </Button>
          </div>

          {/* Trust cluster (laptops) */}
          <div
            className="mt-10 hidden items-center gap-4 rounded-2xl border border-white/12 bg-white/[0.05] px-5 py-3 opacity-0 backdrop-blur-sm xl:inline-flex"
            style={{ animation: "fade-in 0.9s ease-out 0.74s forwards" }}
          >
            <div className="flex -space-x-2">
              {trustAvatars.map((a) => (
                <span
                  key={a}
                  className="grid h-8 w-8 place-items-center rounded-full bg-emerald-600 text-[0.6rem] font-semibold text-white ring-2 ring-emerald-deep"
                >
                  {a}
                </span>
              ))}
              <span className="grid h-8 w-8 place-items-center rounded-full bg-gold text-[0.58rem] font-bold text-emerald-deep ring-2 ring-emerald-deep">
                500+
              </span>
            </div>
            <div>
              <div className="text-sm font-semibold text-white">
                Trusted by producers
              </div>
              <div className="font-mono text-[0.68rem] uppercase tracking-[0.12em] text-white/55">
                across 45+ countries
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
