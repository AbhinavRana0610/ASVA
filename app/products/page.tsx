import type { Metadata } from "next";
import { Suspense } from "react";
import ProductBrowser from "@/components/ProductBrowser";
import { PageHero } from "@/components/ui";
import { chimneys, vacuums } from "@/lib/data";

export const metadata: Metadata = {
  title: "Our Products",
  description: "Explore ASVA kitchen chimneys — Curve, T-Type, Pyramid, Ductless and BLDC series — plus wet & dry vacuum cleaners.",
};

export default function ProductsPage() {
  return (
    <>
      <PageHero
        eyebrow="Our Products"
        title={
          <>
            Kitchen chimneys, <span className="italic text-saffron">perfected</span> in every profile.
          </>
        }
        text="All models: 60, 75 and 90 cm (ductless: 60 cm), black powder-coated 0.5 mm GPSP, 230 V, motion-sensor or push-button control, LED lighting."
      >
        <div className="mt-10 flex flex-wrap gap-8 text-white/80">
          <p>
            <span className="font-display text-4xl text-white">{chimneys.length}</span> chimney models
          </p>
          <p>
            <span className="font-display text-4xl text-white">5</span> chimney series
          </p>
          <p>
            <span className="font-display text-4xl text-white">{vacuums.length}</span> vacuum ranges
          </p>
        </div>
      </PageHero>

      <section className="mx-auto max-w-7xl px-4 py-12 sm:px-6 sm:py-16">
        <Suspense fallback={<div className="h-96" />}>
          <ProductBrowser />
        </Suspense>
      </section>
    </>
  );
}
