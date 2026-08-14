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
      aria-label="VitalCare Pharmacy home"
    >
      <span className="grid h-9 w-9 place-items-center rounded-[10px] bg-brand text-primary-foreground shadow-sm">
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden="true">
          <path
            d="M10 3.5h4a1.5 1.5 0 0 1 1.5 1.5V8.5H19a1.5 1.5 0 0 1 1.5 1.5v4A1.5 1.5 0 0 1 19 15.5h-3.5V19a1.5 1.5 0 0 1-1.5 1.5h-4A1.5 1.5 0 0 1 8.5 19v-3.5H5A1.5 1.5 0 0 1 3.5 14v-4A1.5 1.5 0 0 1 5 8.5h3.5V5A1.5 1.5 0 0 1 10 3.5Z"
            fill="currentColor"
          />
        </svg>
      </span>
      {showText && (
        <span className="flex flex-col leading-none">
          <span className="font-display text-lg font-semibold tracking-tight text-foreground">
            VitalCare
          </span>
          <span className="text-[10px] font-semibold uppercase tracking-[0.16em] text-muted-foreground">
            Pharmacy
          </span>
        </span>
      )}
    </Link>
  );
}
