import type { CallContext } from "../domain/CallContext.js";

export interface RateResult {
  amount: number;
  currency: string;
  ratePerMinute: number;
  chargedMinutes: number;
}

export function calculateRate(context: CallContext): RateResult {
  const baseRate = getBaseRate(context.callee);
  const discountedRate = applyCustomerDiscount(baseRate, context.customerType);
  const ratePerMinute = applyNightDiscount(discountedRate, context.startedAt);
  const chargedMinutes = Math.ceil(context.durationSeconds / 60);

  return {
    amount: roundTo(ratePerMinute * chargedMinutes),
    currency: "USD",
    ratePerMinute,
    chargedMinutes,
  };
}

function getBaseRate(callee: string): number {
  if (callee.startsWith("+86")) {
    return 0.1;
  }

  if (callee.startsWith("+1")) {
    return 0.05;
  }

  return 0.5;
}

function applyCustomerDiscount(rate: number, customerType: CallContext["customerType"]): number {
  if (customerType === "VIP") {
    return roundTo(rate * 0.9);
  }

  return rate;
}

function applyNightDiscount(rate: number, startedAt: Date): number {
  if (!isNightTime(startedAt)) {
    return rate;
  }

  return Math.max(0, roundTo(rate - 0.02));
}

function isNightTime(date: Date): boolean {
  const hour = date.getHours();

  return hour >= 23 || hour < 5;
}

function roundTo(value: number): number {
  return Math.round(value * 1_000_000) / 1_000_000;
}
