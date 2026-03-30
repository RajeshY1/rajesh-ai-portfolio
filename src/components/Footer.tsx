import { Github, Linkedin } from "lucide-react";

const Footer = () => {
  return (
    <footer id="contact" className="border-t border-border py-12">
      <div className="container mx-auto flex flex-col items-center gap-4 px-6 text-center">
        <div className="flex gap-4">
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground transition-colors hover:text-primary"
            aria-label="LinkedIn"
          >
            <Linkedin className="h-5 w-5" />
          </a>
          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground transition-colors hover:text-primary"
            aria-label="GitHub"
          >
            <Github className="h-5 w-5" />
          </a>
        </div>
        <p className="text-sm text-muted-foreground">
          Built with Lovable &amp; Vercel | 2026
        </p>
      </div>
    </footer>
  );
};

export default Footer;
