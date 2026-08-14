import type { MetadataRoute } from "next";

/**
 * Web app manifest — identity must stay stable across deploys.
 * `id` is the install identity (Chrome). Changing it creates a *new* installed app.
 * `launch_handler` focuses/navigates an existing PWA window instead of opening another.
 */
export default function manifest(): MetadataRoute.Manifest {
  return {
    id: "/",
    name: "Studiely",
    short_name: "Studiely",
    description:
      "AI study app for GCSE, IB, SAT & all curricula — notes, flashcards, quizzes and exam practice.",
    start_url: "/home",
    // Scope covers the whole origin so app routes work; marketing is blocked
    // at runtime and never used as the PWA landing page.
    scope: "/",
    display: "standalone",
    display_override: ["standalone", "minimal-ui", "browser"],
    orientation: "portrait-primary",
    background_color: "#E8FF2F",
    theme_color: "#E8FF2F",
    categories: ["education", "productivity"],
    // Prefer an existing open PWA client over spawning a second window.
    launch_handler: {
      client_mode: "navigate-existing",
    },
    // Enables navigator.getInstalledRelatedApps() detection in Chromium.
    prefer_related_applications: false,
    related_applications: [
      {
        platform: "webapp",
        url: "/manifest.webmanifest",
      },
    ],
    icons: [
      {
        src: "/icons/pwa-192.png",
        sizes: "192x192",
        type: "image/png",
        purpose: "any",
      },
      {
        src: "/icons/pwa-512.png",
        sizes: "512x512",
        type: "image/png",
        purpose: "any",
      },
      {
        src: "/icons/pwa-maskable-512.png",
        sizes: "512x512",
        type: "image/png",
        purpose: "maskable",
      },
    ],
  };
}
