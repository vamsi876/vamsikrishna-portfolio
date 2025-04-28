
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
      title: 'Graduate Research & Teaching Assistant',
      company: 'Indiana State University',
      location: 'Terre Haute, IN',
      startDate: 'Aug 2023',
      endDate: 'Present',
      description: [
        'Developed a voice AI chatbot leveraging LLMs, RAG, and retrieval systems to assist students with university policies and deadlines, enhancing engagement.',
        'Engineered multi-channel AI automation (voice, email, and chat) for student queries, reducing manual intervention.',
        'Designed intelligent escalation systems that analyze conversations and route students to human advisors when necessary.',
        'Implemented LlamaParser-based document parsing for automated policy and academic document retrieval.',
        'Built an AI-powered grading automation system, cutting grading time by 80% while maintaining accuracy.',
        'Developed a graph-based conversation memory system (Zep AI) to enhance chatbot contextual retention.',
        'Led lab sessions on operating systems, database management, and cloud infrastructure, assisting students in system design and implementation.',
      ],
    },
    {
      id: 'job2',
      title: 'Data Analyst',
      company: 'Cognizant Technology Solutions',
      location: 'Hyderabad, India',
      startDate: 'Jul 2022',
      endDate: 'Jul 2023',
      description: [
        'Optimized data processing pipelines for 1M+ records, improving system efficiency by 25%.',
        'Integrated AI-driven data retrieval mechanisms for operational analytics.',
        'Automated data transformation workflows, cutting manual effort by 40%.',
        'Designed PostgreSQL and Redis-backed customer data architectures to ensure high availability.',
      ],
    },
    {
      id: 'job3',
      title: 'Data Analyst Intern',
      company: 'Cognizant Technology Solutions',
      location: 'Hyderabad, India',
      startDate: 'Jan 2022',
      endDate: 'May 2022',
      description: [
        'Developed ETL processes using Informatica PowerCenter, ensuring high-accuracy data processing.',
        'Created interactive storage analytics dashboards in Power BI for real-time system monitoring.',
        'Worked with distributed storage environments, improving data integration efficiency.',
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
