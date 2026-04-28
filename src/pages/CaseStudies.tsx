import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowLeft, Activity, Brain, BarChart3, ShieldCheck, Search, Eye, ClipboardCheck, Wrench, ShieldAlert, Volume2, AudioWaveform } from "lucide-react";

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

const caseStudies = [
  {
    id: "dpdp-sentinel",
    icon: <ShieldCheck className="w-7 h-7" />,
    title: "DPDP AI Privacy Sentinel — Agentic Compliance Auditor",
    problem: "Indian enterprises face penalties up to ₹250 Cr under the new DPDP Act, but most consent forms and support transcripts are in regional languages — making manual PII audits impossibly slow.",
    solution: "Architected a Council of Agents (Crawler, Detective, Auditor, Remediation) that automates PII detection across 6 Indic languages and generates auto-remediation Jira tickets — gated by a Human-Authorized Remediation step.",
    metrics: ["90% reduction in compliance auditing time", "100% coverage of Indic-language consent forms", "Compliance Health Score adopted as board-level KPI"],
    images: [] as string[],
    imageSlots: 2,
  },
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
    images: [pmRag1, pmRag2, pmRag3, pmRag4],
  },
  {
    icon: <BarChart3 className="w-7 h-7" />,
    title: "AI Product Strategy Agent — Automated Go-To-Market & MVP Scoping",
    problem: "Founders and PMs spend weeks doing manual market research, competitor analysis, and feature prioritization, often relying on biased gut feelings to answer: 'Is this worth building?' and 'What do we build first?'",
    solution: "Architected an LLM-powered agentic workflow that takes user inputs (Startup Idea, Industry, Target Users) and autonomously analyzes market size, maps competitor feature gaps, and recommends data-driven business models.",
    metrics: ["Reduced MVP scoping time from 2 weeks to 4 hours", "Automatically calculates Estimated TAM (e.g., $5B)", "Outputs prioritized MVP roadmap ready for engineering handoff"],
    images: [strategyAgent1, strategyAgent2],
  },
];

const VOICE_SUMMARIES: Record<string, string> = {
  Telugu: "డిపిడిపి చట్టం ప్రకారం, మీ సంస్థ యొక్క కంప్లయన్స్ హెల్త్ స్కోర్ 87/100. 312 రెమిడియేషన్ టిక్కెట్‌లు సమీక్ష కోసం సిద్ధంగా ఉన్నాయి.",
  Tamil: "டிபிடிபி சட்டத்தின் கீழ், உங்கள் நிறுவனத்தின் இணக்க சுகாதார மதிப்பெண் 87/100. 312 தீர்வு டிக்கெட்டுகள் மதிப்பாய்வுக்கு தயாராக உள்ளன.",
  Kannada: "ಡಿಪಿಡಿಪಿ ಕಾಯ್ದೆಯಡಿ, ನಿಮ್ಮ ಸಂಸ್ಥೆಯ ಅನುಸರಣೆ ಆರೋಗ್ಯ ಸ್ಕೋರ್ 87/100. 312 ಪರಿಹಾರ ಟಿಕೆಟ್‌ಗಳು ಪರಿಶೀಲನೆಗೆ ಸಿದ್ಧವಾಗಿವೆ.",
  Malayalam: "ഡിപിഡിപി നിയമപ്രകാരം, നിങ്ങളുടെ സ്ഥാപനത്തിന്റെ കംപ്ലയൻസ് ഹെൽത്ത് സ്കോർ 87/100 ആണ്. 312 പരിഹാര ടിക്കറ്റുകൾ അവലോകനത്തിന് തയ്യാറാണ്.",
  Hindi: "डीपीडीपी अधिनियम के तहत, आपके संगठन का अनुपालन स्वास्थ्य स्कोर 87/100 है। समीक्षा हेतु 312 निवारण टिकट तैयार हैं।",
  English: "Under the DPDP Act, your organization's Compliance Health Score is 87/100. 312 remediation tickets are queued for DPO review.",
};

