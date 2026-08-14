import Image from "next/image";
import { cn } from "@/lib/utils";
import { ProductArt, isArt } from "./product-art";

// Renders demo SVG art for "art:*" sources, or a real optimised image for URLs.
// When a backend provides real image URLs this component needs no changes.

export function ProductImage({
  src,
  alt,
  className,
  sizes,
  priority,
  showWatermark = true,
}: {
  src: string;
  alt: string;
  className?: string;
  sizes?: string;
  priority?: boolean;
  showWatermark?: boolean;
}) {
  if (isArt(src)) {
    return <ProductArt src={src} className={className} showWatermark={showWatermark} />;
  }
  return (
    <Image
      src={src}
      alt={alt}
      fill
      sizes={sizes ?? "(min-width: 1024px) 25vw, 50vw"}
      priority={priority}
      className={cn("object-cover", className)}
    />
  );
}
