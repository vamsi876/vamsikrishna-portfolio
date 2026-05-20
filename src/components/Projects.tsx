import React from 'react';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { ExternalLink } from 'lucide-react';
import { FaGithub } from 'react-icons/fa';
import { motion } from 'framer-motion';

interface Project {
  id: number;
  title: string;
  date: string;
  description: string;
  image: string;
  tags: string[];
  links: { github?: string; live?: string };
}

const Projects: React.FC = () => {
  const projects: Project[] = [
    {
      id: 1,
      title: 'GitBar — macOS Menubar Git Dashboard',
      date: 'Mar 2026',
      description: 'Built and published an open-source macOS menubar app providing a unified Git dashboard aggregating PRs, issues, CI/CD status, and local repo health across GitHub, GitLab, and Bitbucket.',
      image: '/images/gitbar-hero.svg',
      tags: ['Python', 'PyObjC', 'GitHub/GitLab REST APIs', 'PyPI'],
      links: { github: 'https://github.com/vamsi876/gitbar', live: 'https://pypi.org/project/gitbar/' },
    },
    {
      id: 2,
      title: 'GadgetBox — Cross-Platform Developer Utilities',
      date: 'Feb 2026',
      description: 'Published a cross-platform system tray app bundling 12 developer utilities (JSON formatter, JWT decoder, UUID generator, Base64, hash, regex tester, etc.) with intelligent clipboard auto-detection.',
      image: '/images/gadgetbox-hero.svg',
      tags: ['Python', 'pystray', 'tkinter', 'PyPI'],
      links: { github: 'https://github.com/vamsi876/gadgetbox', live: 'https://pypi.org/project/gadgetbox/' },
    },
    {
      id: 3,
      title: 'WebWeaver — Web Scraping & Crawling Library',
      date: 'Sep 2024',
      description: 'Open-source Python library for configurable web crawling with URL validation, deduplication, robots.txt compliance, and recursive/breadth-first modes; powers the data ingestion layer behind the ISU RAG chatbot.',
      image: '/images/webweaver-hero.svg',
      tags: ['Python', 'asyncio', 'aiohttp', 'PyPI'],
      links: { github: 'https://github.com/vamsi876/webweaver', live: 'https://pypi.org/project/WebWeaver/' },
    },
    {
      id: 4,
      title: 'Personal Portfolio Website',
      date: 'Jan 2025',
      description: 'A modern, responsive portfolio website built with React, TypeScript, and Tailwind CSS. Features include a dynamic chatbot, contact form with email integration, and a showcase of projects and skills.',
      image: '/screenshots/portfolio-homepage.png',
      tags: ['React', 'TypeScript', 'Tailwind CSS', 'Vite', 'EmailJS', 'Vercel'],
      links: { github: 'https://github.com/vamsi876/vamsikrishna-portfolio', live: 'https://vamsikrishnakollipara.vercel.app' },
    },
  ];

  const projectsSchema = {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    name: 'Projects by Vamsi Krishna Kollipara',
    itemListElement: projects.map((p, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      item: {
        '@type': 'SoftwareApplication',
        name: p.title.split('—')[0].trim(),
        description: p.description,
        applicationCategory: 'DeveloperApplication',
        operatingSystem: 'Cross-platform',
        url: p.links.live || p.links.github,
        codeRepository: p.links.github,
        author: {
          '@type': 'Person',
          name: 'Vamsi Krishna Kollipara',
          url: 'https://vamsikrishnakollipara.vercel.app/',
        },
        programmingLanguage: p.tags.filter((t) => ['Python', 'TypeScript', 'React'].includes(t)),
        offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' },
      },
    })),
  };

  return (
    <section className="py-20 px-6 md:px-12 lg:px-24" id="projects">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(projectsSchema) }}
      />
      <div className="container mx-auto max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-12"
        >
          <span className="section-number">04 — PROJECTS</span>
          <h1 className="text-3xl md:text-4xl font-bold mt-2 text-foreground">Projects &amp; Open-Source Work</h1>
          <p className="text-muted-foreground mt-2 max-w-xl">
            Open-source tools and full-stack projects — 3 packages published on PyPI.
          </p>
          <div className="flex items-center gap-2 mt-4">
            <span className="text-xs px-3 py-1.5 rounded-full bg-primary/10 text-primary font-medium">{projects.length} Projects</span>
            <span className="text-xs px-3 py-1.5 rounded-full bg-primary/10 text-primary font-medium">3 PyPI Packages</span>
          </div>
        </motion.div>

        <div className="space-y-16">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className={cn(
                'flex flex-col md:flex-row gap-8 items-center',
                index % 2 === 1 && 'md:flex-row-reverse'
              )}
            >
              <div className="md:w-1/2 overflow-hidden rounded-xl">
                <div className="bg-card border border-[hsl(var(--card-border))] rounded-xl h-64 md:h-80 overflow-hidden transition-all duration-500 hover:border-[hsl(var(--accent-border))] group">
                  {project.links.live ? (
                    <a href={project.links.live} target="_blank" rel="noopener noreferrer" className="block w-full h-full">
                      <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                        loading="lazy"
                      />
                    </a>
                  ) : (
                    <img src={project.image} alt={project.title} className="w-full h-full object-cover" loading="lazy" />
                  )}
                </div>
              </div>

              <div className="md:w-1/2">
                <div className="flex items-center gap-3 mb-4">
                  <span className="text-xs font-mono text-[hsl(var(--text-muted))]">
                    {String(index + 1).padStart(2, '0')}
                  </span>
                  <h3 className="text-xl font-bold text-foreground">{project.title}</h3>
                  <span className="text-xs text-muted-foreground bg-secondary px-2 py-1 rounded">{project.date}</span>
                </div>

                <div className="mb-4 bg-card border border-[hsl(var(--card-border))] p-5 rounded-xl">
                  <p className="text-sm text-muted-foreground">{project.description}</p>
                </div>

                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tags.map((tag) => (
                    <span key={tag} className="text-xs font-medium bg-secondary border border-[hsl(var(--card-border))] px-2.5 py-1 rounded-md text-muted-foreground">
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="flex gap-3">
                  {project.links.github && (
                    <Button variant="outline" size="sm" className="gap-2 border-[hsl(var(--card-border))] text-muted-foreground hover:text-foreground hover:border-foreground/20" asChild>
                      <a href={project.links.github} target="_blank" rel="noopener noreferrer">
                        <FaGithub size={14} />
                        Code
                      </a>
                    </Button>
                  )}
                  {project.links.live && (
                    <Button size="sm" className="gap-2 bg-primary text-primary-foreground hover:bg-primary/90" asChild>
                      <a href={project.links.live} target="_blank" rel="noopener noreferrer">
                        <ExternalLink size={14} />
                        Live Demo
                      </a>
                    </Button>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
