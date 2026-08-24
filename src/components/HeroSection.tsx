import { Play, MessageCircle, ChevronRight, ShieldCheck, Zap } from "lucide-react";
import PromoBanner from "./PromoBanner";
import SectionLink from "./SectionLink";
import MotionFadeIn from "./MotionFadeIn";
import HeroDevicesArt from "./HeroDevicesArt";

export default function HeroSection() {
  return (
    <section
      id="hero"
      className="relative overflow-hidden pt-24 sm:pt-28 lg:pt-32 pb-14 lg:pb-20"
    >
      {/* Editorial dark wash — replaces aurora blobs */}
      <div className="absolute inset-0 section-wash-dark" />

      {/* Faint editorial grid */}
      <div
        aria-hidden
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.15) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.15) 1px, transparent 1px)",
          backgroundSize: "72px 72px",
        }}
      />

      {/* Fine grain */}
      <div
        aria-hidden
        className="absolute inset-0 opacity-[0.35] mix-blend-overlay pointer-events-none"
        style={{
          backgroundImage:
            "radial-gradient(circle at 20% 30%, rgba(255,188,125,0.14), transparent 45%), radial-gradient(circle at 80% 70%, rgba(255,30,30,0.10), transparent 40%)",
        }}
      />

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-[1.15fr_1fr] gap-10 lg:gap-14 items-center">
          {/* ── Copy column ── */}
          <div className="text-center lg:text-left">
            {/* Editorial eyebrow */}
            <MotionFadeIn
              y={12}
              duration={0.5}
              className="inline-flex items-center gap-2 mb-5"
            >
              <span className="editorial-rule" />
              <span className="text-[11px] font-semibold tracking-[0.22em] uppercase text-[color:#ffbc7d]">
                Independent UK IPTV Review Desk · 2026
              </span>
            </MotionFadeIn>

            {/* Headline — LCP element, no motion wrapper */}
            <h1 className="font-display text-4xl sm:text-5xl lg:text-[3.6rem] xl:text-6xl font-bold tracking-tight leading-[1.05] text-white mb-5">
              Best IPTV UK —{" "}
              <span className="gradient-text-hero">Premium 4K Streaming</span>{" "}
              For British Homes
            </h1>

            <MotionFadeIn
              as="p"
              delay={0.15}
              duration={0.65}
              className="text-base sm:text-lg text-white/75 max-w-2xl mx-auto lg:mx-0 leading-relaxed mb-6"
            >
              37,000+ live channels and 198,000+ films &amp; series in 4K UHD, delivered over UK-focused infrastructure. Five simultaneous screens, optional Secure Proxy add-on, 24/7 UK-based support — backed by a 30-day money-back.
            </MotionFadeIn>

            {/* Trust chips — pre-CTA reassurance */}
            <MotionFadeIn
              delay={0.22}
              duration={0.6}
              className="flex flex-wrap items-center justify-center lg:justify-start gap-x-4 gap-y-2 mb-7 text-xs sm:text-sm text-white/70"
            >
              <span className="inline-flex items-center gap-1.5">
                <ShieldCheck className="h-3.5 w-3.5 text-[color:#ffbc7d]" />
                30-day money-back
              </span>
              <span aria-hidden className="h-1 w-1 rounded-full bg-white/25" />
              <span className="inline-flex items-center gap-1.5">
                <Zap className="h-3.5 w-3.5 text-[color:#ffbc7d]" />
                Under 2 min activation
              </span>
              <span aria-hidden className="h-1 w-1 rounded-full bg-white/25" />
              <span>From £3.75/mo equivalent</span>
            </MotionFadeIn>

            {/* CTA buttons */}
            <MotionFadeIn
              y={20}
              delay={0.3}
              duration={0.6}
              className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3 sm:gap-4"
            >
              <SectionLink
                href="/#pricing"
                className="group relative flex items-center gap-2.5 rounded-xl bg-[color:var(--color-primary)] px-7 py-3.5 text-sm sm:text-base font-semibold text-white shadow-lg shadow-[rgba(101,30,253,0.35)] transition-all hover:bg-[color:var(--color-primary-hover)] hover:shadow-2xl hover:shadow-[rgba(101,30,253,0.5)] active:scale-[0.98] w-full sm:w-auto justify-center"
              >
                <Play className="h-5 w-5 fill-current" />
                <span>View Subscription Plans — From £3.75/mo</span>
                <ChevronRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </SectionLink>
              <SectionLink
                href="/#pricing"
                className="group flex items-center gap-2.5 rounded-xl border border-white/20 bg-white/[0.06] backdrop-blur-sm px-7 py-3.5 text-sm sm:text-base font-semibold text-white transition-all hover:border-[color:#ffbc7d]/50 hover:bg-white/[0.10] w-full sm:w-auto justify-center"
              >
                <MessageCircle className="h-5 w-5 text-[color:#ffbc7d]" />
                <span>Compare All Plans</span>
              </SectionLink>
            </MotionFadeIn>
          </div>

          {/* ── SVG hero art column ── */}
          <MotionFadeIn
            delay={0.15}
            duration={0.8}
            y={0}
            className="relative order-first lg:order-last max-w-[520px] mx-auto lg:max-w-none w-full"
          >
            <HeroDevicesArt />
          </MotionFadeIn>
        </div>

        {/* Promo banner — full width under both columns */}
        <MotionFadeIn
          y={22}
          delay={0.35}
          duration={0.65}
          className="relative w-full mt-12 lg:mt-14"
        >
          <PromoBanner />
        </MotionFadeIn>
      </div>

      {/* Bottom fade to page bg */}
      <div className="absolute bottom-0 left-0 right-0 h-8 bg-gradient-to-t from-[#fafbff] to-transparent pointer-events-none" />
    </section>
  );
}
