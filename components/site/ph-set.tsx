import { Ph } from "@/components/site/ph";

/**
 * A lead photograph with one or two supporting shots stacked beside it.
 *
 * Sections used to carry a single image, which made each segment look thinner
 * than it is. The lead spans the full height of the stack, so the group reads
 * as one composition rather than three loose tiles.
 */
export function PhSet({
  items,
  cap,
}: {
  items: { src: string; alt: string }[];
  cap?: string;
}) {
  const [lead, ...rest] = items;
  return (
    <div className={`phset${rest.length < 2 ? " phset--pair" : ""}`}>
      <Ph className="phset__lead" src={lead.src} alt={lead.alt} cap={cap} />
      {rest.map((s) => (
        <Ph className="phset__sub ph--flat" anim={false} src={s.src} alt={s.alt} key={s.src} />
      ))}
    </div>
  );
}
