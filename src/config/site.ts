import { BEST_SELLER_HASH } from "@/lib/catalog-filter";
import type { NavCatalogFilter } from "@/lib/catalog-filter";

/**
 * Konfigurasi global situs Wiguna.
 * Semua URL eksternal (marketplace & sosial media) dikelola dari satu tempat.
 * TODO: ganti nilai placeholder dengan URL resmi sebelum launch.
 */

// Domain produksi diambil dari env agar tidak ter-deploy dengan placeholder.
const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://wiguna.example.com";
if (process.env.NODE_ENV === "production" && siteUrl.includes("example.com")) {
  console.warn(
    "\n⚠ PERINGATAN: siteConfig.url masih placeholder (wiguna.example.com)." +
      "\n  Set NEXT_PUBLIC_SITE_URL sebelum deploy produksi sitemap, robots," +
      "\n  canonical/OG, dan JSON-LD semuanya memakai nilai ini.\n",
  );
}

export const siteConfig = {
  name: "Wiguna",
  tagline: "One Product, Many Functions",
  description:
    "Wiguna brand fashion multifungsi asal Indonesia. Rompi yang berubah jadi tote bag, bucket hat convertible, dan obi belt. Belanja resmi di Shopee & TikTok Shop.",
  url: siteUrl,
  locale: "id_ID",

  marketplace: {
    shopee: {
      label: "Shopee",
      // storeUrl: "https://s.shopee.co.id/wigunaidn.store",
      storeUrl:
        "https://shopee.co.id/wigunaidn.store?entryPoint=ShopBySearch&searchKeyword=wiguna.idn",
    },

    // https://shopee.co.id/wigunaidn.

    // tiktok shop belum ada
    tiktokShop: {
      label: "TikTok Shop",
      storeUrl: "https://www.tiktok.com/@wiguna.idn/shop",
    },
  },

  contact: {
    email: "wigunaidn@gmail.com",
    whatsapp: "https://wa.me/6281225545389",
  },

  social: {
    instagram: "https://www.instagram.com/wiguna.idn",
    tiktok: "https://www.tiktok.com/@wiguna.idn",
  },

  // Nama toko resmi untuk seksi verifikasi (FR-4.2, anti-counterfeit)
  officialStoreHandles: {
    shopee: "wiguna.idn",
    tiktokShop: "@wiguna.idn",
  },
} as const;

/** Membangun URL absolut dari path relatif — satu-satunya tempat penggabungan domain. */
export function absoluteUrl(path = "/"): string {
  return new URL(path, siteConfig.url).toString();
}

/**
 * Registry kanal marketplace — satu-satunya tempat key analytics, label,
 * URL storefront, dan field deep-link produk didefinisikan berpasangan.
 */
export type MarketplaceChannel = {
  /** Key event analytics (NFR-6) — jangan diubah tanpa migrasi data analytics */
  key: "shopee" | "tiktok_shop";
  label: string;
  storeUrl: string;
  /** Field pada Product yang berisi deep-link listing untuk kanal ini */
  productUrlKey: "shopeeUrl" | "tiktokShopUrl";
};

export const marketplaceChannels: MarketplaceChannel[] = [
  {
    key: "shopee",
    label: siteConfig.marketplace.shopee.label,
    storeUrl: siteConfig.marketplace.shopee.storeUrl,
    productUrlKey: "shopeeUrl",
  },
  {
    key: "tiktok_shop",
    label: siteConfig.marketplace.tiktokShop.label,
    storeUrl: siteConfig.marketplace.tiktokShop.storeUrl,
    productUrlKey: "tiktokShopUrl",
  },
];

export type NavLink = {
  href: string;
  label: string;
  /** false → link tidak pernah diberi gaya aktif (mis. anchor Best Seller) */
  highlight?: boolean;
  /** Filter katalog yang dikirim saat link diklik (navigasi hash same-page) */
  catalogFilter?: NavCatalogFilter;
};

export const navLinks: NavLink[] = [
  { href: "/", label: "Home" },
  { href: "/cara-belanja", label: "Cara Belanja" },
  { href: "/products", label: "Produk", catalogFilter: "all" },
  {
    href: `/products#${BEST_SELLER_HASH}`,
    label: "Best Seller",
    highlight: false,
    catalogFilter: "best-seller",
  },
  { href: "/profil", label: "Profil Perusahaan" },
];
