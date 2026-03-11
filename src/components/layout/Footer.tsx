import Link from "next/link";
import { Mail, Phone, MapPin } from "lucide-react";

const specializations = [
  { href: "/rozwod", label: "Podział majątku po rozwodzie" },
  { href: "/spadek", label: "Dział spadku" },
  { href: "/zniesienie-wspolwlasnosci", label: "Zniesienie współwłasności" },
];


export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer>
      {/* CTA Banner */}
      <div className="border-b border-slate-200 bg-slate-50">
        <div className="mx-auto flex max-w-7xl flex-col items-start justify-between gap-6 px-4 py-10 sm:flex-row sm:items-center sm:px-6 lg:px-8">
          <div>
            <h2 className="text-xl font-semibold text-primary sm:text-2xl">
              Poprowadzimy Twoją sprawę – z zaangażowaniem i do końca
            </h2>
            <p className="mt-1 text-sm text-slate-500">
              Zaufaj naszej wiedzy, doświadczeniu i specjalizacji.
            </p>
          </div>
          <Link
            href="/kontakt"
            className="shrink-0 border border-[#2c2c2c] px-6 py-2.5 text-sm font-medium text-[#2c2c2c] transition-colors hover:bg-[#2c2c2c] hover:text-white"
          >
            Skontaktuj się z nami
          </Link>
        </div>
      </div>

      {/* Dark footer */}
      <div className="bg-[#252525] text-slate-300">
        <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-10 md:grid-cols-3">

            {/* Column 1: Lexperiens */}
            <div>
              <h3 className="mb-3 text-xs font-semibold uppercase tracking-widest text-primary">
                Lexperiens
              </h3>
              <div className="mb-4 h-px w-full bg-slate-600" />
              <p className="text-sm leading-relaxed text-slate-400">
                Od 2013 r. wspieramy naszych klientów w postępowaniach sądowych.
                Pomagamy w uzyskaniu odszkodowań oraz odzyskiwaniu
                nieuregulowanych płatności. Reprezentujemy pracowników oraz
                pracodawców. Działamy w imieniu osób prawnych oraz fizycznych.
              </p>
            </div>

            {/* Column 2: Specjalizacje */}
            <div>
              <h3 className="mb-3 text-xs font-semibold uppercase tracking-widest text-primary">
                Specjalizacje
              </h3>
              <div className="mb-4 h-px w-full bg-slate-600" />
              <ul className="space-y-2 text-sm text-slate-400">
                {specializations.map((s) => (
                  <li key={s.href} className="flex items-start gap-2">
                    <span className="mt-0.5 shrink-0 text-slate-500">–</span>
                    <Link href={s.href} className="transition-colors hover:text-white">
                      {s.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Column 3: Kontakt */}
            <div>
              <h3 className="mb-3 text-xs font-semibold uppercase tracking-widest text-primary">
                Kontakt
              </h3>
              <div className="mb-4 h-px w-full bg-slate-600" />
              <div className="space-y-3 text-sm text-slate-400">
                <p className="font-semibold text-slate-200">
                  Lexperiens<br />
                  Kancelaria Radców Prawnych sp. p.
                </p>
                <p className="flex items-start gap-2">
                  <MapPin className="mt-0.5 size-4 shrink-0 text-slate-500" />
                  <span>ul. Mikołaja Reja 1/8<br />60-826 Poznań</span>
                </p>
                <div className="flex items-start gap-2">
                  <Phone className="mt-0.5 size-4 shrink-0 text-slate-500" />
                  <div className="flex flex-col gap-0.5">
                    <a href="tel:+48618937504" className="hover:text-white transition-colors">tel. 61 893 75 04</a>
                    <a href="tel:+48797623957" className="hover:text-white transition-colors">tel. 797 623 957</a>
                    <a href="tel:+48789483216" className="hover:text-white transition-colors">tel. 789 483 216</a>
                  </div>
                </div>
                <p className="flex items-center gap-2">
                  <Mail className="size-4 shrink-0 text-slate-500" />
                  <a href="mailto:kancelaria@lexperiens.pl" className="hover:text-white transition-colors">
                    kancelaria@lexperiens.pl
                  </a>
                </p>
              </div>
            </div>
          </div>

          {/* Copyright */}
          <div className="mt-12 border-t border-slate-700 pt-6 text-center text-xs text-slate-600">
            &copy; {currentYear} Lexperiens Kancelaria Radców Prawnych Zgłobicki Rohde sp. p. Wszelkie prawa zastrzeżone.{" "}
            Projekt prowadzony przez{" "}
            <a
              href="https://lexperiens.pl/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-500 hover:text-slate-400 transition-colors"
            >
              Lexperiens
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
