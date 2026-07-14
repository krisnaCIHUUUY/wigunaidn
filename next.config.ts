import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Static export (PRD: no backend, hosting statis di Vercel/Netlify/Cloudflare Pages)
  output: "export",
  // Static export tidak mendukung image optimization server-side;
  // siapkan aset dalam format next-gen (WebP/AVIF) langsung di /public.
  images: {
    unoptimized: true,
  },
  trailingSlash: true,
};

export default nextConfig;
