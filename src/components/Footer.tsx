import { profile } from "../data";

export default function Footer() {
  return (
    <footer className="relative py-14 border-t border-white/5 bg-[#05060a]">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="grid md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-[#c9a84c] to-[#7f52ff] grid place-items-center text-black font-black">
                M
              </div>
              <div>
                <div className="font-bold">{profile.name}</div>
                <div className="text-xs text-white/50">Senior Android Architect</div>
              </div>
            </div>
            <p className="mt-4 text-xs text-white/50 leading-relaxed">
              Kotlin · Jetpack Compose · Clean Architecture · Multi-module ·
              CI/CD · Firebase · On-device ML · Cybersecurity.
            </p>
          </div>
          <div>
            <div className="text-xs uppercase tracking-widest text-[#e4c96a] font-bold">Navigate</div>
            <ul className="mt-4 space-y-2 text-sm text-white/60">
              {["Home", "About", "Architecture", "Apps", "Startups", "Contact"].map((l) => (
                <li key={l}>
                  <a href={`#${l.toLowerCase()}`} className="hover:text-[#e4c96a]">
                    {l}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <div className="text-xs uppercase tracking-widest text-[#e4c96a] font-bold">Reach out</div>
            <ul className="mt-4 space-y-2 text-sm text-white/60 break-all">
              <li><a href={`mailto:${profile.primaryEmail}`} className="hover:text-[#e4c96a]">{profile.primaryEmail}</a></li>
              <li className="font-mono">{profile.phones[0]}</li>
              <li>{profile.location}</li>
            </ul>
          </div>
          <div>
            <div className="text-xs uppercase tracking-widest text-[#e4c96a] font-bold">Status</div>
            <div className="mt-4 glass rounded-2xl p-4">
              <div className="flex items-center gap-2 text-sm">
                <span className="relative flex w-2 h-2">
                  <span className="absolute inline-flex h-full w-full rounded-full bg-[#3ddc84] opacity-75 animate-ping" />
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-[#3ddc84]" />
                </span>
                <span className="font-bold text-[#3ddc84]">Available</span>
              </div>
              <div className="mt-2 text-xs text-white/50">Taking 2 new engagements in Q1 2026.</div>
            </div>
          </div>
        </div>
        <div className="mt-10 pt-6 border-t border-white/5 flex flex-col sm:flex-row justify-between items-center gap-3 text-xs text-white/40">
          <div>© 2026 Moe Kyaw Aung · Built with Kotlin energy ⚡ React · Tailwind · Vite.</div>
          <div className="font-mono">v2026.1 · "Code with culture. Build with purpose."</div>
        </div>
      </div>
    </footer>
  );
}
