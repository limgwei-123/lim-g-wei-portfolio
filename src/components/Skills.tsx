import { skillCategories } from "../data/skills";

export function Skills() {
  return (
    <section id="skills" className="border-y border-white/10 bg-navy-900">
      <div className="section-shell">
        <p className="section-label">Skills</p>
        <h2 className="section-title">Tools and technologies</h2>
        <p className="section-copy">
          A backend-oriented stack for building, integrating, testing, and deploying
          AI-enabled applications.
        </p>

        <div className="mt-10 grid gap-5 md:grid-cols-3">
          {skillCategories.map((category) => (
            <article
              key={category.category}
              className="rounded-lg border border-white/10 bg-white/[0.04] p-6"
            >
              <h3 className="text-xl font-bold text-white">{category.category}</h3>
              <div className="mt-5 flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <span
                    key={skill}
                    className="rounded-md border border-skyline/20 bg-skyline/10 px-3 py-2 text-sm font-medium text-slate-100"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