const AGENTS = [
  { name: "Crawler", icon: <Search className="w-5 h-5" />, desc: "Discovers data sources" },
  { name: "Detective", icon: <Eye className="w-5 h-5" />, desc: "Detects PII in 6 Indic languages" },
  { name: "Auditor", icon: <ClipboardCheck className="w-5 h-5" />, desc: "Maps to DPDP clauses & scores" },
  { name: "Remediation", icon: <Wrench className="w-5 h-5" />, desc: "Drafts auto-remediation tickets" },
];

const DpdpVoiceHub = () => {
  const [lang, setLang] = useState<keyof typeof VOICE_SUMMARIES>("English");
  const [playing, setPlaying] = useState(false);

  useEffect(() => {
    if (!playing) return;
    const t = setTimeout(() => setPlaying(false), 4000);
    return () => clearTimeout(t);
  }, [playing]);

  return (
    <div className="rounded-xl border border-violet-500/20 bg-gradient-to-br from-indigo-500/5 to-violet-500/5 p-5">
      <div className="flex items-center gap-2 mb-3">
        <Volume2 className="w-5 h-5 text-violet-400" />
        <h4 className="text-sm font-semibold uppercase tracking-wider text-violet-400 font-heading">Multilingual Voice Audit Hub</h4>
      </div>
      <div className="flex flex-wrap gap-2 mb-4">
        {(Object.keys(VOICE_SUMMARIES) as Array<keyof typeof VOICE_SUMMARIES>).map((l) => (
          <button
            key={l}
            onClick={() => setLang(l)}
            className={`px-3 py-1 rounded-full text-xs font-medium transition-all ${
              lang === l
                ? "bg-gradient-to-r from-indigo-500 to-violet-500 text-white"
                : "bg-secondary text-muted-foreground hover:text-foreground"
            }`}
          >
            {l}
          </button>
        ))}
      </div>
      <div className="rounded-lg border border-border/40 bg-background/40 p-4 mb-3 min-h-[80px]">
        <p className="text-foreground/90 text-sm leading-relaxed">{VOICE_SUMMARIES[lang]}</p>
      </div>
      <div className="flex items-center gap-3">
        <Button
          size="sm"
          onClick={() => setPlaying(true)}
          className="gap-2 bg-gradient-to-r from-indigo-500 to-violet-500 text-white hover:opacity-90"
        >
          <Volume2 className="w-4 h-4" />
          Play Voice Summary
        </Button>
        {playing && (
          <div className="flex items-center gap-2 text-violet-400">
            <AudioWaveform className="w-5 h-5 animate-pulse" />
            <div className="flex items-end gap-0.5 h-5">
              {[0, 1, 2, 3, 4].map((i) => (
                <span
                  key={i}
                  className="w-1 bg-violet-400 rounded-full animate-pulse"
                  style={{ height: `${30 + (i % 3) * 25}%`, animationDelay: `${i * 120}ms` }}
                />
              ))}
            </div>
            <span className="text-xs">Playing in {lang}…</span>
          </div>
        )}
      </div>
    </div>
  );
};

const CaseStudies = () => {
  useEffect(() => {
    if (window.location.hash) {
      const el = document.getElementById(window.location.hash.slice(1));
      if (el) setTimeout(() => el.scrollIntoView({ behavior: "smooth" }), 100);
    }
  }, []);

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
                <div key={idx} id={(cs as any).id} className="relative md:pl-20">
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
                      {cs.images.length > 0 && (
                        <div>
                          <h4 className="text-xs font-semibold uppercase tracking-wider text-primary mb-2 font-heading">Screenshots</h4>
                          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                            {cs.images.map((img, i) => (
                              <img key={i} src={img} alt={`${cs.title} screenshot ${i + 1}`} className="w-full h-auto rounded-lg shadow-md border border-border object-cover" />
                            ))}
                          </div>
                        </div>
                      )}
                      {cs.images.length === 0 && (cs as any).imageSlots && (
                        <div>
                          <h4 className="text-xs font-semibold uppercase tracking-wider text-primary mb-2 font-heading">Screenshots</h4>
                          <div className="grid grid-cols-2 gap-3">
                            {Array.from({ length: (cs as any).imageSlots as number }).map((_, i) => (
                              <div key={i} className="aspect-video rounded-lg border border-border bg-secondary/30" />
                            ))}
                          </div>
                        </div>
                      )}
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
