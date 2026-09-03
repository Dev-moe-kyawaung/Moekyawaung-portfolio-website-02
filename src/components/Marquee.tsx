const items = [
  "Kotlin", "Jetpack Compose", "Clean Architecture", "MVVM", "MVI",
  "Multi-module", "Hilt", "Coroutines", "Flow", "Firebase",
  "Retrofit", "Room", "GitHub Actions", "Fastlane", "TFLite",
  "Claude API", "Ethical Hacking", "OWASP MASVS", "Kali Linux", "Python",
];

export default function Marquee() {
  return (
    <section className="relative py-10 border-y border-white/5 bg-[#0a0d16] overflow-hidden">
      <div className="flex whitespace-nowrap animate-marquee">
        {[...items, ...items].map((it, i) => (
          <div key={i} className="flex items-center gap-6 px-8">
            <span className="text-2xl md:text-3xl font-black text-white/20 hover:text-[#e4c96a] transition-colors">
              {it}
            </span>
            <span className="text-[#c9a84c]/40">✦</span>
          </div>
        ))}
      </div>
    </section>
  );
}
