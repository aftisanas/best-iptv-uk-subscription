import Link from "next/link";
import { Tv, Smartphone, Monitor, Flame, Box, Airplay } from "lucide-react";
import SectionLink from "./SectionLink";
import MotionReveal from "./MotionReveal";
import MotionScaleCard from "./MotionScaleCard";
import { DEVICES } from "@/lib/constants";

const iconMap = { Tv, Smartphone, Monitor, Flame, Box, Airplay } as const;

export default function DevicesSection() {
  return (
    <section className="relative py-11 lg:py-16">
      <div className="absolute inset-0 section-gradient-2" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <MotionReveal className="text-center mb-16">
          <span className="inline-block rounded-full bg-cyan-50 border border-cyan-200 px-4 py-1.5 text-sm font-medium text-cyan-700 mb-4">
            Runs Everywhere
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Best IPTV UK On Every{" "}
            <span className="gradient-text">Device You Already Own</span>
          </h2>
          <p className="mx-auto max-w-xl text-lg text-muted">
            One{" "}
            <SectionLink href="/#pricing" className="text-violet-600 hover:text-violet-700 underline-offset-2 hover:underline">
              subscription plan
            </SectionLink>, five concurrent streams, zero extra hardware. The service runs on every mainstream platform without a single download from outside the official app stores.
          </p>
        </MotionReveal>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 lg:gap-6">
          {DEVICES.map((device, i) => {
            const Icon = iconMap[device.icon];
            return (
              <MotionScaleCard
                key={device.name}
                delay={i * 0.05}
                className="group rounded-2xl border border-violet-100/50 bg-white transition-all duration-300 hover:border-violet-200 hover:shadow-lg hover:shadow-violet-100/40"
              >
                <Link
                  href={`/tutorials/${device.tutorialSlug}`}
                  className="flex h-full flex-col items-center gap-4 rounded-2xl p-6 focus-visible:outline-2 focus-visible:outline-violet-600 focus-visible:outline-offset-2"
                  aria-label={`IPTV setup guide for ${device.name}`}
                >
                  <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-violet-100 to-cyan-50 transition-all group-hover:from-violet-200/80 group-hover:to-cyan-100/50 group-hover:shadow-md group-hover:shadow-violet-200/30">
                    <Icon className="h-7 w-7 text-violet-600 transition-colors group-hover:text-purple-600" />
                  </div>
                  <span className="text-sm font-medium text-muted text-center transition-colors group-hover:text-foreground">
                    {device.name}
                  </span>
                  <span className="text-xs font-semibold text-violet-600 opacity-0 transition-opacity group-hover:opacity-100">
                    Setup guide →
                  </span>
                </Link>
              </MotionScaleCard>
            );
          })}
        </div>

        <div className="mt-10 text-center">
          <Link
            href="/tutorials"
            className="inline-flex items-center gap-2 rounded-xl border border-violet-200 bg-white px-6 py-3 text-sm font-semibold text-violet-700 transition-colors hover:bg-violet-50 focus-visible:outline-2 focus-visible:outline-violet-600 focus-visible:outline-offset-2"
          >
            See all 12 device setup guides →
          </Link>
        </div>
      </div>
    </section>
  );
}
