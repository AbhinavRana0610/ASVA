import Image from "next/image";
import Link from "next/link";
import { getSeries, type Product } from "@/lib/data";
import { Arrow } from "./ui";

// size="sm" renders the card ~10% smaller (used in the homepage Featured section).
export default function ProductCard({ product, size = "md" }: { product: Product; size?: "sm" | "md" }) {
  const s = getSeries(product.series);
  const sm = size === "sm";
  const badge = product.kind === "chimney" ? product.badge : undefined;

  return (
    <Link
      href={`/products/${product.slug}`}
      className="group relative flex h-full flex-col overflow-hidden rounded-3xl bg-white ring-1 ring-forest/10 transition-all duration-500 hover:-translate-y-1.5 hover:shadow-2xl hover:shadow-forest/15 hover:ring-forest/25"
    >
      <div className="relative aspect-[4/3] overflow-hidden bg-gradient-to-b from-mint to-white">
        <Image
          src={product.img}
          alt={product.name}
          fill
          sizes="(min-width: 1280px) 25vw, (min-width: 768px) 33vw, 100vw"
          className={`object-contain mix-blend-multiply ${sm ? "p-4" : "p-5"} transition-transform duration-700 group-hover:scale-105`}
        />
        <span className="absolute top-4 left-4 rounded-full bg-forest px-3 py-1 text-[10px] font-bold uppercase tracking-[0.2em] text-white">
          {s.code}
        </span>
        {badge && (
          <span className="absolute top-4 right-4 rounded-full bg-saffron px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-forest-950">
            {badge}
          </span>
        )}
      </div>
      <div className={`flex flex-1 flex-col ${sm ? "p-5" : "p-6"}`}>
        <p className={`font-semibold tracking-wider text-forest/60 ${sm ? "text-[11px]" : "text-xs"}`}>{product.code}</p>
        <h3 className={`mt-1 font-display text-forest-950 ${sm ? "mb-4 text-[1.35rem] leading-tight" : "mb-5 text-2xl"}`}>{product.name}</h3>
        {product.kind === "chimney" ? (
          <dl className={`mt-auto grid grid-cols-3 gap-2 border-t border-forest/10 text-center ${sm ? "pt-4" : "pt-5"}`}>
            <Stat k="Suction" v={`${product.specs.suction.toLocaleString("en-IN")}`} u="m³/h" />
            <Stat k="Motor" v={product.specs.motor.split(" ")[0]} u="W" />
            <Stat k="Noise" v={product.specs.noise.replace(" dB", "")} u="dB" />
          </dl>
        ) : (
          <p className="mt-auto border-t border-forest/10 pt-4 text-sm text-forest-950/65">
            Tank capacities: <strong className="text-forest">{product.capacities}</strong>
          </p>
        )}
        <span className={`inline-flex items-center gap-2 font-semibold text-forest ${sm ? "mt-5 text-[0.8rem]" : "mt-6 text-sm"}`}>
          View details
          <Arrow className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1.5" />
        </span>
      </div>
    </Link>
  );
}

function Stat({ k, v, u }: { k: string; v: string; u: string }) {
  return (
    <div>
      <dt className="text-[10px] font-semibold uppercase tracking-wider text-forest-950/45">{k}</dt>
      <dd className="mt-1 font-display text-lg leading-none text-forest-950">
        {v}
        <span className="ml-0.5 font-sans text-[10px] text-forest-950/50">{u}</span>
      </dd>
    </div>
  );
}
