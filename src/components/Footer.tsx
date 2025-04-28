import React from 'react';
import { Brain } from 'lucide-react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="py-8 px-6 md:px-12" style={{ background: 'transparent' }}>
      <div className="w-full">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="mb-4 md:mb-0">
            <p className="text-sm text-muted-foreground">
              © {currentYear} Vamsi Krishna Kollipara. All rights reserved.
            </p>
          </div>
          
          <div className="flex items-center">
            <p className="text-sm text-muted-foreground flex items-center">
              Designed & Built with <Brain className="h-3 w-3 mx-1 text-blue-500" /> by Vamsi Krishna
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
