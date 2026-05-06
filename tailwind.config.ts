import type { Config } from "tailwindcss";

export default {
  content: ["./app/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        // Warm-paper editorial palette
        paper:   { DEFAULT: "#F1E8D6", deep: "#E5D8BD", light: "#FAF4E6" },
        ink:     { DEFAULT: "#1A1410", soft: "#3F342A", mute: "#7C6E58" },
        clay:    { DEFAULT: "#C24A28", deep: "#9B3A1E" },   // signature accent
        moss:    "#5C5B3F",                                 // secondary tint
      },
      fontFamily: {
        // Display sans (Druk-alike for monumental words)
        display: ['"Boldonse"', '"Anton"', "Impact", "sans-serif"],
        // Editorial display serif
        edisplay: ['"Fraunces"', "Georgia", "serif"],
        // Editorial italics & inline marks
        serif:   ['"Instrument Serif"', "Georgia", "serif"],
        // Sans for UI / body
        sans:    ['"Inter"', "ui-sans-serif", "system-ui", "sans-serif"],
        // Mono for numbers, metadata
        mono:    ['"JetBrains Mono"', "ui-monospace", "monospace"],
      },
      letterSpacing: {
        tightish: "-0.015em",
        tight2:   "-0.03em",
        tight3:   "-0.045em",
      },
      transitionTimingFunction: {
        out:  "cubic-bezier(0.22, 1, 0.36, 1)",
        soft: "cubic-bezier(0.4, 0, 0.2, 1)",
      },
      boxShadow: {
        card: "0 30px 60px -28px rgba(26,20,16,0.30)",
      },
      maxWidth: {
        page: "1380px",
      },
    },
  },
  plugins: [],
} satisfies Config;
