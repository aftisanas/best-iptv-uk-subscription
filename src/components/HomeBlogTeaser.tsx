import Link from "next/link";
import { ArrowRight, Clock } from "lucide-react";
import MotionReveal from "./MotionReveal";
import { BLOG_POSTS } from "@/lib/constants";

const categoryColors: Record<string, string> = {
  Guide: "text-primary",
  Tutorial: "text-accent",
  Comparison: "text-[color:var(--color-indigo-deep)]",
  Sports: "text-[color:var(--color-indigo-deep)]",
};

export default function HomeBlogTeaser() {
  const posts = BLOG_POSTS.slice(0, 3);

  return (
    <section id="from-the-blog" className="relative py-16 lg:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <MotionReveal className="text-center mb-12 lg:mb-14">
          <div className="flex items-center justify-center gap-3 mb-4">
            <span className="editorial-rule" />
            <span className="text-[11px] font-semibold tracking-[0.22em] uppercase text-[color:var(--color-primary)]">
              From The Blog
            </span>
            <span className="editorial-rule" />
          </div>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4 tracking-tight">
            Best IPTV UK &mdash;{" "}
            <span className="gradient-text">Research Before You Buy</span>
          </h2>
          <p className="text-lg text-muted max-w-2xl mx-auto">
            The full write-ups behind every claim on this page &mdash; setup
            walkthroughs, category buyer&apos;s guides and honest comparisons.
          </p>
        </MotionReveal>

        <div className="grid md:grid-cols-3 gap-x-8 lg:gap-x-12">
          {posts.map((post, i) => (
            <Link
              key={post.slug}
              href={`/blog/${post.slug}`}
              className="group flex h-full flex-col border-t border-[color:var(--color-border)] pt-6 pb-8 transition-colors hover:border-t-[color:var(--color-primary)]"
            >
                <div className="flex items-center justify-between gap-4 mb-5">
                  <div className="flex items-baseline gap-3">
                    <span className="font-mono text-[11px] tracking-[0.18em] text-muted">
                      № {String(i + 1).padStart(2, "0")}
                    </span>
                    <span
                      className={`text-[11px] font-semibold tracking-[0.22em] uppercase ${
                        categoryColors[post.category] || "text-primary"
                      }`}
                    >
                      {post.category}
                    </span>
                  </div>
                  <span className="inline-flex items-center gap-1 text-[11px] text-muted tracking-wide">
                    <Clock className="h-3 w-3" />
                    {post.readTime}
                  </span>
                </div>

                <h3 className="font-display text-xl sm:text-[22px] font-semibold text-foreground leading-[1.2] mb-4 transition-colors group-hover:text-primary line-clamp-3">
                  {post.title}
                </h3>

                <p className="text-[15px] text-muted leading-relaxed mb-6 line-clamp-3 flex-1">
                  {post.excerpt}
                </p>

                <span className="inline-flex items-center gap-1.5 text-sm font-medium text-primary transition-all group-hover:gap-2.5">
                  Read Article
                  <ArrowRight className="h-4 w-4" />
                </span>
              </Link>
          ))}
        </div>

        <MotionReveal className="mt-12 lg:mt-14 flex justify-center">
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 rounded-full border border-[color:var(--color-primary)]/30 bg-white px-6 py-3 text-sm font-semibold text-[color:var(--color-primary)] transition-all hover:border-[color:var(--color-primary)] hover:bg-[color:var(--color-primary)] hover:text-white"
          >
            View All Guides
            <ArrowRight className="h-4 w-4" />
          </Link>
        </MotionReveal>
      </div>
    </section>
  );
}
