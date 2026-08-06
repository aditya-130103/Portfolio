export default function About() {
  return (
    <section id="about" className="relative">
      <div className="max-w-6xl mx-auto px-6">
        <div className="inline-flex items-center gap-2 pill mb-4">About</div>
        <h2 className="text-3xl md:text-5xl font-bold mb-12">
          <span className="gradient-text">A Bit About Me</span>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-start">
          <div className="flex flex-col gap-5 text-[#888] text-base leading-relaxed">
            <p>
              I&apos;m an Associate Developer at{" "}
              <span className="text-white font-medium">SAP Labs India</span>, where I build
              cloud infrastructure with Crossplane & Kubernetes and backend systems in Go.
              I graduated from{" "}
              <span className="text-white font-medium">NIT Silchar</span> with a CGPA of 9.37.
            </p>
            <p>
              Outside work I build distributed systems projects in Go — a job scheduler with
              Redis Streams and Kubernetes autoscaling, a consistent hashing simulator, and a
              live Kubernetes API reference tool. I&apos;m drawn to high-scale backend problems
              and want to work where engineering quality is taken seriously.
            </p>
            <p>Open to backend, SWE, and platform engineering roles globally.</p>
            <div className="flex gap-4 pt-2">
              <a href="mailto:adityamullapudi9@gmail.com"
                className="text-sm bg-[#6366f1] text-white px-5 py-2.5 rounded-full font-medium hover:bg-[#4f52d1] transition-all hover:shadow-lg hover:shadow-indigo-500/25">
                Email Me
              </a>
              <a href="https://www.linkedin.com/in/aditya-mullapudi-816355201" target="_blank" rel="noreferrer"
                className="text-sm border border-white/10 text-white px-5 py-2.5 rounded-full font-medium hover:border-white/30 transition-all">
                LinkedIn
              </a>
            </div>
          </div>

          <div className="flex flex-col gap-4">
            {/* coding stats */}
            <div className="glow-card p-6">
              <h3 className="text-white font-semibold mb-5 flex items-center gap-2">
                <span className="text-[#6366f1]">⚔</span> Competitive Programming
              </h3>
              <div className="flex flex-col gap-3">
                {[
                  { platform: "LeetCode", stat: "Top 15% · 500+ problems", color: "#f59e0b" },
                  { platform: "GATE 2024", stat: "AIR 4376 / 100,000+", color: "#6366f1" },
                  { platform: "CodeChef", stat: "3★ (1600+)", color: "#ef4444" },
                  { platform: "Codeforces", stat: "Pupil (1200+)", color: "#06b6d4" },
                  { platform: "GeeksforGeeks", stat: "Top 100 at institute", color: "#22c55e" },
                ].map((c) => (
                  <div key={c.platform} className="flex items-center justify-between py-2 border-b border-white/5 last:border-0">
                    <span className="text-sm text-[#888] flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full" style={{ background: c.color }} />
                      {c.platform}
                    </span>
                    <span className="text-sm text-white font-medium">{c.stat}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* education */}
            <div className="glow-card p-6">
              <h3 className="text-white font-semibold mb-4 flex items-center gap-2">
                <span className="text-[#6366f1]">🎓</span> Education
              </h3>
              <div>
                <p className="text-white text-sm font-medium">NIT Silchar</p>
                <p className="text-[#888] text-xs mt-0.5">B.Tech ECE · CGPA 9.37 · 2020–2024</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
