import { startupExperiments } from "../data";
import SectionHeader from "./SectionHeader";

const growthMetrics = [
  { l: "Total downloads", v: "5.2M+", d: "across shipped apps" },
  { l: "Waitlist signups", v: "12K", d: "MoekyawTranslator" },
  { l: "Paying merchants", v: "1,200", d: "POS Ultimate" },
  { l: "MAU (peak)", v: "410K", d: "Daily Planner" },
];

export default function Startups() {
  return (
    <section id="startups" className="relative py-24 sm:py-32 bg-[#07090f] overflow-hidden">
      <div className="absolute inset-0 bg-grid opacity-30" />
      <div className="absolute -top-40 -right-40 w-[500px] h-[500px] rounded-full bg-[#3ddc84]/10 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6">
        <SectionHeader
          label="Startup Founder"
          title={<>I don't just code —<br /><span className="text-gradient-mint">I ship startups.</span></>}
          subtitle="From MVP to revenue. Every experiment below shipped, measured, and iterated in public."
        />

        {/* Growth metrics */}
        <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {growthMetrics.map((g) => (
            <div key={g.l} className="relative glass rounded-3xl p-6 border border-white/5 overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-[#3ddc84]/10 to-transparent opacity-60" />
              <div className="relative">
                <div className="text-4xl font-black text-gradient-mint">{g.v}</div>
                <div className="text-sm font-semibold mt-2">{g.l}</div>
                <div className="text-xs text-white/40 mt-1">{g.d}</div>
              </div>
            </div>
          ))}
        </div>

        {/* Startup cards */}
        <div className="mt-16 grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {startupExperiments.map((s) => (
            <div key={s.name} className="glass rounded-3xl p-6 border border-white/5 card-hover">
              <div className="flex items-center justify-between">
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-[#3ddc84]/25 to-[#7f52ff]/25 grid place-items-center text-2xl">
                  {s.icon}
                </div>
                <span
                  className={`text-[10px] font-bold px-2.5 py-1 rounded-full ${
                    s.stage === "Live"
                      ? "bg-[#3ddc84]/20 text-[#3ddc84]"
                      : s.stage === "Beta"
                      ? "bg-[#c9a84c]/20 text-[#e4c96a]"
                      : "bg-[#7f52ff]/20 text-[#a78bfa]"
                  }`}
                >
                  {s.stage.toUpperCase()}
                </span>
              </div>
              <h3 className="mt-5 text-xl font-bold">{s.name}</h3>
              <p className="mt-2 text-sm text-white/60 leading-relaxed">{s.desc}</p>
              <div className="mt-4 pt-4 border-t border-white/5 flex items-center justify-between">
                <div>
                  <div className="text-[10px] uppercase tracking-widest text-white/40">Growth</div>
                  <div className="text-sm font-bold text-[#e4c96a]">{s.growth}</div>
                </div>
                <button className="text-xs text-white/50 hover:text-[#e4c96a] transition-colors">
                  Case study →
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* MVP process */}
        <MVPProcess />
      </div>
    </section>
  );
}

function MVPProcess() {
  const steps = [
    { n: "01", t: "Discovery", d: "1 week · user interviews, competitor scan, JTBD framework." },
    { n: "02", t: "Design", d: "1 week · Figma prototype, design system, user flows." },
    { n: "03", t: "Build", d: "4–6 weeks · Kotlin + Compose + Firebase, weekly demos." },
    { n: "04", t: "Ship", d: "1 week · Play Console rollout, Firebase remote config, launch." },
    { n: "05", t: "Learn", d: "Ongoing · Amplitude / Firebase A/B tests, weekly reviews." },
  ];
  return (
    <div className="mt-20">
      <div className="text-center">
        <div className="text-xs uppercase tracking-[0.35em] text-[#e4c96a] font-bold">MVP Playbook</div>
        <h3 className="mt-3 text-3xl sm:text-4xl font-black">Idea → Play Store in <span className="text-gradient-gold">8 weeks</span></h3>
      </div>
      <div className="mt-10 relative">
        <div className="hidden md:block absolute top-16 left-8 right-8 h-px bg-gradient-to-r from-transparent via-[#c9a84c]/40 to-transparent" />
        <div className="grid md:grid-cols-5 gap-4">
          {steps.map((s) => (
            <div key={s.n} className="relative glass rounded-2xl p-5 border border-white/5">
              <div className="w-10 h-10 rounded-xl bg-[#c9a84c] text-black grid place-items-center font-black">
                {s.n}
              </div>
              <div className="mt-4 font-bold">{s.t}</div>
              <div className="mt-1 text-xs text-white/50 leading-relaxed">{s.d}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
