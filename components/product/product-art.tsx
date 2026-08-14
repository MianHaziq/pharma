import { cn } from "@/lib/utils";

// Branded SVG "product shots". Deterministic, offline, and consistent — a
// premium stand-in until real photography is connected. Demo image sources use
// the scheme "art:<kind>:<tone>"; real URLs are handled by ProductImage.

type Tone = {
  bg: string;
  soft: string;
  accent: string;
  deep: string;
  cap: string;
  label: string;
};

const TONES: Record<string, Tone> = {
  mint: { bg: "#E9F4EF", soft: "#D6EBE2", accent: "#3AA083", deep: "#0F6E5C", cap: "#0A4A3D", label: "#F7FCFA" },
  sage: { bg: "#EDF1E7", soft: "#DEE7D2", accent: "#7C9A5A", deep: "#4F6B34", cap: "#3B5227", label: "#FBFCF7" },
  blush: { bg: "#F7ECEE", soft: "#EFDADF", accent: "#C67C8C", deep: "#9E5061", cap: "#7C3B49", label: "#FEFBFC" },
  peach: { bg: "#FBEEE4", soft: "#F5DCC8", accent: "#DE9A6A", deep: "#B96E3C", cap: "#8F5228", label: "#FFFBF7" },
  sky: { bg: "#E7F0F6", soft: "#D3E4EF", accent: "#5C93BC", deep: "#356A93", cap: "#274F6E", label: "#F8FBFD" },
  steel: { bg: "#ECEFF1", soft: "#DBE0E4", accent: "#7C8B96", deep: "#4C5A64", cap: "#37424A", label: "#FAFBFC" },
  coral: { bg: "#FBEBE7", soft: "#F5D5CD", accent: "#E08268", deep: "#C0533A", cap: "#933C29", label: "#FFFAF8" },
  lavender: { bg: "#EFEBF6", soft: "#E0D8EF", accent: "#8C7BC0", deep: "#5E4E93", cap: "#463A6E", label: "#FBFAFE" },
  amber: { bg: "#FBF2DF", soft: "#F5E5BF", accent: "#D9A441", deep: "#B07E20", cap: "#856019", label: "#FFFCF4" },
  cream: { bg: "#F5F1E9", soft: "#E9E1D0", accent: "#B3A488", deep: "#8A7B5E", cap: "#6B5F46", label: "#FCFAF5" },
};

export type ArtDescriptor = { kind: string; tone: Tone };

export function parseArt(src: string): ArtDescriptor | null {
  if (!src.startsWith("art:")) return null;
  const [, kind, toneKey] = src.split(":");
  return { kind, tone: TONES[toneKey] ?? TONES.mint };
}

export function isArt(src: string): boolean {
  return src.startsWith("art:");
}

function Plus({ x, y, s, color }: { x: number; y: number; s: number; color: string }) {
  const t = s * 0.3;
  return (
    <g fill={color}>
      <rect x={x - t / 2} y={y - s / 2} width={t} height={s} rx={t / 3} />
      <rect x={x - s / 2} y={y - t / 2} width={s} height={t} rx={t / 3} />
    </g>
  );
}

