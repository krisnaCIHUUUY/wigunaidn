import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import { siteConfig } from "@/config/site";
import { getBestSellers } from "@/lib/products";
import { ProductCard } from "@/components/ProductCard";

export const metadata: Metadata = {
  description: siteConfig.description,
};

export default function HomePage() {
  const bestSellers = getBestSellers();

  return (
    <>
      {/* Hero (FR-2.1) */}
      <section className="bg-neutral-900 text-white">
        <div className="mx-auto grid max-w-6xl items-center gap-8 px-4 py-16 md:grid-cols-2 md:py-24">
          <div>
            <p className="text-sm font-semibold uppercase tracking-widest text-brand">
              Wiguna
            </p>
            <h1 className="mt-3 text-4xl font-bold leading-tight md:text-5xl">
              Satu Item,
              <br />
              Banyak Fungsi.
            </h1>
            <p className="mt-4 max-w-md text-lg text-neutral-300">
              Rompi yang berubah jadi tote bag. Bucket hat dua gaya. Obi belt
              tiga siluet. Fashion multifungsi untuk hidup yang terus bergerak.
            </p>
            <Link
              href="/products"
              className="mt-8 inline-block rounded-full bg-brand px-8 py-3.5 font-semibold text-white transition hover:bg-brand-dark"
            >
              Jelajahi Koleksi
            </Link>
          </div>
          <div className="relative aspect-[4/5] overflow-hidden rounded-2xl bg-neutral-800">
            {/* TODO: ganti dengan foto model resmi (WebP/AVIF) */}
            <Image
              src="/hero.svg"
              alt="Model mengenakan Rompi Transforma Wiguna dalam mode rompi dan mode tote bag"
              fill
              priority
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-cover"
            />
          </div>
        </div>
      </section>

      {/* Best Sellers / Highlights (FR-2.2) */}
      <section className="mx-auto max-w-6xl px-4 py-16">
        <div>
          <h2 className="text-2xl font-bold text-neutral-900 md:text-3xl">
            Best Sellers
          </h2>
          <p className="mt-2 text-neutral-600">
            Produk paling dicari di toko resmi kami.
          </p>
        </div>
        <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {bestSellers.map((product) => (
            <ProductCard key={product.slug} product={product} />
          ))}
        </div>
        {/* View More (FR-2.3) */}
        <div className="mt-10 text-center">
          <Link
            href="/products"
            className="inline-block rounded-full border-2 border-neutral-900 px-8 py-3 font-semibold text-neutral-900 transition hover:bg-neutral-900 hover:text-white"
          >
            Lihat Semua Produk
          </Link>
        </div>
      </section>

      {/* Value proposition singkat */}
      <section className="border-t border-neutral-200 bg-neutral-50">
        <div className="mx-auto grid max-w-6xl gap-8 px-4 py-16 sm:grid-cols-3">
          {[
            {
              title: "Multifungsi",
              body: "Setiap produk dirancang dengan lebih dari satu cara pakai — nilai maksimal dari satu item.",
            },
            {
              title: "Toko Resmi",
              body: "Belanja aman hanya melalui toko resmi Wiguna di Shopee dan TikTok Shop.",
            },
            {
              title: "Desain Lokal",
              body: "Dirancang dan diproduksi di Indonesia dengan material pilihan.",
            },
          ].map((item) => (
            <div key={item.title}>
              <h3 className="font-semibold text-neutral-900">{item.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-neutral-600">
                {item.body}
              </p>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
