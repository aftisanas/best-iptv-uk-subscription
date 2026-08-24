"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Check, Star, Crown, Gem, Award, Medal } from "lucide-react";
import { CHECKOUT_MODE, PRICING_PLANS } from "@/lib/constants";
import { cn, toAccessLabel } from "@/lib/utils";
import OrderSummaryModal from "./OrderSummaryModal";

type PricingPlan = (typeof PRICING_PLANS)[number];

const tierMeta: Record<string, {
  icon: React.ElementType;
  gradient: string;
  badge: string;
  discount: string;
  border: string;
  hoverBorder: string;
  accent: string;
  accentLight: string;
  button: string;
  check: string;
  glow: string;
  iconBg: string;
}> = {
  amber: {
    icon: Medal,
    gradient: "from-[#ffbc7d] to-[#ff8a3d]",
    badge: "bg-[color:var(--color-neon)]/15 text-[color:var(--color-foreground)] border-[color:var(--color-neon)]/40",
    discount: "bg-gradient-to-r from-[#ffbc7d] to-[#ff8a3d] text-[color:var(--color-foreground)]",
    border: "border-[color:var(--color-neon)]/30",
    hoverBorder: "hover:border-[color:var(--color-neon)]",
    accent: "text-[color:var(--color-foreground)]",
    accentLight: "text-[color:var(--color-neon)]",
    button: "bg-gradient-to-r from-[#ffbc7d] to-[#ff8a3d] text-[color:var(--color-foreground)] hover:shadow-lg hover:shadow-[rgba(255,188,125,0.30)]",
    check: "text-[color:var(--color-neon)]",
    glow: "group-hover:shadow-[rgba(255,188,125,0.20)]",
    iconBg: "from-[color:var(--color-neon)]/25 to-[#fff5ec]",
  },
  slate: {
    icon: Award,
    gradient: "from-[color:var(--color-muted-foreground)] to-[color:var(--color-foreground)]",
    badge: "bg-[color:var(--color-border)]/40 text-[color:var(--color-muted)] border-[color:var(--color-border)]",
    discount: "bg-gradient-to-r from-[color:var(--color-muted-foreground)] to-[color:var(--color-foreground)] text-white",
    border: "border-[color:var(--color-border)]",
    hoverBorder: "hover:border-[color:var(--color-muted-foreground)]",
    accent: "text-[color:var(--color-muted)]",
    accentLight: "text-[color:var(--color-muted-foreground)]",
    button: "bg-gradient-to-r from-[color:var(--color-muted-foreground)] to-[color:var(--color-foreground)] text-white hover:shadow-lg hover:shadow-[rgba(74,70,101,0.25)]",
    check: "text-[color:var(--color-muted-foreground)]",
    glow: "group-hover:shadow-[rgba(74,70,101,0.12)]",
    iconBg: "from-[color:var(--color-border)]/40 to-white",
  },
  blue: {
    icon: Crown,
    gradient: "from-[#ff6fa1] to-[#ff1e1e]",
    badge: "bg-[#ffe6ec] text-[#ff1e1e] border-[#ffbdcf]",
    discount: "bg-gradient-to-r from-[#ff6fa1] to-[#ff1e1e] text-white",
    border: "border-[#ff6fa1]/40",
    hoverBorder: "hover:border-[#ff1e1e]",
    accent: "text-[#ff1e1e]",
    accentLight: "text-[#ff6fa1]",
    button: "bg-gradient-to-r from-[#ff6fa1] to-[#ff1e1e] text-white hover:shadow-xl hover:shadow-[rgba(255,30,30,0.35)]",
    check: "text-[#ff1e1e]",
    glow: "group-hover:shadow-[rgba(255,111,161,0.20)]",
    iconBg: "from-[#ffe6ec] to-[#fff5ec]",
  },
  violet: {
    icon: Gem,
    gradient: "from-[color:var(--color-primary)] to-[color:var(--color-indigo-deep)]",
    badge: "bg-[color:var(--color-primary)]/10 text-[color:var(--color-primary)] border-[color:var(--color-primary)]/25",
    discount: "bg-gradient-to-r from-[color:var(--color-primary)] to-[color:var(--color-indigo-deep)] text-white",
    border: "border-[color:var(--color-primary)]/20",
    hoverBorder: "hover:border-[color:var(--color-primary)]",
    accent: "text-[color:var(--color-primary)]",
    accentLight: "text-[color:var(--color-primary)]/80",
    button: "bg-gradient-to-r from-[color:var(--color-primary)] to-[color:var(--color-indigo-deep)] text-white hover:shadow-lg hover:shadow-[rgba(101,30,253,0.30)]",
    check: "text-[color:var(--color-primary)]",
    glow: "group-hover:shadow-[rgba(101,30,253,0.15)]",
    iconBg: "from-[color:var(--color-primary)]/15 to-[#f2ecff]",
  },
};

