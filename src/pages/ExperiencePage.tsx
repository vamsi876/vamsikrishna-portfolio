import React from 'react';
import Header from '@/components/Header';
import Experience from '@/components/Experience';
import Footer from '@/components/Footer';
import PageTransition from '@/components/PageTransition';
import { useDocumentMeta } from '@/hooks/useDocumentMeta';

const ExperiencePage: React.FC = () => {
  useDocumentMeta({
    title: 'Experience — Vamsi Krishna Kollipara, Full-Stack Engineer',
    description: 'Professional experience of Vamsi Krishna Kollipara — Full-Stack Engineer (Forward-Deployed) at AI Data Management, Graduate Assistant at Indiana State University, Programmer Analyst at Cognizant (client: Duke Energy).',
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
