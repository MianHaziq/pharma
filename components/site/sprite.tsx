// Global SVG symbol sprite — icons referenced via <svg><use href="#id"/></svg>.
// Rendered once in the root layout. Geometry ported verbatim from the design deck.
export function Sprite() {
  return (
    <svg width="0" height="0" style={{ position: "absolute" }} aria-hidden="true">
      <symbol id="bmark-line" viewBox="0 0 48 48">
        <rect x="13" y="8" width="6" height="32" fill="currentColor" />
        <circle cx="27" cy="30" r="7" fill="none" stroke="currentColor" strokeWidth="6" />
      </symbol>
      <symbol id="i-broiler" viewBox="0 0 64 64">
        <path d="M20 44c0-11 8-19 18-19h6" fill="none" stroke="currentColor" strokeWidth="2.6" strokeLinecap="round" />
        <circle cx="44" cy="22" r="7" fill="none" stroke="currentColor" strokeWidth="2.6" />
        <path d="M51 20l6-3-4 6" fill="none" stroke="currentColor" strokeWidth="2.6" strokeLinejoin="round" />
        <path d="M42 15c0-3 2-5 4-4" fill="none" stroke="currentColor" strokeWidth="2.6" strokeLinecap="round" />
        <path d="M20 44h22M26 44v6M36 44v6" fill="none" stroke="currentColor" strokeWidth="2.6" strokeLinecap="round" />
        <path d="M22 36c4 3 10 4 14 2" fill="none" stroke="currentColor" strokeWidth="2.6" strokeLinecap="round" />
      </symbol>
      <symbol id="i-layer" viewBox="0 0 64 64">
        <ellipse cx="32" cy="38" rx="13" ry="16" fill="none" stroke="currentColor" strokeWidth="2.6" />
        <path d="M32 22c0-6 3-10 7-12" fill="none" stroke="currentColor" strokeWidth="2.6" strokeLinecap="round" />
        <path d="M19 30c-4-2-6-6-5-10" fill="none" stroke="currentColor" strokeWidth="2.6" strokeLinecap="round" />
        <circle cx="32" cy="38" r="4.5" fill="none" stroke="currentColor" strokeWidth="2.6" />
      </symbol>
      <symbol id="i-breeder" viewBox="0 0 64 64">
        <circle cx="24" cy="32" r="9" fill="none" stroke="currentColor" strokeWidth="2.6" />
        <circle cx="42" cy="32" r="9" fill="none" stroke="currentColor" strokeWidth="2.6" />
        <path d="M33 23v18" fill="none" stroke="currentColor" strokeWidth="2.6" strokeDasharray="3 4.5" strokeLinecap="round" />
        <path d="M24 16v5M42 16v5" fill="none" stroke="currentColor" strokeWidth="2.6" strokeLinecap="round" />
        <path d="M18 47h30" fill="none" stroke="currentColor" strokeWidth="2.6" strokeLinecap="round" />
      </symbol>
      <symbol id="i-cattle" viewBox="0 0 64 64">
        <path d="M19 19c-6-2-11 0-13 4 4 3 9 3 13 1" fill="none" stroke="currentColor" strokeWidth="2.6" strokeLinejoin="round" />
        <path d="M45 19c6-2 11 0 13 4-4 3-9 3-13 1" fill="none" stroke="currentColor" strokeWidth="2.6" strokeLinejoin="round" />
        <path d="M26 15c-2-4-1-8 1-10M38 15c2-4 1-8-1-10" fill="none" stroke="currentColor" strokeWidth="2.6" strokeLinecap="round" />
        <path d="M20 19c2-3 6-4 12-4s10 1 12 4c2 6 0 13-4 17-2 2-5 4-8 4s-6-2-8-4c-4-4-6-11-4-17z" fill="none" stroke="currentColor" strokeWidth="2.6" strokeLinejoin="round" />
        <ellipse cx="32" cy="36" rx="6.5" ry="4.2" fill="none" stroke="currentColor" strokeWidth="2.6" />
        <circle cx="29.5" cy="36" r="1.1" fill="currentColor" />
        <circle cx="34.5" cy="36" r="1.1" fill="currentColor" />
        <circle cx="27" cy="26" r="1.4" fill="currentColor" />
        <circle cx="37" cy="26" r="1.4" fill="currentColor" />
      </symbol>
      <symbol id="i-sheep" viewBox="0 0 64 64">
        <path d="M22 24a5 5 0 0 1 1-9 5 5 0 0 1 9-2 5 5 0 0 1 9 2 5 5 0 0 1 1 9" fill="none" stroke="currentColor" strokeWidth="2.6" strokeLinejoin="round" />
        <path d="M22 26c-4-1-7 1-7 5M42 26c4-1 7 1 7 5" fill="none" stroke="currentColor" strokeWidth="2.6" strokeLinecap="round" />
        <path d="M23 24c0 10 4 18 9 18s9-8 9-18" fill="none" stroke="currentColor" strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M23 24c2-2 16-2 18 0" fill="none" stroke="currentColor" strokeWidth="2.6" strokeLinecap="round" />
        <circle cx="28" cy="30" r="1.4" fill="currentColor" />
        <circle cx="36" cy="30" r="1.4" fill="currentColor" />
      </symbol>
      <symbol id="i-hatchery" viewBox="0 0 64 64">
        <path d="M32 12c8 8 12 15 12 22a12 12 0 0 1-24 0c0-7 4-14 12-22z" fill="none" stroke="currentColor" strokeWidth="2.6" />
        <path d="M22 34l6 3 5-5 5 5 6-3" fill="none" stroke="currentColor" strokeWidth="2.6" strokeLinejoin="round" />
        <path d="M20 52h24" fill="none" stroke="currentColor" strokeWidth="2.6" strokeLinecap="round" />
      </symbol>
      <symbol id="i-shield" viewBox="0 0 64 64">
        <path d="M32 10l18 7v14c0 12-8 20-18 23-10-3-18-11-18-23V17l18-7z" fill="none" stroke="currentColor" strokeWidth="2.6" strokeLinejoin="round" />
        <path d="M24 32l6 6 11-12" fill="none" stroke="currentColor" strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round" />
      </symbol>
      <symbol id="i-temp" viewBox="0 0 64 64">
        <path d="M28 36V16a4 4 0 0 1 8 0v20a9 9 0 1 1-8 0z" fill="none" stroke="currentColor" strokeWidth="2.6" />
        <path d="M32 24v14" fill="none" stroke="currentColor" strokeWidth="2.6" strokeLinecap="round" />
        <path d="M42 20h7M42 28h5" fill="none" stroke="currentColor" strokeWidth="2.6" strokeLinecap="round" />
      </symbol>
      <symbol id="i-doc" viewBox="0 0 64 64">
        <path d="M18 12h20l10 10v30H18z" fill="none" stroke="currentColor" strokeWidth="2.6" strokeLinejoin="round" />
        <path d="M38 12v10h10" fill="none" stroke="currentColor" strokeWidth="2.6" strokeLinejoin="round" />
        <path d="M25 32h14M25 40h14" fill="none" stroke="currentColor" strokeWidth="2.6" strokeLinecap="round" />
      </symbol>
      <symbol id="i-hand" viewBox="0 0 64 64">
        <path d="M14 34l8-8 10 10" fill="none" stroke="currentColor" strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M50 34l-8-8-10 10" fill="none" stroke="currentColor" strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M14 34v8a6 6 0 0 0 6 6h24a6 6 0 0 0 6-6v-8" fill="none" stroke="currentColor" strokeWidth="2.6" strokeLinecap="round" />
        <path d="M32 14v14" fill="none" stroke="currentColor" strokeWidth="2.6" strokeLinecap="round" />
      </symbol>
    </svg>
  );
}
