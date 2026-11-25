import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import EnquiryCta from "@/components/EnquiryCta";
import Reveal from "@/components/Reveal";
import { Button, Eyebrow, Heading, Icon } from "@/components/ui";
import { vacuums } from "@/lib/data";

export const metadata: Metadata = {
  title: "Vacuum Cleaners",
  description: "ASVA wet & dry vacuum cleaners with stainless-steel tanks from 12 to 42 litres.",
};

// "Suction: 200 mbar · Airflow: 65 L/s" -> [["Suction","200 mbar"],["Airflow","65 L/s"]]
const parse = (points: string[]) =>
  points.flatMap((pt) =>
    pt.split(" · ").map((part) => {
      const i = part.indexOf(":");
      return [part.slice(0, i).trim(), part.slice(i + 1).trim()] as const;
    }),
  );

const shared = [
  { icon: "wave", title: "Wet & dry", text: "Picks up liquid spills as well as dust and debris." },
  { icon: "shield", title: "Stainless-steel tank", text: "Rust-free tanks from 12 to 42 litres." },
  { icon: "wind", title: "Strong airflow", text: "Up to 130 L/s with 1,200–1,700 W motors." },
  { icon: "check", title: "Ready to use", text: "Floor, round and crevice tools in the box." },
];

export default function VacuumCleanersPage() {
  const models = vacuums.map((v) => ({ v, kv: parse(v.points) }));
  const keys = [...new Set(models.flatMap((m) => m.kv.map(([k]) => k)))];
  const lookup = (kv: (readonly [string, string])[], k: string) => kv.find(([x]) => x === k)?.[1];

  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden bg-forest-950 pt-32 pb-20 text-white sm:pt-40 sm:pb-28">
        <div className="grid-lines absolute inset-0 [mask-image:radial-gradient(ellipse_at_top_left,black,transparent_70%)]" />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6">
          <nav className="flex flex-wrap items-center gap-2 text-sm text-white/50" aria-label="Breadcrumb">
            <Link href="/" className="hover:text-white">Home</Link>/
            <Link href="/products" className="hover:text-white">Our Products</Link>/
            <span className="text-saffron">Vacuum Cleaners</span>
          </nav>

          <div className="mt-10 grid items-center gap-12 lg:grid-cols-2">
            <div>
              <Eyebrow light>Our Products · Vacuum Cleaners</Eyebrow>
              <h1 className="mt-6 font-display text-5xl leading-[1] tracking-tight sm:text-7xl">
                Wet or dry, <span className="italic text-saffron">done</span> in one pass.
              </h1>
              <p className="mt-6 max-w-xl text-lg leading-relaxed text-white/70">
                Heavy-duty vacuum cleaners with stainless-steel tanks, for homes, workshops and commercial spaces. Two tank sizes, six capacities.
              </p>
              <div className="mt-10 flex flex-wrap gap-3">
                {models.map(({ v }) => (
                  <Button key={v.slug} href={`#${v.slug}`} variant="ghost">
                    {v.code.split(" – ")[0]} · {v.capacities}
                  </Button>
                ))}
              </div>
            </div>

            <Reveal delay={150}>
              <div className="relative aspect-[3/2] overflow-hidden rounded-[2rem] ring-1 ring-white/10">
                <Image src="/images/products/vacuum-hero.jpg" alt="ASVA wet and dry vacuum cleaner" fill priority sizes="(min-width:1024px) 50vw, 100vw" className="object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-forest-950/70 via-transparent to-transparent" />
                <div className="absolute -top-16 -right-16 h-44 w-44 rounded-full border-[28px] border-saffron [clip-path:inset(0_0_50%_50%)]" />
                <p className="absolute bottom-5 left-6 font-display text-2xl">12 L to 42 L</p>
              </div>
            </Reveal>
          </div>
        </div>
        <div className="sawtooth absolute inset-x-0 bottom-0 h-3.5" />
      </section>

      {/* Shared features */}
      <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6">
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {shared.map((f, i) => (
            <Reveal key={f.title} delay={i * 70}>
              <div className="group h-full rounded-3xl bg-mint p-7 transition-all duration-500 hover:-translate-y-1 hover:bg-forest">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white text-forest transition-colors duration-500 group-hover:bg-saffron group-hover:text-forest-950">
                  <Icon name={f.icon} />
                </div>
                <h3 className="mt-5 font-display text-xl text-forest-950 transition-colors group-hover:text-white">{f.title}</h3>
                <p className="mt-1.5 text-sm text-forest-950/60 transition-colors group-hover:text-white/70">{f.text}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Models */}
      <section className="mx-auto max-w-7xl space-y-10 px-4 pb-24 sm:px-6">
        <Reveal>
          <Heading eyebrow="The range" title="Choose your tank size" />
        </Reveal>
        {models.map(({ v, kv }, i) => (
          <Reveal key={v.slug}>
            <article
              id={v.slug}
              className="group grid scroll-mt-28 overflow-hidden rounded-[2rem] bg-white ring-1 ring-forest/10 transition-shadow duration-500 hover:shadow-2xl hover:shadow-forest/10 lg:grid-cols-2"
            >
              <Link
                href={`/products/${v.slug}`}
                className={`relative block aspect-[4/3] overflow-hidden bg-gradient-to-br from-mint via-white to-mint-200 ${i % 2 ? "lg:order-2" : ""}`}
                aria-label={v.name}
              >
                <div className="absolute -top-20 -right-20 h-52 w-52 rounded-full border-[30px] border-saffron/90 [clip-path:inset(0_0_50%_50%)] transition-transform duration-700 group-hover:rotate-12" />
                <Image src={v.img} alt={v.name} fill sizes="(min-width:1024px) 50vw, 100vw" className="object-contain p-8 mix-blend-multiply transition-transform duration-700 group-hover:scale-105" />
              </Link>

              <div className="flex flex-col justify-center p-8 sm:p-12">
                <span className="w-fit rounded-full bg-forest px-3 py-1 text-[10px] font-bold tracking-[0.2em] text-white">{v.code}</span>
                <h3 className="mt-5 font-display text-4xl tracking-tight text-forest-950">{v.name}</h3>

                <p className="mt-6 text-[10px] font-bold uppercase tracking-[0.2em] text-forest/55">Tank capacities</p>
                <ul className="mt-2 flex gap-2">
                  {v.capacities.split(", ").map((c) => (
                    <li key={c} className="rounded-full bg-saffron px-4 py-1.5 text-sm font-bold text-forest-950">
                      {c}
                    </li>
                  ))}
                </ul>

                <dl className="mt-8 grid grid-cols-2 gap-px overflow-hidden rounded-2xl bg-forest/10 ring-1 ring-forest/10">
                  {kv
                    .filter(([k]) => ["Power", "Airflow", "Noise", "Hose"].includes(k))
                    .map(([k, val]) => (
                      <div key={k} className="bg-white p-4">
                        <dt className="text-[10px] font-bold uppercase tracking-[0.2em] text-forest/55">{k}</dt>
                        <dd className="mt-1 font-display text-lg text-forest-950">{val}</dd>
                      </div>
                    ))}
                </dl>

                <div className="mt-8 flex flex-wrap gap-3">
                  <Button href={`/products/${v.slug}`} variant="dark">
                    View full details
                  </Button>
                  <Button href={`/contact?product=${encodeURIComponent(v.name)}`} variant="outline">
                    Enquire
                  </Button>
                </div>
              </div>
            </article>
          </Reveal>
        ))}
      </section>

      {/* Comparison */}
      <section className="bg-mint py-20 sm:py-24">
        <div className="mx-auto max-w-5xl px-4 sm:px-6">
          <Reveal>
            <Heading eyebrow="Compare" title="Tank 12″ vs Tank 10.5″" size="sm" />
          </Reveal>
          <Reveal delay={100}>
            <div className="mt-10 overflow-x-auto rounded-3xl bg-white ring-1 ring-forest/10">
              <table className="w-full min-w-[560px] text-left text-sm">
                <thead>
                  <tr className="border-b border-forest/10">
                    <th className="px-6 py-5 text-[11px] font-bold uppercase tracking-[0.18em] text-forest/60">Specification</th>
                    {models.map(({ v }) => (
                      <th key={v.slug} className="px-6 py-5">
                        <Link href={`/products/${v.slug}`} className="font-display text-lg text-forest-950 hover:text-forest">
                          {v.code.split(" – ")[0]}
                        </Link>
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {keys.map((k, i) => (
                    <tr key={k} className={i % 2 ? "bg-white" : "bg-mint/50"}>
                      <th scope="row" className="px-6 py-3.5 font-semibold text-forest-900">{k}</th>
                      {models.map(({ v, kv }) => (
                        <td key={v.slug} className="px-6 py-3.5 text-forest-950/75">
                          {lookup(kv, k) ?? <span className="text-forest-950/35">—</span>}
                        </td>
                      ))}
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
          title="Need vacuum cleaners in bulk?"
          text="We supply homes, offices and retail partners. Tell us the tank size and quantity and we will send a quote."
        />
      </div>
    </>
  );
}
