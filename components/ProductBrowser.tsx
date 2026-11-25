"use client";

import { useMemo, useState } from "react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import ProductCard from "./ProductCard";
import { products, series, type SeriesId } from "@/lib/data";

type Sort = "default" | "suction" | "noise";

export default function ProductBrowser() {
  const params = useSearchParams();
  const router = useRouter();
  const pathname = usePathname();
  const fromUrl = params.get("series");
  const active: SeriesId | "all" = series.some((s) => s.id === fromUrl) ? (fromUrl as SeriesId) : "all";
  const [q, setQ] = useState("");
  const [sort, setSort] = useState<Sort>("default");

  const select = (id: SeriesId | "all") => {
    const sp = new URLSearchParams(params.toString());
    if (id === "all") sp.delete("series");
    else sp.set("series", id);
    const qs = sp.toString();
    router.replace(qs ? `${pathname}?${qs}` : pathname, { scroll: false });
  };

  const list = useMemo(() => {
    let l = products.filter((p) => active === "all" || p.series === active);
    if (q.trim()) {
      const t = q.toLowerCase();
      l = l.filter((p) => `${p.name} ${p.code}`.toLowerCase().includes(t));
    }
    if (sort !== "default") {
      l = [...l].sort((a, b) => {
        if (a.kind !== "chimney" || b.kind !== "chimney") return a.kind === "chimney" ? -1 : 1;
        if (sort === "suction") return b.specs.suction - a.specs.suction;
        return parseInt(a.specs.noise.replace(/\D/g, "")) - parseInt(b.specs.noise.replace(/\D/g, ""));
      });
    }
    return l;
  }, [active, q, sort]);

  const activeSeries = series.find((s) => s.id === active);

  return (
    <div>
      <div className="sticky top-20 z-30 -mx-4 bg-white/85 px-4 py-4 backdrop-blur-xl sm:-mx-6 sm:px-6">
        <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
          <div className="no-scrollbar -mx-1 flex gap-2 overflow-x-auto px-1">
            {[{ id: "all" as const, name: "All products" }, ...series].map((s) => {
              const count = s.id === "all" ? products.length : products.filter((p) => p.series === s.id).length;
              const on = active === s.id;
              return (
                <button
                  key={s.id}
                  onClick={() => select(s.id)}
                  className={`flex shrink-0 items-center gap-2 rounded-full px-5 py-2.5 text-sm font-semibold transition-all ${
                    on ? "bg-forest text-white shadow-lg shadow-forest/25" : "bg-mint text-forest-900 hover:bg-mint-200"
                  }`}
                >
                  {s.name}
                  <span className={`rounded-full px-2 py-0.5 text-[10px] ${on ? "bg-saffron text-forest-950" : "bg-white text-forest"}`}>{count}</span>
                </button>
              );
            })}
          </div>
          <div className="flex gap-2">
            <input
              value={q}
              onChange={(e) => setQ(e.target.value)}
              placeholder="Search model…"
              aria-label="Search models"
              className="w-full rounded-full bg-mint px-5 py-2.5 text-sm outline-none ring-forest/30 placeholder:text-forest-950/40 focus:ring-2 lg:w-56"
            />
            <select
              value={sort}
              onChange={(e) => setSort(e.target.value as Sort)}
              aria-label="Sort"
              className="rounded-full bg-mint px-4 py-2.5 text-sm font-medium text-forest-900 outline-none focus:ring-2 focus:ring-forest/30"
            >
              <option value="default">Sort: Default</option>
              <option value="suction">Highest suction</option>
              <option value="noise">Quietest</option>
            </select>
          </div>
        </div>
      </div>

      {activeSeries && (
        <div className="mt-8 flex flex-col gap-2 rounded-3xl bg-mint p-6 sm:flex-row sm:items-center sm:gap-6 sm:p-8">
          <span className="font-display text-5xl text-saffron-600">{activeSeries.code}</span>
          <div>
            <h2 className="font-display text-2xl text-forest-950">{activeSeries.name}</h2>
            <p className="mt-1 text-forest-950/65">{activeSeries.blurb}</p>
          </div>
        </div>
      )}

      <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {list.map((p) => (
          <ProductCard key={p.slug} product={p} />
        ))}
      </div>
      {list.length === 0 && <p className="py-20 text-center text-forest-950/50">No models match “{q}”.</p>}
    </div>
  );
}
