import { useEffect, useState } from "react";
import { profile, heroStats } from "../data";

const roles = [
  "Senior Android Architect.",
  "Technical Founder.",
  "Kotlin & Compose Expert.",
  "Multi-module Modularization.",
  "CI/CD & Testing at Scale.",
  "I build apps used by millions.",
];

export default function Hero() {
  const [txt, setTxt] = useState("");
  const [i, setI] = useState(0);
  const [j, setJ] = useState(0);
  const [del, setDel] = useState(false);

  useEffect(() => {
    const cur = roles[i % roles.length];
    const tick = setTimeout(
      () => {
        if (!del) {
          setTxt(cur.slice(0, j + 1));
          setJ(j + 1);
          if (j + 1 === cur.length) setTimeout(() => setDel(true), 1400);
        } else {
          setTxt(cur.slice(0, j - 1));
          setJ(j - 1);
          if (j === 0) {
            setDel(false);
            setI(i + 1);
          }
        }
      },
      del ? 30 : 60
    );
    return () => clearTimeout(tick);
  }, [i, j, del]);

  return (
    <section id="hero" className="relative min-h-screen pt-32 pb-20 overflow-hidden">
      {/* Backgrounds */}
      <div className="absolute inset-0 bg-grid opacity-60" />
      <div className="absolute inset-0 glow-gold" />
      <div className="absolute inset-0 glow-mint" />
      <div className="absolute -top-40 -right-40 w-[520px] h-[520px] rounded-full bg-[#c9a84c]/20 blur-3xl" />
      <div className="absolute -bottom-40 -left-40 w-[520px] h-[520px] rounded-full bg-[#7f52ff]/20 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6">
        <div className="grid lg:grid-cols-12 gap-10 items-center">
          {/* Left */}
          <div className="lg:col-span-7">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full glass text-xs uppercase tracking-[0.2em] text-white/70">
              <span className="relative flex w-2 h-2">
                <span className="absolute inline-flex h-full w-full rounded-full bg-[#3ddc84] opacity-75 animate-ping" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-[#3ddc84]" />
              </span>
              Available · Senior · Founding Engineer
            </div>

            <h1 className="mt-6 text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-black tracking-tight leading-[0.95]">
              <span className="block text-white/90">Hi, I'm</span>
              <span className="block text-gradient-gold text-shadow-gold">Moe Kyaw Aung</span>
              <span className="block text-white/60 text-3xl sm:text-4xl lg:text-5xl mt-4 font-bold">
                {txt}
                <span className="caret text-[#c9a84c]">▍</span>
              </span>
            </h1>

            <p className="mt-8 max-w-2xl text-lg text-white/70 leading-relaxed">
              I design, architect and ship Android apps used by millions — from
              multi-module Kotlin monorepos, to on-device ML, to full-stack
              Firebase backends. I've launched <span className="text-[#e4c96a] font-semibold">43 apps</span>,
              raised <span className="text-[#e4c96a] font-semibold">82+ certifications</span>,
              and founded <span className="text-[#e4c96a] font-semibold">3 startups</span>.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href="#apps"
                className="group inline-flex items-center gap-2 px-6 py-3.5 rounded-2xl bg-gradient-to-r from-[#c9a84c] to-[#e4c96a] text-black font-bold hover:scale-[1.03] transition-transform shadow-2xl shadow-[#c9a84c]/30"
              >
                Explore My Apps
                <span className="transition-transform group-hover:translate-x-1">→</span>
              </a>
              <a
                href="#contact"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-2xl border border-white/15 hover:border-[#c9a84c]/60 hover:bg-white/5 transition-colors font-semibold"
              >
                💬 Start a Project
              </a>
              <a
                href={profile.github}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-2xl border border-white/15 hover:border-white/40 hover:bg-white/5 transition-colors font-semibold"
              >
                📄 Resume
              </a>
            </div>

            {/* Stats */}
            <div className="mt-12 grid grid-cols-2 sm:grid-cols-4 gap-4">
              {heroStats.map((s) => (
                <div key={s.l} className="glass rounded-2xl p-4">
                  <div className="text-3xl font-black text-gradient-gold">{s.n}</div>
                  <div className="text-xs uppercase tracking-widest text-white/50 mt-1">{s.l}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Right — Avatar card */}
          <div className="lg:col-span-5">
            <div className="relative mx-auto max-w-md">
              {/* Rotating conic ring */}
              <div className="relative rounded-[2rem] p-1 conic-border">
                <div className="rounded-[1.9rem] bg-[#0a0d16] overflow-hidden">
                  <div className="relative">
                    <img
                      src={profile.avatar}
                      alt={profile.name}
                      className="w-full aspect-[4/5] object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#05060a] via-transparent to-transparent" />
                    <div className="absolute top-4 left-4 flex items-center gap-2 px-3 py-1.5 rounded-full glass text-xs">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#3ddc84] pulse-ring" />
                      Online now
                    </div>
                    <div className="absolute bottom-4 left-4 right-4">
                      <div className="glass rounded-2xl p-4">
                        <div className="text-xs uppercase tracking-widest text-[#e4c96a]">Currently Building</div>
                        <div className="mt-1 font-bold">{profile.currentlyBuilding}</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating badges */}
              <div className="absolute -top-6 -left-6 animate-float">
                <div className="glass rounded-2xl px-4 py-3 flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-[#7F52FF]/20 grid place-items-center text-lg">☕</div>
                  <div>
                    <div className="text-[10px] uppercase tracking-widest text-white/50">Language</div>
                    <div className="text-sm font-bold">Kotlin</div>
                  </div>
                </div>
              </div>
              <div className="absolute -bottom-6 -right-6 animate-float" style={{ animationDelay: "2s" }}>
                <div className="glass rounded-2xl px-4 py-3 flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-[#3DDC84]/20 grid place-items-center text-lg">🤖</div>
                  <div>
                    <div className="text-[10px] uppercase tracking-widest text-white/50">Platform</div>
                    <div className="text-sm font-bold">Android</div>
                  </div>
                </div>
              </div>
              <div className="absolute top-1/2 -right-8 animate-float" style={{ animationDelay: "1s" }}>
                <div className="glass rounded-2xl px-4 py-3 flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-[#FFCA28]/20 grid place-items-center text-lg">🔥</div>
                  <div>
                    <div className="text-[10px] uppercase tracking-widest text-white/50">Backend</div>
                    <div className="text-sm font-bold">Firebase</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll hint */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 text-white/40 text-xs uppercase tracking-[0.4em] animate-float">
        Scroll ↓
      </div>
    </section>
  );
}
