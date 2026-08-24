"use client";

import { useState } from "react";

// Category legend / filter chips — visual toggle, matching the design deck.
export function Chips({ items }: { items: string[] }) {
  const [active, setActive] = useState(0);
  return (
    <div className="chips" data-anim="rise" role="group" aria-label="Filter brands by category">
      {items.map((label, i) => (
        <button
          key={label}
          className={`chip${i === active ? " chip--on chip--dot" : ""}`}
          onClick={() => setActive(i)}
        >
          {label}
        </button>
      ))}
    </div>
  );
}
