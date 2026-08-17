import Image from "next/image";
import { cn } from "@/lib/utils";

// A fill image inside a positioned, overflow-clipped frame. Children render on
// top (overlays, captions). The emerald ground shows while the photo loads.
export function Photo({
  src,
  alt,
  sizes = "100vw",
  priority = false,
  className,
  imgClassName,
  children,
}: {
  src: string;
  alt: string;
  sizes?: string;
  priority?: boolean;
  className?: string;
  imgClassName?: string;
  children?: React.ReactNode;
}) {
  return (
    <div className={cn("relative overflow-hidden bg-emerald-deep", className)}>
      <Image
        src={src}
        alt={alt}
        fill
        sizes={sizes}
        priority={priority}
        className={cn("object-cover", imgClassName)}
      />
      {children}
    </div>
  );
}
