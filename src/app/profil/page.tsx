import Link from "next/link";
import type { Metadata } from "next";
import { siteConfig } from "@/config/site";
import { externalLinkProps } from "@/lib/links";

export const metadata: Metadata = {
  title: "Profil Perusahaan",
  description:
    "Company Profile Wiguna — brand fashion multifungsi berbasis kearifan lokal pesisir Muria dan konsep zero waste. Satu produk, banyak fungsi.",
};

const nilai = [
  {
    no: "01",
    title: "Innovation",
    desc: "Menghadirkan produk dengan berbagai fungsi dalam satu desain.",
  },
  {
    no: "02",
    title: "Sustainability",
    desc: "Memanfaatkan bahan secara maksimal dan mengurangi limbah produksi.",
  },
  {
    no: "03",
    title: "Local Culture",
    desc: "Mengangkat identitas budaya pesisir Muria melalui batik dan tenun lokal.",
  },
  {
    no: "04",
    title: "Functionality",
    desc: "Mengutamakan kenyamanan dan kemudahan penggunaan.",
  },
  {
    no: "05",
    title: "Quality",
    desc: "Menjamin kualitas bahan dan proses produksi yang baik.",
  },
];

const produk = [
  {
    name: "ToteVest 2 in 1",
    sub: "Totebag + Vest",
    desc: "Inovasi fashion multifungsi yang menggabungkan fungsi tote bag dan vest dalam satu produk, dirancang untuk mendukung aktivitas pengguna yang dinamis tanpa perlu membawa banyak barang.",
    keunggulan: [
      "Tas dan vest dalam satu produk",
      "Praktis untuk mobilitas tinggi",
      "Menggunakan denim dan batik pesisir Muria",
      "Unik dan bernilai budaya",
      "Fashionable dan fungsional",
    ],
  },
  {
    name: "Topi 3 in 1",
    sub: "Topi + Sling Bag + Obi Belt",
    desc: "Produk multifungsi yang dapat bertransformasi menjadi sling bag dan obi belt, dirancang untuk memberikan fleksibilitas penggunaan sesuai kebutuhan pengguna.",
    keunggulan: [
      "Tiga fungsi dalam satu produk",
      "Ringan dan mudah dibawa",
      "Menggunakan denim dan batik pesisir Muria",
      "Desain unik dan inovatif",
      "Cocok untuk berbagai aktivitas",
    ],
  },
  {
    name: "Bag Charm Series",
    sub: "Aksesori Zero Waste",
    desc: "Aksesoris yang dibuat dari sisa bahan produksi utama sebagai implementasi prinsip zero waste — memastikan tidak ada bahan yang terbuang sia-sia.",
    keunggulan: [
      "Memanfaatkan sisa bahan produksi menjadi produk bernilai",
      "Perpaduan denim dan batik pesisir Muria",
      "Cocok sebagai gantungan kunci maupun bag charm",
      "Tersedia dalam varian GPS dan Uniq",
      "Ringan, ringkas, dan mudah digunakan sehari-hari",
    ],
  },
];

const keunggulan = [
  {
    title: "Multifungsi",
    desc: "Satu produk memiliki lebih dari satu fungsi.",
  },
  {
    title: "Zero Waste",
    desc: "Sisa bahan dimanfaatkan jadi produk bernilai jual.",
  },
  {
    title: "Local Heritage",
    desc: "Mengangkat Batik Bakaran Pati, Batik Kudus, dan Tenun Troso Jepara.",
  },
  {
    title: "Sustainable Fashion",
    desc: "Mendorong konsumsi fashion yang lebih bertanggung jawab.",
  },
  {
    title: "Innovative Design",
    desc: "Produk unik yang belum banyak ditemukan di pasaran.",
  },
];

const dampak = [
  {
    title: "Dampak Sosial",
    items: [
      "Mendukung pengrajin batik lokal.",
      "Memperkenalkan budaya pesisir Muria kepada generasi muda.",
    ],
  },
  {
    title: "Dampak Ekonomi",
    items: [
      "Membuka peluang kolaborasi dengan UMKM lokal.",
      "Meningkatkan nilai tambah produk budaya daerah.",
    ],
  },
  {
    title: "Dampak Lingkungan",
    items: [
      "Mengurangi limbah tekstil melalui konsep zero waste.",
      "Mendorong penggunaan produk multifungsi yang lebih berkelanjutan.",
    ],
  },
];

const misi = [
  "Mengembangkan produk fashion multifungsi yang inovatif dan bernilai guna tinggi, serta mengangkat dan melestarikan kekayaan budaya pesisir Muria melalui penggunaan batik lokal.",
  "Menerapkan prinsip keberlanjutan melalui pemanfaatan bahan secara optimal dan minim limbah.",
  "Memberikan solusi fashion praktis yang sesuai dengan kebutuhan masyarakat modern.",
  "Menciptakan produk berkualitas yang menggabungkan fungsi, estetika, dan nilai budaya.",
];

