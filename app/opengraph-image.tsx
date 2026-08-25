import { ImageResponse } from "next/og";
import { company } from "@/data/company";

// Branded 1200×630 social/SERP share card. Next auto-wires this as both the
// Open Graph and Twitter image for every route that doesn't override it.
export const alt = `${company.name} — ${company.tagline}`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "80px",
          // Brand magenta gradient (--brand-grad-from → --brand-grad-to).
          background: "linear-gradient(135deg, #b0187e 0%, #e8286d 100%)",
          color: "#ffffff",
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: "24px" }}>
          <div
            style={{
              width: "84px",
              height: "84px",
              borderRadius: "20px",
              background: "rgba(255,255,255,0.16)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: "48px",
              fontWeight: 700,
            }}
          >
            B
          </div>
          <div style={{ fontSize: "30px", letterSpacing: "0.06em", opacity: 0.92 }}>
            {company.hq.line2}
          </div>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: "24px" }}>
          <div style={{ fontSize: "86px", fontWeight: 700, lineHeight: 1.05 }}>
            {company.name}
          </div>
          <div style={{ fontSize: "40px", lineHeight: 1.2, opacity: 0.94, maxWidth: "900px" }}>
            {company.tagline}
          </div>
        </div>

        <div style={{ fontSize: "30px", opacity: 0.9 }}>{company.domain}</div>
      </div>
    ),
    size,
  );
}
