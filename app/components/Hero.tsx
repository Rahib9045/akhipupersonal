"use client";

export default function Hero() {
  return (
    <section
      id="home"
      className="fixed inset-0 z-[1] overflow-hidden bg-paper-deep"
    >
      <div className="absolute inset-0 grid place-items-center">
        <h1
          className="ed-it select-none whitespace-nowrap text-ink"
          style={{
            fontSize: "clamp(110px, 32vw, 620px)",
            letterSpacing: "-0.045em",
            lineHeight: 0.86,
          }}
        >
          Ayesha
        </h1>
      </div>
    </section>
  );
}
