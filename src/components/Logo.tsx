import React from 'react';
import { Link } from 'react-router-dom';

const Logo: React.FC = () => {
  return (
    <Link to="/" className="flex items-center gap-2 font-bold text-xl">
      <div className="w-8 h-8 bg-primary/10 rounded-lg flex items-center justify-center">
        <span className="text-gradient text-2xl font-black">V</span>
      </div>
      <span className="hidden sm:inline">Vamsi Krishna Kollipara</span>
    </Link>
  );
};

export default Logo; 