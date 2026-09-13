import { Github, Linkedin, Mail, FileText } from "lucide-react";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer
      id="contact"
      className="border-t border-border bg-surface"
      aria-labelledby="contact-title"
      data-section="contact"
    >
      <div className="site-container py-20 md:py-28">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-2 md:items-end">
          <div>
            <h2 id="contact-title" className="section-title mb-4">
              Let&apos;s connect
            </h2>
            <p className="max-w-md text-muted">
              I am always open to discussing engineering, research collaborations, or
              unexpected opportunities. Reach out directly.
            </p>
          </div>
          <div className="flex flex-col gap-3 md:items-end">
            <a
              href="mailto:nicholasaragih@gmail.com"
              className="inline-flex items-center gap-2 rounded-sm text-foreground/80 transition-colors hover:text-foreground hover:underline focus-visible:outline-2 focus-visible:outline-accent focus-visible:outline-offset-2 motion-safe:active:scale-[0.98]"
            >
              <Mail className="h-4 w-4" />
              nicholasaragih@gmail.com
            </a>
            <div className="flex flex-wrap gap-4">
              <a
                href="https://github.com/nicholaswisee"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-sm text-foreground/80 transition-colors hover:text-foreground focus-visible:outline-2 focus-visible:outline-accent focus-visible:outline-offset-2 motion-safe:active:scale-[0.98]"
              >
                <Github className="h-4 w-4" />
                GitHub
              </a>
              <a
                href="https://www.linkedin.com/in/nicholaswises/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-sm text-foreground/80 transition-colors hover:text-foreground focus-visible:outline-2 focus-visible:outline-accent focus-visible:outline-offset-2 motion-safe:active:scale-[0.98]"
              >
                <Linkedin className="h-4 w-4" />
                LinkedIn
              </a>
              <a
                href="/CV_Nicholas_Wise.pdf"
                download
                className="inline-flex items-center gap-2 rounded-sm text-foreground/80 transition-colors hover:text-foreground focus-visible:outline-2 focus-visible:outline-accent focus-visible:outline-offset-2 motion-safe:active:scale-[0.98]"
              >
                <FileText className="h-4 w-4" />
                CV
              </a>
            </div>
          </div>
        </div>
        <div className="mt-12 border-t border-border pt-6 text-center text-sm text-muted">
          © {year} Nicholas Wise Saragih Sumbayak
        </div>
      </div>
    </footer>
  );
}
