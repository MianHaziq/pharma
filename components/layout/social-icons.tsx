export type SocialName = "facebook" | "instagram" | "x" | "youtube" | "linkedin";

// Inline brand glyphs (lucide v1 removed brand icons).
export function SocialIcon({
  name,
  size = 16,
}: {
  name: SocialName;
  size?: number;
}) {
  const common = {
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "currentColor",
    "aria-hidden": true as const,
  };
  switch (name) {
    case "facebook":
      return (
        <svg {...common}>
          <path d="M13.5 21v-8h2.7l.4-3.1h-3.1V7.9c0-.9.25-1.5 1.55-1.5H17V3.6c-.3 0-1.3-.1-2.45-.1-2.43 0-4.05 1.48-4.05 4.2v2.2H7.8V13h2.7v8h3z" />
        </svg>
      );
    case "instagram":
      return (
        <svg {...common} fill="none" stroke="currentColor" strokeWidth={2}>
          <rect x="3" y="3" width="18" height="18" rx="5" />
          <circle cx="12" cy="12" r="3.6" />
          <circle cx="17.2" cy="6.8" r="1" fill="currentColor" stroke="none" />
        </svg>
      );
    case "x":
      return (
        <svg {...common}>
          <path d="M17.5 3h3l-6.55 7.5L21.8 21h-6.03l-4.72-6.18L5.6 21H2.6l7-8.02L2.4 3h6.18l4.27 5.65L17.5 3zm-1.06 16.2h1.67L7.63 4.7H5.84L16.44 19.2z" />
        </svg>
      );
    case "youtube":
      return (
        <svg {...common}>
          <path d="M23 12s0-3.2-.4-4.72a2.46 2.46 0 0 0-1.73-1.74C19.35 5.1 12 5.1 12 5.1s-7.35 0-8.87.44A2.46 2.46 0 0 0 1.4 7.28C1 8.8 1 12 1 12s0 3.2.4 4.72a2.46 2.46 0 0 0 1.73 1.74c1.52.44 8.87.44 8.87.44s7.35 0 8.87-.44a2.46 2.46 0 0 0 1.73-1.74C23 15.2 23 12 23 12zM9.75 15.02V8.98L15 12l-5.25 3.02z" />
        </svg>
      );
    case "linkedin":
      return (
        <svg {...common}>
          <path d="M6.94 5A1.94 1.94 0 1 1 3.06 5a1.94 1.94 0 0 1 3.88 0zM3.3 8.4h3.28V21H3.3zM9.2 8.4h3.14v1.72h.05c.44-.83 1.5-1.7 3.1-1.7 3.32 0 3.93 2.18 3.93 5.02V21h-3.28v-5.56c0-1.33-.02-3.03-1.85-3.03-1.85 0-2.13 1.44-2.13 2.93V21H9.2z" />
        </svg>
      );
  }
}
