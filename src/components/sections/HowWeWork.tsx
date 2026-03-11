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
    <Tabs defaultValue="krok-1" className="flex flex-col gap-4 md:flex-row md:gap-8">
      <TabsList className="flex h-auto w-full flex-col space-y-1 bg-transparent p-0 md:w-1/3">
        {steps.map((step) => (
          <TabsTrigger
            key={step.value}
            value={step.value}
            className="w-full justify-start rounded-lg border border-transparent px-4 py-3 text-left text-sm font-medium text-slate-600 transition-all data-[state=active]:border-primary data-[state=active]:bg-primary/5 data-[state=active]:text-primary"
          >
            {step.trigger}
          </TabsTrigger>
        ))}
      </TabsList>

      <div className="md:w-2/3">
        {steps.map((step) => (
          <TabsContent
            key={step.value}
            value={step.value}
            className="mt-0 rounded-xl border bg-white p-6 shadow-sm"
          >
            <h3 className="mb-3 text-lg font-semibold text-slate-900">
              {step.trigger}
            </h3>
            <p className="leading-relaxed text-slate-600">{step.content}</p>
          </TabsContent>
        ))}
      </div>
    </Tabs>
  );
}
