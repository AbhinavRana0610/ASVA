import Image from "next/image";
import Link from "next/link";
import Reveal from "@/components/Reveal";
import Counter from "@/components/Counter";
import ProductCard from "@/components/ProductCard";
import HeroShowcase from "@/components/HeroShowcase";
import { Arrow, Button, Eyebrow, Heading, Icon } from "@/components/ui";
import {
  aboutLong,
  chimneys,
  clientLogos,
  company,
  facility,
  features,
  mission,
  newLaunches,
  products,
  series,
  upcomingCollection,
  upcomingProducts,
  seriesHref,
} from "@/lib/data";

const featured = ["curve-6-dj", "bldc-4-slim-25", "pyramid-6", "hexagonal-ductless"]
  .map((s) => products.find((p) => p.slug === s)!)
  .filter(Boolean);

export default function Home() {
  return (
    <>
      {/* ------------------------------------------------ HERO */}
      <section className="relative isolate min-h-[100svh] overflow-hidden bg-forest-950 text-white">
        <div className="grid-lines absolute inset-0 [mask-image:radial-gradient(ellipse_at_center,black_20%,transparent_75%)]" />
        <div className="absolute top-1/2 left-1/2 -z-10 h-[900px] w-[900px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-forest/30 blur-[80px]" />
        {/* brochure quarter-arc motif */}
        <div className="absolute -top-[140px] -left-[140px] hidden h-[280px] sm:block w-[280px] rounded-full border-[48px] border-saffron [clip-path:inset(50%_0_0_50%)] sm:-top-[200px] sm:-left-[200px] sm:h-[400px] sm:w-[400px] sm:border-[64px]" />
        <div className="absolute -right-[180px] -bottom-[180px] h-[360px] w-[360px] rounded-full border-[56px] border-saffron/90 [clip-path:inset(0_50%_50%_0)]" />

        <div className="relative mx-auto grid min-h-[100svh] max-w-7xl items-center gap-12 px-4 pt-32 pb-20 sm:px-6 lg:grid-cols-12 lg:pt-28">
          <div className="lg:col-span-6">
            <Reveal>
              <Eyebrow light>Made in Barhi, Sonipat</Eyebrow>
            </Reveal>
            <Reveal delay={100}>
              <h1 className="mt-6 font-display text-[3.4rem] leading-[0.95] tracking-tight sm:text-7xl xl:text-8xl">
                Cleaner air,
                <br />
                <span className="pr-4 text-saffron italic">crafted</span>for
                <br />
                every kitchen.
              </h1>
            </Reveal>
            <Reveal delay={200}>
              <p className="mt-8 max-w-xl text-lg leading-relaxed text-white/70">
                {company.name} manufactures premium kitchen chimneys engineered for strong smoke extraction, cleaner air and a seamless cooking experience.
              </p>
            </Reveal>
            <Reveal delay={300}>
              <div className="mt-10 flex flex-wrap gap-3">
                <Button href="/products">Explore Products</Button>
                <Button href="/catalogue" variant="ghost">
                  View Catalogue
                </Button>
              </div>
            </Reveal>
            <Reveal delay={400}>
              <dl className="mt-14 grid max-w-xl grid-cols-3 gap-6 border-t border-white/10 pt-8">
                {[
                  ["2,500", "m³/h max suction"],
                  ["<54", "dB quiet operation"],
                  ["130 W", "BLDC efficiency"],
                ].map(([v, l]) => (
                  <div key={l}>
                    <dt className="font-display text-3xl text-white sm:text-4xl">{v}</dt>
                    <dd className="mt-1 text-xs leading-snug text-white/55 sm:text-sm">{l}</dd>
                  </div>
                ))}
              </dl>
            </Reveal>
          </div>

          <div className="relative lg:col-span-6">
            <Reveal delay={200} className="relative mx-auto aspect-square w-full max-w-[560px]">
              <HeroShowcase />
            </Reveal>
          </div>
        </div>

        <div className="sawtooth absolute inset-x-0 bottom-0 h-3.5" />
      </section>

      {/* ------------------------------------------------ MARQUEE */}
      <section className="overflow-hidden border-b border-forest/10 bg-mint py-6">
        <div className="flex w-max animate-marquee gap-12 whitespace-nowrap">
          {[...Array(2)].flatMap((_, k) =>
            [...series.map((s) => s.name), "Motion Sensor Control", "Filterless Technology", "Powder-coated GPSP", "LED Lighting"].map((t, i) => (
              <span key={`${k}-${i}`} className="flex items-center gap-12 font-display text-2xl text-forest-900">
                {t}
                <span className="h-2.5 w-2.5 rotate-45 bg-saffron" />
              </span>
            )),
          )}
        </div>
      </section>

      {/* ------------------------------------------------ INTRO */}
      {/* No overflow-hidden here: it would break the sticky image */}
      <section className="relative py-24 sm:py-32">
        <div className="mx-auto grid max-w-7xl items-start gap-12 px-4 sm:px-6 lg:grid-cols-12 lg:gap-16">
          {/* Image column: compact and sticky while the text scrolls on desktop */}
          <Reveal className="relative lg:sticky lg:top-28 lg:col-span-4">
            <div className="relative mx-auto aspect-[4/5] w-full max-w-sm overflow-hidden rounded-[2rem] sm:aspect-[4/3] sm:max-w-none lg:aspect-[4/5]">
              <Image src="/images/company/factory.jpg" alt="ASVA manufacturing facility, Barhi Sonipat" fill sizes="(min-width:1024px) 33vw, 100vw" className="object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-forest-950/80 via-forest-950/10 to-transparent" />
              <div className="absolute top-5 right-5 rounded-2xl bg-forest/95 px-5 py-4 text-white shadow-xl ring-1 ring-white/10 backdrop-blur">
                <p className="font-display text-3xl leading-none sm:text-4xl">
                  <Counter to={60000} format />
                </p>
                <p className="mt-1.5 text-xs text-white/70">sq ft production area</p>
              </div>
              <div className="absolute inset-x-6 bottom-6 text-white">
                <p className="text-xs font-bold uppercase tracking-[0.25em] text-saffron">Our facility</p>
                <p className="mt-1 font-display text-2xl">Barhi Industrial Area, Sonipat</p>
              </div>
            </div>
          </Reveal>

          <div className="flex flex-col justify-center lg:col-span-8">
            <Reveal>
              <Heading eyebrow="Welcome to ASVA India LLP" title={<>Transforming modern kitchens with <em className="text-forest">innovation &amp; reliability.</em></>} />
            </Reveal>
            <Reveal delay={100}>
              <p className="mt-6 text-lg leading-relaxed text-forest-950/70">{aboutLong[0]}</p>
            </Reveal>
            <Reveal delay={150}>
              <p className="mt-4 leading-relaxed text-forest-950/60">{aboutLong[1]}</p>
            </Reveal>
            <Reveal delay={200}>
              <p className="mt-10 text-xs font-bold uppercase tracking-[0.25em] text-forest/60">Our mission</p>
              <ol className="mt-4 grid gap-3 sm:grid-cols-2">
                {mission.map((m, i) => (
                  <li
                    key={m}
                    className={`flex min-h-[64px] items-center gap-4 rounded-2xl bg-mint px-5 py-3 ${i === mission.length - 1 ? "sm:col-span-2" : ""}`}
                  >
                    <span className="w-7 shrink-0 font-display text-xl text-saffron-600">0{i + 1}</span>
                    <span className="font-semibold leading-snug text-forest-900">{m}</span>
                  </li>
                ))}
              </ol>
            </Reveal>
            <Reveal delay={250}>
              <div className="mt-8">
                <Button href="/about" variant="dark">
                  More about us
                </Button>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ------------------------------------------------ WHY ASVA */}
      {/* Scaled ~10% smaller than the other sections */}
      <section className="relative bg-mint py-20 sm:py-28">
        <div className="grid-lines-dark absolute inset-0 [mask-image:linear-gradient(to_bottom,transparent,black,transparent)]" />
        <div className="relative mx-auto max-w-6xl px-4 sm:px-6">
          <Reveal>
            <Heading size="sm" center eyebrow="Why choose ASVA" title="Engineered for performance. Designed for living." text="Every ASVA chimney balances powerful suction, energy efficiency, low-noise operation and contemporary aesthetics." />
          </Reveal>
          <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {features.map((f, i) => (
              <Reveal key={f.title} delay={i * 70}>
                <div className="group h-full rounded-3xl bg-white p-7 ring-1 ring-forest/10 transition-all duration-500 hover:-translate-y-1 hover:bg-forest hover:shadow-2xl hover:shadow-forest/25">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-mint text-forest transition-colors duration-500 group-hover:bg-saffron group-hover:text-forest-950">
                    <Icon name={f.icon} className="h-6 w-6" />
                  </div>
                  <h3 className="mt-5 font-display text-[1.35rem] text-forest-950 transition-colors group-hover:text-white">{f.title}</h3>
                  <p className="mt-1.5 text-[0.9rem] text-forest-950/60 transition-colors group-hover:text-white/70">{f.text}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ------------------------------------------------ SERIES */}
      {/* Scaled ~20% smaller than the other sections */}
      <section className="py-20 sm:py-24">
        <div className="mx-auto max-w-5xl px-4 sm:px-6">
          <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <Reveal>
              <Heading size="xs" eyebrow="Our range" title="Six series. One standard of excellence." />
            </Reveal>
            <Reveal delay={100}>
              <Button href="/products" variant="outline">
                All products
              </Button>
            </Reveal>
          </div>

          <div className="mt-11 grid gap-4 md:grid-cols-6">
            {(["curve", "t-type", "pyramid", "ductless", "vacuum", "bldc"] as const).map((id, i) => {
              const s = series.find((x) => x.id === id)!;
              const count = products.filter((p) => p.series === s.id).length;
              const big = i === 0 || i === 5;
              const span = i === 0 ? "md:col-span-4" : i === 5 ? "md:col-span-6" : "md:col-span-2";
              return (
                <Reveal key={s.id} delay={i * 60} className={span}>
                  <Link
                    href={seriesHref(s.id)}
                    className={`group relative flex h-full min-h-[256px] flex-col justify-between overflow-hidden rounded-[1.6rem] p-6 transition-all duration-500 ${
                      i % 3 === 0 ? "bg-forest text-white" : i % 3 === 1 ? "bg-mint text-forest-950" : "bg-forest-950 text-white"
                    }`}
                  >
                    <div className="relative z-10 flex items-start justify-between">
                      <div>
                        <span className={`text-[10px] font-bold tracking-[0.25em] ${i % 3 === 1 ? "text-forest" : "text-saffron"}`}>{s.code}</span>
                        <h3 className="mt-1.5 font-display text-2xl">{s.name}</h3>
                      </div>
                      <span className={`shrink-0 rounded-full px-2.5 py-1 text-[10px] font-semibold ${i % 3 === 1 ? "bg-white text-forest" : "bg-forest-950/70 text-white ring-1 ring-white/15"}`}>
                        {count} {count === 1 ? "model" : "models"}
                      </span>
                    </div>
                    <div className={`relative my-5 h-32 ${big ? "md:absolute md:my-0 md:top-16 md:right-6 md:bottom-6 md:h-auto md:w-[55%]" : "md:my-4 md:h-28"}`}>
                      <div className="absolute inset-0 rounded-[1.2rem] bg-white/95" />
                      <Image src={s.cover} alt={s.name} fill sizes="(min-width:768px) 32vw, 90vw" className="object-contain p-3 mix-blend-multiply transition-transform duration-700 group-hover:scale-105" />
                    </div>
                    <div className={`relative z-10 ${big ? "md:max-w-[38%]" : ""}`}>
                      {big && <p className={`mb-4 hidden text-[0.8rem] md:block leading-relaxed ${i % 3 === 1 ? "text-forest-950/65" : "text-white/70"}`}>{s.blurb}</p>}
                      <span className="inline-flex items-center gap-2 text-[0.8rem] font-semibold">
                        Explore <Arrow className="h-4 w-4 transition-transform group-hover:translate-x-1.5" />
                      </span>
                    </div>
                  </Link>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* ------------------------------------------------ NEW LAUNCHES */}
      <section className="relative overflow-hidden bg-forest-950 py-24 text-white sm:py-32">
        {/* Circle centred on the bottom-right corner, so the arc meets both edges */}
        <div className="absolute -right-[320px] -bottom-[320px] h-[640px] w-[640px] rounded-full border-[100px] border-saffron/90 [clip-path:inset(0_50%_50%_0)]" />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6">
          <Reveal>
            <Heading light eyebrow="Our new launched chimney" title={<>Slimmest in India. <span className="text-saffron italic">Smartest</span> in class.</>} />
          </Reveal>
          <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {newLaunches.map((n, i) => (
              <Reveal key={n.name} delay={i * 80}>
                <div className="group h-full overflow-hidden rounded-3xl bg-forest-900 ring-1 ring-white/10 transition hover:bg-forest-800">
                  <div className="relative aspect-[4/3] bg-white">
                    <Image src={n.img} alt={n.name} fill sizes="(min-width:1024px) 25vw, 50vw" className="object-contain p-4 transition-transform duration-700 group-hover:scale-105" />
                    <span className="absolute top-3 left-3 rounded-full bg-saffron px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-forest-950">New</span>
                  </div>
                  <div className="p-6">
                    <h3 className="font-display text-2xl">{n.name}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-white/60">{n.text}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ------------------------------------------------ FEATURED PRODUCTS */}
      {/* Scaled ~10% smaller than the other sections */}
      <section className="bg-mint py-20 sm:py-28">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <Reveal>
            <Heading size="sm" eyebrow="Featured models" title="Best of the ASVA line-up" text={`From the DJ-display Curve to the 2,500 m³/h BLDC Slim-25 — ${chimneys.length} chimney models, built in-house.`} />
          </Reveal>
          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {featured.map((p, i) => (
              <Reveal key={p.slug} delay={i * 80} className="h-full">
                <ProductCard product={p} size="sm" />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ------------------------------------------------ FACILITY */}
      <section className="py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          {/* Heading, stats and photo share one 90%-wide column so their edges line up */}
          <div className="mx-auto sm:w-[90%]">
          <div className="grid items-end gap-10 lg:grid-cols-2">
            <Reveal>
              <Heading eyebrow="Manufacturing facility" title="Built in-house, from sheet metal to sound test." text={facility.summary} />
            </Reveal>
            <Reveal delay={100}>
              <div className="grid grid-cols-2 gap-px overflow-hidden rounded-3xl bg-forest/15 ring-1 ring-forest/15">
                {facility.stats.map((s) => (
                  <div key={s.label} className="bg-white p-6 sm:p-8">
                    <p className="font-display text-4xl text-forest sm:text-5xl">
                      <Counter to={s.value} format={s.format} />
                    </p>
                    <p className="mt-2 text-sm text-forest-950/60">{s.label}</p>
                  </div>
                ))}
              </div>
            </Reveal>
          </div>
          <Reveal delay={100}>
            <div className="relative mt-14 aspect-[16/9] w-full overflow-hidden rounded-[1.8rem] sm:aspect-[21/9]">
              <Image src="/images/company/factory-floor.jpg" alt="Manufacturing shop floor with production machinery" fill sizes="(min-width:640px) 90vw, 100vw" className="object-cover" />
              <div className="absolute inset-0 bg-gradient-to-r from-forest-950/80 via-forest-950/20 to-transparent" />
              <ul className="absolute bottom-5 left-5 hidden max-w-sm space-y-1.5 text-[0.9rem] sm:block">
                {facility.capabilities.map((c) => (
                  <li key={c} className="flex items-center gap-2.5 text-white">
                    <Icon name="check" className="h-[18px] w-[18px] text-saffron" /> {c}
                  </li>
                ))}
              </ul>
            </div>
            {/* On phones the list sits below the photo instead of over it. */}
            <ul className="mt-6 grid gap-2.5 sm:hidden">
              {facility.capabilities.map((c) => (
                <li key={c} className="flex items-center gap-2.5 text-[0.95rem] text-forest-950/80">
                  <Icon name="check" className="h-[18px] w-[18px] shrink-0 text-saffron-600" /> {c}
                </li>
              ))}
            </ul>
          </Reveal>
          </div>
        </div>
      </section>

      {/* ------------------------------------------------ CLIENTS */}
      <section className="border-y border-forest/10 bg-white py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <Reveal>
            <p className="text-center text-xs font-bold uppercase tracking-[0.3em] text-forest/60">
              We manufacture for leading appliance brands in India
            </p>
          </Reveal>
          <div className="mt-10 grid grid-cols-2 gap-px overflow-hidden rounded-3xl bg-forest/10 sm:grid-cols-3 lg:grid-cols-6">
            {clientLogos.map((c, i) => (
              <Reveal key={c.name} delay={i * 50} className="h-full">
                <div className="group flex h-32 items-center justify-center bg-white px-6 transition-colors duration-300 hover:bg-mint">
                  <Image
                    src={c.src}
                    alt={`${c.name} logo`}
                    width={c.w}
                    height={c.hgt}
                    style={{ height: c.h }}
                    className="w-auto max-w-full object-contain transition-transform duration-300 group-hover:scale-105"
                  />
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ------------------------------------------------ UPCOMING */}
      {/* Scaled ~10% smaller than the other sections */}
      <section id="upcoming" className="scroll-mt-24 py-20 sm:py-28">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <Reveal>
            <Heading size="sm" eyebrow="What's next" title="The upcoming collection" text="Smart, connected chimneys and a new family of kitchen and cleaning appliances." />
          </Reveal>
          <div className="mt-12 grid gap-4 lg:grid-cols-3">
            {upcomingCollection.map((u, i) => (
              <Reveal key={u.name} delay={i * 80}>
                <div className="group relative aspect-[4/5] overflow-hidden rounded-[1.8rem] bg-mint">
                  <Image src={u.img} alt={u.name} fill sizes="(min-width:1024px) 33vw, 100vw" className="object-cover transition-transform duration-700 group-hover:scale-105" />
                  <div className="absolute inset-0 bg-gradient-to-t from-forest-950/90 via-forest-950/10 to-transparent" />
                  <span className="absolute top-4 left-4 rounded-full bg-white/90 px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-forest">Coming soon</span>
                  <div className="absolute inset-x-5 bottom-5 text-white">
                    <h3 className="font-display text-[1.35rem] leading-tight">{u.name}</h3>
                    <p className="mt-1 text-[0.8rem] text-white/70">{u.text}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
          <div className="mt-4 grid gap-3 sm:grid-cols-2 sm:gap-4 lg:grid-cols-4">
            {upcomingProducts.map((u, i) => (
              <Reveal key={u.name} delay={i * 60}>
                <div className="group flex items-center gap-3.5 rounded-3xl bg-mint p-3.5 pr-5">
                  <div className="relative h-[72px] w-[72px] shrink-0 overflow-hidden rounded-2xl bg-white">
                    <Image src={u.img} alt={u.name} fill sizes="72px" className="object-cover transition-transform duration-500 group-hover:scale-110" />
                  </div>
                  <p className="text-[0.9rem] font-semibold leading-snug text-forest-900">{u.name}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ------------------------------------------------ CTA */}
      <section className="px-4 pb-24 sm:px-6 sm:pb-32">
        <Reveal className="relative mx-auto max-w-7xl overflow-hidden rounded-[2.5rem] bg-forest px-8 py-16 text-white sm:px-16 sm:py-20">
          <div className="grid-lines absolute inset-0 opacity-60" />
          <div className="absolute -top-40 -right-40 h-[420px] w-[420px] rounded-full border-[80px] border-saffron [clip-path:inset(0_0_50%_50%)]" />
          <div className="relative grid items-center gap-10 lg:grid-cols-[1.4fr_1fr]">
            <div>
              <h2 className="font-display text-4xl leading-tight text-balance sm:text-6xl">
                Let&apos;s build your next <span className="italic text-saffron">kitchen chimney</span> line.
              </h2>
              <p className="mt-5 max-w-xl text-white/70">
                Download the full ASVA catalogue or talk to our team about OEM manufacturing, pricing and specifications.
              </p>
            </div>
            <div className="flex flex-wrap gap-3 lg:justify-end">
              <Button href="/contact">Contact Us</Button>
              <Button href="/catalogue" variant="ghost">
                Catalogue
              </Button>
            </div>
          </div>
        </Reveal>
      </section>
    </>
  );
}
