import type { Metadata } from "next";
import Link from "next/link";
import { photo } from "@/lib/images";
import { Ph } from "@/components/site/ph";

export const metadata: Metadata = {
  title: "Segments",
  description:
    "Poultry, cattle and small ruminants have genuinely different needs. Bilal Pharmaceuticals stocks and advises across all of them.",
  alternates: { canonical: "/industries" },
};

function Supply({ title, items }: { title: string; items: string[] }) {
  return (
    <div className="card tilt" data-anim="pop">
      <span className="card__k">{title}</span>
      <div className="kv kv--bare mt-8">
        {items.map((t) => (
          <div className="kv__row" key={t}><span className="kv__v kv__v--l">{t}</span><span className="kv__dots" /></div>
        ))}
      </div>
      <p className="mt-24 mb-0"><Link href="/contact" className="txtlink">Discuss a programme <span className="arw">→</span></Link></p>
    </div>
  );
}

export default function SegmentsPage() {
  return (
    <>
      <div className="sec sec--tight sec--tint">
        <div className="wrap">
          <div className="split" style={{ alignItems: "end" }}>
            <div data-anim="rise">
              <p className="eyebrow">Who we serve</p>
              <h1 className="d1">Poultry, cattle<br /><span className="hl">and small ruminants.</span></h1>
            </div>
            <div data-anim="rise">
              <p className="lead">Different animals ask genuinely different things of the same supplier. We stock and advise across poultry, cattle, sheep and goats — and we talk to each operation differently, because a 35-day broiler cycle and a dairy herd are not the same business.</p>
            </div>
          </div>
        </div>
      </div>

      {/* Broilers */}
      <div className="sec">
        <div className="wrap">
          <div className="split split--mid">
            <div data-anim="rise">
              <div className="parx" data-speed="0.03" style={{ marginBottom: 30 }}>
                <Ph className="r-32" src={photo("brooderHouse", 900, 78)} alt="White broiler flock in a grow-out house" cap="Grow-out · 35-day cycle" />
              </div>
              <p className="eyebrow">Poultry · Broilers</p>
              <h2 className="d2">Broilers</h2>
              <p className="lead mt-16">Short cycles, thin margins, no room to recover from a bad week.</p>
              <p className="mb-0">Grow-out flocks live under high stocking density on a fixed clock. Anything that costs you three days of uniform growth costs you the cycle. What matters is keeping disease pressure down and gut function steady from placement to catch.</p>
            </div>
            <Supply title="What we supply for broilers" items={["Coccidiosis control", "Drinking-water sanitation", "Gut health & organic acids", "Heat-stress support", "Between-cycle disinfection"]} />
          </div>
        </div>
      </div>

      {/* Layers */}
      <div className="sec sec--tint">
        <div className="wrap">
          <div className="split split--mid">
            <Supply title="What we supply for layers" items={["Calcium & shell support", "Vitamins & electrolytes", "Mycotoxin binders", "Vaccination programme products", "Water-line hygiene"]} />
            <div data-anim="rise">
              <div className="parx" data-speed="0.03" style={{ marginBottom: 30 }}>
                <Ph className="r-32" src={photo("eggsCollect", 900, 78)} alt="Graded eggs on trays from a layer house" cap="Production · 70-week cycle" />
              </div>
              <p className="eyebrow">Poultry · Layers</p>
              <h2 className="d2">Layers</h2>
              <p className="lead mt-16">A long run where small daily losses compound into large annual ones.</p>
              <p className="mb-0">Layer operations are judged over months, not weeks. Shell quality, persistency of lay and bird condition late in the cycle decide profitability — and all three depend on nutrition and health support staying consistent for the whole period.</p>
            </div>
          </div>
        </div>
      </div>

      {/* Breeders */}
      <div className="sec">
        <div className="wrap">
          <div className="split split--mid">
            <div data-anim="rise">
              <div className="parx" data-speed="0.03" style={{ marginBottom: 30 }}>
                <Ph className="r-32" src={photo("roosterProfile", 900, 78)} alt="Breeder hen in a parent-stock house" cap="Parent stock" />
              </div>
              <p className="eyebrow">Poultry · Breeders</p>
              <h2 className="d2">Breeders</h2>
              <p className="lead mt-16">The most valuable birds on any site, and the hardest to replace.</p>
              <p className="mb-0">Breeder flocks carry the genetics everything downstream depends on. A gap in a vaccination programme here doesn&apos;t just affect the parent stock — it shows up in chick quality weeks later. Precision and documentation matter more in this segment than anywhere else.</p>
            </div>
            <Supply title="What we supply for breeders" items={["Full vaccination programmes", "Fertility & hatchability support", "Trace minerals & nutrition", "Strict biosecurity products", "Batch-traceable supply"]} />
          </div>
        </div>
      </div>

      {/* Cattle */}
      <div className="sec sec--tint">
        <div className="wrap">
          <div className="split split--mid">
            <Supply title="What we supply for cattle" items={["Vaccines & antisera", "Trace minerals & vitamins", "Dewormers & parasite control", "Calcium & metabolic support", "Mastitis & udder care"]} />
            <div data-anim="rise">
              <div className="parx" data-speed="0.03" style={{ marginBottom: 30 }}>
                <Ph className="r-32" src={photo("cattleHerd", 900, 78)} alt="Dairy and beef cattle grazing on pasture" cap="Cattle · dairy & beef" />
              </div>
              <p className="eyebrow">Cattle · Dairy & beef</p>
              <h2 className="d2">Cattle</h2>
              <p className="lead mt-16">Higher value per head, longer horizons, and health events that are expensive to get wrong.</p>
              <p className="mb-0">Dairy and beef operations turn on fertility, milk yield and steady weight gain. What matters is consistent nutrition, mineral and trace-element status, parasite control and a vaccination programme kept on schedule — with cold-chain products handled properly from our store to your farm.</p>
            </div>
          </div>
        </div>
      </div>

      {/* Sheep & goats */}
      <div className="sec">
        <div className="wrap">
          <div className="split split--mid">
            <div data-anim="rise">
              <div className="parx" data-speed="0.03" style={{ marginBottom: 30 }}>
                <Ph className="r-32" src={photo("sheepFlock", 900, 78)} alt="A flock of sheep on open pasture" cap="Sheep & goats · flock health" />
              </div>
              <p className="eyebrow">Small ruminants</p>
              <h2 className="d2">Sheep &amp; goats</h2>
              <p className="lead mt-16">Managed in numbers and on tight margins, where parasites and mineral gaps quietly cost you condition.</p>
              <p className="mb-0">With small ruminants, prevention beats treatment. The essentials are effective parasite control, mineral and vitamin supplementation, clostridial and other core vaccines, and support around lambing and kidding — supplied with the dosing advice that keeps a whole flock treated correctly.</p>
            </div>
            <Supply title="What we supply for sheep & goats" items={["Broad-spectrum dewormers", "Clostridial & core vaccines", "Minerals, vitamins & drenches", "Lambing & kidding support", "Footrot & external parasite control"]} />
          </div>
        </div>
      </div>

      {/* We also supply */}
      <div className="sec sec--tint">
        <div className="wrap">
          <div className="sec-head" data-anim="rise">
            <p className="eyebrow">We also supply</p>
            <h2 className="d2">The people around the animals.</h2>
          </div>
          <div className="grid g3" data-stagger="80">
            <div className="card tilt" data-anim="pop"><span className="card__k">Trade</span><span className="d4">Veterinarians</span><p>Reliable stock for the products you prescribe, with technical data sheets and withdrawal information on request.</p></div>
            <div className="card tilt" data-anim="pop"><span className="card__k">Trade</span><span className="d4">Feed mills</span><p>Additives, enzymes and binders in commercial quantities, supplied with batch documentation.</p></div>
            <div className="card tilt" data-anim="pop"><span className="card__k">Trade</span><span className="d4">Agri-retailers</span><p>Trade terms on a range your farming customers already ask for, from brands they recognise.</p></div>
          </div>
        </div>
      </div>
    </>
  );
}
