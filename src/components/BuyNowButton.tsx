"use client";

import { useEffect, useRef, useState } from "react";
import { siteConfig } from "@/config/site";
import { trackBuyNowClick } from "@/lib/analytics";

/**
 * CTA global "Beli Sekarang" (FR-1.1).
 * Karena kedua channel tersedia, klik menampilkan pemilih channel ringan
 * (Shopee / TikTok Shop) lalu membuka storefront di tab baru.
 */
export function BuyNowButton() {
  const [open, setOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!open) return;
    function onOutsideClick(e: MouseEvent) {
      if (!containerRef.current?.contains(e.target as Node)) setOpen(false);
    }
    function onEscape(e: KeyboardEvent) {
      if (e.key === "Escape") setOpen(false);
    }
    document.addEventListener("mousedown", onOutsideClick);
    document.addEventListener("keydown", onEscape);
    return () => {
      document.removeEventListener("mousedown", onOutsideClick);
      document.removeEventListener("keydown", onEscape);
    };
  }, [open]);

  const channels = [
    { key: "shopee", ...siteConfig.marketplace.shopee },
    { key: "tiktok_shop", ...siteConfig.marketplace.tiktokShop },
  ];

  return (
    <div ref={containerRef} className="relative">
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-expanded={open}
        aria-haspopup="menu"
        className="rounded-full bg-brand px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-brand-dark focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand"
      >
        Beli Sekarang
      </button>

      {open && (
        <div
          role="menu"
          className="absolute right-0 top-full z-50 mt-2 w-48 overflow-hidden rounded-xl border border-neutral-200 bg-white shadow-lg"
        >
          {channels.map((channel) => (
            <a
              key={channel.key}
              role="menuitem"
              href={channel.storeUrl}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => {
                trackBuyNowClick(channel.key);
                setOpen(false);
              }}
              className="block px-4 py-3 text-sm font-medium text-neutral-800 transition hover:bg-neutral-100"
            >
              Belanja di {channel.label}
            </a>
          ))}
        </div>
      )}
    </div>
  );
}
