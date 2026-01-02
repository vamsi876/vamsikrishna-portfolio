
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
      title: 'AI Developer',
      company: 'AIDM',
      location: 'Terre Haute, IN',
      startDate: 'Jul 2025',
      endDate: 'Present',
      description: [
        'Developed full-stack healthcare web platforms from scratch, delivering secure, scalable employee portals used by 250 employees and 100+ employees across two client organizations.',
        'Built HIPAA- and SOC-compliant applications with high-security controls, including encryption, audit-friendly logging, secure PHI handling, and policy-based data governance.',
        'Implemented authentication, RBAC, and least-privilege access, ensuring secure user management and compliant data access across multi-role healthcare environments.',
        'Created an Azure Enterprise Application integrated with Microsoft Graph API to enable authentication, email automations, secure communications, and operational workflows across the organization.',
        'Delivered AI-powered features and automations, including RAG-based LLM assistants (cleaning, chunking, embeddings, vector search), workflow pipelines, monitoring/guardrails, and 20+ n8n + custom scripting automations for content scheduling, approvals, publishing, and reporting.',
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
        'Built a university RAG chatbot to answer queries on courses, deadlines, and policies by converting web content into a searchable knowledge base.',
        'Developed large-scale web crawling + scraping pipelines (40,000+ URLs, 10,000+ sites) to collect and structure university data for downstream NLP use.',
        'Created an end-to-end dataset creation + ETL workflow: extraction, validation, cleaning, deduplication, and normalization to ensure high-quality documents.',
        'Implemented document chunking, embedding/vectorization, and indexing to support fast semantic retrieval and accurate RAG-based responses for students and staff.',
      ],
    },
    {
      id: 'job3',
      title: 'Data Analyst',
      company: 'Cognizant Technology Solutions',
      location: 'Hyderabad, India',
      startDate: 'Jul 2022',
      endDate: 'Jul 2023',
      description: [
        'Managed and optimized 5+ SQL databases, improving query performance by 30%, while collaborating with 3+ cross-functional teams to deliver reliable database operations and meet business data requirements.',
        'Executed 100+ monthly Python/SQL transformations and automated 20+ workflows, performing data quality checks across 1M+ records to reduce manual effort by 40% and improve system reliability by 25%.',
      ],
    },
    {
      id: 'job4',
      title: 'Data Analyst Intern',
      company: 'Cognizant Technology Solutions',
      location: 'Hyderabad, India',
      startDate: 'Jan 2022',
      endDate: 'May 2022',
      description: [
        'Designed and maintained ETL pipelines using Informatica PowerCenter, ensuring accurate and efficient data extraction, transformation, and loading for enterprise reporting.',
        'Used SQL for querying and business reporting, and built 10+ Power BI dashboards and interactive reports to deliver actionable insights aligned with business objectives.',
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
            My professional journey and work experience in AI engineering and data analysis.
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
