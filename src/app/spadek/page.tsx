import type { Metadata } from "next";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";
import { ServiceSidebar } from "@/components/layout/ServiceSidebar";
import { ServiceSchema } from "@/components/seo/ServiceSchema";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export const metadata: Metadata = {
  title:
    "Dział spadku Poznań - Radca prawny podział spadku | Kancelaria Lexperiens",
  description:
    "Postępowanie działowe przy podziale spadku – umowny i sądowy dział spadku. Doświadczony radca prawny w Poznaniu. Kancelaria Lexperiens – pomoc prawna w sprawach spadkowych.",
};

export default function SpadekPage() {
  return (
    <>
      <ServiceSchema
        name="Dział spadku"
        description="Postępowanie działowe przy podziale spadku – umowny i sądowy dział spadku. Profesjonalna pomoc prawna Kancelarii Lexperiens w Poznaniu."
        url="https://podzialmajatku.pl/spadek"
      />

      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
          <Breadcrumbs items={[{ label: "Dział spadku" }]} />

          <div className="grid grid-cols-1 gap-10 lg:grid-cols-3">
            {/* Main Content - 2/3 */}
            <article className="lg:col-span-2">
              <h1 className="mb-6 font-serif text-2xl font-bold tracking-tight text-[#2c2c2c] sm:text-3xl md:text-4xl">
                Postępowanie działowe przy podziale spadku (dział spadku)
              </h1>

              <p className="mb-6 text-lg leading-relaxed text-slate-600">
                Często przy podziale spadku (postępowania o dział spadku),
                dochodzi do sporu pomiędzy spadkobiercami. W takich sytuacjach
                ważne jest, aby mieć świadomość możliwych do podjęcia kroków
                prawnych. Postępowanie działowe przy podziale spadku może zostać
                poprowadzone w dwóch odrębnych trybach, która uzależnione są od
                woli wszystkich spadkobierców.
              </p>

              <section className="mb-8">
                <h2 className="mb-4 font-serif text-2xl font-semibold text-[#2c2c2c]">
                  Dwa tryby działu spadku
                </h2>
                <p className="mb-4 leading-relaxed text-slate-600">
                  Zgodnie z intencją ustawodawcy, przewidziane zostały dwa tryby
                  dokonania działu spadku. Pierwszy z nich dotyczy umownej formy
                  działu spadku i polega na zawarciu porozumienia (umowy)
                  pomiędzy spadkobiercami w zakresie podziału majątku
                  spadkowego. Ta forma przewidziana jest głównie dla sytuacji,
                  w których każdy ze spadkobierców ma tożsame i zgodne stanowisko
                  w zakresie działu spadku. Jest to również dużo sprawniejsze
                  rozwiązanie z punktu widzenia czasu, aniżeli drugi tryb.
                </p>
                <p className="mb-4 leading-relaxed text-slate-600">
                  Drugim rozwiązaniem jest sądowy dział spadku, który polega na
                  przeprowadzeniu postępowania sądowego w zakresie działu spadku
                  i kończy się orzeczeniem sądu. Najczęściej drugi tryb jest
                  przeznaczony dla spadkobierców, którzy nie mają wypracowanego
                  jednolitego stanowiska w zakresie działu spadku. Oczywiście
                  nie oznacza to, że spadkobiercy o zgodnych stanowiskach nie
                  mogą dokonać działu spadku w trybie sądowym – taka sytuacja
                  jest prawnie dopuszczalna.
                </p>
                <p className="leading-relaxed text-slate-600">
                  Za ustawodawcą należy powtórzyć –{" "}
                  <em className="text-slate-700">
                    &bdquo;Dział spadku może nastąpić bądź na mocy umowy między
                    wszystkimi spadkobiercami, bądź na mocy orzeczenia sądu na
                    żądanie któregokolwiek ze spadkobierców.&rdquo;
                  </em>{" "}
                  – tak art. 1037 § 1 k.c.
                </p>
              </section>

              {/* CTA */}
              <div className="rounded-lg border-l-4 border-primary bg-blue-50 p-6">
                <p className="font-medium text-slate-900">
                  Potrzebujesz pomocy w sprawie spadkowej?
                </p>
                <p className="mt-1 text-sm text-slate-600">
                  Skorzystaj z formularza obok lub zadzwoń – pomożemy Ci na
                  każdym etapie postępowania o dział spadku.
                </p>
              </div>

              {/* FAQ / More info */}
              <section className="mt-10">
                <h2 className="mb-4 font-serif text-2xl font-semibold text-[#2c2c2c]">
                  Więcej informacji; przykłady
                </h2>
                <Accordion type="single" collapsible className="w-full">
                  <AccordionItem value="item-1">
                    <AccordionTrigger>Przykładowy temat 1</AccordionTrigger>
                    <AccordionContent>
                      Tutaj pojawi się treść dodana później przez kancelarię.
                    </AccordionContent>
                  </AccordionItem>
                  <AccordionItem value="item-2">
                    <AccordionTrigger>Przykładowy temat 2</AccordionTrigger>
                    <AccordionContent>
                      Tutaj pojawi się treść dodana później przez kancelarię.
                    </AccordionContent>
                  </AccordionItem>
                  <AccordionItem value="item-3">
                    <AccordionTrigger>Przykładowy temat 3</AccordionTrigger>
                    <AccordionContent>
                      Tutaj pojawi się treść dodana później przez kancelarię.
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
              </section>
            </article>

            {/* Sidebar - 1/3 */}
            <ServiceSidebar />
          </div>
        </div>
      </section>
    </>
  );
}
