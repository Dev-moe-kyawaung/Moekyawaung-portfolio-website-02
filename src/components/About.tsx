import { profile, focusAreas, codeSnippet } from "../data";
import SectionHeader from "./SectionHeader";

export default function About() {
  return (
    <section id="about" className="relative py-24 sm:py-32">
      <div className="absolute inset-0 bg-dots opacity-30" />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6">
        <SectionHeader label="About" title={<>Engineer by trade,<br /><span className="text-gradient-gold">founder by nature.</span></>} />

        <div className="mt-16 grid lg:grid-cols-2 gap-10">
          {/* Left — bio */}
          <div>
            <p className="text-lg text-white/70 leading-relaxed">
              I'm a Senior Android Architect from{" "}
              <span className="text-[#e4c96a] font-semibold">Tachileik, Myanmar 🇲🇲</span>, currently
              splitting time with <span className="text-[#e4c96a] font-semibold">Bangkok 🇹🇭</span>. My
              specialty is designing Android systems that scale — multi-module
              Kotlin monorepos, resilient offline-first stacks, and CI/CD
              pipelines that ship 5+ times per week without breaking a sweat.
            </p>
            <p className="mt-5 text-white/60 leading-relaxed">
              I've architected apps across fintech, e-commerce, real-time
              messaging, on-device ML, and startup MVPs. I think in{" "}
              <span className="text-[#3ddc84] font-semibold">layers</span>, ship
              in <span className="text-[#3ddc84] font-semibold">modules</span>,
              and measure everything.
            </p>
            <p className="mt-5 text-white/60 leading-relaxed italic border-l-2 border-[#c9a84c] pl-4">
              "{profile.philosophy}"
            </p>

            {/* Info grid */}
            <div className="mt-8 grid sm:grid-cols-2 gap-3">
              {[
                { k: "Name", v: profile.name },
                { k: "Based", v: "Tachileik ↔ Bangkok" },
                { k: "Focus", v: "Android · AI · Security" },
                { k: "Status", v: "🟢 Open to work" },
                { k: "Certs", v: "82+ Programming Hub" },
                { k: "Building", v: profile.currentlyBuilding },
              ].map((r) => (
                <div key={r.k} className="glass rounded-xl px-4 py-3">
                  <div className="text-[10px] uppercase tracking-widest text-white/40">{r.k}</div>
                  <div className="text-sm font-semibold mt-1">{r.v}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Right — Code card */}
          <div className="relative">
            <div className="glass rounded-2xl overflow-hidden shadow-2xl shadow-black/40">
              <div className="flex items-center gap-2 px-4 py-3 border-b border-white/5 bg-black/30">
                <div className="flex gap-1.5">
                  <span className="w-3 h-3 rounded-full bg-[#ff5f57]" />
                  <span className="w-3 h-3 rounded-full bg-[#febc2e]" />
                  <span className="w-3 h-3 rounded-full bg-[#28c840]" />
                </div>
                <div className="ml-3 text-xs text-white/50 font-mono">MoeKyawAung.kt</div>
                <span className="ml-auto text-[10px] uppercase tracking-widest text-[#7F52FF]">Kotlin</span>
              </div>
              <pre className="p-5 text-[13px] leading-relaxed font-mono overflow-x-auto">
                <code
                  className="text-white/70"
                  dangerouslySetInnerHTML={{
                    __html: highlight(codeSnippet),
                  }}
                />
              </pre>
            </div>
          </div>
        </div>

        {/* Focus areas */}
        <div className="mt-16 grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {focusAreas.map((f) => (
            <div key={f.area} className="glass rounded-2xl p-6 card-hover border border-white/5">
              <div className="text-3xl">{f.icon}</div>
              <div className="mt-3 text-xs uppercase tracking-widest text-[#e4c96a]">Focus</div>
              <div className="text-xl font-bold mt-1">{f.area}</div>
              <div className="text-sm text-white/60 mt-2">{f.stack}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function highlight(code: string) {
  return code
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/(class|override|val|fun|listOf|mapOf|to|return)/g, `<span style="color:#7F52FF">$1</span>`)
    .replace(/("[^"]*")/g, `<span style="color:#3DDC84">$1</span>`)
    .replace(/\b(\d[\d_]*)\b/g, `<span style="color:#e4c96a">$1</span>`)
    .replace(/(\/\/[^\n]*)/g, `<span style="color:#4b5361">$1</span>`)
    .replace(/(MoeKyawAung|SeniorAndroidArchitect)/g, `<span style="color:#e4c96a;font-weight:600">$1</span>`);
}
