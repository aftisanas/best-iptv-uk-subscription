"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { MessageCircle } from "lucide-react";
import { WHATSAPP_URL } from "@/lib/constants";
import { usePromoCountdown, padTime } from "@/lib/usePromoCountdown";

export default function StickyCTA() {
  const [visible, setVisible] = useState(false);
  const { timeLeft, mounted } = usePromoCountdown();

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 640);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const countdown = mounted
    ? `${padTime(timeLeft.hours)}:${padTime(timeLeft.minutes)}:${padTime(timeLeft.seconds)}`
    : null;

  return (
    <div
      aria-hidden={!visible}
      className={`sticky-cta-bar fixed inset-x-0 bottom-0 z-40 transition-transform duration-300 lg:hidden ${
        visible ? "translate-y-0" : "translate-y-full"
      }`}
    >
      <div className="mx-auto flex max-w-3xl items-center justify-between gap-3 px-4 py-3">
        <div className="min-w-0">
          <p className="flex items-center gap-1.5 text-[11px] font-semibold uppercase tracking-[0.18em] text-[#ffbc7d]">
            {countdown ? (
              <>
                <span
                  aria-hidden
                  className="inline-block h-1.5 w-1.5 rounded-full bg-[#ffbc7d] animate-pulse"
                />
                <span>Ends in</span>
                <span className="tabular-nums text-white/95">{countdown}</span>
              </>
            ) : (
              <span>From £3.75/mo</span>
            )}
          </p>
          <p className="truncate text-sm font-semibold text-white">
            37,000+ channels · 4K UHD · 30-day refund
          </p>
        </div>
        <div className="flex shrink-0 items-center gap-2">
          <Link
            href="/#pricing"
            className="rounded-lg bg-white/10 px-3 py-2 text-xs font-bold text-white ring-1 ring-white/25 hover:bg-white/15"
          >
            Plans
          </Link>
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 rounded-lg bg-gradient-to-r from-[#ff6fa1] to-[#ff1e1e] px-3.5 py-2 text-xs font-bold text-white shadow-lg shadow-[rgba(255,30,30,0.35)]"
          >
            <MessageCircle className="h-3.5 w-3.5" />
            WhatsApp
          </a>
        </div>
      </div>
    </div>
  );
}
