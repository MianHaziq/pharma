import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  getAllCategories,
  getCategoryBySlug,
  getProductsByCategory,
  getBrandName,
} from "@/lib/catalog";

export function generateStaticParams() {
  return getAllCategories().map((c) => ({ category: c.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ category: string }> }): Promise<Metadata> {
  const { category } = await params;
  const cat = getCategoryBySlug(category);
  if (!cat) return { title: "Category not found" };
  return { title: cat.name, description: cat.description };
}

export default async function CategoryPage({ params }: { params: Promise<{ category: string }> }) {
  const { category } = await params;
  const cat = getCategoryBySlug(category);
  if (!cat) notFound();

  const products = getProductsByCategory(cat.slug);
  const others = getAllCategories().filter((c) => c.slug !== cat.slug);

  return (
    <>
      <div className="sec sec--tight sec--tint">
        <div className="wrap">
          <nav aria-label="Breadcrumb" className="note" style={{ display: "flex", gap: 8, flexWrap: "wrap", marginBottom: 22 }}>
            <Link href="/">Home</Link><span>/</span><Link href="/solutions">Products</Link><span>/</span><span>{cat.name}</span>
          </nav>
          <div className="split" style={{ alignItems: "end" }}>
            <div data-anim="rise">
              <p className="eyebrow">{cat.tagline}</p>
              <h1 className="d1">{cat.name}</h1>
            </div>
            <div data-anim="rise">
              <p className="lead">{cat.description}</p>
              {cat.subcategories.length > 0 && (
                <div className="chips mt-16">
                  {cat.subcategories.map((s) => (<span className="chip chip--dot" style={{ cursor: "default" }} key={s.id}>{s.name}</span>))}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      <div className="sec">
        <div className="wrap">
          <div className="sec-head" data-anim="rise">
            <p className="eyebrow">The range</p>
            <h2 className="d2">{products.length} product{products.length === 1 ? "" : "s"} in this category.</h2>
          </div>
          {products.length > 0 ? (
            <div data-anim="rise">
              <table className="tbl">
                <thead><tr><th style={{ width: "42%" }}>Product</th><th style={{ width: "26%" }}>Brand</th><th style={{ width: "32%" }}>Pack</th></tr></thead>
                <tbody>
                  {products.map((p) => (
                    <tr key={p.id}>
                      <td><Link href={`/products/${p.slug}`}>{p.name}</Link></td>
                      <td>{getBrandName(p.brandId)}</td>
                      <td>{p.packSize ?? "—"}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          ) : (
            <div className="placeholder" data-anim="rise">
              <span className="d3">Being catalogued.</span>
              <p>Products in this category are being added. Ask us for the current range.</p>
              <Link href="/contact" className="btn">Ask what&apos;s available <span className="arw">→</span></Link>
            </div>
          )}
        </div>
      </div>

      <div className="sec sec--tint">
        <div className="wrap">
          <div className="sec-head" data-anim="rise"><p className="eyebrow">Continue exploring</p><h2 className="d2">Other categories.</h2></div>
          <div className="grid g4" data-stagger="60">
            {others.map((c) => (
              <Link href={`/solutions/${c.slug}`} className="card tilt" data-anim="pop" key={c.id} style={{ color: "inherit" }}>
                <span className="card__k">Category</span>
                <span className="d4">{c.name}</span>
                <p>{c.tagline}.</p>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
