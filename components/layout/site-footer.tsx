import Link from "next/link";
import { Mail, MapPin, Phone } from "lucide-react";
import { company, footerNav, socials } from "@/data/company";
import { Logo } from "./logo";
import { SocialIcon, type SocialName } from "./social-icons";

export function SiteFooter() {
  return (
    <footer className="relative overflow-hidden bg-emerald-deep text-white/70">
      <div className="pointer-events-none absolute inset-0 bg-grid-dark opacity-25" />
      <div className="relative">
        {/* Main */}
        <div className="container-page grid gap-12 py-14 lg:grid-cols-[1.6fr_2.4fr]">
          <div>
            <Logo tone="light" />
            <p className="mt-5 max-w-xs text-sm leading-relaxed text-white/60">
              {company.description}
            </p>
            <ul className="mt-6 space-y-3 text-sm">
              <li className="flex items-start gap-3">
                <MapPin size={16} className="mt-0.5 shrink-0 text-gold-soft" />
                <span>
                  {company.hq.line1}
                  <br />
                  {company.hq.line2}
                </span>
              </li>
              <li>
                <a
                  href={`tel:${company.phone.replace(/\s/g, "")}`}
                  className="flex items-center gap-3 transition-colors hover:text-white"
                >
                  <Phone size={16} className="shrink-0 text-gold-soft" />
                  {company.phone}
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${company.email}`}
                  className="flex items-center gap-3 transition-colors hover:text-white"
                >
                  <Mail size={16} className="shrink-0 text-gold-soft" />
                  {company.email}
                </a>
              </li>
            </ul>
          </div>

          <div className="grid grid-cols-2 gap-8 sm:grid-cols-4">
            {footerNav.map((col) => (
              <div key={col.title}>
                <h3 className="font-mono text-[0.7rem] font-medium uppercase tracking-[0.18em] text-white/40">
                  {col.title}
                </h3>
                <ul className="mt-4 space-y-3">
                  {col.links.map((link) => (
                    <li key={`${col.title}-${link.label}`}>
                      <Link
                        href={link.href}
                        className="text-sm text-white/65 transition-colors hover:text-white"
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/10">
          <div className="container-page flex flex-col gap-5 py-7 sm:flex-row sm:items-center sm:justify-between">
            <p className="order-2 text-xs text-white/45 sm:order-1">
              © {new Date().getFullYear()} {company.legalName}. {company.disclaimer}
            </p>
            <div className="order-1 flex items-center gap-2 sm:order-2">
              {socials.map((s) => (
                <a
                  key={s.name}
                  href={s.href}
                  aria-label={s.label}
                  className="grid h-9 w-9 place-items-center rounded-full border border-white/15 text-white/70 transition-colors hover:border-gold/40 hover:text-white"
                >
                  <SocialIcon name={s.name as SocialName} size={16} />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
