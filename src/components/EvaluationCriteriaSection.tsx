import {
  Tv,
  Activity,
  ShieldCheck,
  Monitor,
  Headphones,
  LayoutGrid,
  PoundSterling,
  AlertTriangle,
  ChevronRight,
} from "lucide-react";
import Link from "next/link";
import SectionLink from "./SectionLink";
import MotionReveal from "./MotionReveal";
import { EVALUATION_CRITERIA } from "@/lib/constants";

const iconMap = {
  Tv,
  Activity,
  ShieldCheck,
  Monitor,
  Headphones,
  LayoutGrid,
  PoundSterling,
} as const;

export default function EvaluationCriteriaSection() {
  return (
    <section id="evaluation-criteria" className="relative py-12 lg:py-16">
      <div className="absolute inset-0 mesh-gradient" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <MotionReveal className="text-center mb-12 lg:mb-14">
          <span className="inline-block rounded-full bg-[color:var(--color-primary)]/10 border border-[color:var(--color-primary)]/25 px-4 py-1.5 text-sm font-medium text-[color:var(--color-primary)] mb-4">
            Seven-Criteria Buyer&apos;s Framework
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-5">
            How to Choose the Best IPTV UK Service{" "}
            <span className="gradient-text">in 2026</span>
          </h2>
          <p className="mx-auto max-w-3xl text-base sm:text-lg text-muted leading-relaxed">
            The UK IPTV market in 2026 is crowded — and every provider&apos;s
            homepage looks broadly similar. The real difference between a
            service worth paying for and one to walk away from sits in seven
            verifiable signals, each checkable on a provider&apos;s site
            before any card details are entered. The framework below is the
            one applied across this service&apos;s plans and expanded in{" "}
            <Link
              href="/best-iptv-uk-2026"
              className="text-[color:var(--color-primary)] hover:text-[color:var(--color-primary-hover)] underline-offset-2 hover:underline"
            >
              the full UK IPTV buyer&apos;s guide for 2026
            </Link>{" "}
            — the same test readers can apply to every rival, with one
            red-flag warning per criterion.
          </p>
        </MotionReveal>

        {/* Criteria grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-6">
          {EVALUATION_CRITERIA.map((criterion, i) => {
            const Icon = iconMap[criterion.icon];
            return (
              <MotionReveal
                key={criterion.id}
                y={30}
                delay={i * 0.05}
                className="group relative flex flex-col rounded-2xl border border-[color:var(--color-border)] bg-white p-6 transition-all duration-500 hover:border-[color:var(--color-primary)]/30 hover:shadow-lg hover:shadow-[rgba(101,30,253,0.10)] premium-card"
              >
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-[#f2ecff]/60 to-[#fff5ec]/30 opacity-0 transition-opacity group-hover:opacity-100" />

                <div className="relative flex flex-col flex-1">
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-[#f2ecff] to-[#fff5ec] transition-all group-hover:from-[color:var(--color-primary)]/20 group-hover:to-[#ffe6ec] group-hover:shadow-md group-hover:shadow-[rgba(101,30,253,0.15)]">
                    <Icon className="h-6 w-6 text-[color:var(--color-primary)] transition-colors group-hover:text-[color:var(--color-primary-hover)]" />
                  </div>

                  <h3 className="font-display text-lg font-semibold text-foreground mb-3 leading-snug">
                    {criterion.name}
                  </h3>

                  <p className="text-sm text-muted leading-relaxed mb-4">
                    {criterion.why_it_matters}
                  </p>

                  <div className="mb-4 rounded-lg border border-[color:var(--color-border)] bg-[color:var(--color-primary)]/5 px-3 py-2.5">
                    <p className="text-xs font-semibold uppercase tracking-wider text-[color:var(--color-primary)] mb-1">
                      What to look for
                    </p>
                    <p className="text-xs text-muted leading-relaxed">
                      {criterion.what_to_look_for}
                    </p>
                  </div>

                  <div className="mt-auto flex items-start gap-2 rounded-lg border border-[color:var(--color-accent)]/20 bg-[color:var(--color-accent)]/5 px-3 py-2.5">
                    <AlertTriangle
                      aria-hidden="true"
                      className="h-4 w-4 shrink-0 text-[color:var(--color-accent)] mt-0.5"
                    />
                    <p className="text-xs text-[color:var(--color-accent)] leading-relaxed">
                      <span className="font-semibold">Red flag — </span>
                      {criterion.red_flag}
                    </p>
                  </div>

                  {"crossLinkHref" in criterion && criterion.crossLinkHref && (
                    <Link
                      href={criterion.crossLinkHref}
                      className="mt-4 inline-flex items-center gap-1 text-xs font-semibold text-[color:var(--color-primary)] hover:text-[color:var(--color-primary-hover)]"
                    >
                      See {criterion.crossLinkAnchor}
                      <ChevronRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" />
                    </Link>
                  )}
                </div>
              </MotionReveal>
            );
          })}
        </div>

        {/* Closing — anchors to pricing grid */}
        <MotionReveal className="mx-auto max-w-3xl text-center mt-12 lg:mt-14">
          <p className="text-base text-muted leading-relaxed">
            All seven signals are checkable in five minutes on any provider&apos;s
            site — together they form the buyer&apos;s framework that separates
            a complete UK subscription from the marketing-grade alternative.
            The{" "}
            <SectionLink
              href="/#pricing"
              className="text-[color:var(--color-primary)] hover:text-[color:var(--color-primary-hover)] underline-offset-2 hover:underline"
            >
              pricing grid below
            </SectionLink>{" "}
            shows how every plan on this service meets all seven, backed by the
            30-day refund window.
          </p>
        </MotionReveal>
      </div>
    </section>
  );
}
