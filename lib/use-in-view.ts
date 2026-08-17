"use client";

import { useEffect, useRef, useState } from "react";

// Shared "has this entered the viewport?" hook. Backs the Reveal component and
// any bespoke scroll-triggered UI so the IntersectionObserver wiring lives in
// one place. Defaults to firing once, a touch before the element is fully in.
export function useInView<T extends Element = HTMLDivElement>(options?: {
  threshold?: number;
  rootMargin?: string;
  /** Keep observing and toggle back to false when it leaves. Default: once. */
  once?: boolean;
}) {
  const { threshold = 0.15, rootMargin = "0px 0px -8% 0px", once = true } =
    options ?? {};

  const ref = useRef<T>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    if (typeof IntersectionObserver === "undefined") {
      setInView(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          if (once) observer.disconnect();
        } else if (!once) {
          setInView(false);
        }
      },
      { threshold, rootMargin },
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [threshold, rootMargin, once]);

  return { ref, inView };
}
