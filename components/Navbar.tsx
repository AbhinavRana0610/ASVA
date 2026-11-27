"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { chimneySeries, company, nav, seriesHref, upcomingCollection, upcomingProducts, vacuums } from "@/lib/data";

// contain: product shots on a white background, shown whole instead of cropped.
type MenuItem = { label: string; href: string; img?: string; contain?: boolean };

// Hover menu for "Our Products": category -> its series (chimneys), models (vacuums) or upcoming launches.
const productMenu: { label: string; href: string; items: MenuItem[]; soon?: boolean }[] = [
  {
    label: "Kitchen Chimneys",
    href: "/products/kitchen-chimneys",
    items: chimneySeries.map((s) => ({ label: s.name, href: seriesHref(s.id), img: s.cover, contain: true })),
  },
  {
    label: "Vacuum Cleaners",
    href: "/products/vacuum-cleaners",
    items: vacuums.map((v) => ({ label: v.name, href: `/products/${v.slug}`, img: v.img, contain: true })),
  },
  {
    // No product pages yet, so these point to the "upcoming collection" section on the homepage.
    label: "Upcoming Products",
    href: "/#upcoming",
    soon: true,
    items: [...upcomingCollection, ...upcomingProducts].map((u) => ({ label: u.name, href: "/#upcoming", img: u.img })),
  },
];

const blur = (e: React.MouseEvent<HTMLElement>) => e.currentTarget.blur();

