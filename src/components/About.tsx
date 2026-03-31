import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Download, ExternalLink } from 'lucide-react';

const About: React.FC = () => {
  return (
    <section className="py-12 md:py-20 px-4 md:px-6 lg:px-24" id="about">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">About Me</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Full-stack developer who has shipped healthcare web portals, RAG pipelines, and data automation systems using React, Next.js, Node.js, and PostgreSQL. MS in Computer Science (Indiana State University, GPA 3.66) with enterprise experience at Cognizant and two production RAG systems built with LangChain, OpenAI API, and Pinecone.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-start">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="space-y-6"
          >
            <div className="space-y-3 md:space-y-4">
              <h3 className="text-xl md:text-2xl font-bold">Full-Stack Developer</h3>
              <p className="text-sm md:text-base text-muted-foreground">
                Full-stack developer with enterprise experience shipping healthcare web portals, RAG pipelines, and data automation systems. At AIDM, built two healthcare web portals with Next.js, Node.js, GraphQL, and PostgreSQL supporting multi-role access for clinical and administrative users. Implemented HIPAA-aligned security controls, Azure AD SSO integration, and a healthcare-domain RAG assistant with LangChain and Pinecone. Previously at Cognizant, built React UI components and Express.js REST APIs for client-facing logistics dashboards.
              </p>
            </div>

            <div className="space-y-3 md:space-y-4">
              <h4 className="text-lg md:text-xl font-semibold">Key Focus Areas</h4>
              <ul className="list-disc list-inside space-y-2 text-sm md:text-base text-muted-foreground">
                <li>Full-stack web development with React, Next.js, Node.js, and PostgreSQL</li>
                <li>Building HIPAA-compliant healthcare platforms with enterprise SSO and RBAC</li>
                <li>RAG pipelines and LLM integrations with LangChain, OpenAI API, and Pinecone</li>
                <li>Open-source developer tools — 3 packages published on PyPI</li>
              </ul>
            </div>

            <div className="space-y-3 md:space-y-4">
              <h4 className="text-lg md:text-xl font-semibold">Current Work</h4>
              <p className="text-sm md:text-base text-muted-foreground">
                At AIDM, I'm building healthcare web portals with Next.js, Node.js, GraphQL, and PostgreSQL within a 6-person cross-functional team. I've implemented HIPAA-aligned security controls (AES-256 encryption, RBAC, audit logging), integrated Azure AD with Microsoft Graph API for enterprise SSO, built a healthcare-domain RAG assistant with LangChain and Pinecone, and automated 5 internal workflows eliminating ~10 hours/week of manual effort.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
              <Button className="w-full sm:w-auto" asChild>
                <a 
                  href="/vamsi_krishna.pdf"
                  download
                  className="inline-flex items-center gap-2 text-sm font-medium text-primary hover:text-primary/80 transition-colors"
                >
                  <Download size={16} />
                  Download Resume
                </a>
              </Button>
              <Button className="w-full sm:w-auto" variant="outline" asChild>
                <a 
                  href="https://github.com/vamsi876" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="gap-2"
                >
                  <ExternalLink size={16} />
                  View Projects
                </a>
              </Button>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="space-y-6"
          >
            <div className="glass-dark p-4 md:p-6 rounded-xl space-y-4">
              <h4 className="text-lg md:text-xl font-semibold">Education</h4>
              <div className="space-y-4">
                <div>
                  <h5 className="font-medium">Masters in Computer Science</h5>
                  <p className="text-xs md:text-sm text-muted-foreground">Indiana State University - Terre Haute, IN</p>
                  <p className="text-xs md:text-sm text-muted-foreground">Aug 2023 - May 2025</p>
                  <p className="text-xs md:text-sm text-muted-foreground">GPA: 3.66/4.0</p>
                </div>
                <div>
                  <h5 className="font-medium">Bachelor of Technology in Electronics & Communication Engineering</h5>
                  <p className="text-xs md:text-sm text-muted-foreground">Vel Tech University — Chennai, India</p>
                  <p className="text-xs md:text-sm text-muted-foreground">Jun 2018 - May 2022 | GPA: 9.01/10</p>
                </div>
              </div>
            </div>

            <div className="glass-dark p-4 md:p-6 rounded-xl space-y-4">
              <h4 className="text-lg md:text-xl font-semibold">Open Source — PyPI Packages</h4>
              <div className="space-y-3">
                <div>
                  <h5 className="font-medium">GitBar — macOS Menubar Git Dashboard</h5>
                  <a
                    href="https://pypi.org/project/gitbar/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs md:text-sm text-muted-foreground hover:text-primary transition-colors flex items-center gap-1"
                  >
                    Unified menubar dashboard for PRs, issues, CI/CD across GitHub, GitLab & Bitbucket
                    <ExternalLink size={12} />
                  </a>
                </div>
                <div>
                  <h5 className="font-medium">GadgetBox — Developer Utilities</h5>
                  <a
                    href="https://pypi.org/project/gadgetbox/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs md:text-sm text-muted-foreground hover:text-primary transition-colors flex items-center gap-1"
                  >
                    System tray app with 12 dev utilities — JSON formatter, JWT decoder, UUID gen & more
                    <ExternalLink size={12} />
                  </a>
                </div>
                <div>
                  <h5 className="font-medium">WebWeaver — Web Crawling Library</h5>
                  <a
                    href="https://pypi.org/project/WebWeaver/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs md:text-sm text-muted-foreground hover:text-primary transition-colors flex items-center gap-1"
                  >
                    Async web crawling with URL validation, deduplication & robots.txt compliance
                    <ExternalLink size={12} />
                  </a>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About; 