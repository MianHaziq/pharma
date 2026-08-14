import { Check } from "lucide-react";
import type { InfoPage } from "@/data/pages";
import { Breadcrumbs } from "@/components/breadcrumbs";

export function ContentPage({ page }: { page: InfoPage }) {
  return (
    <div className="container-page py-8">
      <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: page.title }]} />

      <div className="mx-auto mt-6 max-w-3xl">
        <h1 className="font-display text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
          {page.title}
        </h1>
        <p className="mt-3 text-base leading-relaxed text-muted-foreground">
          {page.intro}
        </p>
        {page.updated && (
          <p className="mt-2 text-xs text-muted-foreground/80">{page.updated}</p>
        )}

        <div className="mt-10 space-y-9">
          {page.sections.map((section) => (
            <section key={section.heading}>
              <h2 className="text-lg font-semibold text-foreground">
                {section.heading}
              </h2>
              {section.body?.map((para, i) => (
                <p key={i} className="mt-3 text-sm leading-relaxed text-foreground/80">
                  {para}
                </p>
              ))}
              {section.list && (
                <ul className="mt-3 space-y-2.5">
                  {section.list.map((item) => (
                    <li key={item} className="flex items-start gap-2.5 text-sm leading-relaxed text-foreground/80">
                      <Check size={16} className="mt-0.5 shrink-0 text-brand" />
                      {item}
                    </li>
                  ))}
                </ul>
              )}
            </section>
          ))}
        </div>

        <div className="mt-12 rounded-xl border border-border bg-muted/40 p-5 text-sm text-muted-foreground">
          Have a question we haven&apos;t answered?{" "}
          <a href="/contact" className="font-semibold text-brand hover:text-brand-deep">
            Contact our team
          </a>
          .
        </div>
      </div>
    </div>
  );
}
