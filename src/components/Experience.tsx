import React, { useState } from 'react';
import { cn } from '@/lib/utils';
import { Briefcase, Calendar, ChevronRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

import { jobs } from '@/data/resume';

const Experience: React.FC = () => {
  const [activeJob, setActiveJob] = useState<string>('job1');

  return (
    <section className="py-20 px-6 md:px-12 lg:px-24" id="experience">
      <div className="container mx-auto max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-12"
        >
          <span className="section-number">03 — EXPERIENCE</span>
          <h1 className="text-3xl md:text-4xl font-bold mt-2 text-foreground">Experience — Full-Stack Engineer</h1>
          <p className="text-muted-foreground mt-2 max-w-xl">
            From utility billing APIs over multi-million-row data to RAG assistants and production LLM pipelines in HIPAA-regulated environments.
          </p>
        </motion.div>

        <div className="flex flex-col md:flex-row gap-8">
          {/* Company tabs */}
          <div className="md:w-1/3">
            <div className="flex flex-row md:flex-col overflow-x-auto md:overflow-visible gap-1">
              {jobs.map((job, index) => (
                <motion.button
                  key={job.id}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, duration: 0.4 }}
                  onClick={() => setActiveJob(job.id)}
                  className={cn(
                    'px-4 py-3 text-left border-l-2 transition-all whitespace-nowrap md:whitespace-normal text-sm',
                    activeJob === job.id
                      ? 'border-primary text-foreground bg-primary/5'
                      : 'border-[hsl(var(--card-border))] text-muted-foreground hover:text-foreground hover:bg-card'
                  )}
                >
                  <div className="flex items-center gap-2">
                    <div className={cn(
                      'w-2 h-2 rounded-full flex-shrink-0',
                      job.active && activeJob === job.id ? 'bg-primary animate-pulse-green' : activeJob === job.id ? 'bg-primary' : 'bg-[hsl(var(--card-border))]'
                    )} />
                    <div>
                      <div>{job.company}</div>
                      <div className="text-xs text-[hsl(var(--text-muted))]">{job.startDate} – {job.endDate}</div>
                    </div>
                  </div>
                </motion.button>
              ))}
            </div>
          </div>

          {/* Job detail */}
          <div className="md:w-2/3">
            <div className="bg-card border border-[hsl(var(--card-border))] rounded-xl p-6">
              <AnimatePresence mode="wait">
                {jobs
                  .filter((job) => job.id === activeJob)
                  .map((job) => (
                    <motion.div
                      key={job.id}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      transition={{ duration: 0.3 }}
                    >
                      <div className="mb-4">
                        <h3 className="text-xl font-semibold text-foreground">
                          {job.title}{' '}
                          <span className="text-primary">@ {job.company}</span>
                        </h3>

                        <div className="flex items-center text-sm text-muted-foreground mt-1 gap-3">
                          <span className="flex items-center gap-1">
                            <Calendar size={14} />
                            {job.startDate} – {job.endDate}
                          </span>
                          <span className="flex items-center gap-1">
                            <Briefcase size={14} />
                            {job.location}
                          </span>
                        </div>

                        {job.context && (
                          <p className="text-sm text-muted-foreground mt-3">{job.context}</p>
                        )}
                      </div>

                      <ul className="space-y-3">
                        {job.description.map((item, index) => (
                          <motion.li
                            key={index}
                            initial={{ opacity: 0, x: 10 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: index * 0.05, duration: 0.3 }}
                            className="flex text-sm text-muted-foreground"
                          >
                            <ChevronRight size={16} className="mt-0.5 mr-2 text-primary flex-shrink-0" />
                            <span>{item}</span>
                          </motion.li>
                        ))}
                      </ul>
                    </motion.div>
                  ))}
              </AnimatePresence>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
