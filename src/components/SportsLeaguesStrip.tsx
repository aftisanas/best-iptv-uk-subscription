import MotionReveal from "./MotionReveal";
import { Trophy } from "lucide-react";

/**
 * Sports/premium coverage strip — SVG shield badges, no real broadcaster logos.
 * Communicates "premium sport coverage" without infringing on trademarks.
 */
type SportKey =
  | "football"
  | "uefa"
  | "f1"
  | "mma"
  | "rugby"
  | "cricket"
  | "tennis"
  | "boxing";

const LEAGUES: readonly {
  name: string;
  key: SportKey;
  tone: string;
}[] = [
  { name: "UK Football", key: "football", tone: "#651efd" },
  { name: "European Cups", key: "uefa", tone: "#ff1e1e" },
  { name: "Motorsport", key: "f1", tone: "#ffbc7d" },
  { name: "Combat", key: "mma", tone: "#9abcec" },
  { name: "Rugby", key: "rugby", tone: "#ff6fa1" },
  { name: "Cricket", key: "cricket", tone: "#651efd" },
  { name: "Tennis", key: "tennis", tone: "#ffbc7d" },
  { name: "Boxing", key: "boxing", tone: "#ff1e1e" },
] as const;

/**
 * Sport pictograms — each returns a JSX group centred around (40, 42)
 * inside the 80x80 shield viewBox. Pure silhouettes, no trademarked marks.
 */
function SportPictogram({ sport }: { sport: SportKey }) {
  const white = "#ffffff";

  switch (sport) {
    case "football":
      return (
        <g fill={white} opacity="0.95">
          <circle cx="40" cy="42" r="12" />
          <g fill="#0e0a24" opacity="0.65">
            <polygon points="40,36 43,40 41.5,44 38.5,44 37,40" />
            <circle cx="34" cy="40" r="1.2" />
            <circle cx="46" cy="40" r="1.2" />
            <circle cx="36" cy="47" r="1.2" />
            <circle cx="44" cy="47" r="1.2" />
          </g>
        </g>
      );

    case "uefa":
      // Trophy silhouette
      return (
        <g fill={white} opacity="0.95">
          <path d="M 32 30 L 48 30 L 47 40 Q 47 47 40 47 Q 33 47 33 40 Z" />
          <path d="M 32 32 Q 27 32 27 36 Q 27 40 32 40" fill="none" stroke={white} strokeWidth="1.8" strokeLinecap="round" />
          <path d="M 48 32 Q 53 32 53 36 Q 53 40 48 40" fill="none" stroke={white} strokeWidth="1.8" strokeLinecap="round" />
          <rect x="38" y="47" width="4" height="4" />
          <rect x="34" y="51" width="12" height="2.5" rx="0.6" />
        </g>
      );

    case "f1":
      // Simplified F1 car — side profile
      return (
        <g fill={white} opacity="0.95">
          <path d="M 22 44 L 30 44 L 34 40 L 46 40 L 50 38 L 58 40 L 58 46 L 22 46 Z" />
          <circle cx="30" cy="48" r="3.5" fill="#0e0a24" />
          <circle cx="52" cy="48" r="3.5" fill="#0e0a24" />
          <circle cx="30" cy="48" r="1.4" fill={white} />
          <circle cx="52" cy="48" r="1.4" fill={white} />
          <rect x="35" y="37" width="10" height="3" rx="1" />
        </g>
      );

    case "mma":
      // MMA open-fingered glove
      return (
        <g fill={white} opacity="0.95">
          <path d="M 30 42 Q 30 34 40 34 Q 50 34 50 42 L 50 48 Q 50 52 46 52 L 34 52 Q 30 52 30 48 Z" />
          <rect x="32" y="30" width="3" height="6" rx="1" />
          <rect x="37" y="29" width="3" height="7" rx="1" />
          <rect x="42" y="29" width="3" height="7" rx="1" />
          <rect x="47" y="30" width="3" height="6" rx="1" />
          <path d="M 30 50 L 50 50" stroke="#0e0a24" strokeOpacity="0.35" strokeWidth="1" />
        </g>
      );

    case "rugby":
      // Rugby ball — rotated ellipse with laces
      return (
        <g fill={white} opacity="0.95" transform="rotate(-25 40 42)">
          <ellipse cx="40" cy="42" rx="14" ry="7" />
          <g stroke="#0e0a24" strokeOpacity="0.65" strokeWidth="1.4" strokeLinecap="round">
            <line x1="34" y1="42" x2="46" y2="42" />
            <line x1="36" y1="40" x2="36" y2="44" />
            <line x1="40" y1="40" x2="40" y2="44" />
            <line x1="44" y1="40" x2="44" y2="44" />
          </g>
        </g>
      );

    case "cricket":
      // Cricket bat (diagonal) + ball
      return (
        <g fill={white} opacity="0.95">
          <g transform="rotate(30 40 42)">
            <rect x="38" y="28" width="4" height="16" rx="1" />
            <rect x="36" y="42" width="8" height="14" rx="1.5" />
          </g>
          <circle cx="28" cy="50" r="3.2" fill="#0e0a24" />
          <circle cx="28" cy="50" r="3.2" fill="none" stroke={white} strokeWidth="0.8" />
        </g>
      );

    case "tennis":
      // Tennis racket — oval head with strings + handle
      return (
        <g fill={white} opacity="0.95">
          <g transform="rotate(-25 40 42)">
            <ellipse cx="40" cy="36" rx="8" ry="10" />
            <g stroke="#0e0a24" strokeOpacity="0.55" strokeWidth="0.9">
              <line x1="34" y1="36" x2="46" y2="36" />
              <line x1="35" y1="32" x2="45" y2="32" />
              <line x1="35" y1="40" x2="45" y2="40" />
              <line x1="40" y1="27" x2="40" y2="45" />
              <line x1="36.5" y1="27.5" x2="36.5" y2="44.5" />
              <line x1="43.5" y1="27.5" x2="43.5" y2="44.5" />
            </g>
            <rect x="38.5" y="45" width="3" height="10" rx="1" />
          </g>
        </g>
      );

    case "boxing":
      // Boxing glove — chunky mitten
      return (
        <g fill={white} opacity="0.95">
          <path d="M 30 42 Q 30 32 40 32 Q 52 32 52 42 L 52 50 Q 52 54 48 54 L 34 54 Q 30 54 30 50 Z" />
          <path d="M 34 34 Q 34 30 40 30 Q 46 30 46 34" fill="none" stroke={white} strokeWidth="2" strokeLinecap="round" />
          <path d="M 30 46 Q 40 48 52 46" fill="none" stroke="#0e0a24" strokeOpacity="0.35" strokeWidth="1.2" />
          <rect x="32" y="52" width="18" height="3" rx="1.2" fill="#0e0a24" opacity="0.6" />
        </g>
      );
  }
}

