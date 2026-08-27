import React from 'react';
import { Code2, Brain, Globe, Terminal, Wrench, Cloud } from 'lucide-react';
import { motion } from 'framer-motion';
import {
  SiPython, SiJavascript, SiTypescript, SiPostgresql, SiReact, SiNodedotjs,
  SiAmazon, SiVercel, SiGraphql, SiNextdotjs, SiTailwindcss,
  SiSupabase, SiMysql, SiGithubactions
} from 'react-icons/si';
import { useSpotlight } from '@/hooks/useSpotlight';
import { skillGroups } from '@/data/resume';

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

  const iconFor: Record<string, React.ReactNode> = {
    TypeScript: <SiTypescript size={iconSize} />,
    JavaScript: <SiJavascript size={iconSize} />,
    Python: <SiPython size={iconSize} />,
    SQL: <SiMysql size={iconSize} />,
    'Node.js': <SiNodedotjs size={iconSize} />,
    GraphQL: <SiGraphql size={iconSize} />,
    PostgreSQL: <SiPostgresql size={iconSize} />,
    AWS: <SiAmazon size={iconSize} />,
    Supabase: <SiSupabase size={iconSize} />,
    Vercel: <SiVercel size={iconSize} />,
    'GitHub Actions CI/CD': <SiGithubactions size={iconSize} />,
    React: <SiReact size={iconSize} />,
    'Next.js': <SiNextdotjs size={iconSize} />,
    'Tailwind CSS': <SiTailwindcss size={iconSize} />,
  };

  const categoryIcons: Record<string, React.ReactNode> = {
    Languages: <Code2 size={22} />,
    'Backend & APIs': <Terminal size={22} />,
    'AI / LLM': <Brain size={22} />,
    'Cloud & Infra': <Cloud size={22} />,
    Frontend: <Globe size={22} />,
  };

  const skillCategories = skillGroups.map((group) => ({
    title: group.title,
    icon: categoryIcons[group.title] ?? <Wrench size={22} />,
    skills: group.skills.map((name) => ({ name, icon: iconFor[name] })),
  }));

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
            The toolchain behind the systems I ship: TypeScript and Python services, GraphQL over Postgres, Claude and RAG pipelines, on AWS and Azure.
          </p>
          <div className="flex gap-3 mt-4 flex-wrap">
            <span className="text-xs px-3 py-1.5 rounded-full bg-primary/10 text-primary font-medium">{skillCategories.length} Categories</span>
            <span className="text-xs px-3 py-1.5 rounded-full bg-primary/10 text-primary font-medium">
              {skillCategories.reduce((n, c) => n + c.skills.length, 0)} Technologies
            </span>
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
