"use client";

import { motion } from "framer-motion";
import { Check, Minus, AlertTriangle, Scale } from "lucide-react";
import Link from "next/link";
import { COMPARISON_ROWS } from "@/lib/constants";

const renderCell = (value: string, kind: "ours" | "typical" | "unlicensed") => {
  const lower = value.toLowerCase();
  const isPositive =
    lower.startsWith("yes") ||
    lower.includes("published") ||
    lower.includes("24/7") ||
    lower.includes("30 days") ||
    lower.startsWith("up to 5") ||
    lower.includes("from £");
  const isNegative =
    lower.startsWith("no") ||
    lower.includes("none") ||
    lower.includes("not published") ||
    lower.includes("unstable") ||
    lower.includes("free (risk)");
  const isWarning =
    lower.includes("variable") ||
    lower.includes("rarely") ||
    lower.includes("email only") ||
    lower.includes("3 – 7") ||
    lower.includes("premium tier") ||
    lower.includes("£15 – £25") ||
    lower.includes("8,000") ||
    lower.includes("1 – 2");

  const Icon = isPositive ? Check : isNegative ? AlertTriangle : isWarning ? Minus : null;
  const iconColor =
    kind === "ours"
      ? "text-emerald-600"
      : isNegative
        ? "text-rose-500"
        : isWarning
          ? "text-amber-500"
          : "text-muted";

  return (
    <div className="flex items-start gap-2 leading-snug">
      {Icon && <Icon className={`h-4 w-4 shrink-0 mt-0.5 ${iconColor}`} aria-hidden="true" />}
      <span
        className={
          kind === "ours"
            ? "font-semibold text-foreground"
            : isNegative
              ? "text-rose-700"
              : "text-muted"
        }
      >
        {value}
      </span>
    </div>
  );
};

