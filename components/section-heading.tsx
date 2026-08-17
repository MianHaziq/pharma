import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";
import { Reveal } from "./reveal";

// Standard section header: mono eyebrow, serif title, supporting line.
export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
  linkHref,
  linkLabel = "View all",
  className,
  titleClassName,
  dark = false,
}: {
  eyebrow?: string;
  title: React.ReactNode;
  description?: React.ReactNode;
  align?: "left" | "center";
  linkHref?: string;
  linkLabel?: string;
  className?: string;
  titleClassName?: string;
  dark?: boolean;
}) {
  const centered = align === "center";
  return (
    <div
      className={cn(
        "flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between",
        centered && "sm:flex-col sm:items-center",
        className,
      )}
    >
      <Reveal className={cn("max-w-2xl", centered && "mx-auto text-center")}>
        {eyebrow && (
          <span className={cn("eyebrow", dark && "text-gold-soft")}>
            {eyebrow}
          </span>
        )}
        <h2
          className={cn(
            "mt-4 font-display text-3xl leading-[1.08] tracking-tight text-balance sm:text-4xl lg:text-[2.7rem]",
            dark ? "text-white" : "text-ink",
            titleClassName,
          )}
        >
          {title}
        </h2>
        {description && (
          <p
            className={cn(
              "mt-4 text-base leading-relaxed text-pretty",
              dark ? "text-white/70" : "text-muted-foreground",
            )}
          >
            {description}
          </p>
        )}
      </Reveal>

      {linkHref && (
        <Reveal delay={80}>
          <Link
            href={linkHref}
            className={cn(
              "group inline-flex shrink-0 items-center gap-2 text-sm font-medium transition-colors",
              dark
                ? "text-white/80 hover:text-white"
                : "text-emerald hover:text-emerald-700",
            )}
          >
            {linkLabel}
            <ArrowRight
              size={16}
              className="transition-transform duration-300 group-hover:translate-x-1"
            />
          </Link>
        </Reveal>
      )}
    </div>
  );
}
