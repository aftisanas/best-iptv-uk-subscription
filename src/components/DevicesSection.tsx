import Link from "next/link";
import SectionLink from "./SectionLink";
import MotionReveal from "./MotionReveal";
import { DEVICES } from "@/lib/constants";

/**
 * Monochrome brand-inspired silhouettes for the device grid.
 * Rendered in currentColor so the parent chip controls hue + hover.
 * No colour trade dress or full trademarked marks — silhouettes only.
 */
const brandIconMap: Record<string, (props: { className?: string }) => React.ReactElement> = {
  // Amazon Fire Stick — flame silhouette
  firestick: ({ className }) => (
    <svg viewBox="0 0 32 32" className={className} role="img" aria-label="Fire TV">
      <path
        fill="currentColor"
        d="M17.6 3.5c.6 3.4-.8 5.4-2.4 7.4-1.8 2.3-3.6 4.6-3.6 7.9 0 4.8 3.3 8.7 8.4 8.7 6 0 9.4-4.4 9.4-9.6 0-3-1.4-6-3.6-7.4-.5 2-1.9 3.2-3.6 3.4 1.4-3-.4-6.9-4.6-10.4Zm2.8 12c-.4 2.4-2.4 3.4-2.4 5.7 0 1.8 1.6 3.4 3.6 3.4s3.8-1.6 3.8-3.7c0-2.4-2.2-3.8-5-5.4Z"
      />
      <path
        fill="currentColor"
        d="M6 21c0 3.4 1.8 6 4.6 7.4-1.6-2-2.4-4.4-2.4-7 0-3.3 1.4-5.8 3-8-2.8 1.6-5.2 4.4-5.2 7.6Z"
      />
    </svg>
  ),

  // Smart TV — LG roundel
  "samsung-tv": ({ className }) => (
    <svg viewBox="0 0 60 60" className={className} role="img" aria-label="LG (Smart TV)">
      <circle cx="30" cy="30" r="26" fill="none" stroke="currentColor" strokeWidth="3" />
      <text
        x="30"
        y="39"
        textAnchor="middle"
        fontFamily="Inter, system-ui, sans-serif"
        fontSize="22"
        fontWeight="800"
        fill="currentColor"
        letterSpacing="0.02em"
      >
        LG
      </text>
    </svg>
  ),

  // Android / iOS — smartphone silhouette (device shape, not brand)
  "android-phone": ({ className }) => (
    <svg viewBox="0 0 32 32" className={className} role="img" aria-label="Smartphone (Android and iOS)">
      <rect x="8" y="2" width="16" height="28" rx="3" fill="none" stroke="currentColor" strokeWidth="2.2" />
      <line x1="13" y1="5.5" x2="19" y2="5.5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
      <circle cx="16" cy="26.5" r="1.2" fill="currentColor" />
    </svg>
  ),

  // Windows / Mac — laptop silhouette (device shape, not brand)
  "windows-pc": ({ className }) => (
    <svg viewBox="0 0 40 32" className={className} role="img" aria-label="Laptop (Windows and Mac)">
      <rect x="7" y="5" width="26" height="17" rx="1.6" fill="none" stroke="currentColor" strokeWidth="2.2" />
      <rect x="10" y="8" width="20" height="11" rx="0.6" fill="currentColor" opacity="0.25" />
      <path
        d="M3 24 L 37 24 Q 37 27 34 27 L 6 27 Q 3 27 3 24 Z"
        fill="currentColor"
      />
    </svg>
  ),

  // IPTV Box / MAG — set-top-box silhouette
  formuler: ({ className }) => (
    <svg viewBox="0 0 40 32" className={className} role="img" aria-label="IPTV set-top box">
      <rect x="3" y="10" width="34" height="14" rx="2" fill="none" stroke="currentColor" strokeWidth="2.2" />
      <circle cx="10" cy="17" r="1.6" fill="currentColor" />
      <rect x="16" y="16" width="14" height="2" rx="1" fill="currentColor" />
      <line x1="10" y1="10" x2="10" y2="6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      <line x1="30" y1="10" x2="30" y2="6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    </svg>
  ),

  // Apple TV — Apple silhouette
  "apple-tv": ({ className }) => (
    <svg viewBox="0 0 32 32" className={className} role="img" aria-label="Apple TV">
      <path
        fill="currentColor"
        d="M24 20c0-3.8 3-5.6 3.2-5.7-1.8-2.6-4.5-3-5.5-3-2.3-.2-4.6 1.4-5.8 1.4-1.2 0-3-1.3-5-1.3-2.6.1-5 1.5-6.3 3.9-2.8 4.7-.7 11.7 2 15.5 1.3 1.9 2.8 4 4.7 3.9 1.9 0 2.6-1.2 4.9-1.2s2.9 1.2 4.9 1.2c2 0 3.3-1.9 4.5-3.8 1.5-2.2 2-4.4 2-4.5 0 0-4-1.6-4-6.4ZM19.5 5.8c1.1-1.3 1.8-3 1.6-4.8-1.5.1-3.3 1-4.4 2.3-1 1.1-1.9 2.9-1.6 4.6 1.7.2 3.4-.9 4.4-2.1Z"
      />
    </svg>
  ),
};

