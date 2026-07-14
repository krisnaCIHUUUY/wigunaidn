"use client";

import { useEffect, useState } from "react";
import type { Product, ProductCategory } from "@/lib/products";
import { categoryLabels } from "@/lib/products";
import { ProductCard } from "@/components/ProductCard";

type Filter = "all" | "best-seller" | ProductCategory;

const filters: { key: Filter; label: string }[] = [
  { key: "all", label: "Semua" },
  { key: "best-seller", label: "Best Seller" },
  { key: "vest", label: categoryLabels.vest },
  { key: "hat", label: categoryLabels.hat },
  { key: "obi-belt", label: categoryLabels["obi-belt"] },
];

/**
 * Grid katalog dengan filter kategori client-side (FR-3.1, FR-3.4).
 * Link navbar "Best Seller" mengarah ke /products#best-seller —
 * hash tersebut otomatis mengaktifkan filter best seller.
 */
export function ProductCatalog({ products }: { products: Product[] }) {
  const [active, setActive] = useState<Filter>("all");

  useEffect(() => {
    function applyHash() {
      if (window.location.hash === "#best-seller") setActive("best-seller");
    }
    applyHash();
    window.addEventListener("hashchange", applyHash);
    return () => window.removeEventListener("hashchange", applyHash);
  }, []);

  const visible = products.filter((p) => {
    if (active === "all") return true;
    if (active === "best-seller") return p.isBestSeller;
    return p.category === active;
  });

  return (
    <div id="best-seller">
      <div
        role="group"
        aria-label="Filter kategori produk"
        className="flex flex-wrap gap-2"
      >
        {filters.map((f) => (
          <button
            key={f.key}
            type="button"
            onClick={() => setActive(f.key)}
            aria-pressed={active === f.key}
            className={`min-h-11 cursor-pointer rounded-full px-5 text-[13px] font-medium uppercase tracking-[0.1em] transition ${
              active === f.key
                ? "btn-gold"
                : "glass text-stone-300 hover:border-gold/40 hover:text-champagne"
            }`}
          >
            {f.label}
          </button>
        ))}
      </div>

      <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {visible.map((product) => (
          <ProductCard key={product.slug} product={product} />
        ))}
      </div>

      {visible.length === 0 && (
        <p className="mt-10 text-center text-stone-400">
          Belum ada produk pada kategori ini.
        </p>
      )}
    </div>
  );
}
