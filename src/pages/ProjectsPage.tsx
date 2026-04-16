import React from 'react';
import Header from '@/components/Header';
import Projects from '@/components/Projects';
import Footer from '@/components/Footer';
import ChatBot from '@/components/ChatBot';
import Background3D from '@/components/Background3D';
import PageTransition from '@/components/PageTransition';

const ProjectsPage: React.FC = () => {
  return (
    <PageTransition>
      <div className="relative min-h-screen">
        <Background3D />
        <div className="relative z-10">
          <Header />
          <main className="pt-24">
            <Projects />
          </main>
          <Footer />
          <ChatBot />
        </div>
      </div>
    </PageTransition>
  );
};

export default ProjectsPage;
