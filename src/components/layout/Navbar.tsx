"use client";

import Link from "next/link";
import { useState } from "react";
import { Phone, Menu, Scale } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

const navLinks = [
  { href: "/", label: "Strona główna" },
  { href: "/rozwod", label: "Rozwód" },
  { href: "/spadek", label: "Spadek" },
  { href: "/zniesienie-wspolwlasnosci", label: "Współwłasność" },
  { href: "/kontakt", label: "Kontakt" },
];

const PHONE_NUMBER = "+48123456789";
const PHONE_DISPLAY = "123 456 789";

export function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-white/80 backdrop-blur-md">
      <nav className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2">
          <Scale className="size-6 text-primary" />
          <span className="text-lg font-bold text-primary">
            podzialmajatku.pl
          </span>
        </Link>

        {/* Desktop links */}
        <ul className="hidden items-center gap-1 md:flex">
          {navLinks.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className="rounded-md px-3 py-2 text-sm font-medium text-slate-700 transition-colors hover:bg-slate-100 hover:text-primary"
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        {/* Desktop CTA */}
        <Button asChild className="hidden md:inline-flex" size="lg">
          <a href={`tel:${PHONE_NUMBER}`}>
            <Phone className="size-4" />
            {PHONE_DISPLAY}
          </a>
        </Button>

        {/* Mobile hamburger */}
        <Sheet open={open} onOpenChange={setOpen}>
          <SheetTrigger asChild>
            <Button variant="ghost" size="icon" className="md:hidden">
              <Menu className="size-5" />
              <span className="sr-only">Menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="right" className="w-72">
            <SheetHeader>
              <SheetTitle className="flex items-center gap-2">
                <Scale className="size-5 text-primary" />
                podzialmajatku.pl
              </SheetTitle>
            </SheetHeader>
            <nav className="flex flex-col gap-1 px-4">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="rounded-md px-3 py-2.5 text-sm font-medium text-slate-700 transition-colors hover:bg-slate-100 hover:text-primary"
                >
                  {link.label}
                </Link>
              ))}
              <div className="mt-4 border-t pt-4">
                <Button asChild className="w-full" size="lg">
                  <a href={`tel:${PHONE_NUMBER}`}>
                    <Phone className="size-4" />
                    {PHONE_DISPLAY}
                  </a>
                </Button>
              </div>
            </nav>
          </SheetContent>
        </Sheet>
      </nav>
    </header>
  );
}
