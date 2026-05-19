import { projects } from "../data/projects";

export function Projects() {
  return (
    <section id="projects" className="bg-navy-950">
      <div className="section-shell">
        <p className="section-label">Projects</p>
        <h2 className="section-title">Selected work</h2>
        <p className="section-copy">
          Project examples covering AI product development, backend systems,
          multimodal LLM usage, computer vision, and applied deep learning research.
        </p>

        <div className="mt-10 grid gap-6 lg:grid-cols-2">
          {projects.map((project) => (
            <article
              key={project.name}
              className="flex h-full flex-col rounded-lg border border-white/10 bg-navy-900 p-6 transition hover:-translate-y-1 hover:border-skyline/60 hover:shadow-soft"
            >
              <div>
                <p className="text-sm font-semibold text-skyline">{project.subtitle}</p>
                <h3 className="mt-3 text-2xl font-bold text-white">{project.name}</h3>
                <p className="mt-4 leading-7 text-slate-300">{project.description}</p>
              </div>

              <div className="mt-5 flex flex-wrap gap-2">
                {project.techStack.map((tech) => (
                  <span
                    key={tech}
                    className="rounded-md bg-white/[0.06] px-3 py-1.5 text-xs font-semibold text-slate-300"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {project.note ? (
                <p className="mt-5 rounded-md border border-white/10 bg-white/[0.04] p-4 text-sm leading-6 text-slate-400">
                  {project.note}
                </p>
              ) : null}

              <div className="mt-auto flex flex-wrap gap-3 pt-6">
                {project.liveDemo ? (
                  <a
                    href={project.liveDemo}
                    target="_blank"
                    rel="noreferrer"
                    className="rounded-md bg-white px-4 py-2 text-sm font-bold text-navy-950 transition hover:bg-sky-100"
                  >
                    Live Demo
                  </a>
                ) : null}
                {project.github ? (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noreferrer"
                    className="rounded-md border border-white/15 px-4 py-2 text-sm font-semibold text-white transition hover:border-skyline hover:text-skyline"
                  >
                    GitHub
                  </a>
                ) : null}
                {project.links?.map((link) => (
                  <a
                    key={link.href}
                    href={link.href}
                    target="_blank"
                    rel="noreferrer"
                    className="rounded-md border border-white/15 px-4 py-2 text-sm font-semibold text-white transition hover:border-skyline hover:text-skyline"
                  >
                    {link.label}
                  </a>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
