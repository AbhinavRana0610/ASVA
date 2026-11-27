"use client";

import ZoomImage from "./ZoomImage";
import { useEffect, useState } from "react";
import { Button } from "./ui";

export type SeriesTab = {
  id: string;
  name: string;
  accent: string;
  blurb: string;
  img: string;
  href: string;
  facts: [string, string][];
};

const DURATION = 7000;

// Dark band with a progress-bar tab per series, auto-advancing like the hero.
export default function SeriesTabs({ tabs }: { tabs: SeriesTab[] }) {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    if (paused || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const id = window.setTimeout(() => setIndex((i) => (i + 1) % tabs.length), DURATION);
    return () => window.clearTimeout(id);
  }, [index, paused, tabs.length]);

  const t = tabs[index];

  return (
    <section className="bg-forest-950 py-20 text-white sm:py-24" onMouseEnter={() => setPaused(true)} onMouseLeave={() => setPaused(false)}>
      <div className="mx-auto max-w-[72rem] px-4 sm:px-6">
        <div role="tablist" aria-label="Chimney series" className="no-scrollbar -mx-4 flex gap-4 overflow-x-auto px-4 sm:mx-0 sm:px-0">
          {tabs.map((tab, i) => (
            <button
              key={tab.id}
              role="tab"
              type="button"
              aria-selected={i === index}
              onClick={() => setIndex(i)}
              className="min-w-[140px] flex-1 text-left"
            >
              <span className="relative block h-[3px] w-full overflow-hidden bg-white/25">
                <span
                  key={i === index ? `on-${index}` : "off"}
                  className="absolute inset-y-0 left-0 bg-saffron"
                  style={
                    i === index
                      ? { width: "100%", animation: `heroFill ${DURATION}ms linear forwards`, animationPlayState: paused ? "paused" : "running" }
                      : { width: i < index ? "100%" : "0%", opacity: i < index ? 0.5 : 1 }
                  }
                />
              </span>
              <span className={`mt-4 block text-[11px] font-bold uppercase tracking-[0.18em] ${i === index ? "text-white" : "text-white/50"}`}>{tab.name}</span>
            </button>
          ))}
        </div>

        <div key={t.id} role="tabpanel" className="mt-12 grid animate-[fadeUp_0.6s_ease-out] items-center gap-10 lg:grid-cols-12 lg:gap-16">
          <div className="relative aspect-[4/3] bg-white lg:col-span-7">
            <ZoomImage src={t.img} alt={t.name} sizes="100vw" className="object-contain p-8 sm:p-12" />
          </div>
          <div className="lg:col-span-5">
            <h2 className="font-display text-4xl leading-tight sm:text-5xl">
              Discover
              <br />
              <em>{t.accent}</em>
            </h2>
            <p className="mt-6 text-lg leading-relaxed text-white/75">{t.blurb}</p>
            <dl className="mt-8 grid grid-cols-2 gap-px bg-white/10">
              {t.facts.map(([v, l]) => (
                <div key={l} className="bg-forest-950 py-4 pr-4">
                  <dt className="text-2xl text-white">{v}</dt>
                  <dd className="mt-1 text-xs uppercase tracking-[0.14em] text-white/50">{l}</dd>
                </div>
              ))}
            </dl>
            <div className="mt-10">
              <Button href={t.href}>Learn more</Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
