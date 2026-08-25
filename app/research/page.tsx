/* eslint-disable @next/next/no-img-element */
import type { Metadata } from "next";
import Link from "next/link";
import { Chips } from "@/components/site/chips";
import { brands } from "@/data/brands";

export const metadata: Metadata = {
  title: "Brands we distribute",
  description:
    "The animal-health principals Bilal Pharmaceuticals imports and distributes in Pakistan — each chosen for fit, documentation and handling.",
};

// Handling note per principal (category comes from the brand data).
const HANDLING: Record<string, string> = {
  "brand-toppharma": "Cool, dark",
  "brand-leads": "Cold chain 2–8°C",
  "brand-multivet": "Cool, dark",
  "brand-innomax": "Per product",
};

const CRITERIA = [
  { k: "Fit", t: "Is it needed here?", d: "The product has to solve a problem operations here actually have, at a price the market can carry." },
  { k: "Documentation", t: "Is the paperwork complete?", d: "Registration, labelling, technical data sheets and withdrawal information all need to be in order." },
  { k: "Handling", t: "Can we store it correctly?", d: "If a product needs conditions we can't guarantee end to end, we don't take it on." },
  { k: "Support", t: "Will the maker back it?", d: "We want a principal who answers technical questions, not one who ships and disappears." },
];

export default function BrandsPage() {
  return (
    <>
      <div className="sec sec--tight sec--tint">
        <div className="wrap">
          <div className="split" style={{ alignItems: "end" }}>
            <div data-anim="rise">
              <p className="eyebrow">Our principals</p>
              <h1 className="d1">The brands <span className="hl">we distribute.</span></h1>
            </div>
            <div data-anim="rise">
              <p className="lead">This is the heart of what we do. Every brand below was chosen for its fit with local conditions, and each one is imported, stored and supplied by us directly.</p>
              <p className="note">Product descriptions are indicative — confirm the final range with each principal.</p>
            </div>
          </div>
        </div>
      </div>

      <div className="sec" style={{ paddingTop: 56 }}>
        <div className="wrap">
          <Chips items={["All categories", "Vaccines", "Feed additives", "Sanitation", "Nutrition", "Gut health", "Antimicrobials"]} />

          <div className="grid g3 mt-40" data-stagger="70">
            {brands.map((b) => {
              return (
                <article className="bplate" data-anim="rise" key={b.id}>
                  <div className="bplate__logo">
                    <img src={b.logo} alt={b.name} loading="lazy" decoding="async" />
                  </div>
                  <div className="bplate__top">
                    <span className="bplate__cat">{b.category}</span>
                  </div>
                  <div className="bplate__body">
                    <p className="bplate__desc">{b.description}</p>
                    <div className="bplate__foot">
                      <div className="kv">
                        <div className="kv__row"><span className="kv__k">Category</span><span className="kv__dots" /><span className="kv__v">{b.category}</span></div>
                        <div className="kv__row"><span className="kv__k">Handling</span><span className="kv__dots" /><span className="kv__v">{HANDLING[b.id] ?? "Standard"}</span></div>
                      </div>
                      <div className="chips mt-24"><span className="chip chip--dot" style={{ cursor: "default" }}>Imported &amp; distributed</span></div>
                    </div>
                  </div>
                </article>
              );
            })}
          </div>

          <div className="placeholder mt-56" data-anim="rise">
            <span className="d3">More brands are being added.</span>
            <p>Our roster grows as we take on new principals. If you&apos;re looking for a specific brand, ask — we may already carry it or be able to source it.</p>
            <Link href="/contact" className="btn">Ask about a brand <span className="arw">→</span></Link>
          </div>
        </div>
      </div>

      <div className="sec sec--tint">
        <div className="wrap">
          <div className="sec-head" data-anim="rise">
            <p className="eyebrow">Before we say yes</p>
            <h2 className="d2">How a brand joins this page.</h2>
            <p className="lead">Representing a brand means putting our name next to it. We look at four things before we do.</p>
          </div>
          <div className="grid g4" data-stagger="70">
            {CRITERIA.map((c) => (
              <div className="card tilt" data-anim="pop" key={c.k}>
                <span className="card__k">{c.k}</span>
                <span className="d4">{c.t}</span>
                <p>{c.d}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="sec sec--band">
        <span className="spot" aria-hidden="true" />
        <div className="wrap">
          <div className="split split--mid">
            <div data-anim="rise">
              <p className="eyebrow eyebrow--onband">Manufacturers &amp; suppliers</p>
              <h2 className="d2">Want your brand on this page?</h2>
            </div>
            <div data-anim="rise">
              <p className="lead">We&apos;re open to conversations with animal-health manufacturers looking for a distribution partner in Pakistan. Send us your product range and technical documentation to start.</p>
              <div className="btns mt-32">
                <Link href="/contact" className="btn btn--onband">Talk to us about representation <span className="arw">→</span></Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
