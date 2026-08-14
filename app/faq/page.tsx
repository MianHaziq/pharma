import type { Metadata } from "next";
import Link from "next/link";
import { faqs } from "@/data/pages";
import { Breadcrumbs } from "@/components/breadcrumbs";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export const metadata: Metadata = {
  title: "Frequently asked questions",
  description:
    "Answers to common questions about ordering, delivery, prescriptions, payments and returns.",
};

export default function FaqPage() {
  return (
    <div className="container-page py-8">
      <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "FAQ" }]} />

      <div className="mx-auto mt-6 max-w-3xl">
        <div className="text-center">
          <span className="eyebrow">Help centre</span>
          <h1 className="mt-3 font-display text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
            Frequently asked questions
          </h1>
          <p className="mt-3 text-base leading-relaxed text-muted-foreground">
            Everything you need to know about ordering, delivery, prescriptions
            and returns.
          </p>
        </div>

        <Accordion type="single" collapsible className="mt-10">
          {faqs.map((faq, i) => (
            <AccordionItem key={i} value={`item-${i}`}>
              <AccordionTrigger className="text-left text-base font-semibold">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-sm leading-relaxed text-muted-foreground">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>

        <div className="mt-10 rounded-2xl border border-border bg-brand-tint/50 p-6 text-center">
          <h2 className="font-display text-xl font-semibold text-foreground">
            Still have questions?
          </h2>
          <p className="mx-auto mt-2 max-w-md text-sm text-muted-foreground">
            Our friendly support team and pharmacists are available seven days a
            week to help.
          </p>
          <Link
            href="/contact"
            className="mt-4 inline-flex items-center rounded-lg bg-brand px-5 py-2.5 text-sm font-semibold text-primary-foreground transition-colors hover:bg-brand-deep"
          >
            Contact us
          </Link>
        </div>
      </div>
    </div>
  );
}
