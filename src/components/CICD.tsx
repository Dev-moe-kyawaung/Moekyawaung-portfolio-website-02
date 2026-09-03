import SectionHeader from "./SectionHeader";

const pipeline = [
  { n: "Lint", t: "Detekt · ktlint · Android Lint", dur: "45s", ok: true },
  { n: "Build", t: "assembleDebug + configuration cache", dur: "2m 10s", ok: true },
  { n: "Unit", t: "3,200+ JUnit + MockK tests", dur: "1m 40s", ok: true },
  { n: "Screenshot", t: "Paparazzi · 1,100 goldens", dur: "1m 05s", ok: true },
  { n: "Instrumented", t: "Espresso + Compose UI on emulator matrix", dur: "3m 20s", ok: true },
  { n: "Bundle", t: "R8 + shrinkResources · Play Signing", dur: "1m 15s", ok: true },
  { n: "Deploy", t: "Play Console internal → beta rollout", dur: "40s", ok: true },
];

const yamlSnippet = `name: android-ci
on: [push, pull_request]

jobs:
  quality:
    runs-on: ubuntu-latest
    strategy:
      matrix:
        api: [26, 30, 34]
    steps:
      - uses: actions/checkout@v4
      - uses: gradle/actions/setup-gradle@v4
      - run: ./gradlew detekt lintDebug
      - run: ./gradlew testDebugUnitTest
      - run: ./gradlew verifyPaparazziDebug
      - name: Instrumented
        uses: reactivecircus/android-emulator-runner@v2
        with:
          api-level: \${{ matrix.api }}
          script: ./gradlew connectedDebugAndroidTest
      - run: ./gradlew bundleRelease
      - name: Play Console rollout
        uses: r0adkll/upload-google-play@v1
        with:
          track: internal
          releaseFile: app/build/outputs/bundle/release/*.aab`;

export default function CICD() {
  return (
    <section className="relative py-24 sm:py-32">
      <div className="absolute inset-0 bg-dots opacity-20" />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6">
        <SectionHeader
          label="CI/CD Pipeline"
          title={<>Ship 5× per week.<br /><span className="text-gradient-gold">Zero rollbacks.</span></>}
          subtitle="Every commit runs through a 7-stage matrix pipeline. This is my production GitHub Actions blueprint."
        />

        <div className="mt-16 grid lg:grid-cols-5 gap-6">
          {/* Pipeline visual */}
          <div className="lg:col-span-2 glass rounded-3xl p-6 border border-white/5">
            <div className="flex items-center justify-between mb-4">
              <div className="text-sm font-bold">android-ci · main</div>
              <div className="flex items-center gap-1.5 text-xs">
                <span className="w-2 h-2 rounded-full bg-[#3ddc84] animate-pulse" />
                <span className="text-[#3ddc84]">Passing</span>
              </div>
            </div>
            <div className="space-y-2">
              {pipeline.map((p, i) => (
                <div key={p.n} className="flex items-center gap-3 rounded-xl bg-black/30 border border-white/5 px-3 py-3">
                  <div className="w-8 h-8 rounded-lg bg-[#3ddc84]/15 grid place-items-center text-[#3ddc84]">
                    ✓
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2">
                      <span className="text-xs font-mono text-white/40">0{i + 1}</span>
                      <span className="text-sm font-bold">{p.n}</span>
                    </div>
                    <div className="text-[11px] text-white/50 truncate">{p.t}</div>
                  </div>
                  <div className="text-xs font-mono text-white/40">{p.dur}</div>
                </div>
              ))}
            </div>
            <div className="mt-4 pt-4 border-t border-white/5 flex items-center justify-between text-xs">
              <span className="text-white/50">Total pipeline</span>
              <span className="font-mono font-bold text-[#e4c96a]">10m 55s</span>
            </div>
          </div>

          {/* YAML code */}
          <div className="lg:col-span-3 glass rounded-3xl overflow-hidden border border-white/5">
            <div className="flex items-center gap-2 px-4 py-3 border-b border-white/5 bg-black/30">
              <div className="flex gap-1.5">
                <span className="w-3 h-3 rounded-full bg-[#ff5f57]" />
                <span className="w-3 h-3 rounded-full bg-[#febc2e]" />
                <span className="w-3 h-3 rounded-full bg-[#28c840]" />
              </div>
              <div className="ml-3 text-xs text-white/50 font-mono">.github/workflows/android-ci.yml</div>
              <span className="ml-auto text-[10px] uppercase tracking-widest text-[#c9a84c]">YAML</span>
            </div>
            <pre className="p-5 text-[12px] leading-relaxed font-mono overflow-x-auto">
              <code
                className="text-white/70"
                dangerouslySetInnerHTML={{ __html: highlightYaml(yamlSnippet) }}
              />
            </pre>
          </div>
        </div>
      </div>
    </section>
  );
}

function highlightYaml(code: string) {
  return code
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/(^|\n)(\s*[\w-]+):/g, `$1$2<span style="color:#e4c96a">:</span>`)
    .replace(/(name|on|jobs|runs-on|strategy|matrix|steps|with|uses|run)(<span)/g, `<span style="color:#7f52ff">$1</span>$2`)
    .replace(/("[^"]*")/g, `<span style="color:#3ddc84">$1</span>`)
    .replace(/(#[^\n]*)/g, `<span style="color:#4b5361">$1</span>`);
}
