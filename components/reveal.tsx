"use client";

import { useInView } from "@/lib/use-in-view";
import { cn } from "@/lib/utils";

/**
 * Direction / style the element travels in from as it enters the viewport.
 * `clip` performs a soft top-to-bottom curtain wipe — nice for framed images.
 */
export type RevealVariant =
  | "up"
  | "down"
  | "left"
  | "right"
  | "scale"
  | "fade"
  | "blur"
  | "clip";

// Scroll-triggered reveal. Adds `is-visible` when the element enters the
// viewport; CSS handles the fade/travel and honours prefers-reduced-motion.
export function Reveal({
  children,
  className,
  delay = 0,
  variant = "up",
}: {
  children: React.ReactNode;
  className?: string;
  /** Stagger delay in milliseconds. */
  delay?: number;
  variant?: RevealVariant;
}) {
  const { ref, inView } = useInView<HTMLDivElement>();

  return (
    <div
      ref={ref}
      className={cn("reveal", `reveal--${variant}`, inView && "is-visible", className)}
      style={delay ? { transitionDelay: `${delay}ms` } : undefined}
    >
      {children}
    </div>
  );
}
