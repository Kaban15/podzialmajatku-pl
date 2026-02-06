import type { Metadata } from "next";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";
import { ServiceSidebar } from "@/components/layout/ServiceSidebar";
import { ServiceSchema } from "@/components/seo/ServiceSchema";

export const metadata: Metadata = {
  title: "Zniesienie współwłasności nieruchomości - Sądowe i Umowne",
  description:
    "Pomoc prawna w zniesieniu współwłasności nieruchomości. Podział fizyczny, spłata współwłaścicieli, sprzedaż licytacyjna. Konsultacja bezpłatna.",
};

export default function ZniesienieWspolwlasnosciPage() {
  return (
    <>
      <ServiceSchema
        name="Zniesienie współwłasności"
        description="Profesjonalna pomoc prawna w sprawach zniesienia współwłasności nieruchomości – podział fizyczny, spłaty, sprzedaż licytacyjna."
        url="https://podzialmajatku.pl/zniesienie-wspolwlasnosci"
      />

      <section className="bg-gradient-to-br from-slate-50 to-blue-50/50">
        <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
          <Breadcrumbs
            items={[{ label: "Zniesienie współwłasności" }]}
          />

          <div className="grid grid-cols-1 gap-10 lg:grid-cols-3">
            {/* Main Content - 2/3 */}
            <article className="lg:col-span-2">
              <h1 className="mb-6 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
                Sądowe i umowne zniesienie współwłasności
              </h1>

              <p className="mb-8 text-lg leading-relaxed text-slate-600">
                Współwłasność nieruchomości może prowadzić do wielu
                konfliktów między współwłaścicielami. Niezależnie od tego,
                czy współwłasność powstała w wyniku dziedziczenia, darowizny
                czy wspólnego zakupu – każdy współwłaściciel ma prawo żądać
                jej zniesienia. Opisz swoją sytuację w formularzu, a pomożemy
                Ci wybrać najlepszą drogę.
              </p>

              {/* Section 1 */}
              <section className="mb-8">
                <h2 className="mb-4 text-2xl font-semibold text-slate-900">
                  Na czym polega zniesienie współwłasności?
                </h2>
                <p className="mb-4 text-slate-600 leading-relaxed">
                  Zniesienie współwłasności to procedura prawna, która
                  prowadzi do likwidacji stosunku współwłasności. Może
                  nastąpić na trzy sposoby:
                </p>
                <ul className="mb-4 list-inside list-disc space-y-2 text-slate-600">
                  <li>
                    <strong>Podział fizyczny</strong> – nieruchomość zostaje
                    podzielona na odrębne części (np. podział działki na
                    mniejsze parcele). Jest to preferowany przez sądy sposób.
                  </li>
                  <li>
                    <strong>Przyznanie jednemu współwłaścicielowi</strong>{" "}
                    – całość nieruchomości trafia do jednej osoby, która
                    spłaca pozostałych współwłaścicieli.
                  </li>
                  <li>
                    <strong>Sprzedaż licytacyjna</strong> – nieruchomość
                    zostaje sprzedana, a uzyskana kwota dzielona proporcjonalnie
                    do udziałów.
                  </li>
                </ul>
                <p className="text-slate-600 leading-relaxed">
                  Zniesienie może odbyć się umownie (gdy współwłaściciele
                  są zgodni) lub sądowo (w przypadku sporu). Droga umowna
                  jest szybsza i tańsza, wymaga jednak zgodnej woli
                  wszystkich stron.
                </p>
              </section>

              {/* Section 2 */}
              <section className="mb-8">
                <h2 className="mb-4 text-2xl font-semibold text-slate-900">
                  Spłata pozostałych współwłaścicieli
                </h2>
                <p className="mb-4 text-slate-600 leading-relaxed">
                  Gdy nieruchomość zostaje przyznana jednemu
                  współwłaścicielowi, jest on zobowiązany do spłaty
                  pozostałych. Kluczowe kwestie:
                </p>
                <ul className="mb-4 list-inside list-disc space-y-2 text-slate-600">
                  <li>
                    Wysokość spłaty ustalana jest na podstawie wartości
                    rynkowej nieruchomości i wielkości udziałów
                  </li>
                  <li>
                    Sąd może rozłożyć spłatę na raty (najczęściej do
                    10 lat) z uwzględnieniem możliwości finansowych
                    zobowiązanego
                  </li>
                  <li>
                    Wycena nieruchomości dokonywana jest przez biegłego
                    rzeczoznawcę majątkowego powołanego przez sąd
                  </li>
                  <li>
                    Nakłady poniesione przez poszczególnych współwłaścicieli
                    (np. remonty) mogą wpływać na wysokość spłat
                  </li>
                </ul>
              </section>

              {/* Section 3 */}
              <section className="mb-8">
                <h2 className="mb-4 text-2xl font-semibold text-slate-900">
                  Sprzedaż licytacyjna nieruchomości – ostateczność
                </h2>
                <p className="mb-4 text-slate-600 leading-relaxed">
                  Sprzedaż licytacyjna to rozwiązanie stosowane, gdy:
                </p>
                <ul className="mb-4 list-inside list-disc space-y-2 text-slate-600">
                  <li>Podział fizyczny nieruchomości nie jest możliwy</li>
                  <li>Żaden ze współwłaścicieli nie chce lub nie może przejąć całości</li>
                  <li>Współwłaściciele nie mogą dojść do porozumienia co do warunków</li>
                </ul>
                <p className="text-slate-600 leading-relaxed">
                  Należy pamiętać, że licytacja wiąże się z dodatkowymi
                  kosztami (komornik, ogłoszenia) i zazwyczaj nieruchomość
                  sprzedawana jest poniżej wartości rynkowej. Dlatego zawsze
                  warto najpierw rozważyć ugodowe rozwiązanie sporu.
                </p>
              </section>

              {/* CTA */}
              <div className="rounded-lg border-l-4 border-primary bg-blue-50 p-6">
                <p className="font-medium text-slate-900">
                  Chcesz znieść współwłasność nieruchomości?
                </p>
                <p className="mt-1 text-sm text-slate-600">
                  Opisz swoją sytuację w formularzu obok – ocenimy Twoje
                  możliwości i zaproponujemy najlepszą strategię działania.
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
