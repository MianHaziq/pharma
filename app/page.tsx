import Link from "next/link";
import { ArrowRight } from "lucide-react";
import {
  getAllCategories,
  getProductCountByCategory,
  getFeaturedProducts,
  getBestSellers,
  getProductsByCategory,
} from "@/lib/catalog";
import { heroBanners, wellnessPromo } from "@/data/banners";
import { blogPosts } from "@/data/blog";

import { Hero } from "@/components/home/hero";
import { Section } from "@/components/section";
import { SectionHeader } from "@/components/section-header";
import { CategoryCard } from "@/components/category/category-card";
import { ProductGrid } from "@/components/product/product-grid";
import { ProductCarousel } from "@/components/product/product-carousel";
import { PromoBanner } from "@/components/home/promo-banner";
import { TrustFeatures } from "@/components/home/trust-features";
import { BrandSection } from "@/components/home/brand-section";
import { BlogCard } from "@/components/blog/blog-card";
import { NewsletterForm } from "@/components/newsletter-form";
import { Button } from "@/components/ui/button";

export default function HomePage() {
  const categories = getAllCategories();
  const featured = getFeaturedProducts(8);
  const bestSellers = getBestSellers(8);
  const wellnessProducts = getProductsByCategory("vitamins").slice(0, 3);

  return (
    <>
      <Hero banner={heroBanners[0]} showcase={featured.slice(0, 3)} />

      {/* Shop by category */}
      <Section id="categories">
        <SectionHeader
          eyebrow="Browse the aisles"
          title="Shop by category"
          description="Everything from everyday medicines to wellness essentials, organised the way you'd expect."
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

      {/* Featured products */}
      <Section spacing="sm">
        <SectionHeader
          eyebrow="Handpicked for you"
          title="Featured products"
          description="Trusted favourites our pharmacists and customers reach for most."
          linkHref="/shop?filter=featured"
        />
        <ProductGrid products={featured} className="mt-8" priorityCount={4} />
      </Section>

      {/* Wellness promo */}
      <Section spacing="sm">
        <PromoBanner banner={wellnessPromo} products={wellnessProducts} variant="brand" />
      </Section>

      {/* Best sellers */}
      <Section spacing="sm">
        <SectionHeader
          eyebrow="Loved by customers"
          title="Best sellers"
          description="The products flying off our shelves this week."
          linkHref="/shop?filter=bestsellers"
        />
        <ProductCarousel products={bestSellers} className="mt-8" />
      </Section>

      {/* Why choose us */}
      <div className="bg-muted/40">
        <Section>
          <SectionHeader
            eyebrow="The VitalCare promise"
            title="Why choose us"
            description="A pharmacy experience built on trust, care and reliability."
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
          title="Popular brands"
          description="Genuine products from the healthcare brands you know."
        />
        <div className="mt-8">
          <BrandSection />
        </div>
      </Section>

      {/* Health & wellness content */}
      <div className="bg-brand-tint/40">
        <Section>
          <SectionHeader
            eyebrow="Health & wellness"
            title="From the VitalCare journal"
            description="Practical, easy-to-read guidance to help you live a little healthier every day."
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
              Stay updated on your health
            </h2>
            <p className="mx-auto mt-3 max-w-md text-sm text-primary-foreground/85 sm:text-base">
              Get health tips, exclusive offers and product updates delivered
              straight to your inbox.
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

      {/* Prescription helper strip */}
      <Section spacing="sm" className="pb-16">
        <div className="flex flex-col items-center justify-between gap-4 rounded-2xl border border-border bg-card p-6 text-center sm:flex-row sm:text-left">
          <div>
            <h3 className="font-display text-xl font-semibold text-foreground">
              Have a prescription?
            </h3>
            <p className="mt-1 text-sm text-muted-foreground">
              Upload your prescription and our pharmacists will handle the rest.
            </p>
          </div>
          <Button asChild size="lg" variant="outline" className="gap-2">
            <Link href="/shop?filter=prescription">
              Prescription medicines
              <ArrowRight size={17} />
            </Link>
          </Button>
        </div>
      </Section>
    </>
  );
}
