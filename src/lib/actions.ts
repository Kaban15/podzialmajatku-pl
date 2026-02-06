"use server";

import { Resend } from "resend";
import { contactFormSchema } from "@/lib/schemas";

const resend = new Resend(process.env.RESEND_API_KEY);

const CONTACT_EMAIL = process.env.CONTACT_EMAIL || "delivered@resend.dev";

export async function sendContactEmail(formData: {
  name: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
}): Promise<{ success: boolean; error?: string }> {
  const parsed = contactFormSchema.safeParse(formData);

  if (!parsed.success) {
    return {
      success: false,
      error: parsed.error.issues.map((e) => e.message).join(", "),
    };
  }

  const { name, email, phone, subject, message } = parsed.data;

  const subjectLabels: Record<string, string> = {
    rozwod: "Rozwód / Podział majątku",
    podzial: "Podział majątku wspólnego",
    spadek: "Dział spadku",
    wspolwlasnosc: "Zniesienie współwłasności",
    inne: "Inne",
  };

  try {
    const { error } = await resend.emails.send({
      from: "Formularz kontaktowy <onboarding@resend.dev>",
      to: CONTACT_EMAIL,
      subject: `Nowe zapytanie: ${subjectLabels[subject] || subject}`,
      replyTo: email,
      html: `
        <h2>Nowe zapytanie z formularza kontaktowego</h2>
        <table style="border-collapse:collapse;width:100%;max-width:600px;">
          <tr>
            <td style="padding:8px 12px;font-weight:bold;border-bottom:1px solid #eee;">Imię i Nazwisko</td>
            <td style="padding:8px 12px;border-bottom:1px solid #eee;">${name}</td>
          </tr>
          <tr>
            <td style="padding:8px 12px;font-weight:bold;border-bottom:1px solid #eee;">Email</td>
            <td style="padding:8px 12px;border-bottom:1px solid #eee;">${email}</td>
          </tr>
          <tr>
            <td style="padding:8px 12px;font-weight:bold;border-bottom:1px solid #eee;">Telefon</td>
            <td style="padding:8px 12px;border-bottom:1px solid #eee;">${phone}</td>
          </tr>
          <tr>
            <td style="padding:8px 12px;font-weight:bold;border-bottom:1px solid #eee;">Temat</td>
            <td style="padding:8px 12px;border-bottom:1px solid #eee;">${subjectLabels[subject] || subject}</td>
          </tr>
          <tr>
            <td style="padding:8px 12px;font-weight:bold;border-bottom:1px solid #eee;">Wiadomość</td>
            <td style="padding:8px 12px;border-bottom:1px solid #eee;">${message.replace(/\n/g, "<br>")}</td>
          </tr>
        </table>
        <p style="margin-top:16px;color:#666;font-size:12px;">
          Wiadomość wysłana z formularza na podzialmajatku.pl
        </p>
      `,
    });

    if (error) {
      console.error("Resend error:", error);
      return { success: false, error: "Nie udało się wysłać wiadomości. Spróbuj ponownie." };
    }

    return { success: true };
  } catch (err) {
    console.error("Email send error:", err);
    return { success: false, error: "Wystąpił błąd serwera. Spróbuj ponownie później." };
  }
}
