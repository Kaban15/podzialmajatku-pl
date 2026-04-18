import type { Metadata } from "next";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";
import { ServiceSidebar } from "@/components/layout/ServiceSidebar";

export const metadata: Metadata = {
  title:
    "Baza wiedzy - Podział majątku, spadek, współwłasność | Kancelaria Lexperiens",
  description:
    "Baza wiedzy prawnej – artykuły o podziale majątku, dziale spadku i zniesieniu współwłasności. Praktyczne wskazówki od radców prawnych z Poznania.",
};

export default function BazaWiedzyPage() {
  return (
    <section className="bg-white">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
        <Breadcrumbs items={[{ label: "Baza wiedzy" }]} />

        <div className="grid grid-cols-1 gap-10 lg:grid-cols-3">
          <article className="lg:col-span-2">
            <h1 className="mb-6 font-serif text-2xl font-bold tracking-tight text-body sm:text-3xl md:text-4xl">
              Baza wiedzy
            </h1>

            <p className="mb-6 text-lg leading-relaxed text-slate-600">
              W naszej bazie wiedzy znajdziesz artykuły i praktyczne wskazówki
              dotyczące postępowań działowych – podziału majątku po rozwodzie,
              działu spadku oraz zniesienia współwłasności.
            </p>

            <div className="rounded-lg border bg-slate-50 p-8 text-center">
              <p className="text-slate-600">
                Artykuły i poradniki pojawią się tutaj wkrótce.
              </p>
            </div>
          </article>

          <ServiceSidebar />
        </div>
      </div>
    </section>
  );
}
