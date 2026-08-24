"use client";

import { motion } from "framer-motion";
import { Mail, Clock, MapPin, Headphones, Star, MessageCircle } from "lucide-react";
import { CONTACT_EMAIL, WHATSAPP_URL, WHATSAPP_NUMBER } from "@/lib/constants";

const formatWhatsAppNumber = (raw: string) => {
  const digits = raw.replace(/\D/g, "");
  if (!digits.startsWith("44")) return `+${digits}`;
  const rest = digits.slice(2);
  return `+44 ${rest.slice(0, 4)} ${rest.slice(4, 7)} ${rest.slice(7)}`.trim();
};

const contactMethods = [
  {
    icon: MessageCircle,
    title: "WhatsApp",
    description: "Fastest route — chat with the team on your phone.",
    detail: formatWhatsAppNumber(WHATSAPP_NUMBER),
    action: WHATSAPP_URL,
    external: true,
    badge: "Fastest",
    badgeColor: "bg-accent/10 text-accent border border-accent/20",
  },
  {
    icon: Mail,
    title: "Email Us",
    description: "For detailed enquiries and account-related questions.",
    detail: CONTACT_EMAIL,
    action: `mailto:${CONTACT_EMAIL}`,
    external: false,
    badge: "24/7",
    badgeColor: "bg-primary/10 text-primary border border-primary/10",
  },
];

export default function ContactContent() {
  return (
    <div>
      {/* ── Hero ── */}
      <section className="relative overflow-hidden section-wash-dark pt-28 pb-20 lg:pt-36 lg:pb-24">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(255,188,125,0.16),transparent_55%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,rgba(255,30,30,0.10),transparent_55%)]" />

        <div
          className="absolute inset-0 opacity-[0.05] pointer-events-none"
          style={{
            backgroundImage: `linear-gradient(rgba(255,255,255,0.15) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.15) 1px, transparent 1px)`,
            backgroundSize: "72px 72px",
          }}
        />

        {/* Content */}
        <div className="relative z-10 mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/[0.06] backdrop-blur-md px-5 py-2 text-[11px] font-semibold tracking-[0.22em] uppercase text-[#ffbc7d] mb-8"
          >
            <Headphones className="h-3.5 w-3.5" />
            <span>Support — 24/7</span>
            <span className="flex gap-0.5 text-[#ffbc7d]">
              {[...Array(5)].map((_, i) => <Star key={i} className="h-3 w-3 fill-current" />)}
            </span>
          </motion.div>

          {/* Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight leading-[1.08] mb-6"
          >
            <span className="text-white">Contact The Best IPTV UK</span>{" "}
            <span className="gradient-text-hero">Support Team</span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="mx-auto max-w-2xl text-lg text-white/75 leading-relaxed"
          >
            The support team is reachable around the clock on WhatsApp and email — real people who work UK IPTV setups every day. Pick whichever is easier and someone will pick it up.
          </motion.p>
        </div>

        <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-[color:var(--color-background)] to-transparent pointer-events-none" />
      </section>

      {/* Contact Methods */}
      <section className="pb-16">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-2xl mx-auto">
            {contactMethods.map((method) => (
              <a
                key={method.title}
                href={method.action}
                target={method.external ? "_blank" : undefined}
                rel={method.external ? "noopener noreferrer" : undefined}
                className="group relative rounded-2xl border border-gray-100 bg-white p-6 text-center transition-all duration-500 hover:border-primary/20 hover:shadow-lg hover:shadow-primary/5 hover:-translate-y-1"
              >
                <div className="absolute top-4 right-4">
                  <span className={`inline-block rounded-full px-2.5 py-1 text-[10px] font-medium ${method.badgeColor}`}>
                    {method.badge}
                  </span>
                </div>

                <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-primary/10 to-accent/5 transition-all group-hover:from-primary/15 group-hover:to-accent/10">
                  <method.icon className="h-6 w-6 text-primary" />
                </div>

                <h3 className="font-display text-lg font-semibold text-foreground mb-2 leading-snug">{method.title}</h3>
                <p className="text-sm text-muted mb-3">{method.description}</p>
                <p className="text-sm font-medium text-primary">{method.detail}</p>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Hours & Info */}
      <section className="pb-24 lg:pb-32">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="rounded-2xl border border-gray-100 bg-white p-8 shadow-sm"
            >
              <div className="flex items-center gap-3 mb-6">
                <Clock className="h-5 w-5 text-primary" />
                <h3 className="font-display text-lg font-semibold text-foreground">Support Hours</h3>
              </div>
              <div className="space-y-4">
                {[
                  { channel: "WhatsApp", note: "24/7 — best for setup help" },
                  { channel: "Email", note: "24/7 — best for account &amp; billing" },
                ].map((item) => (
                  <div key={item.channel} className="flex items-center justify-between py-2 border-b border-gray-50 last:border-0">
                    <span className="text-sm text-muted">{item.channel}</span>
                    <span
                      className="text-sm font-medium text-foreground"
                      dangerouslySetInnerHTML={{ __html: item.note }}
                    />
                  </div>
                ))}
              </div>
              <p className="mt-6 text-xs text-muted leading-relaxed">
                One team covers both channels — pick whichever is easier. There
                are no separate sales, billing or technical queues to route
                through.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="rounded-2xl border border-gray-100 bg-white p-8 shadow-sm"
            >
              <div className="flex items-center gap-3 mb-6">
                <Headphones className="h-5 w-5 text-primary" />
                <h3 className="font-display text-lg font-semibold text-foreground">Where The Team Can Help</h3>
              </div>
              <div className="space-y-3">
                {[
                  "Device setup and installation guidance",
                  "Account and subscription management",
                  "Technical troubleshooting",
                  "Channel and content enquiries",
                  "Billing and payment support",
                  "General enquiries and feedback",
                ].map((item) => (
                  <div key={item} className="flex items-start gap-3">
                    <div className="mt-1.5 h-1.5 w-1.5 rounded-full bg-primary shrink-0" />
                    <span className="text-sm text-muted">{item}</span>
                  </div>
                ))}
              </div>

              <div className="mt-6 flex items-center gap-2 text-xs text-muted">
                <MapPin className="h-3 w-3" />
                <span>Based in London, United Kingdom</span>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}
