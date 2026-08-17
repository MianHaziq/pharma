import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { blogPosts } from "@/data/blog";
import { postImage } from "@/lib/portfolio";
import { formatDate } from "@/lib/format";
import { photo } from "@/lib/images";
import { PageHero } from "@/components/page-hero";
import { Reveal } from "@/components/reveal";
import { Photo } from "@/components/photo";
import { ArticleCard } from "@/components/insights/article-card";
import { CtaBand } from "@/components/cta-band";

export const metadata: Metadata = {
  title: "Insights",
  description:
    "Practical guidance on poultry health, nutrition, biosecurity and flock management from the AviCura technical team.",
};

export default function InsightsPage() {
  const [featured, ...rest] = blogPosts;
  const categories = Array.from(new Set(blogPosts.map((p) => p.category)));

  return (
    <>
      <PageHero
        eyebrow="Insights & newsroom"
        title="Knowledge from the field."
        description="Field notes, guidance and company news from the veterinarians and scientists behind AviCura."
        image={photo("henPortrait", 1800, 70)}
        crumbs={[{ label: "Home", href: "/" }, { label: "Insights" }]}
      />

      <section className="container-page py-20 lg:py-24">
        {/* Category chips */}
        <div className="flex flex-wrap gap-2">
          <span className="rounded-full bg-emerald px-3.5 py-1.5 font-mono text-[0.72rem] tracking-wide text-white">
            All
          </span>
          {categories.map((c) => (
            <span
              key={c}
              className="rounded-full border border-line bg-card px-3.5 py-1.5 font-mono text-[0.72rem] tracking-wide text-muted-foreground"
            >
              {c}
            </span>
          ))}
        </div>

        {/* Featured */}
        {featured && (
          <Reveal className="mt-10">
            <Link
              href={`/insights/${featured.slug}`}
              className="group grid overflow-hidden rounded-3xl border border-line bg-card lg:grid-cols-2"
            >
              <Photo
                src={postImage(featured, 1200, 80)}
                alt={featured.title}
                priority
                sizes="(min-width: 1024px) 50vw, 100vw"
                className="aspect-[16/10] lg:aspect-auto lg:h-full"
                imgClassName="transition-transform duration-700 group-hover:scale-105"
              >
                <span className="absolute left-5 top-5 rounded-md bg-emerald-deep/80 px-2.5 py-1 font-mono text-[0.64rem] font-medium uppercase tracking-wider text-white backdrop-blur-sm">
                  Featured
                </span>
              </Photo>
              <div className="flex flex-col justify-center p-8 lg:p-12">
                <div className="flex items-center gap-2 font-mono text-[0.72rem] tracking-wide text-muted-foreground">
                  <span className="text-emerald">{featured.category}</span>
                  <span className="text-line-strong">·</span>
                  <time dateTime={featured.date}>{formatDate(featured.date)}</time>
                  <span className="text-line-strong">·</span>
                  <span>{featured.readTime}</span>
                </div>
                <h2 className="mt-4 font-display text-2xl leading-tight tracking-tight text-ink transition-colors group-hover:text-emerald sm:text-3xl">
                  {featured.title}
                </h2>
                <p className="mt-4 text-[0.975rem] leading-relaxed text-muted-foreground">
                  {featured.excerpt}
                </p>
                <span className="mt-6 inline-flex items-center gap-2 text-sm font-medium text-emerald">
                  Read article
                  <ArrowRight
                    size={16}
                    className="transition-transform duration-300 group-hover:translate-x-1"
                  />
                </span>
              </div>
            </Link>
          </Reveal>
        )}

        {/* Grid */}
        <div className="mt-8 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {rest.map((post, i) => (
            <Reveal key={post.id} delay={(i % 3) * 80}>
              <ArticleCard post={post} className="h-full" />
            </Reveal>
          ))}
        </div>
      </section>

      <div className="pb-20 lg:pb-28">
        <CtaBand
          eyebrow="Stay informed"
          title="Get AviCura insights in your inbox."
          description="Occasional field notes, product updates and company news — no noise."
          primary={{ label: "Contact our team", href: "/contact" }}
          secondary={{ label: "Explore solutions", href: "/solutions" }}
        />
      </div>
    </>
  );
}
