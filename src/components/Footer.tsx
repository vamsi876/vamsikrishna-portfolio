import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, Package } from 'lucide-react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-[hsl(var(--card-border))] py-12 px-6 md:px-12 mt-12">
      <div className="container mx-auto max-w-5xl">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-10">
          <div>
            <h2 className="text-sm font-semibold text-foreground mb-3">Vamsi Krishna Kollipara</h2>
            <p className="text-xs text-muted-foreground leading-relaxed">
              AI Full-Stack Engineer building React, TypeScript, Node.js, and Claude-powered applications.
            </p>
          </div>

          <nav aria-label="Footer navigation">
            <h2 className="text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-3">Site</h2>
            <ul className="space-y-2 text-sm">
              <li><Link to="/about" className="text-muted-foreground hover:text-primary transition-colors">About</Link></li>
              <li><Link to="/skills" className="text-muted-foreground hover:text-primary transition-colors">Skills</Link></li>
              <li><Link to="/experience" className="text-muted-foreground hover:text-primary transition-colors">Experience</Link></li>
              <li><Link to="/projects" className="text-muted-foreground hover:text-primary transition-colors">Projects</Link></li>
              <li><Link to="/resume" className="text-muted-foreground hover:text-primary transition-colors">Resume</Link></li>
              <li><Link to="/contact" className="text-muted-foreground hover:text-primary transition-colors">Contact</Link></li>
            </ul>
          </nav>

          <nav aria-label="Open-source projects">
            <h2 className="text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-3">PyPI Packages</h2>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="https://pypi.org/project/gitbar/" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
                  GitBar
                </a>
              </li>
              <li>
                <a href="https://pypi.org/project/gadgetbox/" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
                  GadgetBox
                </a>
              </li>
              <li>
                <a href="https://pypi.org/project/webweaver/" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
                  WebWeaver
                </a>
              </li>
            </ul>
          </nav>

          <nav aria-label="Social links">
            <h2 className="text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-3">Connect</h2>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="https://github.com/vamsi876" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors">
                  <FaGithub size={14} aria-hidden="true" />
                  GitHub
                </a>
              </li>
              <li>
                <a href="https://www.linkedin.com/in/vamsikollipara/" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors">
                  <FaLinkedin size={14} aria-hidden="true" />
                  LinkedIn
                </a>
              </li>
              <li>
                <a href="https://pypi.org/user/vamsi876/" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors">
                  <Package size={14} aria-hidden="true" />
                  PyPI
                </a>
              </li>
              <li>
                <Link to="/contact" className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors">
                  <Mail size={14} aria-hidden="true" />
                  Email
                </Link>
              </li>
            </ul>
          </nav>
        </div>

        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-3 pt-6 border-t border-[hsl(var(--card-border))]">
          <p className="text-xs text-muted-foreground">
            &copy; {currentYear} Vamsi Krishna Kollipara
            <span className="mx-2 text-[hsl(var(--text-dim))]">&middot;</span>
            <span>Built with React &amp; TypeScript</span>
          </p>
          <p className="text-xs text-muted-foreground">
            <Link to="/" className="hover:text-primary transition-colors">vamsikrishnakollipara.vercel.app</Link>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
