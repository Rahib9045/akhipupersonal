"use client";
import { motion } from "framer-motion";

const items = [
  { n: "01", year: "2025 →",     title: "JD World",                role: "Media & PR Executive",         where: "Kuala Lumpur" },
  { n: "02", year: "2024 →",     title: "HATIL Furniture",         role: "Brand Ambassador",             where: "Bangladesh" },
  { n: "03", year: "2024 →",     title: "Safiya Sathi Production", role: "Artist · PR",                  where: "Dhaka" },
  { n: "04", year: "2023 →",     title: "Aesthetic Hub",           role: "Digital Marketing · Content",  where: "Dhaka" },
  { n: "05", year: "2022 → '25", title: "Golden Tulip Grandmark",  role: "PR Team · Compass Hospitality",where: "Dhaka" },
  { n: "06", year: "2022 → '24", title: "Singer Bangladesh",       role: "Brand Ambassador",             where: "Bangladesh" },
];

export default function Work() {
  return (
    <section id="work" className="gutter bg-paper py-32 md:py-44">
      <div className="pagewrap">
        <motion.h2
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-15% 0px" }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="ed text-ink"
          style={{ fontSize: "clamp(56px, 8.5vw, 148px)", lineHeight: 0.9, letterSpacing: "-0.025em" }}
        >
          Selected <em className="ed-it text-clay">work.</em>
        </motion.h2>

        <ul className="mt-16 hairline">
          {items.map((it, i) => (
            <motion.li
              key={it.title}
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-10% 0px" }}
              transition={{ duration: 0.5, delay: i * 0.04, ease: [0.22, 1, 0.36, 1] }}
              className="hairline-b group grid grid-cols-[110px_1fr_auto] items-baseline gap-8 py-6 md:py-8 transition-[padding] duration-500 ease-out hover:pl-3"
            >
              <span className="mono text-[12px] tracking-[0.06em] text-ink-mute">{it.year}</span>
              <h3
                className="ed text-ink transition-colors duration-300 group-hover:text-clay"
                style={{ fontSize: "clamp(28px, 3.6vw, 56px)", lineHeight: 1.05, letterSpacing: "-0.015em" }}
              >
                {it.title}
              </h3>
              <p className="hidden md:block text-right text-[14px] text-ink-mute max-w-[360px]">
                <span className="ed-serif italic text-ink-soft">{it.role}</span>
                <span className="mx-2">·</span>
                {it.where}
              </p>
            </motion.li>
          ))}
        </ul>
      </div>
    </section>
  );
}
