import Image from "next/image";

const projects = [
  {
    number: "01",
    name: "Distributed Job Scheduler",
    description:
      "Decouples job submission from execution — async processing at scale with at-least-once delivery via Redis Streams, retry logic, dead-letter queue, and webhook callbacks. Deployed on Kubernetes with KEDA autoscaling and Prometheus + Grafana observability.",
    tech: ["Go", "Redis Streams", "PostgreSQL", "Kubernetes", "KEDA", "Prometheus", "Docker"],
    github: "https://github.com/aditya-130103/distributed-job-scheduler",
    live: "",
    accent: "#6366f1",
    image: "/projects/scheduler.png",
  },
  {
    number: "02",
    name: "k8sapi.dev",
    description:
      "Searchable Kubernetes API reference — Go backend parses the live K8s OpenAPI spec across 80+ resource groups, generates example YAML for each resource, and auto-refreshes daily without downtime.",
    tech: ["Go", "Next.js", "TypeScript", "Docker"],
    github: "https://github.com/aditya-130103/k8sapi.dev",
    live: "https://k8sapi-dev.vercel.app",
    accent: "#06b6d4",
    image: "/projects/k8sapi.png",
  },
  {
    number: "03",
    name: "Consistent Hashing Simulator",
    description:
      "CLI simulator showing how consistent hashing minimises key movement when nodes join or leave — visualises redistribution across virtual nodes vs naive modulo hashing. Same principle used by Redis Cluster and Cassandra.",
    tech: ["Go", "MurmurHash3"],
    github: "https://github.com/aditya-130103/Consistent-Hashing",
    live: "",
    accent: "#8b5cf6",
    image: "/projects/hashing.png",
  },
  {
    number: "04",
    name: "DALL-E Clone",
    description:
      "Community AI image generation platform — generates images from text prompts, compresses server-side, and stores via Cloudinary for fast delivery. Users browse and share a community gallery.",
    tech: ["Node.js", "MongoDB", "Express", "React", "OpenAI API", "Cloudinary"],
    github: "https://github.com/aditya-130103/Dall-E",
    live: "",
    accent: "#f59e0b",
    image: "/projects/dalle.png",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="relative">
      {/* background orb */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full opacity-5"
        style={{ background: "radial-gradient(circle, #6366f1, transparent)", filter: "blur(80px)", pointerEvents: "none" }} />

      <div className="relative max-w-6xl mx-auto px-6">
        <div className="inline-flex items-center gap-2 pill mb-4">Projects</div>
        <h2 className="text-3xl md:text-5xl font-bold mb-4">
          <span className="gradient-text">Things I&apos;ve Built</span>
        </h2>
        <p className="text-[#666] mb-12 max-w-xl">
          Side projects built to learn, explore distributed systems concepts, and demonstrate backend engineering depth.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.map((p) => (
            <div key={p.number}
              className="glow-card shimmer-border flex flex-col group overflow-hidden">
              {/* image */}
              <div className="relative w-full h-48 overflow-hidden">
                <Image
                  src={p.image}
                  alt={p.name}
                  fill
                  className="object-cover object-top group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-transparent to-transparent" />
                {/* links on hover */}
                <div className="absolute top-3 right-3 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                  {p.github && (
                    <a href={p.github} target="_blank" rel="noreferrer"
                      className="text-xs text-white bg-black/70 backdrop-blur border border-white/20 hover:border-white/50 px-3 py-1 rounded-full transition-colors">
                      GitHub ↗
                    </a>
                  )}
                  {p.live && (
                    <a href={p.live} target="_blank" rel="noreferrer"
                      className="text-xs text-black font-semibold px-3 py-1 rounded-full transition-colors"
                      style={{ background: p.accent }}>
                      Live ↗
                    </a>
                  )}
                </div>
              </div>

              {/* content */}
              <div className="p-6 flex flex-col flex-1">
                <span className="text-xs font-bold tracking-widest mb-2" style={{ color: p.accent }}>
                  {p.number}
                </span>
                <h3 className="text-white text-lg font-semibold mb-2">{p.name}</h3>
                <p className="text-[#777] text-sm leading-relaxed mb-4 flex-1">{p.description}</p>
                <div className="flex flex-wrap gap-2">
                  {p.tech.map((t) => (
                    <span key={t}
                      className="text-xs text-[#888] bg-white/5 px-2.5 py-1 rounded-full border border-white/8 hover:border-white/20 transition-colors">
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* other projects */}
        <div className="mt-8 glow-card p-6">
          <p className="text-[#666] text-sm mb-3">Other noteworthy projects</p>
          <div className="flex flex-wrap gap-3">
            {[
              { name: "URL Shortener", tech: "Go · Redis · Postgres", href: "https://github.com/aditya-130103/URL-Shortener" },
              { name: "Blog Application", tech: "Node.js · MongoDB", href: "https://github.com/aditya-130103/Blog-Application" },
              { name: "Budget Manager", tech: "React · Node.js", href: "https://github.com/aditya-130103/budget-manager" },
              { name: "Snake Game", tech: "HTML · JS", href: "https://github.com/aditya-130103/snake-game" },
            ].map((p) => (
              <a key={p.name} href={p.href} target="_blank" rel="noreferrer"
                className="flex items-center gap-2 bg-white/3 border border-white/8 hover:border-[#6366f1]/40 px-4 py-2 rounded-full transition-all duration-200 group">
                <span className="text-sm text-white group-hover:text-[#a5b4fc] transition-colors">{p.name}</span>
                <span className="text-xs text-[#555]">{p.tech}</span>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
