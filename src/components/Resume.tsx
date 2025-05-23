import React, { useState } from 'react';
import { Download, Mail, Phone, MapPin, GraduationCap, Briefcase, Award, ExternalLink, Linkedin, Github } from 'lucide-react';
import { Button } from '@/components/ui/button';
import PDFViewer from './PDFViewer';

const Resume: React.FC = () => {
  const [showPDF, setShowPDF] = useState(false);
  const pdfUrl = '/vamsi_krishna.pdf';

  const summary = {
    title: "AI/ML Engineer",
    description: "AI/ML Engineer with experience building scalable automation systems in voice AI, biomedical-inspired AI, and retrieval-augmented generation (RAG). Proficient in developing end-to-end AI solutions using Python, PyTorch, TensorFlow, LangChain, and cloud-based infrastructure. Skilled in deploying models across multi-modal interfaces (voice, web, chat) and integrating with real-world data sources. Passionate about applying AI to solve complex healthcare and life sciences challenges through interdisciplinary collaboration and research."
  };

  const education = [
    {
      degree: "Master of Science in Computer Science",
      school: "Indiana State University",
      location: "Terre Haute, IN",
      date: "Aug 2023 - Present",
      gpa: "3.75/4.0",
      coursework: "Cloud Computing, Artificial Intelligence, Data Visualization, Research (Machine Learning), Database Management Systems, Web Programming, Operating Systems"
    },
    {
      degree: "Bachelor's in Electronics and Communication Engineering",
      school: "Vel Tech",
      location: "Chennai, India",
      date: "July 2018 - May 2022",
      gpa: "9.01/10.0",
      relevantCoursework: "Deep Learning, Machine Learning, Major Project (Raspberry pi, ML), Minor Project (Esp32, LoRa), Python, C Programming, Java, Technical Communication, Design Thinking"
    }
  ];

  const experience = [
    {
      title: "Graduate Research & Teaching Assistant",
      company: "Indiana State University",
      location: "Terre Haute, IN",
      date: "Aug 2023 - Present",
      achievements: [
        "Developed a university-wide RAG-based AI assistant for answering queries about policies, deadlines, and curriculum across 10,000+ scraped websites",
        "Engineered a voice+web AI chatbot using LangChain and LlamaParser for dynamic student support and automated document retrieval",
        "Created a grading automation system using Azure Text Analytics, Power Automate, and Excel—reducing grading time by 80%",
        "Built a plagiarism detection tool using Azure Document Intelligence to validate originality of student submissions",
        "Implemented dynamic attendance tracking using Microsoft Forms, Power BI, and cloud pipelines",
        "Trained ML models using PyTorch, TensorFlow, and Scikit-learn for academic simulations (e.g., document classification, time series)",
        "Led tutorials and advised students in AI, database management, and operating systems courses"
      ]
    },
    {
      title: "Data Analyst",
      company: "Cognizant Technology Solutions",
      location: "Hyderabad, India",
      date: "Jul 2022 - Jul 2023",
      achievements: [
        "Optimized data processing pipelines for 1M+ records, improving system efficiency by 25%",
        "Integrated AI-driven data retrieval mechanisms for operational analytics",
        "Automated data transformation workflows, cutting manual effort by 40%",
        "Designed PostgreSQL and Redis-backed customer data architectures to ensure high availability"
      ]
    },
    {
      title: "Data Analyst Intern",
      company: "Cognizant Technology Solutions",
      location: "Hyderabad, India",
      date: "Jan 2022 - May 2022",
      achievements: [
        "Developed ETL processes using Informatica PowerCenter, ensuring high-accuracy data processing",
        "Created interactive storage analytics dashboards in Power BI for real-time system monitoring",
        "Worked with distributed storage environments, improving data integration efficiency"
      ]
    }
  ];

  const openSourceContributions = [
    {
      project: "WebWeaver",
      date: "Sept 2024",
      description: "Co-developed WebWeaver, a Python library for browser automation and web scraping, published on PyPI",
      link: "https://github.com/RedBlackWeb/WebWeaver"
    }
  ];

  const publications = [
    {
      title: "A New Paradigm of Smart Embedded System for Elder and Physically Challenged Person Using Raspberry Pi",
      conference: "12th International Conference on Science and Innovative Engineering",
      location: "Chennai, India",
      date: "Jul 2022",
      isbn: "978-93-81288-22-1"
    }
  ];

  const certifications = [
    {
      title: "Certified Full Stack Developer with Cloud for Web and Mobile",
      issuer: "Hero Vired",
      date: "Nov 2023",
      link: "https://drive.google.com/file/d/1XHJQeDRELVtPedEsi7hsDT3Wka8rxrnL/view"
    }
  ];

  const skills = {
    languages_frameworks: [
      "Python",
      "TypeScript",
      "Node.js",
      "JavaScript",
      "SQL"
    ],
    ai_ml_data_science: [
      "PyTorch",
      "TensorFlow",
      "Scikit-learn",
      "Transformers",
      "Biomedical Text Mining",
      "NLP",
      "RAG",
      "LangChain",
      "LangGraph",
      "LlamaParser"
    ],
    biomedical_ai: [
      "Azure ML",
      "Document Intelligence",
      "SciSpacy (familiar)",
      "BioBERT (exploring)"
    ],
    cloud_data_systems: [
      "AWS",
      "Docker",
      "PostgreSQL",
      "Redis",
      "Pinecone",
      "CI/CD",
      "Power BI"
    ],
    automation_orchestration: [
      "Temporal",
      "Power Automate",
      "Model Context Protocol (MCP)"
    ],
    web_frontend: [
      "React.js",
      "Next.js",
      "Express.js"
    ],
    search_retrieval: [
      "Multi-vector search",
      "Hybrid lexical-semantic search"
    ],
    development_tools: [
      "Git",
      "VS Code",
      "Cursor IDE",
      "WindSurf"
    ]
  };

  return (
    <section className="py-20 px-6 md:px-12 lg:px-24" id="resume">
      <div className="container mx-auto max-w-5xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Resume</h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            A comprehensive overview of my education, experience, and skills.
          </p>
        </div>

        <div className="glass p-8 rounded-2xl">
          {/* Header */}
          <div className="text-center mb-12">
            <div className="inline-block glass-dark px-4 py-2 rounded-full text-sm font-medium mb-4">
              {summary.title}
            </div>
            <h1 className="text-4xl font-bold mb-4 text-gradient">Vamsi Krishna Kollipara</h1>
            <div className="flex flex-wrap justify-center gap-4 text-sm text-muted-foreground">
              <div className="flex items-center">
                <Mail className="mr-2" size={16} />
                <a href="mailto:kolliparavamsikrishna80@gmail.com" className="hover:text-primary transition-colors">
                  kolliparavamsikrishna80@gmail.com
                </a>
              </div>
              <div className="flex items-center">
                <Phone className="mr-2" size={16} />
                <a href="tel:+18122238818" className="hover:text-primary transition-colors">
                  +1 (812) 223-8818
                </a>
              </div>
              <div className="flex items-center">
                <MapPin className="mr-2" size={16} />
                <span>Greater Seattle Area (Ready to Relocate)</span>
              </div>
              <div className="flex items-center gap-4">
                <a 
                  href="https://www.linkedin.com/in/vamsikollipara/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-primary transition-colors flex items-center"
                >
                  <Linkedin size={16} className="mr-1" />
                  LinkedIn
                </a>
                <a 
                  href="https://github.com/vamsi876"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-primary transition-colors flex items-center"
                >
                  <Github size={16} className="mr-1" />
                  GitHub
                </a>
              </div>
            </div>
          </div>

          {/* Summary */}
          <div className="mb-12">
            <h2 className="text-2xl font-bold mb-6">Summary</h2>
            <div className="glass-dark p-4 rounded-lg">
              <p className="text-sm">{summary.description}</p>
            </div>
          </div>

          {/* Education */}
          <div className="mb-12">
            <h2 className="text-2xl font-bold mb-6 flex items-center">
              <GraduationCap className="mr-2" size={24} />
              Education
            </h2>
            <div className="space-y-8">
              {education.map((edu, index) => (
                <div key={index} className="relative pl-6 border-l-2 border-primary/20">
                  <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-primary/20"></div>
                  <div className="mb-2">
                    <h3 className="text-xl font-semibold">{edu.degree}</h3>
                    <p className="text-muted-foreground">{edu.school} | {edu.location}</p>
                    <p className="text-sm text-muted-foreground">{edu.date}</p>
                  </div>
                  <div className="glass-dark p-4 rounded-lg">
                    <p className="text-sm text-muted-foreground mb-2">GPA: {edu.gpa}</p>
                    <p className="text-sm">Relevant Coursework: {edu.coursework}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Experience */}
          <div className="mb-12">
            <h2 className="text-2xl font-bold mb-6 flex items-center">
              <Briefcase className="mr-2" size={24} />
              Experience
            </h2>
            <div className="space-y-8">
              {experience.map((exp, index) => (
                <div key={index} className="relative pl-6 border-l-2 border-primary/20">
                  <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-primary/20"></div>
                  <div className="mb-2">
                    <h3 className="text-xl font-semibold">{exp.title}</h3>
                    <p className="text-muted-foreground">{exp.company} | {exp.location}</p>
                    <p className="text-sm text-muted-foreground">{exp.date}</p>
                  </div>
                  <div className="glass-dark p-4 rounded-lg">
                    <ul className="space-y-2">
                      {exp.achievements.map((achievement, i) => (
                        <li key={i} className="flex items-start">
                          <ExternalLink size={14} className="mt-1 mr-2 text-primary flex-shrink-0" />
                          <span className="text-sm">{achievement}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Open Source Contributions */}
          <div className="mb-12">
            <h2 className="text-2xl font-bold mb-6 flex items-center">
              <Award className="mr-2" size={24} />
              Open Source Contributions
            </h2>
            <div className="space-y-8">
              {openSourceContributions.map((contribution, index) => (
                <div key={index} className="relative pl-6 border-l-2 border-primary/20">
                  <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-primary/20"></div>
                  <div className="glass-dark p-4 rounded-lg">
                    <div className="flex justify-between items-start mb-2">
                      <h3 className="text-xl font-semibold">{contribution.project}</h3>
                      <span className="text-sm text-muted-foreground">{contribution.date}</span>
                    </div>
                    <p className="text-sm mb-2">{contribution.description}</p>
                    {contribution.link && (
                      <a 
                        href={contribution.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-sm text-primary hover:text-primary/80 flex items-center gap-1"
                      >
                        <ExternalLink size={14} />
                        View Project
                      </a>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Publications */}
          <div className="mb-12">
            <h2 className="text-2xl font-bold mb-6 flex items-center">
              <Award className="mr-2" size={24} />
              Publications
            </h2>
            <div className="space-y-8">
              {publications.map((publication, index) => (
                <div key={index} className="relative pl-6 border-l-2 border-primary/20">
                  <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-primary/20"></div>
                  <div className="glass-dark p-4 rounded-lg">
                    <div className="flex justify-between items-start mb-2">
                      <h3 className="text-xl font-semibold">{publication.title}</h3>
                      <span className="text-sm text-muted-foreground">{publication.date}</span>
                    </div>
                    <p className="text-sm text-muted-foreground mb-1">{publication.conference}</p>
                    <p className="text-sm text-muted-foreground mb-2">{publication.location}</p>
                    <p className="text-sm text-muted-foreground">ISBN: {publication.isbn}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Certifications */}
          <div className="mb-12">
            <h2 className="text-2xl font-bold mb-6 flex items-center">
              <Award className="mr-2" size={24} />
              Certifications
            </h2>
            <div className="space-y-8">
              {certifications.map((cert, index) => (
                <div key={index} className="relative pl-6 border-l-2 border-primary/20">
                  <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-primary/20"></div>
                  <div className="glass-dark p-4 rounded-lg">
                    <div className="flex justify-between items-start mb-2">
                      <h3 className="text-xl font-semibold">{cert.title}</h3>
                      <span className="text-sm text-muted-foreground">{cert.date}</span>
                    </div>
                    <p className="text-sm text-muted-foreground mb-2">{cert.issuer}</p>
                    {cert.link && (
                      <a 
                        href={cert.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-sm text-primary hover:text-primary/80 flex items-center gap-1"
                      >
                        <ExternalLink size={14} />
                        View Certificate
                      </a>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Skills */}
          <div>
            <h2 className="text-2xl font-bold mb-6 flex items-center">
              <Award className="mr-2" size={24} />
              Skills
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {Object.entries(skills).map(([category, items]) => (
                <div key={category} className="glass-dark p-4 rounded-lg">
                  <h3 className="font-semibold mb-3 capitalize">{category.replace('_', ' ')}</h3>
                  <div className="flex flex-wrap gap-2">
                    {items.map((skill, index) => (
                      <span
                        key={index}
                        className="text-sm bg-primary/10 text-primary px-3 py-1 rounded-full"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Download Button */}
        <div className="text-center mt-8">
          <Button size="lg" variant="outline" className="gap-2" asChild>
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