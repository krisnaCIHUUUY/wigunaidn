"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { navLinks } from "@/config/site";
import { BuyNowButton } from "@/components/BuyNowButton";

export function Header() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);

  function isActive(href: string) {
    const path = href.split("#")[0] || "/";
    if (path === "/") return pathname === "/";
    return pathname.startsWith(path);
  }

  return (
    <header className="glass sticky top-0 z-40 border-x-0 border-t-0 bg-ink/70">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between gap-4 px-4">
        <Link
          href="/"
          className="font-display text-2xl font-semibold tracking-[0.25em] text-cream"
          aria-label="Wiguna — kembali ke Home"
        >
          WIGUNA
        </Link>

        {/* Navigasi desktop */}
        <nav aria-label="Navigasi utama" className="hidden md:block">
          <ul className="flex items-center gap-7">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  aria-current={isActive(link.href) ? "page" : undefined}
                  className={`text-[13px] font-medium uppercase tracking-[0.15em] transition hover:text-champagne ${
                    isActive(link.href) && link.label !== "Best Seller"
                      ? "text-gold"
                      : "text-stone-300"
                  }`}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className="flex items-center gap-3">
          <BuyNowButton />
          {/* Hamburger — tampil di bawah 768px (FR-1.2) */}
          <button
            type="button"
            onClick={() => setMenuOpen((v) => !v)}
            aria-expanded={menuOpen}
            aria-controls="mobile-nav"
            aria-label={menuOpen ? "Tutup menu" : "Buka menu"}
            className="flex h-11 w-11 cursor-pointer items-center justify-center rounded-lg text-cream transition hover:bg-white/10 md:hidden"
          >
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              aria-hidden="true"
            >
              {menuOpen ? (
                <>
                  <line x1="5" y1="5" x2="19" y2="19" />
                  <line x1="19" y1="5" x2="5" y2="19" />
                </>
              ) : (
                <>
                  <line x1="4" y1="7" x2="20" y2="7" />
                  <line x1="4" y1="12" x2="20" y2="12" />
                  <line x1="4" y1="17" x2="20" y2="17" />
                </>
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Navigasi mobile */}
      {menuOpen && (
        <nav
          id="mobile-nav"
          aria-label="Navigasi utama (mobile)"
          className="border-t border-white/10 bg-ink/95 md:hidden"
        >
          <ul className="px-4 py-2">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                  aria-current={isActive(link.href) ? "page" : undefined}
                  className={`block py-3.5 text-sm font-medium uppercase tracking-[0.15em] ${
                    isActive(link.href) && link.label !== "Best Seller"
                      ? "text-gold"
                      : "text-stone-200"
                  }`}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      )}
    </header>
  );
}
