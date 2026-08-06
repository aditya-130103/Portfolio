"use client";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-16 dot-grid overflow-hidden">
      <div className="orb orb-1" />
      <div className="orb orb-2" />
      <div className="orb orb-3" />

      <div className="relative max-w-4xl mx-auto px-6 py-24 z-10 text-center">
        <div className="pill mb-8 inline-flex fade-in-up fade-in-up-delay-1">
          <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
          Available for opportunities · SAP Labs India
        </div>

        <h1 className="text-6xl md:text-8xl font-bold leading-none mb-6 fade-in-up fade-in-up-delay-2">
          <span className="text-white">Aditya</span>
          <br />
          <span className="gradient-text">Mullapudi</span>
        </h1>

        <p className="text-[#888] text-lg md:text-xl max-w-2xl mx-auto mb-10 leading-relaxed fade-in-up fade-in-up-delay-3">
          Backend & platform engineer — building distributed systems in{" "}
          <span className="text-[#a5b4fc]">Go</span>, cloud infrastructure with{" "}
          <span className="text-[#a5b4fc]">Crossplane & Kubernetes</span>, and open-source tools.
        </p>

        <div className="flex flex-wrap justify-center gap-4 mb-14 fade-in-up fade-in-up-delay-4">
          <a href="#projects"
            className="group bg-[#6366f1] text-white px-7 py-3.5 rounded-full text-sm font-semibold hover:bg-[#4f52d1] transition-all duration-200 hover:shadow-xl hover:shadow-indigo-500/30 flex items-center gap-2">
            View Projects
            <span className="group-hover:translate-x-1 transition-transform duration-200">→</span>
          </a>
          <a href="#contact"
            className="border border-white/10 text-white px-7 py-3.5 rounded-full text-sm font-semibold hover:border-[#6366f1]/50 hover:bg-[#6366f1]/5 transition-all duration-200">
            Get in Touch
          </a>
        </div>

        {/* stats row */}
        <div className="flex flex-wrap justify-center gap-10 mb-12 fade-in-up fade-in-up-delay-4">
          {[
            { value: "2+", label: "Years at SAP Labs" },
            { value: "20+", label: "Crossplane Compositions" },
            { value: "500+", label: "LeetCode Problems" },
            { value: "Top 15%", label: "Global Rank" },
          ].map((s) => (
            <div key={s.label} className="text-center">
              <p className="text-2xl font-bold text-white">{s.value}</p>
              <p className="text-xs text-[#555] mt-1">{s.label}</p>
            </div>
          ))}
        </div>

        <div className="flex justify-center gap-8 fade-in-up fade-in-up-delay-4">
          {[
            { label: "GitHub", href: "https://github.com/aditya-130103" },
            { label: "LinkedIn", href: "https://www.linkedin.com/in/aditya-mullapudi-816355201" },
            { label: "LeetCode", href: "https://leetcode.com/aditya_mullapudi/" },
          ].map((l) => (
            <a key={l.label} href={l.href} target="_blank" rel="noreferrer"
              className="text-sm text-[#555] hover:text-white transition-colors duration-200">
              {l.label} ↗
            </a>
          ))}
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#050505] to-transparent pointer-events-none" />
    </section>
  );
}
