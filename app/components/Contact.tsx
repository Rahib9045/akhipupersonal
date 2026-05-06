"use client";
import { motion } from "framer-motion";

export default function Contact() {
  return (
    <section id="contact" className="gutter bg-paper py-32 md:py-56">
      <div className="pagewrap">
        <span className="num-tag">N°04 — Contact</span>

        <motion.h2
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-15% 0px" }}
          transition={{ duration: 0.85, ease: [0.22, 1, 0.36, 1] }}
          className="ed mt-6 text-ink"
          style={{
            fontSize: "clamp(72px, 11vw, 200px)",
            lineHeight: 0.9,
            letterSpacing: "-0.04em",
          }}
        >
          Let&rsquo;s make<br/>
          <em className="ed-it text-clay">something</em> together.
        </motion.h2>

        <div className="mt-16 grid gap-12 md:grid-cols-12">
          <div className="md:col-span-7">
            <p className="ed-serif text-ink text-[clamp(20px,2vw,28px)] leading-[1.45] max-w-[44ch]">
              For brand partnerships, press features, or appearance bookings —
              reach out directly. Replies typically within two business days.
            </p>
            <a
              href="mailto:iamayeshamarzana@gmail.com"
              className="pill arrow-link mt-12"
            >
              <span className="mono text-[12px] uppercase tracking-[0.18em]">Inquiries</span>
              <span className="text-[15px]">iamayeshamarzana@gmail.com</span>
              <span aria-hidden>→</span>
            </a>
          </div>
          <div className="md:col-span-5">
            <ul className="space-y-0">
              {[
                ["Instagram",  "@ayeshamarzana"],
                ["Phone",      "+880 1998 061 861"],
                ["Press kit",  "Available on request"],
                ["Based",      "Dhaka · Kuala Lumpur"],
              ].map(([k, v]) => (
                <li key={k} className="hairline-b flex justify-between py-4">
                  <span className="num-tag">{k}</span>
                  <span className="ed-serif italic text-[18px] text-ink">{v}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
