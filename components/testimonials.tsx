import { Quote } from "lucide-react";
import { testimonials } from "@/data/company";
import { Monogram } from "./monogram";
import { Reveal } from "./reveal";
import { cn } from "@/lib/utils";

export function Testimonials({ className }: { className?: string }) {
  return (
    <div className={cn("grid gap-5 lg:grid-cols-3", className)}>
      {testimonials.map((t, i) => (
        <Reveal key={t.name} delay={i * 100}>
          <figure className="flex h-full min-w-0 flex-col rounded-2xl border border-line bg-card p-7 transition-shadow duration-300 hover:shadow-[var(--shadow-card)]">
            <Quote size={26} className="text-gold" strokeWidth={1.5} />
            <blockquote className="mt-5 flex-1 text-[0.975rem] leading-relaxed text-ink/85">
              “{t.quote}”
            </blockquote>
            <figcaption className="mt-6 flex items-center gap-3 border-t border-line pt-5">
              <Monogram initials={t.initials} className="h-11 w-11 shrink-0 text-sm" />
              <div className="min-w-0">
                <div className="font-medium text-ink">{t.name}</div>
                <div className="font-mono text-[0.7rem] tracking-wide text-balance text-muted-foreground">
                  {t.role} · {t.org}
                </div>
              </div>
            </figcaption>
          </figure>
        </Reveal>
      ))}
    </div>
  );
}
