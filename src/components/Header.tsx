"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, X, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { NAV_PRIMARY, SITE } from "@/lib/site";

export function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 border-b border-ink-100 bg-white/90 backdrop-blur-md">
      <Container className="flex h-16 items-center justify-between gap-4">
        <Link
          href="/"
          className="font-display text-lg font-extrabold tracking-tight text-ink-900 sm:text-xl"
          onClick={() => setOpen(false)}
        >
          New Jersey <span className="text-brand-600">Cleanouts</span>
        </Link>

        <nav className="hidden items-center gap-1 lg:flex">
          {NAV_PRIMARY.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="rounded-md px-3 py-2 text-sm font-medium text-ink-700 transition-colors hover:bg-brand-50 hover:text-brand-700"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <a
            href={SITE.phone.link}
            className="inline-flex items-center gap-2 text-sm font-semibold text-ink-900 hover:text-brand-600"
          >
            <Phone className="h-4 w-4" /> {SITE.phone.display}
          </a>
          <Button asChild>
            <Link href="/get-a-quote">Get a Quote</Link>
          </Button>
        </div>

        <button
          aria-label={open ? "Close menu" : "Open menu"}
          className="inline-flex h-10 w-10 items-center justify-center rounded-md text-ink-900 lg:hidden"
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </Container>

      {open && (
        <div className="border-t border-ink-100 bg-white lg:hidden">
          <Container className="flex flex-col gap-1 py-3">
            {NAV_PRIMARY.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="rounded-md px-3 py-3 text-base font-medium text-ink-800 hover:bg-brand-50 hover:text-brand-700"
              >
                {item.label}
              </Link>
            ))}
            <div className="mt-2 flex flex-col gap-2 border-t border-ink-100 pt-3">
              <a
                href={SITE.phone.link}
                className="inline-flex items-center gap-2 rounded-md px-3 py-2 text-base font-semibold text-ink-900"
              >
                <Phone className="h-4 w-4" /> {SITE.phone.display}
              </a>
              <Button asChild className="w-full" size="lg">
                <Link href="/get-a-quote" onClick={() => setOpen(false)}>
                  Get a Free Quote
                </Link>
              </Button>
            </div>
          </Container>
        </div>
      )}
    </header>
  );
}
