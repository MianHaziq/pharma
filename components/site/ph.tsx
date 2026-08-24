/* eslint-disable @next/next/no-img-element */
import type { ReactNode } from "react";

// The design's photography primitive. The clip lives on an inner wrapper
// (.ph__clip) so the mask reveal never hides the IntersectionObserver target.
export function Ph({
  src,
  alt,
  className = "",
  anim = "mask",
  cap,
  badge,
  slot,
  eager = false,
}: {
  src: string;
  alt: string;
  className?: string;
  anim?: "mask" | "maskx" | false;
  cap?: ReactNode;
  badge?: ReactNode;
  slot?: ReactNode;
  eager?: boolean;
}) {
  return (
    <figure className={`ph ${className}`.trim()} {...(anim ? { "data-anim": anim } : {})}>
      <span className="ph__clip">
        <img
          className="ph__i"
          src={src}
          alt={alt}
          loading={eager ? "eager" : "lazy"}
          decoding="async"
        />
      </span>
      {cap ? <figcaption className="ph__cap">{cap}</figcaption> : null}
      {badge ? <span className="ph__badge">{badge}</span> : null}
      {slot ? <span className="bplate__slot">{slot}</span> : null}
    </figure>
  );
}
