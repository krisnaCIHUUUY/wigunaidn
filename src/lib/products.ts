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

const products = productsData as Product[];

export function getAllProducts(): Product[] {
  return products;
}

export function getBestSellers(): Product[] {
  return products.filter((p) => p.isBestSeller);
}

export function getProductBySlug(slug: string): Product | undefined {
  return products.find((p) => p.slug === slug);
}
