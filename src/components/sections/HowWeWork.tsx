"use client";

import {
  Tabs,
  TabsList,
  TabsTrigger,
  TabsContent,
} from "@/components/ui/tabs";

const triggerClass =
  "w-auto md:w-full justify-start text-left px-4 md:px-6 py-4 md:py-5 text-[14px] md:text-[15px] font-medium rounded-none border-0 border-b-4 md:border-b border-l-0 md:border-l-4 border-transparent data-[state=active]:border-b-[#0088cc] md:data-[state=active]:border-b-transparent md:data-[state=active]:border-l-[#0088cc] bg-transparent data-[state=active]:bg-white data-[state=active]:shadow-none hover:bg-slate-100 data-[state=active]:text-[#0088cc] text-slate-600 outline-none transition-none flex-shrink-0";

export function HowWeWork() {
  return (
    <section className="max-w-7xl mx-auto w-full mb-32 px-4 mt-12">
      <h2 className="text-3xl md:text-4xl font-serif text-slate-800 mb-8">Jak działamy?</h2>

      <Tabs
        defaultValue="krok-1"
        className="grid grid-cols-1 md:grid-cols-12 w-full border border-slate-200 bg-white overflow-hidden rounded-sm"
      >
        {/* LEFT COLUMN — menu */}
        <TabsList className="md:col-span-4 flex flex-row md:flex-col w-full h-auto bg-slate-50 p-0 m-0 rounded-none border-b md:border-b-0 md:border-r border-slate-200 justify-start items-stretch overflow-x-auto md:overflow-visible [scrollbar-width:none] [&::-webkit-scrollbar]:hidden whitespace-nowrap md:whitespace-normal">
          <TabsTrigger value="krok-1" className={triggerClass}>
            01. Kontakt z Kancelarią
          </TabsTrigger>
          <TabsTrigger value="krok-2" className={triggerClass}>
            02. Analiza sprawy
          </TabsTrigger>
          <TabsTrigger value="krok-3" className={triggerClass}>
            03. Omówienie warunków współpracy
          </TabsTrigger>
          <TabsTrigger value="krok-4" className={triggerClass}>
            04. Prowadzenie sprawy
          </TabsTrigger>
          <TabsTrigger value="krok-5" className={triggerClass}>
            05. Rozliczenie
          </TabsTrigger>
        </TabsList>

        {/* RIGHT COLUMN — content */}
        <div className="md:col-span-8 w-full h-full p-5 md:p-14 bg-white m-0">
          <TabsContent value="krok-1" className="mt-0 outline-none border-none m-0 p-0">
            <h3 className="text-2xl md:text-3xl font-serif text-[#0088cc] mb-6">
              01. Kontakt z Kancelarią
            </h3>
            <p className="text-slate-700 leading-relaxed text-lg">
              To pierwszy krok do rozwiązania Twojego problemu prawnego.
              Skontaktuj się z nami telefonicznie lub mailowo — ustalimy, czy
              możemy Ci pomóc, i zaproponujemy termin spotkania lub rozmowy
              wstępnej. Nie pobieramy opłat za pierwszą rozmowę wstępną.
            </p>
          </TabsContent>

          <TabsContent value="krok-2" className="mt-0 outline-none border-none m-0 p-0">
            <h3 className="text-2xl md:text-3xl font-serif text-[#0088cc] mb-6">
              02. Analiza sprawy
            </h3>
            <p className="text-slate-700 leading-relaxed text-lg">
              W ramach analizy przekażemy Ci informację o możliwościach prawnych
              w Twojej sprawie, ryzyku procesowym i szacowanych kosztach
              postępowania. Na tym etapie oceniamy dokumenty i przedstawiamy
              rekomendowaną strategię działania.
            </p>
          </TabsContent>

          <TabsContent value="krok-3" className="mt-0 outline-none border-none m-0 p-0">
            <h3 className="text-2xl md:text-3xl font-serif text-[#0088cc] mb-6">
              03. Omówienie warunków współpracy
            </h3>
            <p className="text-slate-700 leading-relaxed text-lg">
              Nie ma dwóch jednakowych spraw. Warunki współpracy ustalamy
              indywidualnie — transparentnie omawiamy wynagrodzenie, zakres
              pełnomocnictwa i harmonogram działań. Dopiero po akceptacji
              warunków podpisujemy umowę.
            </p>
          </TabsContent>

          <TabsContent value="krok-4" className="mt-0 outline-none border-none m-0 p-0">
            <h3 className="text-2xl md:text-3xl font-serif text-[#0088cc] mb-6">
              04. Prowadzenie sprawy
            </h3>
            <p className="text-slate-700 leading-relaxed text-lg">
              Na tym etapie reprezentujemy Cię przed sądem lub w negocjacjach.
              Przygotowujemy pisma procesowe, gromadzimy dowody, uczestniczymy
              w rozprawach. Na bieżąco informujemy Cię o postępach i każdej
              istotnej decyzji w sprawie.
            </p>
          </TabsContent>

          <TabsContent value="krok-5" className="mt-0 outline-none border-none m-0 p-0">
            <h3 className="text-2xl md:text-3xl font-serif text-[#0088cc] mb-6">
              05. Rozliczenie
            </h3>
            <p className="text-slate-700 leading-relaxed text-lg">
              Zakończenie sprawy wiąże się z podsumowaniem wyników, rozliczeniem
              wynagrodzenia i — w miarę możliwości — odzyskaniem kosztów procesu
              od strony przeciwnej. Dbamy o to, by finalizacja była dla Ciebie
              jak najprostsza.
            </p>
          </TabsContent>
        </div>
      </Tabs>
    </section>
  );
}
