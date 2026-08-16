import Link from "next/link";
import { ArrowRight, Egg, Bird, Drumstick, Feather } from "lucide-react";
import {
  getAllCategories,
  getProductCountByCategory,
  getFeaturedProducts,
  getBestSellers,
  getProductsByCategory,
} from "@/lib/catalog";
import { heroBanners, wellnessPromo, campaignBanner, promoCards } from "@/data/banners";
import { blogPosts } from "@/data/blog";

import { HeroCarousel } from "@/components/home/hero-carousel";
import { Section } from "@/components/section";
import { SectionHeader } from "@/components/section-header";
import { CategoryCard } from "@/components/category/category-card";
import { ProductGrid } from "@/components/product/product-grid";
import { ProductCarousel } from "@/components/product/product-carousel";
import { PromoBanner } from "@/components/home/promo-banner";
import { FeatureBanner } from "@/components/home/feature-banner";
import { PromoGrid } from "@/components/home/promo-grid";
import { TrustFeatures } from "@/components/home/trust-features";
import { BrandSection } from "@/components/home/brand-section";
import { BlogCard } from "@/components/blog/blog-card";
import { NewsletterForm } from "@/components/newsletter-form";
import { Button } from "@/components/ui/button";

const flockStages = [
  { icon: Egg, label: "Day-old chicks" },
  { icon: Bird, label: "Broilers" },
  { icon: Drumstick, label: "Layers" },
  { icon: Feather, label: "Breeders" },
];

export default function HomePage() {
  const categories = getAllCategories();
  const featured = getFeaturedProducts(8);
  const bestSellers = getBestSellers(8);
  const wellnessProducts = getProductsByCategory("vitamins-electrolytes").slice(0, 3);

  return (
    <>
      <HeroCarousel banners={heroBanners} showcase={featured.slice(0, 3)} />

      {/* Flock lifecycle strip */}
      <div className="border-b border-border bg-card">
        <div className="container-page flex flex-col items-center gap-4 py-5 sm:flex-row sm:justify-between">
          <p className="text-sm font-semibold text-foreground">
            Health for every stage of the flock
          </p>
          <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-3">
            {flockStages.map((stage) => (
              <span
                key={stage.label}
                className="flex items-center gap-2 text-sm font-medium text-muted-foreground"
              >
                <span className="grid h-8 w-8 place-items-center rounded-full bg-brand-tint text-brand">
                  <stage.icon size={16} />
                </span>
                {stage.label}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Shop by category */}
      <Section id="categories">
        <SectionHeader
          eyebrow="Browse the range"
          title="Shop by category"
          description="From vaccines and antibiotics to biosecurity and feed supplements — organised the way a farm thinks."
          linkHref="/shop"
          linkLabel="All products"
        />
        <div className="mt-8 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
          {categories.map((cat) => (
            <CategoryCard
              key={cat.id}
              category={cat}
              productCount={getProductCountByCategory(cat.slug)}
            />
          ))}
        </div>
      </Section>

      {/* Vaccination campaign banner */}
      <Section spacing="sm">
        <FeatureBanner banner={campaignBanner} />
      </Section>

      {/* Featured products */}
      <Section spacing="sm">
        <SectionHeader
          eyebrow="Handpicked for you"
          title="Featured products"
          description="Trusted essentials our veterinary team and farmers reach for most."
          linkHref="/shop?filter=featured"
        />
        <ProductGrid products={featured} className="mt-8" priorityCount={4} />
      </Section>

      {/* Vitamins promo */}
      <Section spacing="sm">
        <PromoBanner banner={wellnessPromo} products={wellnessProducts} variant="brand" />
      </Section>

      {/* Promo grid: biosecurity + distributor */}
      <Section spacing="sm">
        <PromoGrid cards={promoCards} />
      </Section>

      {/* Best sellers */}
      <Section spacing="sm">
        <SectionHeader
          eyebrow="Loved by farmers"
          title="Best sellers"
          description="The products moving fastest across farms this week."
          linkHref="/shop?filter=bestsellers"
        />
        <ProductCarousel products={bestSellers} className="mt-8" />
      </Section>

      {/* Why choose us */}
      <div className="bg-muted/40">
        <Section>
          <SectionHeader
            eyebrow="The PoultriMed promise"
            title="Why choose us"
            description="A poultry-health partner built on genuine products, cold-chain and reliable delivery."
            align="center"
          />
          <div className="mt-10">
            <TrustFeatures />
          </div>
        </Section>
      </div>

      {/* Popular brands */}
      <Section>
        <SectionHeader
          eyebrow="Trusted names"
          title="Brands we carry"
          description="Genuine products from the animal-health brands you know — plus our own GMP-certified range."
        />
        <div className="mt-8">
          <BrandSection />
        </div>
      </Section>

      {/* Poultry guides content */}
      <div className="bg-brand-tint/40">
        <Section>
          <SectionHeader
            eyebrow="Poultry health & management"
            title="From the PoultriMed journal"
            description="Practical, easy-to-read guidance to help you run a healthier, more productive flock."
            linkHref="/blog"
            linkLabel="All articles"
          />
          <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {blogPosts.map((post) => (
              <BlogCard key={post.id} post={post} />
            ))}
          </div>
        </Section>
      </div>

      {/* Newsletter CTA */}
      <Section>
        <div className="relative overflow-hidden rounded-2xl bg-brand-deep px-6 py-12 text-center text-primary-foreground sm:px-12 sm:py-16">
          <div className="mx-auto max-w-xl">
            <span className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.08em] text-primary-foreground/80">
              <span aria-hidden>+</span> Join the community
            </span>
            <h2 className="mt-3 font-display text-3xl font-semibold tracking-tight sm:text-4xl">
              Poultry health tips in your inbox
            </h2>
            <p className="mx-auto mt-3 max-w-md text-sm text-primary-foreground/85 sm:text-base">
              Get flock-health tips, seasonal reminders, exclusive offers and
              product updates — straight to your inbox.
            </p>
            <div className="mx-auto mt-7 max-w-md">
              <NewsletterForm className="[&_input]:bg-card [&_input]:text-foreground" />
            </div>
            <p className="mt-4 text-xs text-primary-foreground/70">
              No spam. Unsubscribe any time.
            </p>
          </div>
        </div>
      </Section>

      {/* Bulk / distributor strip */}
      <Section spacing="sm" className="pb-16">
        <div className="flex flex-col items-center justify-between gap-4 rounded-2xl border border-border bg-card p-6 text-center sm:flex-row sm:text-left">
          <div>
            <h3 className="font-display text-xl font-semibold text-foreground">
              Managing a large flock?
            </h3>
            <p className="mt-1 text-sm text-muted-foreground">
              Talk to our veterinary team for bulk pricing, vaccination
              programmes and technical support.
            </p>
          </div>
          <Button asChild size="lg" variant="outline" className="gap-2">
            <Link href="/contact">
              Contact our team
              <ArrowRight size={17} />
            </Link>
          </Button>
        </div>
      </Section>
    </>
  );
}
