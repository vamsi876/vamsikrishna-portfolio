import React, { useState } from 'react';
import { cn } from '@/lib/utils';
import { Briefcase, Calendar, ChevronRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

interface Job {
  id: string;
  title: string;
  company: string;
  location: string;
  startDate: string;
  endDate: string;
  description: string[];
  active?: boolean;
}

const Experience: React.FC = () => {
  const [activeJob, setActiveJob] = useState<string>('job1');

  const jobs: Job[] = [
    {
      id: 'job1',
      title: 'Full-Stack Developer',
      company: 'AIDM Software Consultancy',
      location: 'Remote',
      startDate: 'Jul 2025',
      endDate: 'Present',
      active: true,
      description: [
        'Architected a healthcare data integration pipeline ingesting clinical data from Homecare Homebase (HCHB) EHR via SFTP log shipping into SQL Server 2022 on Azure, feeding a Next.js operational analytics dashboard.',
        'Built PowerShell automation chaining WinSCP SFTP download and SQL Server transaction log restore into an idempotent hourly SQL Agent job, with lock-file concurrency control, structured logging, and exit-code-driven email alerts.',
        'Built and shipped a full-stack operations platform (React 18, TypeScript, Vite, Tailwind, shadcn/ui, GraphQL) on Supabase (PostgreSQL, Auth, Storage, Edge Functions, RLS), deployed via GitHub Actions CI/CD across AWS and Vercel, consolidating HR/applicant tracking, hospice CRM, email campaigns, training/LMS, and e-commerce into one SPA used daily across 8 organizational roles over 10 months.',
        'Integrated Anthropic Claude via Supabase Edge Functions to automate resume screening with fit scoring and reasoning (PDF/DOCX parsing via mammoth and pdfjs-dist), generate one-click application and CRM-account summaries, and surface natural-language insights across a 24-chart analytics system with DB-level caching and per-user rate limiting.',
        'Designed a hospice CRM with account management, a stage-tracked opportunity pipeline, territory assignment, a FullCalendar visit planner, Leaflet map views with OSRM route optimization, and an Excel-to-Supabase census pipeline powering 7/14/30-day branch visit analytics.',
        'Developed an email campaign engine with dynamic CRM-driven templates, business-day scheduling, and Microsoft Graph API integration for organizational sending, plus transactional emails with delayed queues and reply tracking.',
        'Enforced multi-tenant RBAC across 8 roles via a centralized permission matrix, Supabase Row Level Security, JWT-verified Edge Function auth, and Azure AD SSO with identity linking.',
      ],
    },
    {
      id: 'job2',
      title: 'Graduate Research & Teaching Assistant',
      company: 'Indiana State University',
      location: 'Terre Haute, IN',
      startDate: 'Aug 2023',
      endDate: 'May 2025',
      description: [
        'Built internal web applications for Indiana State University (React, Node.js, PostgreSQL), including a course catalog portal, faculty directory, and student resource dashboard used by academic departments.',
        'Built a RAG-powered knowledge assistant (LangChain, OpenAI API, Pinecone) for university staff to query academic policies and HR procedures, with configurable semantic retrieval, chunk-overlap tuning, and vector indexing.',
        "Built and open-sourced WebWeaver, a Python crawling library, and used it to ingest 40,000+ university URLs into a curated knowledge base of 8,000 documents powering the RAG assistant's semantic search.",
      ],
    },
    {
      id: 'job3',
      title: 'Full-Stack Developer',
      company: 'Cognizant Technology Solutions',
      location: 'Hyderabad, India',
      startDate: 'Jan 2022',
      endDate: 'Jul 2023',
      description: [
        "Developed React-based portal modules for Duke Energy's energy management platform, delivering real-time usage analytics, billing history, and outage status with interactive D3.js visualizations to residential and commercial customers.",
        'Built Node.js/Express REST APIs integrated with Oracle and SAP backends to surface smart meter telemetry data, achieving sub-200ms p95 latency through Redis caching and connection pooling.',
        'Built an internal outage reporting dashboard (React, PostgreSQL, Mapbox GL) aggregating grid sensor data to help operations teams identify fault zones and coordinate field crew dispatch.',
        'Optimized SQL queries on multi-million-row smart meter and billing tables, reducing average execution time by 30% through composite indexing, join restructuring, and eliminating N+1 patterns.',
        'Contributed to integrating grid event feeds into the customer notification system, building Node.js/RabbitMQ services that triggered real-time outage alerts via email and SMS.',
        'Wrote unit and integration tests (Jest, React Testing Library) achieving 85%+ code coverage across frontend and API layers.',
      ],
    },
  ];

  return (
    <section className="py-20 px-6 md:px-12 lg:px-24" id="experience">
      <div className="container mx-auto max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-12"
        >
          <span className="section-number">03 — EXPERIENCE</span>
          <h2 className="text-3xl md:text-4xl font-bold mt-2 text-foreground">Experience</h2>
          <p className="text-muted-foreground mt-2 max-w-xl">
            My professional journey in full-stack development, from enterprise systems to open-source tools.
          </p>
        </motion.div>

        <div className="flex flex-col md:flex-row gap-8">
          {/* Company tabs */}
          <div className="md:w-1/3">
            <div className="flex flex-row md:flex-col overflow-x-auto md:overflow-visible gap-1">
              {jobs.map((job, index) => (
                <motion.button
                  key={job.id}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, duration: 0.4 }}
                  onClick={() => setActiveJob(job.id)}
                  className={cn(
                    'px-4 py-3 text-left border-l-2 transition-all whitespace-nowrap md:whitespace-normal text-sm',
                    activeJob === job.id
                      ? 'border-primary text-foreground bg-primary/5'
                      : 'border-[hsl(var(--card-border))] text-muted-foreground hover:text-foreground hover:bg-card'
                  )}
                >
                  <div className="flex items-center gap-2">
                    <div className={cn(
                      'w-2 h-2 rounded-full flex-shrink-0',
                      job.active && activeJob === job.id ? 'bg-primary animate-pulse-green' : activeJob === job.id ? 'bg-primary' : 'bg-[hsl(var(--card-border))]'
                    )} />
                    {job.company}
                  </div>
                </motion.button>
              ))}
            </div>
          </div>

          {/* Job detail */}
          <div className="md:w-2/3">
            <AnimatePresence mode="wait">
              {jobs
                .filter((job) => job.id === activeJob)
                .map((job) => (
                  <motion.div
                    key={job.id}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="mb-4">
                      <h3 className="text-xl font-semibold text-foreground">
                        {job.title}{' '}
                        <span className="text-primary">@ {job.company}</span>
                      </h3>

                      <div className="flex items-center text-sm text-muted-foreground mt-1 gap-3">
                        <span className="flex items-center gap-1">
                          <Calendar size={14} />
                          {job.startDate} – {job.endDate}
                        </span>
                        <span className="flex items-center gap-1">
                          <Briefcase size={14} />
                          {job.location}
                        </span>
                      </div>
                    </div>

                    <ul className="space-y-3">
                      {job.description.map((item, index) => (
                        <motion.li
                          key={index}
                          initial={{ opacity: 0, x: 10 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: index * 0.05, duration: 0.3 }}
                          className="flex text-sm text-muted-foreground"
                        >
                          <ChevronRight size={16} className="mt-0.5 mr-2 text-primary flex-shrink-0" />
                          <span>{item}</span>
                        </motion.li>
                      ))}
                    </ul>
                  </motion.div>
                ))}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
