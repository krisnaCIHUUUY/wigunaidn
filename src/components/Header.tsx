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
    <header className="sticky top-0 z-40 border-b border-neutral-200 bg-white/90 backdrop-blur">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between gap-4 px-4">
        <Link
          href="/"
          className="text-xl font-bold tracking-tight text-neutral-900"
          aria-label="Wiguna — kembali ke Home"
        >
          WIGUNA
        </Link>

        {/* Navigasi desktop */}
        <nav aria-label="Navigasi utama" className="hidden md:block">
          <ul className="flex items-center gap-6">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  aria-current={isActive(link.href) ? "page" : undefined}
                  className={`text-sm font-medium transition hover:text-brand ${
                    isActive(link.href) && link.label !== "Best Seller"
                      ? "text-brand"
                      : "text-neutral-700"
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
            className="flex h-11 w-11 items-center justify-center rounded-lg text-neutral-800 transition hover:bg-neutral-100 md:hidden"
          >
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
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
          className="border-t border-neutral-200 bg-white md:hidden"
        >
          <ul className="px-4 py-2">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                  aria-current={isActive(link.href) ? "page" : undefined}
                  className={`block py-3 text-base font-medium ${
                    isActive(link.href) && link.label !== "Best Seller"
                      ? "text-brand"
                      : "text-neutral-800"
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
