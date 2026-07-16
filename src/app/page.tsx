import Image from "next/image";
import Link from "next/link";
import { siteConfig } from "@/config/site";
import { externalLinkProps } from "@/lib/links";
import { getBestSellers } from "@/lib/products";
import { ProductCard } from "@/components/ProductCard";
import { Reveal } from "@/components/Reveal";

/* Ikon SVG stroke-konsisten (tanpa emoji) */
function IconLayers() {
  return (
    <svg
      width="28"
      height="28"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M12 2 2 7l10 5 10-5-10-5Z" />
      <path d="m2 17 10 5 10-5" />
      <path d="m2 12 10 5 10-5" />
    </svg>
  );
}
function IconGem() {
  return (
    <svg
      width="28"
      height="28"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M6 3h12l4 6-10 13L2 9l4-6Z" />
      <path d="M11 3 8 9l4 13 4-13-3-6" />
      <path d="M2 9h20" />
    </svg>
  );
}
function IconShield() {
  return (
    <svg
      width="28"
      height="28"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10Z" />
      <path d="m9 12 2 2 4-4" />
    </svg>
  );
}

const brandValues = [
  {
    icon: <IconLayers />,
    title: "Satu Item, Banyak Fungsi",
    body: "Setiap koleksi dirancang dengan minimal dua cara pakai rompi menjadi tote bag, topi menjadi pouch, satu belt membentuk tiga siluet.",
  },
  {
    icon: <IconGem />,
    title: "Material Terkurasi",
    body: "Kanvas 12oz, tenun tangan, dan hardware pilihan. Dirancang serta diproduksi di Indonesia dengan standar mutu yang tidak berkompromi.",
  },
  {
    icon: <IconShield />,
    title: "Keaslian Terjamin",
    body: "Wiguna hanya dijual melalui toko resmi terverifikasi di Shopee dan TikTok Shop. Tanpa reseller, tanpa tiruan.",
  },
];

const storySteps = [
  {
    number: "01",
    title: "Berawal dari Kejenuhan",
    body: "Lemari yang penuh namun terasa selalu kurang. Wiguna lahir dari keyakinan bahwa jawabannya bukan menambah barang melainkan membuat setiap barang bekerja lebih keras.",
  },
  {
    number: "02",
    title: "Dirancang untuk Berubah",
    body: "Setiap pola dipikirkan dua kali: sebagai busana, dan sebagai fungsi keduanya. Ritsleting, lipatan, dan panel ditempatkan agar transformasi terjadi dalam hitungan detik.",
  },
  {
    number: "03",
    title: "Menemani Setiap Perjalanan",
    body: "Dari komuter pagi hingga perjalanan akhir pekan satu item Wiguna menggantikan dua, meringankan langkah tanpa mengorbankan gaya.",
  },
];

