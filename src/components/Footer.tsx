import Link from "next/link";
import { siteConfig } from "@/config/site";
import { externalLinkProps } from "@/lib/links";

export function Footer() {
  const socialLinks = [
    { label: "Instagram", href: siteConfig.social.instagram },
    { label: "TikTok", href: siteConfig.social.tiktok },
    { label: "Shopee", href: siteConfig.marketplace.shopee.storeUrl },
    { label: "TikTok Shop", href: siteConfig.marketplace.tiktokShop.storeUrl },
  ];

  return (
    <footer className="mt-auto border-t border-white/10 bg-coal/60">
      <div className="mx-auto grid max-w-6xl gap-10 px-4 py-14 sm:grid-cols-3">
        <section>
          <p className="font-display text-2xl font-semibold tracking-[0.25em] text-cream">
            WIGUNA
          </p>
          <p className="mt-4 text-sm leading-relaxed text-stone-400">
            {siteConfig.tagline}. Fashion multifungsi yang dirancang untuk gaya
            hidup urban satu item, banyak cara pakai.
          </p>
          <Link
            href="/profil"
            className="mt-4 inline-block text-sm font-medium text-gold transition hover:text-champagne"
          >
            Baca profil perusahaan →
          </Link>
        </section>

        <section>
          <h2 className="text-xs font-semibold uppercase tracking-[0.2em] text-gold">
            Hubungi Kami
          </h2>
          <ul className="mt-4 space-y-2.5 text-sm">
            <li>
              <a
                href={`mailto:${siteConfig.contact.email}`}
                className="text-stone-300 transition hover:text-champagne"
              >
                {siteConfig.contact.email}
              </a>
            </li>
            <li>
              <a
                href={siteConfig.contact.whatsapp}
                {...externalLinkProps}
                className="text-stone-300 transition hover:text-champagne"
              >
                WhatsApp
              </a>
            </li>
          </ul>
        </section>

        <section>
          <h2 className="text-xs font-semibold uppercase tracking-[0.2em] text-gold">
            Ikuti &amp; Belanja
          </h2>
          <ul className="mt-4 flex flex-wrap gap-2">
            {socialLinks.map((link) => (
              <li key={link.label}>
                {/* min 44x44px touch target (FR-1.3) */}
                <a
                  href={link.href}
                  {...externalLinkProps}
                  className="btn-glass flex min-h-11 items-center px-5 text-sm font-medium"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </section>
      </div>
      <div className="border-t border-white/10 py-5 text-center text-xs tracking-wide text-stone-500">
        © {new Date().getFullYear()} Wiguna. Seluruh transaksi dilakukan di
        toko resmi kami di Shopee &amp; TikTok Shop.
      </div>
    </footer>
  );
}
