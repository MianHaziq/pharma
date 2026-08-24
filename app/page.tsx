import Link from "next/link";
import { ArrowRight } from "lucide-react";

import {
  getAllCategories,
  getProductCountByCategory,
  getFeaturedProducts,
  getBestSellers,
} from "@/lib/catalog";
import { blogPosts } from "@/data/blog";
import {
  stats,
  differentiators,
  researchPillars,
  certifications,
  industries,
  missionVision,
} from "@/data/company";
import { photo } from "@/lib/images";

import { Hero } from "@/components/home/hero";
import { PartnerMarquee } from "@/components/home/partner-marquee";
import { CapabilitiesBand } from "@/components/home/capabilities-band";
import { SectionHeading } from "@/components/section-heading";
import { Reveal } from "@/components/reveal";
import { ParallaxImage } from "@/components/parallax-image";
import { StatStrip } from "@/components/stat-strip";
import { Icon } from "@/components/icon";
import { CategoryCard } from "@/components/portfolio/category-card";
import { ProductCard } from "@/components/portfolio/product-card";
import { ArticleCard } from "@/components/insights/article-card";
import { IndustryCard } from "@/components/industry-card";
import { MobileShowMore } from "@/components/mobile-show-more";
import { Testimonials } from "@/components/testimonials";
import { CtaBand } from "@/components/cta-band";
import { Button } from "@/components/ui/button";

