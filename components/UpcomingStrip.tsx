"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import Reveal from "./Reveal";

type Item = { name: string; img: string };

// Row of small product tiles; clicking one opens it large in a lightbox
// (native <dialog>: Esc closes, focus is trapped). Arrow keys step through.
export default function UpcomingStrip({ items }: { items: Item[] }) {
  const ref = useRef<HTMLDialogElement>(null);
  const [open, setOpen] = useState<number | null>(null);

  const show = (i: number) => {
    setOpen(i);
    ref.current?.showModal();
  };
  const close = () => ref.current?.close();
  const step = (d: number) => setOpen((i) => (i === null ? i : (i + d + items.length) % items.length));

  // While open: lock page scroll and let the arrow keys step through photos.
  const isOpen = open !== null;
  useEffect(() => {
    if (!isOpen) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const onKey = (e: KeyboardEvent) => {
      const d = e.key === "ArrowRight" ? 1 : e.key === "ArrowLeft" ? -1 : 0;
      if (d) setOpen((i) => (i === null ? i : (i + d + items.length) % items.length));
    };
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = prev;
      window.removeEventListener("keydown", onKey);
    };
  }, [isOpen, items.length]);

  const cur = open === null ? null : items[open];

  return (
    <>
      <div className="mt-3 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
        {items.map((u, i) => (
          <Reveal key={u.name} delay={500 + i * 100} variant="right">
            <button
              type="button"
              onClick={() => show(i)}
              aria-label={`View larger photo: ${u.name}`}
              className="group flex w-full cursor-zoom-in items-center gap-4 bg-mint text-left transition duration-300 hover:-translate-y-1 hover:bg-mint-200 hover:shadow-lg"
            >
              <span className="relative h-[72px] w-[72px] shrink-0 overflow-hidden bg-white">
                <Image src={u.img} alt="" fill sizes="80px" className="object-cover transition-transform duration-500 group-hover:scale-110" />
              </span>
              <span className="pr-4 leading-snug text-forest-950">{u.name}</span>
            </button>
          </Reveal>
        ))}
      </div>

      <dialog
        ref={ref}
        aria-label={cur ? cur.name : "Product photo"}
        onClose={() => setOpen(null)}
        onClick={(e) => {
          if (e.target === e.currentTarget) close();
        }}
        className="m-auto w-[calc(100%-2rem)] max-w-2xl overflow-visible bg-transparent p-0 backdrop:bg-forest-950/80 backdrop:backdrop-blur-sm open:animate-[popIn_0.35s_cubic-bezier(0.2,0.7,0.2,1)]"
      >
        {cur && (
          <figure className="relative bg-white shadow-2xl">
            <div className="relative aspect-square max-h-[75svh] w-full bg-white">
              <Image key={cur.img} src={cur.img} alt={cur.name} fill sizes="(min-width:672px) 672px, 100vw" className="animate-[fadeUp_0.4s_ease-out] object-contain p-4" />
            </div>
            <figcaption className="flex items-center justify-between gap-4 border-t border-forest-950/10 px-5 py-4">
              <span>
                <span className="block text-[10px] font-bold uppercase tracking-wider text-forest">Coming soon</span>
                <span className="text-lg text-forest-950">{cur.name}</span>
              </span>
              <span className="text-sm text-forest-950/50">
                {open! + 1} / {items.length}
              </span>
            </figcaption>

            <button type="button" onClick={close} aria-label="Close" className="absolute top-3 right-3 flex h-10 w-10 items-center justify-center rounded-full bg-white/90 text-forest-950 shadow ring-1 ring-forest/10 transition hover:bg-mint">
              <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"><path d="M6 6l12 12M18 6 6 18" /></svg>
            </button>
            {[
              { d: -1, label: "Previous photo", cls: "left-3", path: "M15 6l-6 6 6 6" },
              { d: 1, label: "Next photo", cls: "right-3", path: "M9 6l6 6-6 6" },
            ].map((b) => (
              <button
                key={b.d}
                type="button"
                onClick={() => step(b.d)}
                aria-label={b.label}
                className={`absolute top-1/2 ${b.cls} flex h-11 w-11 -translate-y-1/2 items-center justify-center bg-forest-950/80 text-white transition hover:bg-forest`}
              >
                <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d={b.path} /></svg>
              </button>
            ))}
          </figure>
        )}
      </dialog>
    </>
  );
}
