import Image from "next/image";
import Link from "next/link";
import Reveal from "@/components/Reveal";
import Counter from "@/components/Counter";
import HeroSlider, { type HeroSlide } from "@/components/HeroSlider";
import SeriesTabs, { type SeriesTab } from "@/components/SeriesTabs";
import ProductRail from "@/components/ProductRail";
import { Arrow, Button, Eyebrow, Heading, Icon } from "@/components/ui";
import {
  chimneySeries,
  chimneys,
  clientLogos,
  company,
  facility,
  features,
  newLaunches,
  seriesHref,
  seriesStats,
  upcomingCollection,
  upcomingProducts,
  type Chimney,
} from "@/lib/data";

// ------------------------------------------------------------------ content
// Everything below comes from the ASVA documents via lib/data.ts.

const heroSlides: HeroSlide[] = [
  { img: "/images/upcoming/curve-slim.jpg", title: "Curve", accent: "Slim", text: "Our new launched chimney: slimmest in India.", cta: "Explore chimneys", href: "/products/kitchen-chimneys" },
  { img: "/images/upcoming/android-chimney.jpg", title: "Android", accent: "Chimney", text: "Built-in streaming display. Part of the upcoming collection.", cta: "See what's next", href: "/#upcoming" },
  { img: "/images/upcoming/wifi-voice-chimney.jpg", title: "Wi-Fi & Voice", accent: "Control", text: "An in-built Wi-Fi and voice-control chimney, coming soon.", cta: "See what's next", href: "/#upcoming" },
  { img: "/images/products/vacuum-hero.jpg", title: "Wet & Dry", accent: "Vacuum Cleaners", text: "Stainless steel tanks from 12 to 42 litres.", cta: "Explore vacuums", href: "/products/vacuum-cleaners" },
];

const tabAccent: Record<string, string> = {
  curve: "Curve Series",
  "t-type": "T-Type Series",
  pyramid: "Pyramid Series",
  ductless: "Ductless Series",
  bldc: "BLDC Series",
};

const seriesTabs: SeriesTab[] = chimneySeries.map((s) => {
  const st = seriesStats(s.id);
  return {
    id: s.id,
    name: s.name.replace(/ Series$/, "").replace(/ Motor$/, ""),
    accent: tabAccent[s.id] ?? s.name,
    blurb: s.blurb,
    img: s.cover,
    href: seriesHref(s.id),
    facts: [
      [String(st.count), st.count === 1 ? "Model" : "Models"],
      [st.suction, "Suction"],
      [st.motors, "Motor"],
      [st.noise, "Noise level"],
    ],
  };
});

const featuredSlugs = ["bldc-4-slim-25", "curve-6-dj", "t-type-3", "pyramid-6", "bldc-9-curve", "hexagonal-ductless", "curve-7", "bldc-7-curve-draw"];
const featured = featuredSlugs.map((s) => chimneys.find((c) => c.slug === s)).filter((c): c is Chimney => Boolean(c));

const curated = [
  { title: "Advanced", accent: "Suction", text: features[0].text + ", from motion-sensor BLDC models.", img: "/images/products/bldc-4.jpg" },
  { title: "Energy", accent: "Efficient", text: features[2].text + ", with no capacitor and noise below 57 dB.", img: "/images/products/bldc-9.jpg" },
  { title: "Durable", accent: "Build", text: features[3].text + ", in 60, 75 and 90 cm.", img: "/images/products/curve-4.jpg" },
];

const experience = [
  { icon: "shield", title: "Durable build", text: "0.5 mm GPSP body with a black powder-coated finish on every model." },
  { icon: "wave", title: "Low noise", text: "Quiet operation, rated below 54–57 dB across the range." },
  { icon: "support", title: "After-sales support", text: "User-friendly controls and reliable service." },
];

const help = [
  { title: "Kitchen", accent: "Chimneys", img: "/images/products/curve-7.jpg", href: "/products/kitchen-chimneys", dark: false },
  { title: "Vacuum", accent: "Cleaners", img: "/images/products/vacuum-hero.jpg", href: "/products/vacuum-cleaners", dark: false },
  { title: "Download", accent: "Catalogue", img: "", href: "/catalogue", dark: true },
];

// ------------------------------------------------------------------ page

