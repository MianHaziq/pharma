import type { Metadata } from "next";
import Link from "next/link";
import { categories } from "@/data/categories";
import { products } from "@/data/products";
import { brands } from "@/data/brands";

export const metadata: Metadata = {
  title: "Products",
  description:
    "The animal-health range Bilal Pharmaceuticals supplies — vaccines, feed additives, sanitation, nutrition and biosecurity, organised by what you're trying to solve.",
};

const ICON: Record<string, string> = {
  vaccines: "i-temp",
  antibiotics: "i-doc",
  "vitamins-electrolytes": "i-hand",
  "anticoccidials-dewormers": "i-broiler",
  "probiotics-gut-health": "i-layer",
  "disinfectants-biosecurity": "i-shield",
  "feed-supplements": "i-layer",
  "farm-equipment": "i-doc",
};

const brandName = new Map(brands.map((b) => [b.id, b.name]));
const catName = new Map(categories.map((c) => [c.slug, c.name]));

export default function ProductsPage() {
  const rows = products.slice(0, 10);
  return (
    <>
      <div className="sec sec--tight sec--tint">
        <div className="wrap">
          <div className="split" style={{ alignItems: "end" }}>
            <div data-anim="rise">
              <p className="eyebrow">Portfolio</p>
              <h1 className="d1">What <span className="hl">we supply.</span></h1>
            </div>
            <div data-anim="rise">
              <p className="lead">Our range is organised by what you&apos;re trying to solve, not by brand. Every product is imported and handled by us, and available with pack sizes and technical sheets on request.</p>
              <div className="chips mt-16"><span className="chip chip--dot" style={{ cursor: "default" }}>{products.length}+ products stocked</span></div>
            </div>
          </div>
        </div>
      </div>

      <div className="sec">
        <div className="wrap">
          <div className="sec-head" data-anim="rise">
            <p className="eyebrow">By category</p>
            <h2 className="d2">Eight categories, one supplier.</h2>
          </div>
          <div className="grid g4" data-stagger="70">
            {categories.map((c) => (
              <Link href={`/solutions/${c.slug}`} className="card tilt" data-anim="pop" key={c.id} style={{ display: "block", color: "inherit" }}>
                <div className="ibadge"><svg><use href={`#${ICON[c.slug] ?? "i-doc"}`} /></svg></div>
                <span className="card__k">Category</span>
                <span className="d4">{c.name}</span>
                <p>{c.tagline}.</p>
                <div className="chips mt-24"><span className="chip chip--dot" style={{ cursor: "default" }}>View range</span></div>
              </Link>
            ))}
          </div>
        </div>
      </div>

      <div className="sec sec--tint">
        <div className="wrap">
          <div className="sec-head" data-anim="rise">
            <p className="eyebrow">A selection</p>
            <h2 className="d2">From the range.</h2>
            <p className="lead">A sample of what we carry. Each row links to a detail page with pack sizes, dosage and handling.</p>
          </div>
          <div data-anim="rise">
            <table className="tbl">
              <thead>
                <tr>
                  <th style={{ width: "34%" }}>Product</th>
                  <th style={{ width: "20%" }}>Brand</th>
                  <th style={{ width: "26%" }}>Category</th>
                  <th style={{ width: "20%" }}>Pack</th>
                </tr>
              </thead>
              <tbody>
                {rows.map((p) => (
                  <tr key={p.id}>
                    <td><Link href={`/products/${p.slug}`}>{p.name}</Link></td>
                    <td>{brandName.get(p.brandId) ?? "—"}</td>
                    <td>{catName.get(p.categorySlug) ?? p.categorySlug}</td>
                    <td>{p.packSize ?? "—"}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>

      <div className="sec">
        <div className="wrap wrap--narrow">
          <div className="placeholder" data-anim="rise">
            <span className="d3">Looking for something specific?</span>
            <p>Tell us your segment and what you&apos;re treating, and we&apos;ll send you what we currently carry for it — with pack sizes and pricing.</p>
            <div className="btns" style={{ justifyContent: "center" }}>
              <Link href="/contact" className="btn">Ask what&apos;s available <span className="arw">→</span></Link>
              <Link href="/research" className="btn btn--ghost">Browse by brand instead</Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
