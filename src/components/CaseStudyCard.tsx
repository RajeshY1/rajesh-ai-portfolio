import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import type { CaseStudy } from "@/data/caseStudies";

interface Props {
  caseStudy: CaseStudy;
  /** When true, renders the extended sections (Architecture, Workflow, etc.) */
  detailed?: boolean;
}

const CaseStudyCard = ({ caseStudy: cs, detailed = false }: Props) => {
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