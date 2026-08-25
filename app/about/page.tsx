/* eslint-disable @next/next/no-img-element */
import type { Metadata } from "next";
import Link from "next/link";
import { photo, team } from "@/lib/images";
import { Ph } from "@/components/site/ph";

export const metadata: Metadata = {
  title: "About the company",
  description:
    "Bilal Pharmaceuticals is an importer and distributor of animal-health products, based in Islamabad and led by CEO Muhammad Imran.",
};

// "On the record" — real client photography, with per-shot framing so faces and
// context stay in view (and building signage stays out of frame on the NY shot).
const GALLERY = [
  { image: team.foshanVisit, wide: true, pos: "center 42%", k: "Supplier visit · Foshan, Guangdong, China", t: "We go and look before we commit", d: "A visit to Guangdong Sihai Iron Printing & Tin-Making, which produces metal containers for the sector. How a product is packed and sealed decides how much of it survives the journey to a Pakistani farm." },
  { image: team.ippeExpo, pos: "center 26%", k: "IPPE · United States", t: "A major production & processing expo", d: "On the floor at the International Production & Processing Expo — sourcing new ranges and keeping current with where animal health is heading." },
  { image: team.space2024, pos: "center 30%", k: "SPACE 2024 · Rennes, France", t: "International animal-farming exhibition", d: "Where new animal-health ranges are introduced, and where manufacturers looking for a Pakistan partner can be met face to face." },
  { image: team.award2026, pos: "center 34%", k: "Annual Business Conference · 2026", t: "Certificate of appreciation", d: "Recognised at an annual business conference of excellence — staying visible and connected in the industry we serve." },
  { image: team.industrySeminar, pos: "center 32%", k: "Industry roundtable · Pakistan", t: "At the table with the sector", d: "Staying close to the questions producers and veterinarians are actually asking — not just the ones a price list answers." },
  { image: team.newYork, pos: "center 66%", k: "New York, United States", t: "Leadership on the road", d: "Our CEO handles principal relationships himself rather than delegating them, which means a good deal of time spent away from Islamabad." },
];

// "On the road" — the CEO's own photos, in person at trade shows and on travel.
const ONROAD = [
  { image: team.field, pos: "center 22%", k: "Field visit · Italy", t: "Close to the source", d: "The CEO turns up in person — at home and abroad — to see operations first-hand and stay close to the partners the business relies on." },
  { image: team.paris, pos: "center 26%", k: "Paris · France", t: "Between meetings", d: "International travel is part of the job. Sourcing and supplier relationships are handled directly, not delegated." },
];

