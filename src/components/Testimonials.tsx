import { testimonials } from "../data";
import SectionHeader from "./SectionHeader";

export default function Testimonials() {
  return (
    <section className="relative py-24 sm:py-32">
      <div className="absolute inset-0 bg-dots opacity-20" />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6">
        <SectionHeader
          label="Testimonials"
          title={<>Trusted by <span className="text-gradient-gold">founders & teams.</span></>}
        />

        <div className="mt-16 grid md:grid-cols-2 gap-6">
          {testimonials.map((t, i) => (
            <div key={i} className="glass rounded-3xl p-7 border border-white/5 card-hover">
              <div className="text-4xl text-[#c9a84c] leading-none">"</div>
              <p className="mt-4 text-lg text-white/80 leading-relaxed italic">{t.quote}</p>
              <div className="mt-6 flex items-center gap-4 pt-6 border-t border-white/5">
                <img src={t.avatar} alt={t.name} className="w-12 h-12 rounded-full object-cover ring-1 ring-white/10" />
                <div>
                  <div className="font-bold">{t.name}</div>
                  <div className="text-xs text-white/50">{t.role}</div>
                </div>
                <div className="ml-auto text-[#c9a84c]">★★★★★</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
