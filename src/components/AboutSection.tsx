const specialties = [
  {
    title: "AI Product Strategy",
    description:
      "Defining roadmaps for RAG systems, LLM orchestration pipelines, and agentic AI platforms in HealthTech and SaaS.",
  },
  {
    title: "Stakeholder Alignment",
    description:
      "Bridging the gap between executive stakeholders and engineering teams to deliver high-impact product outcomes.",
  },
  {
    title: "Technical Recruitment",
    description:
      "8 years sourcing and evaluating top engineering talent across India's leading tech hubs—Bangalore, Hyderabad, Chennai.",
  },
];

const AboutSection = () => {
  return (
    <section id="about" className="border-t border-border py-24">
      <div className="container mx-auto px-6">
        <h2 className="mb-4 font-heading text-3xl font-bold text-foreground">
          About Me
        </h2>
        <p className="mb-16 max-w-3xl text-base leading-relaxed text-muted-foreground">
          A results-driven AI Product Manager blending 8 years of IT recruitment
          expertise with technical proficiency in RAG systems and LLM
          orchestration. I specialize in bridging the gap between stakeholder
          requirements and engineering execution, with a dedicated focus on
          building high-impact, localized AI solutions for the South Indian
          HealthTech and SaaS markets.
        </p>

        <h3 className="mb-8 font-heading text-xl font-semibold text-foreground">
          Specialties
        </h3>
        <div className="grid gap-6 md:grid-cols-3">
          {specialties.map((s) => (
            <div
              key={s.title}
              className="rounded-xl border border-border bg-card p-6 transition-colors hover:border-primary/40"
            >
              <h4 className="mb-2 font-heading text-lg font-semibold text-foreground">
                {s.title}
              </h4>
              <p className="text-sm leading-relaxed text-muted-foreground">
                {s.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
