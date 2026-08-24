import { CheckCircle2, Calendar, Layers, FlaskConical } from "lucide-react";
import Link from "next/link";
import MotionReveal from "./MotionReveal";

const methodologyPoints = [
  {
    icon: CheckCircle2,
    title: "Verifiable Signals Only — No Subjective Scores",
    body: "Every evaluation rests on signals a buyer can verify before paying: channel count, published uptime, refund window, GBP pricing, device breadth, support speed. No subjective \"best of\" rankings, no in-house five-star reviews, no numeric positions assigned to providers we haven't tested. If a claim can't be checked on the public site or inside a refund window, it doesn't appear in the framework.",
  },
  {
    icon: Calendar,
    title: "Long-Term Testing — 90 Days Minimum Per Plan",
    body: "No service is judged on a single evening. Each plan reviewed here is subscribed and tested across at least 90 days — covering weekend football, weekday peak hours 6-11 PM, and the broadband-fluctuation periods that expose marginal providers. The framework reflects what survives a full quarter of UK household demand, not a launch-week test.",
  },
  {
    icon: Layers,
    title: "Comparison Set — Three Service Categories, Not Branded Lists",
    body: "Comparisons here work in three categories — direct UK service, typical reseller IPTV, and unlicensed free streams. No named-brand ranking lists. The reason is structural: branded comparisons invite trademark exposure when broadcaster names appear, or trade objectivity for affiliate placements with the providers being ranked. Category-level comparison shows the structural differences without quoting a competitor by name.",
  },
] as const;

export default function EvaluationMethodologySection() {
  return (
    <section id="methodology" className="relative py-12 lg:py-16">
      <div className="absolute inset-0 mesh-gradient" />

      <div className="relative mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <MotionReveal className="text-center mb-10 lg:mb-12 max-w-3xl mx-auto">
          <span className="inline-flex items-center gap-1.5 rounded-full bg-[color:var(--color-primary)]/10 border border-[color:var(--color-primary)]/25 px-4 py-1.5 text-sm font-medium text-[color:var(--color-primary)] mb-4">
            <FlaskConical className="h-4 w-4" />
            Editorial Methodology
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            How We Evaluate IPTV Services —{" "}
            <span className="gradient-text">Our Methodology</span>
          </h2>
          <p className="text-base text-muted leading-relaxed">
            The framework that underpins every page on this site, exposed in
            full so any UK buyer can apply the same test to a rival provider.
          </p>
        </MotionReveal>

        <div className="grid sm:grid-cols-3 gap-5 lg:gap-6">
          {methodologyPoints.map((point, i) => {
            const Icon = point.icon;
            return (
              <MotionReveal
                key={point.title}
                y={30}
                delay={i * 0.08}
                className="group relative flex flex-col rounded-2xl border border-[color:var(--color-border)] bg-white p-6 transition-all duration-500 hover:border-[color:var(--color-primary)]/30 hover:shadow-lg hover:shadow-[rgba(101,30,253,0.10)] premium-card"
              >
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-[#f2ecff] to-[#fff5ec]">
                  <Icon className="h-6 w-6 text-[color:var(--color-primary)]" />
                </div>
                <h3 className="font-display text-lg font-semibold text-foreground mb-3 leading-snug">
                  {point.title}
                </h3>
                <p className="text-sm text-muted leading-relaxed">
                  {point.body}
                </p>
              </MotionReveal>
            );
          })}
        </div>

        {/* Closing — anchors to /best-iptv-uk-2026 with the Section D row 5 anchor text */}
        <MotionReveal className="mx-auto max-w-3xl text-center mt-12 lg:mt-14">
          <p className="text-base text-muted leading-relaxed">
            The full evaluation framework — every criterion expanded with what
            to look for, what to avoid, and how to verify each in five minutes —
            is in{" "}
            <Link
              href="/best-iptv-uk-2026"
              className="text-[color:var(--color-primary)] hover:text-[color:var(--color-primary-hover)] underline-offset-2 hover:underline font-medium"
            >
              read the evaluation framework
            </Link>
            . The same seven-criteria test applies to this service, a direct
            competitor, or an unlicensed free stream alike. The criteria
            don&apos;t change between products.
          </p>
        </MotionReveal>
      </div>
    </section>
  );
}
