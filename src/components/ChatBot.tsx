import React, { useState, useRef, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { MessageCircle, X } from 'lucide-react';

interface Message {
  type: 'user' | 'bot';
  content: string;
}

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
    location: "San Francisco, CA",
    linkedin: "linkedin.com/in/vamsikollipara",
    github: "github.com/vamsi876"
  },
  publications: [
    {
      title: "A New Paradigm of Smart Embedded System for Elder and Physically Challenged Person Using Raspberry Pi",
      conference: "12th International Conference on Science and Innovative Engineering",
      location: "Chennai, India",
      date: "Jul 2022",
      isbn: "978-93-87288-22-1"
    }
  ],
  certifications: [
    {
      title: "Certified Full Stack Developer with Cloud for Web and Mobile",
      issuer: "Hero Vired",
      date: "2024",
      link: "https://drive.google.com/file/d/1XHJQeDRELVtPedEsi7hsDT3Wka8rxrnL/view"
    }
  ],
  openSource: [
    {
      project: "WebWeaver",
      date: "Sept 2024",
      description: "Co-developed WebWeaver, a Python library for browser automation and web scraping, published on PyPI",
      link: "https://github.com/RedBlackWeb/WebWeaver"
    }
  ]
};

const ChatBot: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    { type: 'bot', content: 'Hi! I\'m Vamsi\'s virtual assistant. How can I help you?' }
  ]);
  const [inputValue, setInputValue] = useState('');
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const generateResponse = (userInput: string): string => {
    const input = userInput.toLowerCase();

    // Education
    if (input.includes('education') || input.includes('study') || input.includes('degree') || input.includes('university')) {
      return `${portfolioInfo.name} has:
      - ${portfolioInfo.education.masters.degree} at ${portfolioInfo.education.masters.school} (${portfolioInfo.education.masters.date})
      - ${portfolioInfo.education.bachelors.degree} at ${portfolioInfo.education.bachelors.school} (${portfolioInfo.education.bachelors.date})`;
    }

    // Experience
    if (input.includes('experience') || input.includes('work') || input.includes('job')) {
      return portfolioInfo.experience.map(exp => 
        `${exp.title} at ${exp.company} (${exp.date})`
      ).join('\n');
    }

    // Skills
    if (input.includes('skill') || input.includes('technology') || input.includes('tech stack')) {
      return `${portfolioInfo.name}'s key skills include:
      - Languages: ${portfolioInfo.skills.languages.join(', ')}
      - AI/ML: ${portfolioInfo.skills.ai_ml.join(', ')}
      - Databases: ${portfolioInfo.skills.databases_cloud.join(', ')}
      - Asset Orchestration: ${portfolioInfo.skills.asset_orchestration.join(', ')}
      - Web Frontend: ${portfolioInfo.skills.web_frontend.join(', ')}
      - Knowledge Retrieval: ${portfolioInfo.skills.knowledge_retrieval.join(', ')}
      - Development Tools: ${portfolioInfo.skills.development_tools.join(', ')}`;
    }

    // Contact
    if (input.includes('contact') || input.includes('email') || input.includes('reach')) {
      return `You can contact ${portfolioInfo.name} at:
      - Email: ${portfolioInfo.contact.email}
      - Phone: ${portfolioInfo.contact.phone}
      - Location: ${portfolioInfo.contact.location}
      - LinkedIn: ${portfolioInfo.contact.linkedin}
      - GitHub: ${portfolioInfo.contact.github}`;
    }

    // Publications
    if (input.includes('publication') || input.includes('paper') || input.includes('research') || input.includes('published')) {
      const pub = portfolioInfo.publications[0];
      return `${portfolioInfo.name} published "${pub.title}" at ${pub.conference} (${pub.date})`;
    }

    // Open Source
    if (input.includes('open source') || input.includes('github') || input.includes('contribution')) {
      const project = portfolioInfo.openSource[0];
      return `${portfolioInfo.name} created ${project.project}: ${project.description}. Check it out at ${project.link}`;
    }

    // Certifications
    if (input.includes('certification') || input.includes('certificate')) {
      const cert = portfolioInfo.certifications[0];
      return `${portfolioInfo.name} is a certified ${cert.title} by ${cert.issuer} (${cert.date})`;
    }

    // Default response
    return "I'm not sure about that specific information. Would you like to know about Vamsi's education, experience, skills, or current work?";
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!inputValue.trim()) return;

    const userMessage: Message = { type: 'user', content: inputValue };
    const botMessage: Message = { type: 'bot', content: generateResponse(inputValue) };

    setMessages([...messages, userMessage, botMessage]);
    setInputValue('');
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
              />
              <Button type="submit">Send</Button>
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
