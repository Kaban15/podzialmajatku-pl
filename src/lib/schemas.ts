import { z } from "zod";

export const SUBJECT_OPTIONS = [
  { value: "rozwod", label: "Rozwód / Podział majątku" },
  { value: "podzial", label: "Podział majątku wspólnego" },
  { value: "spadek", label: "Dział spadku" },
  { value: "wspolwlasnosc", label: "Zniesienie współwłasności" },
  { value: "inne", label: "Inne" },
] as const;

export const SUBJECT_LABELS: Record<string, string> = Object.fromEntries(
  SUBJECT_OPTIONS.map((s) => [s.value, s.label])
);

export const contactFormSchema = z.object({
  name: z.string().min(2, "Imię i nazwisko musi mieć co najmniej 2 znaki"),
  email: z.string().email("Podaj prawidłowy adres email"),
  phone: z
    .string()
    .regex(
      /^(\+48)?[\s-]?\d{3}[\s-]?\d{3}[\s-]?\d{3}$/,
      "Podaj prawidłowy numer telefonu (np. 123 456 789)"
    ),
  subject: z.enum(["rozwod", "podzial", "spadek", "wspolwlasnosc", "inne"], {
    message: "Wybierz temat sprawy",
  }),
  message: z.string().min(10, "Opis musi mieć co najmniej 10 znaków"),
});

export type ContactFormData = z.infer<typeof contactFormSchema>;
