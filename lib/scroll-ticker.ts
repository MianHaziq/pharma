// A single shared scroll/resize ticker for the whole app.
//
// Every parallax / scroll-driven element subscribes here instead of adding its
// own listener. One passive scroll listener drives one requestAnimationFrame
// per frame, then fans out to all subscribers — so ten parallax images cost the
// same as one. Client-only (touches `window`); import from client components.

type Sub = () => void;

const subs = new Set<Sub>();
let frame = 0;
let bound = false;

function run() {
  frame = 0;
  for (const cb of subs) cb();
}

function request() {
  if (!frame) frame = requestAnimationFrame(run);
}

/**
 * Subscribe to a coalesced scroll/resize tick. The callback fires once
 * immediately (to set the initial position) and on every subsequent frame in
 * which the page scrolls or resizes. Returns an unsubscribe function.
 */
export function subscribeScroll(cb: Sub): () => void {
  subs.add(cb);

  if (!bound && typeof window !== "undefined") {
    bound = true;
    window.addEventListener("scroll", request, { passive: true });
    window.addEventListener("resize", request, { passive: true });
  }

  cb();
  return () => {
    subs.delete(cb);
  };
}

/** Whether the visitor has asked the OS to minimise motion. */
export function prefersReducedMotion(): boolean {
  return (
    typeof window !== "undefined" &&
    window.matchMedia?.("(prefers-reduced-motion: reduce)").matches === true
  );
}
