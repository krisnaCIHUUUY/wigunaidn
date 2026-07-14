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
      className="glass group overflow-hidden rounded-3xl transition duration-300 hover:-translate-y-1 hover:border-gold/40 hover:shadow-2xl hover:shadow-gold/10 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold"
    >
      <div className="relative aspect-square overflow-hidden bg-coal">
        <Image
          src={cover.src}
          alt={cover.alt}
          fill
          loading="lazy"
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
          className="object-cover transition duration-500 group-hover:scale-105"
        />
        {product.isBestSeller && (
          <span className="btn-gold absolute left-4 top-4 rounded-full px-3.5 py-1 text-[11px] font-semibold uppercase tracking-[0.12em]">
            Best Seller
          </span>
        )}
      </div>
      <div className="p-5">
        <p className="text-[11px] font-medium uppercase tracking-[0.2em] text-gold">
          {categoryLabels[product.category]}
        </p>
        <h3 className="mt-2 font-display text-xl font-semibold text-cream transition group-hover:text-champagne">
          {product.name}
        </h3>
        {product.transformation && (
          <p className="mt-1 text-sm text-stone-400">
            {product.transformation}
          </p>
        )}
        <p className="mt-3 text-sm font-semibold tracking-wide text-champagne">
          {formatIDR(product.price)}
        </p>
      </div>
    </Link>
  );
}
