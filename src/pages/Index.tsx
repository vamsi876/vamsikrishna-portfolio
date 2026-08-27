import React from 'react';
import Header from '../components/Header';
import Hero from '../components/Hero';
import Footer from '../components/Footer';
import PageTransition from '@/components/PageTransition';
import { useDocumentMeta } from '@/hooks/useDocumentMeta';

const Index: React.FC = () => {
  useDocumentMeta({
    title: 'Vamsi Krishna Kollipara — Full-Stack Engineer (React, TypeScript, Node.js, Claude, RAG)',
    description: 'Portfolio of Vamsi Krishna Kollipara — full-stack engineer building APIs other teams depend on, delegated authorization over sensitive data, and production LLM pipelines with guardrails. TypeScript, Python, GraphQL, Claude, RAG. Author of 3 PyPI packages.',
    path: '/',
  });
  return (
    <PageTransition>
      <div className="relative min-h-screen">
        <div className="relative z-10">
          <Header />
          <main id="main-content">
            <Hero />
          </main>
          <Footer />
        </div>
      </div>
    </PageTransition>
  );
};

export default Index;
