import type { Metadata } from "next";
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
              <h1 className="mb-6 font-serif text-3xl font-bold leading-tight tracking-tight text-primary sm:text-4xl lg:text-5xl">
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

      {/* How we work */}
      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <HowWeWork />
        </div>
      </section>
    </>
  );
}
