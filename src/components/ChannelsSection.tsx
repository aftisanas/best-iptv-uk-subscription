import { Tv, Trophy, Film, Baby, Newspaper, Globe, ArrowRight } from "lucide-react";
import SectionLink from "./SectionLink";
import MotionReveal from "./MotionReveal";
import { CHANNEL_CATEGORIES } from "@/lib/constants";

const iconMap = { Tv, Trophy, Film, Baby, Newspaper, Globe } as const;

export default function ChannelsSection() {
  return (
    <section id="channels" className="relative py-11 lg:py-16">
      <div className="absolute inset-0 mesh-gradient" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <MotionReveal className="text-center mb-14">
          <div className="flex items-center justify-center gap-3 mb-4">
            <span className="editorial-rule" />
            <span className="text-[11px] font-semibold tracking-[0.22em] uppercase text-[color:var(--color-primary)]">
              37,000 Live Channels
            </span>
            <span className="editorial-rule" />
          </div>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4 tracking-tight">
            The Best IPTV UK Channel Line-Up{" "}
            <span className="gradient-text">Organised By Category</span>
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-muted">
            The Best IPTV UK library covers every category UK viewers want. The six packs below group the channels subscribers watch most — and every one ships with every{" "}
            <SectionLink href="/#pricing" className="text-[color:var(--color-primary)] hover:text-[color:var(--color-primary-hover)] underline-offset-2 hover:underline">
              subscription plan
            </SectionLink>, no add-ons or hidden fees.
          </p>
        </MotionReveal>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-6">
          {CHANNEL_CATEGORIES.map((cat) => {
            const Icon = iconMap[cat.icon];
            return (
              <div
                key={cat.name}
                className="group relative overflow-hidden rounded-2xl border border-[color:var(--color-border)] bg-white p-6 transition-all duration-500 hover:border-[color:var(--color-primary)]/30 hover:shadow-lg hover:shadow-[rgba(101,30,253,0.10)] premium-card flex flex-col"
              >
                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-[#f2ecff] to-transparent rounded-bl-full opacity-0 transition-opacity group-hover:opacity-100" />

                <div className="relative flex flex-col flex-1">
                  <div className="flex items-center gap-4 mb-3">
                    <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-[#f2ecff] to-[#fff5ec] transition-all group-hover:from-[color:var(--color-primary)]/20 group-hover:to-[#ffe6ec]">
                      <Icon className="h-6 w-6 text-[color:var(--color-primary)]" />
                    </div>
                    <div>
                      <h3 className="font-display text-lg font-semibold text-foreground leading-snug">{cat.name}</h3>
                      <p className="text-2xl font-bold gradient-text">{cat.count}</p>
                    </div>
                  </div>
                  <p className="text-sm text-muted leading-relaxed mb-4">
                    {cat.channels}
                  </p>
                  <SectionLink
                    href={cat.linkHref}
                    className="mt-auto inline-flex items-center gap-1.5 text-sm font-medium text-[color:var(--color-primary)] transition-all hover:text-[color:var(--color-primary-hover)] group-hover:gap-2"
                  >
                    {cat.linkLabel}
                    <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" />
                  </SectionLink>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
