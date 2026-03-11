"use client";

import {
  Tabs,
  TabsList,
  TabsTrigger,
  TabsContent,
} from "@/components/ui/tabs";

const steps = [
  {
    value: "krok-1",
    trigger: "01. Kontakt z Kancelarią",
    content:
      "To pierwszy krok do rozwiązania Twojego problemu prawnego. Skontaktuj się z nami telefonicznie lub mailowo — ustalimy, czy możemy Ci pomóc, i zaproponujemy termin spotkania lub rozmowy wstępnej. Nie pobieramy opłat za pierwszą rozmowę wstępną.",
  },
  {
    value: "krok-2",
    trigger: "02. Analiza sprawy",
    content:
      "W ramach analizy przekażemy Ci informację o możliwościach prawnych w Twojej sprawie, ryzyku procesowym i szacowanych kosztach postępowania. Na tym etapie oceniamy dokumenty i przedstawiamy rekomendowaną strategię działania.",
  },
  {
    value: "krok-3",
    trigger: "03. Omówienie warunków współpracy",
    content:
      "Nie ma dwóch jednakowych spraw. Warunki współpracy ustalamy indywidualnie — transparentnie omawiamy wynagrodzenie, zakres pełnomocnictwa i harmonogram działań. Dopiero po akceptacji warunków podpisujemy umowę.",
  },
  {
    value: "krok-4",
    trigger: "04. Prowadzenie sprawy",
    content:
      "Na tym etapie reprezentujemy Cię przed sądem lub w negocjacjach. Przygotowujemy pisma procesowe, gromadzimy dowody, uczestniczymy w rozprawach. Na bieżąco informujemy Cię o postępach i każdej istotnej decyzji w sprawie.",
  },
  {
    value: "krok-5",
    trigger: "05. Rozliczenie",
    content:
      "Zakończenie sprawy wiąże się z podsumowaniem wyników, rozliczeniem wynagrodzenia i — w miarę możliwości — odzyskaniem kosztów procesu od strony przeciwnej. Dbamy o to, by finalizacja była dla Ciebie jak najprostsza.",
  },
];

export function HowWeWork() {
  return (
    <section className="flex flex-col gap-8 w-full my-12">
      <h2 className="text-4xl font-serif text-slate-800">Jak działamy?</h2>

      <Tabs defaultValue="krok-1" className="flex flex-col lg:flex-row gap-8 items-start w-full">
        <TabsList className="flex flex-col h-auto w-full lg:w-1/3 bg-transparent p-0 space-y-1 items-start justify-start">
          {steps.map((step) => (
            <TabsTrigger
              key={step.value}
              value={step.value}
              className="w-full justify-start text-left px-6 py-4 text-base font-normal text-slate-500 data-[state=active]:bg-white data-[state=active]:text-blue-600 data-[state=active]:shadow-sm border-l-4 border-transparent data-[state=active]:border-blue-600 rounded-none transition-all"
            >
              {step.trigger}
            </TabsTrigger>
          ))}
        </TabsList>

        {steps.map((step) => (
          <TabsContent
            key={step.value}
            value={step.value}
            className="w-full lg:w-2/3 mt-0"
          >
            <div className="bg-white p-8 shadow-sm">
              <h3 className="mb-3 text-lg font-semibold text-slate-900">
                {step.trigger}
              </h3>
              <p className="leading-relaxed text-slate-600">{step.content}</p>
            </div>
          </TabsContent>
        ))}
      </Tabs>
    </section>
  );
}
