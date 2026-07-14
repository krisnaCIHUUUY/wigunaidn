import type { Metadata } from "next";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = {
  title: "Cara Belanja",
  description:
    "Panduan langkah demi langkah belanja produk Wiguna melalui toko resmi kami di Shopee dan TikTok Shop.",
};

const externalLinkProps = {
  target: "_blank",
  rel: "noopener noreferrer",
} as const;

const guides = [
  {
    channel: "Shopee",
    storeUrl: siteConfig.marketplace.shopee.storeUrl,
    steps: [
      "Jelajahi produk di website ini dan buka halaman detail produk yang Anda inginkan.",
      'Ketuk tombol "Beli di Shopee" — Anda akan diarahkan ke listing produk tersebut di toko resmi kami.',
      "Pastikan nama toko adalah toko resmi Wiguna (lihat verifikasi di bawah).",
      "Selesaikan checkout dan pembayaran langsung di aplikasi/website Shopee.",
    ],
  },
  {
    channel: "TikTok Shop",
    storeUrl: siteConfig.marketplace.tiktokShop.storeUrl,
    steps: [
      "Jelajahi produk di website ini dan buka halaman detail produk yang Anda inginkan.",
      'Ketuk tombol "Beli di TikTok Shop" — Anda akan diarahkan ke listing produk tersebut.',
      "Pastikan akun penjual adalah akun resmi Wiguna (lihat verifikasi di bawah).",
      "Selesaikan checkout dan pembayaran langsung di aplikasi TikTok.",
    ],
  },
];

export default function CaraBelanjaPage() {
  return (
    <div className="mx-auto max-w-4xl px-4 py-12">
      <h1 className="text-3xl font-bold text-neutral-900">Cara Belanja</h1>
      <p className="mt-2 text-neutral-600">
        Website ini adalah katalog resmi Wiguna. Seluruh transaksi dilakukan
        dengan aman di marketplace — ikuti langkah berikut.
      </p>

      <div className="mt-10 grid gap-8 md:grid-cols-2">
        {guides.map((guide) => (
          <section
            key={guide.channel}
            className="rounded-2xl border border-neutral-200 p-6"
          >
            <h2 className="text-xl font-bold text-neutral-900">
              Belanja via {guide.channel}
            </h2>
            <ol className="mt-4 space-y-4">
              {guide.steps.map((step, i) => (
                <li key={i} className="flex gap-3">
                  <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-brand text-sm font-bold text-white">
                    {i + 1}
                  </span>
                  <p className="text-sm leading-relaxed text-neutral-700">
                    {step}
                  </p>
                </li>
              ))}
            </ol>
            <a
              href={guide.storeUrl}
              {...externalLinkProps}
              className="mt-6 inline-flex min-h-11 items-center rounded-full bg-brand px-6 font-semibold text-white transition hover:bg-brand-dark"
            >
              Kunjungi Toko {guide.channel}
            </a>
          </section>
        ))}
      </div>

      {/* Verifikasi toko resmi (FR-4.2) */}
      <section className="mt-10 rounded-2xl bg-neutral-50 p-6">
        <h2 className="text-lg font-bold text-neutral-900">
          Verifikasi Toko Resmi
        </h2>
        <p className="mt-2 text-sm leading-relaxed text-neutral-700">
          Untuk menghindari penjual tidak resmi atau produk tiruan, pastikan
          Anda hanya berbelanja dari akun berikut:
        </p>
        <ul className="mt-4 space-y-2 text-sm text-neutral-800">
          <li>
            <strong>Shopee:</strong>{" "}
            <a
              href={siteConfig.marketplace.shopee.storeUrl}
              {...externalLinkProps}
              className="font-medium text-brand hover:underline"
            >
              {siteConfig.officialStoreHandles.shopee}
            </a>
          </li>
          <li>
            <strong>TikTok Shop:</strong>{" "}
            <a
              href={siteConfig.marketplace.tiktokShop.storeUrl}
              {...externalLinkProps}
              className="font-medium text-brand hover:underline"
            >
              {siteConfig.officialStoreHandles.tiktokShop}
            </a>
          </li>
        </ul>
        <p className="mt-4 text-sm text-neutral-600">
          Menemukan penjual mencurigakan? Laporkan ke kami via{" "}
          <a
            href={`mailto:${siteConfig.contact.email}`}
            className="font-medium text-brand hover:underline"
          >
            {siteConfig.contact.email}
          </a>
          .
        </p>
      </section>
    </div>
  );
}
