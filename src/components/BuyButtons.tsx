"use client";

import type { Product } from "@/lib/products";
import { trackMarketplaceRedirect } from "@/lib/analytics";

/**
 * Tombol redirect pembelian di halaman detail produk (FR-3.3).
 * Deep-link ke listing produk spesifik; menampilkan satu tombol saja
 * bila produk hanya tersedia di satu channel (edge case PRD 2.1).
 */
export function BuyButtons({ product }: { product: Product }) {
  const channels = [
    { key: "shopee", label: "Beli di Shopee", url: product.shopeeUrl },
    { key: "tiktok_shop", label: "Beli di TikTok Shop", url: product.tiktokShopUrl },
  ].filter((c): c is { key: string; label: string; url: string } => Boolean(c.url));

  return (
    <div className="flex flex-col gap-3 sm:flex-row">
      {channels.map((channel) => (
        <a
          key={channel.key}
          href={channel.url}
          target="_blank"
          rel="noopener noreferrer"
          onClick={() => trackMarketplaceRedirect(product.slug, channel.key)}
          className="btn-gold flex min-h-12 flex-1 items-center justify-center rounded-full px-6 text-center text-sm font-semibold uppercase tracking-[0.1em] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold"
        >
          {channel.label}
        </a>
      ))}
    </div>
  );
}
