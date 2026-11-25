import type { Metadata } from "next";
import { Suspense } from "react";
import ContactForm from "@/components/ContactForm";
import Reveal from "@/components/Reveal";
import { Icon, PageHero } from "@/components/ui";
import { company } from "@/lib/data";

export const metadata: Metadata = {
  title: "Contact Us",
  description: "Get in touch with ASVA India LLP, Barhi Industrial Area, Sonipat, Haryana.",
};

export default function ContactPage() {
  const cards = [
    { icon: "pin", title: "Visit us", lines: [company.name, ...company.address] },
    { icon: "phone", title: "Call us", lines: company.phones, tel: true },
    { icon: "globe", title: "Online", lines: [company.website] },
  ];

  return (
    <>
      <PageHero
        eyebrow="Contact Us"
        title={
          <>
            Let&apos;s talk <span className="italic text-saffron">chimneys.</span>
          </>
        }
        text="Product enquiries, OEM manufacturing, dealership or after-sales support — our team in Sonipat is ready to help."
      />

      <section className="relative pt-12 pb-12">
        <div className="mx-auto grid max-w-7xl gap-4 px-4 sm:px-6 md:grid-cols-3">
          {cards.map((c, i) => (
            <Reveal key={c.title} delay={i * 80}>
              <div className="h-full rounded-3xl bg-white p-8 shadow-xl shadow-forest/10 ring-1 ring-forest/10">
                <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-forest text-saffron">
                  <Icon name={c.icon} />
                </span>
                <h2 className="mt-5 font-display text-2xl text-forest-950">{c.title}</h2>
                <div className="mt-2 space-y-1 text-forest-950/70">
                  {c.lines.map((l) =>
                    c.tel ? (
                      <a key={l} href={`tel:${l.replace(/\s/g, "")}`} className="block hover:text-forest">
                        {l}
                      </a>
                    ) : (
                      <p key={l}>{l}</p>
                    ),
                  )}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="py-16 sm:py-24">
        <div className="mx-auto grid max-w-7xl gap-12 px-4 sm:px-6 lg:grid-cols-12">
          <Reveal className="lg:col-span-7">
            <h2 className="font-display text-4xl text-forest-950 sm:text-5xl">Send us an enquiry</h2>
            <p className="mt-3 mb-10 text-forest-950/60">Fill in the details below and we&apos;ll get back to you.</p>
            <Suspense fallback={<div className="h-[480px]" />}>
              <ContactForm />
            </Suspense>
          </Reveal>
          <Reveal delay={100} className="lg:col-span-5">
            <div className="sticky top-28 overflow-hidden rounded-[2rem] bg-forest-950 text-white">
              <div className="relative aspect-[4/3] w-full">
                <iframe
                  title="ASVA India LLP location map"
                  src={`https://www.google.com/maps?q=${encodeURIComponent(company.mapQuery)}&output=embed`}
                  className="absolute inset-0 h-full w-full grayscale-[40%]"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
              <div className="p-8">
                <p className="text-xs font-bold uppercase tracking-[0.3em] text-saffron">Factory & office</p>
                <p className="mt-3 font-display text-2xl">{company.name}</p>
                <p className="mt-2 leading-relaxed text-white/65">{company.address.join(", ")}</p>
                <div className="mt-6 flex flex-wrap gap-3">
                  <a
                    href={`https://wa.me/${company.whatsapp}`}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 rounded-full bg-saffron px-5 py-3 text-sm font-semibold text-forest-950 transition hover:bg-saffron-200"
                  >
                    <Icon name="whatsapp" className="h-5 w-5" /> WhatsApp
                  </a>
                  <a
                    href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(company.mapQuery)}`}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 rounded-full bg-white/10 px-5 py-3 text-sm font-semibold ring-1 ring-white/20 transition hover:bg-white/20"
                  >
                    <Icon name="pin" className="h-5 w-5" /> Directions
                  </a>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
