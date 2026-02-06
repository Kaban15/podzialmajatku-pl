import type { Metadata } from "next";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";
import { ServiceSidebar } from "@/components/layout/ServiceSidebar";
import { ServiceSchema } from "@/components/seo/ServiceSchema";

export const metadata: Metadata = {
  title: "Podział majątku po rozwodzie - Adwokat Warszawa | Kancelaria",
  description:
    "Profesjonalna pomoc prawna w podziale majątku po rozwodzie. Wspólność i rozdzielność majątkowa, nierówne udziały, kredyt hipoteczny. Bezpłatna konsultacja.",
};

export default function RozwodPage() {
  return (
    <>
      <ServiceSchema
        name="Podział majątku po rozwodzie"
        description="Profesjonalna pomoc prawna w sprawach podziału majątku wspólnego po rozwodzie, w tym nieruchomości, oszczędności i kredytów."
        url="https://podzialmajatku.pl/rozwod"
      />

      <section className="bg-gradient-to-br from-slate-50 to-blue-50/50">
        <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
          <Breadcrumbs
            items={[{ label: "Podział majątku po rozwodzie" }]}
          />

          <div className="grid grid-cols-1 gap-10 lg:grid-cols-3">
            {/* Main Content - 2/3 */}
            <article className="lg:col-span-2">
              <h1 className="mb-6 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
                Podział majątku po rozwodzie – Co Ci się należy?
              </h1>

              <p className="mb-8 text-lg leading-relaxed text-slate-600">
                Rozwód to nie tylko koniec związku, ale również konieczność
                podziału wspólnie zgromadzonego majątku. Niezależnie od tego,
                czy sprawa dotyczy mieszkania, oszczędności czy wspólnej firmy
                – warto znać swoje prawa i możliwości. Wypełnij formularz
                obok, a pomożemy Ci ocenić Twoją sytuację.
              </p>

              {/* Section 1 */}
              <section className="mb-8">
                <h2 className="mb-4 text-2xl font-semibold text-slate-900">
                  Wspólność a rozdzielność majątkowa – różnice
                </h2>
                <p className="mb-4 text-slate-600 leading-relaxed">
                  W polskim prawie obowiązuje zasada wspólności majątkowej
                  małżeńskiej. Oznacza to, że od momentu zawarcia związku
                  małżeńskiego, wszystko co nabędziecie, staje się wspólną
                  własnością obojga małżonków. Dotyczy to w szczególności:
                </p>
                <ul className="mb-4 list-inside list-disc space-y-2 text-slate-600">
                  <li>Wynagrodzeń za pracę i dochodów z działalności gospodarczej</li>
                  <li>Nieruchomości kupionych w trakcie małżeństwa</li>
                  <li>Oszczędności zgromadzonych na wspólnych i indywidualnych kontach</li>
                  <li>Środków zgromadzonych w OFE i na subkontach ZUS</li>
                </ul>
                <p className="text-slate-600 leading-relaxed">
                  Rozdzielność majątkowa może zostać ustanowiona intercyzą
                  (przed lub w trakcie małżeństwa) lub orzeczeniem sądu.
                  W takim przypadku każdy z małżonków zarządza swoim majątkiem
                  samodzielnie.
                </p>
              </section>

              {/* Section 2 */}
              <section className="mb-8">
                <h2 className="mb-4 text-2xl font-semibold text-slate-900">
                  Nierówne udziały w majątku – kiedy można ich żądać?
                </h2>
                <p className="mb-4 text-slate-600 leading-relaxed">
                  Co do zasady, udziały małżonków w majątku wspólnym są równe
                  – każdy ma prawo do 50%. Jednak w uzasadnionych przypadkach
                  sąd może ustalić nierówne udziały. Warunkiem jest
                  wykazanie, że:
                </p>
                <ul className="mb-4 list-inside list-disc space-y-2 text-slate-600">
                  <li>Małżonkowie w różnym stopniu przyczynili się do powstania majątku</li>
                  <li>Jeden z małżonków rażąco trwonił majątek wspólny</li>
                  <li>Istnieją ważne powody przemawiające za nierównym podziałem</li>
                </ul>
                <p className="text-slate-600 leading-relaxed">
                  Warto podkreślić, że prowadzenie gospodarstwa domowego
                  i wychowanie dzieci jest traktowane na równi z pracą
                  zarobkową. Sam fakt, że jedno z małżonków nie pracowało
                  zawodowo, nie jest podstawą do zmniejszenia jego udziału.
                </p>
              </section>

              {/* Section 3 */}
              <section className="mb-8">
                <h2 className="mb-4 text-2xl font-semibold text-slate-900">
                  Co z kredytem hipotecznym po rozwodzie?
                </h2>
                <p className="mb-4 text-slate-600 leading-relaxed">
                  Kredyt hipoteczny to jedno z najtrudniejszych zagadnień
                  przy podziale majątku. Kluczowe fakty:
                </p>
                <ul className="mb-4 list-inside list-disc space-y-2 text-slate-600">
                  <li>
                    Rozwód nie zwalnia żadnego z małżonków z obowiązku spłaty
                    kredytu wobec banku – oboje pozostają dłużnikami solidarnymi
                  </li>
                  <li>
                    Sąd dokonujący podziału majątku nie może podzielić długów,
                    ale uwzględnia je przy ustalaniu wartości majątku
                  </li>
                  <li>
                    Możliwe rozwiązania to: przejęcie kredytu przez jednego
                    małżonka, sprzedaż nieruchomości i spłata kredytu, lub
                    dalsze wspólne spłacanie
                  </li>
                </ul>
                <p className="text-slate-600 leading-relaxed">
                  Każda sytuacja wymaga indywidualnej analizy prawnej
                  i finansowej. Skontaktuj się z nami, aby omówić najlepsze
                  rozwiązanie w Twojej sprawie.
                </p>
              </section>

              {/* CTA */}
              <div className="rounded-lg border-l-4 border-primary bg-blue-50 p-6">
                <p className="font-medium text-slate-900">
                  Potrzebujesz pomocy w podziale majątku po rozwodzie?
                </p>
                <p className="mt-1 text-sm text-slate-600">
                  Wypełnij formularz kontaktowy obok lub zadzwoń – pierwsza
                  konsultacja jest bezpłatna.
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
