"use client";

import { usePromoCountdown, padTime } from "@/lib/usePromoCountdown";

export default function PromoBanner() {
  const { timeLeft, mounted } = usePromoCountdown();
  const pad = padTime;

  if (!mounted) {
    return (
      <div className="w-full max-w-2xl mx-auto h-[240px] rounded-2xl opacity-0" aria-hidden />
    );
  }

  return (
    <div
      className="promo-banner relative w-full max-w-2xl mx-auto rounded-2xl overflow-hidden"
      style={{
        background:
          "linear-gradient(135deg, rgba(43, 12, 107, 0.72) 0%, rgba(21, 13, 38, 0.85) 50%, rgba(101, 30, 253, 0.30) 100%)",
        border: "1px solid rgba(101, 30, 253, 0.45)",
        backdropFilter: "blur(12px)",
        WebkitBackdropFilter: "blur(12px)",
      }}
    >
      <div
        className="absolute inset-0 pointer-events-none promo-banner-shimmer"
        style={{
          background:
            "linear-gradient(105deg, transparent 40%, rgba(255,255,255,0.05) 50%, transparent 60%)",
          backgroundSize: "200% 100%",
        }}
      />

      <div
        aria-hidden
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse at top left, rgba(255,188,125,0.16), transparent 55%), radial-gradient(ellipse at bottom right, rgba(255,30,30,0.16), transparent 55%)",
        }}
      />

      <div className="relative z-10 flex flex-col items-center text-center px-4 sm:px-5 py-4 sm:py-5 gap-2 sm:gap-2.5">
        <div className="flex items-center gap-3">
          <span className="editorial-rule" aria-hidden />
          <span
            className="text-[10px] sm:text-[11px] font-semibold tracking-[0.22em] uppercase"
            style={{ color: "rgba(255, 188, 125, 0.95)" }}
          >
            Current Term Pricing
          </span>
          <span className="editorial-rule" aria-hidden />
        </div>

        <h2 className="font-display text-lg sm:text-xl md:text-2xl font-semibold text-white leading-tight tracking-tight">
          Reduced pricing on every term — reverts when the timer resets.
        </h2>

        <p
          className="text-xs sm:text-sm"
          style={{ color: "rgba(255, 245, 236, 0.80)" }}
        >
          Every plan is covered by the 30-day refund window.
        </p>

        <div className="flex items-start gap-1.5 sm:gap-2.5 mt-0.5">
          <div className="countdown-block">
            <div className="countdown-number">{pad(timeLeft.hours)}</div>
            <div className="countdown-label">HOURS</div>
          </div>
          <span className="countdown-separator">:</span>
          <div className="countdown-block">
            <div className="countdown-number">{pad(timeLeft.minutes)}</div>
            <div className="countdown-label">MINUTES</div>
          </div>
          <span className="countdown-separator">:</span>
          <div className="countdown-block" key={`s-${timeLeft.seconds}`}>
            <div className="countdown-number countdown-tick">{pad(timeLeft.seconds)}</div>
            <div className="countdown-label">SECONDS</div>
          </div>
        </div>

        <p
          className="text-[10px] sm:text-[11px] tracking-[0.15em] uppercase mt-0.5"
          style={{ color: "rgba(226, 232, 240, 0.75)" }}
        >
          Secure checkout &nbsp;·&nbsp; Credentials in under 2 minutes &nbsp;·&nbsp; 24/7 UK support
        </p>
      </div>
    </div>
  );
}
