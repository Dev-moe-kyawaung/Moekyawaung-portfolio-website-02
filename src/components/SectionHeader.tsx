import type { ReactNode } from "react";

export default function SectionHeader({
  label,
  title,
  subtitle,
  align = "left",
}: {
  label: string;
  title: ReactNode;
  subtitle?: ReactNode;
  align?: "left" | "center";
}) {
  return (
    <div className={align === "center" ? "text-center max-w-3xl mx-auto" : "max-w-3xl"}>
      <div className={`inline-flex items-center gap-3 ${align === "center" ? "justify-center" : ""}`}>
        <span className="w-8 h-px bg-[#c9a84c]" />
        <span className="text-xs uppercase tracking-[0.35em] text-[#e4c96a] font-bold">{label}</span>
        <span className="w-8 h-px bg-[#c9a84c]" />
      </div>
      <h2 className="mt-4 text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight leading-[1.05]">
        {title}
      </h2>
      {subtitle && <p className="mt-5 text-lg text-white/60 leading-relaxed">{subtitle}</p>}
    </div>
  );
}
