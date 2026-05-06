"use client";
import Link from "next/link";
import { useEffect, useState } from "react";

const links = [
  { href: "#work", label: "Work" },
  { href: "#about", label: "About" },
  { href: "#gallery", label: "Gallery" },
  { href: "#contact", label: "Contact" },
];

export default function Nav() {
  const [open, setOpen] = useState(false);

  // Lock body scroll when menu is open
  useEffect(() => {
    if (open) document.body.style.overflow = "hidden";
    else document.body.style.overflow = "";
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  return (
    <>
      <header className="fixed inset-x-0 top-0 z-[60] mix-blend-difference">
        <div
          className="gutter pagewrap flex items-center justify-between py-6"
          style={{ color: "#FAF4E6" }}
        >
          <Link
            href="#home"
            onClick={() => setOpen(false)}
            className="ed-serif italic text-[18px] tracking-tight"
          >
            ayesha<span className="not-italic">·</span>marzana
          </Link>

          {/* Desktop links */}
          <nav className="hidden md:flex gap-9 mono text-[12px] uppercase tracking-[0.18em]">
            {links.map(l => (
              <Link key={l.href} href={l.href}>{l.label}</Link>
            ))}
          </nav>

          {/* Mobile menu button */}
          <button
            type="button"
            onClick={() => setOpen(o => !o)}
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            className="md:hidden mono text-[12px] uppercase tracking-[0.18em] flex items-center gap-2"
          >
            <span className="relative inline-block w-5 h-3">
              <span
                className={`absolute left-0 top-0 h-px w-5 bg-current transition-transform duration-300 ${
                  open ? "translate-y-[6px] rotate-45" : ""
                }`}
              />
              <span
                className={`absolute left-0 bottom-0 h-px w-5 bg-current transition-transform duration-300 ${
                  open ? "-translate-y-[6px] -rotate-45" : ""
                }`}
              />
            </span>
            {open ? "Close" : "Menu"}
          </button>
        </div>
      </header>

      {/* Mobile overlay */}
      <div
        className={`md:hidden fixed inset-0 z-[55] bg-paper-deep transition-[opacity,transform] duration-500 ease-out ${
          open ? "opacity-100 translate-y-0 pointer-events-auto" : "opacity-0 -translate-y-4 pointer-events-none"
        }`}
        aria-hidden={!open}
      >
        <nav className="h-full w-full gutter flex flex-col justify-center gap-6">
          {links.map((l, i) => (
            <Link
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="ed-it text-ink"
              style={{
                fontSize: "clamp(56px, 14vw, 120px)",
                lineHeight: 0.9,
                letterSpacing: "-0.03em",
                transitionDelay: open ? `${i * 60}ms` : "0ms",
              }}
            >
              {l.label}
            </Link>
          ))}
          <a
            href="mailto:iamayeshamarzana@gmail.com"
            onClick={() => setOpen(false)}
            className="mt-10 ed-serif italic text-ink-soft text-[16px]"
          >
            iamayeshamarzana@gmail.com
          </a>
        </nav>
      </div>
    </>
  );
}
