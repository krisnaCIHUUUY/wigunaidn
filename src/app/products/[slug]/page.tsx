import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { absoluteUrl, siteConfig } from "@/config/site";
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
  // Crawler sosial (WhatsApp/Facebook/X) tidak merender og:image berformat
  // SVG, jadi hanya format raster yang disertakan sebagai preview.
  const ogImages = product.images.filter((img) => !img.src.endsWith(".svg"));
  return {
    title: product.name,
    description: product.description,
    openGraph: {
      title: product.name,
      description: product.description,
      ...(ogImages.length > 0 && {
        images: ogImages.map((img) => ({ url: img.src, alt: img.alt })),
      }),
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
    image: product.images.map((img) => absoluteUrl(img.src)),
    brand: { "@type": "Brand", name: siteConfig.name },
    offers: {
      "@type": "Offer",
      priceCurrency: "IDR",
      price: product.price,
      availability: "https://schema.org/InStock",
      url: absoluteUrl(`/products/${product.slug}/`),
    },
  };

  return (
    <div className="mx-auto max-w-6xl px-4 py-14">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <nav aria-label="Breadcrumb" className="text-sm text-stone-500">
        <Link href="/products" className="transition hover:text-champagne">
          Produk
        </Link>{" "}
        / <span className="text-stone-300">{product.name}</span>
      </nav>

      <div className="mt-8 grid gap-10 md:grid-cols-2">
        {/* Galeri foto termasuk kondisi transformasi (FR-3.2) */}
        <div className="space-y-5">
          {product.images.map((img, i) => (
            <div key={img.src} className="glass rounded-[2rem] p-2.5">
              <div className="relative aspect-square overflow-hidden rounded-[1.6rem] bg-coal">
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
            </div>
          ))}
        </div>

        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-gold">
            {categoryLabels[product.category]}
          </p>
          <h1 className="mt-3 font-display text-4xl font-semibold leading-tight text-cream md:text-5xl">
            {product.name}
          </h1>
          {product.transformation && (
            <p className="glass mt-4 inline-block rounded-full px-4 py-1.5 text-sm font-medium text-champagne">
              {product.transformation}
            </p>
          )}
          <p className="mt-6 text-3xl font-semibold tracking-wide text-champagne">
            {formatIDR(product.price)}
          </p>
          <p className="mt-1 text-xs tracking-wide text-stone-500">
            Harga referensi final &amp; promo mengikuti marketplace.
          </p>

          <div className="mt-9">
            <BuyButtons product={product} />
          </div>

          <section className="mt-12 border-t border-white/10 pt-8">
            <h2 className="text-xs font-semibold uppercase tracking-[0.3em] text-gold">
              Deskripsi
            </h2>
            <p className="mt-3 font-light leading-relaxed text-stone-300">
              {product.description}
            </p>
          </section>

          <section className="mt-8">
            <h2 className="text-xs font-semibold uppercase tracking-[0.3em] text-gold">
              Material
            </h2>
            <ul className="mt-3 space-y-2 font-light text-stone-300">
              {product.materials.map((material) => (
                <li key={material} className="flex items-center gap-3">
                  <span
                    className="h-1 w-1 shrink-0 rounded-full bg-gold"
                    aria-hidden="true"
                  />
                  {material}
                </li>
              ))}
            </ul>
          </section>
        </div>
      </div>
    </div>
  );
}
