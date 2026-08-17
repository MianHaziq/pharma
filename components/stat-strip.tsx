import { cn } from "@/lib/utils";
import { Counter } from "./counter";
import { Reveal } from "./reveal";

export interface Stat {
  value: number;
  prefix?: string;
  suffix?: string;
  label: string;
}

export function StatStrip({
  stats,
  dark = false,
  className,
}: {
  stats: Stat[];
  dark?: boolean;
  className?: string;
}) {
  return (
    <div
      className={cn(
        "grid grid-cols-2 gap-px overflow-hidden rounded-2xl border lg:grid-cols-4",
        dark ? "border-white/10 bg-white/10" : "border-line bg-line",
        className,
      )}
    >
      {stats.map((s, i) => (
        <Reveal
          key={s.label}
          delay={i * 90}
          className={cn(dark ? "bg-emerald-deep" : "bg-card")}
        >
          <div className="px-5 py-7 sm:px-7 sm:py-9">
            <div
              className={cn(
                "font-display text-4xl font-medium tracking-tight sm:text-5xl",
                dark ? "text-white" : "text-emerald",
              )}
            >
              <Counter value={s.value} prefix={s.prefix} suffix={s.suffix} />
            </div>
            <p
              className={cn(
                "eyebrow-plain mt-3",
                dark ? "text-white/55" : "text-muted-foreground",
              )}
            >
              {s.label}
            </p>
          </div>
        </Reveal>
      ))}
    </div>
  );
}
