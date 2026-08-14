import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactCompiler: true,
  experimental: {
    /** Inline global CSS into HTML to reduce render-blocking CSS on first paint (LCP). */
    inlineCss: true,
    optimizePackageImports: [
      "lucide-react",
      "framer-motion",
      "@/components",
      "@/sections",
      "@/lib",
    ],
  },
  compress: true,
  async redirects() {
    return [
      {
        source: "/blog/full/:slug",
        destination: "/blog/:slug",
        permanent: true,
      },
      {
        source: "/blog",
        destination: "/blogs",
        permanent: true,
      },
      {
        source: "/blog/:slug",
        destination: "/blogs/:slug",
        permanent: true,
      },
      // Student app aliases (ex-Flutter /app deep links)
      { source: "/sign-up", destination: "/signup", permanent: false },
      { source: "/app", destination: "/home", permanent: false },
      { source: "/app/", destination: "/home", permanent: false },
      { source: "/app/login", destination: "/login", permanent: false },
      { source: "/app/sign-up", destination: "/signup", permanent: false },
      { source: "/app/signup", destination: "/signup", permanent: false },
      { source: "/app/home", destination: "/home", permanent: false },
      { source: "/app/notes", destination: "/generate/notes", permanent: false },
      { source: "/app/pricing", destination: "/pricing", permanent: false },
      { source: "/pricing/success", destination: "/pricing", permanent: false },
      { source: "/app/library", destination: "/library", permanent: false },
      { source: "/app/nyla", destination: "/smartlink", permanent: false },
      { source: "/notes", destination: "/generate/notes", permanent: false },
      { source: "/generate/summary-notes", destination: "/generate/notes", permanent: true },
      { source: "/generate/exam", destination: "/generate/exam-focus", permanent: true },
      { source: "/generate/exam_focus", destination: "/generate/exam-focus", permanent: true },
      { source: "/help/chat", destination: "/home", permanent: true },
      { source: "/help/contact", destination: "/help", permanent: true },
      { source: "/help/faq", destination: "/faqs", permanent: true },
      { source: "/features", destination: "/", permanent: false },
      // Retired /legal hub → marketing legal pages
      { source: "/legal", destination: "/privacy-policy", permanent: true },
      {
        source: "/legal/privacy-policy",
        destination: "/privacy-policy",
        permanent: true,
      },
      {
        source: "/legal/terms-of-service",
        destination: "/terms-of-service",
        permanent: true,
      },
      {
        source: "/legal/privacy-policy-apple",
        destination: "/privacy-policy",
        permanent: true,
      },
      {
        source: "/legal/delete-account-and-data",
        destination: "/privacy-policy",
        permanent: true,
      },
      {
        source: "/legal/web/privacy-policy",
        destination: "/privacy-policy",
        permanent: true,
      },
      {
        source: "/legal/web/refund-policy",
        destination: "/terms-of-service",
        permanent: true,
      },
      {
        source: "/delete-account-and-data",
        destination: "/privacy-policy",
        permanent: true,
      },
      {
        source: "/refund-policy",
        destination: "/terms-of-service",
        permanent: true,
      },
      {
        source: "/legal/:doc",
        destination: "/:doc",
        permanent: true,
      },
    ];
  },
  async rewrites() {
    return [
      {
        source: "/blogs",
        destination: "/blog",
      },
      {
        source: "/blogs/:slug",
        destination: "/blog/:slug",
      },
    ];
  },
};

export default nextConfig;
