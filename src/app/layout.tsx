import type { Metadata, Viewport } from "next";
import { Inter, Outfit } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { SITE_URL } from "@/lib/constants";

const inter = Inter({
  variable: "--font-sans",
  subsets: ["latin"],
  display: "swap",
  preload: true,
});

const outfit = Outfit({
  variable: "--font-display",
  subsets: ["latin"],
  display: "swap",
  weight: ["600", "700"],
  preload: false,
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Best IPTV UK 2026 | Premium 4K UHD Streaming From £3.75/mo",
    template: "%s | Best IPTV UK",
  },
  description:
    "UK IPTV subscription trusted by 50,000+ subscribers. 37,000 channels, 4K UHD, built-in VPN, 24/7 UK support. Compare plans and start watching today. 30-day refund.",
  keywords: [
    "iptv uk",
    "uk iptv",
    "iptv subscription uk",
    "iptv provider uk",
    "iptv service uk",
    "iptv for firestick uk",
    "iptv with vpn uk",
    "british iptv",
    "4k iptv uk",
  ],
  authors: [{ name: "Best IPTV UK" }],
  creator: "Best IPTV UK",
  applicationName: "Best IPTV UK",
  alternates: {
    canonical: "/",
    languages: {
      "en-GB": "/",
    },
  },
  manifest: "/favicon_io/site.webmanifest",
  icons: {
    icon: [
      { url: "/favicon_io/favicon.ico", sizes: "any" },
      { url: "/favicon_io/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon_io/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon_io/android-chrome-192x192.png", sizes: "192x192", type: "image/png" },
      { url: "/favicon_io/android-chrome-512x512.png", sizes: "512x512", type: "image/png" },
    ],
    shortcut: "/favicon_io/favicon.ico",
    apple: [
      { url: "/favicon_io/apple-touch-icon.png", sizes: "180x180", type: "image/png" },
    ],
  },
  openGraph: {
    type: "website",
    locale: "en_GB",
    siteName: "Best IPTV UK",
    url: SITE_URL,
    title: "Best IPTV UK 2026 — Premium 4K UHD Streaming For British Homes",
    description:
      "A complete IPTV subscription for UK households: 37,000 channels, 4K UHD, built-in VPN, UK servers, 99.9% uptime and a 30-day money-back promise.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Best IPTV UK 2026 — Premium 4K UHD Streaming Service",
    description:
      "37,000 channels, 4K UHD, built-in VPN, five screens, 30-day guarantee. Trusted by 50,000+ UK subscribers.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
};

export const viewport: Viewport = {
  themeColor: "#0a0a0a",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en-GB"
      className={`${inter.variable} ${outfit.variable} antialiased`}
    >
      <body className="min-h-screen bg-background text-foreground font-(--font-sans)">
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-100 focus:rounded-lg focus:bg-white focus:px-4 focus:py-2 focus:text-foreground focus:shadow-lg focus:outline-2 focus:outline-violet-600"
        >
          Skip to main content
        </a>
        <Navbar />
        <main id="main" className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
