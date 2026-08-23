import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

/**
 * "3 Months" -> "3-Month Access". Shared by the pricing cards and /checkout so
 * the plan is named identically in both places.
 */
export function toAccessLabel(planName: string): string {
  const match = planName.match(/^(\d+)\s+Months?$/i);
  return match ? `${match[1]}-Month Access` : `${planName} Access`;
}
