import React from 'react';
import { Download, Mail, Phone, GraduationCap, Briefcase, Award, ExternalLink, Linkedin, Github, Globe, Code2 } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Resume: React.FC = () => {
  const pdfUrl = '/vamsi_krishna.pdf';

  const summary = {
    title: "Full-Stack Developer",
    description: "Full-stack developer with 2+ years of industry experience shipping React/TypeScript frontends and Node.js backends across healthcare and energy domains, plus hands-on AI integration (RAG pipelines with LangChain and Pinecone, Claude API). Most recently sole developer on a Supabase-powered operations platform serving 8 organizational roles daily. MS in Computer Science from Indiana State University. 3 published PyPI packages."
  };

  const education = [
    {
      degree: "Master of Science in Computer Science",
      school: "Indiana State University",
      location: "Terre Haute, IN",
      date: "Aug 2023 - May 2025",
      gpa: "3.66"
    },
    {
      degree: "Bachelor of Technology in Electronics & Communication Engineering",
      school: "Vel Tech University",
      location: "Chennai, India",
      date: "Jun 2018 - May 2022",
      gpa: "9.01/10"
    }
  ];

  const experience = [
    {
      title: "Full-Stack Developer",
      company: "AIDM Software Consultancy",
      location: "Remote",
      date: "Jul 2025 – Present",
      achievements: [
        "Architected a healthcare data integration pipeline ingesting clinical data from Homecare Homebase (HCHB) EHR via SFTP log shipping into SQL Server 2022 on Azure, feeding a Next.js operational analytics dashboard.",
        "Built PowerShell automation chaining WinSCP SFTP download and SQL Server transaction log restore into an idempotent hourly SQL Agent job, with lock-file concurrency control, structured logging, and exit-code-driven email alerts.",
        "Built and shipped a full-stack operations platform (React 18, TypeScript, Vite, Tailwind, shadcn/ui, GraphQL) on Supabase (PostgreSQL, Auth, Storage, Edge Functions, RLS), deployed via GitHub Actions CI/CD across AWS and Vercel, consolidating HR/applicant tracking, hospice CRM, email campaigns, training/LMS, and e-commerce into one SPA used daily across 8 organizational roles over 10 months.",
        "Integrated Anthropic Claude via Supabase Edge Functions to automate resume screening with fit scoring and reasoning (PDF/DOCX parsing via mammoth and pdfjs-dist), generate one-click application and CRM-account summaries, and surface natural-language insights across a 24-chart analytics system with DB-level caching and per-user rate limiting.",
        "Designed a hospice CRM with account management, a stage-tracked opportunity pipeline, territory assignment, a FullCalendar visit planner, Leaflet map views with OSRM route optimization, and an Excel-to-Supabase census pipeline powering 7/14/30-day branch visit analytics.",
        "Developed an email campaign engine with dynamic CRM-driven templates, business-day scheduling, and Microsoft Graph API integration for organizational sending, plus transactional emails with delayed queues and reply tracking.",
        "Enforced multi-tenant RBAC across 8 roles via a centralized permission matrix, Supabase Row Level Security, JWT-verified Edge Function auth, and Azure AD SSO with identity linking."
      ]
    },
    {
      title: "Graduate Research & Teaching Assistant",
      company: "Indiana State University",
      location: "Terre Haute, IN",
      date: "Aug 2023 – May 2025",
      achievements: [
        "Built internal web applications for Indiana State University (React, Node.js, PostgreSQL), including a course catalog portal, faculty directory, and student resource dashboard used by academic departments.",
        "Built a RAG-powered knowledge assistant (LangChain, OpenAI API, Pinecone) for university staff to query academic policies and HR procedures, with configurable semantic retrieval, chunk-overlap tuning, and vector indexing.",
        "Built and open-sourced WebWeaver, a Python crawling library, and used it to ingest 40,000+ university URLs into a curated knowledge base of 8,000 documents powering the RAG assistant's semantic search."
      ]
    },
    {
      title: "Full-Stack Developer",
      company: "Cognizant Technology Solutions",
      location: "Hyderabad, India",
      date: "Jan 2022 – Jul 2023",
      achievements: [
        "Developed React-based portal modules for Duke Energy's energy management platform, delivering real-time usage analytics, billing history, and outage status with interactive D3.js visualizations to residential and commercial customers.",
        "Built Node.js/Express REST APIs integrated with Oracle and SAP backends to surface smart meter telemetry data, achieving sub-200ms p95 latency through Redis caching and connection pooling.",
        "Built an internal outage reporting dashboard (React, PostgreSQL, Mapbox GL) aggregating grid sensor data to help operations teams identify fault zones and coordinate field crew dispatch.",
        "Optimized SQL queries on multi-million-row smart meter and billing tables, reducing average execution time by 30% through composite indexing, join restructuring, and eliminating N+1 patterns.",
        "Contributed to integrating grid event feeds into the customer notification system, building Node.js/RabbitMQ services that triggered real-time outage alerts via email and SMS.",
        "Wrote unit and integration tests (Jest, React Testing Library) achieving 85%+ code coverage across frontend and API layers."
      ]
    }
  ];

  const openSourceContributions = [
    {
      project: "GitBar — macOS Menubar Git Dashboard (PyPI)",
      date: "Mar 2026",
      description: "Built and published an open-source macOS menubar app providing a unified Git dashboard aggregating PRs, issues, CI/CD status, and local repo health across GitHub, GitLab, and Bitbucket.",
      tech: "Python, PyObjC, GitHub/GitLab REST APIs",
      link: "https://pypi.org/project/gitbar/"
    },
    {
      project: "GadgetBox — Cross-Platform Developer Utilities (PyPI)",
      date: "Feb 2026",
      description: "Published a cross-platform system tray app bundling 12 developer utilities (JSON formatter, JWT decoder, UUID generator, Base64, hash, regex tester, etc.) with intelligent clipboard auto-detection.",
      tech: "Python, pystray, tkinter",
      link: "https://pypi.org/project/gadgetbox/"
    },
    {
      project: "WebWeaver — Web Scraping & Crawling Library (PyPI)",
      date: "Sep 2024",
      description: "Open-source Python library for configurable web crawling with URL validation, deduplication, robots.txt compliance, and recursive/breadth-first modes; powers the data ingestion layer behind the ISU RAG chatbot.",
      tech: "Python, asyncio, aiohttp",
      link: "https://pypi.org/project/WebWeaver/"
    }
  ];

  const skills = {
    languages: ["JavaScript", "TypeScript", "Python", "SQL", "PowerShell", "HTML", "CSS"],
    frontend: ["React", "Next.js", "Vite", "Tailwind CSS", "shadcn/ui", "D3.js", "Mapbox GL"],
    backend: ["Node.js", "Express.js", "GraphQL", "REST APIs", "RabbitMQ"],
    databases: ["PostgreSQL", "SQL Server", "Oracle", "Redis", "Pinecone"],
    cloud_and_devops: ["Azure", "AWS", "Docker", "GitHub Actions", "CI/CD", "Vercel", "Supabase"],
    ai_and_llm: ["Anthropic Claude API", "LangChain", "OpenAI API", "Vector Databases", "RAG"],
    tools: ["Git", "Postman", "Jest", "React Testing Library", "Pytest"]
  };

  return (
    <section className="py-20 px-6 md:px-12 lg:px-24" id="resume">
      <div className="container mx-auto max-w-5xl">
        <div className="text-center mb-16">
          <span className="section-number">06 — RESUME</span>
          <h2 className="text-3xl md:text-4xl font-bold mb-4 mt-2">Resume</h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            A comprehensive overview of my education, experience, and skills.
          </p>
        </div>

        <div className="bg-card border border-[hsl(var(--card-border))] p-8 rounded-2xl">
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold mb-2 text-foreground">VAMSI KRISHNA KOLLIPARA</h1>
            <div className="flex flex-wrap justify-center gap-3 text-sm text-muted-foreground">
              <a href="mailto:kolliparavamsikrishna80@gmail.com" className="hover:text-primary transition-colors flex items-center">
                <Mail className="mr-1" size={14} />
                kolliparavamsikrishna80@gmail.com
              </a>
              <span>|</span>
              <a href="tel:+18122238818" className="hover:text-primary transition-colors flex items-center">
                <Phone className="mr-1" size={14} />
                812-223-8818
              </a>
              <span>|</span>
              <a 
                href="https://www.linkedin.com/in/vamsikollipara/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-primary transition-colors flex items-center"
              >
                <Linkedin size={14} className="mr-1" />
                LinkedIn
              </a>
              <span>|</span>
              <a 
                href="https://github.com/vamsi876"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-primary transition-colors flex items-center"
              >
                <Github size={14} className="mr-1" />
                GitHub
              </a>
              <span>|</span>
              <a 
                href="https://vamsikrishnakollipara.vercel.app"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-primary transition-colors flex items-center"
              >
                <Globe size={14} className="mr-1" />
                Portfolio
              </a>
            </div>
          </div>

          {/* Summary */}
          <div className="mb-12">
            <h2 className="text-2xl font-bold mb-6 text-foreground">Summary</h2>
            <div className="bg-secondary/50 border border-[hsl(var(--card-border))] p-4 rounded-lg">
              <p className="text-sm text-muted-foreground">{summary.description}</p>
            </div>
          </div>

          {/* Skills */}
          <div className="mb-12">
            <h2 className="text-2xl font-bold mb-6 text-foreground flex items-center">
              <Award className="mr-2" size={24} />
              Skills
            </h2>
            <div className="bg-secondary/50 border border-[hsl(var(--card-border))] p-4 rounded-lg space-y-3">
              <div>
                <span className="font-semibold">Languages:</span>{' '}
                <span className="text-muted-foreground">{skills.languages.join(', ')}</span>
              </div>
              <div>
                <span className="font-semibold">Frontend:</span>{' '}
                <span className="text-muted-foreground">{skills.frontend.join(', ')}</span>
              </div>
              <div>
                <span className="font-semibold">Backend:</span>{' '}
                <span className="text-muted-foreground">{skills.backend.join(', ')}</span>
              </div>
              <div>
                <span className="font-semibold">Databases:</span>{' '}
                <span className="text-muted-foreground">{skills.databases.join(', ')}</span>
              </div>
              <div>
                <span className="font-semibold">Cloud & DevOps:</span>{' '}
                <span className="text-muted-foreground">{skills.cloud_and_devops.join(', ')}</span>
              </div>
              <div>
                <span className="font-semibold">AI & LLM:</span>{' '}
                <span className="text-muted-foreground">{skills.ai_and_llm.join(', ')}</span>
              </div>
              <div>
                <span className="font-semibold">Tools:</span>{' '}
                <span className="text-muted-foreground">{skills.tools.join(', ')}</span>
              </div>
            </div>
          </div>

          {/* Experience */}
          <div className="mb-12">
            <h2 className="text-2xl font-bold mb-6 text-foreground flex items-center">
              <Briefcase className="mr-2" size={24} />
              Experience
            </h2>
            <div className="space-y-8">
              {experience.map((exp, index) => (
                <div key={index} className="bg-secondary/50 border border-[hsl(var(--card-border))] p-4 rounded-lg">
                  <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-1 mb-3">
                    <div>
                      <h3 className="text-lg font-semibold">{exp.title}, {exp.company}</h3>
                      <p className="text-sm text-muted-foreground">{exp.location}</p>
                    </div>
                    <span className="text-sm text-muted-foreground whitespace-nowrap">{exp.date}</span>
                  </div>
                  <ul className="space-y-2 list-disc list-outside ml-4">
                    {exp.achievements.map((achievement, i) => (
                      <li key={i} className="text-sm text-muted-foreground">
                        {achievement}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* Education */}
          <div className="mb-12">
            <h2 className="text-2xl font-bold mb-6 text-foreground flex items-center">
              <GraduationCap className="mr-2" size={24} />
              Education
            </h2>
            <div className="space-y-6">
              {education.map((edu, index) => (
                <div key={index} className="bg-secondary/50 border border-[hsl(var(--card-border))] p-4 rounded-lg">
                  <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-1">
                    <div>
                      <h3 className="text-lg font-semibold">{edu.degree}</h3>
                      <p className="text-muted-foreground">{edu.school}, {edu.location}</p>
                    </div>
                    <div className="text-right">
                      <p className="text-sm text-muted-foreground">{edu.date}</p>
                      <p className="text-sm font-medium">GPA: {edu.gpa}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Projects & Open Source */}
          <div>
            <h2 className="text-2xl font-bold mb-6 text-foreground flex items-center">
              <Code2 className="mr-2" size={24} />
              Projects & Open-Source
            </h2>
            <div className="space-y-6">
              {openSourceContributions.map((contribution, index) => (
                <div key={index} className="bg-secondary/50 border border-[hsl(var(--card-border))] p-4 rounded-lg">
                  <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-1 mb-2">
                    <h3 className="text-lg font-semibold">{contribution.project}</h3>
                    <span className="text-sm text-muted-foreground">{contribution.date}</span>
                  </div>
                  <p className="text-sm mb-2">{contribution.description}</p>
                  <p className="text-sm text-muted-foreground mb-2">Tech: {contribution.tech}</p>
                  {contribution.link && (
                    <a 
                      href={contribution.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm text-primary hover:text-primary/80 flex items-center gap-1"
                    >
                      <ExternalLink size={14} />
                      View on PyPI
                    </a>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Download Button */}
        <div className="text-center mt-8">
          <Button size="lg" variant="outline" className="gap-2 border-primary/30 text-primary hover:border-primary hover:bg-primary/10" asChild>
            <a 
              href="/vamsi_krishna.pdf"
              download
              className="inline-flex items-center gap-2 text-sm font-medium text-primary hover:text-primary/80 transition-colors"
            >
              <Download size={18} />
              Download PDF
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Resume; 