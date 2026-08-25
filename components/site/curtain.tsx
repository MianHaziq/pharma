"use client";

import { useEffect, useState } from "react";
import { BilalMark } from "@/components/layout/logo";

// Intro preloader — a brief brand reveal on first load only. The gradient "b"
// mark and wordmark fade in over a filling progress line, then the whole panel
// slides up to reveal the site. Skipped under prefers-reduced-motion.
export function Curtain() {
  const [gone, setGone] = useState(false);
  const [removed, setRemoved] = useState(false);

  useEffect(() => {
    const rm = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const hold = rm ? 0 : 1550; // let the mark + bar animation play, then exit
    const t1 = window.setTimeout(() => setGone(true), hold);
    const t2 = window.setTimeout(() => setRemoved(true), hold + 850);
    return () => { window.clearTimeout(t1); window.clearTimeout(t2); };
  }, []);

  if (removed) return null;
  return (
    <div className={`curtain${gone ? " gone" : ""}`} id="curtain" aria-hidden="true">
      <div className="curtain__in">
        <BilalMark className="curtain__mark" />
        <span className="curtain__wm">
          <span className="curtain__n">Bilal Pharmaceuticals</span>
          <span className="curtain__s">Importers &amp; Distributors</span>
        </span>
        <span className="curtain__bar"><i /></span>
      </div>
    </div>
  );
}
