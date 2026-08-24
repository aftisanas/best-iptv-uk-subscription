import Link from "next/link";
import Image from "next/image";
import {
  ArrowLeft,
  ArrowRight,
  ChevronRight,
  Clock,
  MessageCircle,
  Wrench,
} from "lucide-react";
import {
  SUPPORT_WHATSAPP_HREF,
  SUPPORT_WHATSAPP_NUMBER,
  type TutorialDevice,
} from "@/lib/tutorial-content";

// Inline-format URLs, hostnames and IPv4s as <code> so they read as copy-paste values.
function renderStepText(text: string): React.ReactNode {
  const RE =
    /(https?:\/\/[^\s,]+|\bfast\.com\b|\biptvsmarters\.com(?:\/[a-z0-9?=_-]*)?|\bkodi\.tv(?:\/[a-z0-9?=/_-]*)?|\b\d+\.\d+\.\d+\.\d+\b)/g;
  const parts: React.ReactNode[] = [];
  let last = 0;
  let m: RegExpExecArray | null;
  while ((m = RE.exec(text)) !== null) {
    if (m.index > last) parts.push(text.slice(last, m.index));
    parts.push(
      <code
        key={`${m.index}-${m[0]}`}
        className="font-mono text-xs sm:text-sm bg-[color:var(--color-primary)]/8 text-[color:var(--color-primary)] px-1.5 py-0.5 rounded border border-[color:var(--color-border)] break-all"
      >
        {m[0]}
      </code>
    );
    last = m.index + m[0].length;
  }
  if (last < text.length) parts.push(text.slice(last));
  return parts.length > 0 ? parts : text;
}

const formatDate = (iso: string) =>
  new Date(iso).toLocaleDateString("en-GB", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });

