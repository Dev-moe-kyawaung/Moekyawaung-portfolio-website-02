import { openSourceRepos, certCategories } from "../data";
import SectionHeader from "./SectionHeader";

export default function OpenSource() {
  return (
    <section className="relative py-24 sm:py-32 bg-[#07090f]">
      <div className="absolute inset-0 bg-grid opacity-30" />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6">
        <SectionHeader
          label="Open Source & Certifications"
          title={<>Public code. <span className="text-gradient-gold">Real proof.</span></>}
          subtitle="I ship in public — repos, apps, and 82+ verified certifications."
        />

        <div className="mt-16 grid lg:grid-cols-2 gap-6">
          {/* Repos */}
          <div className="glass rounded-3xl p-7 border border-white/5">
            <div className="flex items-center justify-between">
              <h3 className="text-xl font-bold">GitHub Repositories</h3>
              <a href="https://github.com/moekyawaung-tech" target="_blank" rel="noreferrer" className="text-xs text-[#e4c96a] hover:underline">
                View all →
              </a>
            </div>
            <div className="mt-6 grid grid-cols-2 gap-2">
              {openSourceRepos.map((r) => (
                <a
                  key={r}
                  href={`https://github.com/moekyawaung-tech/${r}`}
                  target="_blank"
                  rel="noreferrer"
                  className="group flex items-center gap-2 px-3 py-2.5 rounded-xl bg-black/30 border border-white/5 hover:border-[#c9a84c]/50 transition-colors"
                >
                  <span className="w-2 h-2 rounded-full bg-[#3ddc84] shrink-0" />
                  <span className="text-xs font-mono truncate group-hover:text-[#e4c96a]">{r}</span>
                </a>
              ))}
            </div>
          </div>

          {/* Certifications */}
          <div className="glass rounded-3xl p-7 border border-white/5">
            <div className="flex items-center justify-between">
              <h3 className="text-xl font-bold">82+ Certifications</h3>
              <span className="text-xs font-mono text-white/50">Programming Hub</span>
            </div>
            <div className="mt-6 space-y-2">
              {certCategories.map((c) => (
                <div key={c.name} className="flex items-center gap-3 px-4 py-3 rounded-xl bg-black/30 border border-white/5">
                  <div className="text-xl">{c.icon}</div>
                  <div className="flex-1 text-sm font-semibold">{c.name}</div>
                  <div className="text-xs font-mono px-2 py-0.5 rounded-md bg-[#c9a84c]/20 text-[#e4c96a]">
                    {c.count}
                  </div>
                  <div className="w-24 h-1.5 bg-white/5 rounded-full overflow-hidden">
                    <div
                      className="h-full bg-gradient-to-r from-[#c9a84c] to-[#7f52ff]"
                      style={{ width: `${Math.min(100, (c.count / 13) * 100)}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
