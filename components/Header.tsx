"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { navLinks, site } from "@/lib/site";
import { ValveIcon } from "./ValveIcon";

export function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  return (
    <header className="sticky top-0 z-50 border-b border-slate-200 bg-white/90 backdrop-blur">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4">
        <Link href="/" className="flex items-center gap-2 text-slate-900" onClick={() => setOpen(false)}>
          <ValveIcon className="h-8 w-8 text-orange-600" />
          <span className="text-xl font-bold tracking-tight">{site.name}</span>
        </Link>

        <nav className="hidden items-center gap-1 md:flex">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`rounded-md px-4 py-2 text-sm font-medium transition-colors ${
                isActive(link.href)
                  ? "bg-slate-900 text-white"
                  : "text-slate-700 hover:bg-slate-100"
              }`}
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/contact"
            className="ml-3 rounded-md bg-orange-600 px-4 py-2 text-sm font-semibold text-white hover:bg-orange-700"
          >
            Get a Quote
          </Link>
        </nav>

        <button
          type="button"
          className="rounded-md p-2 text-slate-700 hover:bg-slate-100 md:hidden"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth={2}>
            {open ? <path d="M6 6l12 12M18 6L6 18" /> : <path d="M4 7h16M4 12h16M4 17h16" />}
          </svg>
        </button>
      </div>

      {open && (
        <nav className="border-t border-slate-200 bg-white px-4 py-3 md:hidden">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className={`block rounded-md px-3 py-2 text-base font-medium ${
                isActive(link.href) ? "bg-slate-900 text-white" : "text-slate-700 hover:bg-slate-100"
              }`}
            >
              {link.label}
            </Link>
          ))}
        </nav>
      )}
    </header>
  );
}