function Shape({ kind, t }: { kind: string; t: Tone }) {
  switch (kind) {
    case "bottle":
      return (
        <g>
          <rect x={168} y={96} width={64} height={26} rx={6} fill={t.cap} />
          <rect x={176} y={78} width={48} height={26} rx={7} fill={t.deep} />
          <path d="M160 150c0-16 12-28 28-30h24c16 2 28 14 28 30v128c0 14-11 24-24 24h-32c-13 0-24-10-24-24z" fill={t.accent} />
          <rect x={166} y={188} width={68} height={78} rx={10} fill={t.label} />
          <Plus x={200} y={214} s={22} color={t.deep} />
          <rect x={178} y={240} width={44} height={7} rx={3.5} fill={t.soft} />
          <rect x={186} y={252} width={28} height={6} rx={3} fill={t.soft} />
        </g>
      );
    case "pillbottle":
      return (
        <g>
          <rect x={158} y={92} width={84} height={30} rx={7} fill={t.cap} />
          <path d="M154 150c0-16 10-26 26-28h40c16 2 26 12 26 28v122c0 15-12 26-27 26h-38c-15 0-27-11-27-26z" fill={t.accent} />
          <rect x={162} y={182} width={76} height={86} rx={10} fill={t.label} />
          <Plus x={200} y={208} s={22} color={t.deep} />
          <rect x={174} y={236} width={52} height={7} rx={3.5} fill={t.soft} />
          <rect x={182} y={249} width={36} height={6} rx={3} fill={t.soft} />
        </g>
      );
    case "box":
      return (
        <g>
          <path d="M150 128l50-22 50 22v150l-50 20-50-20z" fill={t.accent} />
          <path d="M150 128l50 22v146l-50-18z" fill={t.deep} opacity={0.9} />
          <path d="M200 150l50-22v150l-50 20z" fill={t.accent} />
          <rect x={210} y={168} width={30} height={7} rx={3.5} fill={t.label} opacity={0.85} />
          <rect x={210} y={182} width={22} height={6} rx={3} fill={t.label} opacity={0.6} />
          <Plus x={175} y={205} s={30} color={t.label} />
        </g>
      );
    case "tube":
      return (
        <g>
          <rect x={182} y={92} width={36} height={30} rx={6} fill={t.cap} />
          <path d="M166 128h68v132c0 8-4 14-10 20l-8 8h-24l-8-8c-6-6-10-12-10-20z" fill={t.accent} />
          <path d="M166 128h68l-10 14h-48z" fill={t.deep} />
          <rect x={176} y={168} width={48} height={68} rx={9} fill={t.label} />
          <Plus x={200} y={190} s={18} color={t.deep} />
          <rect x={186} y={212} width={28} height={6} rx={3} fill={t.soft} />
        </g>
      );
    case "jar":
      return (
        <g>
          <ellipse cx={200} cy={150} rx={62} ry={18} fill={t.cap} />
          <rect x={138} y={150} width={124} height={26} fill={t.cap} />
          <ellipse cx={200} cy={176} rx={62} ry={18} fill={t.deep} />
          <path d="M146 182c0 0 8 76 12 90 3 10 14 16 42 16s39-6 42-16c4-14 12-90 12-90z" fill={t.accent} />
          <ellipse cx={200} cy={182} rx={54} ry={15} fill={t.soft} />
          <Plus x={200} y={230} s={26} color={t.label} />
        </g>
      );
    case "sachet":
      return (
        <g>
          <path d="M158 116h84l-6 8 6 8-6 8 6 8-6 8 6 8v138c0 6-5 10-10 10h-64c-6 0-10-4-10-10V116z" fill={t.accent} />
          <rect x={170} y={150} width={60} height={92} rx={8} fill={t.label} />
          <Plus x={200} y={178} s={22} color={t.deep} />
          <rect x={182} y={206} width={36} height={7} rx={3.5} fill={t.soft} />
          <rect x={188} y={219} width={24} height={6} rx={3} fill={t.soft} />
        </g>
      );
    case "device":
      return (
        <g>
          <rect x={130} y={140} width={140} height={120} rx={18} fill={t.accent} />
          <rect x={148} y={158} width={104} height={58} rx={8} fill={t.label} />
          <text x={166} y={198} fontFamily="monospace" fontSize={30} fontWeight={700} fill={t.deep}>
            120
          </text>
          <rect x={148} y={228} width={50} height={14} rx={7} fill={t.deep} />
          <circle cx={236} cy={235} r={9} fill={t.cap} />
          <path d="M262 176c26-6 44 10 44 30s-16 34-40 30" fill="none" stroke={t.deep} strokeWidth={12} strokeLinecap="round" />
        </g>
      );
    case "kit":
      return (
        <g>
          <rect x={140} y={150} width={120} height={22} rx={8} fill={t.cap} />
          <rect x={186} y={140} width={28} height={16} rx={4} fill={t.cap} />
          <rect x={132} y={168} width={136} height={112} rx={16} fill={t.accent} />
          <rect x={132} y={214} width={136} height={8} fill={t.deep} opacity={0.4} />
          <circle cx={200} cy={224} r={34} fill={t.label} />
          <Plus x={200} y={224} s={34} color={t.deep} />
        </g>
      );
    case "dropper":
      return (
        <g>
          <rect x={184} y={72} width={32} height={54} rx={8} fill={t.cap} />
          <rect x={194} y={120} width={12} height={40} fill={t.deep} />
          <path d="M164 168c0-14 10-24 24-26h24c14 2 24 12 24 26v96c0 14-11 24-24 24h-24c-13 0-24-10-24-24z" fill={t.accent} />
          <rect x={172} y={196} width={56} height={64} rx={9} fill={t.label} />
          <Plus x={200} y={218} s={18} color={t.deep} />
          <rect x={182} y={240} width={36} height={6} rx={3} fill={t.soft} />
        </g>
      );
    case "spray":
      return (
        <g>
          <path d="M186 86h34v22h-34z" fill={t.cap} />
          <path d="M180 108h44l6 18h-56z" fill={t.deep} />
          <path d="M162 150c0-14 10-22 24-24h28c14 2 24 10 24 24v116c0 14-11 24-24 24h-28c-14 0-24-10-24-24z" fill={t.accent} />
          <rect x={172} y={182} width={56} height={72} rx={9} fill={t.label} />
          <Plus x={200} y={206} s={18} color={t.deep} />
          <rect x={182} y={230} width={36} height={6} rx={3} fill={t.soft} />
        </g>
      );
    default:
      return <Plus x={200} y={200} s={60} color={t.accent} />;
  }
}

export function ProductArt({
  src,
  className,
  showWatermark = true,
}: {
  src: string;
  className?: string;
  showWatermark?: boolean;
}) {
  const parsed = parseArt(src);
  const t = parsed?.tone ?? TONES.mint;
  const kind = parsed?.kind ?? "box";

  return (
    <svg
      viewBox="0 0 400 400"
      className={cn("h-full w-full", className)}
      role="img"
      aria-hidden="true"
      preserveAspectRatio="xMidYMid meet"
    >
      <rect width="400" height="400" fill={t.bg} />
      {showWatermark && (
        <g opacity={0.5}>
          <Plus x={64} y={70} s={30} color={t.soft} />
          <Plus x={340} y={330} s={40} color={t.soft} />
        </g>
      )}
      {/* soft ground shadow */}
      <ellipse cx={200} cy={318} rx={80} ry={14} fill={t.deep} opacity={0.08} />
      <Shape kind={kind} t={t} />
    </svg>
  );
}
