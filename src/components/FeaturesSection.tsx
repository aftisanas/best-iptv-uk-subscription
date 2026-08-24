import {
  Tv, Monitor, Clock, Film, Smartphone, LayoutGrid, Zap, Shield, Activity,
} from "lucide-react";
import SectionLink from "./SectionLink";
import MotionReveal from "./MotionReveal";
import { FEATURES } from "@/lib/constants";

const iconMap = {
  Tv, Monitor, Clock, Film, Smartphone, LayoutGrid, Zap, Shield, Activity,
} as const;

export default function FeaturesSection() {
  return (
    <section id="features" className="relative py-12 lg:py-14">
      {/* Subtle mesh gradient */}
      <div className="absolute inset-0 mesh-gradient" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <MotionReveal className="text-center lg:mb-12 mb-10">
          <div className="flex items-center justify-center gap-3 mb-4">
            <span className="editorial-rule" />
            <span className="text-[11px] font-semibold tracking-[0.22em] uppercase text-[color:var(--color-primary)]">
              Eight Measured Pillars
            </span>
            <span className="editorial-rule" />
          </div>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4 tracking-tight">
            Why UK Viewers Choose{" "}
            <span className="gradient-text">Best IPTV UK In 2026</span>
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-muted">
            Eight pillars define what a complete IPTV subscription should deliver. Every one is measured, published and backed by the 30-day refund on every{" "}
            <SectionLink href="/#pricing" className="text-[color:var(--color-primary)] hover:text-[color:var(--color-primary-hover)] underline-offset-2 hover:underline">
              subscription plan
            </SectionLink>.
          </p>
        </MotionReveal>

        {/* Features grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6">
          {FEATURES.map((feature) => {
            const Icon = iconMap[feature.icon];
            return (
              <div
                key={feature.title}
                className="group relative rounded-2xl border border-[color:var(--color-border)] bg-white p-6 transition-all duration-500 hover:border-[color:var(--color-primary)]/30 hover:shadow-lg hover:shadow-[rgba(101,30,253,0.10)] premium-card"
              >
                {/* Hover glow */}
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-[#f2ecff]/60 to-[#fff5ec]/30 opacity-0 transition-opacity group-hover:opacity-100" />

                <div className="relative">
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-[#f2ecff] to-[#fff5ec] transition-all group-hover:from-[color:var(--color-primary)]/20 group-hover:to-[#ffe6ec] group-hover:shadow-md group-hover:shadow-[rgba(101,30,253,0.15)]">
                    <Icon className="h-6 w-6 text-[color:var(--color-primary)] transition-colors group-hover:text-[color:var(--color-primary-hover)]" />
                  </div>
                  <h3 className="font-display text-lg font-semibold text-foreground mb-2 leading-snug">
                    {feature.title}
                  </h3>
                  <p className="text-sm text-muted leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
