import React from 'react';
import { Code2, Database, Brain, Globe, Terminal, Wrench, Cloud, Sparkles, Bot, Code } from 'lucide-react';
import { motion } from 'framer-motion';
import { 
  SiPython, 
  SiJavascript, 
  SiPostgresql, 
  SiMongodb, 
  SiReact, 
  SiNodedotjs, 
  SiExpress, 
  SiTensorflow, 
  SiPytorch, 
  SiHuggingface, 
  SiAmazon, 
  SiDocker, 
  SiVercel, 
  SiGit, 
  SiPostman, 
  SiN8N, 
  SiZapier,
  SiSupabase,
  SiHtml5,
  SiCss3,
  SiMysql
} from 'react-icons/si';

const Skills: React.FC = () => {
  // Mapping of skill names to their icons
  const skillIcons: Record<string, React.ReactNode> = {
    // Programming Languages
    "Python": <SiPython className="text-primary" size={16} />,
    "Java": <Code2 className="text-primary" size={16} />, // Using generic code icon as fallback
    "JavaScript": <SiJavascript className="text-primary" size={16} />,
    "HTML": <SiHtml5 className="text-primary" size={16} />,
    "CSS": <SiCss3 className="text-primary" size={16} />,
    "SQL": <SiMysql className="text-primary" size={16} />,
    
    // Full-Stack Development
    "React.js": <SiReact className="text-primary" size={16} />,
    "Node.js": <SiNodedotjs className="text-primary" size={16} />,
    "Express.js": <SiExpress className="text-primary" size={16} />,
    
    // AI & Machine Learning
    "TensorFlow": <SiTensorflow className="text-primary" size={16} />,
    "PyTorch": <SiPytorch className="text-primary" size={16} />,
    "Hugging Face": <SiHuggingface className="text-primary" size={16} />,
    
    // Databases
    "PostgreSQL": <SiPostgresql className="text-primary" size={16} />,
    "MongoDB": <SiMongodb className="text-primary" size={16} />,
    "Supabase": <SiSupabase className="text-primary" size={16} />,
    
    // Cloud & DevOps
    "AWS": <SiAmazon className="text-primary" size={16} />,
    "Azure": <Cloud className="text-primary" size={16} />, // Using cloud icon as fallback
    "Docker": <SiDocker className="text-primary" size={16} />,
    "Vercel": <SiVercel className="text-primary" size={16} />,
    
    // Tools
    "Git": <SiGit className="text-primary" size={16} />,
    "Postman": <SiPostman className="text-primary" size={16} />,
    "n8n": <SiN8N className="text-primary" size={16} />,
    "Zapier": <SiZapier className="text-primary" size={16} />,
    "Power Automate": <Cloud className="text-primary" size={16} />, // Using cloud icon as fallback for Microsoft product
    "Cursor": <Code2 className="text-primary" size={16} />, // Cursor IDE icon
    "Antigravity": <Sparkles className="text-primary" size={16} />, // Antigravity AI icon
    "Claude Code": <Bot className="text-primary" size={16} />, // Claude AI icon
    "Codex": <Code className="text-primary" size={16} />, // Codex AI icon
  };

  const skillCategories = [
    {
      title: "Programming Languages",
      icon: <Code2 className="text-primary" size={24} />,
      skills: ["Python", "Java", "JavaScript", "SQL", "HTML", "CSS"]
    },
    {
      title: "Full-Stack Development",
      icon: <Globe className="text-primary" size={24} />,
      skills: [
        "React.js",
        "Node.js",
        "Express.js",
        "REST APIs",
        "API Development",
        "Role-Based Access Control (RBAC)"
      ]
    },
    {
      title: "AI & Machine Learning",
      icon: <Brain className="text-primary" size={24} />,
      skills: [
        "TensorFlow",
        "PyTorch",
        "Hugging Face",
        "LLM Applications",
        "RAG",
        "Prompt Engineering"
      ]
    },
    {
      title: "Databases & Data Engineering",
      icon: <Database className="text-primary" size={24} />,
      skills: [
        "PostgreSQL",
        "MongoDB",
        "Supabase",
        "Pinecone",
        "ETL",
        "Data Cleaning",
        "Data Modeling"
      ]
    },
    {
      title: "Cloud, DevOps & Deployment",
      icon: <Terminal className="text-primary" size={24} />,
      skills: [
        "AWS",
        "Azure",
        "Docker",
        "CI/CD",
        "Vercel"
      ]
    },
    {
      title: "Tools, Automation & Productivity",
      icon: <Wrench className="text-primary" size={24} />,
      skills: [
        "Git",
        "Postman",
        "n8n",
        "Make",
        "Zapier",
        "Power Automate",
        "Cursor",
        "Antigravity",
        "Claude Code",
        "Codex"
      ]
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
