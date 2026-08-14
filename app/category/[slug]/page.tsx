import type { Metadata } from "next";
import { notFound } from "next/navigation";
import {
  getAllCategories,
  getCategoryBySlug,
  getProductsByCategory,
  getPriceBounds,
  getBrandById,
} from "@/lib/catalog";
import { getTint } from "@/lib/tones";
import { Breadcrumbs } from "@/components/breadcrumbs";
import { ProductBrowser } from "@/components/shop/product-browser";
import { Icon } from "@/components/icon";

export function generateStaticParams() {
  return getAllCategories().map((c) => ({ slug: c.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const category = getCategoryBySlug(slug);
  if (!category) return { title: "Category not found" };
  return {
    title: category.name,
    description: category.description,
  };
}

export default async function CategoryPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const category = getCategoryBySlug(slug);
  if (!category) notFound();

  const products = getProductsByCategory(slug);
  const bounds = getPriceBounds(products);
  const tint = getTint(category.tone);
  const allCategories = getAllCategories();

  // Scope the brand filter to brands present in this category.
  const brandIds = Array.from(new Set(products.map((p) => p.brandId)));
  const brands = brandIds
    .map((id) => getBrandById(id))
    .filter((b): b is NonNullable<typeof b> => Boolean(b));

  return (
    <div className="pb-6">
      {/* Category banner */}
      <div className="border-b border-border" style={{ backgroundColor: tint.bg }}>
        <div className="container-page py-8 sm:py-12">
          <Breadcrumbs
            items={[
              { label: "Home", href: "/" },
              { label: "Shop", href: "/shop" },
              { label: category.name },
            ]}
          />
          <div className="mt-5 flex items-start gap-4 sm:gap-5">
            <span
              className="grid h-14 w-14 shrink-0 place-items-center rounded-2xl bg-card shadow-sm sm:h-16 sm:w-16"
              style={{ color: tint.icon }}
            >
              <Icon name={category.icon} size={28} strokeWidth={1.75} />
            </span>
            <div className="max-w-2xl">
              <span
                className="text-xs font-semibold uppercase tracking-[0.08em]"
                style={{ color: tint.text }}
              >
                {category.tagline}
              </span>
              <h1 className="mt-1 font-display text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
                {category.name}
              </h1>
              <p className="mt-2 text-sm leading-relaxed text-foreground/70 sm:text-base">
                {category.description}
              </p>
              <p className="tnum mt-3 text-sm font-medium text-foreground/60">
                {products.length} products available
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="container-page mt-8">
        <ProductBrowser
          products={products}
          categories={allCategories}
          brands={brands}
          bounds={bounds}
          showCategoryFilter={false}
          subcategories={category.subcategories}
          emptyHref={`/category/${slug}`}
        />
      </div>
    </div>
  );
}
