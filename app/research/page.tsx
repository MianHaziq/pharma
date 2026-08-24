import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { researchPillars } from "@/data/company";
import { brands } from "@/data/brands";
import { photo } from "@/lib/images";
import { PageHero } from "@/components/page-hero";
import { SectionHeading } from "@/components/section-heading";
import { Reveal } from "@/components/reveal";
import { ParallaxImage } from "@/components/parallax-image";
import { Icon } from "@/components/icon";
import { Button } from "@/components/ui/button";
import { CtaBand } from "@/components/cta-band";

export const metadata: Metadata = {
  title: "Brands we distribute",
  description:
    "Bilal Pharmaceuticals imports and distributes trusted poultry-health brands — vaccines, medicines, nutrition and biosecurity from the world's leading animal-health manufacturers.",
};

export default function BrandsPage() {
  return (
    <>
      <PageHero
        eyebrow="Brands"
        title="The brands producers trust, in one place."
        description="We partner with leading international animal-health manufacturers so poultry producers can source proven products — with reliable supply and expert support behind every one."
        image={photo("labMolecular", 1800, 70)}
        crumbs={[{ label: "Home", href: "/" }, { label: "Brands" }]}
      />

      {/* Intro */}
      <section className="container-page py-20 lg:py-28">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <Reveal variant="left" className="order-2 lg:order-1">
            <ParallaxImage
              src={photo("qualityControl", 1100, 80)}
              alt="Trusted poultry-health brands distributed by Bilal Pharmaceuticals"
              sizes="(min-width: 1024px) 45vw, 90vw"
              speed={0.14}
              className="aspect-[4/3] rounded-3xl"
              imgClassName="transition-transform duration-[1200ms] ease-out hover:scale-105"
            />
          </Reveal>
          <div className="order-1 lg:order-2">
            <SectionHeading
              eyebrow="Curated, not cluttered"
              title="A portfolio you can rely on."
              description="Every brand we carry earns its place. We work with manufacturers whose quality systems we trust, then handle their products with the care they deserve."
            />
            <Reveal variant="right" delay={80} className="mt-6 space-y-4 text-[0.975rem] leading-relaxed text-muted-foreground">
              <p>
                From world-leading vaccine specialists to focused nutrition and
                biosecurity manufacturers, our range spans the full poultry-health
                program — sourced through official, authorised channels.
              </p>
              <p>
                Are you a manufacturer looking for a dependable distribution
                partner? We are always open to adding the right brand to our
                portfolio.
              </p>
            </Reveal>
            <Reveal delay={160} className="mt-8">
              <Button asChild size="xl">
                <Link href="/contact">
                  Become a brand partner
                  <ArrowRight data-icon="inline-end" />
                </Link>
              </Button>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Brand grid */}
      <section className="border-y border-line bg-mint/40">
        <div className="container-page py-20 lg:py-28">
          <SectionHeading
            eyebrow="Our portfolio"
            title="Brands we import & distribute."
            description="A selection of the animal-health brands we supply. Brand names are shown for the demo — confirm the final line-up with the client."
          />
          <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {brands.map((brand, i) => (
              <Reveal key={brand.id} delay={(i % 3) * 80}>
                <div className="flex h-full flex-col rounded-2xl border border-line bg-card p-7">
                  <div className="flex items-center gap-3">
                    <span className="grid h-12 min-w-12 place-items-center rounded-xl bg-mint px-3 font-display text-sm font-semibold tracking-tight text-emerald ring-1 ring-emerald/10">
                      {brand.logoText}
                    </span>
                    {brand.featured && (
                      <span className="rounded bg-gold/15 px-1.5 py-0.5 font-mono text-[0.6rem] font-semibold uppercase tracking-wider text-gold">
                        Featured
                      </span>
                    )}
                  </div>
                  <h3 className="mt-5 font-display text-lg tracking-tight text-ink">
                    {brand.name}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                    {brand.description}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Why source through us */}
      <section className="container-page py-20 lg:py-28">
        <SectionHeading
          eyebrow="Why source through us"
          title="More than a name on the box."
          description="Buying through Bilal Pharmaceuticals means the brand you trust, handled the way it should be."
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
      </section>

      <div className="pb-20 lg:pb-28">
        <CtaBand
          eyebrow="Let's talk supply"
          title="Looking for a specific brand or product?"
          description="Tell us what you need — we source, stock and supply trusted poultry-health brands to farms, veterinarians and retailers."
          primary={{ label: "Contact our team", href: "/contact" }}
          secondary={{ label: "Browse the range", href: "/solutions" }}
          image={photo("labBench", 1600, 70)}
        />
      </div>
    </>
  );
}