export default function AboutPage() {
  return (
    <>
      {/* HERO */}
      <div className="sec sec--tight sec--tint">
        <div className="wrap">
          <div className="split split--mid">
            <div data-anim="rise">
              <p className="eyebrow">About the company</p>
              <h1 className="d1">Built around <span className="hl">the handling.</span></h1>
              <p className="lead mt-24">Bilal Pharmaceuticals is an importer and distributor of animal-health products, based in Islamabad and led by CEO Muhammad Imran.</p>
            </div>
            <div data-anim="rise">
              <Ph className="r-43" src={photo("vetBottles", 1000, 80)} alt="Veterinary injectable medicines for poultry and livestock on a shelf" cap="Animal-health products we import" />
            </div>
          </div>
        </div>
      </div>

      {/* STORY */}
      <div className="sec">
        <div className="wrap">
          <div className="split">
            <div data-anim="rise">
              <p className="eyebrow">Our story</p>
              <h2 className="d2">Good products, badly handled, stop being good products.</h2>
            </div>
            <div data-anim="rise">
              <p>Pakistan&apos;s animal-health market has grown fast, and the products available to it have improved with it. What hasn&apos;t always kept pace is the care taken between the manufacturer&apos;s door and the farm gate.</p>
              <p>Bilal Pharmaceuticals was set up to close that gap. We import animal-health products from principals we&apos;ve chosen deliberately, hold them under the conditions their makers specify, and supply them to farms, veterinarians, feed mills and agri-retailers with the documentation and advice that should come with them.</p>
              <p>We keep our range deliberate rather than sprawling. We would rather represent a shorter list of brands we can stand behind than a catalogue we can&apos;t — and our customers benefit from a supplier whose attention isn&apos;t spread thin.</p>
              <p className="mb-0">Today we represent a growing roster of brands across vaccines, feed additives, sanitation and nutrition — and we&apos;re still selective about which ones we add.</p>
            </div>
          </div>
        </div>
      </div>

      {/* WHAT WE DO / DON'T */}
      <div className="sec sec--tint">
        <div className="wrap">
          <div className="sec-head" data-anim="rise">
            <p className="eyebrow">Being clear about it</p>
            <h2 className="d2">What we do, and what we don&apos;t.</h2>
            <p className="lead">Distributors are often vague about this. We&apos;d rather not be — it&apos;s the fastest way to tell whether we&apos;re the right supplier for you.</p>
          </div>
          <div className="grid g2" data-stagger="100">
            <div className="card tilt" data-anim="pop">
              <span className="card__k">What we do</span>
              <div className="kv kv--bare mt-8">
                {[
                  "Select and represent animal-health principals",
                  "Import, clear and document every consignment",
                  "Store products under the conditions the maker specifies",
                  "Supply farms, vets, feed mills and retailers",
                  "Advise on correct use, dosage and handling",
                ].map((t, i) => (
                  <div className="kv__row" key={i}><span className="kv__k">0{i + 1}</span><span className="kv__v kv__v--l">{t}</span></div>
                ))}
              </div>
            </div>
            <div className="card card--plain" data-anim="rise" style={{ background: "linear-gradient(180deg,var(--tint-2),var(--tint))" }}>
              <span className="card__k" style={{ color: "var(--muted)" }}>What we don&apos;t</span>
              <div className="kv kv--bare mt-8">
                {[
                  "Manufacture or formulate products",
                  "Run production facilities of any kind",
                  "Repackage or relabel what we receive",
                  "Take on brands we can't handle properly",
                  "Sell anything we can't document",
                ].map((t, i) => (
                  <div className="kv__row" key={i}><span className="kv__k">—</span><span className="kv__v kv__v--l kv__v--soft">{t}</span></div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* HOW WE WORK — steps */}
      <div className="sec">
        <div className="wrap">
          <div className="sec-head" data-anim="rise">
            <p className="eyebrow">How we work</p>
            <h2 className="d2">From the principal&apos;s warehouse to your shed.</h2>
          </div>
          <div className="steps">
            {[
              ["01", "Select the principal", "We assess the range, its registration status and how it's meant to be handled before agreeing to represent it."],
              ["02", "Import and clear", "Consignments are imported with full documentation and checked on arrival against the paperwork."],
              ["03", "Store and handle", "Products go straight into storage at the temperature their maker specifies, with stock rotated by expiry."],
              ["04", "Supply and support", "We dispatch with batch and expiry details, then stay reachable for questions about use."],
            ].map(([n, t, d]) => (
              <div className="step" key={n}>
                <span className="step__n">{n}</span>
                <div className="step__bar" />
                <span className="d4">{t}</span>
                <p>{d}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ON THE RECORD — client photography gallery */}
      <div className="sec sec--tint">
        <div className="wrap">
          <div className="sec-head" data-anim="rise">
            <p className="eyebrow">On the record</p>
            <h2 className="d2">Where we go to find what we carry.</h2>
            <p className="lead">Choosing a principal is not something you do over email. We visit manufacturing and packaging sites, walk international animal-health exhibitions and meet the people whose products we intend to put in front of Pakistani farms.</p>
          </div>
          <div className="gal" data-stagger="110">
            {GALLERY.map((g) => (
              <article className={`gcard${g.wide ? " gal__wide" : ""}`} data-anim="pop" key={g.k}>
                <figure className={`ph ph--flat${g.wide ? "" : " r-1"}`}>
                  <span className="ph__clip">
                    <img className="ph__i" src={g.image} alt={g.t} style={{ objectPosition: g.pos }} loading="lazy" decoding="async" />
                  </span>
                </figure>
                <div className="gcard__v">
                  <span className="gcard__k">{g.k}</span>
                  <span className="gcard__t">{g.t}</span>
                  <p className="gcard__d">{g.d}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>

      {/* ON THE ROAD — CEO in person */}
      <div className="sec">
        <div className="wrap">
          <div className="sec-head" data-anim="rise">
            <p className="eyebrow">On the road</p>
            <h2 className="d2">Our CEO, in person.</h2>
            <p className="lead">The relationships behind the range are handled face to face — at the shows and at the source.</p>
          </div>
          <div className="grid g2" data-stagger="110">
            {ONROAD.map((g) => (
              <article className="gcard" data-anim="pop" key={g.k}>
                <figure className="ph ph--flat r-43">
                  <span className="ph__clip">
                    <img className="ph__i" src={g.image} alt={g.t} style={{ objectPosition: g.pos }} loading="lazy" decoding="async" />
                  </span>
                </figure>
                <div className="gcard__v">
                  <span className="gcard__k">{g.k}</span>
                  <span className="gcard__t">{g.t}</span>
                  <p className="gcard__d">{g.d}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>

      {/* MISSION band */}
      <div className="sec sec--band">
        <span className="spot" aria-hidden="true" />
        <div className="wrap wrap--narrow" style={{ textAlign: "center" }}>
          <p className="eyebrow eyebrow--onband eyebrow--c" data-anim="rise">Our mission</p>
          <p className="d2" data-anim="rise" style={{ fontWeight: 600 }}>Make quality animal-health products available in Pakistan in the condition their makers intended — with the advice to use them properly.</p>
        </div>
      </div>

      {/* CEO */}
      <div className="sec">
        <div className="wrap">
          <div className="ceo">
            <div data-anim="rise">
              <p className="eyebrow">Leadership</p>
              <div className="ceo__ph">
                <figure className="ph r-45 ph--flat" data-anim="mask">
                  <span className="ph__clip">
                    <img className="ph__i" src={team.ceoPortrait} alt="Muhammad Imran, Chief Executive Officer" style={{ objectPosition: "center 25%" }} loading="lazy" decoding="async" />
                  </span>
                </figure>
              </div>
              <div className="mt-24">
                <span className="d3">Muhammad Imran</span>
                <p className="mono" style={{ fontSize: "11px", letterSpacing: ".15em", textTransform: "uppercase", color: "var(--label)", margin: "9px 0 0" }}>Chief Executive Officer</p>
              </div>
            </div>
            <div data-anim="rise">
              <h2 className="d2">A word from our CEO</h2>
              <div className="quote">
                <span className="quote__mark">&ldquo;</span>
                We&apos;re judged on what arrives at the farm gate, not on what we promised in a meeting. That&apos;s why we&apos;re careful about the brands we take on and unusually strict about how we look after them.
              </div>
              <p className="mt-40">Under Muhammad Imran&apos;s direction, Bilal Pharmaceuticals has built its name on how it handles what it sells — relationships with principals whose products suit local conditions, and a customer base that comes back because the last order arrived exactly as it should have.</p>
              <p className="mb-0">He remains directly involved in which brands the company represents and in the technical conversations that follow.</p>
              <div className="btns mt-32">
                <Link href="/contact" className="btn">Contact our team <span className="arw">→</span></Link>
                <Link href="/research" className="btn btn--ghost">See our brands</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
