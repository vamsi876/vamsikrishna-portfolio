import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ChatBot from '@/components/ChatBot';
import About from '@/components/About';

const AboutPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <About />
      </main>
      <Footer />
      <ChatBot />
    </div>
  );
};

export default AboutPage;
