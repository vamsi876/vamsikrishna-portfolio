import React from 'react';
import { Link } from 'react-router-dom';

const Logo: React.FC = () => {
  return (
    <Link to="/" className="font-bold text-lg text-foreground tracking-tight hover:text-primary transition-colors">
      VK
    </Link>
  );
};

export default Logo;
