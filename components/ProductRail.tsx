"use client";

import { useRef, type ReactNode } from "react";

// Horizontal, snap-scrolling row of cards with prev/next buttons beside the heading.
export default function ProductRail({ heading, children }: { heading: ReactNode; children: ReactNode }) {
  const ref = useRef<HTMLDivElement>(null);
  const scroll = (dir: 1 | -1) => {
    const el = ref.current;
    if (el) el.scrollBy({ left: dir * el.clientWidth * 0.8, behavior: "smooth" });
  };
  const btn = "flex h-10 w-10 items-center justify-center bg-mint-200 text-forest-950 transition-colors hover:bg-forest hover:text-white";

  return (
    <div>
      <div className="flex items-end justify-between gap-6">
        {heading}
        <div className="flex shrink-0 gap-2">
          <button type="button" onClick={() => scroll(-1)} aria-label="Previous products" className={btn}>
            <svg viewBox="0 0 12 12" className="h-3 w-3" aria-hidden><path d="M8 2 4 6l4 4" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" /></svg>
          </button>
          <button type="button" onClick={() => scroll(1)} aria-label="Next products" className={btn}>
            <svg viewBox="0 0 12 12" className="h-3 w-3" aria-hidden><path d="M4 2l4 4-4 4" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" /></svg>
          </button>
        </div>
      </div>
      <div ref={ref} className="no-scrollbar -mx-4 mt-10 flex snap-x snap-mandatory gap-4 overflow-x-auto scroll-px-4 px-4 pb-2 sm:mx-0 sm:scroll-px-0 sm:px-0">
        {children}
      </div>
    </div>
  );
}
