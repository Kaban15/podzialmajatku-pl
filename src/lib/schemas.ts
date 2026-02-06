import { z } from "zod";

export const contactFormSchema = z.object({
  name: z.string().min(2, "Imię i nazwisko musi mieć co najmniej 2 znaki"),
  email: z.string().email("Podaj prawidłowy adres email"),
  phone: z
    .string()
    .regex(
      /^(\+48)?[\s-]?\d{3}[\s-]?\d{3}[\s-]?\d{3}$/,
      "Podaj prawidłowy numer telefonu (np. 123 456 789)"
    ),
  subject: z.string().min(1, "Wybierz temat sprawy"),
  message: z.string().min(10, "Opis musi mieć co najmniej 10 znaków"),
});

export type ContactFormData = z.infer<typeof contactFormSchema>;
