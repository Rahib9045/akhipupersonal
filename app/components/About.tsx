"use client";
import { motion } from "framer-motion";

export default function About() {
  return (
    <section id="about" className="gutter bg-paper py-32 md:py-44">
      <div className="pagewrap">
        <div className="grid gap-12 md:grid-cols-12">
          {/* Left rail */}
          <div className="md:col-span-3 md:sticky md:top-28 self-start">
            <span className="num-tag">N°01 — About</span>
            <h2
              className="ed mt-6 text-ink"
              style={{ fontSize: "clamp(44px, 6vw, 96px)", lineHeight: 0.92, letterSpacing: "-0.02em" }}
            >
              A study<br/>in <em className="ed-it text-clay">presence</em>.
            </h2>
            <span className="accent-bar mt-8" />
          </div>

          {/* Body */}
          <div className="md:col-span-9 md:col-start-4">
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-15% 0px" }}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
              className="ed-serif text-ink text-[clamp(22px,2.4vw,34px)] leading-[1.35] tracking-tightish max-w-[26ch]"
            >
              Ayesha is a Bangladeshi media &amp; public relations professional working
              between <em>Dhaka</em> and <em>Kuala Lumpur</em>, with a foot in
              brand storytelling, theatre, and editorial.
            </motion.p>

            <div className="mt-14 grid gap-10 md:grid-cols-2 text-[16px] leading-[1.65] text-ink-soft">
              <p>
                Trained at the University of Liberal Arts Bangladesh with a degree
                in Media Studies &amp; Journalism (major: Public Relations), her
                practice spans brand ambassadorship for HATIL and Singer Bangladesh,
                hospitality PR for Golden Tulip — The GrandMark, and creative
                content for Aesthetic Hub.
              </p>
              <p>
                Currently leading media and public relations for JD World in Kuala
                Lumpur, she splits her time between client communications, on-camera
                work, and theatre — most recently training under Sayed Jamil Ahmed
                in scenography and direction.
              </p>
            </div>

            <dl className="mt-16 grid gap-px md:grid-cols-4 hairline">
              {[
                ["Currently", "JD World · KL"],
                ["Based in",  "Dhaka · KL"],
                ["Trained",   "ULAB · MSJ ’25"],
                ["Languages", "Bengali · English"],
              ].map(([k, v]) => (
                <div key={k} className="hairline-b py-5">
                  <dt className="num-tag">{k}</dt>
                  <dd className="ed-serif italic text-ink text-[20px] mt-1">{v}</dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </div>
    </section>
  );
}
