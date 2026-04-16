import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Mail, FileText, ChevronDown } from 'lucide-react';
import { useTypewriter } from '@/hooks/useTypewriter';
import { useMagnetic } from '@/hooks/useMagnetic';
import { useSpotlight } from '@/hooks/useSpotlight';

const BentoCard: React.FC<{
  to: string;
  className?: string;
  label: string;
  children: React.ReactNode;
  hoverContent?: React.ReactNode;
  delay?: number;
}> = ({ to, className, label, children, hoverContent, delay = 0 }) => {
  const { ref, spotlightStyle, isHovered, handlers } = useSpotlight();

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay, duration: 0.5, ease: 'easeOut' }}
    >
      <Link to={to} className="block h-full">
        <div
          ref={ref}
          {...handlers}
          className={`relative overflow-hidden rounded-xl bg-card border border-[hsl(var(--card-border))] p-5 h-full transition-colors duration-300 hover:border-[hsl(var(--accent-border))] ${className || ''}`}
          style={spotlightStyle}
        >
          <div className="mono-label mb-3">{label}</div>
          {children}
          {hoverContent && (
            <div
              className={`mt-3 transition-all duration-300 ${
                isHovered ? 'opacity-100 max-h-40' : 'opacity-0 max-h-0'
              } overflow-hidden`}
            >
              {hoverContent}
            </div>
          )}
        </div>
      </Link>
    </motion.div>
  );
};

