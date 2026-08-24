"use client";

import { useEffect, useState } from "react";

const STORAGE_KEY = "promoEndTime";
const MIN_MS = 14 * 60 * 60 * 1000;
const MAX_MS = 24 * 60 * 60 * 1000 - 60 * 1000;

export interface TimeLeft {
  hours: number;
  minutes: number;
  seconds: number;
}

function getOrCreateEndTime(): number {
  if (typeof window === "undefined") return Date.now() + 18 * 60 * 60 * 1000;

  const stored = window.localStorage.getItem(STORAGE_KEY);
  const now = Date.now();

  if (stored) {
    const endTime = parseInt(stored, 10);
    if (!Number.isNaN(endTime) && endTime > now) return endTime;
  }

  const randomMs = MIN_MS + Math.floor(Math.random() * (MAX_MS - MIN_MS));
  const newEndTime = now + randomMs;
  window.localStorage.setItem(STORAGE_KEY, newEndTime.toString());
  return newEndTime;
}

function calculateTimeLeft(endTime: number): TimeLeft {
  const diff = Math.max(0, endTime - Date.now());
  return {
    hours: Math.floor(diff / (1000 * 60 * 60)),
    minutes: Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60)),
    seconds: Math.floor((diff % (1000 * 60)) / 1000),
  };
}

/**
 * Shared 24h-cycle countdown used by PromoBanner + StickyCTA.
 * Returns `null` while unmounted (SSR / pre-hydration) so callers can
 * render a graceful fallback and avoid layout shift.
 */
export function usePromoCountdown(): { timeLeft: TimeLeft; mounted: boolean } {
  const [endTime, setEndTime] = useState<number>(0);
  const [timeLeft, setTimeLeft] = useState<TimeLeft>({ hours: 0, minutes: 0, seconds: 0 });
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const timeoutId = window.setTimeout(() => {
      const end = getOrCreateEndTime();
      setEndTime(end);
      setTimeLeft(calculateTimeLeft(end));
      setMounted(true);
    }, 0);
    return () => window.clearTimeout(timeoutId);
  }, []);

  useEffect(() => {
    if (!mounted || endTime === 0) return;

    const interval = setInterval(() => {
      const left = calculateTimeLeft(endTime);
      if (left.hours === 0 && left.minutes === 0 && left.seconds === 0) {
        if (typeof window !== "undefined") window.localStorage.removeItem(STORAGE_KEY);
        const newEnd = getOrCreateEndTime();
        setEndTime(newEnd);
        setTimeLeft(calculateTimeLeft(newEnd));
      } else {
        setTimeLeft(left);
      }
    }, 1000);

    return () => clearInterval(interval);
  }, [endTime, mounted]);

  return { timeLeft, mounted };
}

export function padTime(n: number): string {
  return n.toString().padStart(2, "0");
}
