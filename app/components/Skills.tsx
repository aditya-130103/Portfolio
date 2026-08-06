const skills = [
  {
    category: "Languages",
    icon: "⚡",
    items: ["Go", "TypeScript", "JavaScript", "Python", "C++"],
  },
  {
    category: "Backend",
    icon: "🔧",
    items: ["REST APIs", "gRPC", "Redis Streams", "PostgreSQL", "MongoDB", "Node.js"],
  },
  {
    category: "Cloud & Infra",
    icon: "☁️",
    items: ["AWS", "Crossplane", "Kubernetes", "Docker", "GitHub Actions", "Prometheus", "Grafana", "Helm"],
  },
  {
    category: "Frontend",
    icon: "🎨",
    items: ["React", "Next.js", "Tailwind CSS"],
  },
];

export default function Skills() {
  return (
    <section id="skills" className="relative">
      <div className="max-w-6xl mx-auto px-6">
        <div className="inline-flex items-center gap-2 pill mb-4">Skills</div>
        <h2 className="text-3xl md:text-5xl font-bold mb-4">
          <span className="gradient-text">Tech Stack</span>
        </h2>
        <p className="text-[#666] mb-12 max-w-xl">
          Technologies I work with daily across backend engineering, cloud infrastructure, and platform tooling.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {skills.map((s, i) => (
            <div key={s.category}
              className="glow-card shimmer-border p-6"
              style={{ animationDelay: `${i * 0.1}s` }}>
              <div className="flex items-center gap-3 mb-5">
                <span className="text-2xl">{s.icon}</span>
                <h3 className="text-white font-semibold">{s.category}</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {s.items.map((item) => (
                  <span key={item}
                    className="text-xs text-[#aaa] bg-white/5 px-3 py-1.5 rounded-full border border-white/10 hover:border-white/40 hover:text-white hover:bg-white/10 transition-colors cursor-default">
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
