import React from 'react';
import { Github, Linkedin } from 'lucide-react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-[hsl(var(--card-border))] py-8 px-6 md:px-12">
      <div className="container mx-auto max-w-5xl flex items-center justify-between">
        <p className="text-sm text-muted-foreground">
          &copy; {currentYear} Vamsi Krishna Kollipara
          <span className="mx-2 text-[hsl(var(--text-dim))]">&middot;</span>
          <span className="text-xs">Built with React &amp; TypeScript</span>
        </p>
        <div className="flex items-center gap-3">
          <a
            href="https://github.com/vamsi876"
            target="_blank"
            rel="noopener noreferrer"
            className="w-9 h-9 flex items-center justify-center rounded-lg bg-card border border-[hsl(var(--card-border))] text-muted-foreground hover:text-primary hover:border-primary/30 transition-colors"
            aria-label="GitHub"
          >
            <Github size={16} />
          </a>
          <a
            href="https://www.linkedin.com/in/vamsikollipara/"
            target="_blank"
            rel="noopener noreferrer"
            className="w-9 h-9 flex items-center justify-center rounded-lg bg-card border border-[hsl(var(--card-border))] text-muted-foreground hover:text-primary hover:border-primary/30 transition-colors"
            aria-label="LinkedIn"
          >
            <Linkedin size={16} />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
