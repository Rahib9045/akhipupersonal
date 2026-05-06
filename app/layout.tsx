import type { Metadata } from "next";
import "./globals.css";
import Cursor from "./components/Cursor";
import SmoothScroll from "./components/SmoothScroll";
import Nav from "./components/Nav";

export const metadata: Metadata = {
  title: "Ayesha · Akondo Akhi",
  description:
    "Ayesha Akondo Akhi — media, public relations, brand ambassador, and editorial work between Dhaka and Kuala Lumpur.",
  metadataBase: new URL("https://ayeasha-akondo-akhi-ybqm.onrender.com"),
  openGraph: {
    title: "Ayesha · Akondo Akhi",
    description: "Media · PR · Brand Ambassador · Editorial",
    images: ["/images/hero.jpg"],
    type: "website",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link
          href="https://fonts.googleapis.com/css2?family=Boldonse&family=Fraunces:ital,opsz,wght,SOFT@0,9..144,400..900,30..100;1,9..144,400..900,30..100&family=Instrument+Serif:ital@0;1&family=Inter:wght@300;400;500;600;700&family=JetBrains+Mono:wght@400;500&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        <Cursor />
        <SmoothScroll>
          <Nav />
          {children}
        </SmoothScroll>
      </body>
    </html>
  );
}