export default function ComparisonSection() {
  return (
    <section
      id="comparison"
      className="relative py-12 lg:py-16"
    >
      <div className="absolute inset-0 section-gradient-2" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header — H2 + 120-word intro ABOVE the table */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-10 lg:mb-12 max-w-4xl mx-auto"
        >
          <span className="inline-flex items-center gap-1.5 rounded-full bg-violet-50 border border-violet-200 px-4 py-1.5 text-sm font-medium text-violet-700 mb-4">
            <Scale className="h-4 w-4" />
            Category Comparison
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-5">
            IPTV UK Comparison —{" "}
            <span className="gradient-text">
              Direct Reseller vs Typical Service vs Unlicensed
            </span>
          </h2>
          <p className="text-base sm:text-lg text-muted leading-relaxed">
            Most UK IPTV comparisons name competitors by brand — and either
            trade objectivity for affiliate placements or invite trademark
            trouble when broadcaster names creep in. The table below works
            differently. Three categories: this direct UK service, a typical
            reseller IPTV plan, and an unlicensed free stream. The point
            isn&apos;t to humiliate competitors — it&apos;s to show the
            structural differences a UK buyer can verify on any provider&apos;s
            site before paying. Channel count, refund window, GBP pricing
            transparency, UK support and uptime publication all separate the
            categories more than any specific brand name. Read down each column
            to apply the same framework.
          </p>
        </motion.div>

        {/* Table — preserves COMPARISON_ROWS structure unchanged */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="overflow-hidden rounded-2xl border border-violet-100/60 bg-white shadow-sm"
        >
          {/* Desktop / tablet table */}
          <div className="hidden md:block">
            <table className="w-full">
              <thead>
                <tr className="bg-gradient-to-r from-violet-50 to-cyan-50/40 border-b border-violet-100">
                  <th className="px-5 py-4 text-left text-xs font-semibold uppercase tracking-wider text-muted">
                    Feature
                  </th>
                  <th className="px-5 py-4 text-left text-xs font-semibold uppercase tracking-wider text-violet-700">
                    This Direct UK Service
                  </th>
                  <th className="px-5 py-4 text-left text-xs font-semibold uppercase tracking-wider text-muted">
                    Typical IPTV Service
                  </th>
                  <th className="px-5 py-4 text-left text-xs font-semibold uppercase tracking-wider text-rose-700">
                    Unlicensed Free Streams
                  </th>
                </tr>
              </thead>
              <tbody>
                {COMPARISON_ROWS.map((row, i) => (
                  <tr
                    key={row.feature}
                    className={i % 2 === 0 ? "bg-white" : "bg-violet-50/20"}
                  >
                    <td className="px-5 py-4 text-sm font-medium text-foreground border-t border-violet-100/50">
                      {row.feature}
                    </td>
                    <td className="px-5 py-4 text-sm border-t border-violet-100/50">
                      {renderCell(row.ours, "ours")}
                    </td>
                    <td className="px-5 py-4 text-sm border-t border-violet-100/50">
                      {renderCell(row.typical, "typical")}
                    </td>
                    <td className="px-5 py-4 text-sm border-t border-violet-100/50">
                      {renderCell(row.unlicensed, "unlicensed")}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Mobile stacked cards */}
          <div className="md:hidden divide-y divide-violet-100/60">
            {COMPARISON_ROWS.map((row) => (
              <div key={row.feature} className="px-5 py-5">
                <h3 className="text-sm font-semibold text-foreground mb-3">
                  {row.feature}
                </h3>
                <dl className="space-y-2">
                  <div>
                    <dt className="text-xs font-semibold uppercase tracking-wider text-violet-700 mb-0.5">
                      This Direct UK Service
                    </dt>
                    <dd className="text-sm">{renderCell(row.ours, "ours")}</dd>
                  </div>
                  <div>
                    <dt className="text-xs font-semibold uppercase tracking-wider text-muted mb-0.5">
                      Typical IPTV Service
                    </dt>
                    <dd className="text-sm">{renderCell(row.typical, "typical")}</dd>
                  </div>
                  <div>
                    <dt className="text-xs font-semibold uppercase tracking-wider text-rose-700 mb-0.5">
                      Unlicensed Free Streams
                    </dt>
                    <dd className="text-sm">{renderCell(row.unlicensed, "unlicensed")}</dd>
                  </div>
                </dl>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Three-paragraph close — reading each column down (~180 words) */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.15 }}
          className="mt-10 lg:mt-12 grid sm:grid-cols-3 gap-6 max-w-5xl mx-auto"
        >
          <div className="rounded-xl border border-violet-100/60 bg-white p-5">
            <h3 className="text-sm font-semibold text-violet-700 uppercase tracking-wider mb-3">
              Direct UK Service
            </h3>
            <p className="text-sm text-muted leading-relaxed">
              Reading down the direct UK service column shows the floor for a
              complete subscription in 2026: every metric published, every claim
              verifiable, and a 30-day refund window backing the whole offer.
              Channel count and uptime are quoted as live numbers rather than
              marketing copy, GBP pricing is shown on the front page, and UK
              support is reachable through live chat and WhatsApp around the
              clock.
            </p>
          </div>
          <div className="rounded-xl border border-violet-100/60 bg-white p-5">
            <h3 className="text-sm font-semibold text-muted uppercase tracking-wider mb-3">
              Typical IPTV Service
            </h3>
            <p className="text-sm text-muted leading-relaxed">
              The typical IPTV service column captures the broader UK reseller
              market — services that ship a working product but cut corners on
              the verification signals. 4K UHD is gated to a premium tier,
              support runs email-only, refunds are limited to three to seven
              days inside hidden T&amp;Cs, and uptime is asserted rather than
              published. The category isn&apos;t unsafe to use, but it
              isn&apos;t ready for a five-screen UK household.
            </p>
          </div>
          <div className="rounded-xl border border-rose-100 bg-rose-50/30 p-5">
            <h3 className="text-sm font-semibold text-rose-700 uppercase tracking-wider mb-3">
              Unlicensed Free Streams
            </h3>
            <p className="text-sm text-muted leading-relaxed">
              The unlicensed free-streams column is the category to walk away
              from. No 4K, no privacy proxy, no UK support, no refund window —
              and an unstable picture that drops the moment demand spikes. Free
              is not the same as cheap. For any UK household watching live
              sport, on-demand cinema or kids&apos; channels, the unlicensed
              option fails on every column the table measures.
            </p>
          </div>
        </motion.div>

        {/* H3 — Why categories, not brands (~60 words) + cross-link to /best-iptv-uk-vs-traditional-tv */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="mt-10 lg:mt-12 max-w-3xl mx-auto rounded-2xl border border-violet-100/60 bg-white/70 backdrop-blur-sm p-6 lg:p-8"
        >
          <h3 className="text-lg sm:text-xl font-bold text-foreground mb-3">
            Why This Comparison Uses Categories, Not Named Brands
          </h3>
          <p className="text-sm sm:text-base text-muted leading-relaxed">
            Naming specific competitors invites two problems: trademark
            exposure when broadcaster names creep in, and affiliate bias when
            reviewers are paid by the providers they rank. Category-level
            comparison sidesteps both. The same structural test — refund,
            uptime, channel count, support — applies to any UK IPTV provider,
            named or not. The framework is the point. See also:{" "}
            <Link
              href="/best-iptv-uk-vs-traditional-tv"
              className="text-violet-600 hover:text-violet-700 underline-offset-2 hover:underline"
            >
              how IPTV compares with traditional UK pay-TV
            </Link>
            .
          </p>
        </motion.div>
      </div>
    </section>
  );
}
