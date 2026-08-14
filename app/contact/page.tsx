import type { Metadata } from "next";
import { Phone, Mail, MapPin, Clock, MessageCircle } from "lucide-react";
import { Breadcrumbs } from "@/components/breadcrumbs";
import { ContactForm } from "@/components/contact/contact-form";

export const metadata: Metadata = {
  title: "Contact us",
  description:
    "Get in touch with the VitalCare support team and pharmacists — seven days a week.",
};

const details = [
  { icon: Phone, label: "Call us", value: "+92 111 222 333", sub: "Mon–Sun, 9am–9pm" },
  { icon: Mail, label: "Email", value: "care@vitalcare.example", sub: "Reply within 24 hours" },
  { icon: MessageCircle, label: "Live chat", value: "Chat with a pharmacist", sub: "Available during opening hours" },
  { icon: MapPin, label: "Visit", value: "Gulberg III, Lahore", sub: "Punjab, Pakistan" },
];

export default function ContactPage() {
  return (
    <div className="container-page py-8">
      <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Contact" }]} />

      <div className="mt-6 max-w-2xl">
        <span className="eyebrow">We&apos;re here to help</span>
        <h1 className="mt-3 font-display text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
          Contact us
        </h1>
        <p className="mt-3 text-base leading-relaxed text-muted-foreground">
          Questions about an order, a product or your health needs? Our support
          team and qualified pharmacists are here for you seven days a week.
        </p>
      </div>

      <div className="mt-10 grid gap-8 lg:grid-cols-[1fr_1.3fr]">
        {/* Details */}
        <div className="space-y-4">
          {details.map((d) => (
            <div key={d.label} className="flex items-start gap-4 rounded-2xl border border-border bg-card p-5">
              <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-brand-tint text-brand">
                <d.icon size={20} />
              </span>
              <div>
                <p className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">
                  {d.label}
                </p>
                <p className="mt-0.5 text-sm font-semibold text-foreground">{d.value}</p>
                <p className="text-xs text-muted-foreground">{d.sub}</p>
              </div>
            </div>
          ))}

          <div className="flex items-start gap-4 rounded-2xl border border-border bg-muted/40 p-5">
            <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-card text-brand">
              <Clock size={20} />
            </span>
            <div>
              <p className="text-sm font-semibold text-foreground">Opening hours</p>
              <p className="mt-1 text-sm text-muted-foreground">
                Monday – Sunday: 9:00 AM – 9:00 PM
              </p>
            </div>
          </div>
        </div>

        {/* Form */}
        <div className="rounded-2xl border border-border bg-card p-6 sm:p-8">
          <h2 className="text-lg font-semibold text-foreground">Send us a message</h2>
          <p className="mt-1 text-sm text-muted-foreground">
            Fill in the form and we&apos;ll get back to you within 24 hours.
          </p>
          <div className="mt-6">
            <ContactForm />
          </div>
        </div>
      </div>
    </div>
  );
}
