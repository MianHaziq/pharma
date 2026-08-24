import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  getAllProducts,
  getProductBySlug,
  getCategoryBySlug,
  getRelatedProducts,
  getBrandName,
} from "@/lib/catalog";
import { catalogCode, productFormat } from "@/lib/portfolio";
import { photo, type PhotoKey } from "@/lib/images";
import { Ph } from "@/components/site/ph";

const CAT_PHOTO: Record<string, PhotoKey> = {
  vaccines: "qualityControl",
  antibiotics: "labPipette",
  "vitamins-electrolytes": "labBench",
  "anticoccidials-dewormers": "microscope",
  "probiotics-gut-health": "production",
  "disinfectants-biosecurity": "manufacturing",
  "feed-supplements": "eggsFarm",
  "farm-equipment": "farmHouse",
};

export function generateStaticParams() {
  return getAllProducts().map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const product = getProductBySlug(slug);
  if (!product) return { title: "Product not found" };
  return { title: product.name, description: product.shortDescription };
}

export default async function ProductPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const product = getProductBySlug(slug);
  if (!product) notFound();

  const category = getCategoryBySlug(product.categorySlug);
  const related = getRelatedProducts(product, 3);
  const code = catalogCode(product);

  const facts = [
    ["Brand", getBrandName(product.brandId)],
    ["Format", productFormat(product)],
    ["Pack", product.packSize ?? "—"],
    ["Category", category?.name ?? "—"],
    ["Availability", product.requiresPrescription ? "Veterinary prescription" : "General sale"],
    ["Catalog code", code],
  ];

  const sections = [
    { title: "Overview", body: [product.description] },
    product.ingredients?.length ? { title: "Composition", list: product.ingredients } : null,
    product.usage ? { title: "Directions for use", body: [product.usage] } : null,
    product.warnings ? { title: "Precautions", body: [product.warnings] } : null,
  ].filter(Boolean) as { title: string; body?: string[]; list?: string[] }[];

  return (
    <>
      <div className="sec sec--tight sec--tint">
        <div className="wrap">
          <nav aria-label="Breadcrumb" className="note" style={{ display: "flex", gap: 8, flexWrap: "wrap", marginBottom: 22 }}>
            <Link href="/">Home</Link><span>/</span>
            <Link href="/solutions">Products</Link>
            {category && (<><span>/</span><Link href={`/solutions/${category.slug}`}>{category.name}</Link></>)}
          </nav>
          <div className="split split--mid">
            <div data-anim="rise">
              <Ph className="r-1" src={photo(CAT_PHOTO[product.categorySlug] ?? "labBench", 900, 78)} alt={product.name} badge={category?.name} />
            </div>
            <div data-anim="rise">
              <p className="eyebrow">{category?.name ?? "Portfolio"}</p>
              <h1 className="d2">{product.name}</h1>
              <p className="lead mt-16">{product.shortDescription}</p>
              {product.keyBenefits?.length ? (
                <div className="kv kv--bare mt-24">
                  {product.keyBenefits.map((b) => (
                    <div className="kv__row" key={b}><span className="kv__v kv__v--l">{b}</span><span className="kv__dots" /></div>
                  ))}
                </div>
              ) : null}
              <div className="btns mt-32">
                <Link href="/contact" className="btn">Request information <span className="arw">→</span></Link>
                <Link href="/contact" className="btn btn--ghost">Request datasheet</Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="sec">
        <div className="wrap">
          <div className="split" style={{ gridTemplateColumns: "1.5fr .95fr" }}>
            <div>
              {sections.map((s, i) => (
                <div data-anim="rise" key={s.title} style={{ marginBottom: i === sections.length - 1 ? 0 : 40 }}>
                  <h2 className="d3">{s.title}</h2>
                  {s.body?.map((p, j) => <p key={j} className="mt-16">{p}</p>)}
                  {s.list && (
                    <div className="kv kv--bare mt-16">
                      {s.list.map((it) => (<div className="kv__row" key={it}><span className="kv__v kv__v--l">{it}</span><span className="kv__dots" /></div>))}
                    </div>
                  )}
                </div>
              ))}
            </div>
            <div data-anim="rise">
              <div className="card">
                <span className="card__k">At a glance</span>
                <div className="kv kv--bare mt-8">
                  {facts.map(([k, v]) => (<div className="kv__row" key={k}><span className="kv__k">{k}</span><span className="kv__dots" /><span className="kv__v">{v}</span></div>))}
                </div>
              </div>
              <div className="card mt-24">
                <span className="card__k">Need guidance?</span>
                <span className="d4">Talk to the technical desk</span>
                <p>Dosage, timing and compatibility for your operation and programme.</p>
                <div className="btns mt-24"><Link href="/contact" className="btn">Contact us <span className="arw">→</span></Link></div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {related.length > 0 && (
        <div className="sec sec--tint">
          <div className="wrap">
            <div className="sec-head" data-anim="rise"><p className="eyebrow">Related</p><h2 className="d2">More in {category?.name ?? "this range"}.</h2></div>
            <div className="grid g3" data-stagger="70">
              {related.map((p) => (
                <Link href={`/products/${p.slug}`} className="bplate" data-anim="rise" key={p.id}>
                  <div className="bplate__ph"><Ph anim={false} className="ph--flat" src={photo(CAT_PHOTO[p.categorySlug] ?? "labBench", 640, 76)} alt={p.name} /></div>
                  <div className="bplate__top"><div><span className="bplate__cat">{getBrandName(p.brandId)}</span><span className="d4">{p.name}</span></div></div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      )}

      <div className="sec sec--band">
        <span className="spot" aria-hidden="true" />
        <div className="wrap wrap--narrow" style={{ textAlign: "center" }}>
          <p className="eyebrow eyebrow--onband eyebrow--c" data-anim="rise">For veterinary use</p>
          <h2 className="d2" data-anim="rise">Bring trusted brands to your operation.</h2>
          <div className="btns mt-40" data-anim="rise" style={{ justifyContent: "center" }}>
            <Link href="/contact" className="btn btn--onband">Contact our team <span className="arw">→</span></Link>
            <Link href="/solutions" className="btn btn--wire">Explore the portfolio</Link>
          </div>
        </div>
      </div>
    </>
  );
}
