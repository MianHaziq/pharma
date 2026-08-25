/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import { photo } from "@/lib/images";
import { Ph } from "@/components/site/ph";
import { brands } from "@/data/brands";

const MARQUEE = [
  ["Vaccines", "Live & inactivated"],
  ["Feed additives", "In-feed"],
  ["Water sanitizers", "Drinking line"],
  ["Anticoccidials", "Grow-out"],
  ["Vitamins", "Electrolytes"],
  ["Gut health", "Probiotics"],
  ["Mycotoxin binders", "Feed safety"],
  ["Biosecurity", "Farm hygiene"],
];

// The animal groups we supply — poultry where we started, plus the wider
// livestock our range now covers. A representative shot per group.
const SEGMENTS = [
  { icon: "i-broiler", tag: "Broilers & layers", name: "Poultry", photo: "chickensOutdoor", alt: "Free-range hens on a poultry farm", desc: "Broilers, layers and breeders. Vaccines, coccidiosis control, water sanitation and gut health across every stage of the flock." },
  { icon: "i-cattle", tag: "Dairy & beef", name: "Cattle", photo: "cattleHerd", alt: "Cattle grazing in a green pasture", desc: "Dairy and beef herds. Nutrition, trace minerals, reproductive support and the vaccines that keep production steady." },
  { icon: "i-sheep", tag: "Small ruminants", name: "Sheep & goats", photo: "goatHerd", alt: "A herd of goats on a farm", desc: "Parasite control, mineral supplementation and the everyday health products a mixed flock or herd depends on." },
] as const;

const WHY = [
  { icon: "i-shield", k: "Selection", t: "We're careful about what we carry", d: "We take on a brand only after we've checked its documentation, registration and handling requirements. If we can't stand behind it, we don't list it." },
  { icon: "i-temp", k: "Storage", t: "Cold chain, kept unbroken", d: "Vaccines and temperature-sensitive products are held under controlled conditions from arrival to dispatch — not left to chance in a Punjab summer." },
  { icon: "i-doc", k: "Traceability", t: "Paperwork that holds up", d: "Batch numbers, expiry dates and import documentation travel with every consignment, so you can trace anything you receive." },
  { icon: "i-doc", k: "Focus", t: "A range we stand behind", d: "A deliberate range means our team knows every product and how it's used — not a catalogue we're reading off the label." },
  { icon: "i-hand", k: "Support", t: "Advice, not just a price list", d: "Talk to someone who can explain dosage, withdrawal periods and how a product fits your existing programme." },
  { icon: "i-doc", k: "Simplicity", t: "Many brands, one contact", d: "Order across our full range in one place. One conversation, one dispatch, one invoice, one person to call about it." },
];

