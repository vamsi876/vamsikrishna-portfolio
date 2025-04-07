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
      title: 'RAG-powered University Chatbot',
      description: 'A context-aware chatbot using Retrieval Augmented Generation (RAG) with Pinecone vector database for efficient similarity search. Integrates OpenAI embeddings for document vectorization and GPT models for natural responses. Features include semantic search across university documents, real-time query processing, and context-aware responses.',
      image: '/screenshots/rag-chatbot.avif',
      tags: ['Python', 'OpenAI', 'Pinecone', 'RAG', 'FastAPI', 'Vector DB'],
      links: {
        github: 'https://github.com/vamsi876/RAG-Chatbot',
        live: 'https://rag-chatbot-demo.vercel.app',
      },
    },
    {
      id: 2,
      title: 'WebWeaver',
      description: 'A Python library for browser automation and web scraping, published on PyPI. Features include URL extraction, site crawling with timeout control, and multi-threaded crawling capabilities. Built with Python and designed for efficient web data extraction.',
      image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80',
      tags: ['Python', 'Web Scraping', 'Browser Automation', 'PyPI', 'Multi-threading'],
      links: {
        github: 'https://github.com/RedBlackWeb/WebWeaver',
        live: 'https://pypi.org/project/WebWeaver/',
      },
    },
    {
      id: 3,
      title: 'Voice Command Canvas',
      description: 'An interactive web application that allows users to navigate on canvas using voice commands. Built with React and TypeScript, it leverages the Web Speech API for voice recognition.',
      image: '/screenshots/voice-command-canvas.png',
      tags: ['TypeScript', 'React', 'Web Speech API', 'Canvas API', 'Tailwind CSS'],
      links: {
        github: 'https://github.com/vamsi876/voice-command-canvas',
        live: 'https://voice-command-canvas.vercel.app',
      },
    },
    {
      id: 4,
      title: 'COVID-19 U.S. County Map Visualization',
      description: 'An interactive map built using Python and Folium to visualize COVID-19 cases and deaths across U.S. counties in 2020. Features dynamically rendered circles proportional to case counts, hoverable tooltips with detailed stats, and state border outlines.',
      image: 'https://raw.githubusercontent.com/vamsi876/us-covid-map-2020/main/TotalCovidMap-LN-superJumbo.png.webp',
      tags: ['Python', 'Folium', 'Pandas', 'GeoJSON', 'Data Visualization'],
      links: {
        github: 'https://github.com/vamsi876/us-covid-map-2020',
        live: 'https://vamsi876.github.io/us-covid-map-2020/',
      },
    },
    {
      id: 5,
      title: 'Personal Portfolio Website',
      description: 'A modern, responsive portfolio website built with React, TypeScript, and Tailwind CSS. Features include a dynamic chatbot, contact form with email integration, and a showcase of projects and skills. Deployed on Vercel with continuous integration.',
      image: '/screenshots/portfolio-homepage.png',
      tags: ['React', 'TypeScript', 'Tailwind CSS', 'Vite', 'EmailJS', 'Vercel'],
      links: {
        github: 'https://github.com/vamsi876/vamsikrishna-portfolio',
        live: 'https://vamsikrishna.vercel.app',
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
