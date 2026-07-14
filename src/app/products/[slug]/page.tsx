import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { siteConfig } from "@/config/site";
import {
  categoryLabels,
  getAllProducts,
  getProductBySlug,
} from "@/lib/products";
import { formatIDR } from "@/lib/format";
import { BuyButtons } from "@/components/BuyButtons";

type Props = { params: Promise<{ slug: string }> };

// Halaman detail dedicated per produk agar tiap produk punya URL
// yang bisa diindeks (Open Question #1 — rekomendasi PRD).
export const dynamicParams = false;

export function generateStaticParams() {
  return getAllProducts().map((product) => ({ slug: product.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const product = getProductBySlug(slug);
  if (!product) return {};
  return {
    title: product.name,
    description: product.description,
    openGraph: {
      title: product.name,
      description: product.description,
      images: product.images.map((img) => ({ url: img.src, alt: img.alt })),
    },
  };
}

export default async function ProductDetailPage({ params }: Props) {
  const { slug } = await params;
  const product = getProductBySlug(slug);
  if (!product) notFound();

  // Structured data Product (NFR-3)
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Product",
    name: product.name,
    description: product.description,
    image: product.images.map((img) => `${siteConfig.url}${img.src}`),
    brand: { "@type": "Brand", name: siteConfig.name },
    offers: {
      "@type": "Offer",
      priceCurrency: "IDR",
      price: product.price,
      availability: "https://schema.org/InStock",
      url: `${siteConfig.url}/products/${product.slug}/`,
    },
  };

  return (
    <div className="mx-auto max-w-6xl px-4 py-12">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <nav aria-label="Breadcrumb" className="text-sm text-neutral-500">
        <Link href="/products" className="hover:text-brand">
          Produk
        </Link>{" "}
        / <span className="text-neutral-800">{product.name}</span>
      </nav>

      <div className="mt-6 grid gap-10 md:grid-cols-2">
        {/* Galeri foto termasuk kondisi transformasi (FR-3.2) */}
        <div className="space-y-4">
          {product.images.map((img, i) => (
            <div
              key={img.src}
              className="relative aspect-square overflow-hidden rounded-2xl bg-neutral-100"
            >
              <Image
                src={img.src}
                alt={img.alt}
                fill
                priority={i === 0}
                loading={i === 0 ? "eager" : "lazy"}
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover"
              />
            </div>
          ))}
        </div>

        <div>
          <p className="text-sm font-medium uppercase tracking-wide text-neutral-500">
            {categoryLabels[product.category]}
          </p>
          <h1 className="mt-2 text-3xl font-bold text-neutral-900">
            {product.name}
          </h1>
          {product.transformation && (
            <p className="mt-2 inline-block rounded-full bg-neutral-100 px-3 py-1 text-sm font-medium text-neutral-700">
              {product.transformation}
            </p>
          )}
          <p className="mt-4 text-2xl font-bold text-neutral-900">
            {formatIDR(product.price)}
          </p>
          <p className="mt-1 text-xs text-neutral-500">
            Harga referensi — harga final &amp; promo mengikuti marketplace.
          </p>

          <div className="mt-8">
            <BuyButtons product={product} />
          </div>

          <section className="mt-10">
            <h2 className="font-semibold text-neutral-900">Deskripsi</h2>
            <p className="mt-2 leading-relaxed text-neutral-700">
              {product.description}
            </p>
          </section>

          <section className="mt-6">
            <h2 className="font-semibold text-neutral-900">Material</h2>
            <ul className="mt-2 list-inside list-disc space-y-1 text-neutral-700">
              {product.materials.map((material) => (
                <li key={material}>{material}</li>
              ))}
            </ul>
          </section>
        </div>
      </div>
    </div>
  );
}
