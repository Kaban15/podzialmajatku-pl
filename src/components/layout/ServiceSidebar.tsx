import { Shield, Clock, Users, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";

const reasons = [
  { icon: Shield, text: "Wieloletnie doświadczenie w sprawach majątkowych" },
  { icon: Clock, text: "Szybka odpowiedź – kontakt w ciągu 24h" },
  { icon: Users, text: "Indywidualne podejście do każdej sprawy" },
];

const phones = [
  { href: "tel:+48618937504", display: "+48 61 893 75 04" },
  { href: "tel:+48797623957", display: "+48 797 623 957" },
  { href: "tel:+48789483216", display: "+48 789 483 216" },
];

export function ServiceSidebar() {
  return (
    <aside className="space-y-6 lg:sticky lg:top-24">
      {/* Why Us Card */}
      <div className="rounded-xl border bg-slate-50 p-6">
        <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-slate-900">
          Dlaczego my?
        </h3>
        <ul className="space-y-3">
          {reasons.map((r) => (
            <li key={r.text} className="flex items-start gap-3">
              <r.icon className="mt-0.5 size-4 shrink-0 text-primary" />
              <span className="text-sm text-slate-600">{r.text}</span>
            </li>
          ))}
        </ul>
        <div className="mt-5 space-y-2">
          {phones.map((p) => (
            <Button key={p.href} asChild variant="outline" className="w-full">
              <a href={p.href}>
                <Phone className="size-4" />
                {p.display}
              </a>
            </Button>
          ))}
        </div>
      </div>
    </aside>
  );
}
