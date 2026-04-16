import React from 'react';
import Header from '@/components/Header';
import ChatBot from '@/components/ChatBot';
import About from '@/components/About';
import Background3D from '@/components/Background3D';
import Footer from '@/components/Footer';
import PageTransition from '@/components/PageTransition';

const AboutPage: React.FC = () => {
  return (
    <PageTransition>
      <div className="relative min-h-screen">
        <Background3D />
        <div className="relative z-10">
          <Header />
          <main className="pt-24">
            <About />
          </main>
          <Footer />
          <ChatBot />
        </div>
      </div>
    </PageTransition>
  );
};

export default AboutPage;
