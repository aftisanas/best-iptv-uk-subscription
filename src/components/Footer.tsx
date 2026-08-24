"use client";

import Link from "next/link";
import Image from "next/image";
import { Mail, MapPin } from "lucide-react";
import { NAV_LINKS, LEGAL_LINKS, GUIDES_LINKS, SITE_NAME, CONTACT_EMAIL } from "@/lib/constants";
import SectionLink from "@/components/SectionLink";

export default function Footer() {
  return (
    <footer className="relative border-t border-[color:var(--color-border)] bg-gradient-to-b from-[#fafbff] to-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Main footer */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10 py-16">
          {/* Brand */}
          <div className="lg:col-span-1">
            <Link href="/" className="flex items-center gap-2.5 mb-4">
              <div className="relative h-12 w-12 shrink-0">
                <Image
                  src="/best-iptv-subscription.webp"
                  alt="Best IPTV UK logo"
                  fill
                  sizes="48px"
                  loading="lazy"
                  className="object-contain drop-shadow-[0_0_8px_rgba(101,30,253,0.55)]"
                />
              </div>
              <span className="text-lg font-bold text-foreground">
                Best<span className="gradient-text"> IPTV </span>UK
              </span>
            </Link>
            <p className="text-sm text-muted leading-relaxed mb-6">
              A UK IPTV subscription delivering 37,000 live channels, 198,000 films and series, 4K UHD and an optional Secure Proxy add-on — from £3.75/month equivalent on the 24-month term.
            </p>
            <div className="space-y-2">
              <div className="flex items-center gap-2 text-sm text-muted">
                <Mail className="h-4 w-4 text-[color:var(--color-primary)]/70" />
                <span>{CONTACT_EMAIL}</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-muted">
                <MapPin className="h-4 w-4 text-[color:var(--color-primary)]/70" />
                <span>London, United Kingdom</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-sm font-semibold text-foreground uppercase tracking-wider mb-4">
              Quick Links
            </h3>
            <ul className="space-y-3">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <SectionLink
                    href={link.href}
                    className="text-sm text-muted transition-colors hover:text-[color:var(--color-primary)]"
                  >
                    {link.label}
                  </SectionLink>
                </li>
              ))}
            </ul>
          </div>

          {/* Guides */}
          <div>
            <h3 className="text-sm font-semibold text-foreground uppercase tracking-wider mb-4">
              Guides
            </h3>
            <ul className="space-y-3">
              {GUIDES_LINKS.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-muted transition-colors hover:text-[color:var(--color-primary)]"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="text-sm font-semibold text-foreground uppercase tracking-wider mb-4">
              Legal
            </h3>
            <ul className="space-y-3">
              {LEGAL_LINKS.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-muted transition-colors hover:text-[color:var(--color-primary)]"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

        </div>

        {/* Bottom bar */}
        <div className="border-t border-[color:var(--color-border)] py-6">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-xs text-muted text-center sm:text-left">
              © {new Date().getFullYear()} best-iptv-uk-subscription.com — UK IPTV subscription with full broadcaster coverage
            </p>
            <p className="text-xs text-gray-500 text-center sm:text-right max-w-md">
              {SITE_NAME} is not affiliated with any television networks or content providers.
              All trademarks are property of their respective owners.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
