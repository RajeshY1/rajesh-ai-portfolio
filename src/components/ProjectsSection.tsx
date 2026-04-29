import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { FileText, Lightbulb, Activity, Brain, BarChart3, ShieldCheck } from "lucide-react";
import { Link } from "react-router-dom";

interface ProjectData {
  title: string;
  icon: React.ReactNode;
  problem: string;
  aiSolution: string;
  impact: string;
  prd: { title: string; sections: { heading: string; content: string }[] };
  useCase: { title: string; content: string };
  featured?: boolean;
  category?: string;
  healthScore?: number;
  detailHref?: string;
}

const projects: ProjectData[] = [
  {
    title: "DPDP Act Compliance Auditor",
    icon: <ShieldCheck className="w-6 h-6" />,
    category: "Agentic AI / RegTech",
    healthScore: 78,
    featured: true,
    detailHref: "/projects/dpdp-compliance-auditor",
    problem: "DPDP Act penalties up to ₹250 Cr; no real-time visibility into PII or consent",
    aiSolution: "Agentic system auditing PII flows + multilingual consent with HITL review",
    impact: "~60% reduction in manual audit effort (simulated)",
    prd: {
      title: "DPDP AI Privacy Sentinel — Product Requirements",
      sections: [
        { heading: "Problem Statement", content: "India's Digital Personal Data Protection (DPDP) Act exposes enterprises to penalties up to ₹250 Cr per violation. Most consent forms, support transcripts, and CRM exports are in regional languages — making manual PII audits impossibly slow and error-prone." },
        { heading: "Council of Agents — Architecture", content: "Crawler Agent → discovers data sources (S3, GDrive, Jira, CRM).\nDetective Agent → scans content for PII across 6 Indic languages using fine-tuned NER.\nAuditor Agent → maps findings to DPDP clauses and computes a Compliance Health Score.\nRemediation Agent → drafts auto-remediation Jira tickets with redaction patches." },
        { heading: "Human-in-the-Loop Gate", content: "All Remediation Agent outputs are blocked behind a Human-Authorized Remediation gate. A Data Protection Officer must explicitly approve each ticket before any production data is mutated. Every approval is cryptographically signed for audit trail." },
        { heading: "Multilingual Voice Audit Hub", content: "Audit summaries are generated in Telugu, Tamil, Kannada, Malayalam, Hindi, and English — both as native-script text and TTS voice playback — so non-technical legal teams in regional offices can verify findings without translation overhead." },
        { heading: "Success Metrics", content: "• 90% reduction in compliance auditing time vs. manual review.\n• 100% coverage of Indic-language consent forms.\n• Compliance Health Score adopted as board-level KPI.\n• Zero unauthorized auto-remediations (HITL gate enforced)." },
      ],
    },
    useCase: {
      title: "Killer Use Case",
      content: "A Bengaluru-based fintech ingests 2M Tamil + Telugu support transcripts. The Council of Agents auto-discovers 14,000 PII exposures, scores compliance at 87/100, and drafts 312 remediation Jira tickets — all reviewed and approved by the DPO in a single afternoon instead of a 6-week manual audit.",
    },
  },
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
    title: "AI Product Strategy Agent",
    icon: <BarChart3 className="w-6 h-6" />,
    problem: "Weeks of manual market research & biased MVP scoping",
    aiSolution: "LLM-powered agentic Go-To-Market workflow",
    impact: "Reduced MVP scoping from 2 weeks to 4 hours",
    prd: {
      title: "AI Product Strategy Agent — Product Requirements",
      sections: [
        { heading: "Agentic Workflow", content: "Takes user inputs (Startup Idea, Industry, Target Users) and autonomously analyzes market size, maps competitor feature gaps, and recommends data-driven business models. Multi-step reasoning with iterative refinement ensures comprehensive strategic output." },
        { heading: "Market Opportunity Analysis", content: "Automatically calculates Estimated TAM (e.g., $5B) based on industry inputs. Leverages real-time data sources and LLM reasoning to size addressable markets and identify growth vectors." },
        { heading: "Competitor Intelligence", content: "Identifies top competitors (Company A, Company B) and highlights their weak points. Maps feature gaps across the competitive landscape to surface differentiation opportunities." },
        { heading: "MVP Feature Prioritization", content: "Outputs a prioritized product roadmap (1. AI Assistant, 2. Analytics Dashboard, 3. Smart Notifications) ready for engineering handoff. Features are ranked by impact, feasibility, and alignment with identified market gaps." },
      ],
    },
    useCase: {
      title: "Killer Use Case",
      content: "A founder types in their startup idea, target industry, and user persona — the AI Product Strategy Agent autonomously calculates a $5B TAM, identifies top competitors and their weak points, and outputs a prioritized MVP roadmap ready for engineering handoff — all in under 4 hours instead of 2 weeks of manual research.",
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
                {project.featured && (
                  <div className="flex items-center justify-between mb-2">
                    <span className="inline-block px-2 py-0.5 rounded-full text-[10px] font-semibold uppercase tracking-wider bg-gradient-to-r from-indigo-500 to-violet-500 text-white">
                      Featured
                    </span>
                    {project.category && (
                      <span className="text-[10px] uppercase tracking-wider text-muted-foreground">{project.category}</span>
                    )}
                  </div>
                )}
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
                {project.featured && project.healthScore !== undefined && (
                  <div className="mt-4 rounded-lg border border-violet-500/20 bg-gradient-to-r from-indigo-500/5 to-violet-500/5 p-3">
                    <div className="flex items-center justify-between mb-1.5">
                      <span className="text-xs font-semibold uppercase tracking-wider text-violet-400">Compliance Health Score</span>
                      <span className="text-sm font-bold text-foreground">{project.healthScore}/100</span>
                    </div>
                    <div className="h-2 w-full rounded-full bg-secondary overflow-hidden">
                      <div
                        className="h-full rounded-full bg-gradient-to-r from-indigo-500 to-violet-500"
                        style={{ width: `${project.healthScore}%` }}
                      />
                    </div>
                  </div>
                )}
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
                {project.featured && project.detailHref ? (
                  <Button
                    size="sm"
                    asChild
                    className="flex-1 gap-2 bg-gradient-to-r from-indigo-500 to-violet-500 text-white hover:opacity-90 transition-all"
                  >
                    <Link to={project.detailHref}>
                      <Lightbulb className="w-4 h-4" />
                      Explore Case Study
                    </Link>
                  </Button>
                ) : (
                  <Button
                    size="sm"
                    className="flex-1 gap-2 bg-primary text-primary-foreground hover:bg-primary/90 transition-all"
                    onClick={() => setActiveModal({ project: idx, type: "useCase" })}
                  >
                    <Lightbulb className="w-4 h-4" />
                    View Use Case
                  </Button>
                )}
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
