const AboutSection = () => {
  return (
    <section id="about" className="border-t border-border py-24">
      <div className="container mx-auto px-6">
        <span className="inline-block px-4 py-1.5 rounded-full border border-primary/20 bg-primary/5 text-primary text-sm font-medium mb-4">
          About Me
        </span>
        <h2 className="mb-6 font-heading text-3xl font-bold text-foreground md:text-4xl">
          Strategic Vision, Technical Execution
        </h2>
        <p className="max-w-3xl text-base leading-relaxed text-muted-foreground">
          A results-driven AI Product Manager blending nearly a decade of tech
          market intelligence with hands-on AI product architecture. I specialize
          in identifying high-value business problems and translating them into
          scalable agentic solutions. My background in technical talent strategy
          gives me a unique edge in leading cross-functional teams and managing
          complex stakeholder expectations.
        </p>
      </div>
    </section>
  );
};

export default AboutSection;
