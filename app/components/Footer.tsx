"use client";

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="hairline gutter bg-paper">
      <div className="pagewrap py-16">
        <h3
          className="ed-it text-ink"
          style={{ fontSize: "clamp(80px, 16vw, 320px)", lineHeight: 0.85, letterSpacing: "-0.045em" }}
        >
          Ayesha
        </h3>
        <div className="mt-10 flex flex-col gap-2 md:flex-row md:items-end md:justify-between text-[13px] text-ink-mute">
          <span>© {year} Ayesha Akondo Akhi</span>
          <a href="mailto:iamayeshamarzana@gmail.com" className="text-ink hover:text-clay transition-colors">
            iamayeshamarzana@gmail.com
          </a>
        </div>
      </div>
    </footer>
  );
}
