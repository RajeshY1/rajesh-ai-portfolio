import heroImg from "@/assets/hero-portrait.jpg";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const stats = [
  { value: "8+", label: "Years Experience" },
  { value: "50+", label: "Projects Delivered" },
  { value: "12", label: "Enterprise Clients" },
];

const HeroSection = () => {
  return (
    <section className="relative min-h-screen pt-16">
      <div className="container mx-auto grid min-h-[calc(100vh-4rem)] grid-cols-1 items-center gap-12 px-6 lg:grid-cols-2">
        {/* Left */}
        <div className="flex flex-col gap-6">
          <p className="font-heading text-sm font-semibold uppercase tracking-widest text-primary">
            Interaction &amp; Visual Product Designer
          </p>
          <h1 className="font-heading text-4xl font-bold leading-tight text-foreground sm:text-5xl lg:text-6xl">
            I'm Rajesh<br />
            <span className="text-primary">A Product Manager</span><br />
            in India
          </h1>
          <p className="max-w-md text-base leading-relaxed text-muted-foreground">
            AI Product Manager with 8+ years of expertise in Human Capital and
            Technical Strategy, now building agentic AI solutions.
          </p>
          <div className="flex items-center gap-4">
            <Button size="lg" className="font-heading font-semibold" asChild>
              <a href="#projects">
                View My Projects <ArrowRight className="ml-2 h-4 w-4" />
              </a>
            </Button>
          </div>

          {/* Stats */}
          <div className="mt-8 flex gap-10">
            {stats.map((s) => (
              <div key={s.label}>
                <p className="font-heading text-3xl font-bold text-foreground">
                  {s.value}
                </p>
                <p className="text-xs text-muted-foreground">{s.label}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Right — Portrait */}
        <div className="relative flex items-end justify-center lg:justify-end">
          <div className="relative w-80 overflow-hidden rounded-2xl border border-border lg:w-[420px]">
            <img
              src={heroImg}
              alt="Rajesh — AI Product Manager"
              width={640}
              height={800}
              className="h-auto w-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
