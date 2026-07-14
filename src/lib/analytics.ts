/**
 * Event tracking ringan (NFR-6). Saat ini memakai Plausible custom events
 * jika script-nya terpasang; tanpa script, panggilan ini no-op sehingga
 * aman dipakai sejak awal development.
 */

type EventProps = Record<string, string>;

declare global {
  interface Window {
    plausible?: (event: string, options?: { props?: EventProps }) => void;
  }
}

export function track(event: string, props?: EventProps) {
  if (typeof window !== "undefined" && window.plausible) {
    window.plausible(event, props ? { props } : undefined);
  }
}

/** CTA "Beli Sekarang" di header diklik */
export function trackBuyNowClick(channel: string) {
  track("buy_now_click", { channel });
}

/** Tombol redirect marketplace di halaman detail produk diklik — sinyal konversi utama */
export function trackMarketplaceRedirect(productSlug: string, channel: string) {
  track("marketplace_redirect", { product: productSlug, channel });
}
