import type { Metadata } from "next";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";
import { ServiceSidebar } from "@/components/layout/ServiceSidebar";

export const metadata: Metadata = {
  title:
    "Aktualności - Kancelaria Lexperiens Poznań | podzialmajatku.pl",
  description:
    "Aktualności kancelarii Lexperiens oraz najnowsze informacje z zakresu podziału majątku, spadków i zniesienia współwłasności.",
};

export default function AktualnosciPage() {
  return (
    <section className="bg-white">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
        <Breadcrumbs items={[{ label: "Aktualności" }]} />

        <div className="grid grid-cols-1 gap-10 lg:grid-cols-3">
          <article className="lg:col-span-2">
            <h1 className="mb-6 font-serif text-2xl font-bold tracking-tight text-body sm:text-3xl md:text-4xl">
              Aktualności
            </h1>

            <p className="mb-6 text-lg leading-relaxed text-slate-600">
              Najnowsze informacje z życia kancelarii, zmiany w przepisach
              prawnych oraz komentarze do orzeczeń sądowych dotyczących
              postępowań działowych.
            </p>

            <div className="rounded-lg border bg-slate-50 p-8 text-center">
              <p className="text-slate-600">
                Aktualności pojawią się tutaj wkrótce.
              </p>
            </div>
          </article>

          <ServiceSidebar />
        </div>
      </div>
    </section>
  );
}
