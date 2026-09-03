import { githubAccounts, lovableApps, socials, emailCollection } from "../data";
import SectionHeader from "./SectionHeader";

export default function Network() {
  return (
    <section className="relative py-24 sm:py-32">
      <div className="absolute inset-0 bg-dots opacity-20" />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6">
        <SectionHeader
          label="Digital Footprint"
          title={<>Presence across the <span className="text-gradient-gold">web.</span></>}
          subtitle="43 GitHub pages · 38 Lovable apps · 20 email endpoints · 16 socials — one engineer, many mediums."
        />

        {/* Socials */}
        <div className="mt-16">
          <SubTitle text="Social Networks" count={socials.length} />
          <div className="mt-6 grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
            {socials.map((s) => (
              <a
                key={s.name}
                href={s.url}
                target="_blank"
                rel="noreferrer"
                className="group flex items-center gap-3 p-3 rounded-2xl glass border border-white/5 hover:border-[#c9a84c]/40 transition-all"
              >
                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#c9a84c]/20 to-[#7f52ff]/20 grid place-items-center text-xs font-black text-[#e4c96a] uppercase">
                  {s.icon}
                </div>
                <div className="flex-1 min-w-0">
                  <div className="text-sm font-bold group-hover:text-[#e4c96a]">{s.name}</div>
                  <div className="text-[10px] text-white/40 truncate">{s.url.replace(/^https?:\/\//, "")}</div>
                </div>
                <span className="text-white/30 group-hover:text-[#e4c96a] transition-colors">↗</span>
              </a>
            ))}
          </div>
        </div>

        {/* GitHub Pages */}
        <div className="mt-14">
          <SubTitle text="GitHub Page Portfolios" count={githubAccounts.length} />
          <div className="mt-6 grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-2">
            {githubAccounts.map((g, i) => (
              <a
                key={g}
                href={g}
                target="_blank"
                rel="noreferrer"
                className="group flex items-center gap-2 px-3 py-2 rounded-xl bg-black/30 border border-white/5 hover:border-[#c9a84c]/40 transition-colors text-[11px] font-mono"
              >
                <span className="text-[#3ddc84]">●</span>
                <span className="text-white/60 group-hover:text-[#e4c96a] truncate">
                  {g.replace(/^https?:\/\//, "").replace(".github.io/", "")}
                </span>
                <span className="ml-auto text-white/30 text-[10px]">{String(i + 1).padStart(2, "0")}</span>
              </a>
            ))}
          </div>
        </div>

        {/* Lovable Apps */}
        <div className="mt-14">
          <SubTitle text="Lovable / Web Apps" count={lovableApps.length} />
          <div className="mt-6 grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-2">
            {lovableApps.map((l, i) => (
              <a
                key={l + i}
                href={l}
                target="_blank"
                rel="noreferrer"
                className="group flex items-center gap-2 px-3 py-2 rounded-xl bg-black/30 border border-white/5 hover:border-[#7f52ff]/40 transition-colors text-[11px] font-mono"
              >
                <span className="text-[#7f52ff]">◆</span>
                <span className="text-white/60 group-hover:text-[#a78bfa] truncate">
                  {l.replace(/^https?:\/\//, "").replace(".lovable.app/", "").replace(".lovable.app", "")}
                </span>
              </a>
            ))}
          </div>
        </div>

        {/* Emails */}
        <div className="mt-14">
          <SubTitle text="Email Aliases" count={emailCollection.length} />
          <div className="mt-6 grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2">
            {emailCollection.map((e) => (
              <a
                key={e}
                href={`mailto:${e}`}
                className="group flex items-center gap-2 px-3 py-2.5 rounded-xl bg-black/30 border border-white/5 hover:border-[#c9a84c]/40 transition-colors"
              >
                <span className="text-[#e4c96a]">✉</span>
                <span className="text-xs font-mono text-white/60 group-hover:text-[#e4c96a] truncate">{e}</span>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function SubTitle({ text, count }: { text: string; count: number }) {
  return (
    <div className="flex items-end justify-between">
      <div className="flex items-center gap-3">
        <span className="w-6 h-px bg-[#c9a84c]" />
        <h3 className="text-lg font-bold">{text}</h3>
      </div>
      <span className="text-xs font-mono text-white/40">{count} entries</span>
    </div>
  );
}
