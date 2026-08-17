import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowRight, Check, FileText, Mail } from "lucide-react";
import {
  getAllProducts,
  getProductBySlug,
  getCategoryBySlug,
  getRelatedProducts,
} from "@/lib/catalog";
import { catalogCode, productFormat } from "@/lib/portfolio";
import { company } from "@/data/company";
import { ProductVisual } from "@/components/portfolio/product-visual";
import { ProductCard } from "@/components/portfolio/product-card";
import { Reveal } from "@/components/reveal";
import { Button } from "@/components/ui/button";
import { CtaBand } from "@/components/cta-band";

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
  return { title: product.name, description: product.shortDescription };
}

export default async function ProductPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const product = getProductBySlug(slug);
  if (!product) notFound();

  const category = getCategoryBySlug(product.categorySlug);
  const related = getRelatedProducts(product, 4);
  const code = catalogCode(product);

  const facts = [
    { label: "Format", value: productFormat(product) },
    { label: "Presentation", value: product.packSize ?? "—" },
    { label: "Category", value: category?.name ?? "—" },
    {
      label: "Availability",
      value: product.requiresPrescription
        ? "Veterinary prescription"
        : "General sale",
    },
    { label: "Catalog code", value: code },
  ];

  const sections = [
    { id: "overview", title: "Overview", body: [product.description] },
    product.ingredients?.length
      ? { id: "composition", title: "Composition", list: product.ingredients }
      : null,
    product.usage ? { id: "directions", title: "Directions for use", body: [product.usage] } : null,
    product.warnings ? { id: "precautions", title: "Precautions", body: [product.warnings] } : null,
  ].filter(Boolean) as {
    id: string;
    title: string;
    body?: string[];
    list?: string[];
  }[];

  return (
    <>
      {/* Product header */}
      <section className="border-b border-line bg-mint/40 pt-28 pb-16 sm:pt-36 sm:pb-20">
        <div className="container-page">
          <nav
            aria-label="Breadcrumb"
            className="flex flex-wrap items-center gap-x-2 gap-y-1 font-mono text-[0.72rem] tracking-wide text-muted-foreground"
          >
            <Link href="/" className="hover:text-emerald">Home</Link>
            <span className="text-line-strong">/</span>
            <Link href="/solutions" className="hover:text-emerald">Solutions</Link>
            {category && (
              <>
                <span className="text-line-strong">/</span>
                <Link
                  href={`/solutions/${category.slug}`}
                  className="hover:text-emerald"
                >
                  {category.name}
                </Link>
              </>
            )}
          </nav>

          <div className="mt-8 grid gap-10 lg:grid-cols-2 lg:gap-16">
            <Reveal>
              <ProductVisual images={product.images} code={code} />
            </Reveal>

            <Reveal delay={100}>
              <div className="flex items-center gap-2 font-mono text-[0.72rem] uppercase tracking-wider text-emerald">
                {category?.name ?? "Portfolio"}
                {product.tags.includes("new") && (
                  <span className="rounded bg-gold px-1.5 py-0.5 text-[0.6rem] font-semibold text-emerald-deep">
                    New
                  </span>
                )}
              </div>
              <h1 className="mt-3 font-display text-3xl leading-tight tracking-tight text-ink sm:text-4xl">
                {product.name}
              </h1>
              <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
                {product.shortDescription}
              </p>

              {product.keyBenefits?.length ? (
                <ul className="mt-6 space-y-2.5">
                  {product.keyBenefits.map((b) => (
                    <li key={b} className="flex gap-3 text-[0.95rem] text-ink">
                      <Check size={18} className="mt-0.5 shrink-0 text-emerald" />
                      {b}
                    </li>
                  ))}
                </ul>
              ) : null}

              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <Button asChild size="xl">
                  <Link href="/contact">
                    Request information
                    <Mail data-icon="inline-end" />
                  </Link>
                </Button>
                <Button asChild size="xl" variant="outline">
                  <Link href="/contact">
                    <FileText data-icon="inline-start" />
                    Request datasheet
                  </Link>
                </Button>
              </div>
              <p className="mt-4 font-mono text-[0.72rem] leading-relaxed tracking-wide text-muted-foreground">
                For veterinary use in poultry. Available through {company.name} and
                authorised distributors.
              </p>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Detail + facts */}
      <section className="container-page py-16 lg:py-24">
        <div className="grid gap-12 lg:grid-cols-[1.6fr_1fr] lg:gap-16">
          <div className="space-y-12">
            {sections.map((s) => (
              <Reveal key={s.id}>
                <div>
                  <h2 className="font-display text-2xl tracking-tight text-ink">
                    {s.title}
                  </h2>
                  <div className="mt-4 rule-gold w-16" />
                  {s.body && (
                    <div className="mt-5 space-y-4 text-[0.975rem] leading-relaxed text-muted-foreground">
                      {s.body.map((p, i) => (
                        <p key={i}>{p}</p>
                      ))}
                    </div>
                  )}
                  {s.list && (
                    <ul className="mt-5 space-y-2.5">
                      {s.list.map((item) => (
                        <li
                          key={item}
                          className="flex gap-3 text-[0.95rem] text-ink"
                        >
                          <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-gold" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              </Reveal>
            ))}
          </div>

          {/* Facts sidebar */}
          <div>
            <div className="sticky top-28 space-y-5">
              <div className="rounded-2xl border border-line bg-card p-6">
                <span className="eyebrow text-emerald">At a glance</span>
                <dl className="mt-5 divide-y divide-line">
                  {facts.map((f) => (
                    <div
                      key={f.label}
                      className="flex items-center justify-between gap-4 py-3"
                    >
                      <dt className="text-sm text-muted-foreground">{f.label}</dt>
                      <dd className="text-right text-sm font-medium text-ink">
                        {f.value}
                      </dd>
                    </div>
                  ))}
                </dl>
              </div>
              <div className="rounded-2xl border border-emerald/15 bg-mint/50 p-6">
                <h3 className="font-display text-lg tracking-tight text-ink">
                  Need technical guidance?
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  Our poultry veterinarians can advise on programs, dosing and
                  compatibility for your flock.
                </p>
                <Button asChild size="lg" className="mt-4 w-full">
                  <Link href="/contact">
                    Contact a vet
                    <ArrowRight data-icon="inline-end" />
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Related */}
      {related.length > 0 && (
        <section className="border-t border-line bg-mint/40">
          <div className="container-page py-16 lg:py-20">
            <div className="flex items-end justify-between">
              <h2 className="font-display text-2xl tracking-tight text-ink sm:text-3xl">
                Related products
              </h2>
              {category && (
                <Link
                  href={`/solutions/${category.slug}`}
                  className="group inline-flex items-center gap-2 text-sm font-medium text-emerald"
                >
                  All {category.name}
                  <ArrowRight
                    size={16}
                    className="transition-transform group-hover:translate-x-1"
                  />
                </Link>
              )}
            </div>
            <div className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
              {related.map((p, i) => (
                <Reveal key={p.id} delay={(i % 4) * 70}>
                  <ProductCard product={p} className="h-full" />
                </Reveal>
              ))}
            </div>
          </div>
        </section>
      )}

      <div className="py-20 lg:py-28">
        <CtaBand
          title="Bring AviCura quality to your operation."
          description="Talk to our team about product supply, programs and distribution."
          primary={{ label: "Contact our team", href: "/contact" }}
          secondary={{ label: "Explore the portfolio", href: "/solutions" }}
        />
      </div>
    </>
  );
}
