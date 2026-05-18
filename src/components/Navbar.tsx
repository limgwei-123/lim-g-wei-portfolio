const navItems = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

export function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-navy-950/85 backdrop-blur">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-5 py-4 sm:px-6 lg:px-8">
        <a href="#home" className="text-sm font-bold uppercase tracking-[0.18em] text-white">
          Lim G Wei
        </a>

        <div className="hidden items-center gap-7 text-sm font-medium text-slate-300 sm:flex">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="transition hover:text-skyline"
            >
              {item.label}
            </a>
          ))}
        </div>

        <a
          href="mailto:limgwei24@gmail.com"
          className="rounded-md border border-skyline/50 px-3 py-2 text-sm font-semibold text-skyline transition hover:border-skyline hover:bg-skyline/10"
        >
          Email
        </a>
      </nav>
    </header>
  );
}
