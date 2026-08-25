/* eslint-disable @next/next/no-img-element */
import Link from "next/link";

// The client's official "b" mark (magenta→rose gradient on transparent PNG).
// Works on light and dark backgrounds, so the same asset is used in the header,
// the footer band and the preloader. Sized by height in CSS (the glyph is ~0.8
// ratio); the drop-shadow gives it a little lift.
export function BilalMark({ className = "mark" }: { className?: string }) {
  return <img src="/logo-bi.png" alt="Bilal Pharmaceuticals" className={className} />;
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
