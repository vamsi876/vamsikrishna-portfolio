import React from 'react';
import Header from '@/components/Header';
import Resume from '@/components/Resume';
import Footer from '@/components/Footer';
import ChatBot from '@/components/ChatBot';

const ResumePage: React.FC = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-24">
        <Resume />
      </main>
      <Footer />
      <ChatBot />
    </div>
  );
};

export default ResumePage; 