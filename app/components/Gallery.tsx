"use client";
import { motion } from "framer-motion";

// Placeholder grid until more shoots come in. Replace src + caption when ready.
const photos = [
  { src: "/images/hero.jpg", caption: "01 — Editorial · Yellow",    span: "row-span-2", pos: "center 18%" },
  { src: "/images/hero.jpg", caption: "02 — Studio · Portrait",     span: "",           pos: "center 25%" },
  { src: "/images/hero.jpg", caption: "03 — Cover · Press",         span: "",           pos: "center 35%" },
  { src: "/images/hero.jpg", caption: "04 — Behind the scenes",     span: "row-span-2", pos: "center 45%" },
  { src: "/images/hero.jpg", caption: "05 — Campaign · Hospitality",span: "",           pos: "center 55%" },
];

export default function Gallery() {
  return (
    <section id="gallery" className="gutter bg-paper py-32 md:py-44">
      <div className="pagewrap">
        <div className="mb-14 flex items-end justify-between gap-6">
          <span className="num-tag">N°03 — Gallery</span>
          <span className="num-tag">Recent · 2024 → 2026</span>
        </div>
        <motion.h2
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-15% 0px" }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="ed text-ink mb-12"
          style={{ fontSize: "clamp(48px, 6vw, 104px)", lineHeight: 0.95, letterSpacing: "-0.02em" }}
        >
          From the <em className="ed-it">archive</em>.
        </motion.h2>

        <div className="grid grid-cols-2 md:grid-cols-3 grid-rows-2 gap-3 md:gap-5 auto-rows-[30vw] md:auto-rows-[24vw]">
          {photos.map((p, i) => (
            <motion.figure
              key={i}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-10% 0px" }}
              transition={{ duration: 0.7, delay: i * 0.06, ease: [0.22, 1, 0.36, 1] }}
              className={`relative overflow-hidden rounded-2xl bg-paper-deep ${p.span}`}
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={p.src}
                alt={p.caption}
                className="h-full w-full object-cover transition-transform duration-[900ms] ease-out hover:scale-[1.05]"
                style={{ objectPosition: p.pos }}
              />
              <figcaption
                className="absolute bottom-3 left-4 mono text-[10px] uppercase tracking-[0.18em] mix-blend-difference"
                style={{ color: "#FAF4E6" }}
              >
                {p.caption}
              </figcaption>
            </motion.figure>
          ))}
        </div>
      </div>
    </section>
  );
}
