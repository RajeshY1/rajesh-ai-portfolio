import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { FileText, Lightbulb, Activity, Brain, BarChart3 } from "lucide-react";

interface ProjectData {
  title: string;
  icon: React.ReactNode;
  problem: string;
  aiSolution: string;
  impact: string;
  prd: { title: string; sections: { heading: string; content: string }[] };
  useCase: { title: string; content: string };
}

const projects: ProjectData[] = [
  {
    title: "Arogya Mitra AI",
    icon: <Activity className="w-6 h-6" />,
    problem: "Medical literacy gap",
    aiSolution: "OCR + Multilingual LLM",
    impact: "95% accuracy in vernacular prescription translation",
    prd: {
      title: "Arogya Mitra AI — Product Requirements",
      sections: [
        { heading: "Problem Statement", content: "Over 60% of rural patients in South India cannot read English-language prescriptions, leading to dangerous medication errors and poor adherence to treatment plans." },
        { heading: "User Personas", content: "Primary: Rural patients (ages 30–65) with limited English literacy. Secondary: Pharmacists in Tier-2/3 towns who assist patients. Tertiary: NGO health workers conducting outreach." },
        { heading: "Functional Requirements — OCR + LLM Translation", content: "1. Camera-based prescription capture with automatic deskew and enhancement.\n2. OCR engine (Tesseract/Google Vision) extracts drug names, dosages, and schedules.\n3. LLM layer (GPT-4o / Gemini) translates extracted text into Telugu, Kannada, and Tamil with contextual medication guidance.\n4. Voice playback of translated instructions for low-literacy users." },
        { heading: "Success Metrics", content: "• NPS ≥ 60 among pilot users within 3 months.\n• Dosage-error reduction target: 40%.\n• Monthly active users: 10,000 within first year.\n• Translation accuracy ≥ 95% validated by pharmacists." },
        { heading: "Safety Guardrails", content: "• All translations flagged with confidence scores; low-confidence outputs route to human pharmacist review.\n• No dosage recommendations — only faithful translation of physician instructions.\n• HIPAA-equivalent data handling with on-device processing for sensitive data." },
      ],
    },
    useCase: {
      title: "Killer Use Case",
      content: "A grandmother in a village near Tirupati photographs her prescription, and Arogya Mitra reads back her insulin schedule in Telugu — no internet required after initial model download. This empowers rural patients in South India to understand medication schedules in Telugu, Kannada, and Tamil, achieving 95% translation accuracy validated by pharmacists.",
    },
  },
  {
    title: "PM-Insight RAG Assistant",
    icon: <Brain className="w-6 h-6" />,
    problem: "PM documentation fatigue",
    aiSolution: "Context-aware RAG",
    impact: "40% reduction in PRD drafting time",
    prd: {
      title: "PM-Insight — Product Requirements",
      sections: [
        { heading: "Data Ingestion Layer", content: "Accepts Confluence pages, Google Docs, Notion exports, Slack threads, and PDF uploads. Documents are chunked (512 tokens, 50-token overlap) and embedded using OpenAI text-embedding-3-small. Incremental sync every 15 minutes via webhook listeners." },
        { heading: "Vector Database (Pinecone / pgvector)", content: "Embeddings stored in Pinecone (serverless) with namespace isolation per workspace. Metadata filters: document_type, team, date_range, product_area. Fallback: pgvector for cost-sensitive deployments with RLS-based access control." },
        { heading: "Query Optimization", content: "Hybrid retrieval combining semantic search (cosine similarity, top-k=10) with BM25 keyword matching. Re-ranking via Cohere Rerank API. Query expansion for ambiguous prompts. Citation-linked responses with source document previews." },
        { heading: "Safety Guardrails", content: "• Workspace-level data isolation — no cross-tenant data leakage.\n• All generated PRDs include provenance citations.\n• Human-in-the-loop approval before publishing to Confluence/Notion." },
      ],
    },
    useCase: {
      title: "Killer Use Case",
      content: "A PM at a Series-A company types 'Draft a PRD for our new onboarding flow' and PM-Insight generates a structured document pulling context from existing user research, competitor analyses, and engineering specs — all in under 30 seconds, reducing PRD drafting time by 40%.",
    },
  },
  {
    title: "Data Analyst Agent",
    icon: <BarChart3 className="w-6 h-6" />,
    problem: "Static market data",
    aiSolution: "Multi-agent SWOT automation",
    impact: "Real-time strategic intelligence",
    prd: {
      title: "Data Analyst Agent — Product Requirements",
      sections: [
        { heading: "Agentic Workflow", content: "Multi-step ReAct loop: Plan → Execute → Observe → Reflect. The agent autonomously decides which tools to call based on the dataset schema and user's natural-language query. Supports iterative refinement — if a chart doesn't answer the question, the agent re-queries with adjusted parameters." },
        { heading: "Tool-Calling (Matplotlib / Pandas)", content: "Sandboxed Python execution environment with pre-loaded Pandas, NumPy, Matplotlib, Seaborn, and Plotly. The agent generates and executes code, captures outputs (DataFrames, charts), and presents them inline. Guardrails prevent destructive operations and enforce memory limits." },
        { heading: "Insight Summarization", content: "After generating visualizations, the agent produces a 3–5 bullet executive summary highlighting key trends, anomalies, and actionable recommendations. Summaries are calibrated for C-suite readability with optional drill-down into methodology." },
        { heading: "Safety Guardrails", content: "• Sandboxed execution with no network access from code cells.\n• PII detection and masking before data processing.\n• All generated insights include methodology transparency notes." },
      ],
    },
    useCase: {
      title: "Killer Use Case",
      content: "A SaaS founder uploads their Stripe revenue CSV and asks 'Show me churn trends by cohort' — the agent cleans the data, generates a cohort heatmap, and summarizes: 'Q3 2025 cohorts show 15% lower churn after onboarding redesign.' Real-time strategic intelligence without needing a data science team.",
    },
  },
];

