import Link from "next/link";
import { cn } from "@/lib/utils";
import { Photo } from "./photo";

export interface Crumb {
  label: string;
  href?: string;
}

// Dark banner that opens every interior page. Sits beneath the fixed header
// (hence the generous top padding) and can carry a background photograph.
export function PageHero({
  eyebrow,
  title,
  description,
  image,
  crumbs = [{ label: "Home", href: "/" }],
  align = "left",
  children,
}: {
  eyebrow?: string;
  title: React.ReactNode;
  description?: React.ReactNode;
  image?: string;
  crumbs?: Crumb[];
  align?: "left" | "center";
  children?: React.ReactNode;
}) {
  const centered = align === "center";
  return (
    <section className="relative overflow-hidden bg-emerald-deep">
      {image ? (
        <Photo
          src={image}
          alt=""
          priority
          sizes="100vw"
          className="absolute inset-0"
          imgClassName="opacity-30 animate-slow-zoom"
        />
      ) : null}
      <div className="absolute inset-0 bg-gradient-to-b from-emerald-deep/85 via-emerald-deep/80 to-emerald-950" />
      <div className="pointer-events-none absolute inset-0 bg-grid-dark opacity-30" />

      <div className="container-page relative pt-28 pb-14 sm:pt-36 sm:pb-20">
        <nav
          aria-label="Breadcrumb"
          className={cn(
            "flex flex-wrap items-center gap-x-2 gap-y-1 font-mono text-[0.72rem] tracking-wide text-white/50",
            centered && "justify-center",
          )}
        >
          {crumbs.map((c, i) => (
            <span key={i} className="flex items-center gap-2">
              {i > 0 && <span className="text-white/25">/</span>}
              {c.href ? (
                <Link href={c.href} className="transition-colors hover:text-white/80">
                  {c.label}
                </Link>
              ) : (
                <span className="text-gold-soft">{c.label}</span>
              )}
            </span>
          ))}
        </nav>

        <div className={cn("mt-7 max-w-3xl", centered && "mx-auto text-center")}>
          {eyebrow && (
            <span className="eyebrow text-gold-soft">{eyebrow}</span>
          )}
          <h1 className="mt-5 font-display text-4xl leading-[1.05] tracking-tight text-white text-balance sm:text-5xl lg:text-6xl">
            {title}
          </h1>
          {description && (
            <p
              className={cn(
                "mt-6 max-w-2xl text-lg leading-relaxed text-white/75",
                centered && "mx-auto",
              )}
            >
              {description}
            </p>
          )}
          {children && <div className="mt-9">{children}</div>}
        </div>
      </div>
    </section>
  );
}
