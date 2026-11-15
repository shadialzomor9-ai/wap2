import { describe, expect, it } from "vitest";
import { APPLICATION_START_DATE, APPLICATION_END_DATE } from "../components/CountdownTimer";

describe("Application countdown dates in Aden time", () => {
  it("starts at midnight on 17 November 2026", () => {
    expect(APPLICATION_START_DATE).toBe(Date.UTC(2026, 10, 16, 21));
  });

  it("ends at midnight on 20 December 2026", () => {
    expect(APPLICATION_END_DATE).toBe(Date.UTC(2026, 11, 19, 21));
  });
});