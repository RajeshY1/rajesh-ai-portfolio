import { Activity, BarChart3, Brain, ShieldCheck } from "lucide-react";
import type { ReactNode } from "react";

import arogyaImg1 from "@/assets/arogya-mitra-1.jpeg";
import arogyaImg2 from "@/assets/arogya-mitra-2.jpeg";
import arogyaImg3 from "@/assets/arogya-mitra-3.jpeg";
import arogyaImg4 from "@/assets/arogya-mitra-4.jpeg";
import arogyaImg5 from "@/assets/arogya-mitra-5.jpeg";
import arogyaImg6 from "@/assets/arogya-mitra-6.jpeg";
import arogyaImg7 from "@/assets/arogya-mitra-7.jpeg";

import pmRag1 from "@/assets/pm-rag-1.png";
import pmRag2 from "@/assets/pm-rag-2.png";
import pmRag3 from "@/assets/pm-rag-3.png";
import pmRag4 from "@/assets/pm-rag-4.png";

import strategyAgent1 from "@/assets/strategy-agent-1.png";
import strategyAgent2 from "@/assets/strategy-agent-2.png";

import dpdpDashboard from "@/assets/dpdp-agentic-dashboard.png";
import dpdpJira from "@/assets/dpdp-jira-workflow.png";

export interface CaseStudySection {
  heading: string;
  body: string;
}

export interface CaseStudy {
  slug: string;
  id: string; // anchor id for the global timeline page
  icon: ReactNode;
  title: string;
  problem: string;
  solution: string;
  metrics: string[];
  images: string[];
  /** Optional extended sections shown on the detail page only */
  sections?: CaseStudySection[];
  /** SEO */
  seo?: { title: string; description: string };
  flagship?: boolean;
}

export const caseStudies: CaseStudy[] = [
  {
    slug: "dpdp-compliance-auditor",
    id: "dpdp-sentinel",
    flagship: true,
    icon: <ShieldCheck className="w-7 h-7" />,
    title: "DPDP Compliance Auditor — Agentic AI System for Real-Time Privacy Governance",
    problem:
      "India's DPDP Act introduces penalties up to ₹250 Cr, yet organizations lack visibility into PII, consent validation, and real-time compliance monitoring — creating significant regulatory risk.",
    solution:
      "Designed an agentic AI-based compliance system that audits PII flows, validates multilingual consent, and generates real-time compliance scores with a human-in-the-loop review layer.",
    metrics: [
      "~60% reduction in manual audit effort (simulated)",
      "Real-time compliance visibility across data sources",
      "Enables continuous governance instead of periodic audits",
    ],
    images: [dpdpDashboard, dpdpJira],
    sections: [
      {
        heading: "Architecture",
        body:
          "Multi-agent orchestration system:\n• Crawler Agent → scans forms, APIs, DB schemas\n• PII Detection Agent → classifies sensitive data\n• Consent Auditor Agent → validates consent logs\n• Compliance Scoring Agent → assigns risk score\n• Human Review Layer → handles edge cases",
      },
      {
        heading: "Workflow",
        body: "Input → PII Detection → Consent Validation → Risk Scoring → Human Review → Compliance Report",
      },
      {
        heading: "Output (Sample)",
        body:
          "• Compliance Score: 78/100\n• Issues: Missing consent timestamp, unclear purpose\n• Risk Level: Medium",
      },
      {
        heading: "Product Thinking",
        body:
          "Why: Rule-based systems fail with unstructured consent.\nTrade-offs: LLM cost vs accuracy, false positives.\nNext Steps: API integrations, real-time monitoring dashboard.",
      },
    ],
    seo: {
      title: "DPDP Compliance Auditor | Agentic AI Privacy System",
      description:
        "Agentic AI system for auditing PII, validating consent, and generating DPDP compliance scores.",
    },
  },
  {
    slug: "arogya-mitra-ai",
    id: "arogya-mitra",
    icon: <Activity className="w-7 h-7" />,
    title: "Arogya Mitra AI — Vernacular Prescription Translation",
    problem:
      "Over 60% of rural patients in South India cannot read English-language prescriptions, leading to dangerous medication errors.",
    solution:
      "Built an OCR + Multilingual LLM pipeline that photographs prescriptions and translates them into Telugu, Kannada, and Tamil with voice playback for low-literacy users.",
    metrics: [
      "95% translation accuracy validated by pharmacists",
      "Voice playback for low-literacy users",
      "Works offline after initial model download",
    ],
    images: [arogyaImg1, arogyaImg2, arogyaImg3, arogyaImg4, arogyaImg5, arogyaImg6, arogyaImg7],
    seo: {
      title: "Arogya Mitra AI | Vernacular Prescription Translation",
      description:
        "OCR + Multilingual LLM pipeline translating prescriptions into Telugu, Kannada, and Tamil with voice playback.",
    },
  },
  {
    slug: "pm-insight-rag",
    id: "pm-insight",
    icon: <Brain className="w-7 h-7" />,
    title: "PM-Insight — RAG-Powered PRD Assistant",
    problem:
      "Product managers spend 40%+ of their time manually drafting PRDs by searching through scattered Confluence, Notion, and Slack documentation.",
    solution:
      "Designed a context-aware RAG system with hybrid retrieval (semantic + BM25), Cohere re-ranking, and citation-linked responses that auto-generates structured PRDs.",
    metrics: [
      "40% reduction in PRD drafting time",
      "Sub-30-second document generation",
      "Citation-linked outputs with source previews",
    ],
    images: [pmRag1, pmRag2, pmRag3, pmRag4],
    seo: {
      title: "PM-Insight | RAG-Powered PRD Assistant",
      description:
        "Context-aware RAG system that auto-generates structured PRDs with hybrid retrieval and citation-linked responses.",
    },
  },
  {
    slug: "ai-product-strategy-agent",
    id: "strategy-agent",
    icon: <BarChart3 className="w-7 h-7" />,
    title: "AI Product Strategy Agent — Automated Go-To-Market & MVP Scoping",
    problem:
      "Founders and PMs spend weeks doing manual market research, competitor analysis, and feature prioritization, often relying on biased gut feelings to answer: 'Is this worth building?' and 'What do we build first?'",
    solution:
      "Architected an LLM-powered agentic workflow that takes user inputs (Startup Idea, Industry, Target Users) and autonomously analyzes market size, maps competitor feature gaps, and recommends data-driven business models.",
    metrics: [
      "Reduced MVP scoping time from 2 weeks to 4 hours",
      "Automatically calculates Estimated TAM (e.g., $5B)",
      "Outputs prioritized MVP roadmap ready for engineering handoff",
    ],
    images: [strategyAgent1, strategyAgent2],
    seo: {
      title: "AI Product Strategy Agent | Automated GTM & MVP Scoping",
      description:
        "LLM-powered agentic workflow that autonomously sizes markets, maps competitor gaps, and prioritizes MVP features.",
    },
  },
];

/** Sorted so the flagship project always appears first. Stable for the rest. */
export const sortedCaseStudies: CaseStudy[] = [...caseStudies].sort((a, b) => {
  if (a.slug === "dpdp-compliance-auditor") return -1;
  if (b.slug === "dpdp-compliance-auditor") return 1;
  return 0;
});

export const getCaseStudyBySlug = (slug: string | undefined): CaseStudy | undefined =>
  caseStudies.find((c) => c.slug === slug);