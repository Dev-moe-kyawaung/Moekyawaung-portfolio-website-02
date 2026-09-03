import { useState } from "react";
import { apps } from "../data";
import SectionHeader from "./SectionHeader";

export default function Apps() {
  const [active, setActive] = useState<number | null>(null);
  return (
    <section id="apps" className="relative py-24 sm:py-32">
      <div className="absolute inset-0 bg-dots opacity-20" />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6">
        <SectionHeader
          label="App Collection"
          title={<>16 <span className="text-gradient-gold">production apps.</span><br />One senior engineer.</>}
          subtitle="Every card links to a real repo. Every app has been shipped, tested, and used by real people."
        />

        <div className="mt-16 grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
          {apps.map((a) => (
            <a
              key={a.id}
              href={a.repo}
              target="_blank"
              rel="noreferrer"
              onMouseEnter={() => setActive(a.id)}
              onMouseLeave={() => setActive(null)}
              className={`group relative rounded-3xl p-6 border overflow-hidden transition-all duration-500 ${
                active === a.id ? "border-[#c9a84c]/50 scale-[1.02]" : "border-white/5"
              } glass`}
            >
              <div
                className={`absolute -top-24 -right-24 w-56 h-56 rounded-full bg-gradient-to-br ${a.color} opacity-20 blur-3xl group-hover:opacity-40 transition-opacity`}
              />
              <div className="relative">
                <div className="flex items-start justify-between">
                  <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${a.color} grid place-items-center text-2xl shadow-lg`}>
                    {a.emoji}
                  </div>
                  <span className="text-[10px] font-mono uppercase tracking-widest px-2 py-1 rounded-full bg-white/5 border border-white/10">
                    {a.tag}
                  </span>
                </div>
                <div className="mt-4 flex items-center gap-2">
                  <span className="text-xs font-mono text-white/40">#{String(a.id).padStart(2, "0")}</span>
                  <h3 className="text-lg font-bold group-hover:text-[#e4c96a] transition-colors">{a.name}</h3>
                </div>
                <p className="mt-2 text-sm text-white/60 leading-relaxed min-h-[3rem]">{a.desc}</p>
                <div className="mt-4 flex flex-wrap gap-1.5">
                  {a.stack.map((s) => (
                    <span key={s} className="text-[10px] px-2 py-0.5 rounded-md bg-black/40 text-white/60 border border-white/5">
                      {s}
                    </span>
                  ))}
                </div>
                <div className="mt-4 flex items-center justify-between pt-4 border-t border-white/5">
                  <div>
                    <div className="text-[10px] uppercase tracking-widest text-white/40">Users</div>
                    <div className="text-sm font-bold text-[#3ddc84]">{a.users}</div>
                  </div>
                  <span className="text-xs text-white/40 group-hover:text-[#e4c96a] transition-colors">View repo →</span>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
