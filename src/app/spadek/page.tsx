import type { Metadata } from "next";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";
import { ServiceSidebar } from "@/components/layout/ServiceSidebar";
import { ServiceSchema } from "@/components/seo/ServiceSchema";

export const metadata: Metadata = {
  title: "Dział spadku i zachowek - Pomoc prawna w sprawach spadkowych",
  description:
    "Pomoc prawna w dziale spadku, zachowku i podziale nieruchomości odziedziczonej. Umowny i sądowy dział spadku. Bezpłatna konsultacja prawna.",
};

export default function SpadekPage() {
  return (
    <>
      <ServiceSchema
        name="Dział spadku"
        description="Profesjonalna pomoc prawna w sprawach działu spadku, zachowku i podziału odziedziczonego majątku między spadkobierców."
        url="https://podzialmajatku.pl/spadek"
      />

      <section className="bg-gradient-to-br from-slate-50 to-blue-50/50">
        <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
          <Breadcrumbs items={[{ label: "Dział spadku" }]} />

          <div className="grid grid-cols-1 gap-10 lg:grid-cols-3">
            {/* Main Content - 2/3 */}
            <article className="lg:col-span-2">
              <h1 className="mb-6 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
                Dział spadku – Pomoc w trudnych sprawach rodzinnych
              </h1>

              <p className="mb-8 text-lg leading-relaxed text-slate-600">
                Sprawy spadkowe bywają skomplikowane zarówno pod względem
                prawnym, jak i emocjonalnym. Po stwierdzeniu nabycia spadku
                konieczne jest ustalenie, co wchodzi w skład spadku i jak
                go podzielić między spadkobierców. Wypełnij formularz obok,
                a pomożemy Ci przejść przez cały proces.
              </p>

              {/* Section 1 */}
              <section className="mb-8">
                <h2 className="mb-4 text-2xl font-semibold text-slate-900">
                  Umowny czy sądowy dział spadku?
                </h2>
                <p className="mb-4 text-slate-600 leading-relaxed">
                  Dział spadku może nastąpić na dwa sposoby. Wybór zależy
                  przede wszystkim od relacji między spadkobiercami:
                </p>
                <ul className="mb-4 list-inside list-disc space-y-2 text-slate-600">
                  <li>
                    <strong>Dział umowny</strong> – wymaga zgody wszystkich
                    spadkobierców. Jest szybszy, tańszy i mniej stresujący.
                    Jeśli w skład spadku wchodzi nieruchomość, umowa musi
                    mieć formę aktu notarialnego.
                  </li>
                  <li>
                    <strong>Dział sądowy</strong> – konieczny, gdy
                    spadkobiercy nie mogą dojść do porozumienia. Sąd ustala
                    skład i wartość spadku, a następnie dokonuje podziału
                    z uwzględnieniem interesów wszystkich stron.
                  </li>
                </ul>
                <p className="text-slate-600 leading-relaxed">
                  Niezależnie od wybranej drogi, warto skonsultować się
                  z prawnikiem, aby zabezpieczyć swoje interesy i uniknąć
                  kosztownych błędów.
                </p>
              </section>

              {/* Section 2 */}
              <section className="mb-8">
                <h2 className="mb-4 text-2xl font-semibold text-slate-900">
                  Czy zachowek wlicza się do podziału?
                </h2>
                <p className="mb-4 text-slate-600 leading-relaxed">
                  Zachowek i dział spadku to dwie odrębne instytucje prawne,
                  ale mogą się wzajemnie przenikać:
                </p>
                <ul className="mb-4 list-inside list-disc space-y-2 text-slate-600">
                  <li>
                    Zachowek przysługuje najbliższym członkom rodziny
                    (dzieci, małżonek, rodzice), którzy zostali pominięci
                    w testamencie lub otrzymali mniej niż im się należy
                  </li>
                  <li>
                    Wysokość zachowku to co do zasady połowa wartości udziału
                    spadkowego, który przypadłby przy dziedziczeniu ustawowym
                    (2/3 dla małoletnich i trwale niezdolnych do pracy)
                  </li>
                  <li>
                    Przy obliczaniu zachowku uwzględnia się darowizny
                    dokonane za życia spadkodawcy oraz zapisy windykacyjne
                  </li>
                  <li>
                    Roszczenie o zachowek przedawnia się po 5 latach od
                    ogłoszenia testamentu
                  </li>
                </ul>
              </section>

              {/* Section 3 */}
              <section className="mb-8">
                <h2 className="mb-4 text-2xl font-semibold text-slate-900">
                  Podział nieruchomości odziedziczonej przez kilka osób
                </h2>
                <p className="mb-4 text-slate-600 leading-relaxed">
                  Odziedziczenie nieruchomości przez kilku spadkobierców
                  tworzy współwłasność, która często jest źródłem
                  konfliktów. Możliwe rozwiązania:
                </p>
                <ul className="mb-4 list-inside list-disc space-y-2 text-slate-600">
                  <li>
                    <strong>Podział fizyczny</strong> – np. podział domu na
                    odrębne lokale lub działki na mniejsze parcele (jeśli
                    jest to technicznie możliwe)
                  </li>
                  <li>
                    <strong>Przejęcie przez jednego spadkobiercę</strong>{" "}
                    – z obowiązkiem spłaty pozostałych według ich udziałów
                    spadkowych
                  </li>
                  <li>
                    <strong>Sprzedaż</strong> – i podział uzyskanej kwoty
                    między spadkobierców proporcjonalnie do udziałów
                  </li>
                </ul>
                <p className="text-slate-600 leading-relaxed">
                  Przy podziale nieruchomości kluczowa jest jej prawidłowa
                  wycena. Sąd powołuje biegłego rzeczoznawcę, ale strony
                  mogą również przedstawić własne operaty szacunkowe.
                </p>
              </section>

              {/* CTA */}
              <div className="rounded-lg border-l-4 border-primary bg-blue-50 p-6">
                <p className="font-medium text-slate-900">
                  Potrzebujesz pomocy w sprawie spadkowej?
                </p>
                <p className="mt-1 text-sm text-slate-600">
                  Skorzystaj z formularza obok lub zadzwoń – pierwsza
                  konsultacja jest bezpłatna. Pomożemy Ci na każdym etapie
                  postępowania.
                </p>
              </div>
            </article>

            {/* Sidebar - 1/3 */}
            <ServiceSidebar />
          </div>
        </div>
      </section>
    </>
  );
}
