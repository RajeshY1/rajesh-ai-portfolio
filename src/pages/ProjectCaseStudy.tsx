import { useEffect } from "react";
import { Link, useParams, Navigate } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import CaseStudyCard from "@/components/CaseStudyCard";
import { getCaseStudyBySlug } from "@/data/caseStudies";

const setMeta = (name: string, content: string) => {
  let el = document.querySelector(`meta[name="${name}"]`) as HTMLMetaElement | null;
  if (!el) {
    el = document.createElement("meta");
    el.setAttribute("name", name);
    document.head.appendChild(el);
  }
  el.setAttribute("content", content);
};

const ProjectCaseStudy = () => {
  const { slug } = useParams<{ slug: string }>();
  const caseStudy = getCaseStudyBySlug(slug);

  useEffect(() => {
    if (!caseStudy) return;
    const prevTitle = document.title;
    document.title = caseStudy.seo?.title ?? caseStudy.title;
    if (caseStudy.seo?.description) {
      setMeta("description", caseStudy.seo.description);
    }
    return () => {
      document.title = prevTitle;
    };
  }, [caseStudy]);

  if (!caseStudy) {
    return <Navigate to="/case-studies" replace />;
  }

  return (
    <div className="min-h-screen bg-background">
      <div className="border-b border-border bg-background/80 backdrop-blur-xl sticky top-0 z-50">
        <div className="container mx-auto flex h-16 items-center px-6 gap-3">
          <Button variant="ghost" size="sm" asChild>
            <Link to="/" className="gap-2">
              <ArrowLeft className="h-4 w-4" />
              Back to Home
            </Link>
          </Button>
          <Button variant="ghost" size="sm" asChild>
            <Link to="/case-studies">All Case Studies</Link>
          </Button>
        </div>
      </div>

      <section className="relative py-24 px-4">
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-primary/5 blur-[120px] pointer-events-none" />

        <div className="max-w-4xl mx-auto relative z-10">
          <div className="text-center mb-12">
            <span className="inline-block px-4 py-1.5 rounded-full border border-primary/20 bg-primary/5 text-primary text-sm font-medium mb-4">
              Case Study
            </span>
            <h1 className="text-3xl md:text-4xl font-bold text-foreground font-heading">
              {caseStudy.title}
            </h1>
          </div>

          <CaseStudyCard caseStudy={caseStudy} detailed />
        </div>
      </section>
    </div>
  );
};

export default ProjectCaseStudy;