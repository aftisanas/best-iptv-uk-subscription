import Link from "next/link";
import MotionReveal from "./MotionReveal";
import { Film, Sparkles } from "lucide-react";

/**
 * Editorial poster wall using SVG-generated tiles.
 * No third-party artwork — genre-labelled abstract posters generated in-code.
 * Communicates "large VOD library" without copyright exposure.
 */
const POSTERS = [
  { genre: "Sci-Fi", tag: "4K UHD", from: "#651efd", to: "#150d26" },
  { genre: "Thriller", tag: "New", from: "#ff1e1e", to: "#2b0c6b" },
  { genre: "Drama", tag: "Series", from: "#ff6fa1", to: "#651efd" },
  { genre: "Comedy", tag: "HD", from: "#ffbc7d", to: "#ff1e1e" },
  { genre: "Family", tag: "Kids-safe", from: "#9abcec", to: "#651efd" },
  { genre: "Sport", tag: "Live", from: "#ff1e1e", to: "#150d26" },
  { genre: "Doc", tag: "BBC-style", from: "#651efd", to: "#9abcec" },
  { genre: "Anime", tag: "Subbed/Dub", from: "#ff6fa1", to: "#ffbc7d" },
] as const;

function PosterTile({ genre, tag, from, to }: {
  genre: string;
  tag: string;
  from: string;
  to: string;
}) {
  const gradId = `pg-${genre.replace(/\W/g, "")}`;
  return (
    <Link
      href="/#pricing"
      aria-label={`${genre} — included in every plan, view pricing`}
      className="group relative block aspect-[2/3] overflow-hidden rounded-xl shadow-md ring-1 ring-black/5 transition-transform duration-300 hover:-translate-y-1 hover:shadow-xl focus-visible:outline-2 focus-visible:outline-[color:var(--color-primary)] focus-visible:outline-offset-2"
    >
      <svg viewBox="0 0 200 300" className="w-full h-full block">
        <defs>
          <linearGradient id={gradId} x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor={from} />
            <stop offset="100%" stopColor={to} />
          </linearGradient>
        </defs>
        <rect width="200" height="300" fill={`url(#${gradId})`} />
        {/* Abstract highlight */}
        <circle cx="150" cy="70" r="55" fill="#ffffff" opacity="0.10" />
        <circle cx="42" cy="240" r="80" fill="#ffffff" opacity="0.08" />
        {/* Silhouette */}
        <path
          d="M 20 300 L 20 220 Q 60 180 100 220 Q 140 260 180 210 L 180 300 Z"
          fill="#0e0a24"
          opacity="0.55"
        />
        {/* Tag pill */}
        <g transform="translate(12, 12)">
          <rect x="0" y="0" width="62" height="20" rx="10" fill="#ffffff" opacity="0.94" />
          <text x="31" y="14" textAnchor="middle" fontFamily="Inter, sans-serif" fontSize="9" fontWeight="800" fill="#0e0a24">
            {tag.toUpperCase()}
          </text>
        </g>
        {/* Genre title */}
        <text
          x="16"
          y="270"
          fontFamily="Inter, sans-serif"
          fontSize="18"
          fontWeight="800"
          fill="#ffffff"
        >
          {genre}
        </text>
        <text
          x="16"
          y="286"
          fontFamily="Inter, sans-serif"
          fontSize="9"
          fontWeight="600"
          letterSpacing="0.14em"
          fill="#ffffff"
          opacity="0.75"
        >
          BEST IPTV UK · VOD
        </text>
      </svg>
      {/* Hover overlay — honest CTA, not a fake player */}
      <div className="absolute inset-0 flex items-end justify-center bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 transition-opacity group-hover:opacity-100">
        <div className="mb-4 inline-flex items-center gap-1.5 rounded-full bg-white/95 px-3 py-1.5 text-[11px] font-bold uppercase tracking-[0.12em] text-[color:var(--color-primary)] shadow-lg">
          In every plan
          <span aria-hidden>→</span>
        </div>
      </div>
    </Link>
  );
}

export default function MoviePostersStrip() {
  return (
    <section id="library" className="relative py-14 lg:py-20">
      <div className="absolute inset-0 mesh-gradient" />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <MotionReveal className="text-center mb-10 lg:mb-12">
          <div className="flex items-center justify-center gap-3 mb-4">
            <span className="editorial-rule" />
            <span className="text-[11px] font-semibold tracking-[0.22em] uppercase text-[color:var(--color-primary)]">
              198,000+ Films &amp; Series
            </span>
            <span className="editorial-rule" />
          </div>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4 tracking-tight">
            A UK VOD Library That{" "}
            <span className="gradient-text">Doesn&apos;t Run Out</span>
          </h2>
          <p className="mx-auto max-w-2xl text-base text-muted leading-relaxed">
            The Best IPTV UK VOD library covers films, boxsets, world cinema, kids and documentary — refreshed daily and browsed inside the same app as live TV. Genre-organised so subscribers don&apos;t hunt for a title.
          </p>
        </MotionReveal>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-4 gap-3 sm:gap-4 lg:gap-5">
          {POSTERS.map((p) => (
            <PosterTile key={p.genre} {...p} />
          ))}
        </div>

        <div className="mt-10 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-sm text-muted">
          <span className="inline-flex items-center gap-2">
            <Sparkles className="h-4 w-4 text-[color:#ffbc7d]" />
            Refreshed daily
          </span>
          <span aria-hidden className="h-1 w-1 rounded-full bg-muted/40" />
          <span className="inline-flex items-center gap-2">
            <Film className="h-4 w-4 text-[color:var(--color-primary)]" />
            One search, live &amp; on-demand
          </span>
        </div>
      </div>
    </section>
  );
}
