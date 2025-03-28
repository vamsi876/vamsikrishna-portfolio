import React from 'react';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { ExternalLink, Github } from 'lucide-react';

interface Project {
  id: number;
  title: string;
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
      title: 'Voice AI Chatbot for University',
      description: 'A comprehensive AI chatbot system built with RAG and LLMs to assist students with university policies and deadlines. Features include multi-channel support (voice, email, chat) and intelligent human escalation.',
      image: 'https://images.unsplash.com/photo-1593642632823-8f785ba67e45?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80',
      tags: ['Python', 'LLM', 'RAG', 'NLP', 'LlamaParser'],
      links: {
        github: '#',
        live: '#',
      },
    },
    {
      id: 2,
      title: 'WebWeaver',
      description: 'A Python library for browser automation and web scraping, published on PyPI. Co-developed as an open-source contribution to simplify web automation tasks and data extraction.',
      image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80',
      tags: ['Python', 'Web Scraping', 'Browser Automation', 'PyPI'],
      links: {
        github: '#',
        live: '#',
      },
    },
    {
      id: 3,
      title: 'Voice Command Canvas',
      description: 'An interactive web application that allows users to draw on a canvas using voice commands. Built with React and TypeScript, it leverages the Web Speech API for voice recognition and HTML Canvas for drawing.',
      image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80',
      tags: ['TypeScript', 'React', 'Web Speech API', 'Canvas API', 'Tailwind CSS'],
      links: {
        github: 'https://github.com/vamsi876/voice-command-canvas',
        live: 'https://voice-command-canvas.vercel.app',
      },
    },
  ];

  return (
    <section className="py-20 px-6 md:px-12 lg:px-24" id="projects">
      <div className="container mx-auto max-w-5xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Projects</h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            A collection of projects that showcase my skills and experience in AI engineering.
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
                  <img 
                    src={project.image} 
                    alt={project.title} 
                    className="w-full h-full object-cover"
                    loading="lazy" 
                  />
                </div>
              </div>
              
              <div className="md:w-1/2">
                <h3 className="text-2xl font-bold mb-4">{project.title}</h3>
                
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
