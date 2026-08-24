import type { Metadata } from "next";
import { qualitySteps, certifications, capabilities } from "@/data/company";
import { photo } from "@/lib/images";
import { PageHero } from "@/components/page-hero";
import { SectionHeading } from "@/components/section-heading";
import { Reveal } from "@/components/reveal";
import { ParallaxImage } from "@/components/parallax-image";
import { CtaBand } from "@/components/cta-band";

export const metadata: Metadata = {
  title: "Quality & handling",
  description:
    "Authorised sourcing, cold-chain storage, careful handling and full traceability — how Bilal Pharmaceuticals protects quality in every product it supplies.",
};

export default function QualityPage() {
  return (
    <>
      <PageHero
        eyebrow="Quality & handling"
        title="Quality protected, batch after batch."
        description="In poultry health there is no room for variability. Every product we supply is sourced through authorised channels and handled with care until it reaches your farm."
        image={photo("qualityControl", 1800, 70)}
        crumbs={[{ label: "Home", href: "/" }, { label: "Quality" }]}
      />

      {/* Intro */}
      <section className="container-page py-20 lg:py-28">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <div>
            <SectionHeading
              eyebrow="Our commitment"
              title="Quality is not a step — it's every step."
              description="From choosing which manufacturers to work with to the final dispatch check, quality is built into how we source, store and handle every product."
            />
            <div className="mt-6 space-y-4 text-[0.975rem] leading-relaxed text-muted-foreground">
              <p>
                We source only from reputable manufacturers, through their
                official and authorised distribution channels — never unverified
                product.
              </p>
              <p>
                Goods are held in clean, temperature-appropriate conditions — cold
                chain where required — and checked for authenticity, condition and
                shelf life, with lot-level traceability that follows each product
                all the way to the farm.
              </p>
            </div>
          </div>
          <Reveal variant="right">
            <ParallaxImage
              src={photo("manufacturing", 1100, 80)}
              alt="Temperature-controlled storage and handling at Bilal Pharmaceuticals"
              sizes="(min-width: 1024px) 45vw, 90vw"
              speed={0.14}
              className="aspect-[4/3] rounded-3xl"
              imgClassName="transition-transform duration-[1200ms] ease-out hover:scale-105"
            />
          </Reveal>
        </div>
      </section>

      {/* Process */}
      <section className="border-y border-line bg-emerald-deep">
        <div className="container-page py-20 lg:py-28">
          <SectionHeading
            dark
            eyebrow="The quality system"
            title="Five controls behind every delivery."
            description="A single, documented chain of custody from the manufacturer to your farm gate."
          />
          <div className="mt-14 space-y-px overflow-hidden rounded-2xl border border-white/10 bg-white/10">
            {qualitySteps.map((s, i) => (
              <Reveal key={s.step} delay={(i % 3) * 70}>
                <div className="grid gap-4 bg-emerald-deep p-7 sm:grid-cols-[5rem_1fr] sm:items-center sm:gap-8 sm:p-8">
                  <span className="font-display text-3xl font-medium tracking-tight text-gold-soft">
                    {s.step}
                  </span>
                  <div>
                    <h3 className="font-display text-lg tracking-tight text-white">
                      {s.title}
                    </h3>
                    <p className="mt-1.5 max-w-2xl text-sm leading-relaxed text-white/65">
                      {s.description}
                    </p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Capabilities */}
      <section className="container-page py-20 lg:py-28">
        <SectionHeading
          eyebrow="Capabilities"
          title="Built for scale and reliability."
          align="center"
        />
        <div className="mt-14 grid grid-cols-2 gap-px overflow-hidden rounded-2xl border border-line bg-line lg:grid-cols-4">
          {capabilities.map((c, i) => (
            <Reveal key={c.label} delay={i * 80} className="bg-card">
              <div className="px-5 py-8 text-center">
                <div className="font-display text-4xl font-medium tracking-tight text-emerald">
                  {c.value}
                </div>
                <p className="mt-2 text-sm text-muted-foreground">{c.label}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Certifications */}
      <section className="border-t border-line bg-mint/40">
        <div className="container-page py-20 lg:py-28">
          <SectionHeading
            eyebrow="Standards we uphold"
            title="The standards behind how we work."
            description="The practices and compliance standards we hold ourselves to when sourcing, storing and supplying poultry-health products."
          />
          <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {certifications.map((c, i) => (
              <Reveal key={c.code} delay={(i % 3) * 80}>
                <div className="flex h-full flex-col rounded-2xl border border-line bg-card p-7">
                  <div className="flex items-baseline gap-3">
                    <span className="font-display text-2xl font-medium tracking-tight text-emerald">
                      {c.code}
                    </span>
                  </div>
                  <h3 className="mt-3 font-medium text-ink">{c.name}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                    {c.description}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
          <p className="mt-8 font-mono text-[0.72rem] leading-relaxed tracking-wide text-muted-foreground">
            Standards shown are illustrative placeholders for this demo and can be
            replaced with the real licenses and certificates held by Bilal
            Pharmaceuticals.
          </p>
        </div>
      </section>

      <div className="py-20 lg:py-28">
        <CtaBand
          eyebrow="Documentation"
          title="Need certificates or product documentation?"
          description="Distributors and veterinarians can request certificates of analysis, safety data and registration documents from our team."
          primary={{ label: "Request documents", href: "/contact" }}
          secondary={{ label: "About our company", href: "/about" }}
          image={photo("production", 1600, 70)}
        />
      </div>
    </>
  );
}
