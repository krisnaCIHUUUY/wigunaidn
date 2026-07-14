import Image from "next/image";
import Link from "next/link";
import type { Product } from "@/lib/products";
import { categoryLabels } from "@/lib/products";
import { formatIDR } from "@/lib/format";

export function ProductCard({ product }: { product: Product }) {
  const cover = product.images[0];

  return (
    <Link
      href={`/products/${product.slug}`}
      className="group overflow-hidden rounded-2xl border border-neutral-200 bg-white transition hover:-translate-y-0.5 hover:shadow-md focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand"
    >
      <div className="relative aspect-square bg-neutral-100">
        <Image
          src={cover.src}
          alt={cover.alt}
          fill
          loading="lazy"
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
          className="object-cover transition duration-300 group-hover:scale-105"
        />
        {product.isBestSeller && (
          <span className="absolute left-3 top-3 rounded-full bg-brand px-3 py-1 text-xs font-semibold text-white">
            Best Seller
          </span>
        )}
      </div>
      <div className="p-4">
        <p className="text-xs font-medium uppercase tracking-wide text-neutral-500">
          {categoryLabels[product.category]}
        </p>
        <h3 className="mt-1 font-semibold text-neutral-900 group-hover:text-brand">
          {product.name}
        </h3>
        {product.transformation && (
          <p className="mt-1 text-sm text-neutral-600">
            {product.transformation}
          </p>
        )}
        <p className="mt-2 font-semibold text-neutral-900">
          {formatIDR(product.price)}
        </p>
      </div>
    </Link>
  );
}
