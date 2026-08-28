import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactCompiler: true,
  productionBrowserSourceMaps: false,
  experimental: {
    /** Inline global CSS into HTML to reduce render-blocking CSS on first paint (LCP). */
    inlineCss: true,
    /** Absorb intermittent Next 16 workUnitAsyncStorage prerender races. */
    staticGenerationRetryCount: 3,
    optimizePackageImports: [
      "lucide-react",
      "framer-motion",
      "@/components",
      "@/sections",
      "@/lib",
    ],
  },
  compress: true,
  async headers() {
    const csp = [
      "default-src 'self'",
      "base-uri 'self'",
      "object-src 'none'",
      "frame-ancestors 'self'",
      "form-action 'self'",
      "img-src 'self' data: blob: https:",
      "font-src 'self' data: https://fonts.gstatic.com",
      "style-src 'self' 'unsafe-inline' https://fonts.googleapis.com",
      // Next/Firebase/Turnstile/PayPal require script flexibility; tighten further with nonces later.
      "script-src 'self' 'unsafe-inline' 'unsafe-eval' https://www.googletagmanager.com https://www.google-analytics.com https://challenges.cloudflare.com https://www.gstatic.com https://apis.google.com https://appleid.cdn-apple.com https://www.paypal.com https://www.sandbox.paypal.com",
      "connect-src 'self' https: wss:",
      "frame-src 'self' https://challenges.cloudflare.com https://*.firebaseapp.com https://accounts.google.com https://appleid.apple.com https://www.paypal.com https://www.sandbox.paypal.com",
      "worker-src 'self' blob:",
      "upgrade-insecure-requests",
    ].join("; ");

    return [
      {
        source: "/:path*",
        headers: [
          { key: "X-Content-Type-Options", value: "nosniff" },
          { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
          {
            key: "Permissions-Policy",
            value: "camera=(), microphone=(), geolocation=(), payment=(self)",
          },
          { key: "X-Frame-Options", value: "SAMEORIGIN" },
          {
            key: "Strict-Transport-Security",
            value: "max-age=63072000; includeSubDomains; preload",
          },
          { key: "Content-Security-Policy", value: csp },
        ],
      },
      {
        source: "/:path*(svg|jpg|jpeg|png|webp|avif|gif|ico|woff2)",
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=31536000, immutable",
          },
        ],
      },
    ];
  },
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
