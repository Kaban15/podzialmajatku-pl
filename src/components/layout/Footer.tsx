import Link from "next/link";
import { Scale, Mail, Phone, MapPin } from "lucide-react";

const quickLinks = [
  { href: "/", label: "Strona główna" },
  { href: "/kontakt", label: "Kontakt" },
];

const legalAreas = [
  { href: "/rozwod", label: "Podział majątku po rozwodzie" },
  { href: "/spadek", label: "Dział spadku" },
  { href: "/zniesienie-wspolwlasnosci", label: "Zniesienie współwłasności" },
];

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t bg-slate-900 text-slate-300">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {/* Column 1: Logo + Description + Contact */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <Scale className="size-5 text-white" />
              <span className="text-lg font-bold text-white">
                Lexperiens Kancelaria Radców Prawnych
              </span>
            </div>
            <p className="text-sm leading-relaxed text-slate-400">
              Profesjonalna pomoc prawna w sprawach podziału majątku, rozwodów,
              zniesienia współwłasności i działu spadku.
            </p>
            <ul className="space-y-2 text-sm">
              <li className="flex items-start gap-2">
                <Phone className="mt-0.5 size-4 shrink-0" />
                <div className="flex flex-col gap-1">
                  <a
                    href="tel:+48618937504"
                    className="transition-colors hover:text-white"
                  >
                    +48 61 893 75 04
                  </a>
                  <a
                    href="tel:+48797623957"
                    className="transition-colors hover:text-white"
                  >
                    +48 797 623 957
                  </a>
                  <a
                    href="tel:+48789483216"
                    className="transition-colors hover:text-white"
                  >
                    +48 789 483 216
                  </a>
                </div>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="size-4 shrink-0" />
                <a
                  href="mailto:kancelaria@lexperiens.pl"
                  className="transition-colors hover:text-white"
                >
                  kancelaria@lexperiens.pl
                </a>
              </li>
              <li className="flex items-center gap-2">
                <MapPin className="size-4 shrink-0" />
                <span>ul. Mikołaja Reja 1/8, 60-826 Poznań</span>
              </li>
            </ul>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-white">
              Szybkie linki
            </h3>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm transition-colors hover:text-white"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Legal Areas */}
          <div>
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-white">
              Obszary prawne
            </h3>
            <ul className="space-y-2">
              {legalAreas.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm transition-colors hover:text-white"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-10 border-t border-slate-800 pt-6 text-center text-sm text-slate-500">
          &copy; {currentYear} Lexperiens Kancelaria Radców Prawnych Zgłobicki Rohde sp. p. Wszelkie prawa zastrzeżone.
        </div>
      </div>
    </footer>
  );
}
