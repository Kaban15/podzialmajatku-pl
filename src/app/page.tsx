import Link from "next/link";
import { Shield, Clock, Users, CheckCircle, Scale, FileText, Home as HomeIcon, Info } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const benefits = [
  "Wieloletnie doświadczenie w prowadzeniu postępowań działowych",
  "Doświadczony i zgrany zespół prawników wyspecjalizowanych w prowadzeniu postępowań działowych",
  "Interdyscyplinarny zespół specjalistów z różnych branż działających w ramach naszej kancelarii",
  "Dostęp do specjalistów z zakresu wyceny nieruchomości, przedsiębiorstw etc.",
  "Pozytywne opinie naszych dotychczasowych Klientów",
  "Indywidualne podejście i obsługa na najwyższym poziomie prawnym oraz etycznym",
  "Rzetelność, zaufanie i dyskrecja",
  "Bezproblemowy kontakt na każdym etapie współpracy",
  "Transparentność i bieżące przekazywanie informacji Klientom na temat statusu ich spraw",
];

const tiles = [
  {
    title: "Rozwód",
    href: "/rozwod",
    icon: Scale,
    description: "Podział majątku wspólnego małżonków po rozwodzie",
  },
  {
    title: "Spadek",
    href: "/spadek",
    icon: FileText,
    description: "Umowny i sądowy dział spadku",
  },
  {
    title: "Współwłasność",
    href: "/zniesienie-wspolwlasnosci",
    icon: HomeIcon,
    description: "Zniesienie współwłasności nieruchomości",
  },
  {
    title: "O nas",
    href: "/o-nas",
    icon: Info,
    description: "Poznaj Kancelarię Lexperiens",
  },
];

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
          <div className="space-y-6">
            <h1 className="font-serif text-3xl font-bold tracking-tight text-[#2c2c2c] sm:text-4xl lg:text-5xl">
              Profesjonalna pomoc w{" "}
              <span className="text-primary">podziale majątku</span>
            </h1>
            <p className="text-base text-slate-500">
              Serwis prowadzony przez{" "}
              <a
                href="https://lexperiens.pl/"
                target="_blank"
                rel="noopener noreferrer"
                className="font-medium text-primary underline-offset-4 hover:underline"
              >
                Kancelarię Prawną Lexperiens
              </a>
            </p>
            <p className="max-w-2xl text-lg leading-relaxed text-slate-600">
              Specjalizujemy się w sprawach podziału majątku po rozwodzie,
              dziale spadku oraz zniesieniu współwłasności. Zapewniamy
              indywidualne podejście i skuteczne rozwiązania prawne.
            </p>
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
              <div className="flex items-start gap-3">
                <Shield className="mt-0.5 size-5 shrink-0 text-primary" />
                <div>
                  <p className="text-sm font-semibold text-slate-900">
                    Doświadczenie
                  </p>
                  <p className="text-xs text-slate-500">Wieloletnia praktyka</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Clock className="mt-0.5 size-5 shrink-0 text-primary" />
                <div>
                  <p className="text-sm font-semibold text-slate-900">
                    Szybki kontakt
                  </p>
                  <p className="text-xs text-slate-500">Odpowiedź w 24h</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Users className="mt-0.5 size-5 shrink-0 text-primary" />
                <div>
                  <p className="text-sm font-semibold text-slate-900">
                    Indywidualne podejście
                  </p>
                  <p className="text-xs text-slate-500">Każda sprawa jest inna</p>
                </div>
              </div>
            </div>
          </div>

          {/* Tiles grid */}
          <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {tiles.map((tile) => {
              const Icon = tile.icon;
              return (
                <Link key={tile.href} href={tile.href}>
                  <Card className="h-full cursor-pointer transition-all duration-200 hover:-translate-y-1 hover:shadow-lg">
                    <CardContent className="flex flex-col items-center justify-center gap-4 p-6 text-center">
                      <div className="flex size-14 items-center justify-center rounded-full bg-primary/10">
                        <Icon className="size-7 text-primary" />
                      </div>
                      <p className="text-lg font-semibold text-slate-900">
                        {tile.title}
                      </p>
                      <p className="text-sm text-slate-500">
                        {tile.description}
                      </p>
                    </CardContent>
                  </Card>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* Postępowania działowe - Intro */}
      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
          <h2 className="mb-8 font-serif text-2xl font-bold tracking-tight text-[#2c2c2c] sm:text-3xl md:text-4xl">
            Postępowania działowe
          </h2>
          <p className="mb-4 text-sm font-medium uppercase tracking-wider text-primary">
            Postępowania związane z podziałem majątku wspólnego, podziałem spadku
            i zniesieniem współwłasności
          </p>
          <p className="mb-6 text-lg leading-relaxed text-slate-600">
            Sprawy cywilne związane z postępowaniami działowymi to szerokie
            określenie różnego rodzaju spraw, do których należą: sprawy związane
            z podziałem majątku wspólnego, sprawy związane z podziałem spadku
            oraz sprawy związane ze zniesieniem współwłasności. Przybliżamy
            Państwu zagadnienia związane z postępowaniami działowymi
            i wyjaśniamy z praktycznego punktu widzenia – dlaczego warto jest
            skorzystać z pomocy profesjonalnego pełnomocnika (adwokata lub radcy
            prawnego).
          </p>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            <div className="rounded-lg border bg-slate-50 p-6">
              <h3 className="mb-3 text-lg font-semibold text-slate-900">
                Cechy charakterystyczne
              </h3>
              <p className="text-sm leading-relaxed text-slate-600">
                Cechą charakterystyczną wszystkich tych spraw jest fakt, iż co
                do zasady należą one do kategorii spraw trudnych i niezwykle
                skomplikowanych z punktu widzenia faktycznego oraz prawnego.
                Dodatkowo należy wskazać, że postępowania działowe charakteryzuje
                niezwykle zharmonizowany jego przebieg z uwzględnieniem przepisów
                z zakresu zniesienia współwłasności.
              </p>
            </div>
            <div className="rounded-lg border bg-slate-50 p-6">
              <h3 className="mb-3 text-lg font-semibold text-slate-900">
                Stopień trudności
              </h3>
              <p className="text-sm leading-relaxed text-slate-600">
                Stopień trudności każdorazowo uzależniony jest od konkretnej
                sprawy, ilości oraz rodzaju dzielonych składników majątkowych,
                zgłaszanych żądań dodatkowych przez strony postępowania,
                stanowiska stron w zakresie ewentualnych możliwości ugodowych
                etc.
              </p>
            </div>
            <div className="rounded-lg border bg-slate-50 p-6">
              <h3 className="mb-3 text-lg font-semibold text-slate-900">
                Cel postępowań
              </h3>
              <p className="text-sm leading-relaxed text-slate-600">
                Podstawowym celem postępowań działowych jest podział masy
                majątkowej oraz ostateczne uregulowanie i zakończenie pomiędzy
                stronami wszelkich stosunków mających odniesienie do wspólności
                masy majątkowej.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Związek nieformalny + Spółka cywilna */}
      <section className="bg-slate-50">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-2">
            {/* Związek nieformalny */}
            <div>
              <h2 className="mb-4 text-2xl font-bold tracking-tight text-slate-900">
                Postępowanie działowe przy związku nieformalnym
              </h2>
              <p className="mb-4 leading-relaxed text-slate-600">
                Podział majątku wspólnego przy związku nieformalnym w dalszym
                ciągu pozostaje zagadnieniem, które budzi ogromne zainteresowanie
                oraz kontrowersje. Sporną kwestią pozostaje możliwość podziału
                rzeczy, przedmiotów, nieruchomości etc., które zostały nabyte
                przez partnerów pozostających w związku nieformalnym z środków
                pozostających wcześniej w ich majątkach osobistych.
              </p>
              <p className="leading-relaxed text-slate-600">
                Korzystając z naszego doświadczenia oferujemy pomoc prawną
                w zakresie przeprowadzenia postępowania działowego przy podziale
                majątku partnerów pozostających w związku nieformalnym.
                Najczęściej większość takich spraw daje się rozwiązać na
                poziomie ugodowym. Nasza kancelaria posiada doświadczenie
                w skutecznym przeprowadzaniu tego typu postępowań działowych.
              </p>
            </div>

            {/* Spółka cywilna */}
            <div>
              <h2 className="mb-4 text-2xl font-bold tracking-tight text-slate-900">
                Postępowanie działowe przy podziale majątku spółki cywilnej po
                jej ustaniu
              </h2>
              <p className="mb-4 leading-relaxed text-slate-600">
                Majątek spółki cywilnej jest własnością jej wspólników. Gdy
                chodzi do jej rozwiązania (ustania), wówczas zasadnym jest
                przeprowadzenie postępowania działowego majątku spółki cywilnej.
                W tym miejscu warto jest wyjaśnić, że tylko rozwiązanie spółki
                cywilnej umożliwia dokonanie podziału jej majątku na
                dotychczasowych współwłaścicieli spółki.
              </p>
              <p className="leading-relaxed text-slate-600">
                Podział ten w zależności od woli stron może być przeprowadzony
                zarówno umownie lub sądownie. Nasza kancelaria świadczy usługi
                związane z kompleksowym dokonaniem podziału majątku spółki
                cywilnej w sposób rzetelny i sprawny.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Dlaczego warto wybrać kancelarię Lexperiens */}
      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
          <h2 className="mb-4 font-serif text-2xl font-bold tracking-tight text-[#2c2c2c] sm:text-3xl md:text-4xl">
            Dlaczego warto wybrać Kancelarię Lexperiens?
          </h2>
          <p className="mb-8 max-w-3xl text-lg leading-relaxed text-slate-600">
            Podział majątku, dział spadku, podział nieruchomości, rozdzielność
            majątkowa – wszystkie te postępowania charakteryzuje niezwykle
            skomplikowany przebieg i duża liczba zagrożeń, które mogą naruszyć
            interesy naszych potencjalnych Klientów. Wychodząc naprzeciw
            oczekiwaniom, nasza kancelaria radców prawnych z Poznania oferuje
            swoje usługi w zakresie kompleksowego prowadzenia tego typu
            postępowań zarówno na poziomie polubownym oraz spornym (sądowym).
          </p>
          <ul className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            {benefits.map((benefit) => (
              <li key={benefit} className="flex items-start gap-3">
                <CheckCircle className="mt-0.5 size-5 shrink-0 text-primary" />
                <span className="text-slate-700">{benefit}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </>
  );
}
