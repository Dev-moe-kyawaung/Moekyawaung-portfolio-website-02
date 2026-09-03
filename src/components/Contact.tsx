import { useState } from "react";
import { profile } from "../data";
import SectionHeader from "./SectionHeader";

export default function Contact() {
  const [sent, setSent] = useState(false);
  return (
    <section id="contact" className="relative py-24 sm:py-32 bg-[#07090f] overflow-hidden">
      <div className="absolute inset-0 bg-grid opacity-40" />
      <div className="absolute -top-40 left-1/2 -translate-x-1/2 w-[700px] h-[700px] rounded-full bg-[#c9a84c]/10 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6">
        <SectionHeader
          label="Contact"
          title={<>Let's build something<br /><span className="text-gradient-gold">people will love.</span></>}
          subtitle="MVP · Architecture audit · Fractional CTO · Full-time senior role — I reply within 24h."
          align="center"
        />

        <div className="mt-16 grid lg:grid-cols-5 gap-6">
          {/* Info */}
          <div className="lg:col-span-2 space-y-4">
            <div className="glass rounded-3xl p-7 border border-white/5">
              <div className="text-xs uppercase tracking-widest text-[#e4c96a] font-bold">Primary channel</div>
              <div className="mt-2 text-2xl font-bold break-all">{profile.primaryEmail}</div>
              <div className="mt-2 text-xs text-white/40">Replies within 24h · signed with PGP available on request</div>
              <a
                href={`mailto:${profile.primaryEmail}`}
                className="mt-5 inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-gradient-to-r from-[#c9a84c] to-[#e4c96a] text-black font-bold hover:scale-[1.02] transition-transform"
              >
                📧 Send Email
              </a>
            </div>
            <div className="glass rounded-3xl p-7 border border-white/5">
              <div className="text-xs uppercase tracking-widest text-[#e4c96a] font-bold">Phone</div>
              {profile.phones.map((p) => (
                <div key={p} className="mt-2 text-lg font-mono font-semibold">{p}</div>
              ))}
              <div className="mt-2 text-xs text-white/40">Myanmar / Thailand · GMT+7</div>
            </div>
            <div className="glass rounded-3xl p-7 border border-white/5">
              <div className="text-xs uppercase tracking-widest text-[#e4c96a] font-bold">Based in</div>
              <div className="mt-2 text-lg font-bold">Tachileik 🇲🇲 ↔ Bangkok 🇹🇭</div>
              <div className="mt-2 text-xs text-white/40">Remote-first · open to relocation for right role</div>
            </div>
          </div>

          {/* Form */}
          <form
            className="lg:col-span-3 glass rounded-3xl p-7 border border-white/5"
            onSubmit={(e) => {
              e.preventDefault();
              setSent(true);
              setTimeout(() => setSent(false), 4000);
            }}
          >
            <div className="grid sm:grid-cols-2 gap-4">
              <Field label="Your name" placeholder="Somchai T." />
              <Field label="Email" placeholder="you@company.com" type="email" />
            </div>
            <Field label="Company / role" placeholder="CTO at Cool Startup" />
            <div className="mt-4">
              <label className="text-xs uppercase tracking-widest text-white/50 font-bold">Project type</label>
              <div className="mt-2 flex flex-wrap gap-2">
                {["MVP", "Audit", "Modularization", "CI/CD", "Fractional CTO", "Full-time"].map((t) => (
                  <label
                    key={t}
                    className="cursor-pointer px-3 py-2 rounded-xl bg-black/30 border border-white/5 text-xs font-semibold hover:border-[#c9a84c]/50 hover:text-[#e4c96a]"
                  >
                    <input type="checkbox" className="hidden" />
                    {t}
                  </label>
                ))}
              </div>
            </div>
            <div className="mt-4">
              <label className="text-xs uppercase tracking-widest text-white/50 font-bold">Message</label>
              <textarea
                rows={6}
                placeholder="Tell me about the problem you're solving…"
                className="mt-2 w-full rounded-2xl bg-black/40 border border-white/10 focus:border-[#c9a84c] focus:outline-none px-4 py-3 text-sm resize-none"
              />
            </div>
            <button
              type="submit"
              className="mt-6 w-full inline-flex items-center justify-center gap-2 px-6 py-4 rounded-2xl bg-gradient-to-r from-[#c9a84c] to-[#e4c96a] text-black font-bold hover:scale-[1.01] transition-transform shadow-2xl shadow-[#c9a84c]/20"
            >
              {sent ? "✓ Message queued — I'll reply within 24h" : "Send Message →"}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}

function Field({ label, ...rest }: { label: string } & React.InputHTMLAttributes<HTMLInputElement>) {
  return (
    <div className="mt-4">
      <label className="text-xs uppercase tracking-widest text-white/50 font-bold">{label}</label>
      <input
        {...rest}
        className="mt-2 w-full rounded-2xl bg-black/40 border border-white/10 focus:border-[#c9a84c] focus:outline-none px-4 py-3 text-sm"
      />
    </div>
  );
}
