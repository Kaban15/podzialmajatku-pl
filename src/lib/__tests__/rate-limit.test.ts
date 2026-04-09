import { describe, it, expect, beforeEach, vi } from "vitest";
import { isRateLimited, _getRequestsMap } from "../rate-limit";

describe("isRateLimited", () => {
  beforeEach(() => {
    _getRequestsMap().clear();
  });

  it("allows first request", () => {
    expect(isRateLimited("test@example.com")).toBe(false);
  });

  it("allows up to 3 requests per minute", () => {
    expect(isRateLimited("test@example.com")).toBe(false);
    expect(isRateLimited("test@example.com")).toBe(false);
    expect(isRateLimited("test@example.com")).toBe(false);
  });

  it("blocks 4th request within window", () => {
    isRateLimited("test@example.com");
    isRateLimited("test@example.com");
    isRateLimited("test@example.com");
    expect(isRateLimited("test@example.com")).toBe(true);
  });

  it("tracks keys independently", () => {
    isRateLimited("a@example.com");
    isRateLimited("a@example.com");
    isRateLimited("a@example.com");
    expect(isRateLimited("a@example.com")).toBe(true);
    expect(isRateLimited("b@example.com")).toBe(false);
  });

  it("resets after window expires", () => {
    vi.useFakeTimers();
    isRateLimited("test@example.com");
    isRateLimited("test@example.com");
    isRateLimited("test@example.com");
    expect(isRateLimited("test@example.com")).toBe(true);

    vi.advanceTimersByTime(61_000);
    expect(isRateLimited("test@example.com")).toBe(false);
    vi.useRealTimers();
  });
});
