/**
 * Konfigurasi global situs Wiguna.
 * Semua URL eksternal (marketplace & sosial media) dikelola dari satu tempat.
 * TODO: ganti nilai placeholder dengan URL resmi sebelum launch.
 */
export const siteConfig = {
  name: "Wiguna",
  tagline: "Satu Item, Banyak Fungsi",
  description:
    "Wiguna — brand fashion multifungsi asal Indonesia. Rompi yang berubah jadi tote bag, bucket hat convertible, dan obi belt. Belanja resmi di Shopee & TikTok Shop.",
  // Ganti dengan domain produksi sebelum launch (dipakai untuk metadata, sitemap, OG tags)
  url: "https://wiguna.example.com",
  locale: "id_ID",

  marketplace: {
    shopee: {
      label: "Shopee",
      storeUrl: "https://shopee.co.id/wiguna.official",
    },
    tiktokShop: {
      label: "TikTok Shop",
      storeUrl: "https://www.tiktok.com/@wiguna.official/shop",
    },
  },

  contact: {
    email: "hello@wiguna.id",
    whatsapp: "https://wa.me/6281234567890",
  },

  social: {
    instagram: "https://www.instagram.com/wiguna.official",
    tiktok: "https://www.tiktok.com/@wiguna.official",
  },

  // Nama toko resmi untuk seksi verifikasi (FR-4.2, anti-counterfeit)
  officialStoreHandles: {
    shopee: "wiguna.official",
    tiktokShop: "@wiguna.official",
  },
} as const;

export const navLinks = [
  { href: "/", label: "Home" },
  { href: "/cara-belanja", label: "Cara Belanja" },
  { href: "/products", label: "Produk" },
  { href: "/products#best-seller", label: "Best Seller" },
  { href: "/profil", label: "Profil Perusahaan" },
] as const;
