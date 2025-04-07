import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Download, ExternalLink } from 'lucide-react';

const About: React.FC = () => {
  return (
    <section className="py-12 md:py-20 px-4 md:px-6 lg:px-24 bg-secondary/50" id="about">
      <div className="container mx-auto max-w-6xl">
        <motion.div 
          className="text-center mb-8 md:mb-16"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-2xl md:text-4xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary/60">
            About Me
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-start">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="space-y-6"
          >
            <div className="space-y-3 md:space-y-4">
              <h3 className="text-xl md:text-2xl font-bold">AI Engineer & Full Stack Developer</h3>
              <p className="text-sm md:text-base text-muted-foreground">
                Graduate Research & Teaching Assistant at Indiana State University, specializing in AI/ML and Full Stack Development. 
                Experienced in building AI-driven automation systems, voice AI solutions, and RAG systems. Currently developing innovative 
                solutions including voice chatbots, automated grading systems, and multi-channel customer interaction platforms.
              </p>
            </div>

            <div className="space-y-3 md:space-y-4">
              <h4 className="text-lg md:text-xl font-semibold">Key Focus Areas</h4>
              <ul className="list-disc list-inside space-y-2 text-sm md:text-base text-muted-foreground">
                <li>Developing AI-powered automation solutions using LLMs and RAG systems</li>
                <li>Building scalable voice AI and multi-channel communication platforms</li>
                <li>Implementing efficient data processing and retrieval systems</li>
                <li>Creating intelligent conversation systems with contextual memory</li>
                <li>Designing and deploying cloud-native applications</li>
              </ul>
            </div>

            <div className="space-y-3 md:space-y-4">
              <h4 className="text-lg md:text-xl font-semibold">Current Work</h4>
              <p className="text-sm md:text-base text-muted-foreground">
                At Indiana State University, I'm leading the development of a voice AI chatbot that assists students with university policies 
                and deadlines. The system leverages LLMs, RAG, and advanced retrieval systems for accurate and contextual responses. 
                Additionally, I'm working on an AI-powered grading automation system that has reduced grading time by 80% while maintaining accuracy.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
              <Button className="w-full sm:w-auto" asChild>
                <a
                  href="/vamsi_krishna.pdf"
                  download
                  className="inline-flex items-center gap-2 text-sm font-medium text-primary hover:text-primary/80 transition-colors"
                >
                  <Download size={16} />
                  Download Resume
                </a>
              </Button>
              <Button className="w-full sm:w-auto" variant="outline" asChild>
                <a 
                  href="https://github.com/vamsi876" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="gap-2"
                >
                  <ExternalLink size={16} />
                  View Projects
                </a>
              </Button>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="space-y-6"
          >
            <div className="glass-dark p-4 md:p-6 rounded-xl space-y-4">
              <h4 className="text-lg md:text-xl font-semibold">Education</h4>
              <div className="space-y-4">
                <div>
                  <h5 className="font-medium">Master of Science in Computer Science</h5>
                  <p className="text-xs md:text-sm text-muted-foreground">Indiana State University | GPA: 3.8/4.0</p>
                  <p className="text-xs md:text-sm text-muted-foreground">Aug 2023 - Present</p>
                </div>
                <div>
                  <h5 className="font-medium">Bachelor's in Electronics and Communication Engineering</h5>
                  <p className="text-xs md:text-sm text-muted-foreground">Vel Tech Rangarajan Dr.Sagunthala R&D Institute of Science and Technology</p>
                  <p className="text-xs md:text-sm text-muted-foreground">June 2018 - May 2022 | GPA: 9.01/10.0</p>
                </div>
              </div>
            </div>

            <div className="glass-dark p-4 md:p-6 rounded-xl space-y-4">
              <h4 className="text-lg md:text-xl font-semibold">Recent Achievements</h4>
              <div className="space-y-3">
                <div>
                  <h5 className="font-medium">AI Innovation</h5>
                  <p className="text-xs md:text-sm text-muted-foreground">Developed a voice AI chatbot with 80% reduction in grading time</p>
                </div>
                <div>
                  <h5 className="font-medium">Open Source Contribution</h5>
                  <p className="text-xs md:text-sm text-muted-foreground">Co-developed WebWeaver, a Python library for web automation</p>
                </div>
                <div>
                  <h5 className="font-medium">Research Publication</h5>
                  <p className="text-xs md:text-sm text-muted-foreground">Published paper on Smart Embedded Systems at ICSI Conference</p>
                </div>
                <div>
                  <h5 className="font-medium">Professional Certification</h5>
                  <p className="text-xs md:text-sm text-muted-foreground">Full Stack Developer with Cloud for Web and Mobile - Hero Vired</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About; 