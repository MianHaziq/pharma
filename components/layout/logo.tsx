import Link from "next/link";
import { cn } from "@/lib/utils";
import { company } from "@/data/company";

// AviCura wordmark. The emblem is a stylised feather (poultry) with a gold quill
// node (the science accent). `tone="light"` is for dark backgrounds.
export function Logo({
  className,
  showText = true,
  tone = "ink",
}: {
  className?: string;
  showText?: boolean;
  tone?: "ink" | "light";
}) {
  const light = tone === "light";
  return (
    <Link
      href="/"
      aria-label={`${company.name} home`}
      className={cn(
        "inline-flex items-center gap-2.5 rounded-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2",
        className,
      )}
    >
      <span
        className={cn(
          "grid h-10 w-10 place-items-center rounded-xl shadow-sm ring-1 transition-colors",
          light ? "bg-white/10 ring-white/20" : "bg-emerald ring-emerald/20",
        )}
      >
        <svg width="24" height="24" viewBox="0 0 28 28" fill="none" aria-hidden="true">
          <g
            stroke="#ffffff"
            strokeWidth="1.7"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M6.5 22.5C9 12.5 14 7 22 6" />
            <path d="M12.3 12.6c1.6-1.8 4.4-2.7 7.4-2.8" />
            <path d="M10.1 16c1.9-1.7 4.7-2.6 7.5-2.6" />
            <path d="M8.4 19.4c1.8-1.4 4.3-2.2 6.9-2.2" />
          </g>
          <circle cx="22" cy="6" r="2.4" fill="var(--gold)" />
        </svg>
      </span>
      {showText && (
        <span className="flex flex-col leading-none">
          <span
            className={cn(
              "font-display text-[1.35rem] font-semibold tracking-tight",
              light ? "text-white" : "text-ink",
            )}
          >
            {company.name}
          </span>
          <span
            className={cn(
              "mt-1 font-mono text-[0.6rem] font-medium uppercase tracking-[0.28em]",
              light ? "text-white/55" : "text-muted-foreground",
            )}
          >
            Biosciences
          </span>
        </span>
      )}
    </Link>
  );
}
