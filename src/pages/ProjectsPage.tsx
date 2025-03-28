
import React from 'react';
import Header from '@/components/Header';
import Projects from '@/components/Projects';
import Footer from '@/components/Footer';
import ChatBot from '@/components/ChatBot';

const ProjectsPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-24">
        <Projects />
      </main>
      <Footer />
      <ChatBot />
    </div>
  );
};

export default ProjectsPage;
