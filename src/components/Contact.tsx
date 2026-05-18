const contactLinks = [
  { label: "Email", href: "mailto:limgwei24@gmail.com", value: "limgwei24@gmail.com" },
  { label: "GitHub", href: "https://github.com/limgwei-123", value: "github.com/limgwei-123" },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/g-wei-lim-1385a8204",
    value: "linkedin.com/in/g-wei-lim-1385a8204",
  },
];

export function Contact() {
  return (
    <section id="contact" className="border-y border-white/10 bg-navy-900">
      <div className="section-shell">
        <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
          <div>
            <p className="section-label">Contact</p>
            <h2 className="section-title">Let&apos;s connect</h2>
            <p className="section-copy">
              I am open to AI application, backend engineering, and ML engineering
              opportunities where practical product delivery matters.
            </p>
          </div>

          <div className="grid gap-4">
            {contactLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target={link.href.startsWith("http") ? "_blank" : undefined}
                rel={link.href.startsWith("http") ? "noreferrer" : undefined}
                className="rounded-lg border border-white/10 bg-white/[0.04] p-5 transition hover:border-skyline/60 hover:bg-white/[0.06]"
              >
                <p className="text-sm font-semibold text-skyline">{link.label}</p>
                <p className="mt-1 break-words text-lg font-semibold text-white">
                  {link.value}
                </p>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
