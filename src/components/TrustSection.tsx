"use client";

import { motion } from "framer-motion";
import { Shield, Wifi, Lock, ServerCog } from "lucide-react";
import Link from "next/link";

const trustItems = [
  {
    icon: Shield,
    title: "Best IPTV UK 30-Day Full Refund Guarantee",
    description:
      "Contact support within 30 days of any purchase and every penny returns the same day. No forms, no retention calls, no fine-print excuses — the refund policy the best IPTV UK service is happy to put in writing.",
  },
  {
    icon: Wifi,
    title: "Best IPTV UK 99.9% Uptime — Published Live",
    description:
      "A public status page tracks uptime minute by minute. Credits apply automatically if the number ever dips below the promise — transparent infrastructure separates the best IPTV UK service from the unreliable.",
  },
  {
    icon: Lock,
    title: "Best IPTV UK Free VPN — Privacy Without Extra Cost",
    description:
      "Every plan ships with a built-in VPN for unlimited use. No bandwidth cap, no logs, no upsell. Most rival best IPTV UK offers charge £5 – £10 a month for a comparable add-on.",
  },
  {
    icon: ServerCog,
    title: "Best IPTV UK Rated #1 — 4.9/5 From 50,000 Users",
    description:
      "The rating updates in real time on Trustpilot. No curated reviews, no removed feedback — the score is earned, not edited. Live chat, WhatsApp and email staffed 24/7 by a named British team back it up.",
  },
];

export default function TrustSection() {
  return (
    <section className="relative py-11 lg:py-16">
      <div className="absolute inset-0 section-gradient-2" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="inline-block rounded-full bg-emerald-50 border border-emerald-200 px-4 py-1.5 text-sm font-medium text-emerald-700 mb-4">
            Four Hard Promises
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            The Best IPTV UK Guarantee &mdash;{" "}
            <span className="gradient-text">Four Ways This Service Stands Behind Rank #1</span>
          </h2>
          <p className="mx-auto max-w-xl text-lg text-muted">
            The &ldquo;best&rdquo; label is only real if it is backed. Every commitment below is published, measured and covered by a full{" "}
            <Link href="/refund" className="text-violet-600 hover:text-violet-700 underline-offset-2 hover:underline">
              same-day refund
            </Link>{" "}subscribers can verify before paying.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {trustItems.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="group text-center"
            >
              <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-2xl border border-emerald-100 bg-gradient-to-br from-emerald-50 to-cyan-50 transition-all group-hover:border-emerald-200 group-hover:bg-emerald-100 group-hover:shadow-lg group-hover:shadow-emerald-100/50">
                <item.icon className="h-7 w-7 text-emerald-600" />
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-2">{item.title}</h3>
              <p className="text-sm text-muted leading-relaxed">{item.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
