import Link from "next/link";
import type { ReactNode } from "react";

export function Eyebrow({ children, light = false }: { children: ReactNode; light?: boolean }) {
  return (
    <span
      className={`inline-flex items-center gap-3 text-xs font-bold uppercase tracking-[0.3em] ${
        light ? "text-saffron" : "text-forest"
      }`}
    >
      <span className={`h-px w-8 ${light ? "bg-saffron" : "bg-saffron"}`} />
      {children}
    </span>
  );
}

export function Heading({
  eyebrow,
  title,
  text,
  light = false,
  center = false,
  size = "md",
}: {
  eyebrow?: string;
  title: ReactNode;
  text?: ReactNode;
  light?: boolean;
  center?: boolean;
  size?: "xs" | "sm" | "md";
}) {
  return (
    <div className={`max-w-3xl ${center ? "mx-auto text-center" : ""}`}>
      {eyebrow && <Eyebrow light={light}>{eyebrow}</Eyebrow>}
      <h2
        className={`mt-4 font-display leading-[1.05] tracking-tight text-balance ${
          size === "xs" ? "text-[1.8rem] sm:text-[2.4rem]" : size === "sm" ? "text-[2rem] sm:text-[2.7rem]" : "text-4xl sm:text-5xl"
        } ${
          light ? "text-white" : "text-forest-950"
        }`}
      >
        {title}
      </h2>
      {text && (
        <p className={`mt-5 leading-relaxed text-pretty ${size === "md" ? "text-lg" : "text-base"} ${light ? "text-white/70" : "text-forest-950/65"}`}>
          {text}
        </p>
      )}
    </div>
  );
}

export function Button({
  href,
  children,
  variant = "primary",
  className = "",
  download,
  external,
}: {
  href: string;
  children: ReactNode;
  variant?: "primary" | "dark" | "ghost" | "outline";
  className?: string;
  download?: boolean;
  external?: boolean;
}) {
  const styles = {
    primary: "bg-saffron text-forest-950 hover:bg-saffron-200",
    dark: "bg-forest text-white hover:bg-forest-700",
    ghost: "bg-white/10 text-white ring-1 ring-white/25 hover:bg-white/20 backdrop-blur",
    outline: "text-forest ring-1 ring-forest/30 hover:bg-forest hover:text-white",
  }[variant];
  const cls = `group inline-flex items-center justify-center gap-2 rounded-full px-6 py-3.5 text-sm font-semibold transition-all duration-300 ${styles} ${className}`;
  const inner = (
    <>
      {children}
      <Arrow className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
    </>
  );
  if (download || external)
    return (
      <a href={href} className={cls} {...(download ? { download: true } : {})} {...(external ? { target: "_blank", rel: "noreferrer" } : {})}>
        {inner}
      </a>
    );
  return (
    <Link href={href} className={cls}>
      {inner}
    </Link>
  );
}

export function Arrow({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 20 20" fill="none" className={className} aria-hidden>
      <path d="M4 10h12m0 0-5-5m5 5-5 5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function PageHero({
  eyebrow,
  title,
  text,
  children,
}: {
  eyebrow: string;
  title: ReactNode;
  text?: ReactNode;
  children?: ReactNode;
}) {
  return (
    <section className="relative overflow-hidden bg-forest-950 pt-40 pb-24 text-white sm:pt-48 sm:pb-32">
      <div className="grid-lines absolute inset-0 [mask-image:radial-gradient(ellipse_at_top,black,transparent_75%)]" />
      <div className="absolute -top-[160px] -right-[160px] h-[320px] w-[320px] rounded-full border-[52px] border-saffron [clip-path:inset(50%_50%_0_0)] sm:-top-[240px] sm:-right-[240px] sm:h-[480px] sm:w-[480px] sm:border-[76px]" />
      <div className="absolute -bottom-32 -left-32 h-80 w-80 rounded-full bg-forest/40 blur-3xl" />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6">
        <Eyebrow light>{eyebrow}</Eyebrow>
        <h1 className="mt-6 max-w-4xl font-display text-5xl leading-[1] tracking-tight text-balance sm:text-7xl">{title}</h1>
        {text && <p className="mt-6 max-w-2xl text-lg leading-relaxed text-white/70">{text}</p>}
        {children}
      </div>
      <div className="sawtooth absolute inset-x-0 bottom-0 h-3.5" />
    </section>
  );
}

export function Icon({ name, className = "h-6 w-6" }: { name: string; className?: string }) {
  const p = { fill: "none", stroke: "currentColor", strokeWidth: 1.6, strokeLinecap: "round" as const, strokeLinejoin: "round" as const };
  const paths: Record<string, ReactNode> = {
    wind: <path {...p} d="M3 8h10a3 3 0 1 0-3-3M3 12h15a3 3 0 1 1-3 3M3 16h7" />,
    shape: <path {...p} d="M12 3 3 20h18L12 3Zm0 6v6" />,
    bolt: <path {...p} d="M13 2 4 14h7l-1 8 9-12h-7l1-8Z" />,
    shield: <path {...p} d="M12 3 4 6v6c0 5 3.5 8 8 9 4.5-1 8-4 8-9V6l-8-3Zm-3 9 2 2 4-4" />,
    wave: <path {...p} d="M2 12h2m3-4v8m3-11v14m3-10v6m3-9v12m3-7v2m2-1h1" />,
    support: <path {...p} d="M4 13v-1a8 8 0 1 1 16 0v1M4 13a2 2 0 0 0 2 2h1v-5H6a2 2 0 0 0-2 2Zm16 0a2 2 0 0 1-2 2h-1v-5h1a2 2 0 0 1 2 2Zm-3 2c0 3-2 5-5 5" />,
    phone: <path {...p} d="M5 3h3l2 5-2.5 1.5a11 11 0 0 0 5 5L14 12l5 2v3a2 2 0 0 1-2 2A15 15 0 0 1 3 5a2 2 0 0 1 2-2Z" />,
    pin: <path {...p} d="M12 21s-7-6.2-7-12a7 7 0 1 1 14 0c0 5.8-7 12-7 12Zm0-9a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z" />,
    globe: <path {...p} d="M12 21a9 9 0 1 0 0-18 9 9 0 0 0 0 18Zm-9-9h18M12 3c2.5 2.5 3.5 5.5 3.5 9s-1 6.5-3.5 9c-2.5-2.5-3.5-5.5-3.5-9s1-6.5 3.5-9Z" />,
    download: <path {...p} d="M12 3v12m0 0-5-5m5 5 5-5M4 17v2a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-2" />,
    factory: <path {...p} d="M3 21V10l5 3V10l5 3V6l8 4v11H3Zm4-4h2m4 0h2" />,
    check: <path {...p} d="m5 12 4 4 10-10" />,
    whatsapp: <path {...p} d="M4 20l1.3-4A8 8 0 1 1 8 18.7L4 20Zm5-11c0 3.5 2.5 6 6 6l1-1.5-2-1-1 1c-1 0-2.5-1.5-2.5-2.5l1-1-1-2L9 9Z" />,
  };
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden>
      {paths[name]}
    </svg>
  );
}