export default function PricingPlansInteractive() {
  const router = useRouter();
  const [hoveredPlan, setHoveredPlan] = useState<string | null>(null);
  const [selectedPlan, setSelectedPlan] = useState<PricingPlan | null>(null);

  // "hub" sends the buyer to the full /checkout flow (email capture -> Shopify,
  // WhatsApp fallback). "whatsapp" keeps the original modal -> wa.me path.
  const handleChoosePlan = (plan: PricingPlan) => {
    if (CHECKOUT_MODE === "hub") {
      router.push(`/checkout?plan=${plan.id}`);
      return;
    }
    setSelectedPlan(plan);
  };

  return (
    <>
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 lg:gap-6 items-start">
        {PRICING_PLANS.map((plan) => {
          const isPopular = plan.popular;
          const isHovered = hoveredPlan === plan.id;
          const meta = tierMeta[plan.accentColor] || tierMeta.blue;
          const TierIcon = meta.icon;

          return (
            <div
              key={plan.id}
              onMouseEnter={() => setHoveredPlan(plan.id)}
              onMouseLeave={() => setHoveredPlan(null)}
              className={cn(
                "group relative rounded-2xl border bg-white transition-all duration-500",
                meta.border,
                meta.hoverBorder,
                isPopular
                  ? "border-[#ff1e1e]/40 shadow-xl shadow-[rgba(255,30,30,0.14)] lg:scale-[1.04] z-10"
                  : "shadow-sm",
                !isPopular && isHovered && "-translate-y-2 shadow-lg",
                isPopular && isHovered && "-translate-y-3",
                meta.glow
              )}
            >
              {/* Popular ribbon effect */}
              {isPopular && (
                <>
                  <div className="absolute -inset-px rounded-2xl bg-gradient-to-b from-[#ff6fa1]/30 via-transparent to-[#ff1e1e]/20 pointer-events-none" />
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 z-20">
                    <div className="badge-shimmer rounded-full gradient-popular px-5 py-2 text-xs font-bold tracking-wider text-white shadow-lg shadow-[rgba(255,30,30,0.35)] whitespace-nowrap flex items-center gap-1.5">
                      <Star className="h-3 w-3 fill-current" />
                      {plan.badge}
                    </div>
                  </div>
                </>
              )}

              {/* Non-popular badge */}
              {plan.badge && !isPopular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 z-20">
                  <div className="badge-shimmer rounded-full bg-gradient-to-r from-[color:var(--color-primary)] to-[color:var(--color-indigo-deep)] px-5 py-2 text-xs font-bold tracking-wider text-white shadow-lg shadow-[rgba(101,30,253,0.30)] whitespace-nowrap flex items-center gap-1.5">
                    <Gem className="h-3 w-3" />
                    {plan.badge}
                  </div>
                </div>
              )}

              <div className="relative p-6">
                {/* Tier icon + discount row */}
                <div className="flex items-center justify-between mb-5">
                  <div
                    className={cn(
                      "flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br",
                      meta.iconBg
                    )}
                  >
                    <TierIcon className={cn("h-5 w-5", meta.accent)} />
                  </div>
                  <span
                    className={cn(
                      "inline-block rounded-lg px-3 py-1.5 text-xs font-bold",
                      meta.discount
                    )}
                  >
                    {plan.discount}
                  </span>
                </div>

                {/* Tier name + duration */}
                <div className="mb-5">
                  <h3 className="font-display text-xl font-bold text-foreground leading-snug">{plan.tier}</h3>
                  <p className="text-sm text-muted mt-1">{plan.name}</p>
                </div>

                {/* Price */}
                <div className="mb-6">
                  <div className="flex items-baseline gap-2">
                    <span className="text-sm text-muted/60 line-through">
                      &pound;{plan.originalPrice.toFixed(2)}
                    </span>
                  </div>
                  <div className="flex items-baseline gap-1 mt-1">
                    <span className="text-4xl font-extrabold text-foreground">
                      &pound;{plan.price.toFixed(2)}
                    </span>
                  </div>
                  <p className="text-xs text-muted mt-1.5">One-time payment &middot; {plan.subtitle}</p>
                </div>

                {/* Divider */}
                <div
                  className={cn(
                    "h-px mb-5",
                    isPopular
                      ? "bg-gradient-to-r from-transparent via-[#ff6fa1]/40 to-transparent"
                      : "bg-[color:var(--color-border)]/50"
                  )}
                />

                {/* Features */}
                <ul className="space-y-2.5 mb-6">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-2.5">
                      <div
                        className={cn(
                          "mt-0.5 flex h-4.5 w-4.5 items-center justify-center rounded-full shrink-0",
                          isPopular ? "bg-[#ffe6ec]" : "bg-[color:var(--color-card-hover)]"
                        )}
                      >
                        <Check className={cn("h-3 w-3", meta.check)} />
                      </div>
                      <span className="text-sm text-muted">{feature}</span>
                    </li>
                  ))}
                </ul>

                {/* CTA Button */}
                <button
                  type="button"
                  onClick={() => handleChoosePlan(plan)}
                  aria-label={`Choose ${plan.tier} plan — ${plan.name}`}
                  className={cn(
                    "flex items-center justify-center gap-2 rounded-xl px-5 py-3.5 text-sm font-bold transition-all active:scale-[0.98] w-full",
                    isPopular
                      ? meta.button
                      : "bg-[color:var(--color-primary)] hover:bg-[color:var(--color-primary-hover)] text-white hover:shadow-xl hover:shadow-[rgba(101,30,253,0.30)]",
                  )}
                >
                  Choose Plan
                </button>
              </div>
            </div>
          );
        })}
      </div>

      <OrderSummaryModal
        open={selectedPlan !== null}
        onClose={() => setSelectedPlan(null)}
        planName={selectedPlan ? toAccessLabel(selectedPlan.name) : ""}
        planPrice={selectedPlan?.price ?? 0}
        proxyPrice={selectedPlan?.proxyPrice ?? 0}
        extraConnectionPrice={selectedPlan?.extraConnectionPrice}
      />
    </>
  );
}
