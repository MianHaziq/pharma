"use client";

import Image from "next/image";
import { useEffect, useRef } from "react";
import { subscribeScroll, prefersReducedMotion } from "@/lib/scroll-ticker";
import { cn } from "@/lib/utils";

// A large editorial image that drifts slowly against the scroll — the subtle
// depth effect behind the site's cinematic sections. Mirrors the API of
// `Photo` (so swapping to it is a drop-in) and, like Photo, sources its `src`
// from `lib/images.ts` — real photography is still swapped in one place.
//
// The inner layer is deliberately over-sized so the frame (overflow-hidden)
// never reveals an edge while the image travels. Static + reduced-motion safe.
export function ParallaxImage({
  src,
  alt,
  sizes = "100vw",
  priority = false,
  quality,
  /** 0 = still, ~0.12–0.22 = tasteful. Fraction of frame height travelled. */
  speed = 0.16,
  className,
  imgClassName,
  children,
}: {
  src: string;
  alt: string;
  sizes?: string;
  priority?: boolean;
  quality?: number;
  speed?: number;
  className?: string;
  imgClassName?: string;
  children?: React.ReactNode;
}) {
  const frameRef = useRef<HTMLDivElement>(null);
  const layerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const frame = frameRef.current;
    const layer = layerRef.current;
    if (!frame || !layer || prefersReducedMotion()) return;

    return subscribeScroll(() => {
      const rect = frame.getBoundingClientRect();
      const vh = window.innerHeight || document.documentElement.clientHeight;
      if (rect.bottom < -50 || rect.top > vh + 50) return; // fully offscreen

      // -1 (frame centre at viewport bottom) → 0 (centre) → 1 (at top).
      const raw = (rect.top + rect.height / 2 - vh / 2) / (vh / 2 + rect.height / 2);
      const p = Math.max(-1, Math.min(1, raw));
      const shift = -p * speed * rect.height;
      layer.style.transform = `translate3d(0, ${shift.toFixed(1)}px, 0)`;
    });
  }, [speed]);

  // Vertical over-scan on each side must cover the maximum travel (speed * h).
  const pad = Math.min(Math.max(Math.round(speed * 100) + 4, 8), 28);

  return (
    <div
      ref={frameRef}
      className={cn("relative overflow-hidden bg-emerald-deep", className)}
    >
      <div
        ref={layerRef}
        className="absolute inset-x-0 will-change-transform"
        style={{ top: `-${pad}%`, bottom: `-${pad}%` }}
      >
        <Image
          src={src}
          alt={alt}
          fill
          sizes={sizes}
          priority={priority}
          quality={quality}
          className={cn("object-cover", imgClassName)}
        />
      </div>
      {children}
    </div>
  );
}
