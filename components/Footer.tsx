import Image from "next/image";
import Link from "next/link";
import { company, nav, series, seriesHref } from "@/lib/data";
import { Icon } from "./ui";

export default function Footer() {
  return (
    <footer className="relative overflow-hidden bg-forest-950 text-white">
      <div className="grid-lines absolute inset-0 opacity-50 [mask-image:linear-gradient(to_bottom,black,transparent)]" />
      <div className="relative mx-auto max-w-7xl px-4 pt-20 pb-10 sm:px-6">
        <div className="relative">
          {/* Watermark sits behind the link columns instead of taking its own row. */}
          <p
            aria-hidden
            className="pointer-events-none absolute inset-x-0 top-1/2 -translate-y-1/2 select-none overflow-hidden whitespace-nowrap text-center font-display text-[22vw] leading-[0.8] tracking-tighter text-white/[0.04] lg:text-[16rem]"
          >
            ASVA India
          </p>
        <div className="relative grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <Image src="/images/brand/logo-white.png" alt="ASVA" width={464} height={136} className="h-10 w-auto" />
            <p className="mt-6 max-w-sm leading-relaxed text-white/60">
              A manufacturer of premium kitchen appliances, specialising in kitchen chimneys engineered for strong smoke extraction, cleaner air and a seamless cooking experience.
            </p>
            <p className="mt-6 font-display text-xl text-saffron italic">{company.tagline}</p>
          </div>

          <div className="lg:col-span-2">
            <h4 className="text-xs font-bold uppercase tracking-[0.25em] text-white/40">Explore</h4>
            <ul className="mt-5 space-y-3">
              {nav.map((n) => (
                <li key={n.href}>
                  <Link href={n.href} className="text-white/75 transition hover:text-saffron">
                    {n.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-2">
            <h4 className="text-xs font-bold uppercase tracking-[0.25em] text-white/40">Series</h4>
            <ul className="mt-5 space-y-3">
              {series.map((s) => (
                <li key={s.id}>
                  <Link href={seriesHref(s.id)} className="text-white/75 transition hover:text-saffron">
                    {s.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-4">
            <h4 className="text-xs font-bold uppercase tracking-[0.25em] text-white/40">Reach us</h4>
            <ul className="mt-5 space-y-4 text-white/75">
              <li className="flex gap-3">
                <Icon name="pin" className="mt-0.5 h-5 w-5 shrink-0 text-saffron" />
                <span>
                  {company.name}
                  <br />
                  {company.address.join(", ")}
                </span>
              </li>
              {company.phones.map((p) => (
                <li key={p} className="flex gap-3">
                  <Icon name="phone" className="h-5 w-5 shrink-0 text-saffron" />
                  <a href={`tel:${p.replace(/\s/g, "")}`} className="hover:text-white">
                    {p}
                  </a>
                </li>
              ))}
              <li className="flex gap-3">
                <Icon name="globe" className="h-5 w-5 shrink-0 text-saffron" />
                <span>{company.website}</span>
              </li>
            </ul>
          </div>
        </div>
        </div>

        <div className="mt-16 flex flex-col gap-3 border-t border-white/10 pt-8 text-sm text-white/45 sm:flex-row sm:justify-between">
          <p>© {company.name}. All rights reserved.</p>
          <p>Manufactured in Barhi, Sonipat · Haryana, India</p>
        </div>
      </div>
    </footer>
  );
}
