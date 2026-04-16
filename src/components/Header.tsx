import React, { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { cn } from '@/lib/utils';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import Logo from './Logo';
import { useTextScramble } from '@/hooks/useTextScramble';

const NavLink: React.FC<{ name: string; href: string; isActive: boolean; onClick?: () => void }> = ({
  name,
  href,
  isActive,
  onClick,
}) => {
  const { text, scramble, reset } = useTextScramble(name);

  return (
    <Link
      to={href}
      className={cn(
        'text-sm font-medium transition-colors duration-200 whitespace-nowrap',
        isActive ? 'text-primary' : 'text-muted-foreground hover:text-foreground'
      )}
      onMouseEnter={scramble}
      onMouseLeave={reset}
      onClick={onClick}
    >
      {text}
    </Link>
  );
};

const Header: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setIsMenuOpen(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isMenuOpen]);

  const navItems = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { name: 'Skills', href: '/skills' },
    { name: 'Experience', href: '/experience' },
    { name: 'Projects', href: '/projects' },
    { name: 'Contact', href: '/contact' },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 flex justify-center pt-4 px-4">
      <nav
        ref={menuRef}
        className={cn(
          'glass-dark rounded-full px-6 py-2.5 flex items-center gap-6 transition-shadow duration-300',
          scrolled && 'shadow-lg shadow-black/20'
        )}
      >
        <Logo />

        <div className="hidden md:flex items-center gap-6">
          {navItems.map((item) => (
            <NavLink
              key={item.name}
              name={item.name}
              href={item.href}
              isActive={location.pathname === item.href}
            />
          ))}
        </div>

        <Link
          to="/resume"
          className={cn(
            'hidden md:inline-flex text-sm font-medium px-4 py-1.5 rounded-full border transition-colors duration-200',
            location.pathname === '/resume'
              ? 'border-primary text-primary'
              : 'border-primary/30 text-primary hover:border-primary hover:bg-primary/10'
          )}
        >
          Resume
        </Link>

        <button
          className="md:hidden p-1.5 text-muted-foreground hover:text-foreground transition-colors"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
        >
          {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </nav>

      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="md:hidden fixed inset-0 top-0 bg-background/95 backdrop-blur-xl z-40 flex flex-col items-center justify-center"
          >
            <button
              className="absolute top-6 right-6 p-2 text-muted-foreground hover:text-foreground transition-colors"
              onClick={() => setIsMenuOpen(false)}
              aria-label="Close menu"
            >
              <X size={24} />
            </button>
            <div className="flex flex-col items-center gap-8">
              {navItems.map((item, index) => (
                <motion.div
                  key={item.name}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.05, duration: 0.3 }}
                >
                  <Link
                    to={item.href}
                    className={cn(
                      'text-2xl font-semibold transition-colors',
                      location.pathname === item.href ? 'text-primary' : 'text-foreground'
                    )}
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item.name}
                  </Link>
                </motion.div>
              ))}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: navItems.length * 0.05, duration: 0.3 }}
              >
                <Link
                  to="/resume"
                  className="text-2xl font-semibold text-primary"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Resume
                </Link>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;
