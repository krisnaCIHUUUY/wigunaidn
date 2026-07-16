import productsData from "@/data/products.json";

export type ProductCategory = "vest" | "hat" | "obi-belt";

export type ProductImage = {
  src: string;
  alt: string;
};

export type Product = {
  slug: string;
  name: string;
  category: ProductCategory;
  /** Harga referensi dalam IDR — harga final mengikuti marketplace (PRD 1.4) */
  price: number;
  materials: string[];
  description: string;
  /** Deskripsi singkat mode transformasi, mis. "Rompi ↔ Tote Bag" */
  transformation?: string;
  images: ProductImage[];
  shopeeUrl?: string;
  tiktokShopUrl?: string;
  isBestSeller: boolean;
};

export const categoryLabels: Record<ProductCategory, string> = {
  vest: "Rompi",
  hat: "Bucket Hat",
  "obi-belt": "Obi Belt",
};

/**
 * Validasi ringan saat modul dimuat (= saat `next build` untuk situs SSG ini).
 * TypeScript tidak bisa memeriksa isi products.json terhadap tipe Product,
 * jadi kesalahan data (kategori typo, field wajib hilang, images kosong)
 * digagalkan di build dengan pesan yang jelas — bukan error samar saat render.
 */
function parseProducts(data: unknown): Product[] {
  if (!Array.isArray(data)) {
    throw new Error("products.json harus berupa array produk");
  }
  return data.map((raw, i) => {
    const p = raw as Record<string, unknown>;
    const problems: string[] = [];
    if (typeof p.slug !== "string" || p.slug === "") problems.push("slug");
    if (typeof p.name !== "string" || p.name === "") problems.push("name");
    if (typeof p.category !== "string" || !(p.category in categoryLabels))
      problems.push(`category (harus salah satu: ${Object.keys(categoryLabels).join(", ")})`);
    if (typeof p.price !== "number") problems.push("price");
    if (!Array.isArray(p.materials) || p.materials.length === 0)
      problems.push("materials (min. 1)");
    if (typeof p.description !== "string") problems.push("description");
    if (!Array.isArray(p.images) || p.images.length === 0)
      problems.push("images (min. 1)");
    if (typeof p.isBestSeller !== "boolean") problems.push("isBestSeller");
    if (problems.length > 0) {
      throw new Error(
        `products.json entri #${i} (slug: ${String(p.slug ?? "?")}) tidak valid — periksa field: ${problems.join("; ")}`
      );
    }
    return raw as Product;
  });
}

const products = parseProducts(productsData);

export function getAllProducts(): Product[] {
  return products;
}

export function getBestSellers(): Product[] {
  return products.filter((p) => p.isBestSeller);
}

export function getProductBySlug(slug: string): Product | undefined {
  return products.find((p) => p.slug === slug);
}
