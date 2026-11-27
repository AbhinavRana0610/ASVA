import Link from "next/link";
import type { ReactNode } from "react";

export function Eyebrow({ children, light = false }: { children: ReactNode; light?: boolean }) {
  return (
    <span className={`inline-block text-[11px] font-bold uppercase tracking-[0.22em] ${light ? "text-saffron" : "text-forest"}`}>
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
        className={`${eyebrow ? "mt-4" : ""} font-display leading-[1.1] tracking-tight text-balance ${
          size === "xs" ? "text-[1.9rem] sm:text-[2.4rem]" : size === "sm" ? "text-[2.1rem] sm:text-[2.8rem]" : "text-[2.4rem] sm:text-[3.4rem]"
        } ${light ? "text-white [&_em]:text-white" : "text-forest-950 [&_em]:text-forest"}`}
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
  variant?: "primary" | "dark" | "ghost" | "outline" | "tan";
  className?: string;
  download?: boolean;
  external?: boolean;
}) {
  const styles = {
    primary: "bg-forest text-white hover:bg-forest-500",
    tan: "bg-saffron-600 text-white hover:bg-[#8a5008]",
    dark: "bg-forest-950 text-white hover:bg-forest-700",
    ghost: "bg-white/10 text-white ring-1 ring-white/30 hover:bg-white/20 backdrop-blur",
    outline: "text-forest-950 ring-1 ring-forest-950/30 hover:bg-forest-950 hover:text-white",
  }[variant];
  const cls = `group inline-flex min-w-[200px] items-center justify-between gap-8 px-5 py-3.5 text-[13px] font-bold uppercase tracking-[0.08em] transition-colors duration-300 ${styles} ${className}`;
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
  aside,
}: {
  eyebrow: string;
  title: ReactNode;
  text?: ReactNode;
  children?: ReactNode;
  /** Optional visual shown to the right of the text on large screens (below it on phones). */
  aside?: ReactNode;
}) {
  const copy = (
    <>
      <Eyebrow light>{eyebrow}</Eyebrow>
      <h1 className="mt-6 max-w-4xl font-display text-5xl leading-[1.05] tracking-tight text-balance sm:text-7xl [&_em]:text-saffron">{title}</h1>
      {text && <p className="mt-6 max-w-2xl text-lg leading-relaxed text-white/70">{text}</p>}
      {children}
    </>
  );
  return (
    <section className="relative overflow-hidden bg-forest-950 pt-40 pb-20 text-white sm:pt-48 sm:pb-28">
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6">
        {aside ? (
          <div className="grid items-center gap-14 lg:grid-cols-12 lg:gap-10">
            <div className="lg:col-span-7">{copy}</div>
            <div className="lg:col-span-5">{aside}</div>
          </div>
        ) : (
          copy
        )}
      </div>
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
