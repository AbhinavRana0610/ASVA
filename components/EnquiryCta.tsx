import { company } from "@/lib/data";
import { Button } from "./ui";

// Closing call-to-action shared by the category and series pages.
export default function EnquiryCta({ title, text, product }: { title: string; text: string; product?: string }) {
  return (
    <section className="px-4 pb-24 sm:px-6">
      <div className="relative mx-auto max-w-7xl overflow-hidden rounded-sm bg-forest-950 px-6 py-16 text-white sm:px-14 sm:py-20">
        <div className="grid-lines absolute inset-0 [mask-image:radial-gradient(ellipse_at_right,black,transparent_70%)]" />
        <div className="relative flex flex-col gap-10 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-2xl">
            <h2 className="font-display text-4xl leading-[1.05] tracking-tight text-balance sm:text-5xl">{title}</h2>
            <p className="mt-5 text-lg leading-relaxed text-white/70">{text}</p>
          </div>
          <div className="flex flex-wrap gap-3">
            <Button href={product ? `/contact?product=${encodeURIComponent(product)}` : "/contact"}>Get a quote</Button>
            <Button href={`https://wa.me/${company.whatsapp}`} variant="ghost" external>
              WhatsApp us
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
