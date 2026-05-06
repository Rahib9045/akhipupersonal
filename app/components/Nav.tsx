"use client";
import Link from "next/link";

export default function Nav() {
  return (
    <header className="fixed inset-x-0 top-0 z-50 mix-blend-difference">
      <div className="gutter pagewrap flex items-center justify-between py-6"
           style={{ color: "#FAF4E6" }}>
        <Link href="#home" className="ed-serif italic text-[18px] tracking-tight">
          ayesha<span className="not-italic">·</span>marzana
        </Link>
        <nav className="hidden md:flex gap-9 mono text-[12px] uppercase tracking-[0.18em]">
          <Link href="#work">Work</Link>
          <Link href="#about">About</Link>
          <Link href="#gallery">Gallery</Link>
          <Link href="#contact">Contact</Link>
        </nav>
        <Link href="#contact" className="md:hidden mono text-[12px] uppercase tracking-[0.18em]">Menu</Link>
      </div>
    </header>
  );
}
