import { cn } from "@/lib/utils";

// Initials avatar — used for people and quotes instead of stock headshots.
export function Monogram({
  initials,
  className,
  dark = false,
}: {
  initials: string;
  className?: string;
  dark?: boolean;
}) {
  return (
    <span
      className={cn(
        "grid shrink-0 place-items-center rounded-full font-display text-base font-medium tracking-tight ring-1",
        dark
          ? "bg-white/10 text-white ring-white/20"
          : "bg-mint text-emerald-700 ring-emerald/15",
        className,
      )}
      aria-hidden="true"
    >
      {initials}
    </span>
  );
}
