import {
  Activity,
  Baby,
  BadgeCheck,
  Cross,
  Droplets,
  HeartPulse,
  Headset,
  Leaf,
  Pill,
  RotateCcw,
  ShieldCheck,
  Sparkles,
  Stethoscope,
  Truck,
  type LucideIcon,
} from "lucide-react";

// Resolves the icon-name strings stored in data to Lucide components, so data
// stays serialisable and CMS-friendly.
const ICONS: Record<string, LucideIcon> = {
  Activity,
  Baby,
  BadgeCheck,
  Cross,
  Droplets,
  HeartPulse,
  Headset,
  Leaf,
  Pill,
  RotateCcw,
  ShieldCheck,
  Sparkles,
  Stethoscope,
  Truck,
};

export function Icon({
  name,
  className,
  size = 20,
  strokeWidth = 1.75,
}: {
  name: string;
  className?: string;
  size?: number;
  strokeWidth?: number;
}) {
  const Cmp = ICONS[name] ?? Pill;
  return <Cmp className={className} size={size} strokeWidth={strokeWidth} />;
}
