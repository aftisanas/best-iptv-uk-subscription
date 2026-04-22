import type { Metadata } from "next";
import { SITE_NAME, CONTACT_EMAIL } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Best IPTV UK Refund Policy — 30-Day Money-Back Guarantee",
  description: `${SITE_NAME} refund policy. Every first purchase on the best IPTV UK service is covered by a no-questions 30-day refund.`,
  alternates: { canonical: "/refund" },
};

export default function RefundPage() {
  return (
    <div className="pt-20">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
        <h1 className="text-3xl sm:text-4xl font-bold text-foreground mb-8">Best IPTV UK Refund Policy</h1>
        <div className="space-y-6 text-sm text-gray-600 leading-relaxed">
          <p className="text-muted">Last updated: 22 April 2026</p>

          <section>
            <h2 className="text-xl font-semibold text-foreground mb-3">Best IPTV UK 30-Day Money-Back Promise</h2>
            <p>{SITE_NAME} stands behind the best IPTV UK label with an unconditional 30-day refund on every first subscription. If picture quality, channel coverage or any other promise fails to land inside the first month, the full amount returns same-day.</p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-foreground mb-3">Requesting A Best IPTV UK Refund</h2>
            <p>One message starts the process. Live chat, WhatsApp or an email to <a href={`mailto:${CONTACT_EMAIL}`} className="text-primary hover:underline">{CONTACT_EMAIL}</a> with the order reference is all that is required. No forms, no retention calls.</p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-foreground mb-3">Best IPTV UK Refund Processing Times</h2>
            <p>Refund approval lands within 24 hours of the request. Funds appear on the original payment method in 5 – 10 banking days for card purchases, instantly for PayPal and within one hour for crypto settlements.</p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-foreground mb-3">Best IPTV UK Refund Boundaries</h2>
            <p>The 30-day promise applies to first purchases only. Renewals and repeat subscriptions sit under a 7-day refund window, reflected at the checkout screen before confirmation. Anyone unsure is encouraged to ask before paying — the support team quotes the applicable window in writing.</p>
          </section>
        </div>
      </div>
    </div>
  );
}
