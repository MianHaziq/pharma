import type { Metadata } from "next";
import { Mail, MapPin, Phone, Clock } from "lucide-react";
import { company, contactChannels, offices } from "@/data/company";
import { PageHero } from "@/components/page-hero";
import { Reveal } from "@/components/reveal";
import { Icon } from "@/components/icon";
import { ContactForm } from "@/components/contact/contact-form";
import { photo } from "@/lib/images";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Talk to the AviCura team about vaccination programs, product supply, technical support and distribution partnerships.",
};

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Contact"
        title="Let's talk poultry health."
        description="Whether you're planning a vaccination program, sourcing product or exploring a partnership, our veterinary and commercial teams are ready to help."
        image={photo("farmHouse", 1800, 70)}
        crumbs={[{ label: "Home", href: "/" }, { label: "Contact" }]}
      />

      <section className="container-page py-20 lg:py-24">
        <div className="grid gap-12 lg:grid-cols-[1fr_1.1fr] lg:gap-16">
          {/* Channels + coordinates */}
          <div>
            <span className="eyebrow text-emerald">How can we help</span>
            <h2 className="mt-4 font-display text-3xl tracking-tight text-ink">
              Reach the right team
            </h2>
            <div className="mt-8 space-y-4">
              {contactChannels.map((c, i) => (
                <Reveal key={c.title} delay={i * 80}>
                  <div className="flex gap-4 rounded-2xl border border-line bg-card p-5">
                    <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-mint text-emerald ring-1 ring-emerald/10">
                      <Icon name={c.icon} size={20} />
                    </span>
                    <div>
                      <h3 className="font-medium text-ink">{c.title}</h3>
                      <p className="mt-1 text-sm text-muted-foreground">
                        {c.description}
                      </p>
                      <a
                        href={`mailto:${c.detail}`}
                        className="mt-2 inline-block font-mono text-[0.78rem] text-emerald hover:text-emerald-700"
                      >
                        {c.detail}
                      </a>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>

            <div className="mt-8 grid gap-4 rounded-2xl border border-line bg-mint/40 p-6 sm:grid-cols-2">
              <div className="flex items-start gap-3">
                <MapPin size={18} className="mt-0.5 shrink-0 text-emerald" />
                <div className="text-sm text-ink">
                  <div className="font-medium">Global headquarters</div>
                  <div className="mt-1 text-muted-foreground">
                    {company.hq.line1}
                    <br />
                    {company.hq.line2}
                  </div>
                </div>
              </div>
              <div className="space-y-3 text-sm">
                <a
                  href={`tel:${company.phone.replace(/\s/g, "")}`}
                  className="flex items-center gap-3 text-ink hover:text-emerald"
                >
                  <Phone size={17} className="text-emerald" />
                  {company.phone}
                </a>
                <a
                  href={`mailto:${company.email}`}
                  className="flex items-center gap-3 text-ink hover:text-emerald"
                >
                  <Mail size={17} className="text-emerald" />
                  {company.email}
                </a>
                <p className="flex items-center gap-3 text-muted-foreground">
                  <Clock size={17} className="text-emerald" />
                  Mon–Fri · 08:00–18:00 CET
                </p>
              </div>
            </div>
          </div>

          {/* Form */}
          <Reveal>
            <div className="rounded-3xl border border-line bg-card p-7 shadow-[var(--shadow-card)] sm:p-9">
              <span className="eyebrow text-emerald">Send a message</span>
              <h2 className="mt-4 font-display text-2xl tracking-tight text-ink">
                Tell us about your operation
              </h2>
              <p className="mt-2 text-sm text-muted-foreground">
                We reply to every enquiry within one business day.
              </p>
              <div className="mt-7">
                <ContactForm />
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Offices */}
      <section className="border-t border-line bg-mint/40">
        <div className="container-page py-16 lg:py-20">
          <span className="eyebrow text-emerald">Global presence</span>
          <h2 className="mt-4 font-display text-3xl tracking-tight text-ink">
            Where to find us
          </h2>
          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {offices.map((o, i) => (
              <Reveal key={o.city} delay={i * 80}>
                <div className="h-full rounded-2xl border border-line bg-card p-6">
                  <div className="flex items-center justify-between">
                    <span className="font-mono text-[0.7rem] uppercase tracking-wider text-muted-foreground">
                      {o.region}
                    </span>
                    {o.isHq && (
                      <span className="rounded bg-gold/15 px-1.5 py-0.5 font-mono text-[0.6rem] font-semibold uppercase tracking-wider text-gold">
                        HQ
                      </span>
                    )}
                  </div>
                  <h3 className="mt-3 font-display text-lg tracking-tight text-ink">
                    {o.city}
                  </h3>
                  <p className="mt-1.5 text-sm text-muted-foreground">
                    {o.detail}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
