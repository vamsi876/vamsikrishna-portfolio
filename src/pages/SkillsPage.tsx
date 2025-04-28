import React from 'react';
import Header from '@/components/Header';
import Skills from '@/components/Skills';
import Footer from '@/components/Footer';
import ChatBot from '@/components/ChatBot';
import Background3D from '@/components/Background3D';

const SkillsPage: React.FC = () => {
  return (
    <div className="relative min-h-screen overflow-hidden">
      <Background3D />
      <div className="relative z-10">
        <Header />
        <main className="pt-24">
          <Skills />
        </main>
        <Footer />
        <ChatBot />
      </div>
    </div>
  );
};

export default SkillsPage;
