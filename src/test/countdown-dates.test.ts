import { describe, expect, it } from "vitest";
import { APPLICATION_START_DATE, APPLICATION_END_DATE, getCountdown } from "../components/CountdownTimer";

describe("Application countdown restart", () => {
  it("starts with 33 days, 10 hours, 24 minutes and 25 seconds", () => {
    expect(getCountdown(APPLICATION_START_DATE)).toEqual({
      days: 33, hours: 10, minutes: 24, seconds: 25, hasEnded: false,
    });
  });

  it("decreases over time instead of restarting on each visit", () => {
    expect(getCountdown(APPLICATION_START_DATE + 1000).seconds).toBe(24);
    expect(getCountdown(APPLICATION_START_DATE + 86400000).days).toBe(32);
  });

  it("ends at the shared deadline without negative values", () => {
    expect(getCountdown(APPLICATION_END_DATE + 1000)).toEqual({
      days: 0, hours: 0, minutes: 0, seconds: 0, hasEnded: true,
    });
  });
});