"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { Phone, Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

const navLinks = [
  { href: "/rozwod", label: "Rozwód" },
  { href: "/postepowanie-dzialowe", label: "Postępowanie działowe" },
  { href: "/spadki", label: "Spadki" },
  { href: "/zniesienie-wspolwlasnosci", label: "Współwłasność" },
  { href: "/baza-wiedzy", label: "Baza wiedzy" },
  { href: "/aktualnosci", label: "Aktualności" },
  { href: "/o-nas", label: "O nas" },
  { href: "/kontakt", label: "Kontakt" },
];

const PHONE_NUMBER = "+48618937504";
const PHONE_DISPLAY = "+48 61 893 75 04";

export function Navbar() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 w-full border-b border-slate-200 bg-white">
      <nav className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        {/* Logo */}
        <Link href="/" className="flex items-center">
          <Image
            src="/logo.png"
            alt="Lexperiens Kancelaria Prawna"
            width={150}
            height={50}
            className="h-10 w-auto object-contain"
            priority
          />
        </Link>

        {/* Desktop links */}
        <ul className="hidden items-center gap-0 md:flex">
          {navLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className={`px-4 py-2 text-sm font-medium transition-colors hover:text-primary ${
                    isActive ? "text-primary" : "text-body"
                  }`}
                >
                  {link.label}
                </Link>
              </li>
            );
          })}
        </ul>

        {/* Desktop CTA */}
        <Button
          asChild
          className="hidden rounded-none bg-primary px-5 text-sm font-medium uppercase tracking-wide text-white hover:bg-primary/90 md:inline-flex"
          size="lg"
        >
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
              <SheetTitle>
                <Image
                  src="/logo.png"
                  alt="Lexperiens Kancelaria Prawna"
                  width={120}
                  height={40}
                  className="h-8 w-auto object-contain"
                />
              </SheetTitle>
            </SheetHeader>
            <nav className="flex flex-col gap-1 px-4">
              {navLinks.map((link) => {
                const isActive = pathname === link.href;
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={() => setOpen(false)}
                    className={`px-3 py-2.5 text-sm font-medium transition-colors hover:text-primary ${
                      isActive ? "text-primary" : "text-body"
                    }`}
                  >
                    {link.label}
                  </Link>
                );
              })}
              <div className="mt-4 border-t pt-4">
                <Button
                  asChild
                  className="w-full rounded-none bg-primary text-white hover:bg-primary/90"
                  size="lg"
                >
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
