import type { Metadata } from "next";
import Image from "next/image";
import Reveal from "@/components/Reveal";
import Counter from "@/components/Counter";
import { Button, Heading, Icon, PageHero } from "@/components/ui";
import { aboutLong, clients, company, facility, fanair, features, ignique, mission, promoters } from "@/lib/data";

export const metadata: Metadata = {
  title: "About Us",
  description: "ASVA India LLP — premium kitchen chimney manufacturer in Barhi, Sonipat. Our story, mission, promoters and manufacturing facility.",
};

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About ASVA India LLP"
        title={
          <>
            Elevating every <span className="italic text-saffron">kitchen</span> experience.
          </>
        }
        text={company.intro}
      />

      {/* Story */}
      <section className="py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          {/* Heading left, lead statement right */}
          <div className="grid gap-8 lg:grid-cols-12 lg:items-end">
            <Reveal className="lg:col-span-6">
              <Heading eyebrow="Who we are" title="A manufacturer of premium kitchen appliances." />
            </Reveal>
            <Reveal delay={120} className="lg:col-span-6">
              <p className="border-l-2 border-forest pl-6 text-lg leading-relaxed text-forest-950/80 sm:text-xl">{aboutLong[0]}</p>
            </Reveal>
          </div>

          <div className="mt-16 grid gap-12 lg:grid-cols-12 lg:gap-16">
            {/* Plant photo with a floating stat badge */}
            <Reveal variant="clip" className="lg:col-span-7">
              <div className="relative">
                <div className="relative aspect-[5/4] overflow-hidden bg-mint">
                  <Image src="/images/company/factory.avif" alt="ASVA manufacturing plant, Barhi, Sonipat" fill sizes="(min-width:1024px) 55vw, 100vw" className="object-cover object-[50%_40%]" />
                </div>
                <div className="absolute right-0 bottom-0 bg-forest px-6 py-5 text-white sm:px-8 sm:py-6">
                  <p className="font-display text-4xl leading-none sm:text-5xl">
                    <Counter to={60000} format />
                  </p>
                  <p className="mt-2 text-xs uppercase tracking-[0.2em] text-white/70">sq ft plant · Barhi, Sonipat</p>
                </div>
              </div>
            </Reveal>

            {/* What we stand for */}
            <ol className="flex flex-col justify-center divide-y divide-forest-950/10 border-y border-forest-950/10 lg:col-span-5">
              {[
                { icon: "wind", title: "Engineered for performance", text: aboutLong[1] },
                { icon: "factory", title: "A chimney for every kitchen", text: aboutLong[2] },
                { icon: "shield", title: "Cleaner, healthier homes", text: aboutLong[3] },
              ].map((s, i) => (
                <Reveal as="li" key={s.title} delay={150 + i * 120} variant="right" className="group flex gap-5 py-7">
                  <span className="flex h-12 w-12 shrink-0 items-center justify-center bg-mint text-forest transition-colors duration-300 group-hover:bg-forest group-hover:text-white">
                    <Icon name={s.icon} />
                  </span>
                  <div>
                    <h3 className="flex items-baseline gap-3 text-xl text-forest-950">
                      <span className="text-xs font-bold tracking-wider text-forest">0{i + 1}</span>
                      {s.title}
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-forest-950/65">{s.text}</p>
                  </div>
                </Reveal>
              ))}
            </ol>
          </div>
        </div>
      </section>

      {/* Mission */}
      <section className="relative overflow-hidden bg-forest py-24 text-white sm:py-32">
        <div className="grid-lines absolute inset-0 opacity-70" />
        <div className="relative mx-auto grid max-w-7xl gap-12 px-4 sm:px-6 lg:grid-cols-12">
          <Reveal className="lg:col-span-4">
            <h2 className="font-display text-6xl leading-[0.95] sm:text-7xl">
              Our
              <br />
              <span className="italic text-saffron">Mission</span>
            </h2>
          </Reveal>
          <ol className="divide-y divide-white/15 border-y border-white/15 lg:col-span-8">
            {mission.map((m, i) => (
              <Reveal as="li" key={m} delay={i * 70} className="group flex items-center gap-6 py-6">
                <span className="w-12 shrink-0 font-display text-3xl text-saffron">0{i + 1}</span>
                <span className="font-display text-2xl transition-transform duration-300 group-hover:translate-x-2 sm:text-3xl">{m}</span>
              </Reveal>
            ))}
          </ol>
        </div>
      </section>

      {/* Why */}
      <section className="py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <Reveal>
            <Heading center eyebrow="Why choose ASVA kitchen chimneys" title="Built with precision. Backed by service." />
          </Reveal>
          <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {features.map((f, i) => (
              <Reveal key={f.title} delay={i * 60}>
                <div className="flex h-full items-start gap-5 rounded-3xl bg-mint p-7">
                  <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-forest text-saffron">
                    <Icon name={f.icon} />
                  </span>
                  <div>
                    <h3 className="font-display text-xl text-forest-950">{f.title}</h3>
                    <p className="mt-1 text-forest-950/60">{f.text}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Promoters */}
      <section className="bg-mint py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <Reveal>
            <Heading eyebrow="Promoters" title="Led by engineers with 23+ years each in manufacturing." text="Mechanical engineers with more than 23 years each in manufacturing and operations." />
          </Reveal>
          <div className="mt-14 grid grid-cols-2 gap-5 md:grid-cols-3 lg:grid-cols-5">
            {promoters.map((m, i) => (
              <Reveal key={m.name} delay={i * 70}>
                <div className="group h-full overflow-hidden rounded-3xl bg-white ring-1 ring-forest/10">
                  <div className="relative aspect-[4/5] overflow-hidden bg-forest">
                    <Image src={m.img} alt={m.name} fill sizes="(min-width:1024px) 20vw, 50vw" className="object-cover object-top grayscale-[30%] transition duration-700 group-hover:scale-105 group-hover:grayscale-0" />
                  </div>
                  <div className="p-5">
                    <h3 className="font-display text-xl text-forest-950">{m.name}</h3>
                    <p className="text-sm font-semibold text-saffron-600">{m.role}</p>
                    <p className="mt-2 text-xs leading-relaxed text-forest-950/55">{m.bio}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>

          {/* IGNIQUE */}
          <Reveal delay={100}>
            <div className="mt-10 grid gap-10 overflow-hidden rounded-sm bg-forest-950 p-8 text-white sm:p-12 lg:grid-cols-2">
              <div>
                <p className="text-xs font-bold uppercase tracking-[0.3em] text-saffron">Engineering & plant setup consultancy</p>
                <h3 className="mt-4 font-display text-4xl">{ignique.title}</h3>
                <p className="mt-4 leading-relaxed text-white/70">{ignique.text}</p>
                <div className="mt-6 flex flex-wrap gap-2">
                  {ignique.expertise.map((e) => (
                    <span key={e} className="rounded-full bg-white/10 px-3 py-1.5 text-xs text-white/80">
                      {e}
                    </span>
                  ))}
                </div>
                <p className="mt-6 text-sm leading-relaxed text-white/55">
                  <strong className="text-white/80">Facilities built and past employers: </strong>
                  {ignique.employers}
                </p>
              </div>
              <div className="grid grid-cols-2 gap-px self-center overflow-hidden rounded-2xl bg-white/10">
                {ignique.stats.map((s) => (
                  <div key={s.label} className="bg-forest-950 p-5 sm:p-6">
                    <p className="font-display text-2xl leading-tight text-saffron sm:text-3xl">{s.value}</p>
                    <p className="mt-2 text-sm text-white/60">{s.label}</p>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Facility */}
      <section className="py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <div className="grid gap-12 lg:grid-cols-2">
            <Reveal>
              <Heading eyebrow="Manufacturing facility" title={facility.location} text={facility.summary} />
              <ul className="mt-8 grid gap-3 sm:grid-cols-2">
                {facility.capabilities.map((c) => (
                  <li key={c} className="flex items-center gap-3 font-medium text-forest-900">
                    <span className="flex h-7 w-7 items-center justify-center rounded-full bg-saffron/20 text-saffron-600">
                      <Icon name="check" className="h-4 w-4" />
                    </span>
                    {c}
                  </li>
                ))}
              </ul>
            </Reveal>
            <Reveal delay={100}>
              <div className="grid grid-cols-3 gap-3 sm:gap-4">
                {facility.stats.map((s, i) => (
                  <div key={s.label} className={`rounded-3xl p-4 sm:p-7 ${i === 0 ? "col-span-3 bg-forest text-white" : "bg-mint"}`}>
                    <p className={`font-display text-4xl sm:text-5xl ${i === 0 ? "text-saffron" : "text-forest"}`}>
                      <Counter to={s.value} format={s.format} />
                    </p>
                    <p className={`mt-2 text-xs sm:text-sm ${i === 0 ? "text-white/70" : "text-forest-950/60"}`}>{s.label}</p>
                  </div>
                ))}
              </div>
            </Reveal>
          </div>
          <Reveal delay={150}>
            <div className="mt-12 grid gap-4 md:grid-cols-3">
              <div className="relative aspect-[4/3] overflow-hidden rounded-3xl md:col-span-2 md:aspect-auto">
                <Image src="/images/company/factory-floor.avif" alt="Manufacturing shop floor with production machinery" fill sizes="(min-width:768px) 66vw, 100vw" className="object-cover" />
              </div>
              <div className="relative aspect-square overflow-hidden rounded-3xl">
                <Image src="/images/facility/assembly-line.avif" alt="Chimney assembly line" fill sizes="(min-width:768px) 33vw, 100vw" className="object-cover" />
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* FanAir */}
      <section className="pb-24 sm:pb-32">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <Reveal>
            <div className="overflow-hidden rounded-sm bg-mint ring-1 ring-forest/10">
              <div className="relative aspect-[16/5] w-full bg-white">
                <Image src="/images/company/fanair.avif" alt="FanAir manufacturing unit" fill sizes="100vw" className="object-cover" />
              </div>
              <div className="grid gap-8 p-8 sm:p-12 lg:grid-cols-3">
                <div className="lg:col-span-1">
                  <p className="text-xs font-bold uppercase tracking-[0.3em] text-forest/60">Group strength</p>
                  <h3 className="mt-3 font-display text-3xl text-forest-950">{fanair.title}</h3>
                  <p className="mt-3 text-forest-950/65">{fanair.text}</p>
                </div>
                <div className="grid gap-4 sm:grid-cols-3 lg:col-span-2">
                  {[
                    ["Sales office", fanair.salesOffice],
                    ["Factory", fanair.factory],
                    ["Web", fanair.web],
                  ].map(([k, v]) => (
                    <div key={k} className="rounded-2xl bg-white p-5">
                      <p className="text-xs font-bold uppercase tracking-[0.2em] text-saffron-600">{k}</p>
                      <p className="mt-2 text-sm leading-relaxed text-forest-950/75">{v}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Clients */}
      <section className="bg-forest-950 py-24 text-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <Reveal>
              <Heading light eyebrow="Our clients" title="Trusted by India's leading appliance brands." text={`We manufacture for leading appliance brands in India: ${clients.join(", ")}.`} />
              <div className="mt-10">
                <Button href="/contact">Partner with us</Button>
              </div>
            </Reveal>
            <Reveal delay={100}>
              <div className="relative mx-auto aspect-[950/819] w-full max-w-lg overflow-hidden rounded-sm bg-white p-4">
                <Image src="/images/clients/clients.avif" alt={`Client brands: ${clients.join(", ")}`} fill sizes="(min-width:1024px) 40vw, 100vw" className="object-contain p-4" />
              </div>
            </Reveal>
          </div>
        </div>
      </section>
    </>
  );
}
