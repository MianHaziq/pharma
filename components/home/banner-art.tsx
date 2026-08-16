import { cn } from "@/lib/utils";

// Original, geometric poultry-health illustrations used across hero + banners.
// Deterministic and offline. All variants share a 440×400 canvas so they swap
// cleanly inside the same panel.

const C = {
  chick: "#E8B54B",
  chickSoft: "#F3D089",
  chickDeep: "#D69A2E",
  beak: "#E07E36",
  cheek: "#F1A98C",
  egg: "#F5EEDF",
  eggShade: "#E7DCC4",
  eye: "#2B2118",
  brand: "#0F6E5C",
  brand2: "#2E8B75",
  brandDeep: "#0A4A3D",
  mint: "#CDE7DC",
  white: "#FFFFFF",
  water: "#5C93BC",
  vialBlue: "#7FB0D4",
  vialBlueCap: "#356A93",
  vialGreen: "#6FA98F",
  steel: "#8894A0",
  steelDeep: "#4C5A64",
};

function Spotlight() {
  return (
    <>
      <circle cx="220" cy="196" r="150" fill={C.mint} opacity="0.55" />
      <circle cx="220" cy="196" r="112" fill={C.white} opacity="0.5" />
    </>
  );
}

function CrossBadge({ x, y, size = 58 }: { x: number; y: number; size?: number }) {
  const barW = size * 0.2;
  const barL = size * 0.58;
  const cx = x + size / 2;
  const cy = y + size / 2;
  return (
    <g>
      <rect x={x} y={y} width={size} height={size} rx={size * 0.28} fill={C.brand} />
      <g fill={C.white}>
        <rect x={cx - barW / 2} y={cy - barL / 2} width={barW} height={barL} rx={barW / 3} />
        <rect x={cx - barL / 2} y={cy - barW / 2} width={barL} height={barW} rx={barW / 3} />
      </g>
    </g>
  );
}

function Dots() {
  return (
    <>
      <g fill={C.brand} opacity="0.18">
        <circle cx="66" cy="118" r="6" />
        <circle cx="388" cy="288" r="7" />
        <circle cx="360" cy="92" r="4" />
      </g>
      <g fill={C.brand} opacity="0.22">
        <rect x="82" y="300" width="7" height="22" rx="3" />
        <rect x="74.5" y="307.5" width="22" height="7" rx="3" />
      </g>
    </>
  );
}

function Vial({
  x,
  y,
  w,
  h,
  body,
  cap,
  label = true,
}: {
  x: number;
  y: number;
  w: number;
  h: number;
  body: string;
  cap: string;
  label?: boolean;
}) {
  const cx = x + w / 2;
  return (
    <g>
      <rect x={cx - w * 0.28} y={y - 24} width={w * 0.56} height={20} rx={5} fill={cap} />
      <rect x={cx - w * 0.2} y={y - 8} width={w * 0.4} height={12} fill={cap} />
      <rect x={x} y={y} width={w} height={h} rx={w * 0.28} fill={body} />
      {label && (
        <g>
          <rect x={x + w * 0.14} y={y + h * 0.42} width={w * 0.72} height={h * 0.42} rx={8} fill={C.white} />
          <g fill={C.brand}>
            <rect x={cx - 4} y={y + h * 0.5} width={8} height={22} rx={3} />
            <rect x={cx - 11} y={y + h * 0.5 + 7} width={22} height={8} rx={3} />
          </g>
        </g>
      )}
    </g>
  );
}

function Droplet({ x, y, s, color }: { x: number; y: number; s: number; color: string }) {
  return (
    <path
      d={`M${x} ${y}c${s * 0.6} ${s * 0.7} ${s} ${s * 1.3} ${s} ${s * 1.8}a${s} ${s} 0 0 1 ${-s * 2} 0c0 ${-s * 0.5} ${s * 0.4} ${-s * 1.1} ${s} ${-s * 1.8}z`}
      fill={color}
    />
  );
}

function Chick() {
  return (
    <>
      <ellipse cx="220" cy="342" rx="140" ry="18" fill={C.brandDeep} opacity="0.08" />
      {/* egg */}
      <g>
        <ellipse cx="116" cy="286" rx="38" ry="48" fill={C.egg} />
        <ellipse cx="104" cy="272" rx="11" ry="15" fill={C.white} opacity="0.6" />
      </g>
      {/* chick */}
      <g fill={C.chickDeep}>
        <ellipse cx="204" cy="96" rx="9" ry="15" transform="rotate(-14 204 96)" />
        <ellipse cx="220" cy="92" rx="9" ry="16" />
        <ellipse cx="236" cy="98" rx="9" ry="15" transform="rotate(14 236 98)" />
      </g>
      <ellipse cx="220" cy="216" rx="96" ry="100" fill={C.chick} />
      <ellipse cx="204" cy="240" rx="66" ry="70" fill={C.chickSoft} opacity="0.85" />
      <path
        d="M280 196c26 4 40 24 36 48-3 20-22 32-44 28-10-2-18-8-22-16 18-6 30-20 30-36 0-9-3-17-8-24 3 0 6 0 8 0z"
        fill={C.chickDeep}
        opacity="0.85"
      />
      <circle cx="268" cy="214" r="15" fill={C.cheek} opacity="0.7" />
      <path d="M304 196l30 10-30 12 6-12z" fill={C.beak} />
      <path d="M304 206l30 0-30 12z" fill="#C96727" opacity="0.9" />
      <circle cx="274" cy="184" r="9" fill={C.eye} />
      <circle cx="277" cy="181" r="3" fill={C.white} />
      <g stroke={C.beak} strokeWidth="8" strokeLinecap="round">
        <path d="M196 312v22" />
        <path d="M236 312v22" />
      </g>
      <g stroke={C.beak} strokeWidth="6" strokeLinecap="round" fill="none">
        <path d="M196 334l-12 8M196 334l0 12M196 334l12 8" />
        <path d="M236 334l-12 8M236 334l0 12M236 334l12 8" />
      </g>
      <CrossBadge x={330} y={116} />
      <g>
        <circle cx="82" cy="188" r="26" fill={C.white} />
        <Droplet x={82} y={176} s={12} color={C.water} />
      </g>
    </>
  );
}