export default function DevicesSection() {
  return (
    <section className="relative py-11 lg:py-16">
      <div className="absolute inset-0 section-gradient-2" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <MotionReveal className="text-center mb-14">
          <div className="flex items-center justify-center gap-3 mb-4">
            <span className="editorial-rule" />
            <span className="text-[11px] font-semibold tracking-[0.22em] uppercase text-[color:#ff1e1e]">
              Runs Everywhere
            </span>
            <span className="editorial-rule" />
          </div>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4 tracking-tight">
            Best IPTV UK On Every{" "}
            <span className="gradient-text">Device You Already Own</span>
          </h2>
          <p className="mx-auto max-w-xl text-lg text-muted">
            One{" "}
            <SectionLink href="/#pricing" className="text-[color:var(--color-primary)] hover:text-[color:var(--color-primary-hover)] underline-offset-2 hover:underline">
              Best IPTV UK subscription plan
            </SectionLink>, five concurrent streams, zero extra hardware. The service runs on every mainstream platform without a single download from outside the official app stores.
          </p>
        </MotionReveal>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 lg:gap-6">
          {DEVICES.map((device) => {
            const BrandIcon = brandIconMap[device.tutorialSlug];
            return (
              <div
                key={device.name}
                className="group rounded-2xl border border-[color:var(--color-border)] bg-white transition-all duration-300 hover:border-[color:var(--color-primary)]/30 hover:shadow-lg hover:shadow-[rgba(101,30,253,0.10)]"
              >
                <Link
                  href={`/tutorials/${device.tutorialSlug}`}
                  className="flex h-full flex-col items-center gap-4 rounded-2xl p-6 focus-visible:outline-2 focus-visible:outline-[color:var(--color-primary)] focus-visible:outline-offset-2"
                  aria-label={`IPTV setup guide for ${device.name}`}
                >
                  <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-[#f2ecff] to-[#fff5ec] transition-all group-hover:from-[color:var(--color-primary)]/20 group-hover:to-[#ffe6ec] group-hover:shadow-md group-hover:shadow-[rgba(101,30,253,0.15)]">
                    <BrandIcon className="h-7 w-7 text-[color:var(--color-primary)] transition-colors group-hover:text-[color:var(--color-primary-hover)]" />
                  </div>
                  <span className="text-sm font-medium text-muted text-center transition-colors group-hover:text-foreground">
                    {device.name}
                  </span>
                  <span className="text-xs font-semibold text-[color:var(--color-primary)] opacity-0 transition-opacity group-hover:opacity-100">
                    Setup guide →
                  </span>
                </Link>
              </div>
            );
          })}
        </div>

        <div className="mt-10 text-center">
          <Link
            href="/tutorials"
            className="inline-flex items-center gap-2 rounded-xl border border-[color:var(--color-primary)]/30 bg-white px-6 py-3 text-sm font-semibold text-[color:var(--color-primary)] transition-colors hover:bg-[color:var(--color-primary)]/10 focus-visible:outline-2 focus-visible:outline-[color:var(--color-primary)] focus-visible:outline-offset-2"
          >
            See all 12 device setup guides →
          </Link>
        </div>
      </div>
    </section>
  );
}
