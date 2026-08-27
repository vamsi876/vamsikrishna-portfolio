// Single source of truth for résumé content. Mirrors public/vamsi_krishna.pdf.
// Experience.tsx, Resume.tsx and ChatBot.tsx all read from here — update this file only.

export const profile = {
  name: 'Vamsi Krishna Kollipara',
  title: 'Full-Stack Engineer',
  location: 'San Francisco, CA',
  email: 'kolliparavamsikrishna80@gmail.com',
  phone: '812-223-8818',
  linkedin: 'https://www.linkedin.com/in/vamsikollipara/',
  github: 'https://github.com/vamsi876',
  portfolio: 'https://vamsikrishnakollipara.vercel.app',
};

export const summary =
  'Full-stack engineer who builds systems where being wrong is expensive: APIs other teams build on, delegated authorization over sensitive data, and LLM pipelines with guardrails around them. Currently the only engineer on client-facing products, owning them from discovery through production incident response. Earlier, backend and API work over multi-million-row utility billing and metering data.';

export const shortBio =
  'Full-stack engineer building APIs other teams depend on, delegated authorization over sensitive data, and LLM pipelines with guardrails around them. Currently the sole engineer on client-facing products in HIPAA-regulated environments.';

export const skillGroups = [
  { title: 'Languages', skills: ['TypeScript', 'JavaScript', 'Python', 'SQL'] },
  {
    title: 'Backend & APIs',
    skills: ['Node.js', 'GraphQL', 'REST', 'Serverless Functions', 'PostgreSQL', 'SQL Server'],
  },
  {
    title: 'AI / LLM',
    skills: [
      'Anthropic Claude API',
      'RAG',
      'Schema-validated structured output',
      'LangChain',
      'Pinecone',
    ],
  },
  {
    title: 'Cloud & Infra',
    skills: ['AWS', 'Azure', 'Supabase', 'Vercel', 'GitHub Actions CI/CD'],
  },
  { title: 'Frontend', skills: ['React', 'Next.js', 'Tailwind CSS'] },
];

export interface Job {
  id: string;
  title: string;
  company: string;
  location: string;
  startDate: string;
  endDate: string;
  context?: string;
  description: string[];
  active?: boolean;
}

export const jobs: Job[] = [
  {
    id: 'job1',
    title: 'Full-Stack Engineer (Forward-Deployed)',
    company: 'AI Data Management',
    location: 'Remote',
    startDate: 'Jul 2025',
    endDate: 'Present',
    active: true,
    context:
      'Sole engineer on client-facing products in HIPAA-regulated environments; owned discovery through production operations.',
    description: [
      'Designed and shipped a multi-tenant platform end-to-end: GraphQL API over Postgres with serverless functions, React frontend, GitHub Actions CI/CD deploying to Vercel and AWS. Consolidated HR/ATS, CRM, email, LMS, and e-commerce for 8 role types.',
      'Built the authorization model for delegated, scope-limited access: centralized RBAC across 8 roles, database-enforced Row Level Security, JWT-verified serverless endpoints, and Azure AD SSO. Every request had to prove who it acted on behalf of and what that principal could do.',
      'Owned a production LLM pipeline and the guardrails around it: retrieval, context management, schema-validated structured output so downstream code can trust the shape, per-user rate limiting, response caching, and human review before any output counted.',
      'Architected the chart-audit product behind that pipeline (Claude + RAG over EHR records, Azure Functions, Python, GraphQL, SQL Server), drafting a 120+ question clinical review protocol and raising physician throughput from 10 to 30+ audits/day.',
      'Built an idempotent ELT pipeline moving regulated data out of a third-party EHR into SQL Server on Azure: hourly batch jobs with concurrency control, structured logging, and failure alerting.',
      'Operated what I shipped: monitoring, production incident response, and usage-driven iteration, alongside discovery, technical proposals, and stakeholder demos.',
    ],
  },
  {
    id: 'job2',
    title: 'Graduate Assistant',
    company: 'Indiana State University',
    location: 'Terre Haute, IN',
    startDate: 'Aug 2023',
    endDate: 'May 2025',
    description: [
      'Built a RAG knowledge assistant end-to-end, from ingestion through retrieval to generation, letting university staff query academic policy and HR procedure. LangChain, Pinecone, and a self-hosted open-source LLM over a curated 8,000-document corpus, with configurable semantic retrieval, chunk-overlap tuning, and vector indexing.',
      'Wrote and open-sourced WebWeaver, an async Python crawling library, and used it to ingest 40,000+ university URLs as that system’s ingestion layer.',
      'Built internal web applications (React, Node.js, PostgreSQL) used by academic departments.',
    ],
  },
  {
    id: 'job3',
    title: 'Programmer Analyst, Full-Stack',
    company: 'Cognizant',
    location: 'Hyderabad, India',
    startDate: 'Jan 2022',
    endDate: 'Jul 2023',
    context: 'Client: Duke Energy',
    description: [
      'Built and tested REST API endpoints serving metering, billing, and account data from Oracle and SAP systems to a high-traffic customer self-service platform; added caching and connection pooling that cut response times on the hottest endpoints.',
      'Optimized SQL against multi-million-row smart-meter (AMI) and billing tables: composite indexes, restructured joins, and eliminated N+1 patterns, cutting execution time on targeted queries by 30%.',
      'Built the billing and usage surfaces of the customer portal (usage analytics, billing history, outage status) with D3.js components; unit and integration tests (Jest, RTL) at 85%+ coverage.',
      'Built integration components and message handlers for the customer notification workflow (outage and billing alerts over email and SMS).',
    ],
  },
];

export const education = [
  {
    degree: 'M.S. Computer Science',
    school: 'Indiana State University',
    location: 'Terre Haute, IN',
    date: 'Aug 2023 – May 2025',
    gpa: '3.66',
  },
  {
    degree: 'B.Tech Electronics & Communication Engineering',
    school: 'Vel Tech University',
    location: 'Chennai, India',
    date: 'Jun 2018 – May 2022',
    gpa: '9.01/10',
  },
];

export const openSource = [
  {
    project: 'GitBar — macOS Menubar Git Dashboard (PyPI)',
    name: 'GitBar',
    date: 'Mar 2026',
    description:
      'macOS menubar Git dashboard aggregating pull requests, issues, and CI status across GitHub, GitLab, and Bitbucket.',
    tech: 'Python, PyObjC, REST APIs',
    link: 'https://pypi.org/project/gitbar/',
  },
  {
    project: 'GadgetBox — Cross-Platform Developer Utilities (PyPI)',
    name: 'GadgetBox',
    date: 'Feb 2026',
    description:
      'Cross-platform system tray app bundling 12 developer utilities (JSON formatter, JWT decoder, UUID generator, Base64, hash, regex tester) with clipboard auto-detection.',
    tech: 'Python, pystray, tkinter',
    link: 'https://pypi.org/project/gadgetbox/',
  },
  {
    project: 'WebWeaver — Async Web Crawling Library (PyPI)',
    name: 'WebWeaver',
    date: 'Sep 2024',
    description:
      'Async web crawling library with robots.txt compliance, deduplication, and BFS/recursive modes; the ingestion layer behind the ISU RAG assistant.',
    tech: 'Python, asyncio, aiohttp',
    link: 'https://pypi.org/project/WebWeaver/',
  },
];
