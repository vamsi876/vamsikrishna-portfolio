import React from 'react';
import Header from '@/components/Header';
import Resume from '@/components/Resume';
import ChatBot from '@/components/ChatBot';
import Background3D from '@/components/Background3D';

const ResumePage: React.FC = () => {
  return (
    <div className="relative min-h-screen overflow-hidden">
      <Background3D />
      <div className="relative z-10">
        <Header />
        <main className="pt-24">
          <Resume />
        </main>
        <ChatBot />
      </div>
    </div>
  );
};

export default ResumePage; 