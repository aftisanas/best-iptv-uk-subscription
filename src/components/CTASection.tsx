import { Play, MessageCircle, Sparkles } from "lucide-react";
import Link from "next/link";
import SectionLink from "./SectionLink";
import MotionReveal from "./MotionReveal";
import MotionScaleIn from "./MotionScaleIn";
import { WHATSAPP_URL } from "@/lib/constants";

export default function CTASection() {
  return (
    <section className="relative py-14 lg:py-20 overflow-hidden">
      {/* Editorial dark wash — no aurora blobs, no particles */}
      <div className="absolute inset-0 section-wash-dark" />

      {/* Faint grid + amber vignette */}
      <div
        aria-hidden
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.14) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.14) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />
      <div
        aria-hidden
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse at 20% 20%, rgba(255,188,125,0.14), transparent 45%), radial-gradient(ellipse at 80% 80%, rgba(255,30,30,0.14), transparent 45%)",
        }}
      />
      {/* Top rule */}
      <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-[#ffbc7d] to-transparent opacity-70" />

      <div className="relative mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
        <MotionReveal y={20}>
          <MotionScaleIn className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/[0.07] backdrop-blur-md px-5 py-2 text-sm text-white/85 mb-7">
            <Sparkles className="h-4 w-4 text-[color:#ffbc7d]" />
            <span className="font-medium">Trusted UK IPTV Subscription</span>
          </MotionScaleIn>

          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-5 tracking-tight leading-[1.1]">
            Start With Best IPTV UK{" "}
            <span className="gradient-text-hero">— Ready In Under Two Minutes</span>
          </h2>
          <p className="mx-auto max-w-2xl text-base sm:text-lg text-white/75 mb-9 leading-relaxed">
            The 24-month{" "}
            <SectionLink href="/#pricing" className="text-[color:#ffbc7d] hover:text-[color:#ffdbb5] underline-offset-2 hover:underline">
              subscription plan
            </SectionLink>{" "}
            locks in the lowest monthly rate while delivering the full 37,000-channel library, 198,000 films and an optional Secure Proxy add-on. The first channel plays in under two minutes after payment — backed by a{" "}
            <Link href="/refund" className="text-[color:#ffbc7d] hover:text-[color:#ffdbb5] underline-offset-2 hover:underline">
              30-day refund
            </Link>{" "}
            and{" "}
            <Link href="/contact" className="text-[color:#ffbc7d] hover:text-[color:#ffdbb5] underline-offset-2 hover:underline">
              24/7 UK support
            </Link>.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <SectionLink
              href="/#pricing"
              className="group relative flex items-center gap-2.5 rounded-xl bg-[color:var(--color-primary)] px-8 py-4 text-base font-semibold text-white shadow-lg shadow-[rgba(101,30,253,0.4)] transition-all hover:bg-[color:var(--color-primary-hover)] hover:shadow-2xl hover:shadow-[rgba(101,30,253,0.55)] active:scale-[0.98] w-full sm:w-auto justify-center"
            >
              <Play className="h-5 w-5 fill-current" />
              View Subscription Plans — From £3.75/mo
            </SectionLink>
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-2.5 rounded-xl border border-white/20 bg-white/[0.06] backdrop-blur-sm px-8 py-4 text-base font-semibold text-white transition-all hover:border-[color:#ffbc7d]/50 hover:bg-white/[0.10] w-full sm:w-auto justify-center"
            >
              <MessageCircle className="h-5 w-5 text-[color:#ffbc7d]" />
              Chat With UK Support
            </a>
          </div>

          <p className="mt-8 text-sm text-white/55">
            Questions before sign-up? Email contact@buy-iptv-uk.com — replies during peak hours.
          </p>
        </MotionReveal>
      </div>
    </section>
  );
}
