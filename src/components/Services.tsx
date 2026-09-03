import { services } from "../data";
import SectionHeader from "./SectionHeader";

export default function Services() {
  return (
    <section className="relative py-24 sm:py-32 bg-[#07090f]">
      <div className="absolute inset-0 bg-grid opacity-30" />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6">
        <SectionHeader
          label="Services"
          title={<>How I can <span className="text-gradient-gold">help you ship.</span></>}
          subtitle="Six engagement models — from surgical audits to full technical co-founding."
        />

        <div className="mt-16 grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {services.map((s, i) => (
            <div key={s.t} className="group relative glass rounded-3xl p-7 border border-white/5 card-hover overflow-hidden">
              <div className="absolute -top-16 -right-16 w-40 h-40 rounded-full bg-[#c9a84c]/10 blur-2xl opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="relative">
                <div className="flex items-start justify-between">
                  <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-[#c9a84c]/20 to-[#7f52ff]/20 grid place-items-center text-2xl">
                    {s.icon}
                  </div>
                  <div className="text-xs font-mono text-white/30">0{i + 1}</div>
                </div>
                <h3 className="mt-5 text-lg font-bold">{s.t}</h3>
                <p className="mt-2 text-sm text-white/60 leading-relaxed">{s.d}</p>
                <div className="mt-5 pt-5 border-t border-white/5 flex items-center justify-between">
                  <span className="text-xs text-[#e4c96a] font-mono">{s.p}</span>
                  <a href="#contact" className="text-xs text-white/50 hover:text-[#e4c96a] transition-colors">
                    Enquire →
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
