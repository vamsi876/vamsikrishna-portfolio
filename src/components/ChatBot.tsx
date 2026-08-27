import React, { useState, useRef, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { MessageCircle, X, Loader2 } from 'lucide-react';
import { cn } from '@/lib/utils';
import { motion, AnimatePresence } from 'framer-motion';
import { summary, jobs } from '@/data/resume';

interface Message {
  type: 'user' | 'bot';
  content: string;
  timestamp: number;
}

// Enhanced with more detailed information about Vamsi - Updated to match resume
const portfolioInfo = {
  name: "Vamsi Krishna Kollipara",
  summary: `${summary} MS in Computer Science. 3 published PyPI packages.`,

  experience: jobs.map((job) => ({
    title: job.title,
    company: job.company,
    location: job.location,
    date: `${job.startDate} - ${job.endDate}`,
    achievements: job.description,
  })),

  skills: {
    languages: ["TypeScript", "JavaScript", "Python", "SQL"],
    frontend: ["React", "Next.js", "Tailwind CSS"],
    backend: ["Node.js", "GraphQL", "REST", "Serverless Functions"],
    databases: ["PostgreSQL", "SQL Server"],
    ai_llm: ["Anthropic Claude API", "RAG", "Schema-validated structured output", "LangChain", "Pinecone"],
    auth_security: ["RBAC", "Row Level Security", "JWT", "Azure AD SSO"],
    cloud_devops: ["AWS", "Azure", "Supabase", "Vercel", "GitHub Actions CI/CD"],
    tools: ["Git", "Postman", "Jest", "Pytest"]
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
      description: "Async Python crawling library with robots.txt compliance, deduplication, and BFS/recursive modes; the ingestion layer behind the ISU RAG assistant.",
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

const roleAt = (company: string) =>
  portfolioInfo.experience.find((e) => e.company.includes(company)) ?? portfolioInfo.experience[0];

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
        
        const exp = roleAt('Indiana State University');

        return `Vamsi's experience as ${exp.title} at ${exp.company} (${exp.date}):

${exp.achievements.map((achievement, index) => `${index + 1}. ${achievement}`).join('\n')}

In this role he built a RAG knowledge assistant end-to-end over a curated 8,000-document corpus, open-sourced the crawler that fed it, and built internal web apps used by academic departments.`;
      }
      
      // If asking about data analyst role
      if (input.includes('data') || input.includes('analyst') || input.includes('cognizant')) {
        const exp = roleAt('Cognizant');

        return `Vamsi's experience as ${exp.title} at ${exp.company} (${exp.date}) — client: Duke Energy:

${exp.achievements.map((achievement, index) => `${index + 1}. ${achievement}`).join('\n')}

This was backend and API work over multi-million-row utility billing and metering data, serving a high-traffic customer self-service platform.`;
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

Vamsi owns a production LLM pipeline and the guardrails around it: retrieval, context management, schema-validated structured output so downstream code can trust the shape, per-user rate limiting, response caching, and human review before any output counts. He built the Claude + RAG chart-audit product over EHR records, and a RAG knowledge assistant over an 8,000-document corpus at Indiana State.`;
      }
      
      if (input.includes('programming') || input.includes('language') || input.includes('code') ||
          (conversationContext.mentionedEntities['python'] || conversationContext.mentionedEntities['javascript']) && isFollowUp) {
        
        return `Vamsi's programming languages and development expertise:

• Languages: ${portfolioInfo.skills.languages.join(', ')}
• Frontend: ${portfolioInfo.skills.frontend.join(', ')}
• Backend: ${portfolioInfo.skills.backend.join(', ')}

Vamsi works primarily in TypeScript for API and frontend work and Python for data and LLM pipelines, plus 3 published PyPI packages.`;
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
3. WebWeaver (Sep 2024) - Async web crawling library

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
      return `Vamsi doesn't lead with certifications — his expertise comes from shipping production systems across healthcare and energy domains. He has:

• Designed and shipped a multi-tenant platform end-to-end: GraphQL over Postgres, serverless functions, React, CI/CD to Vercel and AWS
• Built delegated authorization over sensitive data: 8-role RBAC, database-enforced Row Level Security, JWT-verified endpoints, Azure AD SSO
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
        return `About Vamsi's professional experience, he is currently working as a ${portfolioInfo.experience[0].title} at ${portfolioInfo.experience[0].company}, where he is the sole engineer on client-facing products in HIPAA-regulated environments. Previously, he worked at ${portfolioInfo.experience[1].company} and ${portfolioInfo.experience[2].company}.`;
      }
      
      if (mostRecentTopic === 'skills') {
        return `Regarding Vamsi's technical skills, his core expertise is TypeScript and Python services, GraphQL and REST APIs over PostgreSQL and SQL Server, and production LLM pipelines on the Anthropic Claude API with RAG, LangChain, and Pinecone — deployed on AWS, Azure, Supabase, and Vercel.`;
      }
    }

    // Default response with conversation guidance
    return `I'm here to tell you about Vamsi's background, skills, and projects. 

You can ask me about:
• His education (MS in Computer Science from Indiana State, BTech from Vel Tech)
• Professional experience (Full-Stack Engineer at AI Data Management, Graduate Assistant at ISU, Programmer Analyst at Cognizant)
• Technical skills (TypeScript, Python, Node.js, GraphQL, PostgreSQL, Claude/RAG, authorization, AWS/Azure)
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
