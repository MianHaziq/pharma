import Link from "next/link";
import { Mail, MapPin, Phone } from "lucide-react";
import { footerColumns, paymentMethods } from "@/data/site";
import { Logo } from "./logo";
import { NewsletterForm } from "@/components/newsletter-form";
import { Icon } from "@/components/icon";
import { SocialIcon, type SocialName } from "./social-icons";

const socials: { label: string; href: string; name: SocialName }[] = [
  { label: "Facebook", href: "#", name: "facebook" },
  { label: "Instagram", href: "#", name: "instagram" },
  { label: "X", href: "#", name: "x" },
  { label: "YouTube", href: "#", name: "youtube" },
];

const trustStrip = [
  { icon: "BadgeCheck", label: "100% Genuine" },
  { icon: "Truck", label: "Fast Delivery" },
  { icon: "ShieldCheck", label: "Secure Payments" },
  { icon: "Headset", label: "7-Day Support" },
];

export function SiteFooter() {
  return (
    <footer className="mt-16 border-t border-border bg-card">
      {/* Trust strip */}
      <div className="border-b border-border">
        <div className="container-page grid grid-cols-2 gap-4 py-6 sm:grid-cols-4">
          {trustStrip.map((item) => (
            <div key={item.label} className="flex items-center gap-3">
              <span className="grid h-10 w-10 shrink-0 place-items-center rounded-full bg-brand-tint text-brand">
                <Icon name={item.icon} size={18} />
              </span>
              <span className="text-sm font-semibold text-foreground">
                {item.label}
              </span>
            </div>
          ))}
        </div>
      </div>

      <div className="container-page grid gap-10 py-12 lg:grid-cols-[1.5fr_2fr_1.4fr]">
        {/* Brand + contact */}
        <div>
          <Logo />
          <p className="mt-4 max-w-xs text-sm leading-relaxed text-muted-foreground">
            Your trusted partner in poultry health — genuine vaccines, medicines,
            supplements and biosecurity, delivered to the farm.
          </p>
          <ul className="mt-5 space-y-2.5 text-sm text-muted-foreground">
            <li className="flex items-center gap-2.5">
              <MapPin size={16} className="text-brand" />
              Jhang Road, Faisalabad, Pakistan
            </li>
            <li className="flex items-center gap-2.5">
              <Phone size={16} className="text-brand" />
              +92 111 222 333
            </li>
            <li className="flex items-center gap-2.5">
              <Mail size={16} className="text-brand" />
              care@poultrimed.example
            </li>
          </ul>
        </div>

        {/* Link columns */}
        <div className="grid grid-cols-2 gap-8 sm:grid-cols-3">
          {footerColumns.map((col) => (
            <div key={col.title}>
              <h3 className="text-sm font-semibold text-foreground">
                {col.title}
              </h3>
              <ul className="mt-3.5 space-y-2.5">
                {col.links.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-sm text-muted-foreground transition-colors hover:text-brand"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Newsletter */}
        <div className="rounded-xl border border-border bg-muted/40 p-5">
          <h3 className="font-display text-lg font-semibold text-foreground">
            Poultry health tips & offers
          </h3>
          <p className="mt-1.5 text-sm text-muted-foreground">
            Practical flock-health tips, exclusive offers and product updates —
            straight to your inbox.
          </p>
          <NewsletterForm className="mt-4" />
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-border">
        <div className="container-page flex flex-col items-center justify-between gap-4 py-6 sm:flex-row">
          <p className="order-3 text-xs text-muted-foreground sm:order-1">
            © 2026 PoultriMed. All rights reserved. Demo storefront — not a real
            company.
          </p>

          <div className="order-1 flex items-center gap-2 sm:order-2">
            {paymentMethods.map((method) => (
              <span
                key={method}
                className="rounded-md border border-border bg-card px-2.5 py-1 text-[10px] font-semibold uppercase tracking-wide text-muted-foreground"
              >
                {method}
              </span>
            ))}
          </div>

          <div className="order-2 flex items-center gap-1.5 sm:order-3">
            {socials.map((s) => (
              <a
                key={s.label}
                href={s.href}
                aria-label={s.label}
                className="grid h-9 w-9 place-items-center rounded-full border border-border text-muted-foreground transition-colors hover:border-brand/40 hover:text-brand"
              >
                <SocialIcon name={s.name} size={16} />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