export default function HomePage() {
  const categories = getAllCategories();
  const featured = getFeaturedProducts(8);
  const fill = getBestSellers(8).filter(
    (p) => !featured.some((f) => f.id === p.id),
  );
  const showcase = [...featured, ...fill].slice(0, 8);

  return (
    <>
      <Hero />

      {/* Trusted-by strip */}
      <section className="overflow-hidden border-b border-line bg-card">
        <div className="container-page flex flex-col gap-6 py-8 lg:flex-row lg:items-center lg:gap-12">
          <p className="shrink-0 font-mono text-[0.7rem] uppercase tracking-[0.16em] text-muted-foreground">
            Brands we
            <br className="hidden lg:block" /> import &amp; distribute
          </p>
          <div className="w-full min-w-0 overflow-hidden lg:flex-1">
            <PartnerMarquee />
          </div>
        </div>
      </section>

      {/* Company introduction */}
      <section className="container-page py-20 lg:py-28">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <div className="relative">
            <Reveal variant="clip" className="relative aspect-[4/5]">
              <div className="absolute inset-0 overflow-hidden rounded-3xl">
                <ParallaxImage
                  src={photo("labScientist", 1100, 80)}
                  alt="Quality poultry-health products distributed by Bilal Pharmaceuticals"
                  sizes="(min-width: 1024px) 45vw, 90vw"
                  speed={0.12}
                  className="absolute inset-0"
                  imgClassName="transition-transform duration-[1200ms] ease-out hover:scale-105"
                />
              </div>
            </Reveal>
            {/* Floating credential card */}
            <Reveal
              variant="scale"
              delay={300}
              className="absolute -bottom-6 -right-4 hidden w-60 rounded-2xl border border-line bg-card p-5 shadow-[var(--shadow-elevated)] sm:block"
            >
              <div className="font-display text-4xl font-medium tracking-tight text-emerald">
                12<span className="text-gold">+</span>
              </div>
              <p className="mt-1 text-sm font-medium text-ink">
                Leading brands distributed
              </p>
              <p className="mt-1 font-mono text-[0.68rem] tracking-wide text-muted-foreground">
                One trusted supply partner
              </p>
            </Reveal>
          </div>

          <div>
            <SectionHeading
              eyebrow="Who we are"
              title="Your trusted poultry-health distribution partner."
              description="Bilal Pharmaceuticals imports and distributes the vaccines, medicines, nutrition and biosecurity products that keep flocks healthy — sourcing from the world's leading animal-health brands and backing every product with reliable supply and expert support."
            />
            <div className="mt-8 grid gap-5 sm:grid-cols-2">
              <Reveal variant="left" className="rounded-2xl border border-line bg-card p-6 transition-shadow duration-300 hover:shadow-[var(--shadow-card)]">
                <span className="eyebrow-plain text-emerald">Our mission</span>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                  {missionVision.mission}
                </p>
              </Reveal>
              <Reveal variant="right" delay={100} className="rounded-2xl border border-line bg-card p-6 transition-shadow duration-300 hover:shadow-[var(--shadow-card)]">
                <span className="eyebrow-plain text-emerald">Our vision</span>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                  {missionVision.vision}
                </p>
              </Reveal>
            </div>
            <Reveal delay={160} className="mt-8">
              <Button asChild size="xl" variant="outline">
                <Link href="/about">
                  More about Bilal Pharmaceuticals
                  <ArrowRight data-icon="inline-end" />
                </Link>
              </Button>
            </Reveal>
          </div>
        </div>

        <Reveal className="mt-16 lg:mt-20">
          <StatStrip stats={stats} />
        </Reveal>
      </section>

      {/* Solutions / portfolio */}
      <section className="border-y border-line bg-mint/40">
        <div className="container-page py-20 lg:py-28">
          <SectionHeading
            eyebrow="Product portfolio"
            title="Solutions for every stage of the flock."
            description="A complete, categorised range — from vaccines and antibiotics to nutrition and biosecurity — organised the way a poultry health program is planned."
            linkHref="/solutions"
            linkLabel="Full portfolio"
          />
          <MobileShowMore
            initial={4}
            label="Show all categories"
            className="mt-12 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4"
          >
            {categories.map((cat, i) => (
              <Reveal key={cat.id} delay={(i % 4) * 80}>
                <CategoryCard
                  category={cat}
                  index={i}
                  count={getProductCountByCategory(cat.slug)}
                  className="h-full"
                />
              </Reveal>
            ))}
          </MobileShowMore>
        </div>
      </section>

      {/* Manufacturing scale — cinematic full-bleed storytelling band */}
      <CapabilitiesBand />

      {/* Why choose us */}
      <section className="container-page py-20 lg:py-28">
        <SectionHeading
          eyebrow="Why Bilal Pharmaceuticals"
          title="Reasons producers choose us."
          description="The advantages that show up on the farm — in flock performance, supply reliability and the confidence that every dose is exactly what the label says."
        />
        <div className="mt-12 grid gap-px overflow-hidden rounded-2xl border border-line bg-line sm:grid-cols-2 lg:grid-cols-3">
          {differentiators.map((d, i) => (
            <Reveal key={d.title} delay={(i % 3) * 80} className="bg-card">
              <div className="group h-full p-7 transition-colors hover:bg-mint/40">
                <span className="grid h-12 w-12 place-items-center rounded-xl bg-mint text-emerald ring-1 ring-emerald/10 transition-colors group-hover:bg-emerald group-hover:text-white">
                  <Icon name={d.icon} size={22} />
                </span>
                <h3 className="mt-5 font-display text-lg tracking-tight text-ink">
                  {d.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {d.description}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Research & innovation */}
      <section className="relative overflow-hidden bg-emerald-deep">
        <ParallaxImage
          src={photo("labMolecular", 1600, 70)}
          alt=""
          sizes="100vw"
          speed={0.18}
          className="absolute inset-0"
          imgClassName="opacity-15"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-emerald-deep via-emerald-deep/95 to-emerald-950" />
        <div className="pointer-events-none absolute inset-0 bg-grid-dark opacity-30" />
        <div className="container-page relative py-20 lg:py-28">
          <SectionHeading
            dark
            align="center"
            eyebrow="Why source through us"
            title="More than a supplier — a poultry-health partner."
            description="From global sourcing and cold-chain storage to hands-on technical guidance, we make it easy to get the right products, in the right condition, with the support to use them well."
          />
          <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {researchPillars.map((p, i) => (
              <Reveal key={p.title} delay={i * 90}>
                <div className="h-full rounded-2xl border border-white/10 bg-white/[0.04] p-6 backdrop-blur-sm transition-colors hover:border-gold/30 hover:bg-white/[0.07]">
                  <span className="grid h-12 w-12 place-items-center rounded-xl bg-gold/15 text-gold-soft ring-1 ring-gold/20">
                    <Icon name={p.icon} size={22} />
                  </span>
                  <h3 className="mt-5 font-display text-lg tracking-tight text-white">
                    {p.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-white/65">
                    {p.description}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
          <Reveal className="mt-12 text-center">
            <Button asChild size="xl" variant="onDark">
              <Link href="/research">
                See the brands we distribute
                <ArrowRight data-icon="inline-end" />
              </Link>
            </Button>
          </Reveal>
        </div>
      </section>

      {/* Featured products */}
      <section className="container-page py-20 lg:py-28">
        <SectionHeading
          eyebrow="From the range"
          title="Featured products."
          description="A selection from a broad portfolio of poultry-health products from the world's leading brands — each backed by full documentation and technical support."
          linkHref="/solutions"
          linkLabel="View all products"
        />
        <MobileShowMore
          initial={4}
          label="Show more products"
          className="mt-12 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4"
        >
          {showcase.map((product, i) => (
            <Reveal key={product.id} delay={(i % 4) * 80}>
              <ProductCard product={product} className="h-full" />
            </Reveal>
          ))}
        </MobileShowMore>
      </section>

      {/* Quality & certifications */}
      <section className="border-y border-line bg-mint/40">
        <div className="container-page py-20 lg:py-28">
          <div className="grid gap-12 lg:grid-cols-[1fr_1.15fr] lg:items-center lg:gap-16">
            <div>
              <SectionHeading
                eyebrow="Quality & handling"
                title="Quality protected, every step of the way."
                description="We source only from trusted manufacturers and protect every product through proper storage, cold-chain handling and lot-level traceability — from arrival to your farm gate."
                linkHref="/quality"
                linkLabel="How we protect quality"
              />
            </div>
            <div className="grid grid-cols-2 gap-4 sm:grid-cols-3">
              {certifications.map((c, i) => (
                <Reveal key={c.code} delay={(i % 3) * 70}>
                  <div className="flex h-full flex-col rounded-2xl border border-line bg-card p-5 transition-shadow hover:shadow-[var(--shadow-card)]">
                    <span className="font-display text-2xl font-medium tracking-tight text-emerald">
                      {c.code}
                    </span>
                    <span className="mt-2 text-xs font-medium text-ink">
                      {c.name}
                    </span>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Industries */}
      <section className="container-page py-20 lg:py-28">
        <SectionHeading
          eyebrow="Industries we serve"
          title="Built for how poultry is produced."
          description="From day-old chicks to integrated production at scale, our programs adapt to the realities of each operation."
          linkHref="/industries"
          linkLabel="All industries"
        />
        <div className="mt-12 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-6">
          {industries.map((item, i) => (
            <Reveal
              key={item.slug}
              delay={(i % 3) * 80}
              className={i < 2 ? "lg:col-span-3" : "lg:col-span-2"}
            >
              <IndustryCard item={item} className="h-full" priority={i < 2} />
            </Reveal>
          ))}
        </div>
      </section>

      {/* Testimonials */}
      <section className="border-y border-line bg-mint/40">
        <div className="container-page py-20 lg:py-28">
          <SectionHeading
            eyebrow="In their words"
            title="Trusted by the people who raise the flock."
            align="center"
          />
          <div className="mt-14">
            <Testimonials />
          </div>
        </div>
      </section>

      {/* Insights */}
      <section className="container-page py-20 lg:py-28">
        <SectionHeading
          eyebrow="Insights"
          title="Knowledge from the field."
          description="Practical guidance on poultry health and management from the Bilal Pharmaceuticals technical team."
          linkHref="/insights"
          linkLabel="All insights"
        />
        <div className="mt-12 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {blogPosts.map((post, i) => (
            <Reveal key={post.id} delay={(i % 4) * 80}>
              <ArticleCard post={post} className="h-full" />
            </Reveal>
          ))}
        </div>
      </section>

      {/* Closing CTA */}
      <div className="pb-20 lg:pb-28">
        <CtaBand
          eyebrow="Let's work together"
          title="Let's build a healthier future for poultry."
          description="Talk to our veterinary and commercial team about vaccination programs, product supply and distribution partnerships."
          primary={{ label: "Contact our team", href: "/contact" }}
          secondary={{ label: "Explore the portfolio", href: "/solutions" }}
          image={photo("flockField", 1600, 70)}
        />
      </div>
    </>
  );
}