function Vaccine() {
  return (
    <>
      <ellipse cx="220" cy="330" rx="140" ry="18" fill={C.brandDeep} opacity="0.08" />
      {/* back vial (green) */}
      <g transform="rotate(-8 176 230)">
        <Vial x={140} y={168} w={64} h={148} body={C.vialGreen} cap={C.brand} />
      </g>
      {/* front vial (blue) */}
      <Vial x={232} y={140} w={80} h={176} body={C.vialBlue} cap={C.vialBlueCap} />
      {/* falling droplet */}
      <Droplet x={272} y={92} s={11} color={C.water} />
      <CrossBadge x={332} y={112} />
      {/* small droplet badge */}
      <g>
        <circle cx="86" cy="150" r="22" fill={C.white} />
        <Droplet x={86} y={140} s={10} color={C.water} />
      </g>
      <Dots />
    </>
  );
}

function Biosecurity() {
  return (
    <>
      <ellipse cx="220" cy="336" rx="140" ry="18" fill={C.brandDeep} opacity="0.08" />
      {/* shield */}
      <path
        d="M224 92l78 30v62c0 58-38 98-78 116-40-18-78-58-78-116v-62z"
        fill={C.brand}
      />
      <path
        d="M224 116l58 22v48c0 44-28 74-58 88-30-14-58-44-58-88v-48z"
        fill={C.brand2}
        opacity="0.55"
      />
      <path
        d="M190 198l24 24 46-52"
        fill="none"
        stroke={C.white}
        strokeWidth="14"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      {/* spray bottle */}
      <g>
        <rect x="70" y="250" width="56" height="74" rx="12" fill={C.steel} />
        <rect x="80" y="266" width="36" height="42" rx="6" fill={C.white} opacity="0.85" />
        <rect x="86" y="228" width="26" height="26" rx="4" fill={C.steelDeep} />
        <path d="M112 232h34l-6 12h-28z" fill={C.steelDeep} />
        <path d="M70 262h-16l-10-6" stroke={C.steelDeep} strokeWidth="7" strokeLinecap="round" fill="none" />
      </g>
      {/* spray mist */}
      <g fill={C.brand} opacity="0.4">
        <circle cx="150" cy="238" r="4" />
        <circle cx="166" cy="230" r="3" />
        <circle cx="160" cy="250" r="3" />
      </g>
      <CrossBadge x={332} y={110} size={52} />
      <Dots />
    </>
  );
}

function Delivery() {
  return (
    <>
      <ellipse cx="220" cy="316" rx="150" ry="18" fill={C.brandDeep} opacity="0.08" />
      {/* motion lines */}
      <g stroke={C.brand} strokeWidth="7" strokeLinecap="round" opacity="0.25">
        <path d="M70 176h48" />
        <path d="M56 208h34" />
        <path d="M74 240h30" />
      </g>
      {/* cargo box */}
      <rect x="120" y="150" width="132" height="112" rx="12" fill={C.brand} />
      <g fill={C.white}>
        <rect x="180" y="182" width="12" height="48" rx="4" />
        <rect x="162" y="200" width="48" height="12" rx="4" />
      </g>
      {/* cab */}
      <path d="M252 178h44l30 34v50h-74z" fill={C.brand2} />
      <rect x="266" y="192" width="42" height="30" rx="6" fill={C.mint} />
      {/* wheels */}
      <g>
        <circle cx="170" cy="272" r="24" fill={C.brandDeep} />
        <circle cx="170" cy="272" r="10" fill={C.white} />
        <circle cx="292" cy="272" r="24" fill={C.brandDeep} />
        <circle cx="292" cy="272" r="10" fill={C.white} />
      </g>
      <CrossBadge x={330} y={112} size={52} />
      <Dots />
    </>
  );
}

const VARIANTS: Record<string, () => React.ReactElement> = {
  chick: Chick,
  vaccine: Vaccine,
  biosecurity: Biosecurity,
  delivery: Delivery,
};

export function BannerArt({
  variant = "chick",
  className,
}: {
  variant?: string;
  className?: string;
}) {
  const Render = VARIANTS[variant] ?? Chick;
  return (
    <svg
      viewBox="0 0 440 400"
      className={cn("h-full w-full", className)}
      role="img"
      aria-hidden="true"
      preserveAspectRatio="xMidYMid meet"
    >
      <Spotlight />
      <Render />
    </svg>
  );
}
