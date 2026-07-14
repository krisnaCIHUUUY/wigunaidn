import Link from "next/link";
import type { Metadata } from "next";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = {
  title: "Profil Perusahaan",
  description:
    "Kisah, visi, dan misi Wiguna — brand fashion multifungsi asal Indonesia yang lahir dari ide sederhana: satu item, banyak fungsi.",
};

export default function ProfilPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-14">
      <p className="text-xs font-semibold uppercase tracking-[0.35em] text-gold">
        The House of Wiguna
      </p>
      <h1 className="mt-3 font-display text-4xl font-semibold text-cream md:text-5xl">
        Profil Perusahaan
      </h1>

      {/* Brand story (FR-5.1) */}
      <section className="mt-10">
        <h2 className="font-display text-3xl font-semibold text-cream">
          Kisah Kami
        </h2>
        <div className="mt-4 space-y-4 font-light leading-relaxed text-stone-300">
          <p>
            Wiguna lahir dari sebuah pengamatan sederhana: lemari kita penuh,
            tapi rasanya selalu ada yang kurang. Kami percaya jawabannya bukan
            menambah barang — melainkan membuat setiap barang bekerja lebih
            keras.
          </p>
          <p>
            Dari situ lahirlah konsep fashion multifungsi Wiguna: rompi yang
            dalam hitungan detik berubah menjadi tote bag, bucket hat yang
            punya dua wajah, dan obi belt yang bisa membentuk tiga siluet
            berbeda. Satu item, banyak fungsi — dirancang dan diproduksi di
            Indonesia.
          </p>
          {/* TODO: tambahkan foto brand/lifestyle resmi di seksi ini */}
        </div>
      </section>

      <section className="glass mt-12 rounded-3xl p-8">
        <h2 className="font-display text-3xl font-semibold text-cream">Visi</h2>
        <p className="mt-3 font-light leading-relaxed text-stone-300">
          Menjadi brand fashion multifungsi terdepan di Indonesia yang
          membuktikan bahwa gaya, kepraktisan, dan konsumsi yang bijak bisa
          hadir dalam satu produk.
        </p>
      </section>

      <section className="glass mt-6 rounded-3xl p-8">
        <h2 className="font-display text-3xl font-semibold text-cream">Misi</h2>
        <ul className="mt-4 space-y-3 font-light leading-relaxed text-stone-300">
          {[
            "Merancang produk fashion yang selalu memiliki lebih dari satu fungsi nyata.",
            "Menggunakan material berkualitas dan proses produksi lokal yang bertanggung jawab.",
            "Membangun kepercayaan melalui kanal penjualan resmi yang mudah diverifikasi.",
          ].map((misi) => (
            <li key={misi} className="flex items-start gap-3">
              <span
                className="mt-2.5 h-1 w-1 shrink-0 rounded-full bg-gold"
                aria-hidden="true"
              />
              {misi}
            </li>
          ))}
        </ul>
      </section>

      {/* Kontak & kolaborasi (FR-5.2) */}
      <section className="glass-iridescent mt-12 rounded-3xl p-8 text-center">
        <h2 className="font-display text-3xl font-semibold text-cream">
          Kolaborasi &amp; Media
        </h2>
        <p className="mx-auto mt-3 max-w-md text-sm font-light leading-relaxed text-stone-300">
          Tertarik bekerja sama, membeli dalam jumlah besar, atau meliput
          Wiguna? Hubungi kami:
        </p>
        <div className="mt-6 flex flex-wrap justify-center gap-4">
          <a
            href={`mailto:${siteConfig.contact.email}`}
            className="btn-gold inline-flex min-h-11 items-center rounded-full px-7 text-sm font-semibold uppercase tracking-[0.1em]"
          >
            Email Kami
          </a>
          <a
            href={siteConfig.contact.whatsapp}
            target="_blank"
            rel="noopener noreferrer"
            className="glass inline-flex min-h-11 items-center rounded-full px-7 text-sm font-medium uppercase tracking-[0.1em] text-cream transition hover:border-gold/50 hover:text-champagne"
          >
            WhatsApp
          </a>
        </div>
      </section>

      <div className="mt-12">
        <Link
          href="/products"
          className="text-sm font-medium uppercase tracking-[0.15em] text-gold transition hover:text-champagne"
        >
          ← Kembali ke koleksi produk
        </Link>
      </div>
    </div>
  );
}
