import { PageHero } from "@/components/page-hero";
import { Reveal } from "@/components/reveal";

export interface LegalSection {
  heading: string;
  body?: string[];
  list?: string[];
}

export function LegalPage({
  title,
  updated,
  intro,
  sections,
}: {
  title: string;
  updated: string;
  intro: string;
  sections: LegalSection[];
}) {
  return (
    <>
      <PageHero
        eyebrow="Legal"
        title={title}
        description={intro}
        crumbs={[{ label: "Home", href: "/" }, { label: title }]}
      />

      <section className="container-page max-w-3xl py-16 lg:py-20">
        <p className="font-mono text-[0.72rem] uppercase tracking-wider text-muted-foreground">
          Last updated · {updated}
        </p>
        <div className="mt-10 space-y-12">
          {sections.map((s) => (
            <Reveal key={s.heading}>
              <div>
                <h2 className="font-display text-xl tracking-tight text-ink sm:text-2xl">
                  {s.heading}
                </h2>
                <div className="mt-3 rule-gold w-14" />
                {s.body && (
                  <div className="mt-5 space-y-4 text-[0.975rem] leading-relaxed text-muted-foreground">
                    {s.body.map((p, i) => (
                      <p key={i}>{p}</p>
                    ))}
                  </div>
                )}
                {s.list && (
                  <ul className="mt-5 space-y-2.5">
                    {s.list.map((item) => (
                      <li key={item} className="flex gap-3 text-[0.95rem] text-ink">
                        <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-gold" />
                        {item}
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            </Reveal>
          ))}
        </div>
      </section>
    </>
  );
}
