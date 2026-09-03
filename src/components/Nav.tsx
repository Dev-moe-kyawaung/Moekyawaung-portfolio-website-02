import { useEffect, useState } from "react";

const links = [
  { id: "hero", label: "Home" },
  { id: "about", label: "About" },
  { id: "architecture", label: "Architecture" },
  { id: "apps", label: "Apps" },
  { id: "startups", label: "Startups" },
  { id: "stack", label: "Stack" },
  { id: "showreel", label: "Showreel" },
  { id: "contact", label: "Contact" },
];

export default function Nav({ theme, setTheme }: { theme: "dark" | "light"; setTheme: (t: "dark" | "light") => void }) {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("hero");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) setActive(e.target.id);
        });
      },
      { rootMargin: "-40% 0px -55% 0px" }
    );
    links.forEach((l) => {
      const el = document.getElementById(l.id);
      if (el) obs.observe(el);
    });
    return () => obs.disconnect();
  }, []);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-500 ${
        scrolled ? "py-3" : "py-5"
      }`}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div
          className={`flex items-center justify-between rounded-2xl px-4 sm:px-6 py-3 transition-all duration-500 ${
            scrolled ? "glass shadow-2xl shadow-black/40" : "bg-transparent"
          }`}
        >
          <a href="#hero" className="flex items-center gap-3 group">
            <div className="relative w-9 h-9 rounded-xl overflow-hidden ring-1 ring-white/10">
              <div className="absolute inset-0 bg-gradient-to-br from-[#c9a84c] via-[#7f52ff] to-[#3ddc84] opacity-90" />
              <span className="absolute inset-0 grid place-items-center text-black font-black text-sm">M</span>
            </div>
            <div className="hidden sm:block">
              <div className="text-sm font-bold tracking-tight">Moe Kyaw Aung</div>
              <div className="text-[10px] uppercase tracking-[0.2em] text-white/50">Senior Android Architect</div>
            </div>
          </a>

          <nav className="hidden lg:flex items-center gap-1">
            {links.map((l) => (
              <a
                key={l.id}
                href={`#${l.id}`}
                className={`px-3 py-2 text-sm rounded-lg transition-all ${
                  active === l.id
                    ? "text-[#e4c96a] bg-white/5"
                    : "text-white/70 hover:text-white hover:bg-white/5"
                }`}
              >
                {l.label}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-2">
            <button
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              className="w-10 h-10 rounded-xl border border-white/10 hover:border-[#c9a84c]/50 grid place-items-center transition-colors"
              aria-label="Toggle theme"
              title="Toggle theme"
            >
              <span className="text-base">{theme === "dark" ? "🌙" : "☀️"}</span>
            </button>
            <a
              href="#contact"
              className="hidden sm:inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-gradient-to-r from-[#c9a84c] to-[#e4c96a] text-black text-sm font-bold hover:scale-[1.03] transition-transform"
            >
              Hire Me
              <span>→</span>
            </a>
            <button
              className="lg:hidden w-10 h-10 rounded-xl border border-white/10 grid place-items-center"
              onClick={() => setOpen(!open)}
              aria-label="Menu"
            >
              <div className="space-y-1.5">
                <span className={`block w-5 h-0.5 bg-white transition-transform ${open ? "translate-y-2 rotate-45" : ""}`} />
                <span className={`block w-5 h-0.5 bg-white transition-opacity ${open ? "opacity-0" : ""}`} />
                <span className={`block w-5 h-0.5 bg-white transition-transform ${open ? "-translate-y-2 -rotate-45" : ""}`} />
              </div>
            </button>
          </div>
        </div>

        {open && (
          <div className="lg:hidden mt-2 glass rounded-2xl p-4 grid grid-cols-2 gap-2">
            {links.map((l) => (
              <a
                key={l.id}
                href={`#${l.id}`}
                onClick={() => setOpen(false)}
                className="px-3 py-3 rounded-lg text-sm text-white/80 hover:bg-white/5 hover:text-[#e4c96a]"
              >
                {l.label}
              </a>
            ))}
          </div>
        )}
      </div>
    </header>
  );
}
