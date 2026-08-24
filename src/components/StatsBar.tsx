"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { STATS } from "@/lib/constants";

function AnimatedNumber({ value }: { value: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.2, margin: "0px 0px -10% 0px" });
  const numericMatch = value.match(/[\d,]+/);
  const numericStr = numericMatch ? numericMatch[0] : "";
  const prefix = numericStr ? value.slice(0, value.indexOf(numericStr)) : "";
  const suffix = numericStr ? value.slice(value.indexOf(numericStr) + numericStr.length) : "";
  const [displayed, setDisplayed] = useState(numericStr ? `${prefix}0${suffix}` : value);

  useEffect(() => {
    if (!inView || !numericStr) {
      if (!numericStr) setDisplayed(value);
      return;
    }

    const target = parseInt(numericStr.replace(/,/g, ""), 10);
    const duration = 900;
    const steps = 36;
    const stepTime = duration / steps;
    let step = 0;

    const timer = setInterval(() => {
      step++;
      const progress = step / steps;
      const easeOut = 1 - Math.pow(1 - progress, 3);
      const current = Math.round(target * easeOut);
      setDisplayed(`${prefix}${current.toLocaleString()}${suffix}`);

      if (step >= steps) {
        setDisplayed(value);
        clearInterval(timer);
      }
    }, stepTime);

    return () => clearInterval(timer);
  }, [inView, value, numericStr, prefix, suffix]);

  return <span ref={ref}>{displayed}</span>;
}

/**
 * Editorial stats band — deep-indigo panel with amber numerals.
 * Draws the eye immediately after hero: "This is what the number promises."
 */
export default function StatsBar() {
  return (
    <section className="relative -mt-6 lg:-mt-8 z-10">
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="relative rounded-2xl overflow-hidden shadow-[0_28px_60px_-24px_rgba(43,12,107,0.55)]">
          {/* Dark editorial panel */}
          <div className="absolute inset-0 section-wash-dark" />
          <div className="absolute inset-0 bg-gradient-to-br from-white/[0.03] to-transparent" />
          {/* Thin top rule */}
          <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-[#ffbc7d] to-transparent opacity-70" />

          <div className="relative grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-4 px-6 sm:px-10 py-10 lg:py-11">
            {STATS.map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2, margin: "0px 0px -10% 0px" }}
                transition={{ delay: i * 0.05, duration: 0.4 }}
                className="relative text-center"
              >
                <div
                  className="font-display text-4xl sm:text-5xl lg:text-[3.5rem] font-extrabold leading-none mb-2"
                  style={{ color: "#ffbc7d", textShadow: "0 0 30px rgba(255,188,125,0.35)" }}
                >
                  <AnimatedNumber value={stat.value} />
                </div>
                <div className="text-xs sm:text-sm text-white/70 font-medium uppercase tracking-[0.14em]">
                  {stat.label}
                </div>
                {i < STATS.length - 1 && (
                  <div
                    aria-hidden
                    className="hidden lg:block absolute right-0 top-1/2 -translate-y-1/2 h-14 w-px bg-gradient-to-b from-transparent via-white/20 to-transparent"
                  />
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
