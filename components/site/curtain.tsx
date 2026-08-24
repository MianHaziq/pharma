"use client";

import { useEffect, useState } from "react";

// Brief intro curtain on first load only (~0.9s), then it drops away.
// Skipped entirely under prefers-reduced-motion.
export function Curtain() {
  const [gone, setGone] = useState(false);
  const [removed, setRemoved] = useState(false);

  useEffect(() => {
    const rm = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const delay = rm ? 0 : 900;
    const t1 = window.setTimeout(() => setGone(true), delay);
    const t2 = window.setTimeout(() => setRemoved(true), delay + 620);
    return () => { window.clearTimeout(t1); window.clearTimeout(t2); };
  }, []);

  if (removed) return null;
  return (
    <div className={`curtain${gone ? " gone" : ""}`} id="curtain" aria-hidden="true">
      <svg className="curtain__m" viewBox="0 0 48 48">
        <use href="#bmark-line" />
      </svg>
      <span className="curtain__bar" />
    </div>
  );
}
