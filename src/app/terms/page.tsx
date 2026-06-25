import type { Metadata } from "next";
import { SITE_NAME, CONTACT_EMAIL } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Terms of Service",
  description: `Terms and conditions that govern use of ${SITE_NAME}. Subscription, payment and acceptable-use rules for every plan.`,
  alternates: { canonical: "/terms" },
};

export default function TermsPage() {
  return (
    <div className="pt-20">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
        <h1 className="text-3xl sm:text-4xl font-bold text-foreground mb-8">Terms of Service</h1>
        <div className="space-y-6 text-sm text-gray-600 leading-relaxed">
          <p className="text-muted">Last updated: 22 April 2026</p>

          <section>
            <h2 className="text-xl font-semibold text-foreground mb-3">1. Accepting These Terms</h2>
            <p>Using {SITE_NAME} (&ldquo;the Service&rdquo;) confirms acceptance of the clauses that follow. Any subscriber who disagrees with a clause should end the subscription inside the 30-day refund window.</p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-foreground mb-3">2. Service Description</h2>
            <p>{SITE_NAME} is an IPTV subscription that streams live television channels and video-on-demand content over the internet to subscribers in the United Kingdom and abroad, under the infrastructure and guarantees described on the homepage.</p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-foreground mb-3">3. Billing &amp; Payment Cycles</h2>
            <p>All prices on the site are published in British Pounds (GBP) and charged upfront for the selected term — three, six, twelve or 24 months. Payment authorisation occurs at checkout; access activates the moment the gateway confirms the charge.</p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-foreground mb-3">4. Refund Window</h2>
            <p>Every first purchase carries a 30-day, no-questions refund. Contacting support within that window triggers a full return of funds, processed to the original payment method inside 5 – 10 banking days.</p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-foreground mb-3">5. Acceptable Use</h2>
            <p>Credentials are issued for one household — sharing, reselling or redistributing access falls outside acceptable use. Repeated or commercial abuse permits {SITE_NAME} to suspend the account without refund.</p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-foreground mb-3">6. Uptime Commitment</h2>
            <p>Service availability may be affected by maintenance, infrastructure issues or third-party disruptions. Planned maintenance windows are communicated where practical.</p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-foreground mb-3">7. Contract Contact</h2>
            <p>Contract queries, suspension appeals and account-closure requests route to <a href={`mailto:${CONTACT_EMAIL}`} className="text-primary hover:underline">{CONTACT_EMAIL}</a>. Responses arrive inside one working day.</p>
          </section>
        </div>
      </div>
    </div>
  );
}
