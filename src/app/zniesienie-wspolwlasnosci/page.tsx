import type { Metadata } from "next";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";
import { ServiceSidebar } from "@/components/layout/ServiceSidebar";
import { ServiceSchema } from "@/components/seo/ServiceSchema";

export const metadata: Metadata = {
  title:
    "Podział nieruchomości wspólnej Poznań - Zniesienie współwłasności | Lexperiens",
  description:
    "Postępowanie działowe przy podziale nieruchomości wspólnej – zniesienie współwłasności. Radca prawny podział nieruchomości Poznań. Kancelaria Lexperiens.",
};

export default function ZniesienieWspolwlasnosciPage() {
  return (
    <>
      <ServiceSchema
        name="Zniesienie współwłasności"
        description="Postępowanie działowe przy podziale nieruchomości wspólnej – zniesienie współwłasności nieruchomości. Kancelaria Lexperiens Poznań."
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
                Postępowanie działowe przy podziale nieruchomości wspólnej
              </h1>

              <p className="mb-6 text-lg leading-relaxed text-slate-600">
                Postępowania działowe związane z podziałem nieruchomości wspólnej
                stanowią spore wyzwanie zarówno faktyczne oraz prawne. Oczywistym
                jest, że preferowanym sposobem zniesienia współwłasności
                nieruchomości jest jej fizyczny podział. Jednakże nie jest to
                możliwe w każdym przypadku.
              </p>

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
