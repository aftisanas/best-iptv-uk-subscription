import { Shield, CreditCard, Star, Gem } from "lucide-react";
import MotionReveal from "./MotionReveal";
import PricingPlansInteractive from "./PricingPlansInteractive";

export default function PricingSection() {
  return (
    <section id="pricing" className="relative py-11 lg:py-16">
      {/* Premium background */}
      <div className="absolute inset-0 section-gradient-1" />
      <div className="absolute inset-0 mesh-gradient" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <MotionReveal className="text-center mb-10">
          <div className="flex items-center justify-center gap-3 mb-4">
            <span className="editorial-rule" />
            <span className="text-[11px] font-semibold tracking-[0.22em] uppercase text-[color:var(--color-primary)]">
              Transparent GBP Pricing
            </span>
            <span className="editorial-rule" />
          </div>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4 tracking-tight">
            Best IPTV UK Pricing &mdash;{" "}
            <span className="gradient-text">Pick The Right Term Length</span>
          </h2>
          <p className="mx-auto max-w-2xl text-base text-muted leading-relaxed">
            Every Best IPTV UK plan unlocks the complete service — same channels, same features, same support. The only variable is term length &mdash; longer plans give the best monthly price.
          </p>
        </MotionReveal>

        {/* Editorial nudge — "Most subscribers pick" */}
        <MotionReveal className="mb-8 flex justify-center px-4">
          <div className="inline-flex max-w-md sm:max-w-none flex-col sm:flex-row items-center gap-1.5 sm:gap-3 rounded-2xl sm:rounded-full border border-[color:var(--color-primary)]/25 bg-white px-5 py-3 sm:py-2.5 text-sm text-center sm:text-left shadow-sm">
            <span className="inline-flex items-center gap-2">
              <Gem className="h-4 w-4 text-[color:var(--color-primary)]" />
              <span className="text-muted">
                Most subscribers pick the{" "}
                <span className="font-bold text-foreground">12-month plan</span>
              </span>
            </span>
            <span aria-hidden className="hidden sm:inline text-muted">—</span>
            <span className="text-muted">lowest monthly rate before the 24-month lock-in.</span>
          </div>
        </MotionReveal>

        {/* 4-plan grid + modal (client island) */}
        <PricingPlansInteractive />

        {/* Trust bar */}
        <MotionReveal
          y={0}
          className="mt-14 flex flex-wrap items-center justify-center gap-6 lg:gap-10"
        >
          {[
            { icon: Shield, label: "Secure WhatsApp ordering · GBP pricing" },
            { icon: CreditCard, label: "30-day money-back guarantee" },
            { icon: Star, label: "Credentials in under 2 minutes" },
          ].map((item) => (
            <div key={item.label} className="flex items-center gap-2 text-sm text-muted">
              <item.icon className="h-4 w-4 text-[color:var(--color-primary)]/70" />
              <span>{item.label}</span>
            </div>
          ))}
        </MotionReveal>
      </div>
    </section>
  );
}
