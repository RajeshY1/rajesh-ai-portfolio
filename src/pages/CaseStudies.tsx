import { Link } from "react-router-dom";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import CaseStudyCard from "@/components/CaseStudyCard";
import { sortedCaseStudies } from "@/data/caseStudies";

const CaseStudies = () => {
  useEffect(() => {
    if (window.location.hash) {
      const el = document.getElementById(window.location.hash.slice(1));
      if (el) setTimeout(() => el.scrollIntoView({ behavior: "smooth" }), 100);
    }
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <div className="border-b border-border bg-background/80 backdrop-blur-xl sticky top-0 z-50">
        <div className="container mx-auto flex h-16 items-center px-6">
          <Button variant="ghost" size="sm" asChild>
            <Link to="/" className="gap-2">
              <ArrowLeft className="h-4 w-4" />
              Back to Home
            </Link>
          </Button>
        </div>
      </div>

      <section className="relative py-24 px-4">
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-primary/5 blur-[120px] pointer-events-none" />

        <div className="max-w-5xl mx-auto relative z-10">
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-1.5 rounded-full border border-primary/20 bg-primary/5 text-primary text-sm font-medium mb-4">
              Deep Dives
            </span>
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4 font-heading">
              Product Case Studies
            </h1>
            <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
              End-to-end AI products I've architected — from problem discovery to production impact.
            </p>
          </div>

          <div className="relative">
            <div className="absolute left-8 top-0 bottom-0 w-px bg-border hidden md:block" />

            <div className="space-y-10">
              {sortedCaseStudies.map((cs) => (
                <div key={cs.slug} className="relative md:pl-20">
                  <div className="absolute left-6 top-8 h-4 w-4 rounded-full border-2 border-primary bg-background hidden md:block" />
                  <CaseStudyCard caseStudy={cs} />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CaseStudies;
