"use client";

import { motion } from "framer-motion";
import { Clock, ArrowRight, BookOpen, Star } from "lucide-react";
import Link from "next/link";
import { BLOG_POSTS } from "@/lib/constants";

const categoryColors: Record<string, string> = {
  Guide: "text-primary",
  Tutorial: "text-accent",
  Comparison: "text-[color:var(--color-indigo-deep)]",
  Sports: "text-[color:var(--color-indigo-deep)]",
};

export default function BlogContent() {
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
            <BookOpen className="h-3.5 w-3.5" />
            <span>Best IPTV UK Expert Guides</span>
            <span className="flex gap-0.5">
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
            <span className="text-white">Best IPTV UK Buyer&apos;s Guide —</span>
            <br />
            <span className="gradient-text-hero">Setup, Comparisons &amp; Tips</span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="mx-auto max-w-2xl text-lg text-white/75 leading-relaxed"
          >
            In-depth articles on setup, streaming optimisation, device coverage and the current state of British television — the research layer behind every{" "}
            <Link href="/#pricing" className="text-[#ffbc7d] hover:text-white underline-offset-2 hover:underline">
              subscription decision
            </Link>.
          </motion.p>
        </div>

        <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-[color:var(--color-background)] to-transparent pointer-events-none" />
      </section>

      {/* Blog Index — magazine layout */}
      <section className="pb-24 lg:pb-32">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 md:gap-x-12 lg:gap-x-16">
            {BLOG_POSTS.map((post, i) => (
              <article key={post.slug}>
                <Link
                  href={`/blog/${post.slug}`}
                  className="group flex h-full flex-col border-t border-[color:var(--color-border)] pt-6 pb-10 transition-colors hover:border-t-[color:var(--color-primary)]"
                >
                  {/* Kicker: issue number · category · read time */}
                  <div className="flex items-center justify-between gap-4 mb-5">
                    <div className="flex items-baseline gap-3">
                      <span className="font-mono text-[11px] tracking-[0.18em] text-muted">
                        № {String(i + 1).padStart(2, "0")}
                      </span>
                      <span className={`text-[11px] font-semibold tracking-[0.22em] uppercase ${categoryColors[post.category] || "text-primary"}`}>
                        {post.category}
                      </span>
                    </div>
                    <span className="inline-flex items-center gap-1 text-[11px] text-muted tracking-wide">
                      <Clock className="h-3 w-3" />
                      {post.readTime}
                    </span>
                  </div>

                  {/* Headline */}
                  <h2 className="font-display text-2xl sm:text-[26px] font-semibold text-foreground leading-[1.18] mb-4 transition-colors group-hover:text-primary line-clamp-3">
                    {post.title}
                  </h2>

                  {/* Dek */}
                  <p className="text-[15px] text-muted leading-relaxed mb-6 line-clamp-3 flex-1">
                    {post.excerpt}
                  </p>

                  {/* Baseline: date + read link */}
                  <div className="flex items-center justify-between pt-4 border-t border-[color:var(--color-border)]/60">
                    <time className="text-xs text-muted">
                      {new Date(post.publishedDate).toLocaleDateString("en-GB", { day: "numeric", month: "long", year: "numeric" })}
                    </time>
                    <span className="inline-flex items-center gap-1.5 text-sm font-medium text-primary transition-all group-hover:gap-2.5">
                      Read Article
                      <ArrowRight className="h-4 w-4" />
                    </span>
                  </div>
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
