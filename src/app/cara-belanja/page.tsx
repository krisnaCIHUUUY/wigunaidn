import type { Metadata } from "next";
import { siteConfig } from "@/config/site";
import { externalLinkProps } from "@/lib/links";

export const metadata: Metadata = {
  title: "Cara Belanja",
  description:
    "Panduan langkah demi langkah belanja produk Wiguna melalui toko resmi kami di Shopee dan TikTok Shop.",
};

const guides = [
  {
    channel: siteConfig.marketplace.shopee.label,
    storeUrl: siteConfig.marketplace.shopee.storeUrl,
    steps: [
      "Jelajahi produk di website ini dan buka halaman detail produk yang Anda inginkan.",
      'Ketuk tombol "Beli di Shopee". Anda akan diarahkan ke listing produk tersebut di toko resmi kami.',
      "Pastikan nama toko adalah toko resmi Wiguna (lihat verifikasi di bawah).",
      "Selesaikan checkout dan pembayaran langsung di aplikasi/website Shopee.",
    ],
  },
  {
    channel: siteConfig.marketplace.tiktokShop.label,
    storeUrl: siteConfig.marketplace.tiktokShop.storeUrl,
    steps: [
      "Jelajahi produk di website ini dan buka halaman detail produk yang Anda inginkan.",
      'Ketuk tombol "Beli di TikTok Shop". Anda akan diarahkan ke listing produk tersebut.',
      "Pastikan akun penjual adalah akun resmi Wiguna (lihat verifikasi di bawah).",
      "Selesaikan checkout dan pembayaran langsung di aplikasi TikTok.",
    ],
  },
];

export default function CaraBelanjaPage() {
  return (
    <div className="mx-auto max-w-4xl px-4 py-14">
      <p className="text-xs font-semibold uppercase tracking-[0.35em] text-gold">
        How to Shop
      </p>
      <h1 className="mt-3 font-display text-4xl font-semibold text-cream md:text-5xl">
        Cara Belanja
      </h1>
      <p className="mt-4 max-w-2xl text-sm font-light leading-relaxed text-stone-400">
        Website ini adalah katalog resmi Wiguna. Seluruh transaksi dilakukan
        dengan aman di marketplace ikuti langkah berikut.
      </p>

      <div className="mt-12 grid gap-6 md:grid-cols-2">
        {guides.map((guide) => (
          <section key={guide.channel} className="glass rounded-3xl p-8">
            <h2 className="font-display text-2xl font-semibold text-cream">
              Belanja via {guide.channel}
            </h2>
            <ol className="mt-6 space-y-5">
              {guide.steps.map((step, i) => (
                <li key={i} className="flex gap-4">
                  <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-gold/50 font-display text-sm font-semibold text-gold">
                    {i + 1}
                  </span>
                  <p className="text-sm font-light leading-relaxed text-stone-300">
                    {step}
                  </p>
                </li>
              ))}
            </ol>
            <a
              href={guide.storeUrl}
              {...externalLinkProps}
              className="btn-gold mt-8 inline-flex min-h-11 items-center rounded-full px-7 text-sm font-semibold uppercase tracking-[0.1em]"
            >
              Kunjungi Toko {guide.channel}
            </a>
          </section>
        ))}
      </div>

      {/* Verifikasi toko resmi (FR-4.2) */}
      <section className="glass-iridescent mt-10 rounded-3xl p-8">
        <h2 className="font-display text-2xl font-semibold text-cream">
          Verifikasi Toko Resmi
        </h2>
        <p className="mt-3 text-sm font-light leading-relaxed text-stone-300">
          Untuk menghindari penjual tidak resmi atau produk tiruan, pastikan
          Anda hanya berbelanja dari akun berikut:
        </p>
        <ul className="mt-5 space-y-2.5 text-sm text-stone-200">
          <li>
            <strong className="font-semibold text-cream">Shopee:</strong>{" "}
            <a
              href={siteConfig.marketplace.shopee.storeUrl}
              {...externalLinkProps}
              className="font-medium text-gold transition hover:text-champagne"
            >
              {siteConfig.officialStoreHandles.shopee}
            </a>
          </li>
          <li>
            <strong className="font-semibold text-cream">TikTok Shop:</strong>{" "}
            <a
              href={siteConfig.marketplace.tiktokShop.storeUrl}
              {...externalLinkProps}
              className="font-medium text-gold transition hover:text-champagne"
            >
              {siteConfig.officialStoreHandles.tiktokShop}
            </a>
          </li>
        </ul>
        <p className="mt-5 text-sm font-light text-stone-400">
          Menemukan penjual mencurigakan? Laporkan ke kami via{" "}
          <a
            href={`mailto:${siteConfig.contact.email}`}
            className="font-medium text-gold transition hover:text-champagne"
          >
            {siteConfig.contact.email}
          </a>
          .
        </p>
      </section>
    </div>
  );
}
