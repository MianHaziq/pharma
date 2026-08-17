import type { Metadata } from "next";
import {
  getAllCategories,
  getProductCountByCategory,
  getFeaturedProducts,
  getBestSellers,
} from "@/lib/catalog";
import { photo } from "@/lib/images";
import { PageHero } from "@/components/page-hero";
import { SectionHeading } from "@/components/section-heading";
import { Reveal } from "@/components/reveal";
import { CategoryCard } from "@/components/portfolio/category-card";
import { ProductCard } from "@/components/portfolio/product-card";
import { CtaBand } from "@/components/cta-band";

export const metadata: Metadata = {
  title: "Solutions & portfolio",
  description:
    "The complete AviCura portfolio — vaccines, antibiotics, nutrition, gut health, biosecurity and more for modern poultry production.",
};

export default function SolutionsPage() {
  const categories = getAllCategories();
  const featured = getFeaturedProducts(8);
  const fill = getBestSellers(8).filter(
    (p) => !featured.some((f) => f.id === p.id),
  );
  const showcase = [...featured, ...fill].slice(0, 8);

  return (
    <>
      <PageHero
        eyebrow="Solutions · Portfolio"
        title="A complete poultry-health portfolio."
        description="180+ registered products across eight therapeutic categories — each developed by our research team, made under GMP and backed by full technical support."
        image={photo("production", 1800, 70)}
        crumbs={[{ label: "Home", href: "/" }, { label: "Solutions" }]}
      />

      {/* Categories */}
      <section className="container-page py-20 lg:py-28">
        <SectionHeading
          eyebrow="Explore by category"
          title="Organised the way a health program is planned."
          description="From day-one protection to gut health, performance nutrition and biosecurity — find the right solution for each challenge and stage."
        />
        <div className="mt-12 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
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
        </div>
      </section>

      {/* Featured products */}
      <section className="border-y border-line bg-mint/40">
        <div className="container-page py-20 lg:py-28">
          <SectionHeading
            eyebrow="Selected products"
            title="A closer look at the range."
            description="Representative products from across the portfolio. Open any product for its composition, benefits and directions for use."
          />
          <div className="mt-12 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {showcase.map((product, i) => (
              <Reveal key={product.id} delay={(i % 4) * 80}>
                <ProductCard product={product} className="h-full" />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <div className="py-20 lg:py-28">
        <CtaBand
          eyebrow="Technical support"
          title="Not sure which solution fits?"
          description="Our poultry veterinarians help design programs around your flock, your challenges and your production system."
          primary={{ label: "Talk to a vet", href: "/contact" }}
          secondary={{ label: "See our research", href: "/research" }}
          image={photo("labPipette", 1600, 70)}
        />
      </div>
    </>
  );
}
