const experience = [
  {
    role: "Associate Developer",
    company: "SAP Labs India",
    period: "Jul 2024 – Present",
    current: true,
    points: [
      "Designed and shipped 20+ Crossplane compositions in Go for AWS services (IAM, S3, KMS, SQS, SNS, load balancers, Fortinet firewalls), consumed by platform teams via declarative self-service claims",
      "Rebuilt the SRE operations platform (Python, SAP UI5, Splunk) with VM lifecycle controls and Rundeck-based automation — reducing monitoring effort by 30% and manual intervention by 25%",
      "Built Claude-based AI review agents for the Crossplane PR workflow — automated coding standards checks so reviewers focus on architecture decisions",
      "Shipped two internal production applications (SAP Events portal and food booking system) in parallel with Crossplane work",
    ],
  },
  {
    role: "Full Stack Web Developer",
    company: "Exposys Data Labs",
    period: "May 2023 – Jul 2023",
    current: false,
    points: [
      "Built and deployed a full-stack web application using JavaScript, Node.js, and MongoDB within an 8-week development cycle",
    ],
  },
];

export default function Experience() {
  return (
    <section id="experience" className="relative">
      <div className="max-w-6xl mx-auto px-6">
        <div className="inline-flex items-center gap-2 pill mb-4">Experience</div>
        <h2 className="text-3xl md:text-5xl font-bold mb-12">
          <span className="gradient-text">Where I&apos;ve Worked</span>
        </h2>
        <div className="relative pl-6 flex flex-col gap-10">
          {/* vertical line */}
          <div className="timeline-line" />
          {experience.map((e) => (
            <div key={e.company} className="relative">
              {/* dot */}
              <div className="timeline-dot" />
              <div className="glow-card shimmer-border p-7 ml-6">
                <div className="flex items-start justify-between flex-wrap gap-3 mb-5">
                  <div>
                    <h3 className="text-white font-bold text-lg">{e.role}</h3>
                    <p className="text-[#6366f1] text-sm font-medium mt-0.5">{e.company}</p>
                  </div>
                  <div className="flex items-center gap-2">
                    {e.current && (
                      <span className="pill text-xs">
                        <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
                        Current
                      </span>
                    )}
                    <span className="text-[#555] text-sm">{e.period}</span>
                  </div>
                </div>
                <ul className="flex flex-col gap-3">
                  {e.points.map((point, i) => (
                    <li key={i} className="flex gap-3 text-[#888] text-sm leading-relaxed">
                      <span className="text-[#6366f1] shrink-0 mt-0.5">▸</span>
                      {point}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
