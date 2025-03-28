import React from 'react';
import { Button } from '@/components/ui/button';
import { Mail } from 'lucide-react';
import { Link } from 'react-router-dom';

const Hero: React.FC = () => {
  return (
    <section className="relative h-screen flex items-center justify-center section-padding overflow-hidden" id="about">
      <div className="absolute inset-0 z-0">
        <div className="absolute top-1/4 right-1/4 w-96 h-96 rounded-full bg-primary/5 filter blur-3xl"></div>
        <div className="absolute bottom-1/4 left-1/4 w-96 h-96 rounded-full bg-primary/5 filter blur-3xl"></div>
      </div>
      
      <div className="container mx-auto max-w-5xl z-10">
        <div className="text-center space-y-8">
          <div className="inline-block glass-dark px-4 py-2 rounded-full text-sm font-medium mb-4 opacity-0 animate-fade-in animation-delay-100">
            Hi, my name is
          </div>
          
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight tracking-tight text-balance opacity-0 animate-fade-in animation-delay-200">
            <span className="text-gradient">Vamsi Krishna Kollipara</span>
          </h1>
          
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-medium text-foreground/80 mt-4 text-balance max-w-3xl mx-auto opacity-0 animate-fade-in animation-delay-300">
            Graduate Research Assistant & AI Engineer at Indiana State University
          </h2>
          
          <p className="max-w-xl mx-auto text-muted-foreground opacity-0 animate-fade-in animation-delay-400">
            Developing innovative AI solutions with LLMs and RAG systems. Currently working on voice AI chatbots and automated grading systems while pursuing my Master's in Computer Science. Passionate about creating intelligent systems that enhance human capabilities.
          </p>
          
          <div className="flex justify-center pt-4 opacity-0 animate-fade-in animation-delay-500">
            <Button 
              size="lg" 
              className="rounded-full px-8 gap-2 glass-dark hover:bg-primary/20 transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105 text-black" 
              asChild
            >
              <Link to="/contact" className="flex items-center gap-2">
                <Mail size={18} />
                Get in Touch
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
