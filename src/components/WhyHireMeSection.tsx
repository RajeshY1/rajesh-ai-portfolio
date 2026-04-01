import { Zap, Rocket, MapPin } from "lucide-react";

const reasons = [
  {
    icon: <Zap className="h-6 w-6" />,
    text: "Unique blend of 'Market Intel' + 'Technical Execution'.",
  },
  {
    icon: <Rocket className="h-6 w-6" />,
    text: "Hands-on experience building production-ready AI prototypes.",
  },
  {
    icon: <MapPin className="h-6 w-6" />,
    text: "Deep understanding of the South Indian tech landscape and vernacular requirements.",
  },
];

const WhyHireMeSection = () => {
  return (
    <section className="border-t border-border py-24">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full border border-primary/20 bg-primary/5 text-primary text-sm font-medium mb-4">
            The Closer
          </span>
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-4">
            Why Hire Me
          </h2>
        </div>

        <div className="max-w-3xl mx-auto space-y-6">
          {reasons.map((r, idx) => (
            <div
              key={idx}
              className="flex items-start gap-5 rounded-xl border border-border/50 bg-card/40 backdrop-blur-md p-6 transition-all duration-300 hover:border-primary/30 hover:scale-[1.03]"
            >
              <div className="rounded-lg bg-primary/10 p-3 text-primary shrink-0">{r.icon}</div>
              <p className="text-foreground text-base leading-relaxed">{r.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyHireMeSection;
