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
    <div className="mx-auto max-w-3xl px-4 py-12">
      <h1 className="text-3xl font-bold text-neutral-900">
        Profil Perusahaan
      </h1>

      {/* Brand story (FR-5.1) */}
      <section className="mt-8">
        <h2 className="text-xl font-bold text-neutral-900">Kisah Kami</h2>
        <div className="mt-3 space-y-4 leading-relaxed text-neutral-700">
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

      <section className="mt-10">
        <h2 className="text-xl font-bold text-neutral-900">Visi</h2>
        <p className="mt-3 leading-relaxed text-neutral-700">
          Menjadi brand fashion multifungsi terdepan di Indonesia yang
          membuktikan bahwa gaya, kepraktisan, dan konsumsi yang bijak bisa
          hadir dalam satu produk.
        </p>
      </section>

      <section className="mt-10">
        <h2 className="text-xl font-bold text-neutral-900">Misi</h2>
        <ul className="mt-3 list-inside list-disc space-y-2 leading-relaxed text-neutral-700">
          <li>
            Merancang produk fashion yang selalu memiliki lebih dari satu
            fungsi nyata.
          </li>
          <li>
            Menggunakan material berkualitas dan proses produksi lokal yang
            bertanggung jawab.
          </li>
          <li>
            Membangun kepercayaan melalui kanal penjualan resmi yang mudah
            diverifikasi.
          </li>
        </ul>
      </section>

      {/* Kontak & kolaborasi (FR-5.2) */}
      <section className="mt-12 rounded-2xl bg-neutral-50 p-6">
        <h2 className="text-lg font-bold text-neutral-900">
          Kolaborasi &amp; Media
        </h2>
        <p className="mt-2 text-sm leading-relaxed text-neutral-700">
          Tertarik bekerja sama, membeli dalam jumlah besar, atau meliput
          Wiguna? Hubungi kami:
        </p>
        <div className="mt-4 flex flex-wrap gap-3">
          <a
            href={`mailto:${siteConfig.contact.email}`}
            className="inline-flex min-h-11 items-center rounded-full bg-brand px-6 text-sm font-semibold text-white transition hover:bg-brand-dark"
          >
            Email Kami
          </a>
          <a
            href={siteConfig.contact.whatsapp}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex min-h-11 items-center rounded-full border-2 border-neutral-900 px-6 text-sm font-semibold text-neutral-900 transition hover:bg-neutral-900 hover:text-white"
          >
            WhatsApp
          </a>
        </div>
      </section>

      <div className="mt-10">
        <Link href="/products" className="font-medium text-brand hover:underline">
          ← Kembali ke koleksi produk
        </Link>
      </div>
    </div>
  );
}
