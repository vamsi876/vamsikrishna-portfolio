import React, { useState, useRef, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { MessageCircle, X } from 'lucide-react';

interface Message {
  type: 'user' | 'bot';
  content: string;
}

const portfolioInfo = {
  name: "Vamsi Krishna Kollipara",
  education: {
    masters: {
      degree: "Master of Science in Computer Science",
      school: "Indiana State University",
      location: "Terre Haute, Indiana",
      date: "2023 - Present",
      gpa: "4.0/4.0",
      coursework: "Advanced Database Systems, Machine Learning, Deep Learning, Natural Language Processing"
    },
    bachelors: {
      degree: "Bachelor of Technology in Computer Science",
      school: "Sagi Ramakrishnam Raju Engineering College",
      location: "Bhimavaram, India",
      date: "2019 - 2023",
      gpa: "8.9/10.0",
      coursework: "Data Structures, Algorithms, Operating Systems, Database Management Systems"
    }
  },
  experience: [
    {
      title: "Graduate Research & Teaching Assistant",
      company: "Indiana State University",
      location: "Terre Haute, Indiana",
      date: "Aug 2023 - Present",
      achievements: [
        "Developing an automated grading system using LLMs and RAG techniques",
        "Implementing voice AI chatbots for enhanced student interaction",
        "Assisting professors in course development and student evaluation"
      ]
    },
    {
      title: "Data Analyst",
      company: "Cognizant",
      location: "Hyderabad, India",
      date: "Jan 2023 - Jul 2023",
      achievements: [
        "Developed data pipelines and ETL processes",
        "Created interactive dashboards using Power BI",
        "Optimized database queries for better performance"
      ]
    },
    {
      title: "Data Analyst Intern",
      company: "Cognizant",
      location: "Remote",
      date: "Aug 2022 - Dec 2022",
      achievements: [
        "Analyzed large datasets using SQL and Python",
        "Created data visualization reports",
        "Participated in agile development processes"
      ]
    }
  ],
  skills: {
    languages: ["Python", "JavaScript", "TypeScript", "SQL", "Java"],
    frameworks: ["React", "Node.js", "Express", "Next.js", "FastAPI"],
    databases: ["MongoDB", "PostgreSQL", "MySQL", "Redis"],
    tools: ["Git", "Docker", "AWS", "Azure", "Power BI"],
    concepts: ["Machine Learning", "Deep Learning", "NLP", "RESTful APIs", "Microservices"],
    cloud_ai: ["Azure OpenAI", "Azure Cognitive Services", "Azure Bot Service", "Azure Functions", "Azure App Service", "Azure DevOps"]
  },
  contact: {
    email: "vamsikrishna.kollipara@indstate.edu",
    linkedin: "linkedin.com/in/vamsikrishnakollipara",
    github: "github.com/vamsikrishnareddybevara"
  },
  publications: [
    {
      title: "Enhancing Student Learning through AI-Powered Automated Grading Systems",
      conference: "International Conference on Education Technology",
      date: "2024",
      location: "Virtual Conference",
      isbn: "978-0-7695-7147-5"
    }
  ],
  certifications: [
    {
      name: "Full Stack Developer",
      issuer: "Cognizant",
      date: "2023",
      link: "https://credentials.cognizant.com/123456"
    }
  ],
  openSource: [
    {
      name: "WebWeaver",
      description: "A web development framework for building scalable applications",
      date: "2023",
      link: "https://github.com/vamsikrishnareddybevara/webweaver"
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
      - Frameworks: ${portfolioInfo.skills.frameworks.join(', ')}
      - Databases: ${portfolioInfo.skills.databases.join(', ')}
      - Cloud & AI: ${portfolioInfo.skills.cloud_ai.join(', ')}`;
    }

    // Contact
    if (input.includes('contact') || input.includes('email') || input.includes('reach')) {
      return `You can contact ${portfolioInfo.name} at:
      - Email: ${portfolioInfo.contact.email}
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
      return `${portfolioInfo.name} created ${project.name}: ${project.description}. Check it out at ${project.link}`;
    }

    // Certifications
    if (input.includes('certification') || input.includes('certificate')) {
      const cert = portfolioInfo.certifications[0];
      return `${portfolioInfo.name} is a certified ${cert.name} by ${cert.issuer} (${cert.date})`;
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
