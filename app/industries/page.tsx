import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Check } from "lucide-react";
import { industries } from "@/data/company";
import { img, photo } from "@/lib/images";
import { PageHero } from "@/components/page-hero";
import { SectionHeading } from "@/components/section-heading";
import { Reveal } from "@/components/reveal";
import { ParallaxImage } from "@/components/parallax-image";
import { Icon } from "@/components/icon";
import { Button } from "@/components/ui/button";
import { CtaBand } from "@/components/cta-band";

export const metadata: Metadata = {
  title: "Industries we serve",
  description:
    "From broilers and layers to breeders, hatcheries and integrated production — Bilal Pharmaceuticals supplies the right products for every poultry operation.",
};

export default function IndustriesPage() {
  return (
    <>
      <PageHero
        eyebrow="Industries we serve"
        title="Built for how poultry is produced."
        description="Every operation runs differently. Our health programs are shaped around the birds, the stage and the economics of each — from day-old chicks to integrated production at scale."
        image={photo("farmPanorama", 1900, 70)}
        crumbs={[{ label: "Home", href: "/" }, { label: "Industries" }]}
      />

      <section className="container-page py-20 lg:py-28">
        <SectionHeading
          eyebrow="Applications"
          title="One partner across the production chain."
          description="Five focus areas, each supported by the right products, trusted brands and technical guidance."
        />

        <div className="mt-16 space-y-20 lg:space-y-28">
          {industries.map((item, i) => {
            const flip = i % 2 === 1;
            return (
              <div
                key={item.slug}
                id={item.slug}
                className="grid scroll-mt-28 items-center gap-10 lg:grid-cols-2 lg:gap-16"
              >
                <Reveal
                  variant={flip ? "right" : "left"}
                  className={flip ? "lg:order-2" : ""}
                >
                  <div className="relative aspect-[4/3] overflow-hidden rounded-3xl">
                    <ParallaxImage
                      src={img(item.image, 1100, 78)}
                      alt={item.name}
                      sizes="(min-width: 1024px) 45vw, 90vw"
                      speed={0.14}
                      className="absolute inset-0"
                      imgClassName="transition-transform duration-[1200ms] ease-out hover:scale-105"
                    />
                    <span className="absolute left-5 top-5 z-10 grid h-11 w-11 place-items-center rounded-xl bg-white/15 text-white ring-1 ring-white/25 backdrop-blur-sm">
                      <Icon name={item.icon} size={20} />
                    </span>
                  </div>
                </Reveal>

                <Reveal
                  variant={flip ? "left" : "right"}
                  delay={80}
                  className={flip ? "lg:order-1" : ""}
                >
                  <span className="font-mono text-[0.72rem] uppercase tracking-[0.14em] text-emerald">
                    {String(i + 1).padStart(2, "0")} · {item.tagline}
                  </span>
                  <h3 className="mt-3 font-display text-2xl tracking-tight text-ink sm:text-3xl">
                    {item.name}
                  </h3>
                  <p className="mt-4 text-[0.975rem] leading-relaxed text-muted-foreground">
                    {item.description}
                  </p>
                  <ul className="mt-6 space-y-2.5">
                    {item.points.map((point) => (
                      <li key={point} className="flex gap-3 text-[0.95rem] text-ink">
                        <Check size={18} className="mt-0.5 shrink-0 text-emerald" />
                        {point}
                      </li>
                    ))}
                  </ul>
                  <Button asChild variant="outline" size="lg" className="mt-7">
                    <Link href="/solutions">
                      Relevant products
                      <ArrowRight data-icon="inline-end" />
                    </Link>
                  </Button>
                </Reveal>
              </div>
            );
          })}
        </div>
      </section>

      <div className="pb-20 lg:pb-28">
        <CtaBand
          eyebrow="Tailored supply"
          title="Let's stock the right products for your operation."
          description="Whatever you produce, our team can help you source the right products and brands for your flock."
          primary={{ label: "Talk to our team", href: "/contact" }}
          secondary={{ label: "Explore products", href: "/solutions" }}
          image={photo("eggsCollect", 1600, 70)}
        />
      </div>
    </>
  );
}
