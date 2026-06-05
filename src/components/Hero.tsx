const socialLinks = [
  { label: "GitHub", href: "https://github.com/limgwei-123" },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/g-wei-lim-1385a8204" },
  {
    label: "Resume",
    href: "/Lim_G_Wei_Resume.pdf",
    download: "Lim_G_Wei_Resume.pdf",
  },
];

export function Hero() {
  return (
    <section
      id="home"
      className="border-b border-white/10 bg-[radial-gradient(circle_at_top_right,rgba(88,166,255,0.18),transparent_34%),linear-gradient(180deg,#07111f_0%,#0b1728_100%)]"
    >
      <div className="section-shell grid min-h-[calc(100vh-73px)] items-center gap-12 py-20 lg:grid-cols-[1.2fr_0.8fr]">
        <div>
          <p className="section-label">AI Application Developer</p>
          <h1 className="mt-5 max-w-4xl text-5xl font-bold tracking-normal text-white sm:text-6xl lg:text-7xl">
            Lim G Wei
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-300 sm:text-xl">
            I build practical AI-powered applications that combine backend
            engineering, machine learning, LLM integration, and real-world workflows.
          </p>

          <div className="mt-9 flex flex-wrap gap-3">
            <a
              href="#projects"
              className="rounded-md bg-skyline px-5 py-3 text-sm font-bold text-navy-950 shadow-soft transition hover:bg-blue-300"
            >
              View Projects
            </a>
            {socialLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target={link.href.startsWith("http") ? "_blank" : undefined}
                rel={link.href.startsWith("http") ? "noreferrer" : undefined}
                download={link.download}
                className="rounded-md border border-white/15 px-5 py-3 text-sm font-semibold text-white transition hover:border-skyline hover:text-skyline"
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>

        <div className="rounded-lg border border-white/10 bg-white/[0.04] p-6 shadow-soft">
          <div className="grid gap-4">
            <div className="rounded-md border border-white/10 bg-navy-900 p-5">
              <p className="text-sm font-semibold text-skyline">Primary Focus</p>
              <p className="mt-2 text-2xl font-bold text-white">
                Backend-first AI products
              </p>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="rounded-md border border-white/10 bg-navy-900 p-4">
                <p className="text-3xl font-bold text-white">LLM</p>
                <p className="mt-1 text-sm text-slate-400">Integration</p>
              </div>
              <div className="rounded-md border border-white/10 bg-navy-900 p-4">
                <p className="text-3xl font-bold text-white">ML</p>
                <p className="mt-1 text-sm text-slate-400">Evaluation</p>
              </div>
              <div className="rounded-md border border-white/10 bg-navy-900 p-4">
                <p className="text-3xl font-bold text-white">API</p>
                <p className="mt-1 text-sm text-slate-400">Engineering</p>
              </div>
              <div className="rounded-md border border-white/10 bg-navy-900 p-4">
                <p className="text-3xl font-bold text-white">CV</p>
                <p className="mt-1 text-sm text-slate-400">Research</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
