"use server";

import { Resend } from "resend";
import { contactFormSchema } from "@/lib/schemas";
import { isRateLimited } from "@/lib/rate-limit";

const resend = new Resend(process.env.RESEND_API_KEY);

const CONTACT_EMAIL = process.env.CONTACT_EMAIL || "delivered@resend.dev";

const subjectLabels: Record<string, string> = {
  rozwod: "Rozwód / Podział majątku",
  podzial: "Podział majątku wspólnego",
  spadek: "Dział spadku",
  wspolwlasnosc: "Zniesienie współwłasności",
  inne: "Inne",
};

function escapeHtml(str: string): string {
  return str
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

export async function sendContactEmail(formData: {
  name: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
}): Promise<{ success: boolean; error?: string }> {
  if (isRateLimited(formData.email)) {
    return {
      success: false,
      error: "Zbyt wiele wiadomości. Spróbuj ponownie za minutę.",
    };
  }

  const parsed = contactFormSchema.safeParse(formData);

  if (!parsed.success) {
    return {
      success: false,
      error: parsed.error.issues.map((e) => e.message).join(", "),
    };
  }

  const { name, email, phone, subject, message } = parsed.data;

  try {
    const { error } = await resend.emails.send({
      from: "Formularz kontaktowy <onboarding@resend.dev>",
      to: CONTACT_EMAIL,
      subject: `Nowe zapytanie: ${subjectLabels[subject]}`,
      replyTo: email,
      html: `
        <h2>Nowe zapytanie z formularza kontaktowego</h2>
        <table style="border-collapse:collapse;width:100%;max-width:600px;">
          <tr>
            <td style="padding:8px 12px;font-weight:bold;border-bottom:1px solid #eee;">Imię i Nazwisko</td>
            <td style="padding:8px 12px;border-bottom:1px solid #eee;">${escapeHtml(name)}</td>
          </tr>
          <tr>
            <td style="padding:8px 12px;font-weight:bold;border-bottom:1px solid #eee;">Email</td>
            <td style="padding:8px 12px;border-bottom:1px solid #eee;">${escapeHtml(email)}</td>
          </tr>
          <tr>
            <td style="padding:8px 12px;font-weight:bold;border-bottom:1px solid #eee;">Telefon</td>
            <td style="padding:8px 12px;border-bottom:1px solid #eee;">${escapeHtml(phone)}</td>
          </tr>
          <tr>
            <td style="padding:8px 12px;font-weight:bold;border-bottom:1px solid #eee;">Temat</td>
            <td style="padding:8px 12px;border-bottom:1px solid #eee;">${escapeHtml(subjectLabels[subject])}</td>
          </tr>
          <tr>
            <td style="padding:8px 12px;font-weight:bold;border-bottom:1px solid #eee;">Wiadomość</td>
            <td style="padding:8px 12px;border-bottom:1px solid #eee;">${escapeHtml(message).replace(/\n/g, "<br>")}</td>
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
