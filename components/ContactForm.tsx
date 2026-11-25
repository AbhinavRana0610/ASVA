"use client";

import { useSearchParams } from "next/navigation";
import { useState, type FormEvent } from "react";
import { company, products } from "@/lib/data";
import { Icon } from "./ui";

// Front-end only: on submit we compose the enquiry and open WhatsApp with it pre-filled.
export default function ContactForm() {
  const params = useSearchParams();
  const preset = params.get("product") ?? "";
  const [sent, setSent] = useState(false);

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const f = new FormData(e.currentTarget);
    const lines = [
      `Hello ASVA India, I have an enquiry.`,
      `Name: ${f.get("name")}`,
      f.get("company") ? `Company: ${f.get("company")}` : "",
      `Phone: ${f.get("phone")}`,
      f.get("email") ? `Email: ${f.get("email")}` : "",
      `Interested in: ${f.get("interest")}`,
      f.get("product") ? `Model: ${f.get("product")}` : "",
      `Message: ${f.get("message")}`,
    ].filter(Boolean);
    window.open(`https://wa.me/${company.whatsapp}?text=${encodeURIComponent(lines.join("\n"))}`, "_blank", "noopener");
    setSent(true);
    e.currentTarget.reset();
  };

  const field =
    "w-full rounded-2xl border-0 bg-mint px-5 py-4 text-forest-950 outline-none ring-1 ring-transparent transition placeholder:text-forest-950/35 focus:bg-white focus:ring-forest/40";

  if (sent)
    return (
      <div className="flex min-h-[480px] flex-col items-center justify-center rounded-[2rem] bg-mint p-10 text-center">
        <span className="flex h-16 w-16 items-center justify-center rounded-full bg-forest text-saffron">
          <Icon name="check" className="h-8 w-8" />
        </span>
        <h3 className="mt-6 font-display text-3xl text-forest-950">Thank you!</h3>
        <p className="mt-3 max-w-sm text-forest-950/65">
          Your enquiry has been prepared in WhatsApp. Just hit send and our team will get back to you shortly.
        </p>
        <button onClick={() => setSent(false)} className="mt-8 text-sm font-semibold text-forest underline underline-offset-4">
          Send another enquiry
        </button>
      </div>
    );

  return (
    <form onSubmit={onSubmit} className="grid gap-4 sm:grid-cols-2">
      <label className="sm:col-span-1">
        <span className="mb-2 block text-sm font-semibold text-forest-900">Full name *</span>
        <input name="name" required className={field} placeholder="Your name" autoComplete="name" />
      </label>
      <label>
        <span className="mb-2 block text-sm font-semibold text-forest-900">Company</span>
        <input name="company" className={field} placeholder="Company / brand" autoComplete="organization" />
      </label>
      <label>
        <span className="mb-2 block text-sm font-semibold text-forest-900">Phone *</span>
        <input name="phone" required type="tel" className={field} placeholder="+91" autoComplete="tel" />
      </label>
      <label>
        <span className="mb-2 block text-sm font-semibold text-forest-900">Email</span>
        <input name="email" type="email" className={field} placeholder="you@company.com" autoComplete="email" />
      </label>
      <label>
        <span className="mb-2 block text-sm font-semibold text-forest-900">I&apos;m interested in</span>
        <select name="interest" className={field} defaultValue="Product enquiry">
          <option>Product enquiry</option>
          <option>OEM / private-label manufacturing</option>
          <option>Dealership / distribution</option>
          <option>Price list & catalogue</option>
          <option>After-sales support</option>
        </select>
      </label>
      <label>
        <span className="mb-2 block text-sm font-semibold text-forest-900">Model (optional)</span>
        <input name="product" list="models" defaultValue={preset} className={field} placeholder="e.g. BLDC 4 Slim-25" />
        <datalist id="models">
          {products.map((p) => (
            <option key={p.slug} value={p.name} />
          ))}
        </datalist>
      </label>
      <label className="sm:col-span-2">
        <span className="mb-2 block text-sm font-semibold text-forest-900">Message *</span>
        <textarea name="message" required rows={5} className={`${field} resize-none`} placeholder="Tell us about your requirement — quantities, sizes, timelines…" />
      </label>
      <div className="flex flex-col gap-4 sm:col-span-2 sm:flex-row sm:items-center sm:justify-between">
        <p className="text-xs text-forest-950/50">Submitting opens WhatsApp with your enquiry pre-filled.</p>
        <button
          type="submit"
          className="inline-flex items-center justify-center gap-2 rounded-full bg-forest px-8 py-4 font-semibold text-white transition hover:bg-forest-700"
        >
          <Icon name="whatsapp" className="h-5 w-5" /> Send enquiry
        </button>
      </div>
    </form>
  );
}