export default function HomePage() {
  return (
    <>
      {/* HERO */}
      <div className="hero">
        <div className="wrap">
          <div className="hero__grid">
            <div>
              <span className="chipline" data-anim="pop"><i className="pulse" /> Islamabad, Pakistan &nbsp;·&nbsp; <b>Animal health</b></span>
              <p className="eyebrow" data-anim="rise">Importers &amp; distributors · Animal health</p>
              <h1 className="d1" data-lines>Animal health,<br /><span className="hl">done properly.</span></h1>
              <p className="lead" data-anim="rise" style={{ maxWidth: "52ch", transitionDelay: ".34s" }}>
                Bilal Pharmaceuticals brings trusted animal-health brands to Pakistan — vaccines, feed additives, medicines and more. Chosen brands, handled properly from the moment they arrive to the day they reach you.
              </p>
              <p className="hero__note" data-anim="rise">We don&apos;t manufacture.<br />We select, import, store and supply.</p>
              <div className="btns" data-anim="rise">
                <Link href="/research" className="btn">See the brands we carry <span className="arw">→</span></Link>
                <Link href="/contact" className="btn btn--ghost">Request a quote</Link>
              </div>
              <div className="trust" data-anim="rise">
                <span>Trusted brands</span>
                <span>Cold chain maintained</span>
                <span>Batch traceable</span>
              </div>
            </div>

            <div className="hero__art">
              <div className="hero__stack">
                <Ph className="ph--kb hero__main r-45" src={photo("farmMixed", 1100, 80)} alt="Chickens and lambs together on a mixed livestock farm" eager cap="Farm to gate · animal health" />
                <Ph className="hero__inset r-43 ph--flat" src={photo("cattleHerd", 760, 80)} alt="A herd of cattle grazing on open pasture" eager />
              </div>
              <div className="glass hero__glass-1 parx" data-speed="0.05" data-anim="pop" style={{ transitionDelay: ".6s" }}>
                <span className="glass__k"><i className="pulse" /> Cold room · live</span>
                <span className="glass__v">2–8&thinsp;°C maintained</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* PROOF STRIP */}
      <div className="proof">
        <div className="wrap" style={{ padding: 0 }}>
          <div className="proof__g">
            <div className="proof__c">
              <span className="proof__n"><span data-count="8">0</span></span>
              <span className="proof__l">Product categories<br />we stock</span>
            </div>
            <div className="proof__c">
              <span className="proof__n"><span data-count="2">0</span><small>–</small><span data-count="8">0</span><small>&thinsp;°C</small></span>
              <span className="proof__l">Cold-chain band held<br />from arrival to dispatch</span>
            </div>
            <div className="proof__c">
              <span className="proof__n"><span data-count="6">0</span></span>
              <span className="proof__l">Principal brands<br />we represent</span>
            </div>
            <div className="proof__c">
              <span className="proof__n"><span data-count="100">0</span><small>%</small></span>
              <span className="proof__l">Dispatches leave with<br />batch &amp; expiry recorded</span>
            </div>
          </div>
        </div>
      </div>

      {/* MARQUEE */}
      <div className="marq mt-72" aria-hidden="true">
        <div className="marq__t">
          {[...MARQUEE, ...MARQUEE].map(([n, c], i) => (
            <div className="marq__i" key={i}>
              <span className="marq__m"><svg viewBox="0 0 48 48" width="15" height="15"><use href="#bmark-line" /></svg></span>
              <span className="marq__n">{n}</span>
              <span className="marq__c">{c}</span>
            </div>
          ))}
        </div>
      </div>

      {/* SIGNATURE — COLD CHAIN RAIL */}
      <div className="rail-sec" id="coldrail">
        <div className="rail-sec__bg" style={{ backgroundImage: `url('${photo("warehouseStock", 1600, 65)}')` }} />
        <span className="spot" aria-hidden="true" />
        <div className="wrap">
          <div className="rail__head">
            <div>
              <p className="eyebrow eyebrow--onband" data-anim="rise">Chain of custody</p>
              <h2 className="d2" data-lines>Three points where<br />a product can be ruined.<br />We hold all three.</h2>
            </div>
            <div data-anim="rise" style={{ transitionDelay: ".2s" }}>
              <div className="rail__read"><span id="railRead">4.2</span><span className="u">°C</span></div>
              <span className="rail__readl">Cold room · continuous</span>
            </div>
          </div>

          <div className="rail" data-anim="fade">
            <div className="rail__bar">
              <div className="rail__scale" />
              <span className="rail__fill" id="railFill" />
              <span className="rail__safe" />
              <span className="rail__head-m" id="railMark" />
            </div>
            <div className="rail__nodes">
              <div className="rail__node">
                <span className="rail__k">01 · Source</span>
                <span className="rail__t">We choose the principal</span>
                <p className="rail__d">We take on brands we would recommend ourselves, and check registration and handling documents before anything is listed.</p>
              </div>
              <div className="rail__node">
                <span className="rail__k">02 · Store</span>
                <span className="rail__t">We keep it in condition</span>
                <p className="rail__d">Temperature-controlled storage for vaccines and sensitive products, from the moment a consignment clears customs.</p>
              </div>
              <div className="rail__node">
                <span className="rail__k">03 · Supply</span>
                <span className="rail__t">We get it to you</span>
                <p className="rail__d">Batch numbers and expiry dates on every dispatch, plus someone to call when you need advice on use.</p>
              </div>
            </div>
            <div className="rail__foot" data-anim="rise">
              <span><i>●</i> Vaccines held at 2–8&thinsp;°C</span>
              <span><i>●</i> Stock rotated by expiry, not by arrival</span>
              <span><i>●</i> Import papers travel with the goods</span>
            </div>
          </div>
        </div>
      </div>

      {/* POSITIONING */}
      <div className="sec sec--tint">
        <div className="wrap">
          <div className="split split--mid">
            <div data-anim="rise">
              <div className="parx" data-speed="0.045">
                <Ph className="r-43" src={photo("warehouseRack", 900, 80)} alt="Racked warehouse storage aisle" cap="Storage — racked and rotated by expiry" />
              </div>
            </div>
            <div data-anim="rise">
              <p className="eyebrow">Who we are</p>
              <h2 className="d2">A distributor that answers for how it&apos;s handled.</h2>
              <p className="lead mt-24">Most animal-health distributors compete on the invoice and leave the handling to chance. We don&apos;t.</p>
              <p>Bilal Pharmaceuticals imports and distributes animal-health products, and treats the stretch between the manufacturer&apos;s door and your gate as the part that actually decides quality. Our team can tell you how a product should be used and stored — not just read it off the label.</p>
              <p className="mb-0">We are importers and distributors. Every product we supply is made by a principal we have chosen, and our job is to make sure it reaches you exactly as they intended.</p>
              <p className="mt-32 mb-0"><Link href="/about" className="txtlink">More about the company <span className="arw">→</span></Link></p>
            </div>
          </div>
        </div>
      </div>

      {/* BRANDS */}
      <div className="sec">
        <div className="wrap">
          <div className="sec-head" data-anim="rise">
            <p className="eyebrow">Our principals</p>
            <h2 className="d2">The brands we bring to market.</h2>
            <p className="lead">Our credibility is the company we keep. We represent a growing roster of animal-health brands across the categories our customers actually use.</p>
          </div>
          <div className="grid g4" data-stagger="80">
            {brands.map((b) => (
              <div className="bplate" data-anim="pop" key={b.id}>
                <div className="bplate__logo">
                  <img src={b.logo} alt={b.name} loading="lazy" decoding="async" />
                </div>
                <div className="bplate__top">
                  <span className="bplate__cat">{b.category}</span>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-40" data-anim="rise"><Link href="/research" className="btn">View all brands <span className="arw">→</span></Link></div>
        </div>
      </div>

      {/* SEGMENTS */}
      <div className="sec sec--tint">
        <div className="wrap">
          <div className="sec-head" data-anim="rise">
            <p className="eyebrow">Who we serve</p>
            <h2 className="d2">Different animals, different needs.</h2>
            <p className="lead">Poultry, cattle and small ruminants ask very different things of the same supplier. We stock and advise across all three.</p>
          </div>
          <div className="grid g3" data-stagger="70">
            {SEGMENTS.map((s) => (
              <div className="segcard" data-anim="rise" key={s.name}>
                <div className="segcard__top">
                  <Ph anim={false} src={photo(s.photo, 640, 78)} alt={s.alt} />
                  <svg><use href={`#${s.icon}`} /></svg>
                  <span className="segcard__tag">{s.tag}</span>
                </div>
                <div className="segcard__b"><span className="d4">{s.name}</span><p>{s.desc}</p></div>
              </div>
            ))}
          </div>
          <div className="mt-40" data-anim="rise"><Link href="/contact" className="txtlink">Tell us what your operation runs <span className="arw">→</span></Link></div>
        </div>
      </div>

      {/* WHY US */}
      <div className="sec">
        <div className="wrap">
          <div className="sec-head" data-anim="rise">
            <p className="eyebrow">Why buy from us</p>
            <h2 className="d2">A product is only as good as the hands it passed through.</h2>
          </div>
          <div className="grid g3" data-stagger="80">
            {WHY.map((c) => (
              <div className="card tilt" data-anim="pop" key={c.k}>
                <div className="ibadge"><svg><use href={`#${c.icon}`} /></svg></div>
                <span className="card__k">{c.k}</span>
                <span className="d4">{c.t}</span>
                <p>{c.d}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* SUPPLIERS BAND */}
      <div className="sec sec--band">
        <span className="spot" aria-hidden="true" />
        <div className="wrap">
          <div className="split">
            <div data-anim="rise">
              <p className="eyebrow eyebrow--onband">For international suppliers</p>
              <h2 className="d2">Looking for a distribution partner in Pakistan?</h2>
            </div>
            <div data-anim="rise">
              <p className="lead">We represent animal-health manufacturers who want their products handled properly in this market — with the storage conditions, documentation and technical selling their brand depends on.</p>
              <p className="muted">Tell us about your range and we&apos;ll come back with what it would take to bring it here.</p>
              <div className="btns mt-32">
                <Link href="/contact" className="btn btn--onband">Start a conversation <span className="arw">→</span></Link>
                <Link href="/research" className="btn btn--wire">How we work with principals</Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* CONTACT CTA */}
      <div className="sec">
        <div className="wrap">
          <div className="split split--mid">
            <div data-anim="rise">
              <p className="eyebrow">Get in touch</p>
              <h2 className="d2">Tell us what your operation needs.</h2>
              <p className="lead mt-24">Send us your requirement and we&apos;ll tell you what we carry, what it costs and when it can reach you.</p>
            </div>
            <div className="card tilt" data-anim="pop">
              <span className="card__k">Talk to us directly</span>
              <div className="kv kv--bare">
                <div className="kv__row"><span className="kv__k">Phone</span><span className="kv__dots" /><span className="kv__v">+92 336 8883 198</span></div>
                <div className="kv__row"><span className="kv__k">WhatsApp</span><span className="kv__dots" /><span className="kv__v">+92 302 8699 198</span></div>
                <div className="kv__row"><span className="kv__k">Email</span><span className="kv__dots" /><span className="kv__v">chbilalpharmaceuticals@gmail.com</span></div>
                <div className="kv__row"><span className="kv__k">Office</span><span className="kv__dots" /><span className="kv__v">DHA Phase 5, Islamabad</span></div>
              </div>
              <div className="btns mt-32">
                <Link href="/contact" className="btn">Send an inquiry <span className="arw">→</span></Link>
                <Link href="/contact" className="btn btn--ghost">WhatsApp</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
