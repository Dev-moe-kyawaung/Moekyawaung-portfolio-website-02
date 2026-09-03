import { timeline } from "../data";
import SectionHeader from "./SectionHeader";

export default function Timeline() {
  return (
    <section className="relative py-24 sm:py-32">
      <div className="absolute inset-0 bg-dots opacity-20" />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6">
        <SectionHeader
          label="Journey"
          title={<>From Java rookie to<br /><span className="text-gradient-gold">Senior Architect.</span></>}
          subtitle="8 years shipping Android. This is the timeline."
        />

        <div className="mt-16 relative">
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-[#c9a84c]/60 to-transparent" />
          <div className="space-y-8">
            {timeline.map((t, i) => (
              <div
                key={t.year}
                className={`relative flex flex-col md:flex-row items-start md:items-center gap-6 ${
                  i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                }`}
              >
                <div className="hidden md:block flex-1" />
                <div className="absolute left-4 md:left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-[#c9a84c] shadow-lg shadow-[#c9a84c]/40 ring-4 ring-[#05060a]" />
                <div className="ml-12 md:ml-0 flex-1">
                  <div className="glass rounded-2xl p-6 border border-white/5 card-hover">
                    <div className="text-3xl font-black text-gradient-gold">{t.year}</div>
                    <h3 className="mt-2 text-lg font-bold">{t.title}</h3>
                    <p className="mt-1 text-sm text-white/60">{t.desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
