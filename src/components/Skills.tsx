import React from 'react';
import { Code2, Database, Brain, Globe, Terminal, Wrench, Cloud, Shield } from 'lucide-react';
import { motion } from 'framer-motion';
import {
  SiPython, SiJavascript, SiTypescript, SiPostgresql, SiReact, SiNodedotjs, SiExpress,
  SiAmazon, SiDocker, SiVercel, SiGit, SiPostman, SiGraphql, SiNextdotjs, SiTailwindcss,
  SiSupabase, SiHtml5, SiCss3, SiMysql, SiVite, SiD3Dotjs, SiRabbitmq, SiRedis,
  SiGithubactions, SiJest, SiPytest
} from 'react-icons/si';
import { useSpotlight } from '@/hooks/useSpotlight';

const SkillCategoryCard: React.FC<{
  title: string;
  icon: React.ReactNode;
  skills: { name: string; icon?: React.ReactNode }[];
  delay: number;
  className?: string;
}> = ({ title, icon, skills, delay, className }) => {
  const { ref, spotlightStyle, handlers } = useSpotlight();

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ delay, duration: 0.5 }}
      className={className}
    >
      <div
        ref={ref}
        {...handlers}
        className="bg-card border border-[hsl(var(--card-border))] rounded-xl p-5 h-full transition-colors hover:border-[hsl(var(--accent-border))] group"
        style={spotlightStyle}
      >
        <div className="flex items-center gap-3 mb-4">
          <div className="text-muted-foreground group-hover:text-primary group-hover:rotate-12 transition-all duration-300">
            {icon}
          </div>
          <h3 className="text-lg font-semibold text-foreground">{title}</h3>
        </div>
        <div className="flex flex-wrap gap-2">
          {skills.map((skill, i) => (
            <motion.span
              key={skill.name}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: delay + i * 0.03, duration: 0.3 }}
              className="text-xs px-2.5 py-1.5 rounded-md bg-secondary border border-[hsl(var(--card-border))] text-muted-foreground hover:text-foreground hover:border-primary/30 transition-colors flex items-center gap-1.5 cursor-default"
            >
              {skill.icon && <span className="text-muted-foreground">{skill.icon}</span>}
              {skill.name}
            </motion.span>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

const Skills: React.FC = () => {
  const iconSize = 12;

  const skillCategories = [
    {
      title: 'Languages',
      icon: <Code2 size={22} />,
      skills: [
        { name: 'JavaScript', icon: <SiJavascript size={iconSize} /> },
        { name: 'TypeScript', icon: <SiTypescript size={iconSize} /> },
        { name: 'Python', icon: <SiPython size={iconSize} /> },
        { name: 'SQL', icon: <SiMysql size={iconSize} /> },
        { name: 'PowerShell', icon: <Terminal size={iconSize} /> },
        { name: 'HTML', icon: <SiHtml5 size={iconSize} /> },
        { name: 'CSS', icon: <SiCss3 size={iconSize} /> },
      ],
    },
    {
      title: 'Frontend',
      icon: <Globe size={22} />,
      skills: [
        { name: 'React', icon: <SiReact size={iconSize} /> },
        { name: 'Next.js', icon: <SiNextdotjs size={iconSize} /> },
        { name: 'Vite', icon: <SiVite size={iconSize} /> },
        { name: 'Tailwind CSS', icon: <SiTailwindcss size={iconSize} /> },
        { name: 'shadcn/ui' },
        { name: 'D3.js', icon: <SiD3Dotjs size={iconSize} /> },
        { name: 'Mapbox GL' },
        { name: 'Responsive UI' },
      ],
    },
    {
      title: 'Backend',
      icon: <Terminal size={22} />,
      skills: [
        { name: 'Node.js', icon: <SiNodedotjs size={iconSize} /> },
        { name: 'Express.js', icon: <SiExpress size={iconSize} /> },
        { name: 'REST APIs' },
        { name: 'GraphQL', icon: <SiGraphql size={iconSize} /> },
        { name: 'Webhooks' },
        { name: 'RabbitMQ', icon: <SiRabbitmq size={iconSize} /> },
        { name: 'Edge Functions' },
      ],
    },
    {
      title: 'Databases',
      icon: <Database size={22} />,
      skills: [
        { name: 'PostgreSQL', icon: <SiPostgresql size={iconSize} /> },
        { name: 'SQL Server' },
        { name: 'Oracle' },
        { name: 'Redis', icon: <SiRedis size={iconSize} /> },
        { name: 'Pinecone' },
        { name: 'Supabase', icon: <SiSupabase size={iconSize} /> },
      ],
    },
    {
      title: 'AI & LLM',
      icon: <Brain size={22} />,
      skills: [
        { name: 'Anthropic Claude API' },
        { name: 'OpenAI API' },
        { name: 'LangChain' },
        { name: 'RAG' },
        { name: 'Vector Search' },
        { name: 'Embeddings' },
        { name: 'Prompt Engineering' },
      ],
    },
    {
      title: 'Auth & Security',
      icon: <Shield size={22} />,
      skills: [
        { name: 'OAuth 2.0' },
        { name: 'JWT' },
        { name: 'Session Management' },
        { name: 'Azure AD SSO' },
        { name: 'Row-Level Security' },
        { name: 'RBAC' },
        { name: 'Encryption at Rest/Transit' },
      ],
    },
    {
      title: 'Cloud & DevOps',
      icon: <Cloud size={22} />,
      skills: [
        { name: 'Azure' },
        { name: 'AWS', icon: <SiAmazon size={iconSize} /> },
        { name: 'Docker', icon: <SiDocker size={iconSize} /> },
        { name: 'GitHub Actions', icon: <SiGithubactions size={iconSize} /> },
        { name: 'CI/CD' },
        { name: 'Vercel', icon: <SiVercel size={iconSize} /> },
      ],
    },
    {
      title: 'Tools',
      icon: <Wrench size={22} />,
      skills: [
        { name: 'Git', icon: <SiGit size={iconSize} /> },
        { name: 'Postman', icon: <SiPostman size={iconSize} /> },
        { name: 'Jest', icon: <SiJest size={iconSize} /> },
        { name: 'React Testing Library' },
        { name: 'Pytest', icon: <SiPytest size={iconSize} /> },
      ],
    },
  ];

  return (
    <section className="py-20 px-6 md:px-12 lg:px-24" id="skills">
      <div className="container mx-auto max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-12"
        >
          <span className="section-number">02 — SKILLS</span>
          <h1 className="text-3xl md:text-4xl font-bold mt-2 text-foreground">Skills &amp; Expertise</h1>
          <p className="text-muted-foreground mt-2 max-w-xl">
            The toolchain I use to ship production AI full-stack systems: React/TypeScript, Node.js, Claude/LangChain, and enterprise auth.
          </p>
          <div className="flex gap-3 mt-4 flex-wrap">
            <span className="text-xs px-3 py-1.5 rounded-full bg-primary/10 text-primary font-medium">8 Categories</span>
            <span className="text-xs px-3 py-1.5 rounded-full bg-primary/10 text-primary font-medium">50+ Technologies</span>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {skillCategories.map((category, index) => (
            <SkillCategoryCard
              key={category.title}
              title={category.title}
              icon={category.icon}
              skills={category.skills}
              delay={index * 0.05}
              className=""
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
