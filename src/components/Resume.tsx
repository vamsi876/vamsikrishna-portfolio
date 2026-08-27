import React from 'react';
import { Download, Mail, Phone, GraduationCap, Briefcase, Award, ExternalLink, Globe, Code2 } from 'lucide-react';
import { FaLinkedin, FaGithub } from 'react-icons/fa';
import { Button } from '@/components/ui/button';
import { profile, summary, skillGroups, jobs, education, openSource } from '@/data/resume';

const Resume: React.FC = () => {
  const skills = skillGroups;

  return (
    <section className="py-20 px-6 md:px-12 lg:px-24" id="resume">
      <div className="container mx-auto max-w-5xl">
        <div className="text-center mb-16">
          <span className="section-number">06 — RESUME</span>
          <h2 className="text-3xl md:text-4xl font-bold mb-4 mt-2">Resume</h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            A comprehensive overview of my education, experience, and skills.
          </p>
        </div>

        <div className="bg-card border border-[hsl(var(--card-border))] p-8 rounded-2xl">
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold mb-2 text-foreground">{profile.name.toUpperCase()}</h1>
            <div className="flex flex-wrap justify-center gap-3 text-sm text-muted-foreground">
              <a href="mailto:kolliparavamsikrishna80@gmail.com" className="hover:text-primary transition-colors flex items-center">
                <Mail className="mr-1" size={14} />
                kolliparavamsikrishna80@gmail.com
              </a>
              <span>|</span>
              <a href="tel:+18122238818" className="hover:text-primary transition-colors flex items-center">
                <Phone className="mr-1" size={14} />
                812-223-8818
              </a>
              <span>|</span>
              <a 
                href="https://www.linkedin.com/in/vamsikollipara/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-primary transition-colors flex items-center"
              >
                <FaLinkedin size={14} className="mr-1" />
                LinkedIn
              </a>
              <span>|</span>
              <a 
                href="https://github.com/vamsi876"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-primary transition-colors flex items-center"
              >
                <FaGithub size={14} className="mr-1" />
                GitHub
              </a>
              <span>|</span>
              <a 
                href="https://vamsikrishnakollipara.vercel.app"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-primary transition-colors flex items-center"
              >
                <Globe size={14} className="mr-1" />
                Portfolio
              </a>
            </div>
          </div>

          {/* Summary */}
          <div className="mb-12">
            <h2 className="text-2xl font-bold mb-6 text-foreground">Summary</h2>
            <div className="bg-secondary/50 border border-[hsl(var(--card-border))] p-4 rounded-lg">
              <p className="text-sm text-muted-foreground">{summary}</p>
            </div>
          </div>

          {/* Skills */}
          <div className="mb-12">
            <h2 className="text-2xl font-bold mb-6 text-foreground flex items-center">
              <Award className="mr-2" size={24} />
              Skills
            </h2>
            <div className="bg-secondary/50 border border-[hsl(var(--card-border))] p-4 rounded-lg space-y-3">
              {skills.map((group) => (
                <div key={group.title}>
                  <span className="font-semibold">{group.title}:</span>{' '}
                  <span className="text-muted-foreground">{group.skills.join(', ')}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Experience */}
          <div className="mb-12">
            <h2 className="text-2xl font-bold mb-6 text-foreground flex items-center">
              <Briefcase className="mr-2" size={24} />
              Experience
            </h2>
            <div className="space-y-8">
              {jobs.map((exp, index) => (
                <div key={index} className="bg-secondary/50 border border-[hsl(var(--card-border))] p-4 rounded-lg">
                  <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-1 mb-3">
                    <div>
                      <h3 className="text-lg font-semibold">{exp.title}, {exp.company}</h3>
                      <p className="text-sm text-muted-foreground">{exp.location}</p>
                    </div>
                    <span className="text-sm text-muted-foreground whitespace-nowrap">{exp.startDate} – {exp.endDate}</span>
                  </div>
                  {exp.context && <p className="text-sm text-muted-foreground mb-3">{exp.context}</p>}
                  <ul className="space-y-2 list-disc list-outside ml-4">
                    {exp.description.map((achievement, i) => (
                      <li key={i} className="text-sm text-muted-foreground">
                        {achievement}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* Education */}
          <div className="mb-12">
            <h2 className="text-2xl font-bold mb-6 text-foreground flex items-center">
              <GraduationCap className="mr-2" size={24} />
              Education
            </h2>
            <div className="space-y-6">
              {education.map((edu, index) => (
                <div key={index} className="bg-secondary/50 border border-[hsl(var(--card-border))] p-4 rounded-lg">
                  <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-1">
                    <div>
                      <h3 className="text-lg font-semibold">{edu.degree}</h3>
                      <p className="text-muted-foreground">{edu.school}, {edu.location}</p>
                    </div>
                    <div className="text-right">
                      <p className="text-sm text-muted-foreground">{edu.date}</p>
                      <p className="text-sm font-medium">GPA: {edu.gpa}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Projects & Open Source */}
          <div>
            <h2 className="text-2xl font-bold mb-6 text-foreground flex items-center">
              <Code2 className="mr-2" size={24} />
              Projects & Open-Source
            </h2>
            <div className="space-y-6">
              {openSource.map((contribution, index) => (
                <div key={index} className="bg-secondary/50 border border-[hsl(var(--card-border))] p-4 rounded-lg">
                  <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-1 mb-2">
                    <h3 className="text-lg font-semibold">{contribution.project}</h3>
                    <span className="text-sm text-muted-foreground">{contribution.date}</span>
                  </div>
                  <p className="text-sm mb-2">{contribution.description}</p>
                  <p className="text-sm text-muted-foreground mb-2">Tech: {contribution.tech}</p>
                  {contribution.link && (
                    <a 
                      href={contribution.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm text-primary hover:text-primary/80 flex items-center gap-1"
                    >
                      <ExternalLink size={14} />
                      View on PyPI
                    </a>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Download Button */}
        <div className="text-center mt-8">
          <Button size="lg" variant="outline" className="gap-2 border-primary/30 text-primary hover:border-primary hover:bg-primary/10" asChild>
            <a 
              href="/vamsi_krishna.pdf"
              download
              className="inline-flex items-center gap-2 text-sm font-medium text-primary hover:text-primary/80 transition-colors"
            >
              <Download size={18} />
              Download PDF
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Resume; 