const Hero: React.FC = () => {
  const { displayText, isComplete } = useTypewriter('Vamsi Krishna Kollipara', 60, 300);
  const ctaMagnetic = useMagnetic(0.2);
  const resumeMagnetic = useMagnetic(0.2);

  const bioWords = 'Full-stack developer with 2+ years shipping React/TypeScript frontends and Node.js backends across healthcare and energy domains.'.split(' ');

  return (
    <section className="min-h-screen pt-28 pb-20 px-6 md:px-12 lg:px-24">
      <div className="container mx-auto max-w-5xl">
        {/* Hero */}
        <div className="mb-16">
          <div className="flex items-center gap-2 mb-6">
            <div className="w-2 h-2 rounded-full bg-primary animate-pulse-green" />
            <span className="mono-label text-primary">Available for work</span>
          </div>

          <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-foreground leading-[1.1] mb-4">
            {displayText}
            {!isComplete && (
              <span className="inline-block w-[3px] h-[0.85em] bg-primary ml-1 align-middle animate-blink" />
            )}
          </h1>

          <h2 className="text-xl md:text-2xl font-medium text-muted-foreground mb-6">
            Full-Stack Developer
          </h2>

          <p className="text-muted-foreground max-w-xl mb-8">
            {bioWords.map((word, i) => (
              <motion.span
                key={i}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.8 + i * 0.04, duration: 0.3 }}
                className="inline-block mr-[0.3em]"
              >
                {word}
              </motion.span>
            ))}
          </p>

          <div className="flex gap-4">
            <Link
              to="/contact"
              ref={ctaMagnetic.ref as React.Ref<HTMLAnchorElement>}
              {...ctaMagnetic.handlers}
              style={ctaMagnetic.magneticStyle}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-primary text-primary-foreground font-medium text-sm hover:bg-primary/90 active:scale-[0.97] transition-all"
            >
              <Mail size={16} />
              Get in Touch
            </Link>
            <Link
              to="/resume"
              ref={resumeMagnetic.ref as React.Ref<HTMLAnchorElement>}
              {...resumeMagnetic.handlers}
              style={resumeMagnetic.magneticStyle}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-[hsl(var(--card-border))] text-muted-foreground font-medium text-sm hover:text-foreground hover:border-foreground/20 active:scale-[0.97] transition-all"
            >
              <FileText size={16} />
              Resume
            </Link>
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 3, duration: 1 }}
            className="mt-12 flex items-center gap-2 text-[hsl(var(--text-muted))]"
          >
            <motion.div
              animate={{ y: [0, 6, 0] }}
              transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
            >
              <ChevronDown size={16} />
            </motion.div>
            <span className="text-xs font-mono tracking-wider uppercase">Scroll to explore</span>
          </motion.div>
        </div>

        <div className="w-full h-px bg-[hsl(var(--card-border))] my-12" />

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <BentoCard
            to="/about"
            className="md:col-span-2"
            label="ABOUT"
            delay={0.1}
            hoverContent={
              <div className="flex gap-2 flex-wrap">
                <span className="text-xs px-2.5 py-1 rounded-md bg-secondary text-muted-foreground">San Francisco, CA</span>
                <span className="text-xs px-2.5 py-1 rounded-md bg-secondary text-muted-foreground">MS Computer Science</span>
                <span className="text-xs px-2.5 py-1 rounded-md bg-secondary text-muted-foreground">Indiana State University</span>
              </div>
            }
          >
            <p className="text-sm text-muted-foreground leading-relaxed">
              Sole developer on a Supabase-powered operations platform serving 8 organizational roles daily. Shipping React/TypeScript frontends and Node.js backends across healthcare and energy domains, plus AI integration with LangChain and Claude API.
            </p>
          </BentoCard>

          <BentoCard
            to="/experience"
            label="EXPERIENCE"
            delay={0.15}
            hoverContent={
              <div className="flex flex-col gap-1">
                <span className="text-xs text-muted-foreground">AIDM Software</span>
                <span className="text-xs text-muted-foreground">Indiana State University</span>
                <span className="text-xs text-muted-foreground">Cognizant</span>
              </div>
            }
          >
            <div className="text-4xl font-bold text-foreground">2+</div>
            <div className="text-sm text-muted-foreground">years industry experience</div>
          </BentoCard>

          <BentoCard
            to="/skills"
            label="SKILLS"
            delay={0.2}
            hoverContent={
              <div className="text-xs text-primary">View all 7 categories &rarr;</div>
            }
          >
            <div className="flex flex-wrap gap-1.5">
              {['React', 'TypeScript', 'Node.js', 'PostgreSQL', 'Python', 'AI/LLM', 'AWS', 'Docker'].map((skill) => (
                <span key={skill} className="text-xs px-2.5 py-1 rounded-md bg-secondary border border-[hsl(var(--card-border))] text-muted-foreground">
                  {skill}
                </span>
              ))}
            </div>
          </BentoCard>

          <BentoCard
            to="/projects"
            label="OPEN SOURCE"
            delay={0.25}
            hoverContent={
              <div className="flex flex-wrap gap-1.5">
                <span className="text-xs px-2.5 py-1 rounded-md bg-secondary text-muted-foreground">GitBar</span>
                <span className="text-xs px-2.5 py-1 rounded-md bg-secondary text-muted-foreground">GadgetBox</span>
                <span className="text-xs px-2.5 py-1 rounded-md bg-secondary text-muted-foreground">WebWeaver</span>
              </div>
            }
          >
            <div className="text-4xl font-bold text-foreground">3</div>
            <div className="text-sm text-muted-foreground">PyPI packages published</div>
          </BentoCard>

          <BentoCard
            to="/projects"
            label="LATEST PROJECT"
            delay={0.3}
            hoverContent={
              <div className="flex flex-wrap gap-1.5">
                <span className="text-xs px-2.5 py-1 rounded-md bg-secondary text-muted-foreground">Python</span>
                <span className="text-xs px-2.5 py-1 rounded-md bg-secondary text-muted-foreground">PyObjC</span>
                <span className="text-xs px-2.5 py-1 rounded-md bg-secondary text-muted-foreground">GitHub API</span>
              </div>
            }
          >
            <div className="text-lg font-semibold text-foreground">GitBar</div>
            <div className="text-sm text-muted-foreground">macOS menubar Git dashboard for PRs, issues & CI/CD</div>
          </BentoCard>

          <BentoCard
            to="/experience"
            className="md:col-span-3"
            label="CAREER TIMELINE"
            delay={0.35}
          >
            <div className="flex items-center gap-4 overflow-x-auto py-2">
              {[
                { company: 'Cognizant', role: 'Full-Stack Developer', date: 'Jan 2022 – Jul 2023', active: false },
                { company: 'Indiana State University', role: 'Research & Teaching Assistant', date: 'Aug 2023 – May 2025', active: false },
                { company: 'AIDM Software', role: 'Full-Stack Developer', date: 'Jul 2025 – Present', active: true },
              ].map((job, i) => (
                <div key={i} className="flex items-center gap-4 flex-shrink-0">
                  {i > 0 && <div className="w-12 h-px bg-[hsl(var(--card-border))]" />}
                  <div className={`flex items-center gap-3 ${job.active ? 'bg-primary/5 px-3 py-1.5 rounded-lg' : ''}`}>
                    <div className={`w-2.5 h-2.5 rounded-full flex-shrink-0 ${job.active ? 'bg-primary animate-pulse-green' : 'bg-[hsl(var(--card-border))]'}`} />
                    <div>
                      <div className={`text-sm font-medium ${job.active ? 'text-foreground' : 'text-muted-foreground'}`}>{job.company}</div>
                      <div className="text-xs text-[hsl(var(--text-muted))]">{job.date}</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </BentoCard>
        </div>
      </div>
    </section>
  );
};

export default Hero;
