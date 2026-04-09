import { describe, it, expect } from "vitest";
import { contactFormSchema } from "../schemas";

const validData = {
  name: "Jan Kowalski",
  email: "jan@example.com",
  phone: "123 456 789",
  subject: "rozwod" as const,
  message: "Potrzebuję pomocy w sprawie podziału majątku.",
};

describe("contactFormSchema", () => {
  it("accepts valid data", () => {
    const result = contactFormSchema.safeParse(validData);
    expect(result.success).toBe(true);
  });

  it("accepts phone with +48 prefix", () => {
    const result = contactFormSchema.safeParse({
      ...validData,
      phone: "+48 123 456 789",
    });
    expect(result.success).toBe(true);
  });

  it("accepts all valid subject values", () => {
    const subjects = ["rozwod", "podzial", "spadek", "wspolwlasnosc", "inne"];
    for (const subject of subjects) {
      const result = contactFormSchema.safeParse({ ...validData, subject });
      expect(result.success).toBe(true);
    }
  });

  it("rejects name shorter than 2 characters", () => {
    const result = contactFormSchema.safeParse({ ...validData, name: "J" });
    expect(result.success).toBe(false);
  });

  it("rejects invalid email", () => {
    const result = contactFormSchema.safeParse({
      ...validData,
      email: "not-an-email",
    });
    expect(result.success).toBe(false);
  });

  it("rejects invalid phone number", () => {
    const result = contactFormSchema.safeParse({
      ...validData,
      phone: "12345",
    });
    expect(result.success).toBe(false);
  });

  it("rejects invalid subject value", () => {
    const result = contactFormSchema.safeParse({
      ...validData,
      subject: "invalid-subject",
    });
    expect(result.success).toBe(false);
  });

  it("rejects message shorter than 10 characters", () => {
    const result = contactFormSchema.safeParse({
      ...validData,
      message: "Krótka",
    });
    expect(result.success).toBe(false);
  });

  it("rejects empty subject", () => {
    const result = contactFormSchema.safeParse({
      ...validData,
      subject: "",
    });
    expect(result.success).toBe(false);
  });
});