const solusi = [
  "Memiliki lebih dari satu kegunaan.",
  "Mengoptimalkan penggunaan bahan baku.",
  "Mengangkat nilai budaya lokal melalui batik pesisir Muria.",
  "Mengurangi limbah produksi melalui konsep zero waste.",
];

export default function ProfilPage() {
  return (
    <div className="mx-auto max-w-4xl px-4 py-14">
      {/* Header */}
      <header className="text-center">
        <p className="text-xs font-semibold uppercase tracking-[0.35em] text-gold">
          Company Profile 2026
        </p>
        <h1 className="mt-4 font-display text-5xl font-medium text-cream md:text-6xl">
          WIGUNA
        </h1>
        <p className="mt-6 font-display text-2xl italic text-champagne md:text-3xl">
          &ldquo;One Product, Many Function.&rdquo;
        </p>
        <p className="mx-auto mt-4 max-w-xl text-sm font-light leading-relaxed text-stone-300 md:text-base">
          Fashion multifungsi berbasis kearifan lokal dan zero waste.
        </p>
      </header>

      {/* Tentang */}
      <section className="mt-16">
        <h2 className="font-display text-3xl font-semibold text-cream">
          Tentang Wiguna
        </h2>
        <div className="mt-4 space-y-4 font-light leading-relaxed text-stone-300">
          <p>
            Wiguna merupakan brand fashion kreatif yang menghadirkan produk
            multifungsi berbasis budaya lokal dengan mengusung konsep
            keberlanjutan (<em>sustainable fashion</em>). Kami mengombinasikan
            kain denim dengan kekayaan batik pesisir Muria — Batik Bakaran Pati,
            Batik Kudus, dan Tenun Troso Jepara — untuk menciptakan produk yang
            tidak hanya fungsional, tetapi juga memiliki nilai budaya dan
            estetika.
          </p>
          <p>
            Melalui inovasi desain, Wiguna menghadirkan berbagai produk yang
            mampu bertransformasi menjadi lebih dari satu fungsi, sehingga dapat
            menunjang mobilitas masyarakat modern sekaligus mengurangi konsumsi
            produk fashion yang berlebihan.
          </p>
        </div>
      </section>

      {/* Latar belakang */}
      <section className="glass mt-12 rounded-3xl p-8">
        <p className="text-xs font-semibold uppercase tracking-[0.3em] text-gold">
          Latar Belakang
        </p>
        <h2 className="mt-3 font-display text-3xl font-semibold text-cream">
          Mengapa Wiguna Hadir?
        </h2>
        <div className="mt-4 space-y-4 font-light leading-relaxed text-stone-300">
          <p>
            Industri fashion menjadi salah satu penyumbang limbah tekstil
            terbesar di dunia. Di sisi lain, masyarakat modern membutuhkan
            produk yang praktis, multifungsi, dan mudah dibawa dalam berbagai
            aktivitas.
          </p>
          <p>
            Melihat kondisi tersebut, Wiguna hadir dengan solusi berupa produk
            fashion multifungsi yang:
          </p>
        </div>
        <ul className="mt-4 space-y-3 font-light leading-relaxed text-stone-300">
          {solusi.map((item) => (
            <li key={item} className="flex items-start gap-3">
              <span
                className="mt-2.5 h-1 w-1 shrink-0 rounded-full bg-gold"
                aria-hidden="true"
              />
              {item}
            </li>
          ))}
        </ul>
      </section>

      {/* Visi & Misi */}
      <div className="mt-12 grid gap-6 md:grid-cols-2">
        <section className="glass rounded-3xl p-8">
          <h2 className="font-display text-3xl font-semibold text-cream">
            Visi
          </h2>
          <p className="mt-4 font-light leading-relaxed text-stone-300">
            Menjadi brand fashion multifungsi berbasis budaya lokal yang
            inovatif, berkelanjutan, dan dikenal sebagai pelopor produk fashion{" "}
            <em>transformable</em> di Indonesia.
          </p>
        </section>
        <section className="glass rounded-3xl p-8">
          <h2 className="font-display text-3xl font-semibold text-cream">
            Misi
          </h2>
          <ol className="mt-4 space-y-3 font-light leading-relaxed text-stone-300">
            {misi.map((item, i) => (
              <li key={item} className="flex items-start gap-3">
                <span className="mt-0.5 font-display text-lg leading-none text-gold">
                  {i + 1}
                </span>
                {item}
              </li>
            ))}
          </ol>
        </section>
      </div>

      {/* Nilai perusahaan */}
      <section className="mt-16">
        <p className="text-xs font-semibold uppercase tracking-[0.3em] text-gold">
          Nilai Perusahaan
        </p>
        <h2 className="mt-3 font-display text-3xl font-semibold text-cream">
          Yang Kami Pegang
        </h2>
        <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {nilai.map((n) => (
            <div key={n.no} className="glass rounded-2xl p-6">
              <span className="font-display text-3xl font-medium text-champagne">
                {n.no}
              </span>
              <h3 className="mt-3 text-sm font-semibold uppercase tracking-[0.15em] text-cream">
                {n.title}
              </h3>
              <p className="mt-2 text-sm font-light leading-relaxed text-stone-400">
                {n.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Produk */}
      <section className="mt-16">
        <p className="text-xs font-semibold uppercase tracking-[0.3em] text-gold">
          Produk
        </p>
        <h2 className="mt-3 font-display text-3xl font-semibold text-cream">
          Lini Produk Kami
        </h2>
        <div className="mt-6 space-y-6">
          {produk.map((p) => (
            <article key={p.name} className="glass rounded-3xl p-8">
              <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1">
                <h3 className="font-display text-2xl font-medium text-cream">
                  {p.name}
                </h3>
                <span className="text-xs font-medium uppercase tracking-[0.15em] text-gold">
                  {p.sub}
                </span>
              </div>
              <p className="mt-3 font-light leading-relaxed text-stone-300">
                {p.desc}
              </p>
              <ul className="mt-4 grid gap-2 sm:grid-cols-2">
                {p.keunggulan.map((k) => (
                  <li
                    key={k}
                    className="flex items-start gap-2.5 text-sm font-light text-stone-400"
                  >
                    <span
                      className="mt-2 h-1 w-1 shrink-0 rounded-full bg-gold"
                      aria-hidden="true"
                    />
                    {k}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </section>

      {/* Keunggulan kompetitif */}
      <section className="mt-16">
        <p className="text-xs font-semibold uppercase tracking-[0.3em] text-gold">
          Keunggulan Kompetitif
        </p>
        <h2 className="mt-3 font-display text-3xl font-semibold text-cream">
          Mengapa Memilih Wiguna?
        </h2>
        <dl className="mt-6 divide-y divide-white/10 border-y border-white/10">
          {keunggulan.map((k) => (
            <div
              key={k.title}
              className="flex flex-col gap-1 py-5 md:flex-row md:gap-8"
            >
              <dt className="font-display text-xl font-medium text-champagne md:w-56 md:shrink-0">
                {k.title}
              </dt>
              <dd className="font-light leading-relaxed text-stone-300">
                {k.desc}
              </dd>
            </div>
          ))}
        </dl>
      </section>

      {/* Dampak */}
      <section className="mt-16">
        <p className="text-xs font-semibold uppercase tracking-[0.3em] text-gold">
          Dampak &amp; Komitmen
        </p>
        <h2 className="mt-3 font-display text-3xl font-semibold text-cream">
          Dampak yang Ingin Kami Ciptakan
        </h2>
        <div className="mt-6 grid gap-4 md:grid-cols-3">
          {dampak.map((d) => (
            <div key={d.title} className="glass rounded-2xl p-6">
              <h3 className="font-display text-xl font-medium text-cream">
                {d.title}
              </h3>
              <ul className="mt-3 space-y-2.5">
                {d.items.map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-2.5 text-sm font-light leading-relaxed text-stone-300"
                  >
                    <span
                      className="mt-2 h-1 w-1 shrink-0 rounded-full bg-gold"
                      aria-hidden="true"
                    />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* Closing */}
      <section className="glass-iridescent mt-16 rounded-3xl p-10 text-center">
        <h2 className="font-display text-3xl font-semibold text-cream">
          Bersama Wiguna
        </h2>
        <p className="mx-auto mt-4 max-w-2xl font-light leading-relaxed text-stone-300">
          Kami percaya bahwa satu produk dapat memberikan lebih banyak manfaat
          tanpa mengorbankan estetika, budaya, maupun keberlanjutan. Melalui
          inovasi fashion multifungsi berbasis budaya lokal, Wiguna berkomitmen
          menghadirkan solusi yang praktis, bernilai, dan ramah lingkungan bagi
          masyarakat modern.
        </p>
        <p className="mt-6 font-display text-2xl italic text-champagne">
          &ldquo;One Product, Many Function.&rdquo;
        </p>
      </section>

      {/* Kontak */}
      <section className="mt-12 text-center">
        <h2 className="font-display text-3xl font-semibold text-cream">
          Hubungi Kami
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
            {...externalLinkProps}
            className="btn-glass inline-flex min-h-11 items-center px-7 text-sm font-medium uppercase tracking-[0.1em]"
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
