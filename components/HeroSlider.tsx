"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { Arrow } from "./ui";

export type HeroSlide = {
  img: string;
  title: string;
  accent: string;
  text: string;
  cta: string;
  href: string;
};

const DURATION = 6000;

// Full-bleed image slider with progress bars along the bottom (one per slide).
export default function HeroSlider({ slides }: { slides: HeroSlide[] }) {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    if (paused || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const id = window.setTimeout(() => setIndex((i) => (i + 1) % slides.length), DURATION);
    return () => window.clearTimeout(id);
  }, [index, paused, slides.length]);

  return (
    <section
      className="relative h-[100svh] min-h-[560px] overflow-hidden bg-forest-950 text-white"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      aria-roledescription="carousel"
    >
      {slides.map((s, i) => (
        <div
          key={s.img}
          aria-hidden={i !== index}
          className={`absolute inset-0 transition-opacity duration-1000 ${i === index ? "opacity-100" : "pointer-events-none opacity-0"}`}
        >
          <Image
            src={s.img}
            alt=""
            fill
            priority={i === 0}
            sizes="100vw"
            className={`object-cover transition-transform duration-[7000ms] ease-out ${i === index ? "scale-105" : "scale-100"}`}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/75 via-black/35 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

          <div className="relative mx-auto flex h-full max-w-7xl flex-col justify-end px-4 pb-28 sm:px-6 sm:pb-32">
            <h1
              className={`font-display text-[2.8rem] leading-[1.05] tracking-tight transition-all duration-700 sm:text-7xl ${
                i === index ? "translate-y-0 opacity-100 delay-300" : "translate-y-6 opacity-0"
              }`}
            >
              {s.title} <em>{s.accent}</em>
            </h1>
            <p
              className={`mt-4 max-w-xl text-lg text-white/85 transition-all duration-700 sm:text-xl ${
                i === index ? "translate-y-0 opacity-100 delay-500" : "translate-y-6 opacity-0"
              }`}
            >
              {s.text}
            </p>
            <div className={`mt-8 transition-all duration-700 ${i === index ? "translate-y-0 opacity-100 delay-700" : "translate-y-6 opacity-0"}`}>
              <Link
                href={s.href}
                tabIndex={i === index ? 0 : -1}
                className="group inline-flex min-w-[220px] items-center justify-between gap-8 bg-forest px-5 py-3.5 text-[13px] font-bold uppercase tracking-[0.08em] text-white transition-colors hover:bg-forest-500"
              >
                {s.cta}
                <Arrow className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </div>
          </div>
        </div>
      ))}

      {/* Progress bars */}
      <div className="absolute inset-x-0 bottom-8 mx-auto flex max-w-7xl gap-3 px-4 sm:gap-4 sm:px-6">
        {slides.map((s, i) => (
          <button
            key={s.img}
            type="button"
            onClick={() => setIndex(i)}
            aria-label={`Show slide ${i + 1}: ${s.title} ${s.accent}`}
            aria-current={i === index || undefined}
            className="group flex h-6 flex-1 items-center"
          >
            <span className="relative block h-[3px] w-full overflow-hidden bg-white/35 group-hover:bg-white/55">
              <span
                key={i === index ? `on-${index}` : "off"}
                className="absolute inset-y-0 left-0 bg-white"
                style={
                  i < index
                    ? { width: "100%" }
                    : i === index
                      ? { width: "100%", animation: `heroFill ${DURATION}ms linear forwards`, animationPlayState: paused ? "paused" : "running" }
                      : { width: "0%" }
                }
              />
            </span>
          </button>
        ))}
      </div>
    </section>
  );
}
