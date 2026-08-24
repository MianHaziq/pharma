import Link from "next/link";

// The "b" mark — a faithful recreation of the client logo (stem + ring), filled
// with the brand's magenta→rose gradient. The gradient stops read the brand CSS
// vars, so the mark re-themes with the site (reverts to emerald under
// data-theme="emerald"). Geometry matches the design deck's #bmark-line.
export function BilalMark({ className = "mark" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 48 48" role="img" aria-label="Bilal Pharmaceuticals">
      <defs>
        <linearGradient id="bilal-grad" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="var(--brand-grad-from)" />
          <stop offset="1" stopColor="var(--brand-grad-to)" />
        </linearGradient>
      </defs>
      <rect x="13" y="8" width="6" height="32" rx="3" fill="url(#bilal-grad)" />
      <circle cx="27" cy="30" r="7" fill="none" stroke="url(#bilal-grad)" strokeWidth="6" />
    </svg>
  );
}

// Full logo lockup used in the header and (with onBand) the footer.
export function Logo({ onBand = false }: { onBand?: boolean }) {
  return (
    <Link href="/" className={`logo${onBand ? " logo--onband" : ""}`} aria-label="Bilal Pharmaceuticals — home">
      <BilalMark />
      <span className="logo__txt">
        <span className="logo__n">Bilal Pharmaceuticals</span>
        <span className="logo__s">Importers &amp; Distributors</span>
      </span>
    </Link>
  );
}
