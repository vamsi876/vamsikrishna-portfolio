import React from 'react';
import Header from '@/components/Header';
import About from '@/components/About';
import Footer from '@/components/Footer';
import PageTransition from '@/components/PageTransition';
import { useDocumentMeta } from '@/hooks/useDocumentMeta';

const AboutPage: React.FC = () => {
  useDocumentMeta({
    title: 'About Vamsi Krishna Kollipara — AI Full-Stack Engineer',
    description: 'About Vamsi Krishna Kollipara: 2+ years building React/TypeScript and Node.js production systems. Claude-powered NLU, Pinecone RAG, OAuth 2.0 + Azure AD SSO. MS in Computer Science.',
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
