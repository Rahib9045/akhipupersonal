"use client";
import { useEffect, useRef } from "react";

export default function Cursor() {
  const ring = useRef<HTMLDivElement>(null);
  const dot  = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let x = 0, y = 0, rx = 0, ry = 0;
    let raf = 0, big = false;
    const onMove = (e: MouseEvent) => { x = e.clientX; y = e.clientY; };
    const tick = () => {
      rx += (x - rx) * 0.18;
      ry += (y - ry) * 0.18;
      if (dot.current)  dot.current.style.transform  = `translate(${x - 3}px, ${y - 3}px)`;
      if (ring.current) ring.current.style.transform = `translate(${rx - 16}px, ${ry - 16}px) scale(${big ? 1.7 : 1})`;
      raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    window.addEventListener("mousemove", onMove);

    const grow   = () => { big = true; };
    const shrink = () => { big = false; };
    const targets = document.querySelectorAll("a, button, [data-cursor]");
    targets.forEach(el => {
      el.addEventListener("mouseenter", grow);
      el.addEventListener("mouseleave", shrink);
    });
    return () => {
      window.removeEventListener("mousemove", onMove);
      cancelAnimationFrame(raf);
      targets.forEach(el => {
        el.removeEventListener("mouseenter", grow);
        el.removeEventListener("mouseleave", shrink);
      });
    };
  }, []);

  return (
    <>
      <div
        ref={ring}
        className="pointer-events-none fixed left-0 top-0 z-[100] h-8 w-8 rounded-full border mix-blend-difference transition-[transform] duration-200 ease-out"
        style={{ borderColor: "#FAF4E6", willChange: "transform" }}
      />
      <div
        ref={dot}
        className="pointer-events-none fixed left-0 top-0 z-[100] h-1.5 w-1.5 rounded-full mix-blend-difference"
        style={{ background: "#FAF4E6" }}
      />
    </>
  );
}
