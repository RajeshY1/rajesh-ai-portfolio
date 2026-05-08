import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Maximize2 } from "lucide-react";
import { useState } from "react";
import type { CaseStudy } from "@/data/caseStudies";

interface Props {
  caseStudy: CaseStudy;
  /** When true, renders the extended sections (Architecture, Workflow, etc.) */
  detailed?: boolean;
}

const CaseStudyCard = ({ caseStudy: cs, detailed = false }: Props) => {
  const [lightbox, setLightbox] = useState<string | null>(null);
  return (
    <Card
      id={cs.id}
      className="bg-card/60 backdrop-blur border-border/50 hover:border-primary/30 transition-all duration-300 hover:shadow-[0_0_40px_-10px_hsl(var(--primary)/0.15)]"
    >
      <CardHeader>
        <div className="flex items-center gap-3 mb-1 flex-wrap">
          <div className="p-2.5 rounded-lg bg-primary/10 text-primary">{cs.icon}</div>
          <CardTitle className="text-xl text-foreground font-heading">{cs.title}</CardTitle>
          {cs.flagship && (
            <span className="ml-auto inline-block px-2.5 py-0.5 rounded-full text-[10px] font-semibold uppercase tracking-wider bg-gradient-to-r from-indigo-500 to-violet-500 text-white">
              Flagship Project
            </span>
          )}
        </div>
      </CardHeader>
      <CardContent className="space-y-4">
        <Section heading="Problem" body={cs.problem} />
        <Section heading="AI Solution" body={cs.solution} />

        {detailed && cs.diagrams && cs.diagrams.length > 0 && (
          <div>
            <h4 className="text-xs font-semibold uppercase tracking-wider text-primary mb-2 font-heading">
              Architecture & Workflow Diagrams
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {cs.diagrams.map((d, i) => (
                <div
                  key={i}
                  className="group relative rounded-lg overflow-hidden border border-border bg-muted/30"
                >
                  <img
                    src={d.src}
                    alt={d.caption}
                    loading="lazy"
                    className="w-full h-44 object-cover cursor-zoom-in transition-transform duration-300 group-hover:scale-[1.02]"
                    onClick={() => setLightbox(d.src)}
                  />
                  <div className="p-3 space-y-2">
                    <p className="text-xs text-muted-foreground leading-snug">{d.caption}</p>
                    <Button
                      size="sm"
                      variant="outline"
                      className="w-full gap-2"
                      onClick={() => setLightbox(d.src)}
                    >
                      <Maximize2 className="h-3.5 w-3.5" />
                      View Full Architecture
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        <div>
          <h4 className="text-xs font-semibold uppercase tracking-wider text-primary mb-1 font-heading">
            Key Metrics
          </h4>
          <ul className="space-y-1">
            {cs.metrics.map((m, i) => (
              <li key={i} className="flex items-start gap-2 text-sm text-foreground/80">
                <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-primary shrink-0" />
                {m}
              </li>
            ))}
          </ul>
        </div>

        {detailed &&
          cs.sections?.map((s) => (
            <Section key={s.heading} heading={s.heading} body={s.body} preserveLines />
          ))}

        {cs.images.length > 0 && (
          <div>
            <h4 className="text-xs font-semibold uppercase tracking-wider text-primary mb-2 font-heading">
              Screenshots
            </h4>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
              {cs.images.map((img, i) => (
                <img
                  key={i}
                  src={img}
                  alt={`${cs.title} screenshot ${i + 1}`}
                  className="w-full h-auto rounded-lg shadow-md border border-border object-cover"
                />
              ))}
            </div>
          </div>
        )}
      </CardContent>

      <Dialog open={!!lightbox} onOpenChange={(o) => !o && setLightbox(null)}>
        <DialogContent className="max-w-6xl w-[95vw] p-2 bg-background/95 backdrop-blur-xl border-border">
          {lightbox && (
            <img
              src={lightbox}
              alt="Architecture diagram"
              className="w-full h-auto max-h-[85vh] object-contain rounded"
            />
          )}
        </DialogContent>
      </Dialog>
    </Card>
  );
};

const Section = ({
  heading,
  body,
  preserveLines = false,
}: {
  heading: string;
  body: string;
  preserveLines?: boolean;
}) => (
  <div>
    <h4 className="text-xs font-semibold uppercase tracking-wider text-primary mb-1 font-heading">
      {heading}
    </h4>
    <p
      className={`text-muted-foreground text-sm leading-relaxed ${
        preserveLines ? "whitespace-pre-line" : ""
      }`}
    >
      {body}
    </p>
  </div>
);

export default CaseStudyCard;