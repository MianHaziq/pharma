import { partners } from "@/data/company";

// A quiet scrolling row of partner/integrator names (duplicated for a seamless
// loop). Pauses on hover; static under reduced-motion.
export function PartnerMarquee() {
  const row = [...partners, ...partners];
  return (
    <div className="group relative overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_8%,black_92%,transparent)]">
      <div className="flex w-max animate-marquee items-center gap-14 group-hover:[animation-play-state:paused]">
        {row.map((name, i) => (
          <span
            key={`${name}-${i}`}
            className="whitespace-nowrap font-display text-xl font-medium tracking-tight text-ink/35 transition-colors hover:text-ink/70"
          >
            {name}
          </span>
        ))}
      </div>
    </div>
  );
}
