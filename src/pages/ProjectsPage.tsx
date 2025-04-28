import React from 'react';
import Header from '@/components/Header';
import Projects from '@/components/Projects';
import ChatBot from '@/components/ChatBot';
import Background3D from '@/components/Background3D';

const ProjectsPage: React.FC = () => {
  return (
    <div className="relative min-h-screen overflow-hidden">
      <Background3D />
      <div className="relative z-10">
        <Header />
        <main className="pt-24">
          <Projects />
        </main>
        <ChatBot />
      </div>
    </div>
  );
};

export default ProjectsPage;
