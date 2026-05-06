"use client";

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="hairline gutter bg-paper">
      <div className="pagewrap py-10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-12 mono text-[11px] uppercase tracking-[0.18em] text-ink-mute">
          <div>
            <span className="block text-ink">Ayesha Marzana</span>
            <span className="ed-serif italic text-ink-soft normal-case tracking-tight text-[14px] mt-1 inline-block">
              Akondo Akhi
            </span>
          </div>
          <div>
            <span className="block">Dhaka</span>
            <span className="block">Bangladesh</span>
          </div>
          <div>
            <span className="block">Kuala Lumpur</span>
            <span className="block">Malaysia</span>
          </div>
          <div className="text-right md:text-left">
            <a href="mailto:iamayeshamarzana@gmail.com" className="block">Email</a>
            <span className="block">Instagram</span>
          </div>
        </div>

        <div className="mt-14 flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
          <h3
            className="ed-it text-ink"
            style={{ fontSize: "clamp(60px, 11vw, 220px)", lineHeight: 0.85, letterSpacing: "-0.045em" }}
          >
            Ayesha
          </h3>
          <span className="mono text-[11px] uppercase tracking-[0.18em] text-ink-mute">
            © {year} · all rights reserved
          </span>
        </div>
      </div>
    </footer>
  );
}
