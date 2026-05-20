import React from 'react';
import Header from '@/components/Header';
import Experience from '@/components/Experience';
import Footer from '@/components/Footer';
import PageTransition from '@/components/PageTransition';
import { useDocumentMeta } from '@/hooks/useDocumentMeta';

const ExperiencePage: React.FC = () => {
  useDocumentMeta({
    title: 'Experience — Vamsi Krishna Kollipara, AI Full-Stack Engineer',
    description: 'Professional experience of Vamsi Krishna Kollipara — AI Full-Stack Engineer at AIDM Software, Graduate Assistant at Indiana State University, Full-Stack Developer at Cognizant.',
    path: '/experience',
    breadcrumbs: [
      { name: 'Home', path: '/' },
      { name: 'Experience', path: '/experience' },
    ],
  });
  return (
    <PageTransition>
      <div className="relative min-h-screen">
        <div className="relative z-10">
          <Header />
          <main id="main-content" className="pt-24">
            <Experience />
          </main>
          <Footer />
        </div>
      </div>
    </PageTransition>
  );
};

export default ExperiencePage;
