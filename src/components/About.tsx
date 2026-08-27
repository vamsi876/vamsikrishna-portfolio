import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Download, ExternalLink } from 'lucide-react';
import { useSpotlight } from '@/hooks/useSpotlight';
import { summary } from '@/data/resume';

const AboutCard: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const { ref, spotlightStyle, handlers } = useSpotlight();
  return (
    <div ref={ref} {...handlers} className="bg-card border border-[hsl(var(--card-border))] rounded-xl p-5 transition-colors hover:border-[hsl(var(--accent-border))]" style={spotlightStyle}>
      {children}
    </div>
  );
};

const About: React.FC = () => {
  const fadeUp = {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, margin: '-50px' },
    transition: { duration: 0.5 },
  };

  return (
    <section className="py-20 px-6 md:px-12 lg:px-24" id="about">
      <div className="container mx-auto max-w-5xl">
        <motion.div {...fadeUp} className="mb-12">
          <span className="section-number">01 — ABOUT</span>
          <h1 className="text-3xl md:text-4xl font-bold mt-2 text-foreground">About Vamsi Krishna Kollipara</h1>
        </motion.div>

        <motion.div {...fadeUp} transition={{ delay: 0.05, duration: 0.5 }} className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
          {[
            { label: 'Years Experience', value: '4+' },
            { label: 'PyPI Packages', value: '3' },
            { label: 'Domains', value: '3' },
            { label: 'Roles in RBAC Model', value: '8' },
          ].map((stat) => (
            <div key={stat.label} className="bg-card border border-[hsl(var(--card-border))] rounded-xl p-4 text-center">
              <div className="text-2xl font-bold text-primary">{stat.value}</div>
              <div className="text-xs text-muted-foreground mt-1">{stat.label}</div>
            </div>
          ))}
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
          <div className="space-y-6">
            <motion.div {...fadeUp} transition={{ delay: 0.1, duration: 0.5 }}>
              <div className="bg-card border border-[hsl(var(--card-border))] rounded-xl p-5">
                <h3 className="text-xl font-bold text-foreground mb-3">Full-Stack Engineer</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{summary}</p>
              </div>
            </motion.div>

            <motion.div {...fadeUp} transition={{ delay: 0.2, duration: 0.5 }}>
              <h4 className="text-lg font-semibold text-foreground mb-3">Key Focus Areas</h4>
              <div className="flex flex-wrap gap-2">
                {[
                  'APIs other teams build on (GraphQL, REST)',
                  'Delegated authorization (RBAC, Row Level Security)',
                  'Production LLM pipelines with guardrails',
                  'RAG and retrieval over regulated data',
                  'ELT pipelines and data integration',
                  'Open-source developer tools (PyPI)',
                ].map((area) => (
                  <span key={area} className="text-xs px-3 py-1.5 rounded-md bg-secondary border border-[hsl(var(--card-border))] text-muted-foreground">
                    {area}
                  </span>
                ))}
              </div>
            </motion.div>

            <motion.div {...fadeUp} transition={{ delay: 0.3, duration: 0.5 }}>
              <h4 className="text-lg font-semibold text-foreground mb-3">Current Work</h4>
              <p className="text-sm text-muted-foreground leading-relaxed">
At AI Data Management I am the only engineer on client-facing products in HIPAA-regulated environments, owning them from discovery through production incident response. I shipped a multi-tenant platform end-to-end — GraphQL API over Postgres with serverless functions, a React frontend, GitHub Actions CI/CD to Vercel and AWS — built its delegated authorization model (8-role RBAC, database-enforced Row Level Security, JWT-verified endpoints, Azure AD SSO), and own the production Claude + RAG pipeline behind a chart-audit product that raised physician throughput from 10 to 30+ audits/day.
              </p>
            </motion.div>

            <motion.div {...fadeUp} transition={{ delay: 0.4, duration: 0.5 }} className="flex gap-3">
              <Button className="bg-primary text-primary-foreground hover:bg-primary/90" asChild>
                <a href="/vamsi_krishna.pdf" download className="gap-2">
                  <Download size={16} />
                  Download Resume
                </a>
              </Button>
              <Button variant="outline" className="border-[hsl(var(--card-border))] text-muted-foreground hover:text-foreground hover:border-foreground/20" asChild>
                <a href="https://github.com/vamsi876" target="_blank" rel="noopener noreferrer" className="gap-2">
                  <ExternalLink size={16} />
                  View Projects
                </a>
              </Button>
            </motion.div>
          </div>

          <div className="space-y-4">
            <motion.div {...fadeUp} transition={{ delay: 0.2, duration: 0.5 }}>
              <AboutCard>
                <h4 className="text-lg font-semibold text-foreground mb-4">Education</h4>
                <div className="space-y-4">
                  <div>
                    <h5 className="font-medium text-foreground">M.S. Computer Science</h5>
                    <p className="text-xs text-muted-foreground">Indiana State University — Terre Haute, IN</p>
                    <p className="text-xs text-muted-foreground">Aug 2023 – May 2025 | GPA: 3.66/4.0</p>
                  </div>
                  <div>
                    <h5 className="font-medium text-foreground">B.Tech Electronics &amp; Communication Engineering</h5>
                    <p className="text-xs text-muted-foreground">Vel Tech University — Chennai, India</p>
                    <p className="text-xs text-muted-foreground">Jun 2018 – May 2022 | GPA: 9.01/10</p>
                  </div>
                </div>
              </AboutCard>
            </motion.div>

            <motion.div {...fadeUp} transition={{ delay: 0.3, duration: 0.5 }}>
              <AboutCard>
                <h4 className="text-lg font-semibold text-foreground mb-4">Open Source — PyPI Packages</h4>
                <div className="space-y-3">
                  {[
                    { name: 'GitBar', desc: 'Menubar Git dashboard for PRs, issues, CI status', url: 'https://pypi.org/project/gitbar/' },
                    { name: 'GadgetBox', desc: 'System tray app with 12 dev utilities', url: 'https://pypi.org/project/gadgetbox/' },
                    { name: 'WebWeaver', desc: 'Async crawling with robots.txt compliance', url: 'https://pypi.org/project/WebWeaver/' },
                  ].map((pkg) => (
                    <div key={pkg.name}>
                      <h5 className="font-medium text-foreground">{pkg.name}</h5>
                      <a href={pkg.url} target="_blank" rel="noopener noreferrer" className="text-xs text-muted-foreground hover:text-primary transition-colors flex items-center gap-1">
                        {pkg.desc}
                        <ExternalLink size={10} />
                      </a>
                    </div>
                  ))}
                </div>
              </AboutCard>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
