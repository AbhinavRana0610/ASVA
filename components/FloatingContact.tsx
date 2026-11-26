import Link from "next/link";
import type { ReactNode } from "react";
import { company } from "@/lib/data";

// Floating WhatsApp / Call / Email buttons, fixed bottom-right on every page (mounted in app/layout.tsx).
// z-40 keeps them under the header and the full-screen mobile menu (z-50).

const iconProps = { viewBox: "0 0 24 24", className: "h-6 w-6", "aria-hidden": true } as const;

const WhatsAppIcon = (
  <svg {...iconProps} fill="currentColor">
    <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91c0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38a9.9 9.9 0 0 0 4.74 1.21h.01c5.46 0 9.9-4.45 9.9-9.91 0-2.65-1.03-5.14-2.9-7.01A9.82 9.82 0 0 0 12.04 2Zm0 18.15h-.01a8.2 8.2 0 0 1-4.19-1.15l-.3-.18-3.12.82.83-3.04-.2-.31a8.22 8.22 0 0 1-1.26-4.38c0-4.54 3.7-8.24 8.25-8.24a8.2 8.2 0 0 1 5.83 2.42 8.18 8.18 0 0 1 2.41 5.83c0 4.54-3.7 8.23-8.24 8.23Zm4.52-6.16c-.25-.12-1.47-.72-1.69-.81-.23-.08-.39-.12-.56.13-.16.25-.64.81-.79.97-.14.17-.29.19-.54.06-.25-.12-1.05-.39-1.99-1.23-.74-.66-1.23-1.47-1.38-1.72-.14-.25-.02-.38.11-.51.11-.11.25-.29.37-.43.13-.15.17-.25.25-.42.08-.16.04-.31-.02-.43-.06-.12-.56-1.34-.76-1.84-.2-.48-.41-.42-.56-.43h-.48a.92.92 0 0 0-.67.31c-.23.25-.87.85-.87 2.07 0 1.22.89 2.4 1.01 2.56.12.17 1.75 2.67 4.24 3.74.59.26 1.05.41 1.41.52.6.19 1.14.16 1.56.1.48-.07 1.47-.6 1.67-1.18.21-.58.21-1.07.15-1.18-.06-.1-.22-.16-.47-.29Z" />
  </svg>
);

const PhoneIcon = (
  <svg {...iconProps} fill="none" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round">
    <path d="M5 3h3l2 5-2.5 1.5a11 11 0 0 0 5 5L14 12l5 2v3a2 2 0 0 1-2 2A15 15 0 0 1 3 5a2 2 0 0 1 2-2Z" />
  </svg>
);

const MailIcon = (
  <svg {...iconProps} fill="none" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round">
    <rect x="3" y="5" width="18" height="14" rx="2.5" />
    <path d="m4 7 8 6 8-6" />
  </svg>
);

type Item = { label: string; href: string; icon: ReactNode; cls: string; external?: boolean };

export default function FloatingContact() {
  const items: Item[] = [
    {
      label: "Chat on WhatsApp",
      href: `https://wa.me/${company.whatsapp}`,
      icon: WhatsAppIcon,
      cls: "bg-[#25D366] text-white hover:bg-[#1ebe5b]",
      external: true,
    },
    {
      label: `Call ${company.phones[0]}`,
      href: `tel:${company.phones[0].replace(/\s/g, "")}`,
      icon: PhoneIcon,
      cls: "bg-saffron text-forest-950 hover:bg-saffron-200",
    },
    {
      label: company.email ? `Email ${company.email}` : "Email us",
      href: company.email ? `mailto:${company.email}` : "/contact",
      icon: MailIcon,
      cls: "bg-forest text-white hover:bg-forest-700",
    },
  ];

  const base =
    "peer flex h-12 w-12 items-center justify-center rounded-full shadow-lg shadow-forest-950/25 ring-1 ring-white/20 transition duration-300 hover:-translate-y-0.5 hover:shadow-xl focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-saffron sm:h-14 sm:w-14";

  return (
    <nav aria-label="Quick contact" className="fixed right-4 bottom-4 z-40 flex flex-col gap-3 sm:right-6 sm:bottom-6">
      {items.map((it) => (
        <div key={it.label} className="relative flex items-center justify-end">
          {it.href.startsWith("/") ? (
            <Link href={it.href} aria-label={it.label} className={`${base} ${it.cls}`}>
              {it.icon}
            </Link>
          ) : (
            <a
              href={it.href}
              aria-label={it.label}
              className={`${base} ${it.cls}`}
              {...(it.external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
            >
              {it.icon}
            </a>
          )}
          {/* Hover label (pointer devices only). */}
          <span className="pointer-events-none absolute right-full mr-3 hidden translate-x-1 whitespace-nowrap rounded-full bg-forest-950 px-3 py-1.5 text-xs font-semibold text-white opacity-0 shadow-lg transition duration-200 peer-hover:translate-x-0 peer-hover:opacity-100 peer-focus-visible:translate-x-0 peer-focus-visible:opacity-100 sm:block">
            {it.label}
          </span>
        </div>
      ))}
    </nav>
  );
}
