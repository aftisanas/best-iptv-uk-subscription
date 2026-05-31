import type { Metadata } from "next";
import { SITE_NAME, CONTACT_EMAIL } from "@/lib/constants";

export const metadata: Metadata = {
  title: "DMCA Policy",
  description: `DMCA and copyright policy for ${SITE_NAME} — the rules that govern how takedown notices are handled.`,
  alternates: { canonical: "/dmca" },
};

export default function DMCAPage() {
  return (
    <div className="pt-20">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
        <h1 className="text-3xl sm:text-4xl font-bold text-foreground mb-8">DMCA Policy</h1>
        <div className="space-y-6 text-sm text-gray-600 leading-relaxed">
          <p className="text-muted">Last updated: 22 April 2026</p>

          <section>
            <h2 className="text-xl font-semibold text-foreground mb-3">Our Stance On Copyright</h2>
            <p>{SITE_NAME} honours every valid claim brought under the Digital Millennium Copyright Act and the UK Copyright, Designs and Patents Act 1988. Rights holders receive a same-working-day acknowledgement on every complete notice.</p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-foreground mb-3">How To Submit A Takedown Notice</h2>
            <p>Send the following to the designated agent at <a href={`mailto:${CONTACT_EMAIL}`} className="text-primary hover:underline">{CONTACT_EMAIL}</a>:</p>
            <ul className="list-disc ml-5 mt-2 space-y-1">
              <li>Identification of the copyrighted work claimed to be infringed</li>
              <li>Exact location (URL or stream identifier) of the allegedly infringing content</li>
              <li>Name, postal address, telephone and email of the complainant</li>
              <li>A good-faith statement that the use is not authorised by the rights holder</li>
              <li>A statement, under penalty of perjury, that the information supplied is accurate</li>
              <li>A physical or electronic signature of the rights holder or authorised agent</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-foreground mb-3">Trademark Disclaimer</h2>
            <p>{SITE_NAME} is not affiliated with any broadcaster, network or rights holder mentioned on the site. Every trademark and logo referenced remains the property of its respective owner. Subscribers remain responsible for lawful consumption of the content delivered through the platform.</p>
          </section>
        </div>
      </div>
    </div>
  );
}
