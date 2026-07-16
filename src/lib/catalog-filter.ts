/**
 * Kontrak filter katalog dibagikan antara navbar (Header) dan ProductCatalog.
 * Satu sumber untuk anchor hash dan event kustom, sehingga perubahan nama
 * tidak bisa membuat keduanya tidak sinkron.
 *
 * Event kustom diperlukan karena <Link> App Router memakai pushState untuk
 * navigasi hash di halaman yang sama — pushState tidak memicu 'hashchange',
 * jadi klik "Best Seller" saat sudah di /products tidak terdeteksi tanpanya.
 */
export const BEST_SELLER_HASH = "best-seller";
export const CATALOG_FILTER_EVENT = "wiguna:catalog-filter";

export type NavCatalogFilter = "all" | "best-seller";

export function dispatchCatalogFilter(filter: NavCatalogFilter) {
  window.dispatchEvent(
    new CustomEvent<NavCatalogFilter>(CATALOG_FILTER_EVENT, { detail: filter })
  );
}
