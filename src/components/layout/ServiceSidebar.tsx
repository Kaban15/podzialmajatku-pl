import { Shield, Clock, Users, Phone } from "lucide-react";
import { ContactForm } from "@/components/forms/ContactForm";
import { Button } from "@/components/ui/button";

const reasons = [
  { icon: Shield, text: "Wieloletnie doświadczenie w sprawach majątkowych" },
  { icon: Clock, text: "Szybka odpowiedź – kontakt w ciągu 24h" },
  { icon: Users, text: "Indywidualne podejście do każdej sprawy" },
];

export function ServiceSidebar() {
  return (
    <aside className="space-y-6 lg:sticky lg:top-24">
      {/* Contact Form Card */}
      <div className="rounded-xl border bg-white p-6 shadow-lg">
        <h2 className="mb-1 text-lg font-semibold text-slate-900">
          Bezpłatna konsultacja
        </h2>
        <p className="mb-5 text-sm text-slate-500">
          Opisz swoją sprawę, odezwiemy się w ciągu 24h.
        </p>
        <ContactForm />
      </div>

      {/* Why Us Card */}
      <div className="rounded-xl border bg-slate-50 p-6">
        <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-slate-900">
          Dlaczego my?
        </h3>
        <ul className="space-y-3">
          {reasons.map((r, i) => (
            <li key={i} className="flex items-start gap-3">
              <r.icon className="mt-0.5 size-4 shrink-0 text-primary" />
              <span className="text-sm text-slate-600">{r.text}</span>
            </li>
          ))}
        </ul>
        <div className="mt-5 space-y-2">
          <Button asChild variant="outline" className="w-full">
            <a href="tel:+48618937504">
              <Phone className="size-4" />
              +48 61 893 75 04
            </a>
          </Button>
          <Button asChild variant="outline" className="w-full">
            <a href="tel:+48797623957">
              <Phone className="size-4" />
              +48 797 623 957
            </a>
          </Button>
          <Button asChild variant="outline" className="w-full">
            <a href="tel:+48789483216">
              <Phone className="size-4" />
              +48 789 483 216
            </a>
          </Button>
        </div>
      </div>
    </aside>
  );
}
