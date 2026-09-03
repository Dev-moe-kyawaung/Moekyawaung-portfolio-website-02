import { useState } from "react";
import { showreelVideos, galleryImages } from "../data";
import SectionHeader from "./SectionHeader";

export default function Showreel() {
  const [active, setActive] = useState(0);
  return (
    <section id="showreel" className="relative py-24 sm:py-32 bg-[#07090f]">
      <div className="absolute inset-0 bg-grid opacity-30" />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6">
        <SectionHeader
          label="Motion Reel"
          title={<>Showreel <span className="text-gradient-gold">2026.</span></>}
          subtitle="Product demos, launch clips, motion & UI kinetics from shipped apps."
        />

        <div className="mt-16 grid lg:grid-cols-5 gap-6">
          <div className="lg:col-span-3 relative rounded-3xl overflow-hidden border border-white/5 glass">
            <video
              key={active}
              src={showreelVideos[active]}
              autoPlay
              muted
              loop
              playsInline
              className="w-full h-full aspect-video object-cover"
            />
            <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between">
              <div className="glass rounded-xl px-3 py-2">
                <div className="text-[10px] uppercase tracking-widest text-white/60">Playing</div>
                <div className="text-sm font-bold">Reel #{active + 1}</div>
              </div>
              <div className="glass rounded-xl px-3 py-2 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse" />
                <span className="text-xs font-mono">LIVE</span>
              </div>
            </div>
          </div>
          <div className="lg:col-span-2 grid grid-cols-2 gap-3 max-h-[500px] overflow-y-auto pr-2">
            {showreelVideos.map((v, i) => (
              <button
                key={v}
                onClick={() => setActive(i)}
                className={`relative rounded-2xl overflow-hidden border transition-all ${
                  i === active ? "border-[#c9a84c] scale-[1.02]" : "border-white/5 hover:border-white/20"
                }`}
              >
                <video src={v} muted playsInline className="w-full aspect-video object-cover" />
                <div className="absolute inset-0 bg-black/40 grid place-items-center">
                  <span className="text-2xl">{i === active ? "▶" : "▷"}</span>
                </div>
              </button>
            ))}
          </div>
        </div>

        {/* Gallery mosaic */}
        <div className="mt-20">
          <div className="flex items-end justify-between mb-6">
            <div>
              <div className="text-xs uppercase tracking-[0.35em] text-[#e4c96a] font-bold">Visual Archive</div>
              <h3 className="mt-2 text-3xl font-black">Selected Frames</h3>
            </div>
            <span className="text-xs font-mono text-white/40">{galleryImages.length} assets</span>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-3">
            {galleryImages.map((g, i) => (
              <div
                key={g}
                className={`relative rounded-2xl overflow-hidden border border-white/5 group ${
                  i % 7 === 0 ? "row-span-2 col-span-2" : ""
                }`}
              >
                <img
                  src={g}
                  alt=""
                  loading="lazy"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                <div className="absolute bottom-2 left-2 text-[10px] font-mono text-white/70 opacity-0 group-hover:opacity-100">
                  MKA · {String(i + 1).padStart(3, "0")}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
