import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Quality & why us",
  description:
    "Quality in distribution is what happens after the factory — in the container, the warehouse, the delivery, and the advice. How Bilal Pharmaceuticals protects it.",
  alternates: { canonical: "/quality" },
};

const REASONS = [
  { icon: "i-shield", k: "01 · Selection", t: "Brands worth representing", d: "We assess fit, documentation, handling requirements and manufacturer support before adding any brand. A short list we believe in beats a long one we can't defend." },
  { icon: "i-temp", k: "02 · Cold chain", t: "Unbroken, not assumed", d: "Vaccines and sensitive products stay within their specified temperature range from clearance to delivery. This is the single most common failure point in this market, and we treat it that way." },
  { icon: "i-doc", k: "03 · Traceability", t: "Batch and expiry on record", d: "You can ask us what batch you received last March and get an answer. That matters for audits, and it matters when something needs investigating." },
  { icon: "i-layer", k: "04 · Stock discipline", t: "No near-expiry surprises", d: "Stock rotates by expiry date, not by convenience. You get usable shelf life, and we'd rather absorb a write-off than pass one on." },
  { icon: "i-hand", k: "05 · Technical advice", t: "Someone who knows the product", d: "Dosage, timing, withdrawal periods, what not to mix with what — ask before you buy. We'd rather sell you the right thing once." },
  { icon: "i-broiler", k: "06 · One relationship", t: "Multiple brands, one supplier", d: "Consolidate your buying across categories. One order, one delivery, one invoice, and one person who already knows your operation." },
];

export default function QualityPage() {
  return (
    <>
      <div className="sec sec--tight sec--tint">
        <div className="wrap">
          <div className="split" style={{ alignItems: "end" }}>
            <div data-anim="rise">
              <p className="eyebrow">Quality &amp; handling</p>
              <h1 className="d1">We don&apos;t make it.<br /><span className="hl">We look after it.</span></h1>
            </div>
            <div data-anim="rise">
              <p className="lead">Quality in distribution isn&apos;t about what happens in a factory. It&apos;s about what happens after — in the container, in the warehouse, on the delivery, and in the advice that comes with it.</p>
            </div>
          </div>
        </div>
      </div>

      <div className="sec sec--band">
        <span className="spot" aria-hidden="true" />
        <div className="wrap">
          <div className="sec-head" data-anim="rise">
            <p className="eyebrow eyebrow--onband">Chain of custody</p>
            <h2 className="d2">Everywhere a product can be spoiled, and what we do about it.</h2>
          </div>
          <div className="chain" data-anim="fade">
            <div className="chain__track"><div className="chain__fill" /></div>
            <div className="chain__row">
              <div className="chain__step">
                <span className="chain__k">On arrival</span>
                <span className="chain__t">Checked against the paperwork</span>
                <p className="chain__d">Every consignment is verified on receipt — quantities, batch numbers, expiry dates and condition, matched to the import documentation before it enters stock.</p>
              </div>
              <div className="chain__step">
                <span className="chain__k">In storage</span>
                <span className="chain__t">Held the way the maker says</span>
                <p className="chain__d">Cold-chain products go into temperature-controlled storage. Everything else is kept dry, ventilated and off the floor, with stock rotated strictly by expiry.</p>
              </div>
              <div className="chain__step">
                <span className="chain__k">On dispatch</span>
                <span className="chain__t">Documented out the door</span>
                <p className="chain__d">Orders leave with batch and expiry details recorded, cold-chain items packed for the journey, and a record we can trace back if you ever need us to.</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="sec">
        <div className="wrap">
          <div className="sec-head" data-anim="rise">
            <p className="eyebrow">Why us</p>
            <h2 className="d2">Six reasons buyers stay with us.</h2>
          </div>
          <div className="grid g3" data-stagger="80">
            {REASONS.map((r) => (
              <div className="card tilt" data-anim="pop" key={r.k}>
                <div className="ibadge"><svg><use href={`#${r.icon}`} /></svg></div>
                <span className="card__k">{r.k}</span>
                <span className="d4">{r.t}</span>
                <p>{r.d}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="sec sec--tint">
        <div className="wrap">
          <div className="split">
            <div data-anim="rise">
              <p className="eyebrow">In plain terms</p>
              <h2 className="d2">What our quality claim covers — and what it doesn&apos;t.</h2>
              <p className="lead mt-24">We think being specific here is more useful than a page of assurances.</p>
            </div>
            <div className="card tilt" data-anim="pop">
              <div className="kv kv--bare">
                <div className="kv__row"><span className="kv__k">We are</span><span className="kv__dots" /><span className="kv__v">Importers and distributors</span></div>
                <div className="kv__row"><span className="kv__k">We are not</span><span className="kv__dots" /><span className="kv__v">A manufacturer</span></div>
                <div className="kv__row"><span className="kv__k">Product quality</span><span className="kv__dots" /><span className="kv__v">Guaranteed by the principal</span></div>
                <div className="kv__row"><span className="kv__k">Handling quality</span><span className="kv__dots" /><span className="kv__v">Guaranteed by us</span></div>
                <div className="kv__row"><span className="kv__k">Documentation</span><span className="kv__dots" /><span className="kv__v">Supplied with every order</span></div>
                <div className="kv__row"><span className="kv__k">Coverage</span><span className="kv__dots" /><span className="kv__v">Animal health</span></div>
              </div>
              <p className="mt-24 mb-0">If a product ever reaches you in a condition it shouldn&apos;t be in, tell us. We&apos;ll trace the batch and deal with it.</p>
            </div>
          </div>
        </div>
      </div>

      <div className="sec">
        <div className="wrap wrap--narrow" style={{ textAlign: "center" }}>
          <h2 className="d2" data-anim="rise">Ask us anything about how we handle your order.</h2>
          <p className="lead mt-24" data-anim="rise">Storage, documentation, delivery timing, cold chain on a long route — we&apos;d rather answer it before you buy.</p>
          <div className="btns mt-40" data-anim="rise" style={{ justifyContent: "center" }}>
            <Link href="/contact" className="btn">Contact our team <span className="arw">→</span></Link>
          </div>
        </div>
      </div>
    </>
  );
}
