import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  FileText,
  Truck,
  RotateCcw,
  ShieldCheck,
  BadgeCheck,
  Check,
} from "lucide-react";
import {
  getAllProducts,
  getProductBySlug,
  getBrandName,
  getBrandById,
  getCategoryBySlug,
  getRelatedProducts,
  getFrequentlyBoughtTogether,
} from "@/lib/catalog";
import { discountPercent, savingsAmount, formatPrice } from "@/lib/format";
import { Breadcrumbs } from "@/components/breadcrumbs";
import { Section } from "@/components/section";
import { SectionHeader } from "@/components/section-header";
import { ProductGallery } from "@/components/product/product-gallery";
import { ProductPurchase } from "@/components/product/product-purchase";
import { ProductReviews } from "@/components/product/product-reviews";
import { FrequentlyBought } from "@/components/product/frequently-bought";
import { ProductGrid } from "@/components/product/product-grid";
import { Rating } from "@/components/product/rating";
import { Price } from "@/components/product/price";
import { PrescriptionBadge, StockStatus } from "@/components/product/product-badges";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs";

export function generateStaticParams() {
  return getAllProducts().map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const product = getProductBySlug(slug);
  if (!product) return { title: "Product not found" };
  return {
    title: product.name,
    description: product.shortDescription,
  };
}

const deliveryInfo = [
  { icon: Truck, title: "Free delivery over Rs. 3,000", desc: "Same-day dispatch before 4pm" },
  { icon: RotateCcw, title: "Easy 7-day returns", desc: "On eligible non-prescription items" },
  { icon: ShieldCheck, title: "Secure checkout", desc: "Encrypted payments & COD" },
];

