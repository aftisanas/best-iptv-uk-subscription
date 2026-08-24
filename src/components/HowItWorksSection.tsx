import MotionReveal from "./MotionReveal";
import SectionLink from "./SectionLink";

/**
 * Three-step "how it works" — SVG numeral badges + step cards.
 * Copy uses existing site messaging: pick plan → get credentials → install & watch.
 */
const STEPS = [
  {
    n: "01",
    title: "Pick a subscription plan",
    body: "Choose the term length that suits you — 1, 3, 6, 12 or 24 months. Every tier unlocks the full 37,000-channel library and 4K UHD by default.",
    href: "/#pricing",
    cta: "View plans",
  },
  {
    n: "02",
    title: "Receive credentials in under 2 minutes",
    body: "Pay by card via the secure hub or confirm on WhatsApp. Login details arrive by email — usually within two minutes, no queue.",
    href: "/contact",
    cta: "Talk to UK support",
  },
  {
    n: "03",
    title: "Install &amp; watch on any device",
    body: "Follow the setup guide for your Firestick, Smart TV, phone, tablet or laptop. Five simultaneous screens on one account — first channel plays immediately.",
    href: "/tutorials",
    cta: "Open setup guides",
  },
] as const;

function StepNumeral({ n, tint }: { n: string; tint: string }) {
  return (
    <svg viewBox="0 0 80 80" className="h-16 w-16 shrink-0">
      <defs>
        <linearGradient id={`num-${n}`} x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor={tint} />
          <stop offset="100%" stopColor="#150d26" />
        </linearGradient>
      </defs>
      <rect x="4" y="4" width="72" height="72" rx="18" fill={`url(#num-${n})`} />
      <rect x="4" y="4" width="72" height="72" rx="18" fill="none" stroke="#ffffff" strokeOpacity="0.15" strokeWidth="1" />
      <text
        x="40"
        y="52"
        textAnchor="middle"
        fontFamily="Inter, sans-serif"
        fontSize="26"
        fontWeight="800"
        fill="#ffffff"
      >
        {n}
      </text>
    </svg>
  );
}

const TINTS = ["#651efd", "#ff1e1e", "#ffbc7d"] as const;

export default function HowItWorksSection() {
  return (
    <section id="how-it-works" className="relative py-14 lg:py-20">
      <div className="absolute inset-0 mesh-gradient" />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <MotionReveal className="text-center mb-12">
          <div className="flex items-center justify-center gap-3 mb-4">
            <span className="editorial-rule" />
            <span className="text-[11px] font-semibold tracking-[0.22em] uppercase text-[color:var(--color-primary)]">
              Under Two Minutes
            </span>
            <span className="editorial-rule" />
          </div>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4 tracking-tight">
            How Best IPTV UK{" "}
            <span className="gradient-text">Starts Playing</span>
          </h2>
          <p className="mx-auto max-w-2xl text-base text-muted leading-relaxed">
            Best IPTV UK goes from payment to first channel in three steps. No installer software, no hidden app store, no long onboarding form.
          </p>
        </MotionReveal>

        <div className="grid md:grid-cols-3 gap-5 lg:gap-7 relative">
          {/* Dotted connector on desktop */}
          <div
            aria-hidden
            className="hidden md:block absolute top-14 left-[16.66%] right-[16.66%] h-px"
            style={{
              backgroundImage:
                "linear-gradient(90deg, transparent, rgba(101,30,253,0.35) 20%, rgba(255,30,30,0.35) 55%, rgba(255,188,125,0.35) 85%, transparent)",
            }}
          />

          {STEPS.map((s, i) => (
            <div
              key={s.n}
              className="relative flex flex-col rounded-2xl border border-[color:var(--color-border)] bg-white p-6 lg:p-7 shadow-sm hover:shadow-md transition-shadow"
            >
              <StepNumeral n={s.n} tint={TINTS[i]} />
              <h3 className="mt-5 font-display text-xl font-bold text-foreground leading-snug">
                <span dangerouslySetInnerHTML={{ __html: s.title }} />
              </h3>
              <p className="mt-2 text-sm text-muted leading-relaxed flex-1">
                {s.body}
              </p>
              <SectionLink
                href={s.href}
                className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-[color:var(--color-primary)] hover:text-[color:var(--color-primary-hover)]"
              >
                {s.cta} <span aria-hidden>→</span>
              </SectionLink>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
