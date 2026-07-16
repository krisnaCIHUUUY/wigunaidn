import type { MetadataRoute } from "next";
import { absoluteUrl } from "@/config/site";
import { getAllProducts } from "@/lib/products";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticPages = ["/", "/products/", "/cara-belanja/", "/profil/"].map(
    (path) => ({
      url: absoluteUrl(path),
      changeFrequency: "weekly" as const,
      priority: path === "/" ? 1 : 0.8,
    })
  );

  const productPages = getAllProducts().map((product) => ({
    url: absoluteUrl(`/products/${product.slug}/`),
    changeFrequency: "weekly" as const,
    priority: 0.9,
  }));

  return [...staticPages, ...productPages];
}
