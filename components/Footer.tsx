import Image from "next/image";
import Link from "next/link";
import { company, nav, series, seriesHref } from "@/lib/data";

const Chevron = () => (
  <svg viewBox="0 0 12 12" className="h-3 w-3 shrink-0 text-white/50 transition-transform group-hover:translate-x-1 group-hover:text-white" aria-hidden>
    <path d="M4 2l4 4-4 4" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

export default function Footer() {
  const helpLinks = [
    { label: "Chat on WhatsApp", href: `https://wa.me/${company.whatsapp}`, external: true },
    { label: `Call ${company.phones[0]}`, href: `tel:${company.phones[0].replace(/\s/g, "")}`, external: true },
    { label: "Download the catalogue", href: "/catalogue" },
    { label: "Send an enquiry", href: "/contact" },
  ];

  return (
    <footer className="text-white">
      {/* Help band */}
      <section className="bg-cocoa">
        <div className="mx-auto grid max-w-7xl gap-10 px-4 py-20 sm:px-6 lg:grid-cols-12">
          <p className="text-[11px] font-bold uppercase tracking-[0.22em] text-saffron lg:col-span-5">Quick links</p>
          <div className="lg:col-span-7">
            <h2 className="font-display text-[2rem] leading-tight text-white/70 sm:text-[2.6rem]">
              We&apos;re here at every step of your <em className="text-white">kitchen experience</em>
            </h2>
            <ul className="mt-10 border-t border-white/15">
              {helpLinks.map((l) => (
                <li key={l.label} className="border-b border-white/15">
                  {l.external ? (
                    <a href={l.href} target={l.href.startsWith("http") ? "_blank" : undefined} rel="noreferrer" className="group flex items-center justify-between py-5 text-lg text-white/90 hover:text-white">
                      {l.label}
                      <Chevron />
                    </a>
                  ) : (
                    <Link href={l.href} className="group flex items-center justify-between py-5 text-lg text-white/90 hover:text-white">
                      {l.label}
                      <Chevron />
                    </Link>
                  )}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Main footer */}
      <section className="bg-forest-950">
        <div className="mx-auto max-w-7xl px-4 pt-20 pb-10 sm:px-6">
          <div className="grid gap-12 lg:grid-cols-12">
            <div className="lg:col-span-5">
              <Image src="/images/brand/logo-white.avif" alt="ASVA" width={464} height={136} className="h-9 w-auto" />
              <p className="mt-8 font-display text-3xl leading-tight text-white/75 sm:text-4xl">
                Elevating every
                <br />
                <em className="text-white">kitchen experience</em>
              </p>
              <dl className="mt-10 grid max-w-md grid-cols-2 gap-6 text-sm">
                {company.phones.map((p, i) => (
                  <div key={p}>
                    <dt className="text-white/50">{i === 0 ? "Sales & enquiry" : "Alternate number"}</dt>
                    <dd className="mt-2">
                      <a href={`tel:${p.replace(/\s/g, "")}`} className="text-base tracking-wide text-white hover:text-saffron">
                        {p}
                      </a>
                    </dd>
                  </div>
                ))}
              </dl>
            </div>

            <ul className="space-y-4 lg:col-span-2 lg:border-l lg:border-white/10 lg:pl-8">
              {nav.map((n) => (
                <li key={n.href}>
                  <Link href={n.href} className="accent text-xl text-white/85 transition hover:text-white">
                    {n.label}
                  </Link>
                </li>
              ))}
            </ul>

            <ul className="space-y-4 lg:col-span-2 lg:border-l lg:border-white/10 lg:pl-8">
              {series.map((s) => (
                <li key={s.id}>
                  <Link href={seriesHref(s.id)} className="accent text-xl text-white/85 transition hover:text-white">
                    {s.name}
                  </Link>
                </li>
              ))}
            </ul>

            <div className="text-sm leading-relaxed text-white/60 lg:col-span-3 lg:border-l lg:border-white/10 lg:pl-8">
              <p className="text-[11px] font-bold uppercase tracking-[0.22em] text-saffron">Factory</p>
              <p className="mt-4">
                {company.name}
                <br />
                {company.address.join(", ")}
              </p>
              <p className="mt-4 text-white/80">{company.website}</p>
            </div>
          </div>

          <div className="mt-16 flex flex-col gap-3 border-t border-white/10 pt-8 text-sm text-white/45 sm:flex-row sm:justify-between">
            <p>© {company.name}. All rights reserved.</p>
            <p>Manufactured in Barhi, Sonipat · Haryana, India</p>
          </div>
        </div>
      </section>
    </footer>
  );
}
