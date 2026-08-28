import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Reach Bilal Pharmaceuticals — call, WhatsApp or email. Tell us what you need and we'll come back with what we carry, what it costs and when it can reach you.",
  alternates: { canonical: "/contact" },
};

const METHODS = [
  {
    k: "Call us",
    value: "+92 336 8883 198",
    href: "tel:+923368883198",
    note: "Mon–Sat, 9:00–18:00 PKT. Ask for sales or the technical desk.",
  },
  {
    k: "WhatsApp",
    value: "+92 302 8699 198",
    href: "https://wa.me/923028699198",
    note: "Fastest for urgent orders and quick product questions.",
    external: true,
  },
  {
    k: "Email",
    value: "chbilalpharmaceuticals@gmail.com",
    href: "mailto:chbilalpharmaceuticals@gmail.com",
    note: "Product enquiries, documentation and partnership proposals.",
    small: true,
  },
];

export default function ContactPage() {
  return (
    <>
      <div className="sec sec--tight sec--tint">
        <div className="wrap">
          <div className="split" style={{ alignItems: "end" }}>
            <div data-anim="rise">
              <p className="eyebrow">Contact</p>
              <h1 className="d1">Tell us <span className="hl">what you need.</span></h1>
            </div>
            <div data-anim="rise">
              <p className="lead">Tell us your requirement and we&apos;ll come back with what we carry for it, what it costs, and when it can reach you. For urgent orders, WhatsApp is fastest.</p>
            </div>
          </div>
        </div>
      </div>

      <div className="sec">
        <div className="wrap">
          <div className="split split--wide" style={{ gap: 64 }}>
            {/* Company / office info */}
            <div data-anim="rise">
              <div className="card">
                <span className="card__k">Bilal Pharmaceuticals</span>
                <span className="d3">Importers &amp; Distributors of Animal Health Products</span>
                <div className="kv">
                  <div className="kv__row"><span className="kv__k">CEO</span><span className="kv__dots" /><span className="kv__v">Muhammad Imran</span></div>
                  <div className="kv__row"><span className="kv__k">Hours</span><span className="kv__dots" /><span className="kv__v">Mon–Sat, 9:00–18:00 PKT</span></div>
                  <div className="kv__row"><span className="kv__k">Sales &amp; orders</span><span className="kv__dots" /><span className="kv__v">Same-day dispatch confirm</span></div>
                </div>
                <div className="mt-32">
                  <span className="card__k">Head Office</span>
                  <address style={{ fontStyle: "normal", fontSize: "15.5px", lineHeight: 1.75, color: "var(--ink)" }}>
                    Rathore Heights, Plot No. 14<br />Johar Boulevard, DHA Phase 5<br />Islamabad, Pakistan
                  </address>
                </div>
              </div>
              <div className="card mt-24">
                <span className="card__k">For suppliers</span>
                <span className="d4">Manufacturers looking for a distribution partner</span>
                <p>Send your product range and technical documentation to our email, with &quot;Distribution partnership&quot; in the subject line. Muhammad Imran reviews these directly.</p>
              </div>
            </div>

            {/* Ways to reach us */}
            <div data-anim="rise">
              <p className="eyebrow">Ways to reach us</p>
              <h2 className="d2" style={{ marginBottom: 28 }}>Talk to us directly.</h2>
              <div className="grid" style={{ gap: 16 }}>
                {METHODS.map((m) => (
                  <a
                    key={m.k}
                    href={m.href}
                    {...(m.external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                    className="card tilt"
                    style={{ color: "inherit", display: "block" }}
                  >
                    <span className="card__k">{m.k}</span>
                    <span
                      className={m.small ? "d4" : "d3"}
                      style={m.small ? { wordBreak: "break-word", color: "var(--label)" } : { color: "var(--label)" }}
                    >
                      {m.value}
                    </span>
                    <p>{m.note}</p>
                    <span className="txtlink mt-16" style={{ pointerEvents: "none" }}>
                      {m.k === "Email" ? "Send an email" : m.k === "WhatsApp" ? "Open WhatsApp" : "Call now"} <span className="arw">→</span>
                    </span>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="sec sec--tint">
        <div className="wrap">
          <div className="sec-head" data-anim="rise">
            <p className="eyebrow">Faster routes</p>
            <h2 className="d2">Know what you need already?</h2>
          </div>
          <div className="grid g3" data-stagger="80">
            <div className="card tilt" data-anim="pop"><span className="card__k">Ordering</span><span className="d4">Place a repeat order</span><p>WhatsApp us your previous order reference and quantity. We&apos;ll confirm stock and dispatch timing the same day.</p></div>
            <div className="card tilt" data-anim="pop"><span className="card__k">Technical</span><span className="d4">Ask a product question</span><p>Dosage, withdrawal periods, compatibility or storage — call and ask for the technical desk.</p></div>
            <div className="card tilt" data-anim="pop"><span className="card__k">Trade</span><span className="d4">Open a trade account</span><p>For retailers and feed mills buying regularly. Email us and we&apos;ll send the terms.</p></div>
          </div>
        </div>
      </div>
    </>
  );
}
