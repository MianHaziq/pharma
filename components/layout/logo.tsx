import Link from "next/link";
import { cn } from "@/lib/utils";

export function Logo({
  className,
  showText = true,
}: {
  className?: string;
  showText?: boolean;
}) {
  return (
    <Link
      href="/"
      className={cn(
        "inline-flex items-center gap-2.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 rounded-md",
        className,
      )}
      aria-label="PoultriMed home"
    >
      <span className="grid h-9 w-9 place-items-center rounded-[10px] bg-brand text-primary-foreground shadow-sm">
        <svg width="22" height="22" viewBox="0 0 24 24" aria-hidden="true">
          <g fill="currentColor">
            {/* body + head */}
            <circle cx="10.4" cy="14" r="5.2" />
            <circle cx="15.2" cy="9.2" r="3.6" />
            {/* crest tuft */}
            <path
              d="M14.2 3.4c.5.8.4 1.8-.3 2.5"
              stroke="currentColor"
              strokeWidth="1.3"
              fill="none"
              strokeLinecap="round"
            />
            {/* beak */}
            <path d="M18.2 7.9l3.1 1.3-3.1 1.3z" />
            {/* legs */}
            <rect x="8.5" y="18.4" width="1.3" height="3" rx="0.6" />
            <rect x="11.5" y="18.4" width="1.3" height="3" rx="0.6" />
          </g>
          {/* eye */}
          <circle cx="16.3" cy="8.7" r="0.75" fill="#0A4A3D" />
        </svg>
      </span>
      {showText && (
        <span className="flex flex-col leading-none">
          <span className="font-display text-lg font-semibold tracking-tight text-foreground">
            PoultriMed
          </span>
          <span className="text-[10px] font-semibold uppercase tracking-[0.16em] text-muted-foreground">
            Poultry Health
          </span>
        </span>
      )}
    </Link>
  );
}
