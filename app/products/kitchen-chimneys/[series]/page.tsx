import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Suspense } from "react";
import EnquiryCta from "@/components/EnquiryCta";
import ProductCard from "@/components/ProductCard";
import Reveal from "@/components/Reveal";
import { Arrow, Eyebrow, Heading } from "@/components/ui";
import { chimneySeries, formatUSD, seriesHref, seriesStats, type SeriesId } from "@/lib/data";

const find = (id: string) => chimneySeries.find((s) => s.id === id);

export function generateStaticParams() {
  return chimneySeries.map((s) => ({ series: s.id }));
}

export async function generateMetadata({ params }: { params: Promise<{ series: string }> }): Promise<Metadata> {
  const { series } = await params;
  const s = find(series);
  if (!s) return {};
  return { title: `${s.name} Kitchen Chimneys`, description: `${s.name} by ASVA India LLP. ${s.blurb}` };
}

// params are read inside Suspense so the route's shared App Shell stays URL-independent.
export default function SeriesPage({ params }: { params: Promise<{ series: string }> }) {
  return (
    <Suspense fallback={<div className="min-h-[80svh] bg-forest-950" />}>
      <SeriesContent params={params} />
    </Suspense>
  );
}

async function SeriesContent({ params }: { params: Promise<{ series: string }> }) {
  const { series } = await params;
  const s = find(series);
  if (!s) notFound();
  const st = seriesStats(s.id as SeriesId);
  const others = chimneySeries.filter((x) => x.id !== s.id);

  const stats = [
    { k: "Models", v: String(st.count) },
    { k: "Suction", v: st.suction },
    { k: "Motor", v: st.motors },
    { k: "Noise", v: st.noise },
  ];

  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden bg-forest-950 pt-32 pb-20 text-white sm:pt-40 sm:pb-28">
        <div className="grid-lines absolute inset-0 [mask-image:radial-gradient(ellipse_at_top_left,black,transparent_70%)]" />
        <div className="absolute -bottom-32 -left-32 h-80 w-80 rounded-full bg-forest/40 blur-3xl" />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6">
          <nav className="flex flex-wrap items-center gap-2 text-sm text-white/50" aria-label="Breadcrumb">
            <Link href="/" className="hover:text-white">Home</Link>/
            <Link href="/products" className="hover:text-white">Our Products</Link>/
            <Link href="/products/kitchen-chimneys" className="hover:text-white">Kitchen Chimneys</Link>/
            <span className="text-saffron">{s.name}</span>
          </nav>

          <div className="mt-10 grid items-center gap-12 lg:grid-cols-2">
            <div>
              <Eyebrow light>Kitchen Chimneys · {s.code}</Eyebrow>
              <h1 className="mt-6 font-display text-5xl leading-[1] tracking-tight sm:text-7xl">{s.name}</h1>
              <p className="mt-6 max-w-xl text-lg leading-relaxed text-white/70">{s.blurb}</p>

              <dl className="mt-10 grid max-w-xl grid-cols-2 gap-px overflow-hidden rounded-2xl bg-white/10 ring-1 ring-white/10">
                {stats.map((x) => (
                  <div key={x.k} className="bg-forest-950/80 p-5">
                    <dt className="text-[10px] font-bold uppercase tracking-[0.2em] text-saffron">{x.k}</dt>
                    <dd className="mt-1 font-display text-xl text-white">{x.v}</dd>
                  </div>
                ))}
              </dl>

              <p className="mt-8 text-white/60">
                Starting at{" "}
                <span className="font-display text-3xl text-white">{st.priceFrom ? formatUSD(st.priceFrom) : "on request"}</span>
                {st.priceFrom && <span className="ml-1 text-sm">USD · as per price list</span>}
              </p>
            </div>

            <Reveal delay={150} className="relative mx-auto aspect-square w-full max-w-[520px]">
              <div className="absolute inset-0 rounded-full bg-gradient-to-br from-white to-mint-200" />
              <div className="absolute -inset-4 rounded-full border border-white/10" />
              <div className="absolute -inset-10 rounded-full border border-dashed border-white/10 animate-spin-slow" />
              <Image src={s.cover} alt={s.name} fill priority sizes="(min-width:1024px) 520px, 90vw" className="object-contain p-14 mix-blend-multiply" />
              <span className="absolute bottom-6 left-1/2 -translate-x-1/2 rounded-full bg-forest-950 px-4 py-1.5 text-xs font-semibold text-white ring-1 ring-white/15">
                {st.count} models in this series
              </span>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Series switcher */}
      <nav aria-label="Chimney series" className="sticky top-20 z-30 border-b border-forest/10 bg-white/85 backdrop-blur-xl">
        <ul className="mx-auto flex max-w-7xl gap-2 overflow-x-auto px-4 py-3 sm:px-6">
          {chimneySeries.map((x) => {
            const on = x.id === s.id;
            return (
              <li key={x.id}>
                <Link
                  href={seriesHref(x.id)}
                  aria-current={on ? "page" : undefined}
                  className={`inline-flex whitespace-nowrap rounded-full px-4 py-2 text-sm font-semibold transition ${
                    on ? "bg-forest text-white" : "text-forest-900 ring-1 ring-forest/15 hover:ring-forest/40"
                  }`}
                >
                  {x.name}
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>

      {/* Models */}
      <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 sm:py-24">
        <Reveal>
          <Heading
            eyebrow="The line-up"
            title={
              <>
                Every model in the <em className="text-forest">{s.name}</em>
              </>
            }
          />
        </Reveal>
        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {st.models.map((m, i) => (
            <Reveal key={m.slug} delay={(i % 4) * 70}>
              <ProductCard product={m} />
            </Reveal>
          ))}
        </div>
      </section>

      {/* Model comparison */}
      <section className="bg-mint py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <Reveal>
            <Heading eyebrow="Compare models" title="Specifications and prices side by side" size="sm" />
          </Reveal>
          <Reveal delay={100}>
            <div className="mt-10 overflow-x-auto rounded-3xl bg-white ring-1 ring-forest/10">
              <table className="w-full min-w-[960px] text-left text-sm">
                <thead>
                  <tr className="border-b border-forest/10 text-[11px] uppercase tracking-[0.18em] text-forest/60">
                    <th className="px-5 py-5 font-bold">Model</th>
                    <th className="px-5 py-5 font-bold">Suction</th>
                    <th className="px-5 py-5 font-bold">Motor</th>
                    <th className="px-5 py-5 font-bold">Control</th>
                    <th className="px-5 py-5 font-bold">Noise</th>
                    <th className="px-5 py-5 font-bold">Filter</th>
                    <th className="px-5 py-5 text-right font-bold">60 cm</th>
                    <th className="px-5 py-5 text-right font-bold">75 cm</th>
                    <th className="px-5 py-5 text-right font-bold">90 cm</th>
                  </tr>
                </thead>
                <tbody>
                  {st.models.map((m) => (
                    <tr key={m.slug} className="border-b border-forest/5 last:border-0 transition-colors hover:bg-mint/50">
                      <td className="px-5 py-4">
                        <Link href={`/products/${m.slug}`} className="group flex items-center gap-3">
                          <span className="relative h-12 w-12 shrink-0 overflow-hidden rounded-xl bg-mint">
                            <Image src={m.img} alt="" fill sizes="48px" className="object-contain p-1 mix-blend-multiply" />
                          </span>
                          <span>
                            <span className="block font-semibold text-forest-950 group-hover:text-forest">{m.name}</span>
                            <span className="block text-xs text-forest-950/45">{m.code}</span>
                          </span>
                        </Link>
                      </td>
                      <td className="px-5 py-4 text-forest-950/75">{m.specs.suction.toLocaleString("en-IN")} m³/h</td>
                      <td className="px-5 py-4 text-forest-950/75">{m.specs.motor}</td>
                      <td className="px-5 py-4 text-forest-950/75">{m.specs.control}</td>
                      <td className="px-5 py-4 text-forest-950/75">{m.specs.noise}</td>
                      <td className="max-w-[200px] px-5 py-4 text-forest-950/75">{m.specs.filter}</td>
                      {m.priceUSD.map((p, i) => (
                        <td key={i} className="px-5 py-4 text-right font-semibold text-forest">
                          {p === null ? <span className="font-normal text-forest-950/35">—</span> : formatUSD(p)}
                        </td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="mt-4 text-xs text-forest-950/50">Prices in USD as per the ASVA price list. Suction ±10%.</p>
          </Reveal>
        </div>
      </section>

      {/* Other series */}
      <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 sm:py-24">
        <Reveal>
          <Heading eyebrow="Keep exploring" title="Other chimney series" size="sm" />
        </Reveal>
        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {others.map((o, i) => {
            const os = seriesStats(o.id);
            return (
              <Reveal key={o.id} delay={i * 70}>
                <Link
                  href={seriesHref(o.id)}
                  className="group flex h-full flex-col overflow-hidden rounded-3xl bg-white ring-1 ring-forest/10 transition-all duration-500 hover:-translate-y-1.5 hover:shadow-2xl hover:shadow-forest/15"
                >
                  <div className="relative aspect-[4/3] bg-gradient-to-b from-mint to-white">
                    <Image src={o.cover} alt={o.name} fill sizes="(min-width:1024px) 25vw, 50vw" className="object-contain p-6 mix-blend-multiply transition-transform duration-700 group-hover:scale-105" />
                  </div>
                  <div className="flex flex-1 items-end justify-between gap-3 p-6">
                    <div>
                      <p className="text-[10px] font-bold tracking-[0.2em] text-saffron-600">{o.code}</p>
                      <h3 className="mt-1 font-display text-2xl text-forest-950">{o.name}</h3>
                      <p className="mt-1 text-sm text-forest-950/55">{os.count} models · {os.suction}</p>
                    </div>
                    <Arrow className="h-5 w-5 shrink-0 text-forest transition-transform duration-300 group-hover:translate-x-1" />
                  </div>
                </Link>
              </Reveal>
            );
          })}
        </div>
      </section>

      <EnquiryCta
        title={`Interested in the ${s.name}?`}
        text="Send us the model and size you need. We will confirm price, availability and delivery."
        product={s.name}
      />
    </>
  );
}