export default function Home() {
  return (
    <>
      <HeroSlider slides={heroSlides} />

      {/* ------------------------------------------------ CATEGORIES */}
      <section className="bg-forest-950 pt-20 pb-20 text-white sm:pt-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <Reveal>
            <h2 className="max-w-2xl font-display text-[2.4rem] leading-[1.1] text-white/75 sm:text-[3.4rem]">
              Step into a cleaner, <em className="text-white">healthier kitchen</em>
            </h2>
          </Reveal>
          <div className="mt-14 grid gap-3 md:grid-cols-3">
            {help.map((h, i) => (
              <Reveal key={h.accent} delay={i * 80}>
                <Link
                  href={h.href}
                  className={`group relative flex aspect-[4/5] flex-col justify-end overflow-hidden ${h.dark ? "bg-forest" : "bg-mint"}`}
                >
                  {h.img && (
                    <Image src={h.img} alt="" fill sizes="(min-width:768px) 33vw, 100vw" className="object-cover transition-transform duration-700 group-hover:scale-105" />
                  )}
                  {h.dark && (
                    <div className="absolute inset-0 flex items-center justify-center p-12">
                      <Icon name="download" className="h-24 w-24 text-white/15" />
                    </div>
                  )}
                  <div className={`relative flex items-end justify-between p-6 sm:p-8 ${h.dark ? "" : "bg-gradient-to-t from-mint via-mint/90 to-transparent pt-24"}`}>
                    <p className={`font-display text-3xl leading-tight sm:text-4xl ${h.dark ? "text-white" : "text-forest-950"}`}>
                      {h.title}
                      <br />
                      <em className={h.dark ? "text-white" : "text-forest"}>{h.accent}</em>
                    </p>
                    <Arrow className={`h-6 w-6 transition-transform group-hover:translate-x-1 ${h.dark ? "text-white" : "text-forest"}`} />
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ------------------------------------------------ CURATED */}
      <section className="relative isolate overflow-hidden">
        <Image src="/images/company/factory-floor.jpg" alt="" fill sizes="100vw" className="-z-10 object-cover" />
        <div className="absolute inset-0 -z-10 bg-gradient-to-r from-black/75 via-black/45 to-black/20" />
        <div className="mx-auto grid max-w-7xl items-center gap-10 px-4 py-20 sm:px-6 sm:py-28 lg:grid-cols-12">
          <Reveal className="lg:col-span-5">
            <h2 className="font-display text-[2.4rem] leading-[1.1] text-white sm:text-[3.2rem]">
              Engineered for performance,
              <br />
              <em>designed for living.</em>
            </h2>
            <p className="mt-6 max-w-md text-lg leading-relaxed text-white/80">
              Every ASVA chimney balances powerful suction, energy efficiency, low-noise operation and contemporary aesthetics.
            </p>
          </Reveal>
          <div className="grid gap-3 sm:grid-cols-3 lg:col-span-7">
            {curated.map((c, i) => (
              <Reveal key={c.accent} delay={i * 100} className={i === 1 ? "sm:translate-y-16" : ""}>
                <div className="h-full bg-mint p-4 pb-6">
                  <div className="relative aspect-[4/3] bg-white">
                    <Image src={c.img} alt="" fill sizes="(min-width:1024px) 18vw, (min-width:640px) 30vw, 90vw" className="object-contain p-3" />
                  </div>
                  <h3 className="mt-5 font-display text-2xl leading-tight text-forest-950">
                    {c.title}
                    <br />
                    <em className="text-forest">{c.accent}</em>
                  </h3>
                  <p className="mt-3 text-[0.92rem] leading-relaxed text-forest-950/70">{c.text}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ------------------------------------------------ FEATURED */}
      <section className="py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <ProductRail
            heading={
              <h2 className="font-display text-[2.2rem] leading-tight text-forest-950 sm:text-[3rem]">
                Featured <em className="text-forest">Models</em>
              </h2>
            }
          >
            {featured.map((p) => (
              <article key={p.slug} className="flex w-[82%] shrink-0 snap-start flex-col border border-forest-950/10 bg-white p-4 sm:w-[46%] lg:w-[calc(25%-12px)]">
                <Link href={`/products/${p.slug}`} className="group relative block aspect-square bg-mint">
                  <Image src={p.img} alt={p.name} fill sizes="(min-width:1024px) 22vw, (min-width:640px) 45vw, 80vw" className="object-contain p-6 mix-blend-multiply transition-transform duration-700 group-hover:scale-105" />
                  {p.badge && <span className="absolute top-3 left-3 bg-forest px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider text-white">{p.badge}</span>}
                </Link>
                <h3 className="mt-5 text-xl leading-snug text-forest-950">{p.name.replace(/^ASVA /, "")}</h3>
                <ul className="mt-3 flex-1 space-y-1.5 text-[0.9rem] text-forest-950/70">
                  {[
                    `${p.specs.suction.toLocaleString("en-IN")} m³/h suction`,
                    `${p.specs.motor} motor · ${p.specs.noise}`,
                    p.specs.control,
                    `Sizes: ${p.specs.sizes}`,
                  ].map((t) => (
                    <li key={t} className="flex gap-2">
                      <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-forest-950/50" />
                      {t}
                    </li>
                  ))}
                </ul>
                <div className="mt-6 grid grid-cols-2 gap-2">
                  <Link href={`/products/${p.slug}`} className="group flex items-center justify-between bg-forest px-3 py-3 text-[11px] font-bold uppercase tracking-[0.08em] text-white hover:bg-forest-500">
                    View details <Arrow className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" />
                  </Link>
                  <Link href="/contact" className="group flex items-center justify-between bg-saffron-600 px-3 py-3 text-[11px] font-bold uppercase tracking-[0.08em] text-white hover:bg-[#6a5c49]">
                    Enquire <Arrow className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" />
                  </Link>
                </div>
              </article>
            ))}
          </ProductRail>
        </div>
      </section>

      {/* ------------------------------------------------ SERIES TABS */}
      <SeriesTabs tabs={seriesTabs} />

      {/* ------------------------------------------------ NEW LAUNCHES */}
      <section className="bg-mint py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <Reveal>
            <h2 className="text-center font-display text-[2.2rem] leading-tight text-forest-950 sm:text-[3rem]">
              Our newly launched <em className="text-forest">chimneys</em>
            </h2>
          </Reveal>
          <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {newLaunches.map((n, i) => (
              <Reveal key={n.name} delay={i * 80} className={i % 2 === 1 ? "lg:translate-y-10" : ""}>
                <div className="group h-full bg-white">
                  <div className="relative aspect-[4/5] overflow-hidden bg-white">
                    <Image src={n.img} alt={n.name} fill sizes="(min-width:1024px) 25vw, 50vw" className="object-contain p-4 transition-transform duration-700 group-hover:scale-105" />
                    <span className="absolute top-3 left-3 bg-forest px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider text-white">New</span>
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl text-forest-950">{n.name}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-forest-950/65">{n.text}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ------------------------------------------------ FACILITY */}
      <section className="py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <Reveal>
            <Eyebrow>Manufacturing facility</Eyebrow>
          </Reveal>
          <div className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {facility.stats.map((s, i) => (
              <Reveal key={s.label} delay={i * 60}>
                <div className="flex h-full items-center gap-5 bg-mint p-5">
                  <p className="min-w-[4.5rem] text-4xl text-forest">
                    <Counter to={s.value} format={s.format} />
                  </p>
                  <p className="text-[0.95rem] leading-snug text-forest-950/75">{s.label}</p>
                </div>
              </Reveal>
            ))}
          </div>

          <Reveal className="mt-16">
            <Eyebrow>In-house capabilities</Eyebrow>
          </Reveal>
          <div className="mt-6 grid gap-3 md:grid-cols-2">
            {facility.capabilities.map((c, i) => (
              <Reveal key={c} delay={i * 50}>
                <div className="flex items-center gap-5 bg-mint">
                  <span className="flex h-16 w-16 shrink-0 items-center justify-center bg-mint-200 text-forest">
                    <Icon name="factory" className="h-6 w-6" />
                  </span>
                  <p className="pr-4 text-lg text-forest-950">{c}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ------------------------------------------------ LEGACY + CLIENTS */}
      <section className="overflow-hidden bg-mint py-20 sm:py-28">
        <div className="mx-auto grid max-w-7xl items-center gap-14 px-4 sm:px-6 lg:grid-cols-2">
          <Reveal>
            <h2 className="font-display text-[2.4rem] leading-[1.1] text-forest-950 sm:text-[3.2rem]">
              Built on a legacy of
              <br />
              <em className="text-forest">24+ years in manufacturing</em>
            </h2>
            <p className="mt-6 max-w-lg text-lg leading-relaxed text-forest-950/70">
              Our promoters are mechanical engineers with more than 23 years each in manufacturing and operations.
            </p>
            <div className="mt-10 border-t border-forest-950/15 pt-8">
              <p className="text-sm text-forest-950/60">We manufacture for leading appliance brands in India</p>
              <div className="mt-6 flex flex-wrap items-center gap-x-8 gap-y-6">
                {clientLogos.map((c) => (
                  <Image key={c.name} src={c.src} alt={`${c.name} logo`} width={c.w} height={c.hgt} style={{ height: c.h * 0.6 }} className="w-auto object-contain" />
                ))}
              </div>
            </div>
            <div className="mt-10">
              <Button href="/about">About ASVA</Button>
            </div>
          </Reveal>
          <Reveal delay={150} className="relative mx-auto h-[380px] w-full max-w-lg sm:h-[460px]">
            <div className="absolute top-0 left-0 w-[62%] -rotate-3 bg-white p-2 shadow-xl">
              <div className="relative aspect-square">
                <Image src="/images/company/factory.jpg" alt="ASVA manufacturing plant" fill sizes="320px" className="object-cover" />
              </div>
            </div>
            <div className="absolute top-10 right-0 w-[58%] rotate-2 bg-white p-2 shadow-xl">
              <div className="relative aspect-[4/3]">
                <Image src="/images/company/factory-floor.jpg" alt="Shop floor" fill sizes="300px" className="object-cover" />
              </div>
            </div>
            <div className="absolute bottom-0 left-[14%] w-[70%] rotate-1 bg-white p-2 shadow-2xl">
              <div className="relative aspect-[16/9]">
                <Image src="/images/company/shopfloor.jpg" alt="Production lines" fill sizes="360px" className="object-cover" />
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ------------------------------------------------ MADE IN + EXPERIENCE */}
      <section className="grid lg:grid-cols-2">
        <div className="relative overflow-hidden bg-forest-950 px-4 py-20 text-white sm:px-12 sm:py-24 lg:pl-[max(1.5rem,calc((100vw-80rem)/2+1.5rem))]">
          <Icon name="pin" className="absolute -right-10 -bottom-10 h-72 w-72 text-white/[0.04]" />
          <Reveal className="relative">
            <h2 className="font-display text-[2.4rem] leading-[1.1] sm:text-[3.2rem]">
              Made in
              <br />
              <em className="text-saffron">Barhi, Sonipat</em>
            </h2>
            <p className="mt-6 max-w-sm leading-relaxed text-white/70">
              {company.address.join(", ")}. A <Counter to={60000} format /> sq ft production area.
            </p>
            <div className="mt-10">
              <Button href="/contact" variant="tan">
                Contact us
              </Button>
            </div>
          </Reveal>
        </div>
        <div className="bg-white px-4 py-20 sm:px-12 sm:py-24 lg:pr-[max(1.5rem,calc((100vw-80rem)/2+1.5rem))]">
          <Reveal>
            <h2 className="font-display text-[2.2rem] leading-tight text-forest-950 sm:text-[3rem]">
              The ASVA <em className="text-forest">Experience</em>
            </h2>
          </Reveal>
          <ul className="mt-10 divide-y divide-forest-950/10">
            {experience.map((e, i) => (
              <Reveal key={e.title} as="li" delay={i * 80} className="flex gap-6 py-6 first:pt-0">
                <Icon name={e.icon} className="h-10 w-10 shrink-0 text-forest" />
                <div>
                  <h3 className="text-xl text-forest-950">{e.title}</h3>
                  <p className="mt-1.5 text-[0.92rem] leading-relaxed text-forest-950/60">{e.text}</p>
                </div>
              </Reveal>
            ))}
          </ul>
        </div>
      </section>

      {/* ------------------------------------------------ UPCOMING */}
      <section id="upcoming" className="scroll-mt-24 py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <Reveal>
            <Heading title={<>The upcoming <em>collection</em></>} text="Smart, connected chimneys and a new family of kitchen and cleaning appliances." />
          </Reveal>
          <div className="mt-12 grid gap-3 lg:grid-cols-3">
            {upcomingCollection.map((u, i) => (
              <Reveal key={u.name} delay={i * 80}>
                <div className="group relative aspect-[4/5] overflow-hidden bg-mint">
                  <Image src={u.img} alt={u.name} fill sizes="(min-width:1024px) 33vw, 100vw" className="object-cover transition-transform duration-700 group-hover:scale-105" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/10 to-transparent" />
                  <span className="absolute top-4 left-4 bg-white px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider text-forest">Coming soon</span>
                  <div className="absolute inset-x-6 bottom-6 text-white">
                    <h3 className="text-2xl leading-tight">{u.name}</h3>
                    <p className="accent mt-1 text-lg text-white/80">{u.text}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
          <div className="mt-3 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {upcomingProducts.map((u, i) => (
              <Reveal key={u.name} delay={i * 60}>
                <div className="flex items-center gap-4 bg-mint">
                  <div className="relative h-20 w-20 shrink-0 overflow-hidden bg-white">
                    <Image src={u.img} alt={u.name} fill sizes="80px" className="object-cover" />
                  </div>
                  <p className="pr-4 leading-snug text-forest-950">{u.name}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
