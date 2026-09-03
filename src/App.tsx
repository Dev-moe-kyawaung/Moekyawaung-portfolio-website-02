import { useEffect, useState } from "react";
import Nav from "./components/Nav";
import Hero from "./components/Hero";
import Marquee from "./components/Marquee";
import About from "./components/About";
import Architecture from "./components/Architecture";
import Apps from "./components/Apps";
import Startups from "./components/Startups";
import Stack from "./components/Stack";
import Showreel from "./components/Showreel";
import Timeline from "./components/Timeline";
import Services from "./components/Services";
import Testimonials from "./components/Testimonials";
import OpenSource from "./components/OpenSource";
import CICD from "./components/CICD";
import Security from "./components/Security";
import Network from "./components/Network";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function App() {
  const [theme, setTheme] = useState<"dark" | "light">("dark");
  const [cursor, setCursor] = useState({ x: -100, y: -100 });

  useEffect(() => {
    document.documentElement.classList.toggle("theme-light", theme === "light");
  }, [theme]);

  useEffect(() => {
    const move = (e: MouseEvent) => setCursor({ x: e.clientX, y: e.clientY });
    window.addEventListener("mousemove", move);
    return () => window.removeEventListener("mousemove", move);
  }, []);

  // Reveal on scroll
  useEffect(() => {
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) e.target.classList.add("in");
        });
      },
      { threshold: 0.1 }
    );
    document.querySelectorAll(".reveal").forEach((el) => obs.observe(el));
    return () => obs.disconnect();
  }, []);

  return (
    <div className="relative min-h-screen bg-[#05060a] text-white selection:bg-[#c9a84c] selection:text-black">
      {/* Cursor glow */}
      <div
        className="pointer-events-none fixed z-[100] w-8 h-8 rounded-full mix-blend-difference transition-transform duration-100"
        style={{
          transform: `translate(${cursor.x - 16}px, ${cursor.y - 16}px)`,
          background: "radial-gradient(circle, rgba(228,201,106,0.9), transparent 70%)",
        }}
      />

      <Nav theme={theme} setTheme={setTheme} />

      <main>
        <Hero />
        <Marquee />
        <About />
        <Architecture />
        <Apps />
        <CICD />
        <Security />
        <Startups />
        <Stack />
        <Showreel />
        <Timeline />
        <Services />
        <Testimonials />
        <OpenSource />
        <Network />
        <Contact />
      </main>

      <Footer />
    </div>
  );
}
