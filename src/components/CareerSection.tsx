const timeline = [
  {
    period: "2025 – Present",
    title: "AI Product Manager",
    description: "Building Agentic & HealthTech Solutions.",
  },
  {
    period: "2016 – 2025",
    title: "Senior Tech Ecosystem Expert",
    description: "Strategic stakeholder management and organizational design within South Indian tech hubs.",
  },
];

const CareerSection = () => {
  return (
    <section id="career" className="border-t border-border py-24">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full border border-primary/20 bg-primary/5 text-primary text-sm font-medium mb-4">
            Career
          </span>
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-4">
            Professional Journey
          </h2>
        </div>

        <div className="max-w-2xl mx-auto relative">
          {/* Vertical line */}
          <div className="absolute left-4 top-0 bottom-0 w-px bg-border md:left-1/2 md:-translate-x-px" />

          <div className="space-y-12">
            {timeline.map((item, idx) => (
              <div key={idx} className="relative pl-12 md:pl-0 md:grid md:grid-cols-2 md:gap-8">
                {/* Dot */}
                <div className="absolute left-2.5 top-1 h-3 w-3 rounded-full border-2 border-primary bg-background md:left-1/2 md:-translate-x-1.5" />

                {/* Left (period) */}
                <div className="hidden md:flex md:justify-end md:pr-8">
                  <span className="font-heading text-sm font-semibold text-primary">{item.period}</span>
                </div>

                {/* Right (content) */}
                <div className="md:pl-8">
                  <span className="font-heading text-sm font-semibold text-primary md:hidden">{item.period}</span>
                  <h3 className="font-heading text-lg font-bold text-foreground mt-1 md:mt-0">{item.title}</h3>
                  <p className="text-sm text-muted-foreground mt-1">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CareerSection;
