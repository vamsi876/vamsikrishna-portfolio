import React from 'react';
import Header from '@/components/Header';
import Experience from '@/components/Experience';
import Footer from '@/components/Footer';
import ChatBot from '@/components/ChatBot';
import Background3D from '@/components/Background3D';
import PageTransition from '@/components/PageTransition';

const ExperiencePage: React.FC = () => {
  return (
    <PageTransition>
      <div className="relative min-h-screen">
        <Background3D />
        <div className="relative z-10">
          <Header />
          <main className="pt-24">
            <Experience />
          </main>
          <Footer />
          <ChatBot />
        </div>
      </div>
    </PageTransition>
  );
};

export default ExperiencePage;
