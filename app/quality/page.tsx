import type { Metadata } from "next";
import { qualitySteps, certifications, capabilities } from "@/data/company";
import { photo } from "@/lib/images";
import { PageHero } from "@/components/page-hero";
import { SectionHeading } from "@/components/section-heading";
import { Reveal } from "@/components/reveal";
import { ParallaxImage } from "@/components/parallax-image";
import { CtaBand } from "@/components/cta-band";

export const metadata: Metadata = {
  title: "Quality & compliance",
  description:
    "GMP manufacturing, independent batch release, cold-chain integrity and full traceability — how AviCura guarantees quality in every dose.",
};

export default function QualityPage() {
  return (
    <>
      <PageHero
        eyebrow="Quality & compliance"
        title="Quality you can audit, batch after batch."
        description="In poultry health there is no room for variability. Every AviCura product is built to a specification and proven against it before it ever reaches a farm."
        image={photo("qualityControl", 1800, 70)}
        crumbs={[{ label: "Home", href: "/" }, { label: "Quality" }]}
      />

      {/* Intro */}
      <section className="container-page py-20 lg:py-28">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <div>
            <SectionHeading
              eyebrow="Our commitment"
              title="Quality is not a department — it's the design."
              description="From facility design to the final release check, quality is engineered into every step rather than inspected in at the end."
            />
            <div className="mt-6 space-y-4 text-[0.975rem] leading-relaxed text-muted-foreground">
              <p>
                Our manufacturing sites operate under Good Manufacturing Practice,
                with separate lines for biologicals and pharmaceuticals to prevent
                cross-contamination and protect potency.
              </p>
              <p>
                Independent quality units test at every critical stage, and a
                qualified person releases each batch only when it fully meets
                pharmacopoeial specifications — with lot-level traceability that
                follows the product all the way to the farm.
              </p>
            </div>
          </div>
          <Reveal variant="right">
            <ParallaxImage
              src={photo("manufacturing", 1100, 80)}
              alt="GMP-certified manufacturing at AviCura"
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
            title="Five controls behind every dose."
            description="A single, documented chain of custody from raw material to farm gate."
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
            eyebrow="Certifications & standards"
            title="Independently verified, market by market."
            description="Our systems are certified to internationally recognised standards, with documentation maintained for every market we serve."
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
            Certification names shown are illustrative placeholders for this demo
            and can be replaced with AviCura's actual certificates.
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
