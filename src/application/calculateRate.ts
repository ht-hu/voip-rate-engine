import type { CallContext } from "../domain/CallContext.js";

export interface RateResult {
  amount: number;
  currency: string;
}

export function calculateRate(_context: CallContext): RateResult {
  return {
    amount: 0,
    currency: "USD",
  };
}
