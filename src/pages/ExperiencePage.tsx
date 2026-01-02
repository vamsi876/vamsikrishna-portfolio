import React from 'react';
import Header from '@/components/Header';
import Experience from '@/components/Experience';
import ChatBot from '@/components/ChatBot';
import Background3D from '@/components/Background3D';

const ExperiencePage: React.FC = () => {
  return (
    <div className="relative min-h-screen overflow-hidden">
      <Background3D />
      <div className="relative z-10">
      <Header />
      <main className="pt-24">
        <Experience />
      </main>
      <ChatBot />
      </div>
    </div>
  );
};

export default ExperiencePage;
