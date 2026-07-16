import type { Metadata } from "next";
import { Cormorant, Montserrat } from "next/font/google";
import "./globals.css";
import { siteConfig } from "@/config/site";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

// Pasangan tipografi luxury fashion: serif display + sans grotesque.
// Weight 700 sengaja tidak dimuat — tidak ada font-bold di seluruh situs.
const cormorant = Cormorant({
  variable: "--font-cormorant",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
});

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: `${siteConfig.name} — ${siteConfig.tagline}`,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  openGraph: {
    type: "website",
    locale: siteConfig.locale,
    siteName: siteConfig.name,
    title: `${siteConfig.name} — ${siteConfig.tagline}`,
    description: siteConfig.description,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="id"
      className={`${cormorant.variable} ${montserrat.variable} h-full antialiased`}
      suppressHydrationWarning
    >
      <body className="flex min-h-full flex-col bg-ink font-sans text-cream">
        {/* Gate animasi reveal: konten hanya disembunyikan bila JS + observer
            tersedia, sehingga HTML statis tetap terbaca tanpa JS (NFR-3). */}
        <script
          dangerouslySetInnerHTML={{
            __html:
              "if('IntersectionObserver' in window)document.documentElement.classList.add('js');",
          }}
        />
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