export default function Navbar() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  // Menu is tied to the path it was opened on, so navigating closes it automatically.
  const [openOn, setOpenOn] = useState<string | null>(null);
  const open = openOn === pathname;
  const [mobileProductsOpen, setMobileProductsOpen] = useState(false);
  const closeMenu = () => setOpenOn(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled ? "py-0 sm:py-2" : "py-0 sm:py-4"
      }`}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <nav
          className={`flex items-center justify-between px-4 transition-all duration-500 sm:px-6 ${
            scrolled ? "bg-forest-950/95 py-2.5 shadow-2xl shadow-black/30" : "bg-forest-950/80 py-3.5 backdrop-blur-md"
          }`}
        >
          <Link href="/" className="flex items-center gap-3" aria-label={`${company.name} home`}>
            <Image src="/images/brand/logo-white.avif" alt="ASVA" width={464} height={136} className="h-7 w-auto sm:h-8" priority />
          </Link>

          <ul className="hidden items-center gap-1 lg:flex">
            {nav.map((item) => {
              const hasMenu = item.href === "/products";
              return (
                <li key={item.href} className={hasMenu ? "group/products relative" : undefined}>
                  <Link
                    href={item.href}
                    onClick={blur}
                    aria-haspopup={hasMenu || undefined}
                    className={`relative inline-flex items-center gap-1.5 px-3 py-2 text-[13px] uppercase tracking-[0.04em] transition-colors xl:px-4 ${
                      isActive(item.href) ? "text-white underline decoration-saffron decoration-2 underline-offset-[10px]" : "text-white/80 hover:text-white"
                    }`}
                  >
                    {item.label}
                    {hasMenu && (
                      <svg viewBox="0 0 12 12" className="h-2.5 w-2.5 transition-transform group-hover/products:rotate-180 group-focus-within/products:rotate-180" aria-hidden>
                        <path d="M2 4l4 4 4-4" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    )}
                  </Link>

                  {hasMenu && (
                    // pt-3 bridges the gap so the pointer can travel to the panel without closing it.
                    <div className="invisible absolute left-0 top-full pt-3 opacity-0 transition-all duration-200 group-hover/products:visible group-hover/products:opacity-100 group-focus-within/products:visible group-focus-within/products:opacity-100">
                      <ul className="w-60 rounded-2xl border border-white/10 bg-forest-950/95 p-2 shadow-2xl shadow-forest-950/40 backdrop-blur-xl">
                        {productMenu.map((cat) => (
                          <li key={cat.label} className="group/cat relative">
                            <Link
                              href={cat.href}
                              onClick={blur}
                              aria-haspopup
                              className="flex items-center justify-between rounded-xl px-4 py-3 text-sm font-medium text-white/85 transition-colors hover:bg-white/10 hover:text-white group-hover/cat:bg-white/10 group-hover/cat:text-saffron"
                            >
                              <span className="flex items-center gap-2">
                                {cat.label}
                                {cat.soon && (
                                  <span className="bg-forest px-1.5 py-0.5 text-[9px] font-bold uppercase tracking-wider text-white">Soon</span>
                                )}
                              </span>
                              <svg viewBox="0 0 12 12" className="h-2.5 w-2.5" aria-hidden>
                                <path d="M4 2l4 4-4 4" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
                              </svg>
                            </Link>

                            <div className="invisible absolute left-full top-0 pl-2 opacity-0 transition-all duration-200 group-hover/cat:visible group-hover/cat:opacity-100 group-focus-within/cat:visible group-focus-within/cat:opacity-100">
                              <ul className={`w-72 rounded-2xl border border-white/10 bg-forest-950/95 p-2 shadow-2xl shadow-forest-950/40 backdrop-blur-xl`}>
                                {cat.items.map((sub) => (
                                  <li key={sub.label}>
                                    <Link
                                      href={sub.href}
                                      onClick={blur}
                                      className={`flex items-center gap-3 rounded-xl text-sm text-white/75 transition-colors hover:bg-white/10 hover:text-white ${sub.img ? "px-2 py-1.5" : "px-4 py-2.5"}`}
                                    >
                                      {sub.img && (
                                        <span className="relative h-9 w-9 shrink-0 overflow-hidden rounded-lg bg-white">
                                          <Image src={sub.img} alt="" fill sizes="36px" className={sub.contain ? "object-contain p-0.5" : "object-cover"} />
                                        </span>
                                      )}
                                      {sub.label}
                                    </Link>
                                  </li>
                                ))}
                              </ul>
                            </div>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </li>
              );
            })}
          </ul>

          <div className="flex items-center gap-2">
            <Link
              href="/contact"
              className="group hidden items-center gap-3 text-[13px] font-bold uppercase tracking-[0.06em] text-white sm:inline-flex"
            >
              Get in touch
              <svg viewBox="0 0 20 20" fill="none" className="h-4 w-4 transition-transform group-hover:translate-x-1" aria-hidden>
                <path d="M4 10h12m0 0-5-5m5 5-5 5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </Link>
            <button
              type="button"
              onClick={() => setOpenOn(open ? null : pathname)}
              className="relative flex h-10 w-10 items-center justify-center bg-white/10 text-white lg:hidden"
              aria-label={open ? "Close menu" : "Open menu"}
              aria-expanded={open}
            >
              <span className={`absolute h-0.5 w-5 bg-current transition ${open ? "rotate-45" : "-translate-y-1.5"}`} />
              <span className={`absolute h-0.5 w-5 bg-current transition ${open ? "opacity-0" : ""}`} />
              <span className={`absolute h-0.5 w-5 bg-current transition ${open ? "-rotate-45" : "translate-y-1.5"}`} />
            </button>
          </div>
        </nav>
      </div>

      {/* Mobile menu */}
      <div
        className={`fixed inset-0 top-0 -z-10 bg-forest-950/97 backdrop-blur-xl transition-all duration-500 lg:hidden ${
          open ? "visible opacity-100" : "invisible opacity-0"
        }`}
      >
        {/* Scrolls when the expanded product list is taller than the screen. */}
        <div className="h-full overflow-y-auto overscroll-contain">
          <ul className="flex min-h-full flex-col justify-center gap-2 px-6 pt-28 pb-12 sm:px-8">
            {nav.map((item, i) => {
              const hasMenu = item.href === "/products";
              return (
                <li
                  key={item.href}
                  style={{ transitionDelay: open ? `${100 + i * 60}ms` : "0ms" }}
                  className={`transition-all duration-500 ${open ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"}`}
                >
                  <div className="flex items-center justify-between gap-4">
                    <Link
                      href={item.href}
                      onClick={closeMenu}
                      className={`font-display text-4xl ${isActive(item.href) ? "accent text-saffron" : "text-white"}`}
                    >
                      {item.label}
                    </Link>
                    {hasMenu && (
                      <button
                        type="button"
                        onClick={() => setMobileProductsOpen((v) => !v)}
                        aria-expanded={mobileProductsOpen}
                        aria-controls="mobile-products"
                        aria-label={mobileProductsOpen ? "Hide product categories" : "Show product categories"}
                        className="flex h-11 w-11 shrink-0 items-center justify-center bg-white/10 text-white"
                      >
                        <svg viewBox="0 0 12 12" className={`h-3 w-3 transition-transform duration-300 ${mobileProductsOpen ? "rotate-180" : ""}`} aria-hidden>
                          <path d="M2 4l4 4 4-4" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                      </button>
                    )}
                  </div>

                  {hasMenu && mobileProductsOpen && (
                    <div id="mobile-products" className="mt-4 mb-2 space-y-5 border-l border-white/15 pl-4">
                      {productMenu.map((cat) => (
                        <div key={cat.label}>
                          <Link
                            href={cat.href}
                            onClick={closeMenu}
                            className="inline-flex items-center gap-2 text-lg font-semibold text-white"
                          >
                            {cat.label}
                            {cat.soon && (
                              <span className="bg-forest px-1.5 py-0.5 text-[9px] font-bold uppercase tracking-wider text-white">Soon</span>
                            )}
                          </Link>
                          <ul className="mt-2 flex flex-wrap gap-2">
                            {cat.items.map((sub) => (
                              <li key={sub.label}>
                                <Link
                                  href={sub.href}
                                  onClick={closeMenu}
                                  className="inline-flex min-h-9 items-center bg-white/10 px-3.5 py-1.5 text-sm text-white/80 transition-colors active:bg-forest active:text-white"
                                >
                                  {sub.label}
                                </Link>
                              </li>
                            ))}
                          </ul>
                        </div>
                      ))}
                    </div>
                  )}
                </li>
              );
            })}
            <li className="mt-8 text-sm text-white/60">
              <a href={`tel:${company.phones[0].replace(/\s/g, "")}`}>{company.phones[0]}</a>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
}
