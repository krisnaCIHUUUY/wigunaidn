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
    <div className="mx-auto max-w-6xl px-4 py-12">
      <h1 className="text-3xl font-bold text-neutral-900">Koleksi Wiguna</h1>
      <p className="mt-2 max-w-2xl text-neutral-600">
        Semua produk multifungsi kami dalam satu tempat. Klik produk untuk
        melihat detail material, deskripsi, dan tautan pembelian resmi.
      </p>
      <div className="mt-8">
        <ProductCatalog products={products} />
      </div>
    </div>
  );
}
