import { techStack } from "../data";
import SectionHeader from "./SectionHeader";

export default function Stack() {
  return (
    <section id="stack" className="relative py-24 sm:py-32">
      <div className="absolute inset-0 bg-dots opacity-20" />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6">
        <SectionHeader
          label="Tech Stack"
          title={<>Battle-tested <span className="text-gradient-gold">arsenal.</span></>}
          subtitle="The tools, frameworks, and platforms I use to ship Android at scale."
        />

        <div className="mt-16 grid lg:grid-cols-2 gap-6">
          {Object.entries(techStack).map(([cat, items]) => (
            <div key={cat} className="glass rounded-3xl p-7 border border-white/5">
              <div className="flex items-center justify-between">
                <h3 className="text-lg font-bold">{cat}</h3>
                <span className="text-xs font-mono text-white/40">{items.length} tools</span>
              </div>
              <div className="mt-5 flex flex-wrap gap-2">
                {items.map((t) => (
                  <span
                    key={t.n}
                    className="inline-flex items-center gap-2 px-3 py-2 rounded-xl bg-black/40 border border-white/5 text-sm font-semibold hover:scale-105 transition-transform"
                    style={{ boxShadow: `0 0 20px ${t.c}20` }}
                  >
                    <span className="w-2 h-2 rounded-full" style={{ background: t.c }} />
                    {t.n}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
