# Wiguna Official Website

Landing page & katalog produk resmi Wiguna — brand fashion multifungsi (rompi transformable, bucket hat convertible, obi belt). Situs statis tanpa backend; seluruh transaksi diarahkan ke toko resmi di **Shopee** dan **TikTok Shop**.

Spesifikasi lengkap: [`wiguna-website-prd.md`](./wiguna-website-prd.md)

## Tech Stack

- **Next.js 16** (App Router, `output: "export"` — full static)
- **Tailwind CSS 4**
- **TypeScript**
- Data produk: satu file [`src/data/products.json`](./src/data/products.json) (siap dimigrasikan ke headless CMS di v2)

## Menjalankan

```bash
npm install
npm run dev      # development di http://localhost:3000
npm run build    # static export ke folder out/
npm run lint
```

## Struktur

```
src/
├── app/
│   ├── page.tsx                  # Home (hero + best sellers)
│   ├── products/page.tsx         # Katalog + filter kategori
│   ├── products/[slug]/page.tsx  # Detail produk + JSON-LD + tombol beli
│   ├── cara-belanja/page.tsx     # Panduan belanja Shopee/TikTok Shop
│   ├── profil/page.tsx           # Profil perusahaan
│   ├── sitemap.ts / robots.ts    # SEO
│   └── layout.tsx                # Header + Footer global
├── components/                   # Header, Footer, ProductCard, BuyButtons, dll.
├── config/site.ts                # URL marketplace, sosial media, kontak
├── data/products.json            # ⭐ satu-satunya sumber data produk
└── lib/                          # tipe produk, format harga, analytics events
```

## Menambah / Mengubah Produk

1. Tambahkan entri baru di `src/data/products.json` (ikuti tipe `Product` di `src/lib/products.ts`).
2. Letakkan foto produk di `public/products/<slug>/` (format WebP/AVIF, sertakan foto mode transformasi).
3. `npm run build` — halaman detail, sitemap, dan kartu produk ter-generate otomatis. Tidak ada kode layout yang perlu diubah.

## Sebelum Launch (TODO)

- [ ] Set env `NEXT_PUBLIC_SITE_URL` ke domain produksi (build produksi akan menampilkan peringatan selama masih placeholder), lalu ganti semua URL placeholder di `src/config/site.ts` (marketplace deep-link, sosial media, WhatsApp, email).
- [ ] Ganti gambar placeholder SVG (`public/hero.svg`, `public/products/**`) dengan foto produk asli (WebP/AVIF).
- [ ] Pasang script analytics (Plausible/GA4) di `src/app/layout.tsx` — event tracking sudah disiapkan di `src/lib/analytics.ts` (`buy_now_click`, `marketplace_redirect`).
- [ ] Deploy ke Vercel / Netlify / Cloudflare Pages (folder output: `out/`).

## Deploy

Situs ini 100% statis. Hubungkan repo ke Vercel/Netlify/Cloudflare Pages — build command `npm run build`, output directory `out/`. Setiap push otomatis ter-deploy.
