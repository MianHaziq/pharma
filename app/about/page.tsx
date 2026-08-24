import type { Metadata } from "next";
import {
  stats,
  values,
  milestones,
  leadership,
  missionVision,
  company,
} from "@/data/company";
import { photo } from "@/lib/images";
import { PageHero } from "@/components/page-hero";
import { SectionHeading } from "@/components/section-heading";
import { Reveal } from "@/components/reveal";
import { ParallaxImage } from "@/components/parallax-image";
import { StatStrip } from "@/components/stat-strip";
import { Monogram } from "@/components/monogram";
import { Icon } from "@/components/icon";
import { CtaBand } from "@/components/cta-band";

export const metadata: Metadata = {
  title: "About the company",
  description:
    "Bilal Pharmaceuticals imports and distributes trusted poultry-health brands — the company, its values and the people behind every delivery.",
};

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="Our company"
        title="Trusted brands, poultry expertise."
        description="Bilal Pharmaceuticals imports and distributes the vaccines, medicines and nutrition that keep flocks healthy — pairing the world's leading brands with reliable supply and expert support."
        image={photo("manufacturing", 1800, 70)}
        crumbs={[{ label: "Home", href: "/" }, { label: "Company" }]}
      />

      {/* Story */}
      <section className="container-page py-20 lg:py-28">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <div>
            <SectionHeading
              eyebrow="Our story"
              title="Built to make quality poultry health accessible."
              description={`Founded in ${company.established}, Bilal Pharmaceuticals set out to give local poultry producers dependable access to the trusted animal-health brands they need.`}
            />
            <Reveal variant="left" delay={80} className="mt-6 space-y-4 text-[0.975rem] leading-relaxed text-muted-foreground">
              <p>
                What began as a small importing business is now a trusted
                distribution partner — sourcing from leading international
                manufacturers and supplying poultry farms, veterinarians and
                retailers with reliable stock and honest advice.
              </p>
              <p>
                We are specialists, not generalists. Poultry is not one line among
                many; it is the whole of what we do. That focus is why we curate a
                portfolio built around the diseases, stresses and economics that
                actually shape how a flock performs.
              </p>
            </Reveal>
          </div>

          <Reveal variant="right" className="relative">
            <div className="grid grid-cols-2 gap-4">
              <ParallaxImage
                src={photo("labBench", 700, 75)}
                alt="Quality poultry-health products distributed by Bilal Pharmaceuticals"
                sizes="(min-width: 1024px) 22vw, 45vw"
                speed={0.1}
                className="aspect-[3/4] rounded-2xl"
                imgClassName="transition-transform duration-[1200ms] ease-out hover:scale-105"
              />
              <ParallaxImage
                src={photo("henClose", 700, 75)}
                alt="A healthy hen"
                sizes="(min-width: 1024px) 22vw, 45vw"
                speed={0.2}
                className="mt-8 aspect-[3/4] rounded-2xl"
                imgClassName="transition-transform duration-[1200ms] ease-out hover:scale-105"
              />
            </div>
          </Reveal>
        </div>

        <Reveal className="mt-16 lg:mt-20">
          <StatStrip stats={stats} />
        </Reveal>
      </section>

      {/* Mission & vision */}
      <section className="border-y border-line bg-emerald-deep">
        <div className="container-page grid gap-10 py-16 lg:grid-cols-2 lg:py-20">
          <Reveal className="rounded-3xl border border-white/10 bg-white/[0.04] p-8 sm:p-10">
            <span className="eyebrow text-gold-soft">Mission</span>
            <p className="mt-5 font-display text-2xl leading-snug tracking-tight text-white sm:text-[1.7rem]">
              {missionVision.mission}
            </p>
          </Reveal>
          <Reveal delay={120} className="rounded-3xl border border-white/10 bg-white/[0.04] p-8 sm:p-10">
            <span className="eyebrow text-gold-soft">Vision</span>
            <p className="mt-5 font-display text-2xl leading-snug tracking-tight text-white sm:text-[1.7rem]">
              {missionVision.vision}
            </p>
          </Reveal>
        </div>
      </section>

      {/* Values */}
      <section className="container-page py-20 lg:py-28">
        <SectionHeading
          eyebrow="What we stand for"
          title="The principles behind every delivery."
          align="center"
        />
        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {values.map((v, i) => (
            <Reveal key={v.title} delay={i * 90}>
              <div className="h-full rounded-2xl border border-line bg-card p-7">
                <span className="grid h-12 w-12 place-items-center rounded-xl bg-mint text-emerald ring-1 ring-emerald/10">
                  <Icon name={v.icon} size={22} />
                </span>
                <h3 className="mt-5 font-display text-lg tracking-tight text-ink">
                  {v.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {v.description}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Timeline */}
      <section className="border-y border-line bg-mint/40">
        <div className="container-page py-20 lg:py-28">
          <SectionHeading
            eyebrow="Our journey"
            title="Years of steady growth."
            description="A steady progression from a small importing business to a trusted poultry-health distribution partner."
          />
          <ol className="mt-14 space-y-0">
            {milestones.map((m, i) => (
              <Reveal key={m.year} delay={(i % 3) * 70}>
                <li className="group relative grid grid-cols-[auto_1fr] gap-6 pb-10 last:pb-0 sm:grid-cols-[8rem_1fr] sm:gap-10">
                  {/* Rail */}
                  <div className="relative flex sm:justify-end">
                    <span className="font-display text-2xl font-medium tracking-tight text-emerald sm:text-3xl">
                      {m.year}
                    </span>
                  </div>
                  <div className="relative border-l border-line pl-6 pb-2 sm:pl-8">
                    <span className="absolute -left-[6.5px] top-1.5 h-3 w-3 rounded-full bg-emerald ring-4 ring-mint" />
                    <h3 className="font-display text-lg tracking-tight text-ink">
                      {m.title}
                    </h3>
                    <p className="mt-2 max-w-xl text-sm leading-relaxed text-muted-foreground">
                      {m.description}
                    </p>
                  </div>
                </li>
              </Reveal>
            ))}
          </ol>
        </div>
      </section>

      {/* Leadership */}
      <section className="container-page py-20 lg:py-28">
        <SectionHeading
          eyebrow="Leadership"
          title="The team behind Bilal Pharmaceuticals."
          description="Experienced people who have spent their careers in poultry health and distribution."
        />
        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {leadership.map((person, i) => (
            <Reveal key={person.name} delay={i * 90}>
              <div className="flex h-full flex-col rounded-2xl border border-line bg-card p-7 text-center">
                <Monogram
                  initials={person.initials}
                  className="mx-auto h-16 w-16 text-xl"
                />
                <h3 className="mt-5 font-display text-lg tracking-tight text-ink">
                  {person.name}
                </h3>
                <p className="mt-1 font-mono text-[0.72rem] uppercase tracking-wider text-emerald">
                  {person.role}
                </p>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                  {person.focus}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <div className="pb-20 lg:pb-28">
        <CtaBand
          eyebrow="Work with us"
          title="Bring trusted brands to your flock."
          description="Partner with a poultry-health distributor that treats quality and reliability as non-negotiable."
          primary={{ label: "Contact our team", href: "/contact" }}
          secondary={{ label: "Explore products", href: "/solutions" }}
          image={photo("brooderHouse", 1600, 70)}
        />
      </div>
    </>
  );
}
