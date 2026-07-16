"use client";

import { useEffect, useRef, useState } from "react";
import { marketplaceChannels } from "@/config/site";
import { externalLinkProps } from "@/lib/links";
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

  return (
    <div ref={containerRef} className="relative">
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-expanded={open}
        aria-haspopup="menu"
        className="btn-gold cursor-pointer rounded-full px-5 py-2.5 text-[13px] font-semibold uppercase tracking-[0.12em] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold"
      >
        Beli Sekarang
      </button>

      {open && (
        <div
          role="menu"
          className="glass-strong absolute right-0 top-full z-50 mt-2 w-56 overflow-hidden rounded-2xl shadow-2xl shadow-black/50"
        >
          {marketplaceChannels.map((channel) => (
            <a
              key={channel.key}
              role="menuitem"
              href={channel.storeUrl}
              {...externalLinkProps}
              onClick={() => {
                trackBuyNowClick(channel.key);
                setOpen(false);
              }}
              className="block px-5 py-3.5 text-sm font-medium text-cream transition hover:bg-white/10 hover:text-champagne"
            >
              Belanja di {channel.label}
            </a>
          ))}
        </div>
      )}
    </div>
  );
}
