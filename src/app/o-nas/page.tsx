import type { Metadata } from "next";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";
import { ServiceSidebar } from "@/components/layout/ServiceSidebar";

export const metadata: Metadata = {
  title: "O Kancelarii Lexperiens – Radcowie prawni Poznań | podzialmajatku.pl",
  description:
    "Kancelaria Lexperiens Radców Prawnych Zgłobicki Rohde sp. p. z siedzibą w Poznaniu. Specjalizujemy się w postępowaniach działowych – podział majątku, dział spadku, zniesienie współwłasności.",
};

export default function ONasPage() {
  return (
    <section className="bg-gradient-to-br from-slate-50 to-blue-50/50">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
        <Breadcrumbs items={[{ label: "O nas" }]} />

        <div className="grid grid-cols-1 gap-10 lg:grid-cols-3">
          {/* Main Content - 2/3 */}
          <article className="lg:col-span-2">
            <h1 className="mb-6 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
              O Kancelarii Lexperiens
            </h1>

            <p className="mb-6 text-lg leading-relaxed text-slate-600">
              Lexperiens Kancelaria Radców Prawnych Zgłobicki Rohde sp. p.
              z siedzibą w Poznaniu to zespół doświadczonych prawników
              specjalizujących się w postępowaniach działowych – podziale
              majątku, dziale spadku oraz zniesieniu współwłasności.
            </p>

            <p className="mb-6 leading-relaxed text-slate-600">
              Nasza kancelaria oferuje kompleksową obsługę prawną zarówno na
              etapie polubownym, jak i sądowym. Stawiamy na indywidualne
              podejście do każdej sprawy, przejrzystą komunikację z klientem
              i najwyższe standardy etyczne.
            </p>

            <div className="mb-8 rounded-lg border bg-white p-6 shadow-sm">
              <h2 className="mb-4 text-xl font-semibold text-slate-900">
                Dane kontaktowe
              </h2>
              <ul className="space-y-2 text-sm text-slate-600">
                <li>
                  <span className="font-medium text-slate-900">Adres:</span>{" "}
                  ul. Mikołaja Reja 1/8, 60-826 Poznań
                </li>
                <li>
                  <span className="font-medium text-slate-900">Telefon:</span>{" "}
                  +48 61 893 75 04 &bull; +48 797 623 957 &bull; +48 789 483 216
                </li>
                <li>
                  <span className="font-medium text-slate-900">E-mail:</span>{" "}
                  kancelaria@lexperiens.pl
                </li>
                <li>
                  <span className="font-medium text-slate-900">WWW:</span>{" "}
                  <a
                    href="https://lexperiens.pl/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary underline-offset-4 hover:underline"
                  >
                    lexperiens.pl
                  </a>
                </li>
              </ul>
            </div>

            <p className="text-sm text-slate-500">
              Treść tej sekcji zostanie uzupełniona przez kancelarię.
            </p>
          </article>

          {/* Sidebar - 1/3 */}
          <ServiceSidebar />
        </div>
      </div>
    </section>
  );
}
