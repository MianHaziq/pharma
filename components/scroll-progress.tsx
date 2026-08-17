"use client";

import { useEffect, useRef } from "react";
import { subscribeScroll } from "@/lib/scroll-ticker";

// A hairline reading-progress bar pinned to the very top of the viewport.
// A quiet, premium cue — gold→emerald, GPU-transformed, no layout cost.
export function ScrollProgress() {
  const barRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const bar = barRef.current;
    if (!bar) return;

    return subscribeScroll(() => {
      const doc = document.documentElement;
      const max = doc.scrollHeight - doc.clientHeight;
      const p = max > 0 ? Math.min(1, Math.max(0, doc.scrollTop / max)) : 0;
      bar.style.transform = `scaleX(${p.toFixed(4)})`;
    });
  }, []);

  return (
    <div
      aria-hidden
      className="pointer-events-none fixed inset-x-0 top-0 z-[60] h-0.5"
    >
      <div
        ref={barRef}
        className="h-full origin-left scale-x-0 bg-gradient-to-r from-gold via-gold-soft to-emerald will-change-transform"
      />
    </div>
  );
}
