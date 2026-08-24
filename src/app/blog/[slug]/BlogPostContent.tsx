"use client";

import { motion } from "framer-motion";
import { Clock, ArrowLeft, Tag, User, CheckCircle, ArrowRight } from "lucide-react";
import Link from "next/link";
import SectionLink from "@/components/SectionLink";

interface BlogPostContentProps {
  post: {
    slug: string;
    title: string;
    excerpt: string;
    publishedDate: string;
    updatedDate: string;
    readTime: string;
    category: string;
  };
  content: string[];
  author: { name: string; role: string };
  reviewer: { name: string; role: string };
  relatedContent: ReadonlyArray<{ label: string; href: string }>;
}

export default function BlogPostContent({ post, content, author, reviewer, relatedContent }: BlogPostContentProps) {
  return (
    <div className="pt-20">
      <article className="py-16 lg:py-24">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          {/* Back link */}
          <motion.div
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
          >
            <Link
              href="/blog"
              className="inline-flex items-center gap-2 text-sm text-muted hover:text-foreground transition-colors mb-8"
            >
              <ArrowLeft className="h-4 w-4" />
              Back to Blog
            </Link>
          </motion.div>

          {/* Header */}
          <motion.header
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-12"
          >
            <div className="flex flex-wrap items-center gap-4 sm:gap-6 text-sm text-muted mb-6">
              <span className="inline-flex items-center gap-1.5 rounded-full bg-primary/10 px-3 py-1 text-xs font-medium text-primary">
                <Tag className="h-3 w-3" />
                {post.category}
              </span>
              
              <span className="flex items-center gap-1.5 font-medium text-foreground">
                <User className="h-4 w-4 text-[color:var(--color-primary)]" />
                {author.name}
              </span>
              
              <span className="flex items-center gap-1.5 font-medium text-foreground">
                <CheckCircle className="h-4 w-4 text-green-500" />
                Reviewed by {reviewer.name}
              </span>

              <span className="flex items-center gap-1.5">
                <Clock className="h-4 w-4" />
                Updated {new Date(post.updatedDate).toLocaleDateString("en-GB", {
                  day: "numeric", month: "long", year: "numeric"
                })}
              </span>
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground leading-tight mb-4">
              {post.title}
            </h1>

            <p className="text-lg text-muted leading-relaxed">
              {post.excerpt}
            </p>
          </motion.header>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="prose-custom"
          >
            {content.map((block, i) => {
              const lines = block.split("\n");
              return (
                <div key={i} className="mb-8">
                  {lines.map((line, j) => {
                    if (line.startsWith("## ")) {
                      return (
                        <h2
                          key={j}
                          className="text-2xl font-bold text-foreground mt-10 mb-4"
                        >
                          {line.replace("## ", "")}
                        </h2>
                      );
                    }
                    if (line.startsWith("- **")) {
                      const match = line.match(/- \*\*(.+?)\*\*(.+)/);
                      if (match) {
                        return (
                          <li
                            key={j}
                            className="text-sm text-gray-600 leading-relaxed ml-4 mb-2 list-disc"
                          >
                            <strong className="text-foreground">{match[1]}</strong>
                            {match[2]}
                          </li>
                        );
                      }
                    }
                    if (line.startsWith("- ")) {
                      return (
                        <li
                          key={j}
                          className="text-sm text-gray-600 leading-relaxed ml-4 mb-2 list-disc"
                        >
                          {line.replace("- ", "")}
                        </li>
                      );
                    }
                    if (line.trim() === "") return <br key={j} />;
                    return (
                      <p
                        key={j}
                        className="text-base text-gray-600 leading-relaxed mb-4"
                      >
                        {line}
                      </p>
                    );
                  })}
                </div>
              );
            })}
          </motion.div>

          {/* Related Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-16 pt-8 border-t border-primary/10"
          >
            <h3 className="text-xl font-bold text-foreground mb-6">Related UK IPTV Guides</h3>
            <div className="grid sm:grid-cols-2 gap-4">
              {relatedContent.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="flex flex-col gap-1 p-4 rounded-xl border border-[color:var(--color-border)] bg-white hover:border-[color:var(--color-primary)]/30 hover:shadow-sm transition-all group"
                >
                  <span className="font-semibold text-foreground group-hover:text-[color:var(--color-primary)]">
                    {link.label}
                  </span>
                  <span className="text-sm text-[color:var(--color-primary)] font-medium inline-flex items-center gap-1">
                    Read guide <ArrowRight className="h-3 w-3" />
                  </span>
                </Link>
              ))}
            </div>
          </motion.div>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-16 rounded-2xl border border-primary/15 bg-blue-50 p-8 text-center"
          >
            <h3 className="text-xl font-bold text-foreground mb-3">
              Ready To Compare The Subscription Plans?
            </h3>
            <p className="text-muted mb-6">
              Trusted UK IPTV provider. Plans from £3.75/month equivalent with a 30-day money-back guarantee.
            </p>
            <SectionLink
              href="/#pricing"
              className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-[color:var(--color-primary)] to-[color:var(--color-indigo-deep)] px-8 py-3.5 text-sm font-semibold text-white transition-all hover:shadow-lg hover:shadow-primary/20"
            >
              View Subscription Plans
            </SectionLink>
          </motion.div>
        </div>
      </article>
    </div>
  );
}
