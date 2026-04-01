import { Target, Workflow, Globe } from "lucide-react";

const cards = [
  {
    icon: <Target className="h-6 w-6" />,
    title: "Problem-First Mapping",
    description: "Moving beyond features to solve core user pain points.",
  },
  {
    icon: <Workflow className="h-6 w-6" />,
    title: "Agentic Orchestration",
    description: "Designing autonomous workflows (CrewAI/n8n) for business ROI.",
  },
  {
    icon: <Globe className="h-6 w-6" />,
    title: "Vernacular UI/UX",
    description: "Optimizing AI for the next billion users (South Indian language integration).",
  },
];

const ProductThinkingSection = () => {
  return (
    <section className="border-t border-border py-24">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full border border-primary/20 bg-primary/5 text-primary text-sm font-medium mb-4">
            Product Thinking
          </span>
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-4">
            The Differentiator
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            A framework-driven approach to building AI products that deliver measurable business outcomes.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-3">
          {cards.map((card) => (
            <div
              key={card.title}
              className="group relative rounded-2xl border border-border/50 bg-card/40 backdrop-blur-md p-8 transition-all duration-300 hover:border-primary/30 hover:shadow-[0_0_30px_-10px_hsl(var(--primary)/0.15)] hover:scale-[1.03]"
            >
              {/* Glassmorphism inner glow */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="relative">
                <div className="mb-4 inline-flex rounded-lg bg-primary/10 p-3 text-primary">
                  {card.icon}
                </div>
                <h3 className="mb-2 font-heading text-lg font-semibold text-foreground">
                  {card.title}
                </h3>
                <p className="text-sm leading-relaxed text-muted-foreground">
                  {card.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductThinkingSection;
