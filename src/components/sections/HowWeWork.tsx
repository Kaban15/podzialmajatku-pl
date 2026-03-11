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

      <Tabs defaultValue="krok-1" className="grid grid-cols-1 md:grid-cols-12 gap-8 w-full">
        <TabsList className="md:col-span-4 flex flex-col h-auto bg-transparent p-0 space-y-2 items-start justify-start">
          {steps.map((step) => (
            <TabsTrigger
              key={step.value}
              value={step.value}
              className="w-full justify-start text-left px-6 py-4 text-base text-slate-600 bg-transparent hover:bg-slate-50 data-[state=active]:bg-white data-[state=active]:text-blue-600 data-[state=active]:shadow-md border-l-4 border-transparent data-[state=active]:border-blue-600 rounded-none transition-all whitespace-normal h-auto"
            >
              {step.trigger}
            </TabsTrigger>
          ))}
        </TabsList>

        <div className="md:col-span-8">
          {steps.map((step) => (
            <TabsContent
              key={step.value}
              value={step.value}
              className="mt-0 w-full outline-none"
            >
              <div className="bg-white p-8 md:p-10 shadow-[0_2px_20px_rgb(0,0,0,0.04)] rounded-xl border border-slate-100">
                <h3 className="text-3xl font-serif text-[#0088cc] mb-4">
                  {step.trigger}
                </h3>
                <p className="leading-relaxed text-slate-600">{step.content}</p>
              </div>
            </TabsContent>
          ))}
        </div>
      </Tabs>
    </section>
  );
}
