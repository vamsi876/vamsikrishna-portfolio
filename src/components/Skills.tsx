import React from 'react';
import { Code2, Database, Brain, Globe, Terminal, Wrench } from 'lucide-react';
import { motion } from 'framer-motion';

const Skills: React.FC = () => {
  const skillCategories = [
    {
      title: "Programming Languages",
      icon: <Code2 className="text-primary" size={24} />,
      skills: ["Python", "TypeScript", "Node.js", "JavaScript", "SQL"]
    },
    {
      title: "AI & Machine Learning",
      icon: <Brain className="text-primary" size={24} />,
      skills: [
        "NLP",
        "RAG Systems",
        "LlamaIndex",
        "OpenAI",
        "LangChain",
        "LangGraph",
        "Deep Learning",
        "Machine Learning",
        "Azure OpenAI",
        "Azure Cognitive Services",
        "Azure Bot Service"
      ]
    },
    {
      title: "Databases & Cloud",
      icon: <Database className="text-primary" size={24} />,
      skills: [
        "PostgreSQL",
        "Redis",
        "PineCone",
        "AWS",
        "Azure",
        "Azure Functions",
        "Azure App Service",
        "Azure DevOps",
        "Docker",
        "CI/CD"
      ]
    },
    {
      title: "Web Development",
      icon: <Globe className="text-primary" size={24} />,
      skills: [
        "React.js",
        "Next.js",
        "Express.js",
        "Web Programming",
        "Full Stack Development"
      ]
    },
    {
      title: "Development Tools",
      icon: <Terminal className="text-primary" size={24} />,
      skills: [
        "Git",
        "VS Code",
        "Cursor IDE",
        "Operating Systems",
        "Data Visualization"
      ]
    },
    {
      title: "Other Technologies",
      icon: <Wrench className="text-primary" size={24} />,
      skills: [
        "Temporal",
        "Model Context Protocol (MCP)",
        "Power Automate",
        "Multi-vector Retrieval",
        "Hybrid Lexical-Semantic Search"
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
                {category.skills.map((skill, skillIndex) => (
                  <motion.span
                    key={skillIndex}
                    variants={skillVariants}
                    className="bg-primary/10 text-primary px-3 py-1 rounded-full text-sm font-medium
                             hover:bg-primary hover:text-white cursor-default
                             transition-colors duration-300"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
