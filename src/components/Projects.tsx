import React from 'react';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { ExternalLink, Github } from 'lucide-react';

interface Project {
  id: number;
  title: string;
  date: string;
  description: string;
  image: string;
  tags: string[];
  links: {
    github?: string;
    live?: string;
  };
}

const Projects: React.FC = () => {
  const projects: Project[] = [
    {
      id: 1,
      title: 'GitBar — macOS Menubar Git Dashboard',
      date: 'Mar 2026',
      description: 'Built and published an open-source macOS menubar app providing a unified Git dashboard aggregating PRs, issues, CI/CD status, and local repo health across GitHub, GitLab, and Bitbucket.',
      image: '/screenshots/rag-chatbot.avif',
      tags: ['Python', 'PyObjC', 'GitHub/GitLab REST APIs', 'PyPI'],
      links: {
        github: 'https://github.com/vamsi876/gitbar',
        live: 'https://pypi.org/project/gitbar/',
      },
    },
    {
      id: 2,
      title: 'GadgetBox — Cross-Platform Developer Utilities',
      date: 'Feb 2026',
      description: 'Published a cross-platform system tray app bundling 12 developer utilities (JSON formatter, JWT decoder, UUID generator, Base64, hash, regex tester, etc.) with intelligent clipboard auto-detection.',
      image: '/images/webweaver.png',
      tags: ['Python', 'pystray', 'tkinter', 'PyPI'],
      links: {
        github: 'https://github.com/vamsi876/gadgetbox',
        live: 'https://pypi.org/project/gadgetbox/',
      },
    },
    {
      id: 3,
      title: 'WebWeaver — Web Scraping & Crawling Library',
      date: 'Sep 2024',
      description: 'Open-source Python library for configurable web crawling with URL validation, deduplication, robots.txt compliance, and recursive/breadth-first modes; powers the data ingestion layer behind the ISU RAG chatbot.',
      image: '/screenshots/voice-command-canvas.png',
      tags: ['Python', 'asyncio', 'aiohttp', 'PyPI'],
      links: {
        github: 'https://github.com/vamsi876/webweaver',
        live: 'https://pypi.org/project/WebWeaver/',
      },
    },
    {
      id: 4,
      title: 'Personal Portfolio Website',
      date: 'Jan 2025',
      description: 'A modern, responsive portfolio website built with React, TypeScript, and Tailwind CSS. Features include a dynamic chatbot, contact form with email integration, and a showcase of projects and skills. Deployed on Vercel with continuous integration.',
      image: '/screenshots/portfolio-homepage.png',
      tags: ['React', 'TypeScript', 'Tailwind CSS', 'Vite', 'EmailJS', 'Vercel'],
      links: {
        github: 'https://github.com/vamsi876/vamsikrishna-portfolio',
        live: 'https://vamsikrishnakollipara.vercel.app',
      },
    },
  ];

  return (
    <section className="py-20 px-6 md:px-12 lg:px-24" id="projects">
      <div className="container mx-auto max-w-5xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Projects</h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            Open-source tools and full-stack projects — 3 packages published on PyPI.
          </p>
        </div>

        <div className="space-y-24">
          {projects.map((project, index) => (
            <div 
              key={project.id}
              className={cn(
                "flex flex-col md:flex-row gap-8 items-center opacity-0 animate-fade-in",
                index % 2 === 1 && "md:flex-row-reverse"
              )}
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="md:w-1/2 overflow-hidden rounded-xl">
                <div className="bg-muted rounded-xl h-64 md:h-80 overflow-hidden transition-transform duration-500 hover:scale-105">
                  {project.links.live ? (
                    <a 
                      href={project.links.live} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="block w-full h-full"
                    >
                      <img 
                        src={project.image} 
                        alt={project.title} 
                        className="w-full h-full object-cover cursor-pointer"
                        loading="lazy" 
                      />
                    </a>
                  ) : (
                    <img 
                      src={project.image} 
                      alt={project.title} 
                      className="w-full h-full object-cover"
                      loading="lazy" 
                    />
                  )}
                </div>
              </div>
              
              <div className="md:w-1/2">
                <div className="flex items-center gap-3 mb-4">
                  <h3 className="text-2xl font-bold">{project.title}</h3>
                  <span className="text-sm text-muted-foreground bg-secondary px-2 py-1 rounded">{project.date}</span>
                </div>
                
                <div className="mb-4 glass p-6 rounded-xl">
                  <p className="text-foreground/80">{project.description}</p>
                </div>
                
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tags.map((tag) => (
                    <span 
                      key={tag} 
                      className="text-xs font-medium bg-secondary px-3 py-1 rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                
                <div className="flex gap-4">
                  {project.links.github && (
                    <Button 
                      variant="outline" 
                      size="sm" 
                      className="gap-2"
                      asChild
                    >
                      <a href={project.links.github} target="_blank" rel="noopener noreferrer">
                        <Github size={16} />
                        <span>Code</span>
                      </a>
                    </Button>
                  )}
                  
                  {project.links.live && (
                    <Button 
                      size="sm" 
                      className="gap-2"
                      asChild
                    >
                      <a href={project.links.live} target="_blank" rel="noopener noreferrer">
                        <ExternalLink size={16} />
                        <span>Live Demo</span>
                      </a>
                    </Button>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
