import { Shield, Clock, Users } from "lucide-react";
import { ContactForm } from "@/components/forms/ContactForm";

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-slate-50 to-blue-50">
        <div className="mx-auto grid max-w-7xl gap-12 px-4 py-16 sm:px-6 lg:grid-cols-2 lg:items-center lg:px-8 lg:py-24">
          {/* Left: Text */}
          <div className="space-y-6">
            <h1 className="text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl">
              Profesjonalna pomoc w{" "}
              <span className="text-primary">podziale majątku</span>
            </h1>
            <p className="max-w-lg text-lg leading-relaxed text-slate-600">
              Specjalizujemy się w sprawach podziału majątku po rozwodzie,
              dziale spadku oraz zniesieniu współwłasności. Zapewniamy
              indywidualne podejście i skuteczne rozwiązania prawne.
            </p>
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
              <div className="flex items-start gap-3">
                <Shield className="mt-0.5 size-5 shrink-0 text-primary" />
                <div>
                  <p className="text-sm font-semibold text-slate-900">
                    Doświadczenie
                  </p>
                  <p className="text-xs text-slate-500">
                    Wieloletnia praktyka
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Clock className="mt-0.5 size-5 shrink-0 text-primary" />
                <div>
                  <p className="text-sm font-semibold text-slate-900">
                    Szybki kontakt
                  </p>
                  <p className="text-xs text-slate-500">
                    Odpowiedź w 24h
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Users className="mt-0.5 size-5 shrink-0 text-primary" />
                <div>
                  <p className="text-sm font-semibold text-slate-900">
                    Indywidualne podejście
                  </p>
                  <p className="text-xs text-slate-500">
                    Każda sprawa jest inna
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right: Contact Form */}
          <div className="rounded-xl border bg-white p-6 shadow-lg sm:p-8">
            <h2 className="mb-1 text-xl font-semibold text-slate-900">
              Bezpłatna konsultacja
            </h2>
            <p className="mb-6 text-sm text-slate-500">
              Wypełnij formularz, a nasz prawnik skontaktuje się z Tobą.
            </p>
            <ContactForm />
          </div>
        </div>
      </section>
    </>
  );
}
