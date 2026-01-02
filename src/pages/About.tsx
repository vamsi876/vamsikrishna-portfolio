import React from 'react';
import Header from '@/components/Header';
import ChatBot from '@/components/ChatBot';
import About from '@/components/About';
import Background3D from '@/components/Background3D';

const AboutPage: React.FC = () => {
  return (
    <div className="relative min-h-screen overflow-hidden">
      <Background3D />
      <div className="relative z-10">
      <Header />
      <main>
        <About />
      </main>
      <ChatBot />
      </div>
    </div>
  );
};

export default AboutPage;
