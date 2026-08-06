export default function Contact() {
  return (
    <section id="contact" className="relative overflow-hidden">
      {/* glow */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="w-[500px] h-[500px] rounded-full opacity-10"
          style={{ background: "radial-gradient(circle, #6366f1, transparent)", filter: "blur(80px)" }} />
      </div>

      <div className="relative max-w-6xl mx-auto px-6 text-center">
        <div className="inline-flex items-center gap-2 pill mb-6">Contact</div>
        <h2 className="text-4xl md:text-6xl font-bold mb-6">
          <span className="gradient-text">Let&apos;s Work Together</span>
        </h2>
        <p className="text-[#666] text-lg max-w-xl mx-auto mb-10 leading-relaxed">
          Open to backend, SWE, and platform engineering roles globally.
          Reach out — I&apos;d love to connect.
        </p>

        <a href="mailto:adityamullapudi9@gmail.com"
          className="inline-flex items-center gap-2 bg-[#6366f1] text-white px-8 py-4 rounded-full text-sm font-semibold hover:bg-[#4f52d1] transition-all duration-200 hover:shadow-2xl hover:shadow-indigo-500/30 hover:-translate-y-0.5 mb-12">
          adityamullapudi9@gmail.com
          <span>→</span>
        </a>

        <div className="flex justify-center gap-8">
          {[
            { label: "GitHub", href: "https://github.com/aditya-130103" },
            { label: "LinkedIn", href: "https://www.linkedin.com/in/aditya-mullapudi-816355201" },
            { label: "LeetCode", href: "https://leetcode.com/aditya_mullapudi/" },
          ].map((l) => (
            <a key={l.label} href={l.href} target="_blank" rel="noreferrer"
              className="text-[#555] hover:text-white text-sm transition-all duration-200 hover:tracking-wide">
              {l.label} ↗
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
