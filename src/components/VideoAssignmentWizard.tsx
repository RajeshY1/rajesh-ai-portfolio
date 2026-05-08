import { useEffect, useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";

export const VIDEO_FILES = [
  "AI_Product_Requirement_Assistant.mp4",
  "AI_Product_Strategy_Agent_Demo.mp4",
  "Arogya_Mithra_AI.mp4",
  "DPDP_Compliance_Auditor_Demo.mp4",
];

export const PROJECT_TITLES = [
  "DPDP Act Compliance Auditor",
  "Arogya Mitra AI",
  "PM-Insight RAG Assistant",
  "AI Product Strategy Agent",
];

const STORAGE_KEY = "videoMapping_v1";

export const getVideoMapping = (): Record<string, string> => {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    return raw ? JSON.parse(raw) : {};
  } catch {
    return {};
  }
};

const VideoAssignmentWizard = () => {
  const [open, setOpen] = useState(false);
  const [mapping, setMapping] = useState<Record<string, string>>({});

  useEffect(() => {
    const existing = getVideoMapping();
    if (!existing || Object.keys(existing).length < PROJECT_TITLES.length) {
      setOpen(true);
    }
  }, []);

  const handleSelect = (project: string, video: string) => {
    setMapping((m) => ({ ...m, [project]: video }));
  };

  const allAssigned = PROJECT_TITLES.every((p) => mapping[p]);

  const handleSave = () => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(mapping));
    setOpen(false);
    window.dispatchEvent(new Event("videoMappingUpdated"));
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogContent className="max-w-lg bg-card border-border/60">
        <DialogHeader>
          <DialogTitle className="font-heading">Video Assignment Wizard</DialogTitle>
          <DialogDescription>Which video belongs to each project?</DialogDescription>
        </DialogHeader>
        <div className="space-y-4 mt-2">
          {PROJECT_TITLES.map((project) => (
            <div key={project} className="flex flex-col gap-1.5">
              <label className="text-sm font-medium text-foreground">{project}</label>
              <select
                value={mapping[project] || ""}
                onChange={(e) => handleSelect(project, e.target.value)}
                className="h-10 rounded-md border border-input bg-background px-3 text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-ring"
              >
                <option value="">Select a video…</option>
                {VIDEO_FILES.map((v) => (
                  <option key={v} value={v}>{v}</option>
                ))}
              </select>
            </div>
          ))}
          <Button className="w-full mt-2" disabled={!allAssigned} onClick={handleSave}>
            Save Mapping
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default VideoAssignmentWizard;