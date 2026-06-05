import { describe, expect, it } from "vitest";

import { calculateRate } from "../src/application/calculateRate.js";
import type { CallContext } from "../src/domain/CallContext.js";

describe("calculateRate", () => {
  it("calculates rate for China numbers", () => {
    const result = calculateRate(createContext({ callee: "+8613800000000" }));

    expect(result).toEqual({
      amount: 0.1,
      currency: "USD",
      ratePerMinute: 0.1,
      chargedMinutes: 1,
    });
  });

  it("calculates rate for US numbers", () => {
    const result = calculateRate(createContext({ callee: "+12125550000" }));

    expect(result).toEqual({
      amount: 0.05,
      currency: "USD",
      ratePerMinute: 0.05,
      chargedMinutes: 1,
    });
  });

  it("calculates rate for other country numbers", () => {
    const result = calculateRate(createContext({ callee: "+442071838750" }));

    expect(result).toEqual({
      amount: 0.5,
      currency: "USD",
      ratePerMinute: 0.5,
      chargedMinutes: 1,
    });
  });

  it("applies VIP discount", () => {
    const result = calculateRate(createContext({ callee: "+8613800000000", customerType: "VIP" }));

    expect(result.ratePerMinute).toBe(0.09);
    expect(result.amount).toBe(0.09);
  });

  it("does not apply discount for NORMAL users", () => {
    const result = calculateRate(createContext({ callee: "+8613800000000", customerType: "NORMAL" }));

    expect(result.ratePerMinute).toBe(0.1);
    expect(result.amount).toBe(0.1);
  });

  it("applies night discount", () => {
    const result = calculateRate(createContext({ callee: "+8613800000000", startedAt: nightTime() }));

    expect(result.ratePerMinute).toBe(0.08);
    expect(result.amount).toBe(0.08);
  });

  it("rounds duration seconds up to charged minutes", () => {
    const result = calculateRate(createContext({ callee: "+12125550000", durationSeconds: 61 }));

    expect(result.chargedMinutes).toBe(2);
    expect(result.amount).toBe(0.1);
  });

  it("keeps the final rate non-negative", () => {
    const result = calculateRate(
      createContext({
        callee: "+12125550000",
        customerType: "VIP",
        startedAt: nightTime(),
      }),
    );

    expect(result.ratePerMinute).toBeGreaterThanOrEqual(0);
    expect(result.amount).toBeGreaterThanOrEqual(0);
  });
});

function createContext(overrides: Partial<CallContext> = {}): CallContext {
  return {
    caller: "+8613900000000",
    callee: "+8613800000000",
    durationSeconds: 60,
    customerType: "NORMAL",
    startedAt: daytime(),
    ...overrides,
  };
}

function daytime(): Date {
  return new Date(2026, 5, 5, 10, 0, 0);
}

function nightTime(): Date {
  return new Date(2026, 5, 5, 23, 30, 0);
}
