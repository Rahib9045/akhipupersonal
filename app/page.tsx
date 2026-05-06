import Hero from "./components/Hero";
import About from "./components/About";
import Work from "./components/Work";
import Gallery from "./components/Gallery";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function Page() {
  return (
    <main>
      {/* Fixed AYESHA cover — pinned in viewport (darker paper) */}
      <Hero />

      {/* Spacer — pulls the seam (and the portrait that straddles it) higher
          into the viewport so both are clearly visible at scroll=0. */}
      <div className="h-[92svh]" aria-hidden />

      {/* Cover layer with the LIGHTER cream so the seam is visible.
          The seam is exactly at this div's top edge. */}
      <div className="relative z-[10] bg-paper">
        {/* Photo bridge — z-30 lifts the photo above the cover's bg AND
            its sibling sections, so the bottom 30% sits on the lighter
            content area while the top 70% pokes into the darker hero. */}
        <div className="relative h-0 z-[30]" aria-hidden>
          <figure
            className="absolute left-1/2 top-0 -translate-x-1/2 -translate-y-[70%] overflow-hidden rounded-[36px] bg-paper-deep shadow-card"
            style={{
              width: "clamp(280px, 32vw, 480px)",
              height: "clamp(420px, 52vw, 720px)",
            }}
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/images/hero.jpg"
              alt="Portrait of Ayesha Marzana"
              className="h-full w-full object-cover"
              style={{ objectPosition: "center 20%" }}
            />
            <span
              className="absolute top-4 left-5 mono text-[10px] uppercase tracking-[0.22em] mix-blend-difference"
              style={{ color: "#FAF4E6" }}
            >
              fig. 01 — A.M.
            </span>
          </figure>
        </div>

        {/* Spacer so first section's content sits below the photo's bottom 30% */}
        <div aria-hidden style={{ height: "clamp(150px, 16vw, 230px)" }} />

        <About />
        <Work />
        <Gallery />
        <Contact />
        <Footer />
      </div>
    </main>
  );
}
