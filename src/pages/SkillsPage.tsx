import React from 'react';
import Header from '@/components/Header';
import Skills from '@/components/Skills';
import Footer from '@/components/Footer';
import PageTransition from '@/components/PageTransition';
import { useDocumentMeta } from '@/hooks/useDocumentMeta';

const SkillsPage: React.FC = () => {
  useDocumentMeta({
    title: 'Skills — Vamsi Krishna Kollipara | React, TypeScript, Node.js, Claude, LangChain, RAG',
    description: 'Technical skills of Vamsi Krishna Kollipara: React, TypeScript, Node.js, Python, PostgreSQL, Anthropic Claude, LangChain, Pinecone vector search, OAuth 2.0, Azure AD SSO, AWS, Vercel.',
    path: '/skills',
    breadcrumbs: [
      { name: 'Home', path: '/' },
      { name: 'Skills', path: '/skills' },
    ],
  });
  return (
    <PageTransition>
      <div className="relative min-h-screen">
        <div className="relative z-10">
          <Header />
          <main id="main-content" className="pt-24">
            <Skills />
          </main>
          <Footer />
        </div>
      </div>
    </PageTransition>
  );
};

export default SkillsPage;
