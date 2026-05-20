import React from 'react';
import Header from '@/components/Header';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import PageTransition from '@/components/PageTransition';
import { useDocumentMeta } from '@/hooks/useDocumentMeta';

const ContactPage: React.FC = () => {
  useDocumentMeta({
    title: 'Contact Vamsi Krishna Kollipara — AI Full-Stack Engineer',
    description: 'Get in touch with Vamsi Krishna Kollipara for AI/full-stack engineering opportunities, freelance work, or collaboration on React, TypeScript, Node.js, and Claude/RAG projects.',
    path: '/contact',
    breadcrumbs: [
      { name: 'Home', path: '/' },
      { name: 'Contact', path: '/contact' },
    ],
  });
  return (
    <PageTransition>
      <div className="relative min-h-screen">
        <div className="relative z-10">
          <Header />
          <main id="main-content" className="pt-24">
            <Contact />
          </main>
          <Footer />
        </div>
      </div>
    </PageTransition>
  );
};

export default ContactPage;
