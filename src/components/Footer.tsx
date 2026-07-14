import Link from "next/link";
import { siteConfig } from "@/config/site";

const externalLinkProps = {
  target: "_blank",
  rel: "noopener noreferrer",
} as const;

export function Footer() {
  const socialLinks = [
    { label: "Instagram", href: siteConfig.social.instagram },
    { label: "TikTok", href: siteConfig.social.tiktok },
    { label: "Shopee", href: siteConfig.marketplace.shopee.storeUrl },
    { label: "TikTok Shop", href: siteConfig.marketplace.tiktokShop.storeUrl },
  ];

  return (
    <footer className="mt-auto border-t border-neutral-200 bg-neutral-50">
      <div className="mx-auto grid max-w-6xl gap-10 px-4 py-12 sm:grid-cols-3">
        <section>
          <h2 className="text-sm font-semibold uppercase tracking-wide text-neutral-500">
            Tentang Wiguna
          </h2>
          <p className="mt-3 text-sm leading-relaxed text-neutral-700">
            {siteConfig.tagline}. Fashion multifungsi yang dirancang untuk
            gaya hidup urban — satu item, banyak cara pakai.
          </p>
          <Link
            href="/profil"
            className="mt-3 inline-block text-sm font-medium text-brand hover:underline"
          >
            Baca profil perusahaan →
          </Link>
        </section>

        <section>
          <h2 className="text-sm font-semibold uppercase tracking-wide text-neutral-500">
            Hubungi Kami
          </h2>
          <ul className="mt-3 space-y-2 text-sm">
            <li>
              <a
                href={`mailto:${siteConfig.contact.email}`}
                className="text-neutral-700 hover:text-brand"
              >
                {siteConfig.contact.email}
              </a>
            </li>
            <li>
              <a
                href={siteConfig.contact.whatsapp}
                {...externalLinkProps}
                className="text-neutral-700 hover:text-brand"
              >
                WhatsApp
              </a>
            </li>
          </ul>
        </section>

        <section>
          <h2 className="text-sm font-semibold uppercase tracking-wide text-neutral-500">
            Ikuti &amp; Belanja
          </h2>
          <ul className="mt-3 flex flex-wrap gap-2">
            {socialLinks.map((link) => (
              <li key={link.label}>
                {/* min 44x44px touch target (FR-1.3) */}
                <a
                  href={link.href}
                  {...externalLinkProps}
                  className="flex min-h-11 items-center rounded-lg border border-neutral-300 bg-white px-4 text-sm font-medium text-neutral-700 transition hover:border-brand hover:text-brand"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </section>
      </div>
      <div className="border-t border-neutral-200 py-4 text-center text-xs text-neutral-500">
        © {new Date().getFullYear()} Wiguna. Seluruh transaksi dilakukan di
        toko resmi kami di Shopee &amp; TikTok Shop.
      </div>
    </footer>
  );
}
