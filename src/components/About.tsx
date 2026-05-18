export function About() {
  return (
    <section id="about" className="bg-navy-950">
      <div className="section-shell">
        <p className="section-label">About</p>
        <h2 className="section-title">Building useful AI systems with solid backend foundations.</h2>
        <div className="mt-8 grid gap-6 lg:grid-cols-[1fr_1fr]">
          <p className="text-base leading-8 text-slate-300">
            I focus on practical AI application development, combining API design,
            database-backed workflows, authentication, deployment, and model integration
            into products that people can actually use.
          </p>
          <p className="text-base leading-8 text-slate-300">
            My project work spans LLM-powered task planning, multimodal education
            assistance, computer vision classification, and EEG-based deep learning
            research. I am especially interested in roles where backend engineering
            meets machine learning and real product constraints.
          </p>
        </div>
      </div>
    </section>
  );
}
