import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Photo } from "./photo";
import { Reveal } from "./reveal";

// Recurring conversion band. Optional background photograph; always emerald.
export function CtaBand({
  eyebrow = "Partner with AviCura",
  title,
  description,
  primary = { label: "Contact our team", href: "/contact" },
  secondary,
  image,
  className,
}: {
  eyebrow?: string;
  title: React.ReactNode;
  description?: React.ReactNode;
  primary?: { label: string; href: string };
  secondary?: { label: string; href: string };
  image?: string;
  className?: string;
}) {
  return (
    <section className={cn("container-page", className)}>
      <Reveal className="relative overflow-hidden rounded-3xl bg-emerald-deep">
        {image && (
          <Photo
            src={image}
            alt=""
            sizes="(min-width: 1280px) 1200px, 100vw"
            className="absolute inset-0"
            imgClassName="opacity-25"
          />
        )}
        <div className="absolute inset-0 bg-gradient-to-br from-emerald-deep via-emerald-deep/95 to-emerald-950/90" />
        <div className="pointer-events-none absolute inset-0 bg-grid-dark opacity-40" />

        <div className="relative px-6 py-14 sm:px-12 sm:py-20 lg:px-16">
          <div className="max-w-2xl">
            <span className="eyebrow text-gold-soft">{eyebrow}</span>
            <h2 className="mt-5 font-display text-3xl leading-[1.08] tracking-tight text-white text-balance sm:text-4xl lg:text-[2.9rem]">
              {title}
            </h2>
            {description && (
              <p className="mt-5 max-w-xl text-base leading-relaxed text-white/75">
                {description}
              </p>
            )}
            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <Button asChild size="xl" variant="onDark">
                <Link href={primary.href}>
                  {primary.label}
                  <ArrowRight data-icon="inline-end" />
                </Link>
              </Button>
              {secondary && (
                <Button asChild size="xl" variant="outlineDark">
                  <Link href={secondary.href}>{secondary.label}</Link>
                </Button>
              )}
            </div>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
