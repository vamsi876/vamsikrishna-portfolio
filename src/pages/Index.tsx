import React from 'react';
import Header from '../components/Header';
import Hero from '../components/Hero';
import Footer from '../components/Footer';
import ChatBot from '../components/ChatBot';
import Background3D from '@/components/Background3D';
import PageTransition from '@/components/PageTransition';

const Index: React.FC = () => {
  return (
    <PageTransition>
      <div className="relative min-h-screen">
        <Background3D />
        <div className="relative z-10">
          <Header />
          <main>
            <Hero />
          </main>
          <Footer />
          <ChatBot />
        </div>
      </div>
    </PageTransition>
  );
};

export default Index;
