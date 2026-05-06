"use client";

const items = [
  "JD World",
  "HATIL Furniture",
  "Singer Bangladesh",
  "Golden Tulip",
  "Safiya Sathi Production",
  "Aesthetic Hub",
  "ULAB",
  "Compass Hospitality",
];

export default function Marquee() {
  const list = [...items, ...items];
  return (
    <section className="hairline-b hairline overflow-hidden bg-paper py-6">
      <div className="flex items-center gap-12 whitespace-nowrap will-change-transform animate-marquee">
        {list.map((t, i) => (
          <span key={i} className="ed-it text-[clamp(28px,3vw,44px)] text-ink tracking-tight2">
            {t}
            <span className="mx-7 align-middle text-clay">✦</span>
          </span>
        ))}
      </div>
    </section>
  );
}
