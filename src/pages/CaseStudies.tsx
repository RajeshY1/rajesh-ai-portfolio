import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowLeft, Activity, Brain, BarChart3 } from "lucide-react";

import arogyaImg1 from "@/assets/arogya-mitra-1.jpeg";
import arogyaImg2 from "@/assets/arogya-mitra-2.jpeg";
import arogyaImg3 from "@/assets/arogya-mitra-3.jpeg";
import arogyaImg4 from "@/assets/arogya-mitra-4.jpeg";
import arogyaImg5 from "@/assets/arogya-mitra-5.jpeg";
import arogyaImg6 from "@/assets/arogya-mitra-6.jpeg";
import arogyaImg7 from "@/assets/arogya-mitra-7.jpeg";

const caseStudies = [
  {
    icon: <Activity className="w-7 h-7" />,
    title: "Arogya Mitra AI — Vernacular Prescription Translation",
    problem: "Over 60% of rural patients in South India cannot read English-language prescriptions, leading to dangerous medication errors.",
    solution: "Built an OCR + Multilingual LLM pipeline that photographs prescriptions and translates them into Telugu, Kannada, and Tamil with voice playback for low-literacy users.",
    metrics: ["95% translation accuracy validated by pharmacists", "Voice playback for low-literacy users", "Works offline after initial model download"],
    images: [arogyaImg1, arogyaImg2, arogyaImg3, arogyaImg4, arogyaImg5, arogyaImg6, arogyaImg7],
  },
  {
    icon: <Brain className="w-7 h-7" />,
    title: "PM-Insight — RAG-Powered PRD Assistant",
    problem: "Product managers spend 40%+ of their time manually drafting PRDs by searching through scattered Confluence, Notion, and Slack documentation.",
    solution: "Designed a context-aware RAG system with hybrid retrieval (semantic + BM25), Cohere re-ranking, and citation-linked responses that auto-generates structured PRDs.",
    metrics: ["40% reduction in PRD drafting time", "Sub-30-second document generation", "Citation-linked outputs with source previews"],
    images: [] as string[],
  },
  {
    icon: <BarChart3 className="w-7 h-7" />,
    title: "AI Product Strategy Agent — Automated Go-To-Market & MVP Scoping",
    problem: "Founders and PMs spend weeks doing manual market research, competitor analysis, and feature prioritization, often relying on biased gut feelings to answer: 'Is this worth building?' and 'What do we build first?'",
    solution: "Architected an LLM-powered agentic workflow that takes user inputs (Startup Idea, Industry, Target Users) and autonomously analyzes market size, maps competitor feature gaps, and recommends data-driven business models.",
    metrics: ["Reduced MVP scoping time from 2 weeks to 4 hours", "Automatically calculates Estimated TAM (e.g., $5B)", "Outputs prioritized MVP roadmap ready for engineering handoff"],
    images: [] as string[],
  },
];

const CaseStudies = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
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
        {/* Glow */}
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

          {/* Timeline layout */}
          <div className="relative">
            <div className="absolute left-8 top-0 bottom-0 w-px bg-border hidden md:block" />

            <div className="space-y-10">
              {caseStudies.map((cs, idx) => (
                <div key={idx} className="relative md:pl-20">
                  {/* Timeline dot */}
                  <div className="absolute left-6 top-8 h-4 w-4 rounded-full border-2 border-primary bg-background hidden md:block" />

                  <Card className="bg-card/60 backdrop-blur border-border/50 hover:border-primary/30 transition-all duration-300 hover:shadow-[0_0_40px_-10px_hsl(var(--primary)/0.15)]">
                    <CardHeader>
                      <div className="flex items-center gap-3 mb-1">
                        <div className="p-2.5 rounded-lg bg-primary/10 text-primary">{cs.icon}</div>
                        <CardTitle className="text-xl text-foreground font-heading">{cs.title}</CardTitle>
                      </div>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div>
                        <h4 className="text-xs font-semibold uppercase tracking-wider text-primary mb-1 font-heading">Problem</h4>
                        <p className="text-muted-foreground text-sm leading-relaxed">{cs.problem}</p>
                      </div>
                      <div>
                        <h4 className="text-xs font-semibold uppercase tracking-wider text-primary mb-1 font-heading">AI Solution</h4>
                        <p className="text-muted-foreground text-sm leading-relaxed">{cs.solution}</p>
                      </div>
                      <div>
                        <h4 className="text-xs font-semibold uppercase tracking-wider text-primary mb-1 font-heading">Key Metrics</h4>
                        <ul className="space-y-1">
                          {cs.metrics.map((m, i) => (
                            <li key={i} className="flex items-start gap-2 text-sm text-foreground/80">
                              <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-primary shrink-0" />
                              {m}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </CardContent>
                  </Card>
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