export default async function ProductPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const product = getProductBySlug(slug);
  if (!product) notFound();

  const brand = getBrandName(product.brandId);
  const brandData = getBrandById(product.brandId);
  const category = getCategoryBySlug(product.categorySlug);
  const percent = discountPercent(product);
  const savings = savingsAmount(product);
  const related = getRelatedProducts(product, 4);
  const fbt = [product, ...getFrequentlyBoughtTogether(product, 2)];

  const tabs = [
    { value: "description", label: "Description", content: product.description },
    product.usage && { value: "usage", label: "Directions", content: product.usage },
    product.ingredients && {
      value: "ingredients",
      label: "Ingredients",
      list: product.ingredients,
    },
    product.warnings && { value: "warnings", label: "Warnings", content: product.warnings },
  ].filter(Boolean) as {
    value: string;
    label: string;
    content?: string;
    list?: string[];
  }[];

  return (
    <div className="pb-4">
      <div className="container-page py-6">
        <Breadcrumbs
          items={[
            { label: "Home", href: "/" },
            { label: "Shop", href: "/shop" },
            ...(category
              ? [{ label: category.name, href: `/category/${category.slug}` }]
              : []),
            { label: product.name },
          ]}
        />

        {/* Main */}
        <div className="mt-6 grid gap-8 lg:grid-cols-2 lg:gap-12">
          <ProductGallery
            images={product.images}
            alt={product.name}
            discountPercent={percent}
          />

          {/* Buy box */}
          <div>
            <div className="flex items-center gap-3">
              <Link
                href={`/shop?brand=${product.brandId}`}
                className="text-sm font-semibold uppercase tracking-wide text-brand hover:text-brand-deep"
              >
                {brand}
              </Link>
              {product.requiresPrescription && <PrescriptionBadge />}
            </div>

            <h1 className="mt-2 font-display text-3xl font-semibold leading-tight tracking-tight text-foreground sm:text-4xl">
              {product.name}
            </h1>

            <div className="mt-3 flex flex-wrap items-center gap-x-4 gap-y-2">
              <Rating value={product.rating} size="md" showValue />
              <a href="#reviews" className="text-sm text-muted-foreground hover:text-brand">
                {product.reviewCount.toLocaleString()} reviews
              </a>
              <span className="text-border">|</span>
              <StockStatus stock={product.stock} />
            </div>

            {/* Price */}
            <div className="mt-5 flex flex-wrap items-end gap-3">
              <Price price={product.price} originalPrice={product.originalPrice} size="lg" />
              {percent > 0 && (
                <span className="tnum mb-1 rounded-full bg-sale/10 px-2.5 py-1 text-xs font-semibold text-sale">
                  Save {formatPrice(savings)} ({percent}%)
                </span>
              )}
            </div>
            {product.packSize && (
              <p className="mt-1.5 text-sm text-muted-foreground">
                Pack size: <span className="font-medium text-foreground">{product.packSize}</span>
              </p>
            )}

            <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
              {product.shortDescription}
            </p>

            {/* Prescription notice */}
            {product.requiresPrescription && (
              <div className="mt-5 flex gap-3 rounded-xl border border-brand/20 bg-brand-tint/60 p-4">
                <FileText size={20} className="mt-0.5 shrink-0 text-brand" />
                <div>
                  <p className="text-sm font-semibold text-brand-deep">
                    Prescription required
                  </p>
                  <p className="mt-1 text-sm text-foreground/70">
                    Add to cart and upload your prescription at checkout. Our
                    pharmacist will verify it before dispatch.{" "}
                    <span className="italic">
                      Demo only — no real verification is performed.
                    </span>
                  </p>
                </div>
              </div>
            )}

            {/* Purchase */}
            <div className="mt-6 border-t border-border pt-6">
              <ProductPurchase product={product} />
            </div>

            {/* Key benefits */}
            {product.keyBenefits && product.keyBenefits.length > 0 && (
              <div className="mt-6 rounded-xl border border-border bg-muted/40 p-5">
                <h2 className="text-sm font-semibold text-foreground">Key benefits</h2>
                <ul className="mt-3 space-y-2">
                  {product.keyBenefits.map((benefit) => (
                    <li key={benefit} className="flex items-start gap-2.5 text-sm text-foreground/80">
                      <Check size={16} className="mt-0.5 shrink-0 text-brand" />
                      {benefit}
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* Delivery info */}
            <div className="mt-6 grid gap-3 sm:grid-cols-3">
              {deliveryInfo.map((info) => (
                <div key={info.title} className="flex items-start gap-2.5 rounded-lg border border-border p-3">
                  <info.icon size={18} className="mt-0.5 shrink-0 text-brand" />
                  <div>
                    <p className="text-xs font-semibold text-foreground">{info.title}</p>
                    <p className="mt-0.5 text-[11px] text-muted-foreground">{info.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Details tabs */}
      <Section spacing="md">
        <div className="grid gap-10 lg:grid-cols-[1fr_320px]">
          <div>
            <Tabs defaultValue={tabs[0]?.value} className="w-full">
              <TabsList className="h-auto flex-wrap justify-start gap-1 bg-transparent p-0">
                {tabs.map((tab) => (
                  <TabsTrigger
                    key={tab.value}
                    value={tab.value}
                    className="rounded-lg border border-transparent px-4 py-2 text-sm data-[state=active]:border-border data-[state=active]:bg-card data-[state=active]:shadow-sm"
                  >
                    {tab.label}
                  </TabsTrigger>
                ))}
              </TabsList>
              {tabs.map((tab) => (
                <TabsContent key={tab.value} value={tab.value} className="pt-5">
                  {tab.list ? (
                    <ul className="space-y-2">
                      {tab.list.map((item) => (
                        <li key={item} className="flex items-start gap-2.5 text-sm leading-relaxed text-foreground/80">
                          <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-brand" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  ) : (
                    <p className="max-w-2xl text-sm leading-relaxed text-foreground/80">
                      {tab.content}
                    </p>
                  )}
                  {tab.value === "warnings" && (
                    <p className="mt-4 text-xs italic text-muted-foreground">
                      Always read the label. This information is placeholder demo
                      content and is not a substitute for professional medical
                      advice.
                    </p>
                  )}
                </TabsContent>
              ))}
            </Tabs>
          </div>

          {/* Brand card */}
          {brandData && (
            <aside className="rounded-2xl border border-border bg-card p-6">
              <div className="flex items-center gap-3">
                <span className="grid h-12 w-12 place-items-center rounded-xl bg-brand-tint font-display text-sm font-semibold text-brand">
                  {brandData.logoText.slice(0, 3)}
                </span>
                <div>
                  <p className="flex items-center gap-1.5 text-sm font-semibold text-foreground">
                    {brandData.name}
                    <BadgeCheck size={15} className="text-brand" />
                  </p>
                  <p className="text-xs text-muted-foreground">Verified brand</p>
                </div>
              </div>
              <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
                {brandData.description}
              </p>
              <Link
                href={`/shop?brand=${brandData.id}`}
                className="mt-4 inline-block text-sm font-semibold text-brand hover:text-brand-deep"
              >
                View all {brandData.name} products →
              </Link>
            </aside>
          )}
        </div>
      </Section>

      {/* Frequently bought together */}
      {fbt.length > 1 && (
        <Section spacing="sm">
          <SectionHeader title="Frequently bought together" />
          <div className="mt-6">
            <FrequentlyBought items={fbt} />
          </div>
        </Section>
      )}

      {/* Reviews */}
      <div id="reviews" className="scroll-mt-28 bg-muted/40">
        <Section>
          <SectionHeader eyebrow="What customers say" title="Customer reviews" />
          <div className="mt-8">
            <ProductReviews
              rating={product.rating}
              reviewCount={product.reviewCount}
              reviews={product.reviews}
            />
          </div>
        </Section>
      </div>

      {/* Related */}
      {related.length > 0 && (
        <Section>
          <SectionHeader
            title="You might also like"
            linkHref={category ? `/category/${category.slug}` : "/shop"}
            linkLabel="View category"
          />
          <ProductGrid products={related} className="mt-8" />
        </Section>
      )}
    </div>
  );
}
