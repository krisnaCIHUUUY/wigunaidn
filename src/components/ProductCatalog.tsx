"use client";

import { useEffect, useState } from "react";
import type { Product, ProductCategory } from "@/lib/products";
import { categoryLabels } from "@/lib/products";
import {
  BEST_SELLER_HASH,
  CATALOG_FILTER_EVENT,
  type NavCatalogFilter,
} from "@/lib/catalog-filter";
import { ProductCard } from "@/components/ProductCard";

type Filter = "all" | "best-seller" | ProductCategory;

// Chip kategori diturunkan dari categoryLabels, dibatasi ke kategori yang
// benar-benar punya produk — kategori kosong tidak memunculkan chip.
function buildFilters(products: Product[]): { key: Filter; label: string }[] {
  const present = new Set(products.map((p) => p.category));
  return [
    { key: "all" as const, label: "Semua" },
    { key: "best-seller" as const, label: "Best Seller" },
    ...(Object.entries(categoryLabels) as [ProductCategory, string][])
      .filter(([key]) => present.has(key))
      .map(([key, label]) => ({ key, label })),
  ];
}

/**
 * Grid katalog dengan filter kategori client-side (FR-3.1, FR-3.4).
 * Filter Best Seller diaktifkan lewat dua jalur yang saling melengkapi:
 * - hash #best-seller saat halaman dibuka/riwayat browser berubah, dan
 * - event kustom dari Header untuk navigasi same-page via <Link>
 *   (pushState tidak memicu 'hashchange').
 * Hash yang hilang me-reset filter ke "Semua".
 */
export function ProductCatalog({ products }: { products: Product[] }) {
  const [active, setActive] = useState<Filter>("all");
  const filters = buildFilters(products);

  useEffect(() => {
    function applyHash() {
      setActive(
        window.location.hash === `#${BEST_SELLER_HASH}` ? "best-seller" : "all"
      );
    }
    function onFilterEvent(e: Event) {
      const detail = (e as CustomEvent<NavCatalogFilter>).detail;
      if (detail) setActive(detail);
    }
    if (window.location.hash === `#${BEST_SELLER_HASH}`) {
      // Hash hanya bisa dibaca setelah mount (tidak tersedia saat SSG),
      // jadi setState di sini memang diperlukan sekali di awal.
      // eslint-disable-next-line react-hooks/set-state-in-effect
      setActive("best-seller");
    }
    window.addEventListener("hashchange", applyHash);
    window.addEventListener(CATALOG_FILTER_EVENT, onFilterEvent);
    return () => {
      window.removeEventListener("hashchange", applyHash);
      window.removeEventListener(CATALOG_FILTER_EVENT, onFilterEvent);
    };
  }, []);

  const visible = products.filter((p) => {
    if (active === "all") return true;
    if (active === "best-seller") return p.isBestSeller;
    return p.category === active;
  });

  return (
    <div id={BEST_SELLER_HASH}>
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
