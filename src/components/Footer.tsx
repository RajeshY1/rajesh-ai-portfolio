import { Github, Linkedin, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";

const Footer = () => {
  return (
    <footer id="contact" className="border-t border-border py-20">
      <div className="container mx-auto px-6">
        <div className="mx-auto max-w-2xl text-center">
          <span className="inline-block px-4 py-1.5 rounded-full border border-primary/20 bg-primary/5 text-primary text-sm font-medium mb-4">
            Contact
          </span>
          <h2 className="mb-4 font-heading text-3xl font-bold text-foreground">
            Let's Connect
          </h2>
          <p className="mb-8 text-base leading-relaxed text-muted-foreground">
            Open to AI Product Leadership roles in Bangalore, Hyderabad, and Chennai.
          </p>

          <Button size="lg" className="font-heading font-semibold" asChild>
            <a href="mailto:rajesh.y123@gmail.com">
              <Mail className="mr-2 h-4 w-4" />
              Schedule a Chat
            </a>
          </Button>

          <div className="mt-10 flex items-center justify-center gap-6">
            <a
              href="mailto:rajesh.y123@gmail.com"
              className="text-sm text-muted-foreground transition-colors hover:text-primary"
            >
              rajesh.y123@gmail.com
            </a>
            <span className="text-border">|</span>
            <a
              href="https://www.linkedin.com/in/rajesh-y1/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground transition-colors hover:text-primary hover:drop-shadow-[0_0_8px_hsl(var(--primary)/0.5)]"
              aria-label="LinkedIn"
            >
              <Linkedin className="h-5 w-5" />
            </a>
            <a
              href="https://github.com/RajeshY1"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground transition-colors hover:text-primary hover:drop-shadow-[0_0_8px_hsl(var(--primary)/0.5)]"
              aria-label="GitHub"
            >
              <Github className="h-5 w-5" />
            </a>
          </div>
        </div>

        <div className="mt-16 border-t border-border pt-8 text-center">
          <p className="text-xs text-muted-foreground">
            © 2026 Rajesh. Built with Lovable.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
