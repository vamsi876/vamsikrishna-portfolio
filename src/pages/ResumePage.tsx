import React from 'react';
import Header from '@/components/Header';
import Resume from '@/components/Resume';
import Footer from '@/components/Footer';
import PageTransition from '@/components/PageTransition';
import { useDocumentMeta } from '@/hooks/useDocumentMeta';

const ResumePage: React.FC = () => {
  useDocumentMeta({
    title: 'Resume — Vamsi Krishna Kollipara, AI Full-Stack Engineer',
    description: 'Resume of Vamsi Krishna Kollipara — AI Full-Stack Engineer experienced in React, TypeScript, Node.js, Anthropic Claude, LangChain, RAG, and enterprise auth. Download PDF or view inline.',
    path: '/resume',
    breadcrumbs: [
      { name: 'Home', path: '/' },
      { name: 'Resume', path: '/resume' },
    ],
  });
  return (
    <PageTransition>
      <div className="relative min-h-screen">
        <div className="relative z-10">
          <Header />
          <main id="main-content" className="pt-24">
            <Resume />
          </main>
          <Footer />
        </div>
      </div>
    </PageTransition>
  );
};

export default ResumePage;
