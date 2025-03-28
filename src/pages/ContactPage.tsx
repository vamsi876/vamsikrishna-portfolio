
import React from 'react';
import Header from '@/components/Header';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import ChatBot from '@/components/ChatBot';

const ContactPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-24">
        <Contact />
      </main>
      <Footer />
      <ChatBot />
    </div>
  );
};

export default ContactPage;
