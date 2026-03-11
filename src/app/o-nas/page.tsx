import type { Metadata } from "next";
import { Phone, Mail, MapPin } from "lucide-react";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";
import { HowWeWork } from "@/components/sections/HowWeWork";

export const metadata: Metadata = {
  title: "O Kancelarii Lexperiens – Radcowie prawni Poznań | podzialmajatku.pl",
  description:
    "Kancelaria Lexperiens Radców Prawnych Zgłobicki Rohde sp. p. z siedzibą w Poznaniu. Specjalizujemy się w postępowaniach działowych – podział majątku, dział spadku, zniesienie współwłasności.",
};

export default function ONasPage() {
  return (
    <>
      {/* Hero section */}
      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8 lg:py-20">
          <Breadcrumbs items={[{ label: "O nas" }]} />

          <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:items-start">
            {/* Left column — text */}
            <div>
              <h1 className="mb-6 text-3xl font-bold leading-tight tracking-tight text-primary sm:text-4xl lg:text-5xl">
                Pomożemy Ci w rozwiązaniu Twojego problemu prawnego
              </h1>
              <p className="mb-4 leading-relaxed text-slate-600">
                Połączyliśmy swoją wiedzę i doświadczenie, aby oferować klientom
                kompleksową obsługę prawną w sprawach majątkowych. Nasz zespół
                tworzą radcowie prawni z wieloletnią praktyką w sądach
                powszechnych i polubownych na terenie całej Polski.
              </p>
              <p className="mb-4 leading-relaxed text-slate-600">
                Możesz liczyć na nasz czas i pełne zaangażowanie w Twoją sprawę.
                Regularnie informujemy klientów o postępach i jesteśmy dostępni
                na każdym etapie współpracy — od pierwszego kontaktu aż do
                prawomocnego zakończenia sprawy.
              </p>
              <p className="mb-6 leading-relaxed text-slate-600">
                Od początku wspólnej działalności stawiamy na transparentność,
                rzetelność i dyskrecję. Budujemy długoterminowe relacje oparte
                na zaufaniu — większość naszych spraw pochodzi z polecenia
                zadowolonych klientów.
              </p>
              <p className="font-semibold text-slate-900">Poznaj nas bliżej</p>
            </div>

            {/* Right column — decorative quote */}
            <div className="flex items-center justify-center lg:justify-end">
              <div className="relative max-w-md rounded-2xl bg-slate-50 p-8">
                <span
                  aria-hidden="true"
                  className="absolute -top-6 left-6 font-serif text-9xl leading-none text-slate-200 select-none"
                >
                  &ldquo;
                </span>
                <p className="relative font-serif text-xl leading-relaxed text-slate-500 sm:text-2xl">
                  Zbudowaliśmy swoje doświadczenie prowadząc blisko{" "}
                  <span className="font-bold text-slate-700">2050 spraw sądowych</span>{" "}
                  i przygotowując lub opiniując ponad{" "}
                  <span className="font-bold text-slate-700">550 umów</span>.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact section */}
      <section className="bg-slate-50">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
          <h2 className="mb-4 text-sm font-semibold uppercase tracking-widest text-primary">
            Jesteśmy gotowi zająć się Twoją sprawą
          </h2>
          <p className="mb-2 leading-relaxed text-slate-600">
            Biuro kancelarii jest czynne od poniedziałku do piątku w godzinach
            9:00–17:00. W tym czasie nasi prawnicy są do Twojej dyspozycji.
          </p>
          <p className="mb-10 leading-relaxed text-slate-600">
            Jeśli potrzebujesz kontaktu poza godzinami biurowymi — zostaw nam
            wiadomość lub wyślij e-mail, a odezwiemy się najszybciej jak to
            możliwe.
          </p>

          <h3 className="mb-8 text-2xl font-bold leading-snug tracking-tight text-slate-900 sm:text-3xl">
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
                  <a href="tel:+48618937504" className="hover:text-primary transition-colors">
                    61 893 75 04
                  </a>
                  <a href="tel:+48797623957" className="hover:text-primary transition-colors">
                    797 623 957
                  </a>
                  <a href="tel:+48789483216" className="hover:text-primary transition-colors">
                    789 483 216
                  </a>
                </div>
              </li>
              <li className="flex items-center gap-3 text-sm">
                <Mail className="size-5 shrink-0 text-primary" />
                <a
                  href="mailto:kancelaria@lexperiens.pl"
                  className="hover:text-primary transition-colors"
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
      </section>

      {/* How we work */}
      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <HowWeWork />
        </div>
      </section>
    </>
  );
}
