import { Shield, Wifi, Lock, ServerCog } from "lucide-react";
import Link from "next/link";
import MotionReveal from "./MotionReveal";

const trustItems = [
  {
    icon: Shield,
    title: "30-Day Full Refund Guarantee",
    description:
      "Contact support within 30 days of any purchase and every penny returns the same day. No forms, no retention calls, no fine-print excuses — the refund policy is published in plain English and applies to every first purchase.",
  },
  {
    icon: Wifi,
    title: "Published Uptime — Verified Live",
    description:
      "A public status page tracks uptime minute by minute. Credits apply automatically if the number ever dips below the promise — verifiable infrastructure rather than a marketing figure.",
  },
  {
    icon: Lock,
    title: "Secure Proxy Add-On — Optional Privacy Layer",
    description:
      "An optional Secure Proxy routes traffic through encrypted UK servers. No bandwidth cap, no logs, available on every plan tier. A comparable third-party privacy tool typically costs £5 – £10 a month.",
  },
  {
    icon: ServerCog,
    title: "24/7 British Support Team",
    description:
      "A British support team handles live chat, WhatsApp and email 24/7. Subscriber feedback covers real-world performance, picture stability and response times — the metrics that matter once the subscription goes live.",
  },
];

export default function TrustSection() {
  return (
    <section className="relative py-11 lg:py-16">
      <div className="absolute inset-0 section-gradient-2" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <MotionReveal className="text-center mb-16">
          <span className="inline-block rounded-full bg-emerald-50 border border-emerald-200 px-4 py-1.5 text-sm font-medium text-emerald-700 mb-4">
            Four Hard Promises
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            The Subscription Guarantee &mdash;{" "}
            <span className="gradient-text">Four Promises We Publish In Writing</span>
          </h2>
          <p className="mx-auto max-w-xl text-lg text-muted">
            A subscription promise is only meaningful if it is verifiable. Every commitment below is published, measured and covered by a full{" "}
            <Link href="/refund" className="text-violet-600 hover:text-violet-700 underline-offset-2 hover:underline">
              same-day refund
            </Link>{" "}subscribers can verify before paying.
          </p>
        </MotionReveal>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {trustItems.map((item, i) => (
            <MotionReveal
              key={item.title}
              delay={i * 0.1}
              className="group text-center"
            >
              <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-2xl border border-emerald-100 bg-gradient-to-br from-emerald-50 to-cyan-50 transition-all group-hover:border-emerald-200 group-hover:bg-emerald-100 group-hover:shadow-lg group-hover:shadow-emerald-100/50">
                <item.icon className="h-7 w-7 text-emerald-600" />
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-2">{item.title}</h3>
              <p className="text-sm text-muted leading-relaxed">{item.description}</p>
            </MotionReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
