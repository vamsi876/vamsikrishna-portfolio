
import React from 'react';
import Header from '@/components/Header';
import Skills from '@/components/Skills';
import Footer from '@/components/Footer';
import ChatBot from '@/components/ChatBot';

const SkillsPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-24">
        <Skills />
      </main>
      <Footer />
      <ChatBot />
    </div>
  );
};

export default SkillsPage;
