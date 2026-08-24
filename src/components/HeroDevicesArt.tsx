/**
 * Inline SVG hero composition: stylised TV with a "playing" 4K UHD screen,
 * a phone + tablet peeking beside it, and floating channel/quality chips.
 * All shapes — no external assets, no third-party logos.
 */
export default function HeroDevicesArt() {
  return (
    <div className="relative w-full aspect-[5/4]">
      <svg
        viewBox="0 0 560 448"
        role="img"
        aria-label="Best IPTV UK: 4K UHD streaming across TV, tablet and phone"
        className="w-full h-full drop-shadow-[0_30px_60px_rgba(0,0,0,0.45)]"
      >
        <defs>
          {/* Screen gradient — deep violet → warm amber (brand palette) */}
          <linearGradient id="screen-grad" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#651efd" />
            <stop offset="55%" stopColor="#a686ff" />
            <stop offset="100%" stopColor="#ffbc7d" />
          </linearGradient>

          {/* TV bezel gradient */}
          <linearGradient id="bezel-grad" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#1a1240" />
            <stop offset="100%" stopColor="#0d0722" />
          </linearGradient>

          {/* Phone/tablet screen */}
          <linearGradient id="device-screen" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#ff1e1e" />
            <stop offset="100%" stopColor="#ff6fa1" />
          </linearGradient>

          {/* Chip glow */}
          <radialGradient id="chip-glow" cx="0.5" cy="0.5" r="0.5">
            <stop offset="0%" stopColor="#ffbc7d" stopOpacity="0.55" />
            <stop offset="100%" stopColor="#ffbc7d" stopOpacity="0" />
          </radialGradient>

          {/* Play button gradient */}
          <linearGradient id="play-grad" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#ffbc7d" />
            <stop offset="100%" stopColor="#ff1e1e" />
          </linearGradient>
        </defs>

        {/* Ambient glow behind composition */}
        <ellipse cx="280" cy="240" rx="240" ry="180" fill="url(#chip-glow)" opacity="0.9" />

        {/* ─── TV / Monitor ─── */}
        <g transform="translate(80, 60)">
          {/* Bezel */}
          <rect x="0" y="0" width="400" height="240" rx="14" fill="url(#bezel-grad)" stroke="#3a2b7a" strokeWidth="1.2" />
          {/* Inner screen */}
          <rect x="12" y="12" width="376" height="216" rx="8" fill="url(#screen-grad)" />

          {/* Screen content — abstract "now playing" scene */}
          {/* Sky/horizon band */}
          <rect x="12" y="12" width="376" height="120" rx="8" fill="#0e0a24" opacity="0.35" />
          {/* Sun/moon */}
          <circle cx="330" cy="60" r="18" fill="#ffbc7d" opacity="0.85" />
          <circle cx="330" cy="60" r="28" fill="#ffbc7d" opacity="0.18" />
          {/* Mountain silhouette */}
          <path d="M 12 148 L 90 90 L 150 130 L 230 70 L 310 128 L 388 100 L 388 148 Z" fill="#150d26" opacity="0.55" />
          <path d="M 12 148 L 60 118 L 130 150 L 200 108 L 280 148 L 340 122 L 388 148 Z" fill="#150d26" opacity="0.75" />

          {/* Play button */}
          <g transform="translate(200, 120)">
            <circle r="34" fill="#ffffff" opacity="0.95" />
            <circle r="34" fill="url(#play-grad)" opacity="0.15" />
            <path d="M -8 -14 L 16 0 L -8 14 Z" fill="url(#play-grad)" />
          </g>

          {/* Progress / scrub bar */}
          <rect x="30" y="200" width="340" height="4" rx="2" fill="#ffffff" opacity="0.25" />
          <rect x="30" y="200" width="140" height="4" rx="2" fill="#ffffff" opacity="0.9" />
          <circle cx="170" cy="202" r="5" fill="#ffbc7d" />

          {/* 4K UHD badge */}
          <g transform="translate(30, 30)">
            <rect x="0" y="0" width="52" height="22" rx="4" fill="#ffffff" opacity="0.95" />
            <text x="26" y="15" textAnchor="middle" fontFamily="Inter, sans-serif" fontSize="10" fontWeight="800" fill="#651efd">
              4K UHD
            </text>
          </g>

          {/* Live dot + label */}
          <g transform="translate(340, 30)">
            <rect x="0" y="0" width="38" height="22" rx="4" fill="#ff1e1e" />
            <circle cx="8" cy="11" r="3" fill="#ffffff">
              <animate attributeName="opacity" values="1;0.3;1" dur="1.6s" repeatCount="indefinite" />
            </circle>
            <text x="24" y="15" textAnchor="middle" fontFamily="Inter, sans-serif" fontSize="9" fontWeight="800" fill="#ffffff">
              LIVE
            </text>
          </g>

          {/* Stand */}
          <path d="M 160 240 L 240 240 L 260 264 L 140 264 Z" fill="url(#bezel-grad)" />
          <rect x="130" y="264" width="140" height="8" rx="4" fill="#0d0722" />
        </g>

        {/* ─── Tablet ─── */}
        <g transform="translate(30, 220)">
          <rect x="0" y="0" width="130" height="170" rx="12" fill="url(#bezel-grad)" stroke="#3a2b7a" strokeWidth="1" />
          <rect x="8" y="8" width="114" height="154" rx="6" fill="url(#device-screen)" />
          {/* Tablet content — poster grid */}
          <rect x="16" y="18" width="46" height="60" rx="3" fill="#ffffff" opacity="0.92" />
          <rect x="68" y="18" width="46" height="60" rx="3" fill="#ffffff" opacity="0.7" />
          <rect x="16" y="84" width="46" height="60" rx="3" fill="#ffffff" opacity="0.7" />
          <rect x="68" y="84" width="46" height="60" rx="3" fill="#ffffff" opacity="0.92" />
        </g>

        {/* ─── Phone ─── */}
        <g transform="translate(430, 240)">
          <rect x="0" y="0" width="90" height="170" rx="14" fill="url(#bezel-grad)" stroke="#3a2b7a" strokeWidth="1" />
          <rect x="6" y="10" width="78" height="150" rx="9" fill="url(#screen-grad)" />
          {/* Phone content — channel rows */}
          <rect x="12" y="18" width="66" height="20" rx="3" fill="#ffffff" opacity="0.92" />
          <rect x="12" y="44" width="66" height="14" rx="2" fill="#ffffff" opacity="0.55" />
          <rect x="12" y="62" width="52" height="14" rx="2" fill="#ffffff" opacity="0.55" />
          <rect x="12" y="80" width="66" height="14" rx="2" fill="#ffffff" opacity="0.55" />
          <rect x="12" y="98" width="42" height="14" rx="2" fill="#ffffff" opacity="0.55" />
          {/* Phone play button */}
          <circle cx="45" cy="138" r="12" fill="#ffffff" opacity="0.95" />
          <path d="M 42 132 L 51 138 L 42 144 Z" fill="#651efd" />
          {/* Notch */}
          <rect x="35" y="4" width="20" height="4" rx="2" fill="#0d0722" />
        </g>

        {/* ─── Floating chips ─── */}
        {/* 37,000+ channels */}
        <g transform="translate(20, 40)">
          <rect x="0" y="0" width="130" height="42" rx="21" fill="#ffffff" opacity="0.97" />
          <circle cx="21" cy="21" r="10" fill="#651efd" />
          <text x="21" y="25" textAnchor="middle" fontFamily="Inter, sans-serif" fontSize="10" fontWeight="800" fill="#ffffff">TV</text>
          <text x="42" y="18" fontFamily="Inter, sans-serif" fontSize="14" fontWeight="800" fill="#0e0a24">37,000+</text>
          <text x="42" y="32" fontFamily="Inter, sans-serif" fontSize="8" fontWeight="600" fill="#4a4665" letterSpacing="0.05em">CHANNELS</text>
        </g>

        {/* 5 screens */}
        <g transform="translate(410, 20)">
          <rect x="0" y="0" width="130" height="42" rx="21" fill="#ffffff" opacity="0.97" />
          <circle cx="21" cy="21" r="10" fill="#ff1e1e" />
          <text x="21" y="25" textAnchor="middle" fontFamily="Inter, sans-serif" fontSize="10" fontWeight="800" fill="#ffffff">5x</text>
          <text x="42" y="18" fontFamily="Inter, sans-serif" fontSize="14" fontWeight="800" fill="#0e0a24">5 Screens</text>
          <text x="42" y="32" fontFamily="Inter, sans-serif" fontSize="8" fontWeight="600" fill="#4a4665" letterSpacing="0.05em">CONCURRENT</text>
        </g>

        {/* 198,000+ VOD */}
        <g transform="translate(400, 400)">
          <rect x="0" y="0" width="140" height="42" rx="21" fill="#ffffff" opacity="0.97" />
          <circle cx="21" cy="21" r="10" fill="#ffbc7d" />
          <text x="21" y="25" textAnchor="middle" fontFamily="Inter, sans-serif" fontSize="10" fontWeight="800" fill="#0e0a24">VOD</text>
          <text x="42" y="18" fontFamily="Inter, sans-serif" fontSize="14" fontWeight="800" fill="#0e0a24">198,000+</text>
          <text x="42" y="32" fontFamily="Inter, sans-serif" fontSize="8" fontWeight="600" fill="#4a4665" letterSpacing="0.05em">FILMS &amp; SERIES</text>
        </g>

        {/* Small orbit dots */}
        <circle cx="510" cy="120" r="4" fill="#ffbc7d" opacity="0.9">
          <animate attributeName="cy" values="120;108;120" dur="4s" repeatCount="indefinite" />
        </circle>
        <circle cx="40" cy="180" r="3" fill="#9abcec" opacity="0.85">
          <animate attributeName="cx" values="40;52;40" dur="5s" repeatCount="indefinite" />
        </circle>
        <circle cx="270" cy="420" r="3" fill="#ff6fa1" opacity="0.85">
          <animate attributeName="cy" values="420;410;420" dur="4.5s" repeatCount="indefinite" />
        </circle>
      </svg>
    </div>
  );
}
