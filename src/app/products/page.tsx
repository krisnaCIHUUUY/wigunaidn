import type { Metadata } from "next";
import { getAllProducts } from "@/lib/products";
import { ProductCatalog } from "@/components/ProductCatalog";

export const metadata: Metadata = {
  title: "Produk",
  description:
    "Koleksi lengkap fashion multifungsi Wiguna — rompi transformable, bucket hat convertible, dan obi belt. Beli di toko resmi Shopee & TikTok Shop.",
};

export default function ProductsPage() {
  const products = getAllProducts();

  return (
    <div className="mx-auto max-w-6xl px-4 py-14">
      <p className="text-xs font-semibold uppercase tracking-[0.35em] text-gold">
        The Collection
      </p>
      <h1 className="mt-3 font-display text-4xl font-semibold text-cream md:text-5xl">
        Koleksi Wiguna
      </h1>
      <p className="mt-4 max-w-2xl text-sm font-light leading-relaxed text-stone-400">
        Semua karya multifungsi kami dalam satu tempat. Pilih produk untuk
        melihat detail material, deskripsi, dan tautan pembelian resmi.
      </p>
      <div className="mt-10">
        <ProductCatalog products={products} />
      </div>
    </div>
  );
}
