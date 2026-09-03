import SectionHeader from "./SectionHeader";

const layers = [
  { t: "Transport", d: "TLS 1.3 · SSL Pinning · Certificate Transparency", icon: "🔒" },
  { t: "Data at rest", d: "EncryptedSharedPrefs · Android Keystore · SQLCipher", icon: "🗄️" },
  { t: "Authentication", d: "OAuth2 · Biometrics · Session rotation", icon: "🔑" },
  { t: "Code protection", d: "R8 · Obfuscation · String encryption · Anti-tamper", icon: "🛡️" },
  { t: "Runtime", d: "Root / emulator detection · Frida hook guards", icon: "🚨" },
  { t: "Compliance", d: "OWASP MASVS L2 · GDPR · Play data safety", icon: "📜" },
];

const testStrategy = [
  { l: "Unit tests", v: "3,200+", d: "JUnit · MockK · Turbine", pct: 95 },
  { l: "Integration", v: "620+", d: "Robolectric · Room in-memory", pct: 82 },
  { l: "UI tests", v: "480+", d: "Espresso · Compose UI test", pct: 74 },
  { l: "Screenshot", v: "1,100+", d: "Paparazzi · Roborazzi goldens", pct: 88 },
  { l: "E2E", v: "60+", d: "Maestro flows on real devices", pct: 66 },
];

export default function Security() {
  return (
    <section className="relative py-24 sm:py-32 bg-[#07090f] overflow-hidden">
      <div className="absolute inset-0 bg-grid opacity-30" />
      <div className="absolute -top-40 -left-40 w-[500px] h-[500px] rounded-full bg-[#3ddc84]/10 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6">
        <SectionHeader
          label="Security & Testing"
          title={<>Hardened. Tested. <span className="text-gradient-gold">Shipped.</span></>}
          subtitle="OWASP MASVS L2, defense-in-depth, and a test pyramid that actually holds weight."
        />

        <div className="mt-16 grid lg:grid-cols-2 gap-6">
          {/* Security layers */}
          <div className="glass rounded-3xl p-7 border border-white/5">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-2xl bg-[#3ddc84]/15 grid place-items-center text-2xl">🛡️</div>
              <div>
                <h3 className="text-xl font-bold">Security Layers</h3>
                <div className="text-xs text-white/50">6-layer defense · OWASP MASVS L2</div>
              </div>
            </div>
            <div className="mt-6 space-y-2">
              {layers.map((l, i) => (
                <div key={l.t} className="flex items-start gap-3 p-3 rounded-xl bg-black/30 border border-white/5 hover:border-[#3ddc84]/40 transition-colors">
                  <div className="w-9 h-9 rounded-lg bg-[#3ddc84]/15 grid place-items-center text-base shrink-0">
                    {l.icon}
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2">
                      <span className="text-[10px] font-mono text-white/40">L{i + 1}</span>
                      <span className="font-bold text-sm">{l.t}</span>
                    </div>
                    <div className="text-xs text-white/50 mt-0.5">{l.d}</div>
                  </div>
                  <div className="text-[10px] px-2 py-1 rounded-md bg-[#3ddc84]/15 text-[#3ddc84] font-mono">
                    ✓ ENABLED
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Test pyramid */}
          <div className="glass rounded-3xl p-7 border border-white/5">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-2xl bg-[#c9a84c]/15 grid place-items-center text-2xl">🧪</div>
              <div>
                <h3 className="text-xl font-bold">Testing Strategy</h3>
                <div className="text-xs text-white/50">5,400+ tests · 92% overall coverage</div>
              </div>
            </div>
            <div className="mt-6 space-y-3">
              {testStrategy.map((t) => (
                <div key={t.l} className="rounded-xl bg-black/30 border border-white/5 p-4">
                  <div className="flex items-center justify-between mb-2">
                    <div>
                      <div className="font-bold text-sm">{t.l}</div>
                      <div className="text-xs text-white/50">{t.d}</div>
                    </div>
                    <div className="text-xl font-black text-[#e4c96a]">{t.v}</div>
                  </div>
                  <div className="h-1.5 bg-white/5 rounded-full overflow-hidden">
                    <div
                      className="h-full bg-gradient-to-r from-[#c9a84c] to-[#7f52ff] rounded-full"
                      style={{ width: `${t.pct}%` }}
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
