import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Reveal from "@/components/Reveal";
import { Button, Heading, Icon, PageHero } from "@/components/ui";
import { chimneys, products, series, vacuums } from "@/lib/data";

export const metadata: Metadata = {
  title: "Catalogue",
  description: "Browse the complete ASVA India catalogue and price list — every chimney model with technical specifications.",
};

const fmt = (n: number | null) => (n === null ? "—" : `$${n % 1 ? n.toFixed(2) : n}`);

export default function CataloguePage() {
  return (
    <>
      <PageHero
        eyebrow="Catalogue"
        title={
          <>
            The complete <span className="italic text-saffron">ASVA</span> collection.
          </>
        }
        text="Browse every model in our digital catalogue, compare specifications in the price list, or download the original PDFs."
      >
        <div className="mt-10 flex flex-wrap gap-3">
          <Button href="/catalogue/ASVA-Catalogue.pdf" download>
            Download Catalogue (PDF)
          </Button>
          <Button href="/catalogue/ASVA-Price-List.pdf" variant="ghost" download>
            Download Price List
          </Button>
        </div>
      </PageHero>

      {/* Download cards */}
      <section className="relative pt-12 pb-8">
        <div className="mx-auto grid max-w-7xl gap-4 px-4 sm:px-6 md:grid-cols-2">
          {[
            { title: "Product Catalogue", meta: "40 pages · PDF · 24 MB", href: "/catalogue/ASVA-Catalogue.pdf", img: "/images/products/curve-4.jpg" },
            { title: "Price List & Specifications", meta: "28 models · PDF · 1 MB", href: "/catalogue/ASVA-Price-List.pdf", img: "/images/products/bldc-9.jpg" },
          ].map((d, i) => (
            <Reveal key={d.title} delay={i * 80}>
              <a
                href={d.href}
                target="_blank"
                rel="noreferrer"
                className="group flex items-center gap-6 overflow-hidden rounded-3xl bg-white p-4 pr-8 shadow-xl shadow-forest/10 ring-1 ring-forest/10 transition hover:-translate-y-1"
              >
                <div className="relative h-28 w-36 shrink-0 overflow-hidden rounded-2xl bg-mint">
                  <Image src={d.img} alt="" fill sizes="144px" className="object-contain p-2 mix-blend-multiply" />
                  <span className="absolute bottom-2 left-2 rounded bg-forest px-1.5 py-0.5 text-[9px] font-bold text-white">PDF</span>
                </div>
                <div className="flex-1">
                  <h2 className="font-display text-2xl text-forest-950">{d.title}</h2>
                  <p className="mt-1 text-sm text-forest-950/55">{d.meta}</p>
                </div>
                <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-saffron text-forest-950 transition group-hover:scale-110">
                  <Icon name="download" className="h-5 w-5" />
                </span>
              </a>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Series jump nav */}
      <nav className="sticky top-20 z-30 mt-12 border-y border-forest/10 bg-white/85 backdrop-blur-xl" aria-label="Catalogue sections">
        <div className="no-scrollbar mx-auto flex max-w-7xl gap-2 overflow-x-auto px-4 py-3 sm:px-6">
          {series.map((s) => (
            <a key={s.id} href={`#${s.id}`} className="shrink-0 rounded-full bg-mint px-4 py-2 text-sm font-semibold text-forest-900 transition hover:bg-forest hover:text-white">
              {s.name}
            </a>
          ))}
          <a href="#price-list" className="shrink-0 rounded-full bg-saffron px-4 py-2 text-sm font-semibold text-forest-950">
            Price list
          </a>
        </div>
      </nav>

      {/* Digital catalogue pages */}
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        {series.map((s, si) => {
          const items = products.filter((p) => p.series === s.id);
          return (
            <section key={s.id} id={s.id} className="scroll-mt-40 border-b border-forest/10 py-20 last:border-0">
              <Reveal>
                <div className="grid gap-6 md:grid-cols-[auto_1fr] md:items-end md:gap-12">
                  <span className="font-display text-8xl leading-none text-saffron/90 sm:text-9xl">{String(si + 1).padStart(2, "0")}</span>
                  <div>
                    <p className="text-xs font-bold uppercase tracking-[0.3em] text-forest/60">{s.code} · {items.length} {items.length === 1 ? "model" : "models"}</p>
                    <h2 className="mt-2 font-display text-4xl text-forest-950 sm:text-5xl">{s.name}</h2>
                    <p className="mt-3 max-w-2xl text-forest-950/65">{s.blurb}</p>
                  </div>
                </div>
              </Reveal>
              <div className="mt-12 grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4">
                {items.map((p, i) => (
                  <Reveal key={p.slug} delay={(i % 4) * 60}>
                    <Link href={`/products/${p.slug}`} className="group block overflow-hidden rounded-3xl bg-mint/70 ring-1 ring-forest/5 transition hover:bg-white hover:shadow-xl hover:shadow-forest/10 hover:ring-forest/20">
                      <div className="relative aspect-[4/3] bg-white">
                        <Image src={p.img} alt={p.name} fill sizes="(min-width:1024px) 25vw, 50vw" className="object-contain p-4 transition-transform duration-500 group-hover:scale-105" />
                      </div>
                      <div className="p-4 sm:p-5">
                        <p className="text-[10px] font-semibold tracking-wider text-forest/55 sm:text-xs">{p.code}</p>
                        <h3 className="mt-0.5 font-display text-lg leading-tight text-forest-950 sm:text-xl">{p.name}</h3>
                        <p className="mt-2 text-xs text-forest-950/55">
                          {p.kind === "chimney"
                            ? `${p.specs.suction.toLocaleString("en-IN")} m³/h · ${p.specs.motor} · ${p.specs.noise}`
                            : `${p.capacities} · wet & dry`}
                        </p>
                      </div>
                    </Link>
                  </Reveal>
                ))}
              </div>
            </section>
          );
        })}
      </div>

      {/* Price list */}
      <section id="price-list" className="scroll-mt-32 bg-mint py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <Reveal>
            <Heading
              eyebrow="Price list"
              title="Specifications & prices at a glance."
              text="All chimneys: black powder-coated GPSP 0.50 mm (±0.05) body, 0.5 mm GPSP hood. Prices in USD per size, as per the ASVA price list."
            />
          </Reveal>
          <Reveal delay={100}>
            <div className="mt-12 overflow-x-auto rounded-3xl bg-white shadow-xl shadow-forest/5 ring-1 ring-forest/10">
              <table className="w-full min-w-[1200px] text-left text-sm">
                <thead>
                  <tr className="bg-forest text-white">
                    {["Model code", "Model", "Category", "Motor", "Suction (m³/h)", "Noise", "Control", "Filter", "60 cm", "75 cm", "90 cm"].map((h, i) => (
                      <th key={h} scope="col" className={`px-4 py-4 text-xs font-bold uppercase tracking-wider ${i >= 8 ? "bg-forest-700 text-right text-saffron" : ""}`}>
                        {h}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {chimneys.map((c, i) => (
                    <tr key={c.code} className={`border-t border-forest/5 transition hover:bg-saffron/10 ${i % 2 ? "bg-mint/40" : ""}`}>
                      <td className="whitespace-nowrap px-4 py-3 font-mono text-xs text-forest-950/60">{c.code}</td>
                      <td className="px-4 py-3">
                        <Link href={`/products/${c.slug}`} className="font-semibold text-forest-950 hover:text-forest hover:underline">
                          {c.name}
                        </Link>
                      </td>
                      <td className="px-4 py-3 text-forest-950/70">{series.find((s) => s.id === c.series)!.name.replace(" Series", "").replace(" Motor", "")}</td>
                      <td className="px-4 py-3 text-forest-950/70">{c.specs.motor}</td>
                      <td className="px-4 py-3 font-semibold text-forest">{c.specs.suction.toLocaleString("en-IN")}</td>
                      <td className="whitespace-nowrap px-4 py-3 text-forest-950/70">{c.specs.noise}</td>
                      <td className="px-4 py-3 text-forest-950/70">{c.specs.control}</td>
                      <td className="max-w-[200px] px-4 py-3 text-xs text-forest-950/60">{c.specs.filter}</td>
                      {c.priceUSD.map((p, k) => (
                        <td key={k} className="px-4 py-3 text-right font-display text-base text-forest-950">
                          {c.priceUSD.every((x) => x === null) && k === 1 ? <span className="font-sans text-xs text-forest-950/50">On request</span> : fmt(p)}
                        </td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </Reveal>
          <p className="mt-4 text-sm text-forest-950/50">
            Series codes — CRV: Curve · TT: T-Type · PYR: Pyramid · DCT: Ductless · BLDC: BLDC Motor Series. Vacuum cleaner pricing ({vacuums.length} ranges) on request.
          </p>
        </div>
      </section>
    </>
  );
}
