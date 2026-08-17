import type { Metadata } from "next";
import { researchPillars } from "@/data/company";
import { photo } from "@/lib/images";
import { PageHero } from "@/components/page-hero";
import { SectionHeading } from "@/components/section-heading";
import { Reveal } from "@/components/reveal";
import { ParallaxImage } from "@/components/parallax-image";
import { StatStrip } from "@/components/stat-strip";
import { Icon } from "@/components/icon";
import { CtaBand } from "@/components/cta-band";

export const metadata: Metadata = {
  title: "Research & innovation",
  description:
    "Inside the AviCura Innovation Center — diagnostics, formulation science, vaccine development and antimicrobial stewardship for poultry.",
};

const researchStats = [
  { value: 30, suffix: "+", label: "Active research programs" },
  { value: 4, suffix: "", label: "Core science platforms" },
  { value: 45, suffix: "", label: "Field trials each year" },
  { value: 12, suffix: "", label: "Studies published in 2025" },
];

const process = [
  {
    step: "01",
    title: "Field & diagnostic insight",
    description:
      "Every project starts with real data — serology, post-mortem findings and performance records from the farms we serve.",
  },
  {
    step: "02",
    title: "Formulation & development",
    description:
      "Our scientists design stable, palatable formulations and candidate biologicals against a clear target product profile.",
  },
  {
    step: "03",
    title: "Trials & validation",
    description:
      "Controlled and field trials confirm efficacy, safety and practicality under commercial conditions before anything scales.",
  },
  {
    step: "04",
    title: "Registration & scale-up",
    description:
      "Validated products move to GMP manufacturing and market registration, with documentation maintained throughout the lifecycle.",
  },
];

export default function ResearchPage() {
  return (
    <>
      <PageHero
        eyebrow="Research & innovation"
        title="Where poultry science begins."
        description="Our Innovation Center exists for one purpose: turning the real challenges of the shed into solutions that hold up in the field."
        image={photo("microscope", 1800, 70)}
        crumbs={[{ label: "Home", href: "/" }, { label: "Research" }]}
      />

      {/* Intro */}
      <section className="container-page py-20 lg:py-28">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <Reveal variant="left" className="order-2 lg:order-1">
            <ParallaxImage
              src={photo("labMolecular", 1100, 80)}
              alt="Molecular research at the AviCura Innovation Center"
              sizes="(min-width: 1024px) 45vw, 90vw"
              speed={0.14}
              className="aspect-[4/3] rounded-3xl"
              imgClassName="transition-transform duration-[1200ms] ease-out hover:scale-105"
            />
          </Reveal>
          <div className="order-1 lg:order-2">
            <SectionHeading
              eyebrow="Science-led, field-proven"
              title="Research that answers to the farm."
              description="We are not chasing science for its own sake. Every program is measured against a simple question: does it make flocks healthier, more productive or more sustainable in the real world?"
            />
            <Reveal variant="right" delay={80} className="mt-6 space-y-4 text-[0.975rem] leading-relaxed text-muted-foreground">
              <p>
                Our teams combine diagnostics, formulation science, vaccine
                development and nutrition under one roof — so insight moves quickly
                from the laboratory to a product a producer can actually use.
              </p>
              <p>
                Collaboration with universities, diagnostic labs and veterinary
                partners keeps our work grounded in the diseases and pressures that
                matter most today.
              </p>
            </Reveal>
          </div>
        </div>

        <Reveal className="mt-16 lg:mt-20">
          <StatStrip stats={researchStats} />
        </Reveal>
      </section>

      {/* Pillars */}
      <section className="border-y border-line bg-mint/40">
        <div className="container-page py-20 lg:py-28">
          <SectionHeading
            eyebrow="Our platforms"
            title="Four disciplines, one goal."
            description="Distinct areas of expertise that work together across every AviCura product."
          />
          <div className="mt-14 grid gap-5 sm:grid-cols-2">
            {researchPillars.map((p, i) => (
              <Reveal key={p.title} delay={(i % 2) * 100}>
                <div className="flex h-full gap-5 rounded-2xl border border-line bg-card p-7">
                  <span className="grid h-14 w-14 shrink-0 place-items-center rounded-xl bg-emerald text-white">
                    <Icon name={p.icon} size={26} />
                  </span>
                  <div>
                    <h3 className="font-display text-xl tracking-tight text-ink">
                      {p.title}
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                      {p.description}
                    </p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="container-page py-20 lg:py-28">
        <SectionHeading
          eyebrow="How we work"
          title="From field challenge to field solution."
          description="A disciplined path that every AviCura product follows — from the first diagnostic insight to a registered, manufactured solution."
        />
        <div className="mt-14 grid gap-px overflow-hidden rounded-2xl border border-line bg-line sm:grid-cols-2 lg:grid-cols-4">
          {process.map((p, i) => (
            <Reveal key={p.step} delay={i * 90} className="bg-card">
              <div className="h-full p-7">
                <span className="font-mono text-sm font-medium text-gold">
                  {p.step}
                </span>
                <h3 className="mt-4 font-display text-lg tracking-tight text-ink">
                  {p.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {p.description}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <div className="pb-20 lg:pb-28">
        <CtaBand
          eyebrow="Collaborate with us"
          title="Have a poultry-health challenge worth solving?"
          description="We partner with integrators, veterinarians and research institutions on applied poultry science."
          primary={{ label: "Start a conversation", href: "/contact" }}
          secondary={{ label: "See our quality system", href: "/quality" }}
          image={photo("labBench", 1600, 70)}
        />
      </div>
    </>
  );
}
