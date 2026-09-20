"use client";

/* eslint-disable @next/next/no-img-element */
import { useRef, useState } from "react";
import { brands } from "@/data/brands";
import { brandProducts } from "@/data/brand-products";

// Storage note per principal. Kept here next to the card that renders it.
const HANDLING: Record<string, string> = {
  "brand-toppharma": "Cool, dark",
  "brand-leads": "Cold chain 2–8°C",
  "brand-multivet": "Cool, dark",
  "brand-innomax": "Per product",
  "brand-ghazi": "Cool, dry",
  "brand-chakwal": "Cold chain 2–8°C",
  "brand-orient": "Per product",
};

const ALL = "all";

/**
 * Brand grid + chip filter over the product artwork. "All products" groups
 * every principal's range under its own heading; picking a single brand — from
 * a chip or by clicking its card — narrows to just that one. Brands with no
 * artwork yet stay in the grid but aren't selectable.
 */
export function BrandExplorer() {
  const selectable = brands.filter((b) => brandProducts[b.id]?.length);
  const [active, setActive] = useState<string>(ALL);
  const panelRef = useRef<HTMLDivElement>(null);

  const groups = active === ALL ? selectable : selectable.filter((b) => b.id === active);
  const total = selectable.reduce((n, b) => n + brandProducts[b.id].length, 0);

  function choose(id: string) {
    setActive(id);
    // On narrow screens the cards stack, so the panel can be well below the
    // fold — bring it into view rather than leaving the tap looking inert.
    if (window.matchMedia("(max-width: 760px)").matches) {
      window.requestAnimationFrame(() =>
        panelRef.current?.scrollIntoView({ behavior: "smooth", block: "start" }),
      );
    }
  }

  return (
    <>
      <div className="grid g3" aria-label="Brands we distribute">
        {brands.map((b) => {
          const count = brandProducts[b.id]?.length ?? 0;
          const on = b.id === active;
          const card = (
            <>
              <div className="bplate__logo">
                <img src={b.logo} alt={b.name} loading="lazy" decoding="async" />
              </div>
              <div className="bplate__body">
                <div className="bplate__foot">
                  <div className="kv">
                    <div className="kv__row">
                      <span className="kv__k">Handling</span>
                      <span className="kv__dots" />
                      <span className="kv__v">{HANDLING[b.id] ?? "Standard"}</span>
                    </div>
                    <div className="kv__row">
                      <span className="kv__k">Products</span>
                      <span className="kv__dots" />
                      <span className="kv__v">{count ? count : "On request"}</span>
                    </div>
                  </div>
                  <div className="chips mt-24">
                    {count ? (
                      <span className={`chip chip--dot${on ? " chip--on" : ""}`}>
                        {on ? "Showing range" : "View range"}
                      </span>
                    ) : (
                      <span className="chip" style={{ cursor: "default" }}>
                        Imported &amp; distributed
                      </span>
                    )}
                  </div>
                </div>
              </div>
            </>
          );

          return count ? (
            <button
              type="button"
              aria-pressed={on}
              aria-controls="brand-range"
              className={`bplate bplate--btn${on ? " bplate--on" : ""}`}
              onClick={() => choose(b.id)}
              key={b.id}
            >
              {card}
            </button>
          ) : (
            <div className="bplate bplate--static" key={b.id}>
              {card}
            </div>
          );
        })}
      </div>

      <div className="chips chips--filter" role="group" aria-label="Filter products by brand">
        <button
          type="button"
          aria-pressed={active === ALL}
          aria-controls="brand-range"
          className={`chip${active === ALL ? " chip--on chip--dot" : ""}`}
          onClick={() => choose(ALL)}
        >
          All products <span className="chip__n">{total}</span>
        </button>
        {selectable.map((b) => (
          <button
            type="button"
            aria-pressed={active === b.id}
            aria-controls="brand-range"
            className={`chip${active === b.id ? " chip--on chip--dot" : ""}`}
            onClick={() => choose(b.id)}
            key={`chip-${b.id}`}
          >
            {b.name} <span className="chip__n">{brandProducts[b.id].length}</span>
          </button>
        ))}
      </div>

      <div className="prodpanel" id="brand-range" aria-live="polite" ref={panelRef}>
        {groups.map((b) => (
          <section className="prodset" key={`set-${b.id}`}>
            <div className="prodset__h">
              <img src={b.logo} alt="" loading="lazy" decoding="async" />
              <span>
                {b.name} · {brandProducts[b.id].length}{" "}
                {brandProducts[b.id].length === 1 ? "item" : "items"}
              </span>
            </div>

            <div className="prods">
              {brandProducts[b.id].map((s) => (
                <a
                  className={`prods__i${s.wide ? " prods__i--w" : ""}`}
                  href={s.full}
                  target="_blank"
                  rel="noopener noreferrer"
                  key={s.src}
                >
                  <span className="prods__ph">
                    <img src={s.src} alt={s.alt} loading="lazy" decoding="async" />
                  </span>
                  <span className="prods__n">{s.alt}</span>
                </a>
              ))}
            </div>
          </section>
        ))}
      </div>
    </>
  );
}
