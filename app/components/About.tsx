"use client";
import { motion } from "framer-motion";

export default function About() {
  return (
    <section id="about" className="gutter bg-paper py-32 md:py-44">
      <div className="pagewrap">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-15% 0px" }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="ed text-ink"
          style={{
            fontSize: "clamp(54px, 8vw, 132px)",
            lineHeight: 0.95,
            letterSpacing: "-0.025em",
          }}
        >
          A study in <em className="ed-it text-clay">presence</em>.
        </motion.h2>

        <div className="mt-16 md:mt-24 grid gap-10 md:grid-cols-3 text-[16px] leading-[1.7] text-ink-soft">
          <p>
            Trained at the <em>University of Liberal Arts Bangladesh</em> in
            Media Studies &amp; Journalism with a major in Public Relations, she
            built her journey at the intersection of communication, creativity,
            and performance. During her academic years, she represented renowned
            brands such as <span className="text-ink font-medium">HATIL</span>{" "}
            and <span className="text-ink font-medium">Singer Bangladesh</span>{" "}
            as a brand ambassador, where she developed a strong presence in
            public engagement and promotional communication.
          </p>
          <p>
            Her professional experience further expanded through her
            multitasking role as a{" "}
            <span className="text-ink font-medium">PR Team Member</span> at{" "}
            <em>Golden Tulip Grandmark Dhaka</em>, where she worked closely with
            international guests and corporate communications, blending
            hospitality with strategic public relations.
          </p>
          <p>
            Driven by a deep passion for theatre and visual storytelling, she
            also pursued acting and scenography training under the guidance of
            renowned theatre personality <em>Syed Jamil Ahmed</em>. Her artistic
            journey reflects a unique fusion of media, performance, and human
            connection — shaping her into a dynamic communicator with both
            creative vision and professional versatility.
          </p>
        </div>
      </div>
    </section>
  );
}
