"use client";

import Image from "next/image";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState, type FormEvent } from "react";
import { company } from "@/lib/data";
import { Icon } from "./ui";

// Enquiry popup shown DELAY ms after a visitor arrives, once per browser session.
// Like ContactForm, it is front-end only: submitting opens WhatsApp with the enquiry pre-filled.
// Uses the native <dialog> element, which handles focus trapping, Esc to close and the top layer.

const DELAY = 2000;
const SEEN_KEY = "asva-enquiry-popup-seen";
const SKIP_ON = ["/contact"]; // pages that already have the full form

export default function EnquiryPopup() {
  const pathname = usePathname();
  const ref = useRef<HTMLDialogElement>(null);
  const [sent, setSent] = useState(false);

  useEffect(() => {
    if (SKIP_ON.includes(pathname)) return;
    try {
      if (sessionStorage.getItem(SEEN_KEY)) return;
    } catch {
      // storage blocked (private mode etc.): still show it, just can't remember
    }
    const id = window.setTimeout(() => {
      const d = ref.current;
      if (!d || d.open) return;
      d.showModal();
      document.body.style.overflow = "hidden";
      try {
        sessionStorage.setItem(SEEN_KEY, "1");
      } catch {}
    }, DELAY);
    return () => window.clearTimeout(id);
  }, [pathname]);

  const close = () => ref.current?.close();

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const f = new FormData(e.currentTarget);
    const lines = [
      "Hello ASVA India, I have an enquiry.",
      `Name: ${f.get("name")}`,
      `Phone: ${f.get("phone")}`,
      `Interested in: ${f.get("interest")}`,
      f.get("message") ? `Message: ${f.get("message")}` : "",
    ].filter(Boolean);
    window.open(`https://wa.me/${company.whatsapp}?text=${encodeURIComponent(lines.join("\n"))}`, "_blank", "noopener");
    setSent(true);
    e.currentTarget.reset();
  };

  const field =
    "w-full rounded-xl border-0 bg-mint px-4 py-3 text-[0.95rem] text-forest-950 outline-none ring-1 ring-transparent transition placeholder:text-forest-950/35 focus:bg-white focus:ring-forest/40";

  return (
    <dialog
      ref={ref}
      aria-labelledby="enquiry-popup-title"
      onClose={() => {
        document.body.style.overflow = "";
      }}
      // Clicking the dimmed backdrop (the dialog element itself, outside the panel) closes it.
      onClick={(e) => {
        if (e.target === e.currentTarget) close();
      }}
      className="m-auto w-[calc(100%-2rem)] max-w-3xl overflow-visible bg-transparent p-0 backdrop:bg-forest-950/70 backdrop:backdrop-blur-sm open:animate-[popIn_0.35s_cubic-bezier(0.2,0.7,0.2,1)]"
    >
      <div className="relative grid max-h-[calc(100svh-2rem)] overflow-y-auto rounded-sm bg-white shadow-2xl md:grid-cols-5 md:overflow-hidden">
        <button
          type="button"
          onClick={close}
          aria-label="Close enquiry form"
          className="absolute top-3 right-3 z-10 flex h-10 w-10 items-center justify-center rounded-full bg-white/90 text-forest-950 shadow ring-1 ring-forest/10 transition hover:bg-mint"
        >
          <svg viewBox="0 0 20 20" className="h-4 w-4" aria-hidden>
            <path d="M5 5l10 10M15 5L5 15" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
          </svg>
        </button>

        {/* Visual side (hidden on phones to keep the form short) */}
        <div className="relative hidden overflow-hidden bg-forest-950 p-8 text-white md:col-span-2 md:flex md:flex-col">
          <div className="grid-lines absolute inset-0 opacity-60" />
          <p className="relative text-[10px] font-bold uppercase tracking-[0.3em] text-saffron">ASVA India LLP</p>
          <p className="relative mt-3 font-display text-3xl leading-[1.1]">
            Find the right <span className="italic text-saffron">chimney</span> for you.
          </p>
          <div className="relative mx-auto mt-6 aspect-square w-full max-w-[200px] rounded-full bg-gradient-to-br from-white to-mint-200">
            <Image src="/images/products/bldc-9.avif" alt="" fill sizes="200px" className="object-contain p-6 mix-blend-multiply" />
          </div>
          <ul className="relative mt-auto space-y-2 pt-6 text-sm text-white/75">
            {["Prices for 60, 75 & 90 cm", "OEM & dealership enquiries", "Reply on WhatsApp"].map((t) => (
              <li key={t} className="flex items-center gap-2">
                <Icon name="check" className="h-4 w-4 shrink-0 text-saffron" /> {t}
              </li>
            ))}
          </ul>
        </div>

        {/* Form side */}
        <div className="p-6 sm:p-8 md:col-span-3">
          {sent ? (
            <div className="flex min-h-[320px] flex-col items-center justify-center text-center">
              <span className="flex h-14 w-14 items-center justify-center rounded-full bg-forest text-saffron">
                <Icon name="check" className="h-7 w-7" />
              </span>
              <h2 id="enquiry-popup-title" className="mt-5 font-display text-3xl text-forest-950">
                Thank you!
              </h2>
              <p className="mt-2 max-w-xs text-forest-950/65">
                Your enquiry is ready in WhatsApp. Just hit send and our team will get back to you shortly.
              </p>
              <button
                type="button"
                onClick={close}
                className="mt-6 rounded-full bg-forest px-6 py-3 text-sm font-semibold text-white transition hover:bg-forest-700"
              >
                Continue browsing
              </button>
            </div>
          ) : (
            <>
              <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-forest/60">Quick enquiry</p>
              <h2 id="enquiry-popup-title" className="mt-2 pr-10 font-display text-3xl leading-tight text-forest-950">
                Get prices &amp; the catalogue
              </h2>
              <p className="mt-2 text-sm text-forest-950/60">Leave your details and our team will reach out.</p>

              <form onSubmit={onSubmit} className="mt-5 grid gap-3">
                <label>
                  <span className="mb-1.5 block text-xs font-semibold text-forest-900">Full name *</span>
                  <input name="name" required autoComplete="name" placeholder="Your name" className={field} />
                </label>
                <label>
                  <span className="mb-1.5 block text-xs font-semibold text-forest-900">Phone *</span>
                  <input name="phone" required type="tel" autoComplete="tel" placeholder="+91" className={field} />
                </label>
                <label>
                  <span className="mb-1.5 block text-xs font-semibold text-forest-900">I&apos;m interested in</span>
                  <select name="interest" defaultValue="Kitchen chimneys" className={field}>
                    <option>Kitchen chimneys</option>
                    <option>Vacuum cleaners</option>
                    <option>OEM / private-label manufacturing</option>
                    <option>Dealership / distribution</option>
                    <option>Price list &amp; catalogue</option>
                  </select>
                </label>
                <label>
                  <span className="mb-1.5 block text-xs font-semibold text-forest-900">Message</span>
                  <textarea name="message" rows={2} placeholder="Model, size or quantity (optional)" className={`${field} resize-none`} />
                </label>
                <button
                  type="submit"
                  className="mt-1 inline-flex items-center justify-center gap-2 rounded-full bg-forest px-6 py-3.5 font-semibold text-white transition hover:bg-forest-700"
                >
                  <Icon name="whatsapp" className="h-5 w-5" /> Send enquiry
                </button>
                <p className="text-center text-[11px] text-forest-950/45">Submitting opens WhatsApp with your enquiry pre-filled.</p>
              </form>
            </>
          )}
        </div>
      </div>
    </dialog>
  );
}