export default function HomePage() {
  const bestSellers = getBestSellers();

  return (
    <>
      {/* ============ Hero — Liquid Glass (FR-2.1) ============ */}
      <section className="relative overflow-hidden">
        {/* Dekorasi liquid blobs */}
        <div
          className="liquid-blob left-[-10%] top-[-15%] h-[28rem] w-[28rem]"
          style={{
            background:
              "radial-gradient(circle, rgba(198,161,91,0.55), transparent 65%)",
          }}
        />
        <div
          className="liquid-blob bottom-[-20%] right-[-8%] h-[26rem] w-[26rem]"
          style={{
            background:
              "radial-gradient(circle, rgba(232,213,164,0.35), transparent 60%)",
            animationDelay: "-9s",
          }}
        />

        <div className="relative mx-auto grid max-w-6xl items-center gap-10 px-4 pb-20 pt-16 md:grid-cols-2 md:pb-28 md:pt-24">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.35em] text-gold">
              Multifunctional Fashion Indonesia
            </p>
            <h1 className="mt-5 font-display text-5xl font-semibold leading-[1.05] text-cream md:text-6xl lg:text-7xl">
              Satu Item,
              <br />
              <span className="text-champagne italic">Banyak Fungsi.</span>
            </h1>
            <p className="mt-6 max-w-md text-base font-light leading-relaxed text-stone-300">
              Rompi yang berubah menjadi tote bag. Bucket hat dengan dua wajah.
              Obi belt yang membentuk tiga siluet. Dirancang untuk mereka yang
              bergerak tanpa mengorbankan keanggunan.
            </p>
            <div className="mt-10 flex flex-wrap items-center gap-4">
              <Link
                href="/products"
                className="btn-gold rounded-full px-9 py-4 text-sm font-semibold uppercase tracking-[0.12em]"
              >
                Jelajahi Koleksi
              </Link>
              <Link
                href="/cara-belanja"
                className="btn-glass px-8 py-4 text-sm font-medium uppercase tracking-[0.12em]"
              >
                Cara Belanja
              </Link>
            </div>
            <p className="mt-8 text-xs uppercase tracking-[0.2em] text-stone-500">
              Tersedia eksklusif di toko resmi Shopee &amp; TikTok Shop
            </p>
          </div>

          {/* Foto hero dalam bingkai glass */}
          <div className="glass-iridescent relative rounded-[2rem] p-3">
            <div className="relative aspect-[4/5] overflow-hidden rounded-[1.6rem] bg-coal">
              <Image
                src="/hero.webp"
                alt="Dua model mengenakan koleksi Wiguna — vest denim berpanel batik dan bucket hat Seri Laras"
                fill
                priority
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover"
              />
            </div>
            <div className="glass-strong absolute -bottom-5 left-1/2 w-max -translate-x-1/2 rounded-full px-6 py-2.5">
              <p className="text-xs font-medium uppercase tracking-[0.2em] text-champagne">
                Rompi ↔ Tote Bag
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Divider tipis emas */}
      <div className="mx-auto h-px max-w-6xl bg-gradient-to-r from-transparent via-gold/40 to-transparent" />

      {/* ============ Showcase — Best Sellers (FR-2.2) ============ */}
      <section className="mx-auto max-w-6xl px-4 py-20 md:py-24">
        <Reveal>
          <p className="text-center text-xs font-semibold uppercase tracking-[0.35em] text-gold">
            The Collection
          </p>
          <h2 className="mt-4 text-center font-display text-4xl font-semibold text-cream md:text-5xl">
            Karya Paling Dicari
          </h2>
          <p className="mx-auto mt-4 max-w-lg text-center text-sm font-light leading-relaxed text-stone-400">
            Kurasi terbaik dari koleksi Wiguna setiap karya membawa lebih dari
            satu kemungkinan.
          </p>
        </Reveal>
        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {bestSellers.map((product, i) => (
            <Reveal key={product.slug} delayMs={i * 80}>
              <ProductCard product={product} />
            </Reveal>
          ))}
        </div>
        {/* View More (FR-2.3) */}
        <Reveal className="mt-12 text-center">
          <Link
            href="/products"
            className="btn-glass inline-block px-9 py-4 text-sm font-medium uppercase tracking-[0.12em]"
          >
            Lihat Seluruh Koleksi
          </Link>
        </Reveal>
      </section>

      {/* ============ Storytelling ============ */}
      <section className="relative overflow-hidden border-y border-white/10 bg-coal/40">
        <div
          className="liquid-blob right-[-12%] top-[10%] h-[22rem] w-[22rem]"
          style={{
            background:
              "radial-gradient(circle, rgba(198,161,91,0.35), transparent 60%)",
            animationDelay: "-5s",
          }}
        />
        <div className="relative mx-auto max-w-6xl px-4 py-20 md:py-28">
          <Reveal>
            <p className="text-xs font-semibold uppercase tracking-[0.35em] text-gold">
              Our Story
            </p>
            <h2 className="mt-4 max-w-xl font-display text-4xl font-semibold leading-tight text-cream md:text-5xl">
              Cerita di Balik Setiap Transformasi
            </h2>
          </Reveal>
          <div className="mt-14 grid gap-6 md:grid-cols-3">
            {storySteps.map((step, i) => (
              <Reveal key={step.number} delayMs={i * 100}>
                <article className="glass h-full rounded-3xl p-8">
                  <p className="font-display text-5xl font-medium text-gold/60">
                    {step.number}
                  </p>
                  <h3 className="mt-5 font-display text-2xl font-semibold text-cream">
                    {step.title}
                  </h3>
                  <p className="mt-3 text-sm font-light leading-relaxed text-stone-400">
                    {step.body}
                  </p>
                </article>
              </Reveal>
            ))}
          </div>
          <Reveal className="mt-10">
            <Link
              href="/profil"
              className="text-sm font-medium uppercase tracking-[0.15em] text-gold transition hover:text-champagne"
            >
              Baca kisah lengkap kami →
            </Link>
          </Reveal>
        </div>
      </section>

      {/* ============ Brand Values ============ */}
      <section className="mx-auto max-w-6xl px-4 py-20 md:py-24">
        <Reveal>
          <p className="text-center text-xs font-semibold uppercase tracking-[0.35em] text-gold">
            House Values
          </p>
          <h2 className="mt-4 text-center font-display text-4xl font-semibold text-cream md:text-5xl">
            Prinsip yang Kami Jahit
          </h2>
        </Reveal>
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {brandValues.map((value, i) => (
            <Reveal key={value.title} delayMs={i * 100}>
              <article className="glass h-full rounded-3xl p-8 text-center transition hover:border-gold/40">
                <span className="mx-auto flex h-14 w-14 items-center justify-center rounded-full border border-gold/40 text-gold">
                  {value.icon}
                </span>
                <h3 className="mt-6 font-display text-2xl font-semibold text-cream">
                  {value.title}
                </h3>
                <p className="mt-3 text-sm font-light leading-relaxed text-stone-400">
                  {value.body}
                </p>
              </article>
            </Reveal>
          ))}
        </div>
      </section>

      {/* ============ Exclusive Membership CTA — Wiguna Circle ============ */}
      {/* Tanpa akun/backend (PRD 1.4): "membership" diarahkan ke kanal
          eksklusif WhatsApp/Instagram untuk akses awal setiap rilisan. */}
      <section className="relative overflow-hidden px-4 pb-24">
        <div
          className="liquid-blob left-[20%] top-[0%] h-[24rem] w-[36rem]"
          style={{
            background:
              "radial-gradient(circle, rgba(232,213,164,0.28), transparent 60%)",
            animationDelay: "-13s",
          }}
        />
        <Reveal className="relative mx-auto max-w-4xl">
          <div className="glass-iridescent rounded-[2.5rem] px-6 py-14 text-center md:px-16 md:py-16">
            <p className="text-xs font-semibold uppercase tracking-[0.35em] text-gold">
              Wiguna Circle
            </p>
            <h2 className="mt-4 font-display text-4xl font-semibold leading-tight text-cream md:text-5xl">
              Lingkar Eksklusif untuk
              <br />
              <span className="text-champagne italic">Mereka yang Pertama</span>
            </h2>
            <p className="mx-auto mt-5 max-w-xl text-sm font-light leading-relaxed text-stone-300">
              Bergabunglah dengan Wiguna Circle kanal terbatas tempat kami
              membagikan akses awal setiap rilisan, cerita di balik desain, dan
              penawaran yang tidak pernah kami umumkan di tempat lain.
            </p>
            <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
              <a
                href={siteConfig.contact.whatsapp}
                {...externalLinkProps}
                className="btn-gold rounded-full px-9 py-4 text-sm font-semibold uppercase tracking-[0.12em]"
              >
                Gabung via WhatsApp
              </a>
              <a
                href={siteConfig.social.instagram}
                {...externalLinkProps}
                className="btn-glass px-8 py-4 text-sm font-medium uppercase tracking-[0.12em]"
              >
                Ikuti di Instagram
              </a>
            </div>
            <p className="mt-6 text-xs uppercase tracking-[0.2em] text-stone-500">
              Tanpa biaya undangan terbatas setiap musim
            </p>
          </div>
        </Reveal>
      </section>
    </>
  );
}
