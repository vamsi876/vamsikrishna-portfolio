
import React, { useState } from 'react';
import { cn } from '@/lib/utils';
import { 
  Briefcase, 
  Calendar, 
  ChevronRight 
} from 'lucide-react';

interface Job {
  id: string;
  title: string;
  company: string;
  location: string;
  startDate: string;
  endDate: string;
  description: string[];
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
        'Built and open-sourced WebWeaver, a Python crawling library, and used it to ingest 40,000+ university URLs into a curated knowledge base of 8,000 documents powering the RAG assistant\'s semantic search.',
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
        'Developed React-based portal modules for Duke Energy\'s energy management platform, delivering real-time usage analytics, billing history, and outage status with interactive D3.js visualizations to residential and commercial customers.',
        'Built Node.js/Express REST APIs integrated with Oracle and SAP backends to surface smart meter telemetry data, achieving sub-200ms p95 latency through Redis caching and connection pooling.',
        'Built an internal outage reporting dashboard (React, PostgreSQL, Mapbox GL) aggregating grid sensor data to help operations teams identify fault zones and coordinate field crew dispatch.',
        'Optimized SQL queries on multi-million-row smart meter and billing tables, reducing average execution time by 30% through composite indexing, join restructuring, and eliminating N+1 patterns.',
        'Contributed to integrating grid event feeds into the customer notification system, building Node.js/RabbitMQ services that triggered real-time outage alerts via email and SMS.',
        'Wrote unit and integration tests (Jest, React Testing Library) achieving 85%+ code coverage across frontend and API layers.',
      ],
    },
  ];

  const handleJobClick = (jobId: string) => {
    setActiveJob(jobId);
  };

  return (
    <section className="py-20 px-6 md:px-12 lg:px-24" id="experience">
      <div className="container mx-auto max-w-5xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Experience</h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            My professional journey in full-stack development, from enterprise systems to open-source tools.
          </p>
        </div>

        <div className="flex flex-col md:flex-row gap-8">
          <div className="md:w-1/3">
            <div className="flex flex-row md:flex-col overflow-x-auto md:overflow-visible">
              {jobs.map((job) => (
                <button
                  key={job.id}
                  onClick={() => handleJobClick(job.id)}
                  className={cn(
                    "px-4 py-3 text-left border-b-2 md:border-b-0 md:border-l-2 border-secondary hover:bg-secondary/50 transition-all whitespace-nowrap md:whitespace-normal",
                    activeJob === job.id
                      ? "border-primary text-primary font-medium md:bg-secondary/50"
                      : "border-muted text-muted-foreground"
                  )}
                >
                  {job.company}
                </button>
              ))}
            </div>
          </div>
          
          <div className="md:w-2/3">
            {jobs
              .filter((job) => job.id === activeJob)
              .map((job) => (
                <div key={job.id} className="animate-fade-in">
                  <div className="mb-4">
                    <h3 className="text-xl font-semibold">
                      {job.title}{" "}
                      <span className="text-primary">@ {job.company}</span>
                    </h3>
                    
                    <div className="flex items-center text-sm text-muted-foreground mt-1">
                      <Calendar size={14} className="mr-1" />
                      <span>
                        {job.startDate} - {job.endDate}
                      </span>
                      
                      <div className="mx-2">•</div>
                      
                      <Briefcase size={14} className="mr-1" />
                      <span>{job.location}</span>
                    </div>
                  </div>
                  
                  <ul className="space-y-3">
                    {job.description.map((item, index) => (
                      <li key={index} className="flex">
                        <ChevronRight size={18} className="mt-0.5 mr-2 text-primary flex-shrink-0" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
