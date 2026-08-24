import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { capabilities } from "@/data/company";
import { photo } from "@/lib/images";
import { ParallaxImage } from "@/components/parallax-image";
import { Reveal } from "@/components/reveal";
import { Button } from "@/components/ui/button";

// Full-bleed cinematic band: a large warehouse/logistics photograph drifting
// behind the distributor's supply numbers. The one big "scale" moment on the
// homepage — it breaks up the card rhythm and carries the supply story.
export function CapabilitiesBand() {
  return (
    <section className="relative overflow-hidden bg-emerald-deep">
      <ParallaxImage
        src={photo("manufacturing", 2000, 72)}
        alt=""
        sizes="100vw"
        speed={0.22}
        className="absolute inset-0"
        imgClassName="opacity-25"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-emerald-deep via-emerald-deep/85 to-emerald-deep/55" />
      <div className="pointer-events-none absolute inset-0 bg-grid-dark opacity-25" />

      <div className="container-page relative grid gap-12 py-20 lg:grid-cols-[1.05fr_1fr] lg:items-center lg:gap-20 lg:py-28">
        <div>
          <Reveal variant="fade">
            <span className="eyebrow text-gold-soft">Supply you can rely on</span>
          </Reveal>
          <Reveal delay={80}>
            <h2 className="mt-5 max-w-xl font-display text-3xl leading-[1.08] tracking-tight text-white text-balance sm:text-4xl lg:text-[2.9rem]">
              The right products, in good condition, when you need them.
            </h2>
          </Reveal>
          <Reveal delay={160}>
            <p className="mt-6 max-w-lg text-base leading-relaxed text-white/70">
              A well-managed portfolio of trusted brands, temperature-controlled
              storage and lot-level traceability let us protect every product
              from the manufacturer to your farm gate — consignment after
              consignment.
            </p>
          </Reveal>
          <Reveal delay={240} className="mt-9">
            <Button asChild size="xl" variant="onDark">
              <Link href="/quality">
                Inside our quality system
                <ArrowRight data-icon="inline-end" />
              </Link>
            </Button>
          </Reveal>
        </div>

        <div className="grid grid-cols-2 gap-px overflow-hidden rounded-2xl border border-white/10 bg-white/10">
          {capabilities.map((c, i) => (
            <Reveal
              key={c.label}
              delay={i * 90}
              variant="scale"
              className="bg-emerald-deep/85 backdrop-blur-sm"
            >
              <div className="h-full px-6 py-8 sm:px-7 sm:py-10">
                <div className="font-display text-4xl font-medium tracking-tight text-gold-soft sm:text-5xl">
                  {c.value}
                </div>
                <p className="mt-3 text-sm leading-relaxed text-white/65">
                  {c.label}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
