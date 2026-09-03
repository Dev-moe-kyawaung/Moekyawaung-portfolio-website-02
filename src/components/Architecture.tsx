import { architectureDecisions } from "../data";
import SectionHeader from "./SectionHeader";

export default function Architecture() {
  return (
    <section id="architecture" className="relative py-24 sm:py-32 bg-[#07090f]">
      <div className="absolute inset-0 bg-grid opacity-40" />
      <div className="absolute top-0 inset-x-0 h-40 glow-gold" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6">
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6">
          <SectionHeader
            label="Architecture Decisions"
            title={<>The <span className="text-gradient-gold">systems</span> behind apps<br />used by millions.</>}
            subtitle="Every decision below has been shipped to production. This is how I architect Android at scale."
          />
          <div className="glass rounded-2xl px-5 py-4 flex items-center gap-4">
            <div className="text-3xl">🏛️</div>
            <div>
              <div className="text-xs uppercase tracking-widest text-white/50">Signature</div>
              <div className="font-bold text-[#e4c96a]">Clean Arch + Multi-Module + MVI</div>
            </div>
          </div>
        </div>

        <div className="mt-16 grid md:grid-cols-2 gap-5">
          {architectureDecisions.map((a, i) => (
            <div
              key={a.title}
              className="group relative glass rounded-3xl p-7 border border-white/5 card-hover overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-40 h-40 rounded-full bg-[#c9a84c]/10 blur-3xl opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="flex items-start justify-between">
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-[#c9a84c]/20 to-[#7f52ff]/20 grid place-items-center text-2xl">
                  {a.icon}
                </div>
                <div className="text-[10px] uppercase tracking-widest text-white/30 font-mono">
                  0{i + 1}
                </div>
              </div>
              <h3 className="mt-5 text-xl font-bold">{a.title}</h3>
              <p className="mt-2 text-sm text-white/60 leading-relaxed">{a.desc}</p>
              <div className="mt-5 grid grid-cols-3 gap-2">
                {a.metrics.map((m) => (
                  <div key={m.k} className="rounded-xl bg-black/30 border border-white/5 px-3 py-2">
                    <div className="text-[9px] uppercase tracking-widest text-white/40">{m.k}</div>
                    <div className="text-sm font-bold text-[#e4c96a]">{m.v}</div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Diagram */}
        <ModuleDiagram />
      </div>
    </section>
  );
}

function ModuleDiagram() {
  const layers = [
    { n: "app", desc: "Entry point · Navigation graph · DI aggregator", c: "#c9a84c" },
    { n: ":feature-*", desc: "home · profile · chat · pos · settings", c: "#7f52ff" },
    { n: ":domain", desc: "Use-cases · Entities · Repositories interface", c: "#3ddc84" },
    { n: ":data", desc: "Retrofit · Room · Firebase · Mappers", c: "#4285F4" },
    { n: ":core", desc: "Design system · UI kit · Networking · Utils", c: "#FFCA28" },
  ];
  return (
    <div className="mt-20 glass rounded-3xl p-6 sm:p-10 border border-white/5">
      <div className="flex items-center justify-between flex-wrap gap-4">
        <div>
          <div className="text-xs uppercase tracking-widest text-[#e4c96a]">Multi-Module Blueprint</div>
          <h3 className="text-2xl font-bold mt-1">Gradle module topology</h3>
        </div>
        <div className="flex gap-2 text-xs font-mono">
          <span className="px-2 py-1 rounded-md bg-black/40">42 modules</span>
          <span className="px-2 py-1 rounded-md bg-black/40">Kotlin 2.0</span>
          <span className="px-2 py-1 rounded-md bg-black/40">Gradle 8.9</span>
        </div>
      </div>
      <div className="mt-8 space-y-3">
        {layers.map((l, i) => (
          <div key={l.n} className="flex items-center gap-4">
            <div className="w-16 text-right text-xs font-mono text-white/40">L{i + 1}</div>
            <div
              className="flex-1 rounded-2xl border p-4 flex items-center justify-between gap-4"
              style={{ borderColor: l.c + "50", background: `linear-gradient(90deg, ${l.c}18, transparent)` }}
            >
              <div>
                <div className="font-mono font-bold" style={{ color: l.c }}>{l.n}</div>
                <div className="text-sm text-white/60 mt-0.5">{l.desc}</div>
              </div>
              <div className="hidden sm:flex gap-1">
                {Array.from({ length: 5 }).map((_, k) => (
                  <span key={k} className="w-2 h-6 rounded-sm" style={{ background: l.c, opacity: 0.15 + k * 0.15 }} />
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
      <p className="mt-6 text-xs text-white/40 font-mono">
        Dependencies flow ↓ downward only. No cyclic references. Enforced via Gradle module rules + Konsist tests.
      </p>
    </div>
  );
}
