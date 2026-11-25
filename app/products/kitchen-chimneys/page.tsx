import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import EnquiryCta from "@/components/EnquiryCta";
import Reveal from "@/components/Reveal";
import { Button, Heading, PageHero } from "@/components/ui";
import { chimneys, chimneySeries, formatUSD, seriesHref, seriesStats } from "@/lib/data";

export const metadata: Metadata = {
  title: "Kitchen Chimneys",
  description:
    "ASVA kitchen chimneys: Curve, T-Type, Pyramid, Ductless and BLDC Motor series in 60, 75 and 90 cm, manufactured in Sonipat, Haryana.",
};

export default function KitchenChimneysPage() {
  const all = chimneySeries.map((s) => ({ s, st: seriesStats(s.id) }));
  const priceFrom = Math.min(...all.map((x) => x.st.priceFrom ?? Infinity));
  const maxSuction = Math.max(...all.map((x) => x.st.maxSuction));

  const heroStats = [
    { v: String(chimneys.length), l: "chimney models" },
    { v: String(chimneySeries.length), l: "design series" },
    { v: maxSuction.toLocaleString("en-IN"), l: "m³/h max suction" },
    { v: formatUSD(priceFrom), l: "starting price (USD)" },
  ];

  return (
    <>
      <PageHero
        eyebrow="Our Products · Kitchen Chimneys"
        title={
          <>
            Clean air, <span className="italic text-saffron">every</span> time you cook.
          </>
        }
        text="Five series built on a 0.5 mm GPSP body with black powder coating. Each one has a different shape, motor and control, so you can match the chimney to your kitchen."
      >
        <dl className="mt-12 grid max-w-3xl grid-cols-2 gap-6 border-t border-white/10 pt-8 sm:grid-cols-4">
          {heroStats.map((h) => (
            <div key={h.l}>
              <dt className="font-display text-4xl text-white">{h.v}</dt>
              <dd className="mt-1 text-sm text-white/55">{h.l}</dd>
            </div>
          ))}
        </dl>
      </PageHero>

      {/* Series jump bar */}
      <nav aria-label="Chimney series" className="sticky top-20 z-30 border-b border-forest/10 bg-white/85 backdrop-blur-xl">
        <ul className="mx-auto flex max-w-7xl gap-2 overflow-x-auto px-4 py-3 sm:px-6">
          {chimneySeries.map((s) => (
            <li key={s.id}>
              <a
                href={`#${s.id}`}
                className="inline-flex items-center gap-2 whitespace-nowrap rounded-full px-4 py-2 text-sm font-semibold text-forest-900 ring-1 ring-forest/15 transition hover:bg-forest hover:text-white"
              >
                <span className="text-[10px] tracking-[0.2em] text-saffron-600">{s.code}</span>
                {s.name}
              </a>
            </li>
          ))}
        </ul>
      </nav>

      <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 sm:py-28">
        <Reveal>
          <Heading
            eyebrow="Choose your series"
            title={
              <>
                Five profiles, <em className="text-forest">one standard</em> of build.
              </>
            }
            text="Open a series to see every model in it, its full specifications and prices for 60, 75 and 90 cm."
          />
        </Reveal>

        <div className="mt-16 space-y-10 sm:space-y-14">
          {all.map(({ s, st }, i) => {
            const flip = i % 2 === 1;
            return (
              <Reveal key={s.id}>
                <article
                  id={s.id}
                  className="group grid scroll-mt-40 overflow-hidden rounded-[2rem] bg-white ring-1 ring-forest/10 transition-shadow duration-500 hover:shadow-2xl hover:shadow-forest/10 lg:grid-cols-2"
                >
                  <Link
                    href={seriesHref(s.id)}
                    className={`relative block aspect-[4/3] overflow-hidden bg-gradient-to-br from-mint via-white to-mint-200 lg:aspect-auto lg:min-h-[440px] ${flip ? "lg:order-2" : ""}`}
                    aria-label={`Explore ${s.name}`}
                  >
                    <span className="pointer-events-none absolute -bottom-6 left-6 select-none font-display text-[9rem] leading-none text-forest/[0.07] sm:text-[12rem]">
                      {s.code}
                    </span>
                    <div className="absolute -top-20 -right-20 h-52 w-52 rounded-full border-[30px] border-saffron/90 [clip-path:inset(0_0_50%_50%)] transition-transform duration-700 group-hover:rotate-12" />
                    <Image
                      src={s.cover}
                      alt={s.name}
                      fill
                      sizes="(min-width:1024px) 50vw, 100vw"
                      className="object-contain p-10 mix-blend-multiply transition-transform duration-700 group-hover:scale-105"
                    />
                  </Link>

                  <div className="flex flex-col justify-center p-8 sm:p-12">
                    <div className="flex items-center gap-3">
                      <span className="font-display text-lg text-saffron-600">0{i + 1}</span>
                      <span className="h-px w-10 bg-forest/20" />
                      <span className="rounded-full bg-forest px-3 py-1 text-[10px] font-bold tracking-[0.2em] text-white">{s.code}</span>
                    </div>
                    <h3 className="mt-5 font-display text-4xl tracking-tight text-forest-950 sm:text-5xl">{s.name}</h3>
                    <p className="mt-4 max-w-lg leading-relaxed text-forest-950/65">{s.blurb}</p>

                    <dl className="mt-8 grid grid-cols-3 gap-px overflow-hidden rounded-2xl bg-forest/10 ring-1 ring-forest/10">
                      <Tile k="Models" v={String(st.count)} />
                      <Tile k="Suction" v={st.suction.replace(" m³/h", "")} u="m³/h" />
                      <Tile k="From" v={st.priceFrom ? formatUSD(st.priceFrom) : "On request"} u={st.priceFrom ? "USD" : undefined} />
                    </dl>

                    <ul className="mt-6 flex flex-wrap gap-2">
                      {st.models.slice(0, 4).map((m) => (
                        <li key={m.slug}>
                          <Link
                            href={`/products/${m.slug}`}
                            className="inline-block rounded-full bg-mint px-3 py-1.5 text-xs font-semibold text-forest transition hover:bg-saffron hover:text-forest-950"
                          >
                            {m.name.replace(/^ASVA /, "")}
                          </Link>
                        </li>
                      ))}
                      {st.count > 4 && (
                        <li className="rounded-full px-3 py-1.5 text-xs font-semibold text-forest-950/50">+{st.count - 4} more</li>
                      )}
                    </ul>

                    <div className="mt-8">
                      <Button href={seriesHref(s.id)} variant="dark">
                        Explore {s.name}
                      </Button>
                    </div>
                  </div>
                </article>
              </Reveal>
            );
          })}
        </div>
      </section>

      {/* Side-by-side comparison */}
      <section className="bg-mint py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <Reveal>
            <Heading eyebrow="Compare at a glance" title="Which series fits your kitchen?" />
          </Reveal>
          <Reveal delay={100}>
            <div className="mt-12 overflow-x-auto rounded-3xl bg-white ring-1 ring-forest/10">
              <table className="w-full min-w-[760px] text-left text-sm">
                <thead>
                  <tr className="border-b border-forest/10 text-[11px] uppercase tracking-[0.18em] text-forest/60">
                    <th className="px-6 py-5 font-bold">Series</th>
                    <th className="px-6 py-5 font-bold">Models</th>
                    <th className="px-6 py-5 font-bold">Suction</th>
                    <th className="px-6 py-5 font-bold">Motor</th>
                    <th className="px-6 py-5 font-bold">Noise</th>
                    <th className="px-6 py-5 font-bold">Control</th>
                    <th className="px-6 py-5 font-bold">From</th>
                  </tr>
                </thead>
                <tbody>
                  {all.map(({ s, st }) => (
                    <tr key={s.id} className="border-b border-forest/5 last:border-0 transition-colors hover:bg-mint/50">
                      <td className="px-6 py-5">
                        <Link href={seriesHref(s.id)} className="font-display text-lg text-forest-950 hover:text-forest">
                          {s.name}
                        </Link>
                      </td>
                      <td className="px-6 py-5 text-forest-950/75">{st.count}</td>
                      <td className="px-6 py-5 text-forest-950/75">{st.suction}</td>
                      <td className="px-6 py-5 text-forest-950/75">{st.motors}</td>
                      <td className="px-6 py-5 text-forest-950/75">{st.noise}</td>
                      <td className="px-6 py-5 text-forest-950/75">{st.controls.join(", ")}</td>
                      <td className="px-6 py-5 font-semibold text-forest">{st.priceFrom ? formatUSD(st.priceFrom) : "On request"}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </Reveal>
        </div>
      </section>

      <div className="pt-24">
        <EnquiryCta
          title="Not sure which chimney to pick?"
          text="Tell us your kitchen size and how you cook. Our team will suggest the right series, size and suction."
        />
      </div>
    </>
  );
}

function Tile({ k, v, u }: { k: string; v: string; u?: string }) {
  return (
    <div className="bg-white p-4">
      <dt className="text-[10px] font-bold uppercase tracking-[0.2em] text-forest/55">{k}</dt>
      <dd className="mt-1 font-display text-xl leading-tight text-forest-950">
        {v}
        {u && <span className="ml-1 font-sans text-[10px] text-forest-950/50">{u}</span>}
      </dd>
    </div>
  );
}
