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
    "Podział majątku po rozwodzie Poznań - Radca prawny | Kancelaria Lexperiens",
  description:
    "Postępowanie działowe przy podziale majątku wspólnego małżonków po rozwodzie lub rozdzielności majątkowej. Radca prawny podział majątku Poznań – Kancelaria Lexperiens.",
};

export default function RozwodPage() {
  return (
    <>
      <ServiceSchema
        name="Podział majątku po rozwodzie"
        description="Postępowanie działowe przy podziale majątku wspólnego małżonków po rozwodzie lub rozdzielności majątkowej. Kancelaria Lexperiens Poznań."
        url="https://podzialmajatku.pl/rozwod"
      />

      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
          <Breadcrumbs
            items={[{ label: "Podział majątku po rozwodzie" }]}
          />

          <div className="grid grid-cols-1 gap-10 lg:grid-cols-3">
            {/* Main Content - 2/3 */}
            <article className="lg:col-span-2">
              <h1 className="mb-6 font-serif text-2xl font-bold tracking-tight text-body sm:text-3xl md:text-4xl">
                Postępowanie działowe przy podziale majątku wspólnego małżonków
                (po rozwodzie lub rozdzielności majątkowej)
              </h1>

              <p className="mb-6 text-lg leading-relaxed text-slate-600">
                Postępowanie o podział majątku wspólnego po ustaniu wspólności
                majątkowej między małżonkami nie zostało unormowane w kodeksie
                postępowania cywilnego w sposób całościowy. Dlatego też
                postępowanie to charakteryzuje się większym poziomem
                skomplikowania, który wymaga udziału doświadczonego pełnomocnika
                procesowego.
              </p>

              <section className="mb-8">
                <h2 className="mb-4 font-serif text-2xl font-semibold text-body">
                  Kluczowe regulacje prawne
                </h2>
                <p className="mb-4 leading-relaxed text-slate-600">
                  Zasadnicze znaczenie ma w tej mierze art. 567 § 1 k.p.c.,
                  zgodnie z którym w postępowaniu o podział majątku po ustaniu
                  wspólności sąd rozstrzyga także o żądaniu ustalenia nierównych
                  udziałów małżonków w majątku wspólnym oraz o tym, jakie
                  wydatki, nakłady i inne świadczenia z majątku wspólnego na
                  rzecz majątku osobistego lub odwrotnie podlegają zwrotowi.
                </p>
                <p className="leading-relaxed text-slate-600">
                  W pozostałym zakresie w rozważanym postępowaniu stosuje się
                  odpowiednio przepisy o postępowaniu o dział spadku{" "}
                  <em className="text-slate-500">
                    (postanowienie Sądu Najwyższego z dnia 10 marca 2023 r.,
                    sygn. akt: II CSKP 569/22)
                  </em>
                  .
                </p>
              </section>

              {/* CTA */}
              <div className="rounded-lg border-l-4 border-primary bg-blue-50 p-6">
                <p className="font-medium text-slate-900">
                  Potrzebujesz pomocy w podziale majątku po rozwodzie?
                </p>
                <p className="mt-1 text-sm text-slate-600">
                  Wypełnij formularz kontaktowy obok lub zadzwoń – nasz
                  doświadczony zespół pomoże Ci na każdym etapie postępowania.
                </p>
              </div>

              {/* FAQ / More info */}
              <section className="mt-10">
                <h2 className="mb-4 font-serif text-2xl font-semibold text-body">
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
