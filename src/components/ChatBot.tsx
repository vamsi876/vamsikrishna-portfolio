import React, { useState, useRef, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { MessageCircle, X, Loader2 } from 'lucide-react';

interface Message {
  type: 'user' | 'bot';
  content: string;
  timestamp: number;
}

// Enhanced with more detailed information about Vamsi
const portfolioInfo = {
  name: "Vamsi Krishna Kollipara",
  role: "AI Engineer",
  education: {
    masters: {
      degree: "Master of Science in Computer Science",
      school: "Indiana State University",
      location: "Terre Haute, IN",
      date: "Aug 2023 - Present",
      gpa: "3.8/4.0",
      coursework: "Cloud Computing, Artificial Intelligence, Data Visualization, Research (Machine Learning), Database Management Systems, Web Programming, Operating Systems"
    },
    bachelors: {
      degree: "Bachelor's in Electronics and Communication Engineering",
      school: "Vel Tech Rangarajan Dr.Sagunthala R&D Institute of Science and Technology",
      location: "Chennai, India",
      date: "June 2018 - May 2022",
      gpa: "9.01/10.0",
      coursework: "Deep Learning, Machine Learning, Major Project (Raspberry pi, ML), Minor Project (Esp32, LoRa), Python, C Programming, Java, Technical Communication, Design Thinking"
    }
  },
  experience: [
    {
      title: "Graduate Research & Teaching Assistant",
      company: "Indiana State University",
      location: "Terre Haute, IN",
      date: "Aug 2023 - Present",
      achievements: [
        "Developed a voice AI chatbot leveraging LLMs, RAG, and retrieval systems to assist students with university policies and deadlines",
        "Engineered multi-channel AI automation (voice, email, and chat) for student queries",
        "Designed intelligent escalation systems that analyze conversations and route students to human advisors",
        "Implemented LlamaParser-based document parsing for automated policy and academic document retrieval",
        "Built an AI-powered grading automation system, cutting grading time by 80%",
        "Developed a graph-based conversation memory system (Zep AI) to enhance chatbot contextual retention"
      ]
    },
    {
      title: "Data Analyst",
      company: "Cognizant Technology Solutions",
      location: "Hyderabad, India",
      date: "Jul 2022 - Jul 2023",
      achievements: [
        "Optimized data processing pipelines for 1M+ records, improving system efficiency by 25%",
        "Integrated AI-driven data retrieval mechanisms for operational analytics",
        "Automated data transformation workflows, cutting manual effort by 40%",
        "Designed PostgreSQL and Redis-backed customer data architectures"
      ]
    },
    {
      title: "Data Analyst Intern",
      company: "Cognizant Technology Solutions",
      location: "Hyderabad, India",
      date: "Jan 2022 - May 2022",
      achievements: [
        "Developed ETL processes using Informatica PowerCenter, ensuring high-accuracy data processing",
        "Created integrated storage analytics dashboards in Power BI for real-time system monitoring",
        "Worked with distributed storage environments, improving data integration efficiency"
      ]
    }
  ],
  skills: {
    languages: ["Python", "TypeScript", "Node.js", "JavaScript", "SQL"],
    ai_ml: ["NLP", "RAG systems", "LlamaIndex", "OpenAI", "LangChain", "LangGraph", "Azure OpenAI", "Azure Cognitive Services", "Azure Bot Service"],
    databases_cloud: ["PostgreSQL", "Redis", "PineCone", "AWS", "Azure", "Azure Functions", "Azure App Service", "Azure DevOps", "Docker", "CI/CD"],
    asset_orchestration: ["Temporal", "Model Context Protocol (MCP)", "Power Automate"],
    web_frontend: ["React.js", "Next.js", "Express.js"],
    knowledge_retrieval: ["Multi-vector retrieval", "hybrid lexical-semantic search"],
    development_tools: ["Git", "WindiStiff", "Cursor IDE", "VS Code"]
  },
  contact: {
    email: "kolliparavamsikrishna80@gmail.com",
    phone: "+1 (812) 223-8818",
    location: "Greater Seattle Area",
    linkedin: "linkedin.com/in/vamsikollipara",
    github: "github.com/vamsi876"
  },
  publications: [
    {
      title: "A New Paradigm of Smart Embedded System for Elder and Physically Challenged Person Using Raspberry Pi",
      conference: "12th International Conference on Science and Innovative Engineering",
      location: "Chennai, India",
      date: "Jul 2022",
      isbn: "978-93-87288-22-1",
      abstract: "This paper presents a novel smart embedded system designed for elderly and physically challenged individuals, leveraging Raspberry Pi technology to provide assistance with daily activities and health monitoring."
    }
  ],
  certifications: [
    {
      title: "Certified Full Stack Developer with Cloud for Web and Mobile",
      issuer: "Hero Vired",
      date: "2024",
      link: "https://drive.google.com/file/d/1XHJQeDRELVtPedEsi7hsDT3Wka8rxrnL/view",
      skills: ["Full Stack Web Development", "Mobile Development", "Cloud Architecture", "DevOps"]
    }
  ],
  openSource: [
    {
      project: "WebWeaver",
      date: "Sept 2024",
      description: "Co-developed WebWeaver, a Python library for browser automation and web scraping, published on PyPI",
      link: "https://github.com/RedBlackWeb/WebWeaver",
      technologies: ["Python", "Selenium", "BeautifulSoup", "PyPI"]
    }
  ],
  projects: [
    {
      name: "Voice AI University Assistant",
      description: "Developed a comprehensive voice AI chatbot for university students using LLMs and RAG systems",
      technologies: ["LangChain", "OpenAI", "Azure Cognitive Services", "Redis"],
      achievements: ["Reduced admin workload by 35%", "Handles 500+ student queries daily"]
    },
    {
      name: "Automated Document Processing System",
      description: "Built an intelligent system for automating academic document analysis and grading",
      technologies: ["LlamaParser", "Python", "Azure AI", "PostgreSQL"],
      achievements: ["Reduced grading time by 80%", "Improved grading consistency by 40%"]
    }
  ]
};

// ChatBot with enhanced memory and conversation context
const ChatBot: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    { 
      type: 'bot', 
      content: "Hi! I'm Vamsi's virtual assistant. How can I help you learn more about Vamsi's experience, skills, or projects?",
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
        
        return `${portfolioInfo.name}'s Master's education:
        • Degree: ${portfolioInfo.education.masters.degree}
        • Institution: ${portfolioInfo.education.masters.school}
        • Location: ${portfolioInfo.education.masters.location}
        • Timeline: ${portfolioInfo.education.masters.date}
        • GPA: ${portfolioInfo.education.masters.gpa}
        • Key Coursework: ${portfolioInfo.education.masters.coursework}
        
During his Master's program, Vamsi has been working as a Graduate Research & Teaching Assistant, focusing on AI applications for educational technology.`;
      }
      
      // If asking about bachelor's specifically
      if (input.includes('bachelor') || (conversationContext.mentionedEntities['bachelor'] && isFollowUp)) {
        setConversationContext(prev => ({
          ...prev,
          askedDetailedAbout: { ...prev.askedDetailedAbout, bachelors: true }
        }));
        
        return `${portfolioInfo.name}'s Bachelor's education:
        • Degree: ${portfolioInfo.education.bachelors.degree}
        • Institution: ${portfolioInfo.education.bachelors.school}
        • Location: ${portfolioInfo.education.bachelors.location}
        • Timeline: ${portfolioInfo.education.bachelors.date}
        • GPA: ${portfolioInfo.education.bachelors.gpa}
        • Key Coursework: ${portfolioInfo.education.bachelors.coursework}
        
During his undergraduate studies, Vamsi worked on multiple projects including embedded systems with Raspberry Pi and IoT applications with ESP32 and LoRa technology.`;
      }
      
      // General education response
      return `${portfolioInfo.name}'s educational background:

1. Master's Degree:
   • ${portfolioInfo.education.masters.degree}
   • ${portfolioInfo.education.masters.school}
   • ${portfolioInfo.education.masters.date}
   • GPA: ${portfolioInfo.education.masters.gpa}

2. Bachelor's Degree:
   • ${portfolioInfo.education.bachelors.degree}
   • ${portfolioInfo.education.bachelors.school}
   • ${portfolioInfo.education.bachelors.date}
   • GPA: ${portfolioInfo.education.bachelors.gpa}
   
Would you like more details about his Master's program, Bachelor's degree, or specific coursework?`;
    }

    // Detailed experience responses
    if (input.includes('experience') || input.includes('work') || input.includes('job')) {
      // If asking about university/teaching experience
      if (input.includes('university') || input.includes('teaching') || input.includes('research assistant') ||
          ((conversationContext.mentionedEntities['university'] || conversationContext.mentionedEntities['voice']) && isFollowUp)) {
        
        const exp = portfolioInfo.experience[0]; // Graduate assistant position
        
        return `${portfolioInfo.name}'s experience as ${exp.title} at ${exp.company} (${exp.date}):

${exp.achievements.map((achievement, index) => `${index + 1}. ${achievement}`).join('\n')}

This role involves developing AI solutions for educational technology, including voice assistants, automated grading systems, and conversational AI interfaces for student support.`;
      }
      
      // If asking about data analyst role
      if (input.includes('data') || input.includes('analyst') || input.includes('cognizant')) {
        const exp = portfolioInfo.experience[1]; // Data Analyst position
        
        return `${portfolioInfo.name}'s experience as ${exp.title} at ${exp.company} (${exp.date}):

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
      
      return `${portfolioInfo.name}'s professional experience:

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
      if (input.includes('ai') || input.includes('ml') || input.includes('machine learning') ||
          (conversationContext.mentionedEntities['ai'] || conversationContext.mentionedEntities['ml'] || 
           conversationContext.mentionedEntities['llm'] || conversationContext.mentionedEntities['rag']) && isFollowUp) {
        
        return `${portfolioInfo.name}'s AI & Machine Learning expertise:

• LLM Frameworks: ${portfolioInfo.skills.ai_ml.filter(s => s.includes('Lang') || s.includes('OpenAI')).join(', ')}
• AI Services: ${portfolioInfo.skills.ai_ml.filter(s => s.includes('Azure')).join(', ')}
• RAG Systems: Specializes in retrieval-augmented generation architectures
• Knowledge Retrieval: ${portfolioInfo.skills.knowledge_retrieval.join(', ')}

Vamsi has implemented these technologies in his projects, including voice AI chatbots, automated grading systems, and intelligent document processing solutions.`;
      }
      
      if (input.includes('programming') || input.includes('language') || input.includes('code') ||
          (conversationContext.mentionedEntities['python'] || conversationContext.mentionedEntities['javascript']) && isFollowUp) {
        
        return `${portfolioInfo.name}'s programming languages and development expertise:

• Primary Languages: ${portfolioInfo.skills.languages.slice(0, 2).join(', ')}
• Secondary Languages: ${portfolioInfo.skills.languages.slice(2).join(', ')}
• Web Development: ${portfolioInfo.skills.web_frontend.join(', ')}
• Development Tools: ${portfolioInfo.skills.development_tools.join(', ')}

Vamsi is particularly proficient in Python for AI/ML applications and TypeScript/JavaScript for frontend and backend web development.`;
      }
      
      if (input.includes('database') || input.includes('cloud') || input.includes('infrastructure') || input.includes('devops')) {
        
        return `${portfolioInfo.name}'s database and cloud infrastructure expertise:

• Databases: ${portfolioInfo.skills.databases_cloud.filter(s => s === 'PostgreSQL' || s === 'Redis' || s === 'PineCone').join(', ')}
• Cloud Platforms: ${portfolioInfo.skills.databases_cloud.filter(s => s === 'AWS' || s === 'Azure').join(', ')}
• Cloud Services: ${portfolioInfo.skills.databases_cloud.filter(s => s.includes('Azure') && s !== 'Azure').join(', ')}
• DevOps: ${portfolioInfo.skills.databases_cloud.filter(s => s === 'Docker' || s === 'CI/CD').join(', ')}
• Orchestration: ${portfolioInfo.skills.asset_orchestration.join(', ')}

Vamsi has experience deploying AI solutions in cloud environments and building scalable database architectures.`;
      }
      
      // General skills overview
      return `${portfolioInfo.name}'s key technical skills:

1. Programming Languages
   • ${portfolioInfo.skills.languages.join(', ')}

2. AI & Machine Learning
   • ${portfolioInfo.skills.ai_ml.join(', ')}

3. Databases & Cloud
   • ${portfolioInfo.skills.databases_cloud.join(', ')}

4. Web Development
   • ${portfolioInfo.skills.web_frontend.join(', ')}

5. Knowledge Retrieval
   • ${portfolioInfo.skills.knowledge_retrieval.join(', ')}

Would you like more details about his AI expertise, programming languages, or cloud infrastructure skills?`;
    }

    // Enhanced project information
    if (input.includes('project') || input.includes('portfolio') || input.includes('work on')) {
      
      // If asking about a specific project
      if (input.includes('voice') || input.includes('assistant') || input.includes('chatbot') ||
          (conversationContext.mentionedEntities['voice'] && isFollowUp)) {
        
        const project = portfolioInfo.projects[0];
        
        return `${portfolioInfo.name}'s Voice AI University Assistant project:

• Description: ${project.description}
• Technologies: ${project.technologies.join(', ')}
• Key Achievements:
  - ${project.achievements.join('\n  - ')}

This project leverages LLMs with retrieval-augmented generation to provide contextually relevant answers to university students. It includes multi-channel support (voice, chat, email) and an intelligent escalation system to route complex queries to human advisors when necessary.`;
      }
      
      if (input.includes('document') || input.includes('grading') || input.includes('automation') ||
          (conversationContext.mentionedEntities['document'] && isFollowUp)) {
        
        const project = portfolioInfo.projects[1];
        
        return `${portfolioInfo.name}'s Automated Document Processing System:

• Description: ${project.description}
• Technologies: ${project.technologies.join(', ')}
• Key Achievements:
  - ${project.achievements.join('\n  - ')}

This system uses advanced document parsing and AI-based analysis to automate academic document processing and grading. It can identify key components in student submissions, evaluate responses against rubrics, and provide consistent scoring and feedback.`;
      }
      
      // General projects overview
      return `${portfolioInfo.name}'s key projects:

1. Voice AI University Assistant
   • ${portfolioInfo.projects[0].description}
   • Technologies: ${portfolioInfo.projects[0].technologies.join(', ')}
   • Key achievement: ${portfolioInfo.projects[0].achievements[0]}

2. Automated Document Processing System
   • ${portfolioInfo.projects[1].description}
   • Technologies: ${portfolioInfo.projects[1].technologies.join(', ')}
   • Key achievement: ${portfolioInfo.projects[1].achievements[0]}

3. WebWeaver (Open Source)
   • ${portfolioInfo.openSource[0].description}
   • Technologies: ${portfolioInfo.openSource[0].technologies.join(', ')}

Would you like more details about any specific project?`;
    }

    // Enhanced contact information
    if (input.includes('contact') || input.includes('email') || input.includes('reach') || input.includes('connect')) {
      return `You can contact ${portfolioInfo.name} through:

• Email: ${portfolioInfo.contact.email}
• Phone: ${portfolioInfo.contact.phone}
• Location: ${portfolioInfo.contact.location}
• Professional Profiles:
  - LinkedIn: ${portfolioInfo.contact.linkedin}
  - GitHub: ${portfolioInfo.contact.github}

Would you like to know about his availability for new opportunities or collaborations?`;
    }

    // Enhanced publications information
    if (input.includes('publication') || input.includes('paper') || input.includes('research') || input.includes('published')) {
      const pub = portfolioInfo.publications[0];
      return `${portfolioInfo.name}'s research publication:

• Title: "${pub.title}"
• Conference: ${pub.conference}
• Location: ${pub.location}
• Date: ${pub.date}
• ISBN: ${pub.isbn}
• Abstract: ${pub.abstract}

This research focuses on developing assistive technology solutions for elderly and physically challenged individuals using Raspberry Pi embedded systems.`;
    }

    // Enhanced open source information
    if (input.includes('open source') || input.includes('github') || input.includes('contribution')) {
      const project = portfolioInfo.openSource[0];
      return `${portfolioInfo.name}'s open source contribution:

• Project: ${project.project} (${project.date})
• Description: ${project.description}
• Link: ${project.link}
• Technologies: ${project.technologies.join(', ')}

This library provides an easy-to-use interface for browser automation and web scraping tasks in Python, with simplified APIs compared to direct Selenium usage.`;
    }

    // Enhanced certifications information
    if (input.includes('certification') || input.includes('certificate')) {
      const cert = portfolioInfo.certifications[0];
      return `${portfolioInfo.name}'s certification:

• Title: ${cert.title}
• Issuer: ${cert.issuer}
• Date: ${cert.date}
• Skills Covered: ${cert.skills.join(', ')}
• Verification: ${cert.link}

This comprehensive certification covers both web and mobile development skills, including cloud architecture and deployment.`;
    }

    // Context-aware responses based on conversation history
    if (isFollowUp && conversationContext.recentTopics.length > 0) {
      const mostRecentTopic = conversationContext.recentTopics[0];
      
      if (mostRecentTopic === 'education') {
        return `Regarding ${portfolioInfo.name}'s education, he has a ${portfolioInfo.education.masters.degree} from ${portfolioInfo.education.masters.school} and a ${portfolioInfo.education.bachelors.degree} from ${portfolioInfo.education.bachelors.school}. His coursework has focused on AI, machine learning, and cloud computing.`;
      }
      
      if (mostRecentTopic === 'experience') {
        return `About ${portfolioInfo.name}'s professional experience, he is currently working as a ${portfolioInfo.experience[0].title} at ${portfolioInfo.experience[0].company}, where he develops AI solutions for educational technology. Previously, he worked as a ${portfolioInfo.experience[1].title} at ${portfolioInfo.experience[1].company}.`;
      }
      
      if (mostRecentTopic === 'skills') {
        return `Regarding ${portfolioInfo.name}'s technical skills, his core expertise is in AI engineering, particularly working with LLMs, RAG systems, and NLP. He's proficient in Python, TypeScript, and has experience with cloud platforms like Azure and AWS.`;
      }
    }

    // Default response with conversation guidance
    return `I'm here to tell you about ${portfolioInfo.name}'s background, skills, and projects. 

You can ask me about:
• His education (Master's in Computer Science, Bachelor's in Electronics and Communication)
• Professional experience (AI research, data analysis)
• Technical skills (AI/ML, programming languages, cloud technologies)
• Projects (voice AI assistants, document automation)
• Publications, certifications, or contact information

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
      {isOpen ? (
        <div className="bg-white rounded-lg shadow-xl w-80 sm:w-96 flex flex-col max-h-[600px]">
          <div className="p-4 border-b flex justify-between items-center bg-primary/5 rounded-t-lg">
            <h3 className="font-semibold">Chat with Vamsi's Assistant</h3>
            <button onClick={() => setIsOpen(false)} className="text-gray-500 hover:text-gray-700">
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
                      : 'bg-muted'
                  }`}
                >
                  <p className="whitespace-pre-line">{message.content}</p>
                </div>
              </div>
            ))}
            
            {isTyping && (
              <div className="flex justify-start">
                <div className="rounded-lg px-4 py-2 bg-muted">
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

          <form onSubmit={handleSubmit} className="p-4 border-t">
            <div className="flex gap-2">
              <input
                type="text"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                placeholder="Type your message..."
                className="flex-1 rounded-lg border px-4 py-2 focus:outline-none focus:ring-2 focus:ring-primary"
                disabled={isTyping}
              />
              <Button type="submit" disabled={isTyping || !inputValue.trim()}>
                {isTyping ? <Loader2 className="animate-spin" size={16} /> : 'Send'}
              </Button>
            </div>
          </form>
        </div>
      ) : (
        <Button
          onClick={() => setIsOpen(true)}
          className="rounded-full w-12 h-12 shadow-lg"
        >
          <MessageCircle />
        </Button>
      )}
    </div>
  );
};

export default ChatBot;
