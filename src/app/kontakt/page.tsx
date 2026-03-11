import type { Metadata } from "next";
import { Phone, Mail, MapPin } from "lucide-react";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";
import { ContactForm } from "@/components/forms/ContactForm";

export const metadata: Metadata = {
  title: "Kontakt – Kancelaria Lexperiens Poznań | podzialmajatku.pl",
  description:
    "Skontaktuj się z Kancelarią Lexperiens w Poznaniu. Podział majątku, dział spadku, zniesienie współwłasności – bezpłatna wstępna konsultacja.",
};

export default function KontaktPage() {
  return (
    <section className="bg-gradient-to-br from-slate-50 to-blue-50/50">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8 lg:py-20">
        <Breadcrumbs items={[{ label: "Kontakt" }]} />

        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:items-start">
          {/* LEFT COLUMN — contact info */}
          <div className="space-y-6">
            <h1 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
              Skontaktuj się z nami
            </h1>

            <div>
              <h2 className="mb-2 text-sm font-semibold uppercase tracking-widest text-primary">
                Jesteśmy gotowi zająć się Twoją sprawą
              </h2>
              <p className="leading-relaxed text-slate-600">
                Biuro kancelarii jest czynne od poniedziałku do piątku
                w godzinach 9:00–17:00. W tym czasie nasi prawnicy są do
                Twojej dyspozycji.
              </p>
              <p className="mt-2 leading-relaxed text-slate-600">
                Jeśli potrzebujesz kontaktu poza godzinami biurowymi — zostaw
                nam wiadomość lub wyślij e-mail, a odezwiemy się najszybciej
                jak to możliwe.
              </p>
            </div>

            <h3 className="text-xl font-bold leading-snug tracking-tight text-slate-900 sm:text-2xl">
              Prowadzimy sprawy w całej Polsce, dla klientów z kraju oraz
              z zagranicy.
            </h3>

            <div className="rounded-xl border bg-white p-8 shadow-sm">
              <p className="mb-6 text-lg font-semibold text-slate-900">
                Lexperiens Kancelaria Radców Prawnych sp.&nbsp;p.
              </p>
              <ul className="space-y-4 text-slate-600">
                <li className="flex items-start gap-3">
                  <Phone className="mt-0.5 size-5 shrink-0 text-primary" />
                  <div className="flex flex-col gap-1 text-sm">
                    <a
                      href="tel:+48618937504"
                      className="transition-colors hover:text-primary"
                    >
                      61 893 75 04
                    </a>
                    <a
                      href="tel:+48797623957"
                      className="transition-colors hover:text-primary"
                    >
                      797 623 957
                    </a>
                    <a
                      href="tel:+48789483216"
                      className="transition-colors hover:text-primary"
                    >
                      789 483 216
                    </a>
                  </div>
                </li>
                <li className="flex items-center gap-3 text-sm">
                  <Mail className="size-5 shrink-0 text-primary" />
                  <a
                    href="mailto:kancelaria@lexperiens.pl"
                    className="transition-colors hover:text-primary"
                  >
                    kancelaria@lexperiens.pl
                  </a>
                </li>
                <li className="flex items-center gap-3 text-sm">
                  <MapPin className="size-5 shrink-0 text-primary" />
                  <span>ul. Mikołaja Reja 1/8, 60-826 Poznań</span>
                </li>
              </ul>
            </div>
          </div>

          {/* RIGHT COLUMN — contact form */}
          <div className="rounded-xl border bg-white p-6 shadow-lg sm:p-8">
            <h2 className="mb-1 text-xl font-semibold text-slate-900">
              Bezpłatna konsultacja
            </h2>
            <p className="mb-6 text-sm text-slate-500">
              Opisz swoją sprawę, a nasz prawnik skontaktuje się z Tobą
              w ciągu 24h.
            </p>
            <ContactForm />
          </div>
        </div>
      </div>
    </section>
  );
}
