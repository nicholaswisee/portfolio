import { Github, Linkedin, Mail, FileText } from "lucide-react";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer id="contact" className="border-t border-paper-mist/10 bg-slate-field">
      <div className="site-container py-16 md:py-24">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-2 md:items-end">
          <div>
            <h2 className="section-title mb-4">Let&apos;s connect</h2>
            <p className="max-w-md text-paper-mist/70">
              I am always open to discussing engineering, research collaborations, or
              unexpected opportunities. Reach out directly.
            </p>
          </div>
          <div className="flex flex-col gap-3 md:items-end">
            <a
              href="mailto:nicholasaragih@gmail.com"
              className="inline-flex items-center gap-2 text-oxidized-teal hover:text-paper-mist hover:underline"
            >
              <Mail className="h-4 w-4" />
              nicholasaragih@gmail.com
            </a>
            <div className="flex flex-wrap gap-4">
              <a
                href="https://github.com/nicholaswisee"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-paper-mist/80 hover:text-paper-mist"
              >
                <Github className="h-4 w-4" />
                GitHub
              </a>
              <a
                href="https://www.linkedin.com/in/nicholaswises/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-paper-mist/80 hover:text-paper-mist"
              >
                <Linkedin className="h-4 w-4" />
                LinkedIn
              </a>
              <a
                href="/CV_Nicholas_Wise.pdf"
                download
                className="inline-flex items-center gap-2 text-paper-mist/80 hover:text-paper-mist"
              >
                <FileText className="h-4 w-4" />
                CV
              </a>
            </div>
          </div>
        </div>
        <div className="mt-12 border-t border-paper-mist/10 pt-6 text-center text-sm text-paper-mist/50">
          © {year} Nicholas Wise Saragih Sumbayak
        </div>
      </div>
    </footer>
  );
}
