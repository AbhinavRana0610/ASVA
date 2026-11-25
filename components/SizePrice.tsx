"use client";

import { useState } from "react";

const SIZES = ["60 cm", "75 cm", "90 cm"];

export default function SizePrice({ prices }: { prices: (number | null)[] }) {
  const available = SIZES.map((s, i) => ({ s, p: prices[i] })).filter((x) => x.p !== null);
  const [idx, setIdx] = useState(0);

  if (available.length === 0)
    return (
      <div className="rounded-2xl bg-mint p-5">
        <p className="text-xs font-bold uppercase tracking-[0.2em] text-forest/60">Price</p>
        <p className="mt-1 font-display text-2xl text-forest-950">On request</p>
      </div>
    );

  return (
    <div className="rounded-2xl bg-mint p-5">
      <p className="text-xs font-bold uppercase tracking-[0.2em] text-forest/60">Choose size</p>
      <div className="mt-3 flex gap-2">
        {available.map((x, i) => (
          <button
            key={x.s}
            onClick={() => setIdx(i)}
            className={`rounded-full px-5 py-2 text-sm font-semibold transition ${
              i === idx ? "bg-forest text-white" : "bg-white text-forest-900 ring-1 ring-forest/15 hover:ring-forest/40"
            }`}
          >
            {x.s}
          </button>
        ))}
      </div>
      <div className="mt-5 flex items-end gap-2">
        <span className="font-display text-5xl text-forest-950">${available[idx].p!.toFixed(2).replace(/\.00$/, "")}</span>
        <span className="mb-2 text-sm text-forest-950/50">USD · as per price list</span>
      </div>
    </div>
  );
}
