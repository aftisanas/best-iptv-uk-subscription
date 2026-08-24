import Link from "next/link";
import SectionLink from "./SectionLink";
import MotionReveal from "./MotionReveal";
import FAQAccordion from "./FAQAccordion";
import { FAQ_ITEMS } from "@/lib/constants";

const EXCLUDED_FAQ_QUESTION = "How many UK channels are included?";

export default function FAQSection() {
  const faqItems = FAQ_ITEMS.filter((item) => item.question !== EXCLUDED_FAQ_QUESTION);

  return (
    <section id="faq" className="relative py-11 lg:py-16">
      <div className="absolute inset-0 mesh-gradient" />

      <div className="relative mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <MotionReveal className="text-center mb-14">
          <div className="flex items-center justify-center gap-3 mb-4">
            <span className="editorial-rule" />
            <span className="text-[11px] font-semibold tracking-[0.22em] uppercase text-[color:var(--color-primary)]">
              Frequently Asked Questions
            </span>
            <span className="editorial-rule" />
          </div>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4 tracking-tight">
            Best IPTV UK &mdash;{" "}
            <span className="gradient-text">Your Questions Answered</span>
          </h2>
          <p className="text-lg text-muted">
            Essential answers to{" "}
            <Link href="/blog" className="text-[color:var(--color-primary)] hover:text-[color:var(--color-primary-hover)] underline-offset-2 hover:underline">
              review
            </Link>{" "}
            before choosing a{" "}
            <SectionLink href="/#pricing" className="text-[color:var(--color-primary)] hover:text-[color:var(--color-primary-hover)] underline-offset-2 hover:underline">
              subscription plan
            </SectionLink>{" "}in 2026.
          </p>
        </MotionReveal>

        <FAQAccordion items={faqItems} />
      </div>
    </section>
  );
}
