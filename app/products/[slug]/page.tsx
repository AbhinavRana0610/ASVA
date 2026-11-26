import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import ProductCard from "@/components/ProductCard";
import Reveal from "@/components/Reveal";
import SizePrice from "@/components/SizePrice";
import { Button, Icon } from "@/components/ui";
import { getProduct, getSeries, products, seriesHref, specLabels } from "@/lib/data";

export function generateStaticParams() {
  return products.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const p = getProduct(slug);
  if (!p) return {};
  return { title: p.name, description: `${p.name} (${p.code}) — ${getSeries(p.series).name} by ASVA India LLP.` };
}

export default async function ProductPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const p = getProduct(slug);
  if (!p) notFound();
  const s = getSeries(p.series);
  const related = products.filter((x) => x.series === p.series && x.slug !== p.slug).slice(0, 4);
  const images = [p.img, ...(p.kind === "chimney" ? p.gallery ?? [] : [])];

  const highlights =
    p.kind === "chimney"
      ? [
          { k: "Suction", v: `${p.specs.suction.toLocaleString("en-IN")} m³/h` },
          { k: "Motor", v: p.specs.motor },
          { k: "Noise", v: p.specs.noise },
          { k: "Control", v: p.specs.control },
        ]
      : [
          { k: "Capacities", v: p.capacities },
          { k: "Function", v: "Wet & dry" },
          { k: "Tank", v: "Stainless steel" },
          { k: "Model", v: p.code },
        ];

  return (
    <>
      <section className="relative overflow-hidden bg-forest-950 pt-32 pb-16 text-white sm:pt-36">
        <div className="grid-lines absolute inset-0 [mask-image:radial-gradient(ellipse_at_top_left,black,transparent_70%)]" />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6">
          <nav className="flex flex-wrap items-center gap-2 text-sm text-white/50" aria-label="Breadcrumb">
            <Link href="/" className="hover:text-white">Home</Link>/
            <Link href="/products" className="hover:text-white">Our Products</Link>/
            {p.kind === "chimney" && (
              <>
                <Link href="/products/kitchen-chimneys" className="hover:text-white">Kitchen Chimneys</Link>/
              </>
            )}
            <Link href={seriesHref(s.id)} className="hover:text-white">{p.kind === "chimney" ? s.name : "Vacuum Cleaners"}</Link>/
            <span className="text-saffron">{p.name}</span>
          </nav>
        </div>
      </section>

      <section className="relative pt-12 pb-20">
        <div className="mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-2 lg:gap-16">
          <Reveal>
            <div className="sticky top-28 space-y-4">
              <div className="relative aspect-square overflow-hidden rounded-sm bg-gradient-to-br from-white to-mint shadow-2xl shadow-forest/10 ring-1 ring-forest/10">
                <Image src={p.img} alt={p.name} fill priority sizes="(min-width:1024px) 50vw, 100vw" className="object-contain p-10 mix-blend-multiply" />
              </div>
              {images.length > 1 && (
                <div className="grid grid-cols-4 gap-3">
                  {images.map((src) => (
                    <div key={src} className="relative aspect-square overflow-hidden rounded-2xl bg-white ring-1 ring-forest/10">
                      <Image src={src} alt="" fill sizes="120px" className="object-contain p-2" />
                    </div>
                  ))}
                </div>
              )}
            </div>
          </Reveal>

          <div className="lg:pt-4">
            <Reveal>
              <div className="flex flex-wrap items-center gap-2">
                <span className="rounded-full bg-forest px-3 py-1 text-xs font-bold tracking-[0.2em] text-white">{s.code}</span>
                <span className="rounded-full bg-mint px-3 py-1 text-xs font-semibold text-forest">{p.code}</span>
                {p.kind === "chimney" && p.badge && (
                  <span className="rounded-full bg-saffron px-3 py-1 text-xs font-bold text-forest-950">{p.badge}</span>
                )}
              </div>
              <h1 className="mt-5 font-display text-5xl leading-[1] tracking-tight text-forest-950 sm:text-6xl">{p.name}</h1>
              <p className="mt-4 text-lg text-forest-950/65">{s.blurb}</p>
            </Reveal>

            <Reveal delay={100}>
              <dl className="mt-8 grid grid-cols-2 gap-px overflow-hidden rounded-2xl bg-forest/10 ring-1 ring-forest/10">
                {highlights.map((h) => (
                  <div key={h.k} className="bg-white p-5">
                    <dt className="text-xs font-bold uppercase tracking-[0.2em] text-forest/55">{h.k}</dt>
                    <dd className="mt-1 font-display text-xl text-forest-950">{h.v}</dd>
                  </div>
                ))}
              </dl>
            </Reveal>

            {p.kind === "chimney" && (
              <Reveal delay={150} className="mt-6">
                <SizePrice prices={p.priceUSD} />
              </Reveal>
            )}

            <Reveal delay={200}>
              <div className="mt-8 flex flex-wrap gap-3">
                <Button href={`/contact?product=${encodeURIComponent(p.name)}`} variant="dark">
                  Enquire about this model
                </Button>
                <Button href="/catalogue" variant="outline">
                  Full catalogue
                </Button>
              </div>
            </Reveal>

            <Reveal delay={250}>
              <h2 className="mt-14 font-display text-3xl text-forest-950">Technical specification</h2>
              {p.kind === "chimney" ? (
                <table className="mt-6 w-full overflow-hidden rounded-2xl text-sm ring-1 ring-forest/10">
                  <tbody>
                    {specLabels.map(([key, label], i) => (
                      <tr key={key} className={i % 2 ? "bg-white" : "bg-mint/60"}>
                        <th scope="row" className="w-2/5 px-5 py-3.5 text-left font-semibold text-forest-900">
                          {label}
                        </th>
                        <td className="px-5 py-3.5 text-forest-950/75">
                          {key === "suction" ? `${p.specs.suction.toLocaleString("en-IN")} (±10%) m³/h` : p.specs[key]}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              ) : (
                <ul className="mt-6 grid gap-3">
                  {p.points.map((pt) => (
                    <li key={pt} className="flex items-start gap-3 rounded-xl bg-mint/60 px-5 py-3.5 text-forest-950/80">
                      <Icon name="check" className="mt-0.5 h-5 w-5 shrink-0 text-forest" />
                      {pt}
                    </li>
                  ))}
                </ul>
              )}
            </Reveal>
          </div>
        </div>
      </section>

      {related.length > 0 && (
        <section className="bg-mint py-20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6">
            <div className="flex items-end justify-between gap-6">
              <h2 className="font-display text-4xl text-forest-950">More from the {s.name}</h2>
              <Link href={seriesHref(s.id)} className="hidden text-sm font-semibold text-forest hover:underline sm:block">
                View all →
              </Link>
            </div>
            <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
              {related.map((r) => (
                <ProductCard key={r.slug} product={r} />
              ))}
            </div>
          </div>
        </section>
      )}
    </>
  );
}
