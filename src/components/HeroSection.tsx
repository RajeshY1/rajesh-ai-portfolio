import heroImg from "@/assets/hero-portrait.png";
import { Button } from "@/components/ui/button";
import { ArrowRight, Download } from "lucide-react";

const stats = [
  { value: "8+", label: "Years in IT & AI" },
  { value: "3", label: "AI Products Built" },
];

const HeroSection = () => {
  return (
    <section className="relative min-h-screen pt-16 overflow-hidden">
      {/* Subtle grid background */}
      <div className="absolute inset-0 opacity-[0.03]" style={{
        backgroundImage: 'linear-gradient(hsl(var(--foreground)) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--foreground)) 1px, transparent 1px)',
        backgroundSize: '60px 60px'
      }} />

      {/* Glow accent */}
      <div className="absolute -top-40 -right-40 h-[500px] w-[500px] rounded-full bg-primary/10 blur-[120px]" />

      <div className="container relative mx-auto grid min-h-[calc(100vh-4rem)] grid-cols-1 items-center gap-12 px-6 lg:grid-cols-2">
        {/* Left */}
        <div className="flex flex-col gap-6">
          <div className="inline-flex w-fit items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-4 py-1.5">
            <span className="h-2 w-2 rounded-full bg-primary animate-pulse" />
            <span className="font-heading text-xs font-semibold uppercase tracking-widest text-primary">
              Open to Opportunities
            </span>
          </div>

          <h1 className="font-heading text-4xl font-bold leading-tight text-foreground sm:text-5xl lg:text-6xl">
            I'm Rajesh
            <br />
            <span className="bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
              AI Product Manager
            </span>
            <br />
            <span className="text-muted-foreground">based in India</span>
          </h1>

          <p className="max-w-md text-base leading-relaxed text-muted-foreground">
            AI Product Manager with 8+ years of expertise in Human Capital and
            Technical Strategy, now building agentic AI solutions that transform
            enterprise workflows.
          </p>

          <div className="flex items-center gap-4">
            <Button size="lg" className="group font-heading font-semibold" asChild>
              <a href="#projects">
                View My Projects
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </a>
            </Button>
            <Button size="lg" variant="outline" className="font-heading font-semibold" asChild>
              <a href="#contact">
                <Download className="mr-2 h-4 w-4" />
                Download CV
              </a>
            </Button>
          </div>

          {/* Stats */}
          <div className="mt-8 flex gap-10">
            {stats.map((s) => (
              <div key={s.label} className="group">
                <p className="font-heading text-3xl font-bold text-primary transition-colors group-hover:text-foreground">
                  {s.value}
                </p>
                <p className="text-xs text-muted-foreground">{s.label}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Right — Portrait */}
        <div className="relative flex items-center justify-center lg:justify-end">
          {/* Decorative ring */}
          <div className="absolute h-80 w-80 rounded-full border border-primary/20 lg:h-[440px] lg:w-[440px]" />
          <div className="absolute h-72 w-72 rounded-full border border-border lg:h-[400px] lg:w-[400px]" />

          {/* Photo container */}
          <div className="relative h-72 w-72 overflow-hidden rounded-full border-2 border-primary/40 shadow-[0_0_60px_-15px_hsl(var(--primary)/0.3)] lg:h-96 lg:w-96">
            <img
              src={heroImg}
              alt="Rajesh — AI Product Manager"
              className="h-full w-full object-cover"
            />
          </div>

          {/* Floating badge */}
          <div className="absolute -bottom-2 right-4 rounded-xl border border-border bg-card px-4 py-3 shadow-lg lg:right-8">
            <p className="font-heading text-sm font-semibold text-foreground">🚀 AI & LLM</p>
            <p className="text-xs text-muted-foreground">RAG · Agents · Strategy</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
