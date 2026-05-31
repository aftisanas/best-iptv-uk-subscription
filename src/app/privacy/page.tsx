import type { Metadata } from "next";
import { SITE_NAME, CONTACT_EMAIL } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: `Privacy policy for ${SITE_NAME}. How subscriber personal data is stored, processed and protected under UK GDPR.`,
  alternates: { canonical: "/privacy" },
};

export default function PrivacyPage() {
  return (
    <div className="pt-20">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
        <h1 className="text-3xl sm:text-4xl font-bold text-foreground mb-8">Privacy Policy</h1>
        <div className="space-y-6 text-sm text-gray-600 leading-relaxed">
          <p className="text-muted">Last updated: 22 April 2026</p>

          <section>
            <h2 className="text-xl font-semibold text-foreground mb-3">1. Data Recorded</h2>
            <p>{SITE_NAME} records only the information required to deliver the service: subscriber name, email, billing details at checkout, plus technical signals such as device identifier, IP address and viewing preferences used to stabilise streams. Nothing else is stored against a subscriber profile.</p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-foreground mb-3">2. Why Subscriber Data Is Processed</h2>
            <p>Subscriber data fulfils three purposes: keeping the service running, handling payments and issuing the support responses for which {SITE_NAME} is known. Subscriber records are never sold, leased or traded with any third party — under any circumstance.</p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-foreground mb-3">3. How Information Is Secured</h2>
            <p>Transport-layer encryption (HTTPS) protects every request to the site. Payment processors (Stripe and PayPal) hold card details directly — {SITE_NAME} never stores them. The business complies with UK GDPR and the Data Protection Act 2018 in full.</p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-foreground mb-3">4. Subscriber Data Rights</h2>
            <p>UK law grants the right to access, correct, export, restrict or delete personal data held by {SITE_NAME}. Exercising any right takes a single email to <a href={`mailto:${CONTACT_EMAIL}`} className="text-primary hover:underline">{CONTACT_EMAIL}</a> and a response within 30 days.</p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-foreground mb-3">5. Cookies</h2>
            <p>Only two cookie categories are used: strictly necessary cookies for login and cart state, and anonymised analytics that measure how visitors move through the pages. Analytics can be disabled in any modern browser without affecting access to the service.</p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-foreground mb-3">6. Privacy Contact</h2>
            <p>All privacy-related enquiries route to the Data Protection Officer at <a href={`mailto:${CONTACT_EMAIL}`} className="text-primary hover:underline">{CONTACT_EMAIL}</a>. Policy updates are re-dated at the top of this page whenever the substance changes.</p>
          </section>
        </div>
      </div>
    </div>
  );
}
