import type { Metadata } from "next";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";
import { ServiceSidebar } from "@/components/layout/ServiceSidebar";
import { ServiceSchema } from "@/components/seo/ServiceSchema";

export const metadata: Metadata = {
  title:
    "Postępowanie działowe Poznań - Radca prawny | Kancelaria Lexperiens",
  description:
    "Kompleksowe prowadzenie postępowań działowych – podział majątku wspólnego, dział spadku, zniesienie współwłasności. Kancelaria Lexperiens Poznań.",
};

export default function PostepowanieDzialowePage() {
  return (
    <>
      <ServiceSchema
        name="Postępowanie działowe"
        description="Kompleksowe prowadzenie postępowań działowych – podział majątku, dział spadku, zniesienie współwłasności. Kancelaria Lexperiens Poznań."
        url="https://podzialmajatku.pl/postepowanie-dzialowe"
      />

      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
          <Breadcrumbs items={[{ label: "Postępowanie działowe" }]} />

          <div className="grid grid-cols-1 gap-10 lg:grid-cols-3">
            <article className="lg:col-span-2">
              <h1 className="mb-6 font-serif text-2xl font-bold tracking-tight text-body sm:text-3xl md:text-4xl">
                Postępowanie działowe
              </h1>

              <p className="mb-6 text-lg leading-relaxed text-slate-600">
                Sprawy cywilne związane z postępowaniami działowymi to szerokie
                określenie różnego rodzaju spraw, do których należą: sprawy
                związane z podziałem majątku wspólnego, sprawy związane
                z podziałem spadku oraz sprawy związane ze zniesieniem
                współwłasności.
              </p>

              <section className="mb-8">
                <h2 className="mb-4 font-serif text-2xl font-semibold text-body">
                  Cechy charakterystyczne
                </h2>
                <p className="mb-4 leading-relaxed text-slate-600">
                  Cechą charakterystyczną wszystkich tych spraw jest fakt, iż co
                  do zasady należą one do kategorii spraw trudnych i niezwykle
                  skomplikowanych z punktu widzenia faktycznego oraz prawnego.
                  Dodatkowo należy wskazać, że postępowania działowe
                  charakteryzuje niezwykle zharmonizowany jego przebieg
                  z uwzględnieniem przepisów z zakresu zniesienia współwłasności.
                </p>
                <p className="leading-relaxed text-slate-600">
                  Stopień trudności każdorazowo uzależniony jest od konkretnej
                  sprawy, ilości oraz rodzaju dzielonych składników majątkowych,
                  zgłaszanych żądań dodatkowych przez strony postępowania,
                  stanowiska stron w zakresie ewentualnych możliwości ugodowych
                  etc.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="mb-4 font-serif text-2xl font-semibold text-body">
                  Cel postępowań działowych
                </h2>
                <p className="leading-relaxed text-slate-600">
                  Podstawowym celem postępowań działowych jest podział masy
                  majątkowej oraz ostateczne uregulowanie i zakończenie pomiędzy
                  stronami wszelkich stosunków mających odniesienie do wspólności
                  masy majątkowej.
                </p>
              </section>

              <div className="rounded-lg border-l-4 border-primary bg-blue-50 p-6">
                <p className="font-medium text-slate-900">
                  Potrzebujesz pomocy w postępowaniu działowym?
                </p>
                <p className="mt-1 text-sm text-slate-600">
                  Skontaktuj się z naszą kancelarią – poprowadzimy Twoją sprawę
                  na każdym etapie.
                </p>
              </div>
            </article>

            <ServiceSidebar />
          </div>
        </div>
      </section>
    </>
  );
}
