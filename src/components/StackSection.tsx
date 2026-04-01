import { Brain, Workflow, MessageSquare, Database, FileText, Map, Users, Search } from "lucide-react";

const aiStack = [
  { icon: <Brain className="h-5 w-5" />, label: "RAG Systems" },
  { icon: <Workflow className="h-5 w-5" />, label: "Agentic Workflows (CrewAI/n8n)" },
  { icon: <MessageSquare className="h-5 w-5" />, label: "LLM Prompt Engineering" },
  { icon: <Database className="h-5 w-5" />, label: "Vector Databases" },
];

const productStack = [
  { icon: <FileText className="h-5 w-5" />, label: "PRD Writing" },
  { icon: <Map className="h-5 w-5" />, label: "Roadmap Planning" },
  { icon: <Users className="h-5 w-5" />, label: "Stakeholder Management" },
  { icon: <Search className="h-5 w-5" />, label: "User Research" },
];

const StackSection = () => {
  return (
    <section className="border-t border-border py-24">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full border border-primary/20 bg-primary/5 text-primary text-sm font-medium mb-4">
            Capabilities
          </span>
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-4">
            AI Orchestration & Product Stack
          </h2>
        </div>

        <div className="grid gap-12 md:grid-cols-2 max-w-4xl mx-auto">
          {/* AI Stack */}
          <div>
            <h3 className="font-heading text-lg font-semibold text-foreground mb-6">AI Stack</h3>
            <div className="grid gap-4">
              {aiStack.map((item) => (
                <div
                  key={item.label}
                  className="flex items-center gap-4 rounded-xl border border-border/50 bg-card/40 backdrop-blur-md p-4 transition-all duration-300 hover:border-primary/30 hover:scale-[1.03]"
                >
                  <div className="rounded-lg bg-primary/10 p-2.5 text-primary">{item.icon}</div>
                  <span className="text-sm font-medium text-foreground">{item.label}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Product Stack */}
          <div>
            <h3 className="font-heading text-lg font-semibold text-foreground mb-6">Product Stack</h3>
            <div className="grid gap-4">
              {productStack.map((item) => (
                <div
                  key={item.label}
                  className="flex items-center gap-4 rounded-xl border border-border/50 bg-card/40 backdrop-blur-md p-4 transition-all duration-300 hover:border-primary/30 hover:scale-[1.03]"
                >
                  <div className="rounded-lg bg-primary/10 p-2.5 text-primary">{item.icon}</div>
                  <span className="text-sm font-medium text-foreground">{item.label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StackSection;
