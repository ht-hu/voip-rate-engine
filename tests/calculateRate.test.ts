import { describe, expect, it } from "vitest";

import { calculateRate } from "../src/application/calculateRate.js";

describe("calculateRate", () => {
  it("returns a placeholder rate result", () => {
    const result = calculateRate({
      caller: "+10000000000",
      callee: "+10000000001",
      durationSeconds: 60,
    });

    expect(result).toEqual({
      amount: 0,
      currency: "USD",
    });
  });
});
