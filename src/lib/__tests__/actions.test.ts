import { describe, it, expect, vi, beforeEach } from "vitest";

const { mockSend } = vi.hoisted(() => ({
  mockSend: vi.fn(),
}));

vi.mock("resend", () => ({
  Resend: class {
    emails = { send: mockSend };
  },
}));

vi.mock("@/lib/rate-limit", () => ({
  isRateLimited: vi.fn().mockReturnValue(false),
}));

import { sendContactEmail } from "../actions";
import { isRateLimited } from "@/lib/rate-limit";

const validData = {
  name: "Jan Kowalski",
  email: "jan@example.com",
  phone: "123 456 789",
  subject: "rozwod",
  message: "Potrzebuję pomocy w sprawie podziału majątku.",
};

describe("sendContactEmail", () => {
  beforeEach(() => {
    vi.clearAllMocks();
    vi.mocked(isRateLimited).mockReturnValue(false);
  });

  it("sends email successfully with valid data", async () => {
    vi.mocked(mockSend).mockResolvedValue({ data: {}, error: null });

    const result = await sendContactEmail(validData);

    expect(result).toEqual({ success: true });
    expect(mockSend).toHaveBeenCalledOnce();
  });

  it("returns validation error for invalid data", async () => {
    const result = await sendContactEmail({
      ...validData,
      email: "not-an-email",
    });

    expect(result.success).toBe(false);
    expect(result.error).toBeDefined();
    expect(mockSend).not.toHaveBeenCalled();
  });

  it("returns error when Resend fails", async () => {
    vi.mocked(mockSend).mockResolvedValue({
      data: null,
      error: { message: "API error" },
    });

    const result = await sendContactEmail(validData);

    expect(result.success).toBe(false);
    expect(result.error).toContain("Nie udało się wysłać");
  });

  it("returns error when Resend throws", async () => {
    vi.mocked(mockSend).mockRejectedValue(new Error("Network error"));

    const result = await sendContactEmail(validData);

    expect(result.success).toBe(false);
    expect(result.error).toContain("Wystąpił błąd serwera");
  });

  it("returns rate limit error when rate limited", async () => {
    vi.mocked(isRateLimited).mockReturnValue(true);

    const result = await sendContactEmail(validData);

    expect(result.success).toBe(false);
    expect(result.error).toContain("Zbyt wiele wiadomości");
    expect(mockSend).not.toHaveBeenCalled();
  });
});
