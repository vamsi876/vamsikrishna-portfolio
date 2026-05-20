import React from 'react';
import Header from '@/components/Header';
import Projects from '@/components/Projects';
import Footer from '@/components/Footer';
import PageTransition from '@/components/PageTransition';
import { useDocumentMeta } from '@/hooks/useDocumentMeta';

const ProjectsPage: React.FC = () => {
  useDocumentMeta({
    title: 'Projects — Vamsi Krishna Kollipara | GitBar, GadgetBox, WebWeaver, RAG, Claude NLU',
    description: 'Open-source projects and production work by Vamsi Krishna Kollipara: 3 PyPI packages (GitBar, GadgetBox, WebWeaver), enterprise CRM with Claude-powered NLU, and a Pinecone RAG knowledge assistant.',
    path: '/projects',
    breadcrumbs: [
      { name: 'Home', path: '/' },
      { name: 'Projects', path: '/projects' },
    ],
  });
  return (
    <PageTransition>
      <div className="relative min-h-screen">
        <div className="relative z-10">
          <Header />
          <main id="main-content" className="pt-24">
            <Projects />
          </main>
          <Footer />
        </div>
      </div>
    </PageTransition>
  );
};

export default ProjectsPage;
