import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Download, ExternalLink } from 'lucide-react';

const About: React.FC = () => {
  return (
    <section className="py-12 md:py-20 px-4 md:px-6 lg:px-24" id="about">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">About Me</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            AI/ML Engineer with experience building scalable automation systems in voice AI, biomedical-inspired AI, and retrieval-augmented generation (RAG). Passionate about applying AI to solve complex healthcare and life sciences challenges.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-start">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="space-y-6"
          >
            <div className="space-y-3 md:space-y-4">
              <h3 className="text-xl md:text-2xl font-bold">AI/ML Engineer</h3>
              <p className="text-sm md:text-base text-muted-foreground">
                Graduate Research & Teaching Assistant at Indiana State University, specializing in AI/ML development. 
                Proficient in developing end-to-end AI solutions using Python, PyTorch, TensorFlow, LangChain, and cloud-based
                infrastructure. Skilled in deploying models across multi-modal interfaces and integrating with real-world data
                sources.
              </p>
            </div>

            <div className="space-y-3 md:space-y-4">
              <h4 className="text-lg md:text-xl font-semibold">Key Focus Areas</h4>
              <ul className="list-disc list-inside space-y-2 text-sm md:text-base text-muted-foreground">
                <li>Building scalable AI automation systems with RAG and LLMs</li>
                <li>Developing biomedical-inspired AI solutions</li>
                <li>Implementing efficient data processing and model deployment</li>
                <li>Designing cloud-native AI applications</li>
              </ul>
            </div>

            <div className="space-y-3 md:space-y-4">
              <h4 className="text-lg md:text-xl font-semibold">Current Work</h4>
              <p className="text-sm md:text-base text-muted-foreground">
                At Indiana State University, I'm focused on developing AI solutions that bridge healthcare and technology. 
                This includes research in biomedical-inspired AI systems and implementing machine learning models for real-world applications. 
                I also lead technical sessions on AI/ML fundamentals, deep learning, and cloud infrastructure deployment.
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
                  <p className="text-xs md:text-sm text-muted-foreground">Indiana State University - Terre Haute, IN</p>
                  <p className="text-xs md:text-sm text-muted-foreground">Aug 2023 - Present</p>
                  <p className="text-xs md:text-sm text-muted-foreground">GPA: 3.75/4.0</p>
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
                  <h5 className="font-medium">Open Source Contribution</h5>
                  <a 
                    href="https://github.com/RedBlackWeb/WebWeaver"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs md:text-sm text-muted-foreground hover:text-primary transition-colors flex items-center gap-1"
                  >
                    Co-developed WebWeaver, a Python library for web automation
                    <ExternalLink size={12} />
                  </a>
                </div>
                <div>
                  <h5 className="font-medium">Paper Publication</h5>
                  <a 
                    href="https://www.icsiconference.org/proceedings"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs md:text-sm text-muted-foreground hover:text-primary transition-colors flex items-center gap-1"
                  >
                    Published paper on Smart Embedded Systems at ICSI Conference
                    <ExternalLink size={12} />
                  </a>
                </div>
                <div>
                  <h5 className="font-medium">Professional Certification</h5>
                  <a 
                    href="https://drive.google.com/file/d/1XHJQeDRELVtPedEsi7hsDT3Wka8rxrnL/view"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs md:text-sm text-muted-foreground hover:text-primary transition-colors flex items-center gap-1"
                  >
                    Full Stack Developer with Cloud for Web and Mobile - Hero Vired
                    <ExternalLink size={12} />
                  </a>
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