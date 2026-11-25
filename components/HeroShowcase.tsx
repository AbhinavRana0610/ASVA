"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { getProduct } from "@/lib/data";

// Products with clean white-background shots that sit well inside the round stage.
const SLUGS = [
  "curve-6-dj",
  "bldc-4-slim-25",
  "t-type-1",
  "pyramid-3",
  "hexagonal-ductless",
  "bldc-9-curve",
  "curve-4",
  "bldc-10-inclined",
];

const slides = SLUGS.map((s) => getProduct(s)).filter((p) => p !== undefined);
const INTERVAL = 1500;

export default function HeroShowcase() {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    if (paused || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const id = window.setInterval(() => setIndex((i) => (i + 1) % slides.length), INTERVAL);
    return () => window.clearInterval(id);
  }, [paused]);

  const current = slides[index];

  return (
    <div
      className="relative h-full w-full"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      <div className="absolute inset-0 animate-spin-slow rounded-full border border-dashed border-white/15" />
      <div className="absolute inset-[8%] rounded-full bg-white shadow-[0_40px_120px_-20px_rgba(0,0,0,0.6)]" />

      <Link
        href={`/products/${current.slug}`}
        aria-label={`View ${current.name}`}
        className="absolute inset-[8%] animate-float overflow-hidden rounded-full"
      >
        {slides.map((p, i) => (
          <Image
            key={p.slug}
            src={p.img}
            alt={p.name}
            fill
            priority={i === 0}
            sizes="(min-width: 1024px) 560px, 90vw"
            aria-hidden={i !== index}
            className={`object-contain p-[12%] mix-blend-multiply transition-all duration-700 ease-out ${
              i === index ? "scale-100 opacity-100" : "scale-90 opacity-0"
            }`}
          />
        ))}
      </Link>

      {/* Name chip follows the current slide */}
      <div className="absolute top-[12%] -left-2 rounded-2xl bg-forest-800/90 px-4 py-3 shadow-xl ring-1 ring-white/20 backdrop-blur-md sm:left-0">
        <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-saffron">Featured</p>
        <p key={current.slug} className="animate-[fadeUp_0.6s_ease-out] font-display text-lg" aria-live="polite">
          {current.name.replace(/^ASVA /, "")}
        </p>
      </div>

      <div className="absolute right-0 bottom-[10%] rounded-2xl bg-saffron px-5 py-4 text-forest-950 shadow-xl">
        <p className="font-display text-3xl leading-none">28+</p>
        <p className="mt-1 text-xs font-semibold">chimney models</p>
      </div>

      {/* Slide dots */}
      <div className="absolute -bottom-9 left-1/2 flex -translate-x-1/2">
        {slides.map((p, i) => (
          <button
            key={p.slug}
            type="button"
            onClick={() => setIndex(i)}
            aria-label={`Show ${p.name}`}
            aria-current={i === index || undefined}
            className="group/dot flex h-8 items-center px-1"
          >
            <span className={`block h-1.5 rounded-full transition-all duration-500 ${i === index ? "w-6 bg-saffron" : "w-1.5 bg-white/30 group-hover/dot:bg-white/60"}`} />
          </button>
        ))}
      </div>
    </div>
  );
}
