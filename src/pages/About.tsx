import React from 'react';
import Header from '@/components/Header';
import About from '@/components/About';
import Footer from '@/components/Footer';
import PageTransition from '@/components/PageTransition';
import { useDocumentMeta } from '@/hooks/useDocumentMeta';

const AboutPage: React.FC = () => {
  useDocumentMeta({
    title: 'About Vamsi Krishna Kollipara — Full-Stack Engineer',
    description: 'About Vamsi Krishna Kollipara: full-stack engineer, sole engineer on client-facing products in HIPAA-regulated environments. GraphQL over Postgres, delegated RBAC and Row Level Security, Claude + RAG pipelines. MS in Computer Science.',
    path: '/about',
    breadcrumbs: [
      { name: 'Home', path: '/' },
      { name: 'About', path: '/about' },
    ],
  });
  return (
    <PageTransition>
      <div className="relative min-h-screen">
        <div className="relative z-10">
          <Header />
          <main id="main-content" className="pt-24">
            <About />
          </main>
          <Footer />
        </div>
      </div>
    </PageTransition>
  );
};

export default AboutPage;
