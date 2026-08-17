import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowRight } from "lucide-react";
import {
  getAllCategories,
  getCategoryBySlug,
  getProductsByCategory,
} from "@/lib/catalog";
import { categoryImage } from "@/lib/portfolio";
import { PageHero } from "@/components/page-hero";
import { Reveal } from "@/components/reveal";
import { Icon } from "@/components/icon";
import { ProductCard } from "@/components/portfolio/product-card";
import { CtaBand } from "@/components/cta-band";

export function generateStaticParams() {
  return getAllCategories().map((c) => ({ category: c.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ category: string }>;
}): Promise<Metadata> {
  const { category } = await params;
  const cat = getCategoryBySlug(category);
  if (!cat) return { title: "Category not found" };
  return { title: cat.name, description: cat.description };
}

export default async function CategoryPage({
  params,
}: {
  params: Promise<{ category: string }>;
}) {
  const { category } = await params;
  const cat = getCategoryBySlug(category);
  if (!cat) notFound();

  const products = getProductsByCategory(cat.slug);
  const others = getAllCategories().filter((c) => c.slug !== cat.slug);

  return (
    <>
      <PageHero
        eyebrow={`Solutions · ${cat.tagline}`}
        title={cat.name}
        description={cat.description}
        image={categoryImage(cat.slug, 1800, 70)}
        crumbs={[
          { label: "Home", href: "/" },
          { label: "Solutions", href: "/solutions" },
          { label: cat.name },
        ]}
      >
        {cat.subcategories.length > 0 && (
          <div className="flex flex-wrap gap-2">
            {cat.subcategories.map((sub) => (
              <span
                key={sub.id}
                className="rounded-full border border-white/15 bg-white/5 px-3.5 py-1.5 font-mono text-[0.72rem] tracking-wide text-white/75"
              >
                {sub.name}
              </span>
            ))}
          </div>
        )}
      </PageHero>

      {/* Products */}
      <section className="container-page py-20 lg:py-24">
        <div className="flex items-end justify-between">
          <div>
            <span className="eyebrow text-emerald">The range</span>
            <h2 className="mt-4 font-display text-3xl tracking-tight text-ink">
              {products.length} product{products.length === 1 ? "" : "s"} in this
              category
            </h2>
          </div>
        </div>

        {products.length > 0 ? (
          <div className="mt-12 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {products.map((product, i) => (
              <Reveal key={product.id} delay={(i % 4) * 70}>
                <ProductCard product={product} className="h-full" />
              </Reveal>
            ))}
          </div>
        ) : (
          <p className="mt-10 text-muted-foreground">
            Products in this category are being catalogued.{" "}
            <Link href="/contact" className="text-emerald hover:underline">
              Contact our team
            </Link>{" "}
            for the current range.
          </p>
        )}
      </section>

      {/* Other categories */}
      <section className="border-t border-line bg-mint/40">
        <div className="container-page py-16 lg:py-20">
          <span className="eyebrow text-emerald">Continue exploring</span>
          <h2 className="mt-4 font-display text-2xl tracking-tight text-ink">
            Other categories
          </h2>
          <div className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {others.map((c) => (
              <Link
                key={c.id}
                href={`/solutions/${c.slug}`}
                className="group flex items-center gap-3 rounded-xl border border-line bg-card p-4 transition-colors hover:border-emerald/30"
              >
                <span className="grid h-10 w-10 shrink-0 place-items-center rounded-lg bg-mint text-emerald ring-1 ring-emerald/10">
                  <Icon name={c.icon} size={18} />
                </span>
                <span className="min-w-0 flex-1 truncate text-sm font-medium text-ink">
                  {c.name}
                </span>
                <ArrowRight
                  size={16}
                  className="text-emerald transition-transform group-hover:translate-x-1"
                />
              </Link>
            ))}
          </div>
        </div>
      </section>

      <div className="py-20 lg:py-28">
        <CtaBand
          title="Need help choosing a program?"
          description="Our veterinary team designs vaccination and health programs tailored to your operation."
          primary={{ label: "Contact our team", href: "/contact" }}
          secondary={{ label: "Back to portfolio", href: "/solutions" }}
        />
      </div>
    </>
  );
}
