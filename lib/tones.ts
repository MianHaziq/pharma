// UI tints shared by category tiles, promo bands and blog cards. Kept subtle
// and muted so the palette reads premium, not playful.

export interface ToneTint {
  bg: string;
  ring: string;
  icon: string;
  text: string;
}

export const toneTints: Record<string, ToneTint> = {
  mint: { bg: "#E9F4EF", ring: "#CDE7DC", icon: "#0F6E5C", text: "#0A4A3D" },
  sage: { bg: "#EDF1E7", ring: "#DCE6CF", icon: "#4F6B34", text: "#3B5227" },
  blush: { bg: "#F7ECEE", ring: "#EED7DC", icon: "#9E5061", text: "#7C3B49" },
  peach: { bg: "#FBEEE4", ring: "#F2D8C4", icon: "#B96E3C", text: "#8F5228" },
  sky: { bg: "#E7F0F6", ring: "#CFE1EE", icon: "#356A93", text: "#274F6E" },
  steel: { bg: "#EDF0F2", ring: "#D9DFE3", icon: "#4C5A64", text: "#37424A" },
  coral: { bg: "#FBEBE7", ring: "#F2D3CA", icon: "#C0533A", text: "#933C29" },
  lavender: { bg: "#EFEBF6", ring: "#DED6EF", icon: "#5E4E93", text: "#463A6E" },
  amber: { bg: "#FBF2DF", ring: "#F0E2BC", icon: "#B07E20", text: "#856019" },
  cream: { bg: "#F5F1E9", ring: "#E6DECC", icon: "#8A7B5E", text: "#6B5F46" },
};

export function getTint(tone: string): ToneTint {
  return toneTints[tone] ?? toneTints.mint;
}
