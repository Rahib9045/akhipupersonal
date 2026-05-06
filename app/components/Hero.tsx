"use client";

export default function Hero() {
  return (
    <section
      id="home"
      className="fixed inset-0 z-[1] overflow-hidden bg-paper-deep"
    >
      {/* The mark — bigger on every breakpoint */}
      <div className="absolute inset-0 grid place-items-center">
        <div className="text-center px-6">
          <span className="ed-serif italic block text-ink-soft text-[clamp(13px,1.4vw,20px)] tracking-tight mb-2">
            the personal site of —
          </span>
          <h1
            className="ed-it select-none whitespace-nowrap text-ink leading-none"
            style={{
              // larger on phones (32vw) and pushed higher on desktop (cap 620px)
              fontSize: "clamp(110px, 32vw, 620px)",
              letterSpacing: "-0.045em",
              lineHeight: 0.86,
            }}
          >
            Ayesha
          </h1>
          <div className="mt-5 inline-flex items-center gap-3 text-ink-mute">
            <span className="h-px w-8 bg-clay" />
            <span className="mono text-[10px] uppercase tracking-[0.24em]">
              Marzana · Akondo Akhi
            </span>
            <span className="h-px w-8 bg-clay" />
          </div>
        </div>
      </div>

      {/* Corner labels — desktop layout */}
      <div className="gutter pagewrap absolute inset-x-0 bottom-0 z-[3] hidden md:flex items-end justify-between pb-8 mono text-[11px] uppercase tracking-[0.22em] text-ink-mute">
        <span>est. 1999</span>
        <span className="ed-serif normal-case italic tracking-tight text-[15px] text-ink-soft">
          Scroll for more →
        </span>
        <span>Dhaka ⇄ Kuala Lumpur</span>
      </div>

      {/* Corner labels — mobile (centered & stacked) */}
      <div className="gutter absolute inset-x-0 bottom-0 z-[3] md:hidden flex flex-col items-center gap-1 pb-7 mono text-[10px] uppercase tracking-[0.22em] text-ink-mute">
        <span>Dhaka ⇄ Kuala Lumpur</span>
        <span className="ed-serif normal-case italic tracking-tight text-[13px] text-ink-soft">
          Scroll for more ↓
        </span>
      </div>
    </section>
  );
}