type ModalType = "prd" | "useCase";

const ProjectsSection = () => {
  const [activeModal, setActiveModal] = useState<{ project: number; type: ModalType } | null>(null);
  const activeProject = activeModal !== null ? projects[activeModal.project] : null;

  return (
    <section id="projects" className="relative border-t border-border py-24 px-4">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-primary/5 blur-[120px] pointer-events-none" />

      <div className="max-w-6xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full border border-primary/20 bg-primary/5 text-primary text-sm font-medium mb-4">
            Portfolio
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 font-heading">
            Product Case Studies
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            End-to-end AI products — from PRD to production. Click into each project to explore the product thinking behind the technology.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, idx) => (
            <Card
              key={idx}
              className="group bg-card/60 backdrop-blur border-border/50 hover:border-primary/30 transition-all duration-300 hover:shadow-[0_0_30px_-10px_hsl(var(--primary)/0.15)] hover:scale-[1.03] flex flex-col"
            >
              <CardHeader className="pb-3">
                <div className="flex items-center gap-3 mb-2">
                  <div className="p-2.5 rounded-lg bg-primary/10 text-primary">{project.icon}</div>
                  <CardTitle className="text-lg text-foreground font-heading">
                    {project.title}
                  </CardTitle>
                </div>
                <CardDescription className="text-muted-foreground leading-relaxed space-y-1.5">
                  <span className="block"><strong className="text-foreground/70">Problem:</strong> {project.problem}</span>
                  <span className="block"><strong className="text-foreground/70">AI Solution:</strong> {project.aiSolution}</span>
                  <span className="block"><strong className="text-primary/80">Impact:</strong> {project.impact}</span>
                </CardDescription>
              </CardHeader>

              <CardContent className="mt-auto pt-2 flex gap-3">
                <Button
                  variant="outline"
                  size="sm"
                  className="flex-1 gap-2 border-primary/20 text-primary hover:bg-primary/10 hover:text-primary hover:border-primary/40 transition-all"
                  onClick={() => setActiveModal({ project: idx, type: "prd" })}
                >
                  <FileText className="w-4 h-4" />
                  Read PRD
                </Button>
                <Button
                  size="sm"
                  className="flex-1 gap-2 bg-primary text-primary-foreground hover:bg-primary/90 transition-all"
                  onClick={() => setActiveModal({ project: idx, type: "useCase" })}
                >
                  <Lightbulb className="w-4 h-4" />
                  View Use Case
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      <Dialog open={activeModal !== null} onOpenChange={(open) => !open && setActiveModal(null)}>
        <DialogContent className="max-w-2xl max-h-[85vh] overflow-y-auto bg-card border-border/60">
          {activeProject && activeModal && (
            <>
              <DialogHeader>
                <div className="flex items-center gap-3">
                  <div className="p-2 rounded-lg bg-primary/10 text-primary">{activeProject.icon}</div>
                  <div>
                    <DialogTitle className="text-xl text-foreground font-heading">
                      {activeModal.type === "prd" ? activeProject.prd.title : activeProject.useCase.title}
                    </DialogTitle>
                    <DialogDescription className="text-muted-foreground text-sm mt-1">
                      {activeProject.title}
                    </DialogDescription>
                  </div>
                </div>
              </DialogHeader>

              <div className="mt-4 space-y-6">
                {activeModal.type === "prd" ? (
                  activeProject.prd.sections.map((section, i) => (
                    <div key={i} className="rounded-lg border border-border/40 bg-secondary/30 p-5">
                      <h4 className="text-sm font-semibold text-primary mb-2 uppercase tracking-wider font-heading">
                        {section.heading}
                      </h4>
                      <p className="text-foreground/80 text-sm leading-relaxed whitespace-pre-line">{section.content}</p>
                    </div>
                  ))
                ) : (
                  <div className="rounded-lg border border-primary/20 bg-primary/5 p-6">
                    <Lightbulb className="w-8 h-8 text-primary mb-3" />
                    <p className="text-foreground/90 leading-relaxed">{activeProject.useCase.content}</p>
                  </div>
                )}
              </div>
            </>
          )}
        </DialogContent>
      </Dialog>
    </section>
  );
};

export default ProjectsSection;
