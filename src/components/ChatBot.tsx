import React, { useState, useRef, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { MessageCircle, X, Loader2 } from 'lucide-react';
import { cn } from '@/lib/utils';
import { motion, AnimatePresence } from 'framer-motion';

interface Message {
  type: 'user' | 'bot';
  content: string;
  timestamp: number;
}

// Enhanced with more detailed information about Vamsi - Updated to match resume
const portfolioInfo = {
  name: "Vamsi Krishna Kollipara",
  summary: "AI Full-Stack Engineer with 2+ years shipping production React/TypeScript frontends and Node.js/Express backends on PostgreSQL, Redis, and Azure. Built an enterprise CRM with calendar, email (Microsoft Graph), and Claude-powered conversation analysis serving 8 roles daily, plus a RAG knowledge assistant on Pinecone vector search. Strong on enterprise auth (OAuth 2.0, JWT, Azure AD SSO, Row-Level Security) and secure API design. MS in Computer Science. 3 published PyPI packages.",

  experience: [
    {
      title: "AI Full-Stack Engineer",
      company: "AIDM Software Consultancy",
      location: "Remote",
      date: "Jul 2025 - Present",
      achievements: [
        "Architected and shipped an enterprise operations platform (React 18, TypeScript, Vite, Tailwind, shadcn/ui, GraphQL) on Node.js/Express services and Supabase Postgres, deployed via GitHub Actions across AWS and Vercel, consolidating CRM, applicant tracking, email campaigns, training/LMS, and analytics into one SPA used daily across 8 organizational roles for 10+ months",
        "Designed LLM-powered NLU services on Anthropic Claude (via Supabase Edge Functions) for client-relationship workflows: automated PDF/DOCX résumé screening with fit scoring and reasoning, one-click CRM-account and applicant summaries, action-item extraction, and natural-language insights across a 24-chart analytics system, with DB-level result caching and per-user rate limiting",
        "Built an audio-to-notes pipeline using OpenAI Whisper for transcription of uploaded recordings and in-browser live audio capture, with downstream Claude processing for summarization and action-item extraction; output stored both as CRM notes attached to accounts/contacts and as a searchable transcript table",
        "Implemented a CRM with stage-tracked opportunity pipeline, account/contact management, territory assignment, and a FullCalendar visit planner with Leaflet + OSRM route optimization covering the full advisor-style workflow from prospect to follow-up",
        "Built an email integration and campaign engine on Microsoft Graph API for organizational sending, with dynamic CRM-driven templates, business-day scheduling, transactional delayed queues, and webhook-driven inbound reply tracking",
        "Hardened the platform with enterprise auth and security: OAuth 2.0 + Azure AD SSO with identity linking, JWT-verified Edge Function endpoints, session management, and a centralized 8-role RBAC matrix enforced at the database layer via Postgres Row-Level Security",
        "Integrated semantic search using vector embeddings to surface relevant CRM history, prior meeting context, and policy documents inline in the user workflow"
      ]
    },
    {
      title: "Graduate Research & Teaching Assistant",
      company: "Indiana State University",
      location: "Terre Haute, IN",
      date: "Aug 2023 - May 2025",
      achievements: [
        "Built a RAG-powered knowledge assistant (LangChain, OpenAI API, Pinecone vector DB) for university staff to query academic policies and HR procedures in natural language, with configurable semantic retrieval, chunk-overlap tuning, and vector indexing",
        "Built internal web applications (React, Node.js, Express, PostgreSQL) including a course catalog portal, faculty directory, and student resource dashboard used by academic departments, with JWT session auth and REST APIs",
        "Open-sourced WebWeaver, a Python crawling library, and used it to ingest 40,000+ university URLs into a curated knowledge base of 8,000 documents powering the RAG assistant's semantic search"
      ]
    },
    {
      title: "Full-Stack Developer",
      company: "Cognizant Technology Solutions",
      location: "Hyderabad, India",
      date: "Jan 2022 - Jul 2023",
      achievements: [
        "Developed React-based portal modules for an enterprise energy management platform, delivering real-time usage analytics, billing history, and outage status with interactive D3.js visualizations",
        "Built Node.js/Express REST APIs integrated with Oracle and SAP backends to surface smart meter telemetry data, achieving sub-200ms p95 latency through Redis caching and connection pooling",
        "Built an internal outage reporting dashboard (React, PostgreSQL, Mapbox GL) aggregating grid sensor data to help operations teams identify fault zones and coordinate field crew dispatch",
        "Optimized SQL queries on multi-million-row smart meter and billing tables, reducing average execution time by 30% through composite indexing, join restructuring, and eliminating N+1 patterns",
        "Built Node.js/RabbitMQ services that triggered real-time outage alerts via email and SMS",
        "Wrote unit and integration tests (Jest, React Testing Library) achieving 85%+ code coverage across frontend and API layers"
      ]
    }
  ],

  skills: {
    languages: ["JavaScript", "TypeScript", "Python", "SQL", "PowerShell", "HTML", "CSS"],
    frontend: ["React", "Next.js", "Vite", "Tailwind CSS", "shadcn/ui", "D3.js", "Mapbox GL", "Responsive UI"],
    backend: ["Node.js", "Express.js", "REST APIs", "GraphQL", "Webhooks", "RabbitMQ", "Edge Functions"],
    databases: ["PostgreSQL", "SQL Server", "Oracle", "Redis", "Pinecone", "Supabase"],
    ai_llm: ["Anthropic Claude API", "OpenAI API", "LangChain", "RAG", "Vector Search", "Embeddings", "Prompt Engineering"],
    auth_security: ["OAuth 2.0", "JWT", "Session Management", "Azure AD SSO", "Row-Level Security", "RBAC", "Encryption at Rest/Transit"],
    cloud_devops: ["Azure", "AWS", "Docker", "GitHub Actions", "CI/CD", "Vercel"],
    tools: ["Git", "Postman", "Jest", "React Testing Library", "Pytest"]
  },

  education: [
    {
      degree: "Master of Science in Computer Science",
      school: "Indiana State University",
      location: "Terre Haute, IN",
      date: "Aug 2023 - May 2025",
      gpa: "3.66/4.0"
    },
    {
      degree: "Bachelor of Technology in Electronics & Communication Engineering",
      school: "Vel Tech University",
      location: "Chennai, India",
      date: "Jun 2018 - May 2022",
      gpa: "9.01/10"
    }
  ],

  contact: {
    email: "kolliparavamsikrishna80@gmail.com",
    phone: "+1 (812) 223-8818",
    linkedin: "linkedin.com/in/vamsikollipara",
    github: "github.com/vamsi876",
    portfolio: "vamsikrishnakollipara.vercel.app"
  },

  openSource: [
    {
      project: "GitBar",
      date: "Mar 2026",
      description: "Open-source macOS menubar app providing a unified Git dashboard aggregating PRs, issues, CI/CD status, and local repo health across GitHub, GitLab, and Bitbucket.",
      link: "https://pypi.org/project/gitbar/",
      technologies: ["Python", "PyObjC", "GitHub/GitLab REST APIs"]
    },
    {
      project: "GadgetBox",
      date: "Feb 2026",
      description: "Cross-platform system tray app bundling 12 developer utilities (JSON formatter, JWT decoder, UUID generator, Base64, hash, regex tester, etc.) with intelligent clipboard auto-detection.",
      link: "https://pypi.org/project/gadgetbox/",
      technologies: ["Python", "pystray", "tkinter"]
    },
    {
      project: "WebWeaver",
      date: "Sep 2024",
      description: "Open-source Python library for configurable web crawling with URL validation, deduplication, robots.txt compliance, and recursive/breadth-first modes; powers the data ingestion layer behind the ISU RAG chatbot.",
      link: "https://pypi.org/project/WebWeaver/",
      technologies: ["Python", "asyncio", "aiohttp"]
    }
  ],

  projects: [
    {
      name: "GitBar — macOS Menubar Git Dashboard",
      description: "Open-source macOS menubar app providing a unified Git dashboard aggregating PRs, issues, CI/CD status, and local repo health across GitHub, GitLab, and Bitbucket.",
      technologies: ["Python", "PyObjC", "GitHub/GitLab REST APIs", "PyPI"],
      date: "Mar 2026"
    },
    {
      name: "GadgetBox — Cross-Platform Developer Utilities",
      description: "Cross-platform system tray app bundling 12 developer utilities with intelligent clipboard auto-detection.",
      technologies: ["Python", "pystray", "tkinter", "PyPI"],
      date: "Feb 2026"
    },
    {
      name: "WebWeaver — Web Scraping & Crawling Library",
      description: "Open-source Python library for configurable web crawling with URL validation, deduplication, robots.txt compliance, and recursive/breadth-first modes.",
      technologies: ["Python", "asyncio", "aiohttp", "PyPI"],
      date: "Sep 2024"
    }
  ]
};

// ChatBot with enhanced memory and conversation context
const ChatBot: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    { 
      type: 'bot', 
      content: "Hi! I'm Vamsi's virtual assistant. Ask me about his full-stack development experience, skills (React, TypeScript, Node.js, AI/LLM), or his 3 PyPI packages!",
      timestamp: Date.now()
    }
  ]);
  const [inputValue, setInputValue] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const [conversationContext, setConversationContext] = useState<{
    recentTopics: string[];
    mentionedEntities: {[key: string]: boolean};
    askedDetailedAbout: {[key: string]: boolean};
  }>({
    recentTopics: [],
    mentionedEntities: {},
    askedDetailedAbout: {}
  });

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  // Process the messages to extract topics and entities
  const updateConversationContext = (userInput: string) => {
    const lowercaseInput = userInput.toLowerCase();
    
    // Extract topics from user input
    const possibleTopics = [
      'education', 'experience', 'skills', 'projects', 
      'contact', 'publications', 'certifications', 'open source'
    ];
    
    const detectedTopics = possibleTopics.filter(topic => 
      lowercaseInput.includes(topic)
    );
    
    if (detectedTopics.length > 0) {
      setConversationContext(prev => ({
        ...prev,
        recentTopics: [...detectedTopics, ...prev.recentTopics].slice(0, 3)
      }));
    }
    
    // Extract entities (specific things mentioned)
    const entityPatterns = {
      'python': /python/i,
      'javascript': /javascript|js/i,
      'ai': /\bai\b|artificial intelligence/i,
      'ml': /\bml\b|machine learning/i,
      'llm': /llm|language model/i,
      'rag': /rag|retrieval augmented/i,
      'voice': /voice|speech/i,
      'university': /university|college|school/i,
      'project': /project/i,
      'master': /master|ms|grad/i,
      'bachelor': /bachelor|undergrad/i
    };
    
    const newMentionedEntities = { ...conversationContext.mentionedEntities };
    
    Object.entries(entityPatterns).forEach(([entity, pattern]) => {
      if (pattern.test(lowercaseInput)) {
        newMentionedEntities[entity] = true;
      }
    });
    
    setConversationContext(prev => ({
      ...prev,
      mentionedEntities: newMentionedEntities
    }));
  };

  const generateDetailedResponse = (userInput: string): string => {
    const input = userInput.toLowerCase();
    updateConversationContext(userInput);

    // Check if this is a follow-up question
    const isFollowUp = /more|detail|explain|tell me more|elaborate|specifically/i.test(input);

    // Context-aware responses for education
    if (input.includes('education') || input.includes('study') || input.includes('degree') || input.includes('university')) {
      // If asking about master's specifically
      if (input.includes('master') || (conversationContext.mentionedEntities['master'] && isFollowUp)) {
        setConversationContext(prev => ({
          ...prev,
          askedDetailedAbout: { ...prev.askedDetailedAbout, masters: true }
        }));
        
        return `Vamsi's Master's education:
• Degree: ${portfolioInfo.education[0].degree}
• Institution: ${portfolioInfo.education[0].school}
• Location: ${portfolioInfo.education[0].location}
• Timeline: ${portfolioInfo.education[0].date}
• GPA: ${portfolioInfo.education[0].gpa}

During his Master's program, Vamsi worked as a Graduate Research & Teaching Assistant, building internal web applications, a RAG-powered knowledge assistant, and the WebWeaver crawling library.`;
      }
      
      // If asking about bachelor's specifically
      if (input.includes('bachelor') || (conversationContext.mentionedEntities['bachelor'] && isFollowUp)) {
        setConversationContext(prev => ({
          ...prev,
          askedDetailedAbout: { ...prev.askedDetailedAbout, bachelors: true }
        }));
        
        return `Vamsi's Bachelor's education:
• Degree: ${portfolioInfo.education[1].degree}
• Institution: ${portfolioInfo.education[1].school}
• Location: ${portfolioInfo.education[1].location}
• Timeline: ${portfolioInfo.education[1].date}
• GPA: ${portfolioInfo.education[1].gpa}

During his undergraduate studies, Vamsi built a strong foundation in electronics and programming.`;
      }
      
      // General education response
      return `Vamsi's educational background:

1. Master's Degree:
   • ${portfolioInfo.education[0].degree}
   • ${portfolioInfo.education[0].school}, ${portfolioInfo.education[0].location}
   • ${portfolioInfo.education[0].date}
   • GPA: ${portfolioInfo.education[0].gpa}

2. Bachelor's Degree:
   • ${portfolioInfo.education[1].degree}
   • ${portfolioInfo.education[1].school}, ${portfolioInfo.education[1].location}
   • ${portfolioInfo.education[1].date}
   • GPA: ${portfolioInfo.education[1].gpa}
   
Would you like more details about his Master's program or Bachelor's degree?`;
    }

    // Detailed experience responses
    if (input.includes('experience') || input.includes('work') || input.includes('job')) {
      // If asking about university/teaching experience
      if (input.includes('university') || input.includes('teaching') || input.includes('research assistant') ||
          ((conversationContext.mentionedEntities['university'] || conversationContext.mentionedEntities['voice']) && isFollowUp)) {
        
        const exp = portfolioInfo.experience[0]; // Graduate assistant position
        
        return `Vamsi's experience as ${exp.title} at ${exp.company} (${exp.date}):

${exp.achievements.map((achievement, index) => `${index + 1}. ${achievement}`).join('\n')}

This role involves developing AI solutions for educational technology, including voice assistants, automated grading systems, and conversational AI interfaces for student support.`;
      }
      
      // If asking about data analyst role
      if (input.includes('data') || input.includes('analyst') || input.includes('cognizant')) {
        const exp = portfolioInfo.experience[1]; // Data Analyst position
        
        return `Vamsi's experience as ${exp.title} at ${exp.company} (${exp.date}):

${exp.achievements.map((achievement, index) => `${index + 1}. ${achievement}`).join('\n')}

In this role, Vamsi worked with large-scale data processing and analytics systems, focusing on optimizing data workflows and implementing AI-driven analytics solutions.`;
      }
      
      // General experience overview with chronological ordering
      const chronologicalExperience = [...portfolioInfo.experience].sort((a, b) => {
        // Try to extract years for comparison
        const yearA = a.date.match(/\d{4}/g)?.pop() || "";
        const yearB = b.date.match(/\d{4}/g)?.pop() || "";
        return yearB.localeCompare(yearA); // Most recent first
      });
      
      return `Vamsi's professional experience:

${chronologicalExperience.map((exp, index) => `${index + 1}. ${exp.title} at ${exp.company} (${exp.date})
   • Location: ${exp.location}
   • Key Achievement: ${exp.achievements[0]}
`).join('\n')}

Would you like more details about a specific role?`;
    }

    // Enhanced skills response with categorization and expertise levels
    if (input.includes('skill') || input.includes('technology') || input.includes('tech stack') || 
        input.includes('expertise') || input.includes('tools')) {
      
      // If asking about specific skill areas
      if (input.includes('ai') || input.includes('ml') || input.includes('machine learning') || input.includes('llm') ||
          (conversationContext.mentionedEntities['ai'] || conversationContext.mentionedEntities['ml'] || 
           conversationContext.mentionedEntities['llm'] || conversationContext.mentionedEntities['rag']) && isFollowUp) {
        
        return `Vamsi's AI & LLM expertise:

• ${portfolioInfo.skills.ai_llm.join(', ')}

Vamsi has hands-on experience building RAG pipelines with LangChain and Pinecone, and integrating Anthropic Claude API for automated resume screening and natural-language insights. He's built production RAG systems serving university staff and healthcare operations.`;
      }
      
      if (input.includes('programming') || input.includes('language') || input.includes('code') ||
          (conversationContext.mentionedEntities['python'] || conversationContext.mentionedEntities['javascript']) && isFollowUp) {
        
        return `Vamsi's programming languages and development expertise:

• Languages: ${portfolioInfo.skills.languages.join(', ')}
• Frontend: ${portfolioInfo.skills.frontend.join(', ')}
• Backend: ${portfolioInfo.skills.backend.join(', ')}

Vamsi is particularly proficient in TypeScript/JavaScript for full-stack web development and Python for AI/ML applications and open-source tools (3 PyPI packages published).`;
      }
      
      if (input.includes('database') || input.includes('cloud') || input.includes('infrastructure') || input.includes('devops')) {
        
        return `Vamsi's database and cloud infrastructure expertise:

• Databases: ${portfolioInfo.skills.databases.join(', ')}
• Cloud & DevOps: ${portfolioInfo.skills.cloud_devops.join(', ')}

Vamsi has experience with Azure (SQL Server, AD SSO), AWS, Supabase (PostgreSQL, Auth, Storage, Edge Functions, RLS), and deploying full-stack applications via GitHub Actions CI/CD.`;
      }
      
      // General skills overview
      return `Vamsi's key technical skills:

1. Languages
   • ${portfolioInfo.skills.languages.join(', ')}

2. Frontend
   • ${portfolioInfo.skills.frontend.join(', ')}

3. Backend
   • ${portfolioInfo.skills.backend.join(', ')}

4. Databases
   • ${portfolioInfo.skills.databases.join(', ')}

5. AI & LLM
   • ${portfolioInfo.skills.ai_llm.join(', ')}

6. Auth & Security
   • ${portfolioInfo.skills.auth_security.join(', ')}

7. Cloud & DevOps
   • ${portfolioInfo.skills.cloud_devops.join(', ')}

8. Tools
   • ${portfolioInfo.skills.tools.join(', ')}

Would you like more details about his AI expertise, enterprise auth experience, or cloud infrastructure skills?`;
    }

    // Enhanced project information
    if (input.includes('project') || input.includes('portfolio') || input.includes('work on')) {
      
      // If asking about GitBar
      if (input.includes('gitbar') || input.includes('git') || input.includes('menubar') ||
          input.includes('dashboard')) {
        
        const project = portfolioInfo.projects[0];
        
        return `Vamsi's ${project.name}:

• Description: ${project.description}
• Technologies: ${project.technologies.join(', ')}
• Date: ${project.date}

This macOS menubar app aggregates PRs, issues, CI/CD status, and local repo health across GitHub, GitLab, and Bitbucket in one unified dashboard.

Check it out on PyPI: https://pypi.org/project/gitbar/`;
      }
      
      // If asking about GadgetBox
      if (input.includes('gadgetbox') || input.includes('gadget') || input.includes('utilities') ||
          input.includes('developer tools')) {
        
        const project = portfolioInfo.projects[1];
        
        return `Vamsi's ${project.name}:

• Description: ${project.description}
• Technologies: ${project.technologies.join(', ')}
• Date: ${project.date}

Includes 12 utilities: JSON formatter, JWT decoder, UUID generator, Base64, hash generator, regex tester, and more with intelligent clipboard auto-detection.

Check it out on PyPI: https://pypi.org/project/gadgetbox/`;
      }
      
      // If asking about WebWeaver
      if (input.includes('webweaver') || input.includes('crawl') || input.includes('scraping')) {
        const project = portfolioInfo.projects[2];
        
        return `Vamsi's ${project.name}:

• Description: ${project.description}
• Technologies: ${project.technologies.join(', ')}
• Date: ${project.date}

This library powers the data ingestion layer behind the ISU RAG chatbot, having crawled 40,000+ university URLs.

Check it out on PyPI: https://pypi.org/project/WebWeaver/`;
      }
      
      // General projects overview
      return `Vamsi's key projects & open-source packages (3 published on PyPI):

1. ${portfolioInfo.projects[0].name} (${portfolioInfo.projects[0].date})
   • ${portfolioInfo.projects[0].description}
   • Technologies: ${portfolioInfo.projects[0].technologies.join(', ')}
   • PyPI: https://pypi.org/project/gitbar/

2. ${portfolioInfo.projects[1].name} (${portfolioInfo.projects[1].date})
   • ${portfolioInfo.projects[1].description}
   • Technologies: ${portfolioInfo.projects[1].technologies.join(', ')}
   • PyPI: https://pypi.org/project/gadgetbox/

3. ${portfolioInfo.projects[2].name} (${portfolioInfo.projects[2].date})
   • ${portfolioInfo.projects[2].description}
   • Technologies: ${portfolioInfo.projects[2].technologies.join(', ')}
   • PyPI: https://pypi.org/project/WebWeaver/

Would you like more details about any of these projects?`;
    }

    // Enhanced contact information
    if (input.includes('contact') || input.includes('email') || input.includes('reach') || input.includes('connect')) {
      return `You can contact Vamsi through:

• Email: ${portfolioInfo.contact.email}
• Phone: ${portfolioInfo.contact.phone}
• LinkedIn: ${portfolioInfo.contact.linkedin}
• GitHub: ${portfolioInfo.contact.github}
• Portfolio: ${portfolioInfo.contact.portfolio}

Would you like to know about his availability for new opportunities or collaborations?`;
    }

    // Publications - redirect to open source
    if (input.includes('publication') || input.includes('paper') || input.includes('research') || input.includes('published')) {
      return `Vamsi has published 3 open-source packages on PyPI:

1. GitBar (Mar 2026) - macOS menubar Git dashboard
2. GadgetBox (Feb 2026) - Cross-platform developer utilities  
3. WebWeaver (Sep 2024) - Web crawling library

Would you like more details about any of these packages?`;
    }

    // Enhanced open source information
    if (input.includes('open source') || input.includes('github') || input.includes('contribution') || input.includes('pypi')) {
      return `Vamsi's open source contributions (3 PyPI packages):

1. ${portfolioInfo.openSource[0].project} (${portfolioInfo.openSource[0].date})
   • ${portfolioInfo.openSource[0].description}
   • Technologies: ${portfolioInfo.openSource[0].technologies.join(', ')}
   • PyPI: ${portfolioInfo.openSource[0].link}

2. ${portfolioInfo.openSource[1].project} (${portfolioInfo.openSource[1].date})
   • ${portfolioInfo.openSource[1].description}
   • Technologies: ${portfolioInfo.openSource[1].technologies.join(', ')}
   • PyPI: ${portfolioInfo.openSource[1].link}

3. ${portfolioInfo.openSource[2].project} (${portfolioInfo.openSource[2].date})
   • ${portfolioInfo.openSource[2].description}
   • Technologies: ${portfolioInfo.openSource[2].technologies.join(', ')}
   • PyPI: ${portfolioInfo.openSource[2].link}

Would you like more details about any of these packages?`;
    }

    // Certifications - redirect to skills/experience
    if (input.includes('certification') || input.includes('certificate')) {
      return `Vamsi's expertise comes from 2+ years of industry experience across healthcare and energy domains. He has:

• Built full-stack applications with React, TypeScript, Node.js, and PostgreSQL
• Shipped production systems at AIDM Software Consultancy and Cognizant
• Published 3 open-source packages on PyPI
• Completed MS in Computer Science from Indiana State University (GPA 3.66)

Would you like more details about his skills or experience?`;
    }

    // Context-aware responses based on conversation history
    if (isFollowUp && conversationContext.recentTopics.length > 0) {
      const mostRecentTopic = conversationContext.recentTopics[0];
      
      if (mostRecentTopic === 'education') {
        return `Regarding Vamsi's education, he has a ${portfolioInfo.education[0].degree} from ${portfolioInfo.education[0].school} (GPA ${portfolioInfo.education[0].gpa}) and a ${portfolioInfo.education[1].degree} from ${portfolioInfo.education[1].school} (GPA ${portfolioInfo.education[1].gpa}).`;
      }
      
      if (mostRecentTopic === 'experience') {
        return `About Vamsi's professional experience, he is currently working as a ${portfolioInfo.experience[0].title} at ${portfolioInfo.experience[0].company}, building a Supabase-powered operations platform. Previously, he worked at ${portfolioInfo.experience[1].company} and ${portfolioInfo.experience[2].company}.`;
      }
      
      if (mostRecentTopic === 'skills') {
        return `Regarding Vamsi's technical skills, his core expertise is in full-stack development with React, TypeScript, Node.js, and PostgreSQL. He also has hands-on AI integration experience with LangChain, Anthropic Claude API, and Pinecone.`;
      }
    }

    // Default response with conversation guidance
    return `I'm here to tell you about Vamsi's background, skills, and projects. 

You can ask me about:
• His education (MS in Computer Science from Indiana State, BTech from Vel Tech)
• Professional experience (AI Full-Stack Engineer at AIDM, Graduate Assistant at ISU, Full-Stack Developer at Cognizant)
• Technical skills (React, TypeScript, Node.js, PostgreSQL, Claude/LangChain/RAG, enterprise auth, Cloud)
• Open-source projects (3 PyPI packages: GitBar, GadgetBox, WebWeaver)
• Contact information

What would you like to know about?`;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!inputValue.trim()) return;

    const userMessage: Message = { 
      type: 'user', 
      content: inputValue,
      timestamp: Date.now()
    };

    setMessages([...messages, userMessage]);
    setInputValue('');
    setIsTyping(true);
    
    // Simulate thinking time for more natural conversation
    setTimeout(() => {
      const botMessage: Message = { 
        type: 'bot', 
        content: generateDetailedResponse(userMessage.content),
        timestamp: Date.now()
      };
      
      setMessages(prev => [...prev, botMessage]);
      setIsTyping(false);
    }, 600 + Math.random() * 1000); // Random delay between 600-1600ms
  };

  return (
    <div className="fixed bottom-4 right-4 z-50">
      {!isOpen && (
        <button
          onClick={() => setIsOpen(true)}
          className="w-14 h-14 rounded-full bg-card border border-[hsl(var(--card-border))] flex items-center justify-center text-primary hover:border-primary/30 transition-colors relative"
          aria-label="Open chat"
        >
          <MessageCircle size={24} />
          <span className="absolute -top-0.5 -right-0.5 w-3 h-3 rounded-full bg-primary animate-pulse-green" />
        </button>
      )}

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            transition={{ duration: 0.2 }}
            className="bg-card border border-[hsl(var(--card-border))] rounded-xl shadow-2xl shadow-black/40 w-80 sm:w-96 flex flex-col max-h-[600px]"
          >
            <div className="p-4 border-b border-[hsl(var(--card-border))] flex justify-between items-center">
              <h3 className="text-sm font-semibold text-foreground">Chat with Vamsi's Assistant</h3>
              <button onClick={() => setIsOpen(false)} className="text-muted-foreground hover:text-foreground transition-colors">
                <X size={20} />
              </button>
            </div>

            <div className="flex-1 overflow-y-auto p-4 space-y-4">
              {messages.map((message, index) => (
                <div
                  key={index}
                  className={`flex ${message.type === 'user' ? 'justify-end' : 'justify-start'}`}
                >
                  <div
                    className={`rounded-lg px-4 py-2 max-w-[80%] ${
                      message.type === 'user'
                        ? 'bg-primary text-primary-foreground'
                        : 'bg-[hsl(var(--surface))] text-muted-foreground'
                    }`}
                  >
                    <p className="whitespace-pre-line">{message.content}</p>
                  </div>
                </div>
              ))}

              {isTyping && (
                <div className="flex justify-start">
                  <div className="rounded-lg px-4 py-2 bg-[hsl(var(--surface))]">
                    <div className="typing-indicator">
                      <span></span>
                      <span></span>
                      <span></span>
                    </div>
                  </div>
                </div>
              )}

              <div ref={messagesEndRef} />
            </div>

            <form onSubmit={handleSubmit} className="p-4 border-t border-[hsl(var(--card-border))]">
              <div className="flex gap-2">
                <input
                  type="text"
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  placeholder="Type your message..."
                  className="flex-1 rounded-lg bg-card border border-[hsl(var(--card-border))] px-4 py-2 text-foreground placeholder:text-[hsl(var(--text-muted))] focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary/30 text-sm"
                  disabled={isTyping}
                />
                <Button type="submit" disabled={isTyping || !inputValue.trim()} className="bg-primary text-primary-foreground hover:bg-primary/90">
                  {isTyping ? <Loader2 className="animate-spin" size={16} /> : 'Send'}
                </Button>
              </div>
            </form>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default ChatBot;
