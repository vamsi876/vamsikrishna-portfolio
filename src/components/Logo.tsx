import React from 'react';
import { Link } from 'react-router-dom';

const Logo: React.FC = () => {
  return (
    <Link to="/" className="font-bold text-xl">
      Vamsi Krishna Kollipara
    </Link>
  );
};

export default Logo; 