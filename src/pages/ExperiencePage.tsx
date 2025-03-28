
import React from 'react';
import Header from '@/components/Header';
import Experience from '@/components/Experience';
import Footer from '@/components/Footer';
import ChatBot from '@/components/ChatBot';

const ExperiencePage: React.FC = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-24">
        <Experience />
      </main>
      <Footer />
      <ChatBot />
    </div>
  );
};

export default ExperiencePage;
