import { Shield, Wifi, Lock, ServerCog } from "lucide-react";
import Link from "next/link";
import MotionReveal from "./MotionReveal";

const trustItems = [
  {
    icon: Shield,
    title: "Best IPTV UK 30-Day Full Refund Guarantee",
    description:
      "Contact support within 30 days of any purchase and every penny returns the same day. No forms, no retention calls, no fine-print excuses — the refund policy is published in plain English and applies to every first purchase.",
  },
  {
    icon: Wifi,
    title: "Best IPTV UK 4K On Every Plan — Never Gated",
    description:
      "Native 4K UHD is enabled on every plan tier, not reserved for the most expensive one. Streams adapt bitrate in real time, so the picture holds when a line dips mid-stream instead of freezing — and the pricing table is the proof, checkable before payment.",
  },
  {
    icon: Lock,
    title: "Best IPTV UK Secure Proxy — Optional Privacy Layer",
    description:
      "An optional Secure Proxy routes traffic through encrypted UK servers. No bandwidth cap, no logs, available on every plan tier. A comparable third-party privacy tool typically costs £5 – £10 a month.",
  },
  {
    icon: ServerCog,
    title: "Best IPTV UK 24/7 British Support Team",
    description:
      "A British support team handles live chat, WhatsApp and email 24/7. Subscriber feedback covers real-world performance, picture stability and response times — the metrics that matter once the subscription goes live.",
  },
];

export default function TrustSection() {
  return (
    <section className="relative py-11 lg:py-16">
      <div className="absolute inset-0 section-gradient-2" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <MotionReveal className="text-center mb-14">
          <div className="flex items-center justify-center gap-3 mb-4">
            <span className="editorial-rule" />
            <span className="text-[11px] font-semibold tracking-[0.22em] uppercase text-[color:var(--color-primary)]">
              Four Hard Promises
            </span>
            <span className="editorial-rule" />
          </div>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4 tracking-tight">
            The Best IPTV UK Guarantee &mdash;{" "}
            <span className="gradient-text">Four Promises We Publish In Writing</span>
          </h2>
          <p className="mx-auto max-w-xl text-lg text-muted">
            A subscription promise is only meaningful if it is verifiable. Every commitment below is published, measured and covered by a full{" "}
            <Link href="/refund" className="text-[color:var(--color-primary)] hover:text-[color:var(--color-primary-hover)] underline-offset-2 hover:underline">
              same-day refund
            </Link>{" "}subscribers can verify before paying.
          </p>
        </MotionReveal>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {trustItems.map((item) => (
            <div key={item.title} className="group text-center">
              <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-2xl border border-[color:var(--color-primary)]/20 bg-gradient-to-br from-[#f2ecff] to-[#fff5ec] transition-all group-hover:border-[color:var(--color-primary)]/40 group-hover:shadow-lg group-hover:shadow-[rgba(101,30,253,0.15)]">
                <item.icon className="h-7 w-7 text-[color:var(--color-primary)]" />
              </div>
              <h3 className="font-display text-lg font-semibold text-foreground mb-2 leading-snug">{item.title}</h3>
              <p className="text-sm text-muted leading-relaxed">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