function ShieldBadge({ name, sport, tone }: {
  name: string;
  sport: SportKey;
  tone: string;
}) {
  const gid = `sg-${sport}`;
  return (
    <div
      className="group flex flex-col items-center gap-2.5 rounded-xl bg-white p-4 border border-[color:var(--color-border)] transition-all hover:-translate-y-0.5 hover:shadow-md hover:shadow-[rgba(101,30,253,0.10)]"
    >
      <svg viewBox="0 0 80 80" className="h-14 w-14" role="img" aria-label={name}>
        <defs>
          <linearGradient id={gid} x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor={tone} />
            <stop offset="100%" stopColor="#150d26" />
          </linearGradient>
        </defs>
        {/* Shield */}
        <path
          d="M 40 6 L 70 16 L 66 46 Q 62 66 40 74 Q 18 66 14 46 L 10 16 Z"
          fill={`url(#${gid})`}
          stroke="#0e0a24"
          strokeWidth="1.2"
        />
        <path
          d="M 40 12 L 64 20 L 60 44 Q 57 60 40 68 Q 23 60 20 44 L 16 20 Z"
          fill="none"
          stroke="#ffffff"
          strokeOpacity="0.35"
          strokeWidth="1"
        />
        <SportPictogram sport={sport} />
      </svg>
      <span className="text-xs sm:text-sm font-semibold text-foreground text-center leading-tight">
        {name}
      </span>
    </div>
  );
}

export default function SportsLeaguesStrip() {
  return (
    <section id="sport" className="relative py-14 lg:py-18 section-wash-1">
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <MotionReveal className="text-center mb-10 lg:mb-12">
          <div className="flex items-center justify-center gap-3 mb-4">
            <span className="editorial-rule" />
            <span className="text-[11px] font-semibold tracking-[0.22em] uppercase text-[color:#ff1e1e]">
              Premium Sport Coverage
            </span>
            <span className="editorial-rule" />
          </div>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4 tracking-tight">
            Every UK Fixture Night, One{" "}
            <span className="gradient-text">Subscription</span>
          </h2>
          <p className="mx-auto max-w-2xl text-base text-muted leading-relaxed">
            Best IPTV UK covers weekend football, midweek European cup nights, motorsport, combat and rugby under a single plan with low-latency delivery. No sport add-ons, no separate paywalls.
          </p>
        </MotionReveal>

        <div className="grid grid-cols-4 sm:grid-cols-4 md:grid-cols-8 gap-3 sm:gap-4">
          {LEAGUES.map((l) => (
            <ShieldBadge key={l.key} name={l.name} sport={l.key} tone={l.tone} />
          ))}
        </div>

        <div className="mt-10 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-sm text-muted">
          <span className="inline-flex items-center gap-2">
            <Trophy className="h-4 w-4 text-[color:#ffbc7d]" />
            4K UHD wherever the original broadcast is 4K
          </span>
          <span aria-hidden className="h-1 w-1 rounded-full bg-muted/40" />
          <span>Adaptive bitrate keeps the picture smooth</span>
        </div>
      </div>
    </section>
  );
}
