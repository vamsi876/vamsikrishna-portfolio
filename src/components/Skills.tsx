import React from 'react';
import { Code2, Database, Brain, Globe, Terminal, Wrench, Cloud, Bot } from 'lucide-react';
import { motion } from 'framer-motion';
import {
  SiPython,
  SiJavascript,
  SiTypescript,
  SiPostgresql,
  SiReact,
  SiNodedotjs,
  SiExpress,
  SiAmazon,
  SiDocker,
  SiVercel,
  SiGit,
  SiPostman,
  SiGraphql,
  SiNextdotjs,
  SiTailwindcss,
  SiSupabase,
  SiHtml5,
  SiCss3,
  SiMysql,
  SiVite,
  SiD3Dotjs,
  SiRabbitmq,
  SiRedis,
  SiGithubactions,
  SiJest,
  SiPytest
} from 'react-icons/si';

const Skills: React.FC = () => {
  // Mapping of skill names to their icons
  const skillIcons: Record<string, React.ReactNode> = {
    // Programming Languages
    "JavaScript": <SiJavascript className="text-primary" size={16} />,
    "TypeScript": <SiTypescript className="text-primary" size={16} />,
    "Python": <SiPython className="text-primary" size={16} />,
    "SQL": <SiMysql className="text-primary" size={16} />,
    "PowerShell": <Terminal className="text-primary" size={16} />,
    "HTML": <SiHtml5 className="text-primary" size={16} />,
    "CSS": <SiCss3 className="text-primary" size={16} />,

    // Frontend
    "React": <SiReact className="text-primary" size={16} />,
    "Next.js": <SiNextdotjs className="text-primary" size={16} />,
    "Vite": <SiVite className="text-primary" size={16} />,
    "Tailwind CSS": <SiTailwindcss className="text-primary" size={16} />,
    "shadcn/ui": <Globe className="text-primary" size={16} />,
    "D3.js": <SiD3Dotjs className="text-primary" size={16} />,
    "Mapbox GL": <Globe className="text-primary" size={16} />,

    // Backend
    "Node.js": <SiNodedotjs className="text-primary" size={16} />,
    "Express.js": <SiExpress className="text-primary" size={16} />,
    "GraphQL": <SiGraphql className="text-primary" size={16} />,
    "RabbitMQ": <SiRabbitmq className="text-primary" size={16} />,

    // Databases
    "PostgreSQL": <SiPostgresql className="text-primary" size={16} />,
    "SQL Server": <Database className="text-primary" size={16} />,
    "Oracle": <Database className="text-primary" size={16} />,
    "Redis": <SiRedis className="text-primary" size={16} />,
    "Pinecone": <Database className="text-primary" size={16} />,

    // Cloud & DevOps
    "Azure": <Cloud className="text-primary" size={16} />,
    "AWS": <SiAmazon className="text-primary" size={16} />,
    "Docker": <SiDocker className="text-primary" size={16} />,
    "GitHub Actions": <SiGithubactions className="text-primary" size={16} />,
    "Vercel": <SiVercel className="text-primary" size={16} />,
    "Supabase": <SiSupabase className="text-primary" size={16} />,

    // AI & LLM
    "Anthropic Claude API": <Bot className="text-primary" size={16} />,
    "LangChain": <Bot className="text-primary" size={16} />,
    "OpenAI API": <Bot className="text-primary" size={16} />,

    // Tools
    "Git": <SiGit className="text-primary" size={16} />,
    "Postman": <SiPostman className="text-primary" size={16} />,
    "Jest": <SiJest className="text-primary" size={16} />,
    "React Testing Library": <Wrench className="text-primary" size={16} />,
    "Pytest": <SiPytest className="text-primary" size={16} />,
  };

  const skillCategories = [
    {
      title: "Languages",
      icon: <Code2 className="text-primary" size={24} />,
      skills: ["JavaScript", "TypeScript", "Python", "SQL", "PowerShell", "HTML", "CSS"]
    },
    {
      title: "Frontend",
      icon: <Globe className="text-primary" size={24} />,
      skills: ["React", "Next.js", "Vite", "Tailwind CSS", "shadcn/ui", "D3.js", "Mapbox GL"]
    },
    {
      title: "Backend",
      icon: <Terminal className="text-primary" size={24} />,
      skills: ["Node.js", "Express.js", "GraphQL", "REST APIs", "RabbitMQ"]
    },
    {
      title: "Databases",
      icon: <Database className="text-primary" size={24} />,
      skills: ["PostgreSQL", "SQL Server", "Oracle", "Redis", "Pinecone"]
    },
    {
      title: "Cloud & DevOps",
      icon: <Cloud className="text-primary" size={24} />,
      skills: ["Azure", "AWS", "Docker", "GitHub Actions", "CI/CD", "Vercel", "Supabase"]
    },
    {
      title: "AI & LLM",
      icon: <Brain className="text-primary" size={24} />,
      skills: ["Anthropic Claude API", "LangChain", "OpenAI API", "Vector Databases", "RAG"]
    },
    {
      title: "Tools",
      icon: <Wrench className="text-primary" size={24} />,
      skills: ["Git", "Postman", "Jest", "React Testing Library", "Pytest"]
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { 
      opacity: 0,
      y: 20
    },
    visible: { 
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5
      }
    }
  };

  const skillVariants = {
    hidden: { scale: 0.8, opacity: 0 },
    visible: { 
      scale: 1, 
      opacity: 1,
      transition: {
        duration: 0.3
      }
    }
  };

  return (
    <section className="py-20 px-6 md:px-12 lg:px-24" id="skills">
      <div className="container mx-auto max-w-6xl">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary/60">
            Skills & Expertise
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            A comprehensive overview of my technical skills and areas of expertise
          </p>
        </motion.div>

        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {skillCategories.map((category, index) => (
            <motion.div 
              key={index}
              variants={itemVariants}
              className="glass-dark p-6 rounded-xl hover:shadow-lg transition-all duration-300 group"
              whileHover={{ scale: 1.02 }}
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="group-hover:rotate-12 transition-transform duration-300">
                  {category.icon}
                </div>
                <h3 className="text-xl font-semibold group-hover:text-primary transition-colors">
                  {category.title}
                </h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, skillIndex) => {
                  const skillIcon = skillIcons[skill];
                  return (
                  <motion.span
                    key={skillIndex}
                    variants={skillVariants}
                    className="bg-primary/10 text-primary px-3 py-1 rounded-full text-sm font-medium
                             hover:bg-primary hover:text-white cursor-default
                               transition-colors duration-300 flex items-center gap-2"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                  >
                      {skillIcon && <span className="flex-shrink-0">{skillIcon}</span>}
                      <span>{skill}</span>
                  </motion.span>
                  );
                })}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