export default function DeviceTutorialContent({
  device,
  headline,
  relatedDevices,
  updatedDate,
}: {
  device: TutorialDevice;
  headline: string;
  relatedDevices: TutorialDevice[];
  updatedDate: string;
}) {
  const isFirestick = device.slug === "firestick";

  return (
    <>
      {/* ── Hero ── */}
      <section className="relative overflow-hidden section-wash-dark">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(255,188,125,0.16),transparent_55%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,rgba(255,30,30,0.10),transparent_55%)]" />

        <div className="relative z-10 w-full max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pt-28 sm:pt-32 lg:pt-36 pb-16 sm:pb-20 lg:pb-24">
          {/* Breadcrumb / back link */}
          <nav aria-label="Breadcrumb" className="mb-6">
            <Link
              href="/tutorials"
              className="inline-flex items-center gap-2 text-sm text-white/70 hover:text-white transition-colors"
            >
              <ArrowLeft className="h-4 w-4" />
              All setup guides
            </Link>
          </nav>

          <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/[0.06] backdrop-blur-md px-4 py-1.5 text-[11px] font-semibold tracking-[0.22em] uppercase text-[#ffbc7d] mb-6">
            <span aria-hidden="true" className="text-base leading-none">{device.emoji}</span>
            Best IPTV UK Device Guide
          </span>

          {/* H1 — LCP element, no motion wrapper */}
          <h1 className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-[3.25rem] font-bold tracking-tight leading-[1.08] text-white mb-5">
            {headline}
          </h1>

          <p className="text-base sm:text-lg text-white/75 leading-relaxed max-w-3xl mb-8">
            {device.subtitle} · Recommended app:{" "}
            <span className="text-white font-medium">{device.primaryApp}</span>
          </p>

          <div className="flex flex-wrap items-center gap-x-5 gap-y-2 text-xs sm:text-sm text-white/60">
            <span className="inline-flex items-center gap-1.5">
              <span aria-hidden="true" className="h-1 w-1 rounded-full bg-white/40" />
              <span>Updated {formatDate(updatedDate)}</span>
            </span>
            <span className="inline-flex items-center gap-1.5">
              <Clock className="h-3.5 w-3.5 text-[#ffbc7d]" />
              <span>~5 min setup</span>
            </span>
          </div>
        </div>

        <div className="absolute bottom-0 left-0 right-0 h-6 bg-gradient-to-t from-[color:var(--color-background)] to-transparent pointer-events-none" />
      </section>

      {/* ── Body ── */}
      <article className="relative py-12 lg:py-16">
        <div className="absolute inset-0 mesh-gradient" />
        <div className="relative mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          {/* Intro */}
          <p className="text-lg sm:text-xl text-foreground/90 font-medium leading-relaxed">
            {device.intro}
          </p>

          {/* Recommended app / fallback */}
          <div className="mt-8 rounded-2xl border border-[color:var(--color-border)] bg-white p-5 sm:p-6">
            <div className="flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-8">
              <div className="flex items-center gap-4">
                {device.appImage && (
                  <Image
                    src={device.appImage}
                    alt={`${device.primaryApp} app icon`}
                    width={56}
                    height={56}
                    className="h-14 w-14 shrink-0 rounded-xl border border-[color:var(--color-border)] object-contain bg-white p-1 shadow-sm"
                  />
                )}
                <div>
                  <p className="text-xs font-semibold uppercase tracking-wider text-[color:var(--color-primary)] mb-1">
                    Recommended app
                  </p>
                  <p className="text-sm sm:text-base font-semibold text-foreground">
                    {device.primaryApp}
                  </p>
                </div>
              </div>
              {device.fallbackApps && (
                <div>
                  <p className="text-xs font-semibold uppercase tracking-wider text-[color:var(--color-primary)] mb-1">
                    Fallback apps
                  </p>
                  <p className="text-sm sm:text-base text-foreground/80">
                    {device.fallbackApps}
                  </p>
                </div>
              )}
            </div>
          </div>

          {/* Compatibility */}
          <h2 className="text-2xl sm:text-3xl font-bold text-foreground mt-12 mb-4">
            Compatibility
          </h2>
          <p className="text-muted leading-relaxed">{device.compatibility}</p>

          {/* Video */}
          {device.videoEmbedUrl && (
            <div className="mt-8">
              <div className="aspect-video w-full max-w-2xl mx-auto rounded-xl overflow-hidden border border-[color:var(--color-border)] bg-white shadow-sm">
                <iframe
                  className="w-full h-full"
                  src={device.videoEmbedUrl}
                  title={`${device.displayName} IPTV setup walkthrough`}
                  loading="lazy"
                  referrerPolicy="strict-origin-when-cross-origin"
                  allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media; web-share"
                  allowFullScreen
                />
              </div>
            </div>
          )}

          {/* Steps */}
          <h2 className="text-2xl sm:text-3xl font-bold text-foreground mt-12 mb-4">
            Step-by-Step Setup
          </h2>
          <ol className="list-decimal pl-6 space-y-3">
            {device.steps.map((step, i) => (
              <li
                key={i}
                className="text-sm sm:text-base text-muted leading-relaxed marker:text-[color:var(--color-primary)] marker:font-semibold"
              >
                {renderStepText(step.text)}
                {step.substeps && (
                  <ul className="list-disc pl-5 mt-2 space-y-1.5">
                    {step.substeps.map((sub, j) => (
                      <li
                        key={j}
                        className="text-sm sm:text-base text-muted leading-relaxed marker:text-[#ff1e1e]"
                      >
                        {renderStepText(sub)}
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            ))}
          </ol>

          {/* Notes */}
          {device.notes?.map((note, i) => (
            <div key={i} className="mt-6 rounded-xl border border-[color:var(--color-neon)]/40 bg-[color:var(--color-neon)]/10 p-4">
              <p className="text-sm text-foreground leading-relaxed">
                <strong>Note:</strong> {renderStepText(note)}
              </p>
            </div>
          ))}

          {/* Troubleshooting */}
          <h2 className="text-2xl sm:text-3xl font-bold text-foreground mt-12 mb-4">
            <span className="inline-flex items-center gap-2">
              <Wrench className="h-6 w-6 text-[color:var(--color-accent)]" />
              Troubleshooting {device.displayName}
            </span>
          </h2>
          <ul className="space-y-3">
            {device.troubleshooting.map((item, i) => (
              <li
                key={i}
                className="rounded-xl border border-[color:var(--color-border)] bg-white p-4 sm:p-5 text-sm text-muted leading-relaxed"
              >
                {renderStepText(item)}
              </li>
            ))}
          </ul>

          {/* Firestick-specific cross-link to the buyer's guide cluster page */}
          {isFirestick && (
            <div className="mt-10 rounded-2xl border border-[color:var(--color-primary)]/25 bg-gradient-to-br from-[#f2ecff] to-[#fff5ec] p-6">
              <h3 className="text-lg font-semibold text-foreground mb-2">
                Choosing a Fire Stick model?
              </h3>
              <p className="text-sm text-muted leading-relaxed mb-4">
                This page covers the install. For which Fire Stick handles 4K UHD, the
                Fire OS vs Vega OS split, and the buyer&apos;s-guide criteria, read our
                full Fire Stick guide.
              </p>
              <Link
                href="/best-iptv-uk-firestick"
                className="inline-flex items-center gap-1.5 text-sm font-semibold text-[color:var(--color-primary)] hover:text-[color:var(--color-primary-hover)]"
              >
                Read the Fire Stick buyer&apos;s guide
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          )}

          {/* WhatsApp support CTA */}
          <div className="mt-10 rounded-2xl border border-[#ffbc7d]/40 bg-gradient-to-br from-[#fff5ec] to-[#f2ecff] p-6 sm:p-8 text-center">
            <h3 className="text-xl sm:text-2xl font-bold text-foreground mb-2">
              Still stuck on {device.displayName}?
            </h3>
            <p className="text-sm sm:text-base text-muted leading-relaxed mb-5 max-w-xl mx-auto">
              Message us with your device model, the exact error message, and which app
              you&apos;re using — our UK team will guide you through the fix step-by-step.
            </p>
            <a
              href={SUPPORT_WHATSAPP_HREF}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2.5 rounded-xl bg-[color:var(--color-primary)] hover:bg-[color:var(--color-primary-hover)] px-7 py-3.5 text-base font-semibold text-white shadow-lg shadow-[rgba(101,30,253,0.30)] transition-all active:scale-[0.98]"
            >
              <MessageCircle className="h-5 w-5" />
              WhatsApp us — {SUPPORT_WHATSAPP_NUMBER}
            </a>
          </div>
        </div>
      </article>

      {/* ── Related device guides ── */}
      <section className="relative py-11 lg:py-14">
        <div className="absolute inset-0 section-gradient-1" />
        <div className="relative mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <div className="mb-8 text-center">
            <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-2">
              <span className="gradient-text">Other Device Setup Guides</span>
            </h2>
            <p className="text-sm text-muted">
              Setting up on more than one screen? Pick another device.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {relatedDevices.map((d) => (
              <Link
                key={d.slug}
                href={`/tutorials/${d.slug}`}
                className="group relative flex flex-col rounded-2xl border border-[color:var(--color-border)] bg-white p-6 transition-all duration-300 hover:-translate-y-1 hover:border-[color:var(--color-primary)]/40 hover:shadow-lg hover:shadow-[rgba(101,30,253,0.10)]"
              >
                <span aria-hidden="true" className="text-2xl mb-3">{d.emoji}</span>
                <h3 className="text-base font-semibold text-foreground mb-1 group-hover:text-[color:var(--color-primary)] transition-colors">
                  {d.displayName}
                </h3>
                <p className="text-sm text-muted leading-relaxed flex-1">{d.subtitle}</p>
                <span className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-[color:var(--color-primary)] group-hover:text-[color:var(--color-primary-hover)]">
                  View setup guide
                  <ChevronRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
                </span>
              </Link>
            ))}
          </div>

          <div className="mt-10 text-center">
            <Link
              href="/tutorials"
              className="inline-flex items-center gap-1.5 text-sm font-semibold text-[color:var(--color-primary)] hover:text-[color:var(--color-primary-hover)]"
            >
              <ArrowLeft className="h-4 w-4" />
              Back to all 12 setup guides
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}