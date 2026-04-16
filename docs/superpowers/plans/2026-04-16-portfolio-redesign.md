# Portfolio Redesign: Dark Zinc + Green Signal — Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Redesign the entire Vamsi Krishna portfolio with a dark zinc theme, single green accent, bento dashboard homepage, floating pill nav, spotlight card interactions, and rich microinteractions across all pages.

**Architecture:** Update the existing React 18 + TypeScript + Vite + Tailwind + Framer Motion app in place. New custom hooks for microinteractions (spotlight, magnetic, typewriter, text scramble). Page transitions via AnimatePresence. All color changes driven by CSS custom properties in index.css + tailwind.config.ts.

**Tech Stack:** React 18, TypeScript, Tailwind CSS, Framer Motion, Three.js, Lucide React, react-icons, react-router-dom

---

## File Structure

### New Files
- `src/hooks/useSpotlight.ts` — cursor-tracking radial light effect for cards
- `src/hooks/useMagnetic.ts` — magnetic pull effect for buttons
- `src/hooks/useTypewriter.ts` — typewriter text animation hook
- `src/hooks/useTextScramble.ts` — text scramble effect on hover
- `src/components/PageTransition.tsx` — framer-motion page wrapper component
- `src/components/ScrollProgress.tsx` — top scroll progress bar component

### Modified Files
- `index.html` — dark meta theme-color, updated description
- `src/index.css` — dark color system CSS variables, utility classes
- `tailwind.config.ts` — updated colors mapped to CSS vars, new keyframes
- `src/App.tsx` — AnimatePresence page transitions, scroll-to-top
- `src/main.tsx` — no changes expected
- `src/components/Header.tsx` — floating pill nav redesign
- `src/components/Logo.tsx` — "VK" monogram
- `src/components/Hero.tsx` — full bento dashboard with hero + grid
- `src/components/Footer.tsx` — minimal dark footer
- `src/components/About.tsx` — dark themed with scroll animations
- `src/components/Skills.tsx` — bento grid with spotlight hover
- `src/components/Experience.tsx` — vertical timeline, scroll-triggered
- `src/components/Projects.tsx` — dark stacked cards
- `src/components/Contact.tsx` — dark split layout + form
- `src/components/Resume.tsx` — dark document style
- `src/components/ChatBot.tsx` — dark zinc + green themed
- `src/components/Background3D.tsx` — darker, subtler particles
- `src/pages/Index.tsx` — simplified wrapper (Hero now contains bento)
- `src/pages/About.tsx` — add PageTransition wrapper
- `src/pages/SkillsPage.tsx` — add PageTransition wrapper
- `src/pages/ExperiencePage.tsx` — add PageTransition wrapper
- `src/pages/ProjectsPage.tsx` — add PageTransition wrapper
- `src/pages/ContactPage.tsx` — add PageTransition wrapper
- `src/pages/ResumePage.tsx` — add PageTransition wrapper
- `src/pages/NotFound.tsx` — themed 404

---

## Task 1: Foundation — Color System, Tailwind Config, Global CSS

**Files:**
- Modify: `index.html`
- Modify: `src/index.css`
- Modify: `tailwind.config.ts`

- [ ] **Step 1: Update index.html**

Add dark theme-color meta tag and update descriptions:

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta name="theme-color" content="#0a0a0a" />
    <title>Vamsi Krishna Kollipara — Full-Stack Developer</title>
    <meta name="description" content="Full-stack developer with 2+ years shipping React/TypeScript frontends and Node.js backends. 3 published PyPI packages. Based in San Francisco." />
    <meta name="author" content="Vamsi Krishna Kollipara" />

    <meta property="og:title" content="Vamsi Krishna Kollipara — Full-Stack Developer" />
    <meta property="og:description" content="Full-stack developer with 2+ years shipping React/TypeScript frontends and Node.js backends. 3 published PyPI packages." />
    <meta property="og:type" content="website" />

    <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:title" content="Vamsi Krishna Kollipara — Full-Stack Developer" />
    <meta name="twitter:description" content="Full-stack developer with 2+ years shipping React/TypeScript frontends and Node.js backends. 3 published PyPI packages." />
  </head>

  <body>
    <div id="root"></div>
    <script type="module" src="/src/main.tsx"></script>
  </body>
</html>
```

- [ ] **Step 2: Rewrite src/index.css with dark color system**

Replace the entire file with the dark theme CSS variables and utility classes:

```css
@tailwind base;
@tailwind components;
@tailwind utilities;

@layer base {
  :root {
    --background: 0 0% 4%;
    --foreground: 0 0% 98%;

    --card: 0 0% 9.4%;
    --card-foreground: 0 0% 98%;

    --popover: 0 0% 7%;
    --popover-foreground: 0 0% 98%;

    --primary: 142 71% 45%;
    --primary-foreground: 0 0% 4%;

    --secondary: 0 0% 14.9%;
    --secondary-foreground: 0 0% 98%;

    --muted: 0 0% 14.9%;
    --muted-foreground: 0 0% 63.9%;

    --accent: 0 0% 14.9%;
    --accent-foreground: 0 0% 98%;

    --destructive: 0 84.2% 60.2%;
    --destructive-foreground: 0 0% 98%;

    --border: 0 0% 16.5%;
    --input: 0 0% 16.5%;
    --ring: 142 71% 45%;

    --radius: 0.75rem;

    --surface: 240 5% 7.5%;
    --card-border: 0 0% 16.5%;
    --border-subtle: 0 0% 11.8%;
    --text-primary: 0 0% 98%;
    --text-secondary: 0 0% 63.9%;
    --text-muted: 0 0% 32.2%;
    --text-dim: 0 0% 24.7%;
    --accent-green: 142 71% 45%;
    --accent-muted: 142 71% 45% / 0.15;
    --accent-border: 142 71% 45% / 0.3;
  }

  * {
    @apply border-border;
  }

  body {
    @apply bg-background text-foreground antialiased;
    font-feature-settings: "ss01", "ss02", "cv01", "cv02", "cv03";
  }

  html {
    scroll-behavior: smooth;
  }
}

@layer utilities {
  .text-balance {
    text-wrap: balance;
  }

  .glass-dark {
    background: rgba(17, 17, 19, 0.8);
    backdrop-filter: blur(24px);
    -webkit-backdrop-filter: blur(24px);
    border: 1px solid hsl(var(--card-border));
  }

  .section-padding {
    @apply py-20 px-6 md:px-12 lg:px-24;
  }

  .mono-label {
    font-family: ui-monospace, SFMono-Regular, "SF Mono", Menlo, Consolas, monospace;
    font-size: 11px;
    letter-spacing: 2px;
    text-transform: uppercase;
    color: hsl(var(--text-muted));
  }

  .section-number {
    font-family: ui-monospace, SFMono-Regular, "SF Mono", Menlo, Consolas, monospace;
    font-size: 12px;
    letter-spacing: 2px;
    color: hsl(var(--text-muted));
  }

  /* Pulse animation for green status dot */
  @keyframes pulse-green {
    0%, 100% {
      opacity: 1;
    }
    50% {
      opacity: 0.5;
    }
  }

  .animate-pulse-green {
    animation: pulse-green 2s ease-in-out infinite;
  }

  /* Typing cursor blink */
  @keyframes blink-cursor {
    0%, 100% { opacity: 1; }
    50% { opacity: 0; }
  }

  .animate-blink {
    animation: blink-cursor 0.8s step-end infinite;
  }

  /* Bounce for typing indicator */
  .typing-indicator {
    display: flex;
    gap: 4px;
  }

  .typing-indicator span {
    width: 8px;
    height: 8px;
    background-color: hsl(var(--primary));
    border-radius: 50%;
    animation: bounce 1.4s infinite ease-in-out;
  }

  .typing-indicator span:nth-child(1) {
    animation-delay: -0.32s;
  }

  .typing-indicator span:nth-child(2) {
    animation-delay: -0.16s;
  }

  @keyframes bounce {
    0%, 80%, 100% {
      transform: scale(0);
    }
    40% {
      transform: scale(1.0);
    }
  }
}
```

- [ ] **Step 3: Update tailwind.config.ts**

Update colors to reference CSS variables and add new keyframes/animations:

```typescript
import type { Config } from "tailwindcss";

export default {
  darkMode: ["class"],
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        sm: "640px",
        md: "768px",
        lg: "1024px",
        xl: "1280px",
        "2xl": "1536px",
      },
    },
    extend: {
      fontFamily: {
        sans: [
          "Inter",
          "SF Pro Display",
          "-apple-system",
          "BlinkMacSystemFont",
          "Segoe UI",
          "Roboto",
          "Helvetica Neue",
          "Arial",
          "sans-serif"
        ],
        mono: [
          "ui-monospace",
          "SFMono-Regular",
          "SF Mono",
          "Menlo",
          "Consolas",
          "monospace"
        ],
      },
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))"
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))"
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))"
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))"
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))"
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))"
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))"
        },
        surface: "hsl(var(--surface))",
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)"
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
        "fade-in": {
          "0%": { opacity: "0", transform: "translateY(10px)" },
          "100%": { opacity: "1", transform: "translateY(0)" }
        },
        "fade-in-right": {
          "0%": { opacity: "0", transform: "translateX(20px)" },
          "100%": { opacity: "1", transform: "translateX(0)" }
        },
        "fade-in-left": {
          "0%": { opacity: "0", transform: "translateX(-20px)" },
          "100%": { opacity: "1", transform: "translateX(0)" }
        },
        "scale-in": {
          "0%": { opacity: "0", transform: "scale(0.97)" },
          "100%": { opacity: "1", transform: "scale(1)" }
        },
        "slide-up": {
          "0%": { transform: "translateY(100%)" },
          "100%": { transform: "translateY(0)" }
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        "fade-in": "fade-in 0.7s ease-out forwards",
        "fade-in-right": "fade-in-right 0.7s ease-out forwards",
        "fade-in-left": "fade-in-left 0.7s ease-out forwards",
        "scale-in": "scale-in 0.7s ease-out forwards",
        "slide-up": "slide-up 0.9s cubic-bezier(0.16, 1, 0.3, 1) forwards",
      }
    }
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;
```

- [ ] **Step 4: Verify the build compiles**

Run: `cd /Users/vamsikrishna/Documents/projects/vamsikrishnaportfolio && npm run build`
Expected: Build succeeds with no errors

- [ ] **Step 5: Commit**

```bash
git add index.html src/index.css tailwind.config.ts
git commit -m "feat: dark zinc color system and tailwind foundation"
```

---

## Task 2: Custom Hooks — Spotlight, Magnetic, Typewriter, Text Scramble

**Files:**
- Create: `src/hooks/useSpotlight.ts`
- Create: `src/hooks/useMagnetic.ts`
- Create: `src/hooks/useTypewriter.ts`
- Create: `src/hooks/useTextScramble.ts`

- [ ] **Step 1: Create useSpotlight hook**

```typescript
import { useRef, useCallback, useState } from 'react';

export function useSpotlight() {
  const ref = useRef<HTMLDivElement>(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    setPosition({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  }, []);

  const handleMouseEnter = useCallback(() => setIsHovered(true), []);
  const handleMouseLeave = useCallback(() => setIsHovered(false), []);

  const spotlightStyle: React.CSSProperties = isHovered
    ? {
        background: `radial-gradient(400px circle at ${position.x}px ${position.y}px, rgba(34, 197, 94, 0.06), transparent 60%)`,
      }
    : {};

  return {
    ref,
    spotlightStyle,
    isHovered,
    handlers: {
      onMouseMove: handleMouseMove,
      onMouseEnter: handleMouseEnter,
      onMouseLeave: handleMouseLeave,
    },
  };
}
```

- [ ] **Step 2: Create useMagnetic hook**

```typescript
import { useRef, useCallback, useState } from 'react';

export function useMagnetic(strength: number = 0.3) {
  const ref = useRef<HTMLElement>(null);
  const [transform, setTransform] = useState({ x: 0, y: 0 });

  const handleMouseMove = useCallback(
    (e: React.MouseEvent) => {
      if (!ref.current) return;
      // Disable on touch devices
      if ('ontouchstart' in window) return;

      const rect = ref.current.getBoundingClientRect();
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;
      const deltaX = (e.clientX - centerX) * strength;
      const deltaY = (e.clientY - centerY) * strength;
      setTransform({ x: deltaX, y: deltaY });
    },
    [strength]
  );

  const handleMouseLeave = useCallback(() => {
    setTransform({ x: 0, y: 0 });
  }, []);

  const magneticStyle: React.CSSProperties = {
    transform: `translate(${transform.x}px, ${transform.y}px)`,
    transition: transform.x === 0 ? 'transform 0.3s ease-out' : 'transform 0.1s ease-out',
  };

  return {
    ref,
    magneticStyle,
    handlers: {
      onMouseMove: handleMouseMove,
      onMouseLeave: handleMouseLeave,
    },
  };
}
```

- [ ] **Step 3: Create useTypewriter hook**

```typescript
import { useState, useEffect } from 'react';

export function useTypewriter(text: string, speed: number = 80, delay: number = 500) {
  const [displayText, setDisplayText] = useState('');
  const [isComplete, setIsComplete] = useState(false);

  useEffect(() => {
    setDisplayText('');
    setIsComplete(false);

    const startTimeout = setTimeout(() => {
      let index = 0;
      const interval = setInterval(() => {
        setDisplayText(text.slice(0, index + 1));
        index++;
        if (index >= text.length) {
          clearInterval(interval);
          setIsComplete(true);
        }
      }, speed);

      return () => clearInterval(interval);
    }, delay);

    return () => clearTimeout(startTimeout);
  }, [text, speed, delay]);

  return { displayText, isComplete };
}
```

- [ ] **Step 4: Create useTextScramble hook**

```typescript
import { useState, useCallback, useRef } from 'react';

const CHARS = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';

export function useTextScramble(originalText: string) {
  const [text, setText] = useState(originalText);
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const scramble = useCallback(() => {
    // Disable on touch devices
    if ('ontouchstart' in window) return;

    let iteration = 0;
    if (intervalRef.current) clearInterval(intervalRef.current);

    intervalRef.current = setInterval(() => {
      setText(
        originalText
          .split('')
          .map((char, index) => {
            if (char === ' ') return ' ';
            if (index < iteration) return originalText[index];
            return CHARS[Math.floor(Math.random() * CHARS.length)];
          })
          .join('')
      );
      iteration += 1 / 2;
      if (iteration >= originalText.length) {
        if (intervalRef.current) clearInterval(intervalRef.current);
        setText(originalText);
      }
    }, 30);
  }, [originalText]);

  const reset = useCallback(() => {
    if (intervalRef.current) clearInterval(intervalRef.current);
    setText(originalText);
  }, [originalText]);

  return { text, scramble, reset };
}
```

- [ ] **Step 5: Verify build compiles**

Run: `cd /Users/vamsikrishna/Documents/projects/vamsikrishnaportfolio && npm run build`
Expected: Build succeeds

- [ ] **Step 6: Commit**

```bash
git add src/hooks/useSpotlight.ts src/hooks/useMagnetic.ts src/hooks/useTypewriter.ts src/hooks/useTextScramble.ts
git commit -m "feat: add microinteraction hooks (spotlight, magnetic, typewriter, text scramble)"
```

---

## Task 3: Page Transition & Scroll Progress Components + App.tsx

**Files:**
- Create: `src/components/PageTransition.tsx`
- Create: `src/components/ScrollProgress.tsx`
- Modify: `src/App.tsx`

- [ ] **Step 1: Create PageTransition component**

```tsx
import React from 'react';
import { motion } from 'framer-motion';

interface PageTransitionProps {
  children: React.ReactNode;
}

const PageTransition: React.FC<PageTransitionProps> = ({ children }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0 }}
      transition={{
        enter: { duration: 0.3, ease: 'easeOut' },
        exit: { duration: 0.2 },
      }}
    >
      {children}
    </motion.div>
  );
};

export default PageTransition;
```

- [ ] **Step 2: Create ScrollProgress component**

```tsx
import React, { useEffect, useState } from 'react';

const ScrollProgress: React.FC = () => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      if (docHeight > 0) {
        setProgress((scrollTop / docHeight) * 100);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="fixed top-0 left-0 right-0 z-[100] h-[2px]">
      <div
        className="h-full bg-primary transition-[width] duration-150 ease-out"
        style={{ width: `${progress}%` }}
      />
    </div>
  );
};

export default ScrollProgress;
```

- [ ] **Step 3: Update App.tsx with AnimatePresence and scroll-to-top**

```tsx
import { Toaster } from "./components/ui/toaster";
import { Toaster as Sonner } from "./components/ui/sonner";
import { TooltipProvider } from "./components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { Analytics } from "@vercel/analytics/react";
import { AnimatePresence } from "framer-motion";
import { useEffect } from "react";
import Index from "./pages/Index";
import About from "./pages/About";
import SkillsPage from "./pages/SkillsPage";
import ExperiencePage from "./pages/ExperiencePage";
import ProjectsPage from "./pages/ProjectsPage";
import ContactPage from "./pages/ContactPage";
import ResumePage from "./pages/ResumePage";
import NotFound from "./pages/NotFound";
import ScrollProgress from "./components/ScrollProgress";

const queryClient = new QueryClient();

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

function AnimatedRoutes() {
  const location = useLocation();
  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Index />} />
        <Route path="/about" element={<About />} />
        <Route path="/skills" element={<SkillsPage />} />
        <Route path="/experience" element={<ExperiencePage />} />
        <Route path="/projects" element={<ProjectsPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/resume" element={<ResumePage />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </AnimatePresence>
  );
}

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <ScrollProgress />
        <ScrollToTop />
        <div className="relative">
          <AnimatedRoutes />
        </div>
      </BrowserRouter>
      <Analytics />
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
```

- [ ] **Step 4: Verify build compiles**

Run: `cd /Users/vamsikrishna/Documents/projects/vamsikrishnaportfolio && npm run build`
Expected: Build succeeds

- [ ] **Step 5: Commit**

```bash
git add src/components/PageTransition.tsx src/components/ScrollProgress.tsx src/App.tsx
git commit -m "feat: add page transitions, scroll progress bar, and scroll-to-top"
```

---

## Task 4: Header (Floating Pill Nav) + Logo

**Files:**
- Modify: `src/components/Header.tsx`
- Modify: `src/components/Logo.tsx`

- [ ] **Step 1: Rewrite Logo.tsx as VK monogram**

```tsx
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
```

- [ ] **Step 2: Rewrite Header.tsx as floating pill nav**

```tsx
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

  // Lock body scroll when mobile menu is open
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

        {/* Desktop navigation */}
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

        {/* Mobile menu button */}
        <button
          className="md:hidden p-1.5 text-muted-foreground hover:text-foreground transition-colors"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
        >
          {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </nav>

      {/* Mobile overlay */}
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
```

- [ ] **Step 3: Verify build compiles**

Run: `cd /Users/vamsikrishna/Documents/projects/vamsikrishnaportfolio && npm run build`
Expected: Build succeeds

- [ ] **Step 4: Commit**

```bash
git add src/components/Header.tsx src/components/Logo.tsx
git commit -m "feat: floating pill nav with text scramble and mobile overlay"
```

---

## Task 5: Background3D + Footer

**Files:**
- Modify: `src/components/Background3D.tsx`
- Modify: `src/components/Footer.tsx`

- [ ] **Step 1: Rewrite Background3D.tsx — darker, subtler**

```tsx
import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';

const Background3D: React.FC = () => {
  const mountRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!mountRef.current) return;

    // Respect prefers-reduced-motion
    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    mountRef.current.appendChild(renderer.domElement);

    const particlesGeometry = new THREE.BufferGeometry();
    const particlesCount = 1500;
    const posArray = new Float32Array(particlesCount * 3);

    for (let i = 0; i < particlesCount * 3; i++) {
      posArray[i] = (Math.random() - 0.5) * 5;
    }

    particlesGeometry.setAttribute('position', new THREE.BufferAttribute(posArray, 3));

    const particlesMaterial = new THREE.PointsMaterial({
      size: 0.003,
      color: '#3f3f46',
      transparent: true,
      opacity: 0.3,
    });

    const particlesMesh = new THREE.Points(particlesGeometry, particlesMaterial);
    scene.add(particlesMesh);

    camera.position.z = 2;

    let mouseX = 0;
    let mouseY = 0;

    const handleMouseMove = (event: MouseEvent) => {
      mouseX = (event.clientX / window.innerWidth) * 2 - 1;
      mouseY = (event.clientY / window.innerHeight) * 2 + 1;
    };

    window.addEventListener('mousemove', handleMouseMove);

    const animate = () => {
      requestAnimationFrame(animate);

      if (prefersReduced) {
        renderer.render(scene, camera);
        return;
      }

      particlesMesh.rotation.x += 0.0005;
      particlesMesh.rotation.y += 0.0005;

      particlesMesh.rotation.x += (mouseY * 0.3 - particlesMesh.rotation.x) * 0.02;
      particlesMesh.rotation.y += (mouseX * 0.3 - particlesMesh.rotation.y) * 0.02;

      renderer.render(scene, camera);
    };

    animate();

    const handleResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('resize', handleResize);
      if (mountRef.current) {
        mountRef.current.removeChild(renderer.domElement);
      }
      scene.remove(particlesMesh);
      particlesGeometry.dispose();
      particlesMaterial.dispose();
      renderer.dispose();
    };
  }, []);

  return (
    <div
      ref={mountRef}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        zIndex: -1,
        background: '#0a0a0a',
      }}
    />
  );
};

export default Background3D;
```

- [ ] **Step 2: Rewrite Footer.tsx — minimal dark**

```tsx
import React from 'react';
import { Github, Linkedin } from 'lucide-react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-[hsl(var(--card-border))] py-8 px-6 md:px-12">
      <div className="container mx-auto max-w-5xl flex items-center justify-between">
        <p className="text-sm text-muted-foreground">
          &copy; {currentYear} Vamsi Krishna Kollipara
        </p>
        <div className="flex items-center gap-3">
          <a
            href="https://github.com/vamsi876"
            target="_blank"
            rel="noopener noreferrer"
            className="w-9 h-9 flex items-center justify-center rounded-lg bg-card border border-[hsl(var(--card-border))] text-muted-foreground hover:text-primary hover:border-primary/30 transition-colors"
            aria-label="GitHub"
          >
            <Github size={16} />
          </a>
          <a
            href="https://www.linkedin.com/in/vamsikollipara/"
            target="_blank"
            rel="noopener noreferrer"
            className="w-9 h-9 flex items-center justify-center rounded-lg bg-card border border-[hsl(var(--card-border))] text-muted-foreground hover:text-primary hover:border-primary/30 transition-colors"
            aria-label="LinkedIn"
          >
            <Linkedin size={16} />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
```

- [ ] **Step 3: Verify build**

Run: `cd /Users/vamsikrishna/Documents/projects/vamsikrishnaportfolio && npm run build`
Expected: Build succeeds

- [ ] **Step 4: Commit**

```bash
git add src/components/Background3D.tsx src/components/Footer.tsx
git commit -m "feat: dark background particles and minimal footer"
```

---

## Task 6: Homepage — Hero + Bento Dashboard

**Files:**
- Modify: `src/components/Hero.tsx` (complete rewrite as bento dashboard)
- Modify: `src/pages/Index.tsx`

- [ ] **Step 1: Rewrite Hero.tsx as bento dashboard**

```tsx
import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Mail, FileText } from 'lucide-react';
import { useTypewriter } from '@/hooks/useTypewriter';
import { useMagnetic } from '@/hooks/useMagnetic';
import { useSpotlight } from '@/hooks/useSpotlight';

const BentoCard: React.FC<{
  to: string;
  className?: string;
  label: string;
  children: React.ReactNode;
  hoverContent?: React.ReactNode;
  delay?: number;
}> = ({ to, className, label, children, hoverContent, delay = 0 }) => {
  const { ref, spotlightStyle, isHovered, handlers } = useSpotlight();

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay, duration: 0.5, ease: 'easeOut' }}
    >
      <Link to={to} className="block h-full">
        <div
          ref={ref}
          {...handlers}
          className={`relative overflow-hidden rounded-xl bg-card border border-[hsl(var(--card-border))] p-5 h-full transition-colors duration-300 hover:border-[hsl(var(--accent-border))] ${className || ''}`}
          style={spotlightStyle}
        >
          <div className="mono-label mb-3">{label}</div>
          {children}
          {hoverContent && (
            <div
              className={`mt-3 transition-all duration-300 ${
                isHovered ? 'opacity-100 max-h-40' : 'opacity-0 max-h-0'
              } overflow-hidden`}
            >
              {hoverContent}
            </div>
          )}
        </div>
      </Link>
    </motion.div>
  );
};

const Hero: React.FC = () => {
  const { displayText, isComplete } = useTypewriter('Vamsi Krishna Kollipara', 60, 300);
  const ctaMagnetic = useMagnetic(0.2);
  const resumeMagnetic = useMagnetic(0.2);

  const bioWords = 'Full-stack developer with 2+ years shipping React/TypeScript frontends and Node.js backends across healthcare and energy domains.'.split(' ');

  return (
    <section className="min-h-screen pt-28 pb-20 px-6 md:px-12 lg:px-24">
      <div className="container mx-auto max-w-5xl">
        {/* Hero */}
        <div className="mb-16">
          <div className="flex items-center gap-2 mb-6">
            <div className="w-2 h-2 rounded-full bg-primary animate-pulse-green" />
            <span className="mono-label text-primary">Available for work</span>
          </div>

          <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-foreground leading-[1.1] mb-4">
            {displayText}
            {!isComplete && (
              <span className="inline-block w-[3px] h-[0.85em] bg-primary ml-1 align-middle animate-blink" />
            )}
          </h1>

          <h2 className="text-xl md:text-2xl font-medium text-muted-foreground mb-6">
            Full-Stack Developer
          </h2>

          <p className="text-muted-foreground max-w-xl mb-8">
            {bioWords.map((word, i) => (
              <motion.span
                key={i}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.8 + i * 0.04, duration: 0.3 }}
                className="inline-block mr-[0.3em]"
              >
                {word}
              </motion.span>
            ))}
          </p>

          <div className="flex gap-4">
            <Link
              to="/contact"
              ref={ctaMagnetic.ref as React.Ref<HTMLAnchorElement>}
              {...ctaMagnetic.handlers}
              style={ctaMagnetic.magneticStyle}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-primary text-primary-foreground font-medium text-sm hover:bg-primary/90 active:scale-[0.97] transition-all"
            >
              <Mail size={16} />
              Get in Touch
            </Link>
            <Link
              to="/resume"
              ref={resumeMagnetic.ref as React.Ref<HTMLAnchorElement>}
              {...resumeMagnetic.handlers}
              style={resumeMagnetic.magneticStyle}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-[hsl(var(--card-border))] text-muted-foreground font-medium text-sm hover:text-foreground hover:border-foreground/20 active:scale-[0.97] transition-all"
            >
              <FileText size={16} />
              Resume
            </Link>
          </div>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {/* About — spans 2 cols */}
          <BentoCard
            to="/about"
            className="md:col-span-2"
            label="ABOUT"
            delay={0.1}
            hoverContent={
              <div className="flex gap-2 flex-wrap">
                <span className="text-xs px-2.5 py-1 rounded-md bg-secondary text-muted-foreground">San Francisco, CA</span>
                <span className="text-xs px-2.5 py-1 rounded-md bg-secondary text-muted-foreground">MS Computer Science</span>
                <span className="text-xs px-2.5 py-1 rounded-md bg-secondary text-muted-foreground">Indiana State University</span>
              </div>
            }
          >
            <p className="text-sm text-muted-foreground leading-relaxed">
              Sole developer on a Supabase-powered operations platform serving 8 organizational roles daily. Shipping React/TypeScript frontends and Node.js backends across healthcare and energy domains, plus AI integration with LangChain and Claude API.
            </p>
          </BentoCard>

          {/* Stats */}
          <BentoCard
            to="/experience"
            label="EXPERIENCE"
            delay={0.15}
            hoverContent={
              <div className="flex flex-col gap-1">
                <span className="text-xs text-muted-foreground">AIDM Software</span>
                <span className="text-xs text-muted-foreground">Indiana State University</span>
                <span className="text-xs text-muted-foreground">Cognizant</span>
              </div>
            }
          >
            <div className="text-4xl font-bold text-foreground">2+</div>
            <div className="text-sm text-muted-foreground">years industry experience</div>
          </BentoCard>

          {/* Skills */}
          <BentoCard
            to="/skills"
            label="SKILLS"
            delay={0.2}
            hoverContent={
              <div className="text-xs text-primary">View all 7 categories &rarr;</div>
            }
          >
            <div className="flex flex-wrap gap-1.5">
              {['React', 'TypeScript', 'Node.js', 'PostgreSQL', 'Python', 'AI/LLM', 'AWS', 'Docker'].map((skill) => (
                <span key={skill} className="text-xs px-2.5 py-1 rounded-md bg-secondary border border-[hsl(var(--card-border))] text-muted-foreground">
                  {skill}
                </span>
              ))}
            </div>
          </BentoCard>

          {/* Open Source */}
          <BentoCard
            to="/projects"
            label="OPEN SOURCE"
            delay={0.25}
            hoverContent={
              <div className="flex flex-wrap gap-1.5">
                <span className="text-xs px-2.5 py-1 rounded-md bg-secondary text-muted-foreground">GitBar</span>
                <span className="text-xs px-2.5 py-1 rounded-md bg-secondary text-muted-foreground">GadgetBox</span>
                <span className="text-xs px-2.5 py-1 rounded-md bg-secondary text-muted-foreground">WebWeaver</span>
              </div>
            }
          >
            <div className="text-4xl font-bold text-foreground">3</div>
            <div className="text-sm text-muted-foreground">PyPI packages published</div>
          </BentoCard>

          {/* Latest Project */}
          <BentoCard
            to="/projects"
            label="LATEST PROJECT"
            delay={0.3}
            hoverContent={
              <div className="flex flex-wrap gap-1.5">
                <span className="text-xs px-2.5 py-1 rounded-md bg-secondary text-muted-foreground">Python</span>
                <span className="text-xs px-2.5 py-1 rounded-md bg-secondary text-muted-foreground">PyObjC</span>
                <span className="text-xs px-2.5 py-1 rounded-md bg-secondary text-muted-foreground">GitHub API</span>
              </div>
            }
          >
            <div className="text-lg font-semibold text-foreground">GitBar</div>
            <div className="text-sm text-muted-foreground">macOS menubar Git dashboard for PRs, issues & CI/CD</div>
          </BentoCard>

          {/* Experience Timeline — full width */}
          <BentoCard
            to="/experience"
            className="md:col-span-3"
            label="CAREER TIMELINE"
            delay={0.35}
          >
            <div className="flex items-center gap-4 overflow-x-auto py-2">
              {[
                { company: 'Cognizant', role: 'Full-Stack Developer', date: 'Jan 2022 – Jul 2023', active: false },
                { company: 'Indiana State University', role: 'Research & Teaching Assistant', date: 'Aug 2023 – May 2025', active: false },
                { company: 'AIDM Software', role: 'Full-Stack Developer', date: 'Jul 2025 – Present', active: true },
              ].map((job, i) => (
                <div key={i} className="flex items-center gap-4 flex-shrink-0">
                  {i > 0 && <div className="w-12 h-px bg-[hsl(var(--card-border))]" />}
                  <div className="flex items-center gap-3">
                    <div className={`w-2.5 h-2.5 rounded-full flex-shrink-0 ${job.active ? 'bg-primary animate-pulse-green' : 'bg-[hsl(var(--card-border))]'}`} />
                    <div>
                      <div className={`text-sm font-medium ${job.active ? 'text-foreground' : 'text-muted-foreground'}`}>{job.company}</div>
                      <div className="text-xs text-[hsl(var(--text-muted))]">{job.date}</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </BentoCard>
        </div>
      </div>
    </section>
  );
};

export default Hero;
```

- [ ] **Step 2: Simplify Index.tsx**

```tsx
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
```

- [ ] **Step 3: Verify build**

Run: `cd /Users/vamsikrishna/Documents/projects/vamsikrishnaportfolio && npm run build`
Expected: Build succeeds

- [ ] **Step 4: Commit**

```bash
git add src/components/Hero.tsx src/pages/Index.tsx
git commit -m "feat: bento dashboard homepage with hero, grid cards, and microinteractions"
```

---

## Task 7: About Page

**Files:**
- Modify: `src/components/About.tsx`
- Modify: `src/pages/About.tsx`

- [ ] **Step 1: Rewrite About.tsx — dark themed with scroll animations**

```tsx
import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Download, ExternalLink } from 'lucide-react';
import { useSpotlight } from '@/hooks/useSpotlight';

const AboutCard: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const { ref, spotlightStyle, handlers } = useSpotlight();
  return (
    <div ref={ref} {...handlers} className="bg-card border border-[hsl(var(--card-border))] rounded-xl p-5 transition-colors hover:border-[hsl(var(--accent-border))]" style={spotlightStyle}>
      {children}
    </div>
  );
};

const About: React.FC = () => {
  const fadeUp = {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, margin: '-50px' },
    transition: { duration: 0.5 },
  };

  return (
    <section className="py-20 px-6 md:px-12 lg:px-24" id="about">
      <div className="container mx-auto max-w-5xl">
        <motion.div {...fadeUp} className="mb-12">
          <span className="section-number">01 — ABOUT</span>
          <h2 className="text-3xl md:text-4xl font-bold mt-2 text-foreground">About Me</h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
          <div className="space-y-6">
            <motion.div {...fadeUp} transition={{ delay: 0.1, duration: 0.5 }}>
              <h3 className="text-xl font-bold text-foreground mb-3">Full-Stack Developer</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Full-stack developer with 2+ years of industry experience shipping React/TypeScript frontends and Node.js backends across healthcare and energy domains. At AIDM, I built and shipped a full-stack operations platform on Supabase serving 8 organizational roles daily, integrating Anthropic Claude for AI-powered features. Previously at Cognizant, developed React-based portal modules for Duke Energy's energy management platform with D3.js visualizations.
              </p>
            </motion.div>

            <motion.div {...fadeUp} transition={{ delay: 0.2, duration: 0.5 }}>
              <h4 className="text-lg font-semibold text-foreground mb-3">Key Focus Areas</h4>
              <div className="flex flex-wrap gap-2">
                {[
                  'Full-stack web development',
                  'Healthcare & energy domains',
                  'AI integration (RAG, Claude, LangChain)',
                  'Open-source developer tools',
                ].map((area) => (
                  <span key={area} className="text-xs px-3 py-1.5 rounded-md bg-secondary border border-[hsl(var(--card-border))] text-muted-foreground">
                    {area}
                  </span>
                ))}
              </div>
            </motion.div>

            <motion.div {...fadeUp} transition={{ delay: 0.3, duration: 0.5 }}>
              <h4 className="text-lg font-semibold text-foreground mb-3">Current Work</h4>
              <p className="text-sm text-muted-foreground leading-relaxed">
                At AIDM Software Consultancy, I'm the sole developer on a Supabase-powered operations platform (React 18, TypeScript, Vite, GraphQL) consolidating HR/applicant tracking, hospice CRM, email campaigns, training/LMS, and e-commerce. Integrated Anthropic Claude for automated resume screening, built a hospice CRM with Leaflet maps and OSRM route optimization, and enforced multi-tenant RBAC across 8 roles via Supabase RLS and Azure AD SSO.
              </p>
            </motion.div>

            <motion.div {...fadeUp} transition={{ delay: 0.4, duration: 0.5 }} className="flex gap-3">
              <Button className="bg-primary text-primary-foreground hover:bg-primary/90" asChild>
                <a href="/vamsi_krishna.pdf" download className="gap-2">
                  <Download size={16} />
                  Download Resume
                </a>
              </Button>
              <Button variant="outline" className="border-[hsl(var(--card-border))] text-muted-foreground hover:text-foreground hover:border-foreground/20" asChild>
                <a href="https://github.com/vamsi876" target="_blank" rel="noopener noreferrer" className="gap-2">
                  <ExternalLink size={16} />
                  View Projects
                </a>
              </Button>
            </motion.div>
          </div>

          <div className="space-y-4">
            <motion.div {...fadeUp} transition={{ delay: 0.2, duration: 0.5 }}>
              <AboutCard>
                <h4 className="text-lg font-semibold text-foreground mb-4">Education</h4>
                <div className="space-y-4">
                  <div>
                    <h5 className="font-medium text-foreground">Masters in Computer Science</h5>
                    <p className="text-xs text-muted-foreground">Indiana State University — Terre Haute, IN</p>
                    <p className="text-xs text-muted-foreground">Aug 2023 – May 2025 | GPA: 3.66/4.0</p>
                  </div>
                  <div>
                    <h5 className="font-medium text-foreground">B.Tech in Electronics & Communication</h5>
                    <p className="text-xs text-muted-foreground">Vel Tech University — Chennai, India</p>
                    <p className="text-xs text-muted-foreground">Jun 2018 – May 2022 | GPA: 9.01/10</p>
                  </div>
                </div>
              </AboutCard>
            </motion.div>

            <motion.div {...fadeUp} transition={{ delay: 0.3, duration: 0.5 }}>
              <AboutCard>
                <h4 className="text-lg font-semibold text-foreground mb-4">Open Source — PyPI Packages</h4>
                <div className="space-y-3">
                  {[
                    { name: 'GitBar', desc: 'Unified menubar dashboard for PRs, issues, CI/CD', url: 'https://pypi.org/project/gitbar/' },
                    { name: 'GadgetBox', desc: 'System tray app with 12 dev utilities', url: 'https://pypi.org/project/gadgetbox/' },
                    { name: 'WebWeaver', desc: 'Async web crawling with robots.txt compliance', url: 'https://pypi.org/project/WebWeaver/' },
                  ].map((pkg) => (
                    <div key={pkg.name}>
                      <h5 className="font-medium text-foreground">{pkg.name}</h5>
                      <a href={pkg.url} target="_blank" rel="noopener noreferrer" className="text-xs text-muted-foreground hover:text-primary transition-colors flex items-center gap-1">
                        {pkg.desc}
                        <ExternalLink size={10} />
                      </a>
                    </div>
                  ))}
                </div>
              </AboutCard>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
```

- [ ] **Step 2: Update About page wrapper**

```tsx
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
```

- [ ] **Step 3: Verify build**

Run: `cd /Users/vamsikrishna/Documents/projects/vamsikrishnaportfolio && npm run build`

- [ ] **Step 4: Commit**

```bash
git add src/components/About.tsx src/pages/About.tsx
git commit -m "feat: dark themed About page with scroll animations and spotlight cards"
```

---

## Task 8: Skills Page

**Files:**
- Modify: `src/components/Skills.tsx`
- Modify: `src/pages/SkillsPage.tsx`

- [ ] **Step 1: Rewrite Skills.tsx — bento grid with spotlight**

```tsx
import React from 'react';
import { Code2, Database, Brain, Globe, Terminal, Wrench, Cloud } from 'lucide-react';
import { motion } from 'framer-motion';
import {
  SiPython, SiJavascript, SiTypescript, SiPostgresql, SiReact, SiNodedotjs, SiExpress,
  SiAmazon, SiDocker, SiVercel, SiGit, SiPostman, SiGraphql, SiNextdotjs, SiTailwindcss,
  SiSupabase, SiHtml5, SiCss3, SiMysql, SiVite, SiD3Dotjs, SiRabbitmq, SiRedis,
  SiGithubactions, SiJest, SiPytest
} from 'react-icons/si';
import { useSpotlight } from '@/hooks/useSpotlight';

const SkillCategoryCard: React.FC<{
  title: string;
  icon: React.ReactNode;
  skills: { name: string; icon?: React.ReactNode }[];
  delay: number;
}> = ({ title, icon, skills, delay }) => {
  const { ref, spotlightStyle, handlers } = useSpotlight();

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ delay, duration: 0.5 }}
    >
      <div
        ref={ref}
        {...handlers}
        className="bg-card border border-[hsl(var(--card-border))] rounded-xl p-5 h-full transition-colors hover:border-[hsl(var(--accent-border))] group"
        style={spotlightStyle}
      >
        <div className="flex items-center gap-3 mb-4">
          <div className="text-muted-foreground group-hover:text-primary group-hover:rotate-12 transition-all duration-300">
            {icon}
          </div>
          <h3 className="text-lg font-semibold text-foreground">{title}</h3>
        </div>
        <div className="flex flex-wrap gap-2">
          {skills.map((skill, i) => (
            <motion.span
              key={skill.name}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: delay + i * 0.03, duration: 0.3 }}
              className="text-xs px-2.5 py-1.5 rounded-md bg-secondary border border-[hsl(var(--card-border))] text-muted-foreground hover:text-foreground hover:border-primary/30 transition-colors flex items-center gap-1.5 cursor-default"
            >
              {skill.icon && <span className="text-muted-foreground">{skill.icon}</span>}
              {skill.name}
            </motion.span>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

const Skills: React.FC = () => {
  const iconSize = 12;

  const skillCategories = [
    {
      title: 'Languages',
      icon: <Code2 size={22} />,
      skills: [
        { name: 'JavaScript', icon: <SiJavascript size={iconSize} /> },
        { name: 'TypeScript', icon: <SiTypescript size={iconSize} /> },
        { name: 'Python', icon: <SiPython size={iconSize} /> },
        { name: 'SQL', icon: <SiMysql size={iconSize} /> },
        { name: 'PowerShell', icon: <Terminal size={iconSize} /> },
        { name: 'HTML', icon: <SiHtml5 size={iconSize} /> },
        { name: 'CSS', icon: <SiCss3 size={iconSize} /> },
      ],
    },
    {
      title: 'Frontend',
      icon: <Globe size={22} />,
      skills: [
        { name: 'React', icon: <SiReact size={iconSize} /> },
        { name: 'Next.js', icon: <SiNextdotjs size={iconSize} /> },
        { name: 'Vite', icon: <SiVite size={iconSize} /> },
        { name: 'Tailwind CSS', icon: <SiTailwindcss size={iconSize} /> },
        { name: 'shadcn/ui' },
        { name: 'D3.js', icon: <SiD3Dotjs size={iconSize} /> },
        { name: 'Mapbox GL' },
      ],
    },
    {
      title: 'Backend',
      icon: <Terminal size={22} />,
      skills: [
        { name: 'Node.js', icon: <SiNodedotjs size={iconSize} /> },
        { name: 'Express.js', icon: <SiExpress size={iconSize} /> },
        { name: 'GraphQL', icon: <SiGraphql size={iconSize} /> },
        { name: 'REST APIs' },
        { name: 'RabbitMQ', icon: <SiRabbitmq size={iconSize} /> },
      ],
    },
    {
      title: 'Databases',
      icon: <Database size={22} />,
      skills: [
        { name: 'PostgreSQL', icon: <SiPostgresql size={iconSize} /> },
        { name: 'SQL Server' },
        { name: 'Oracle' },
        { name: 'Redis', icon: <SiRedis size={iconSize} /> },
        { name: 'Pinecone' },
      ],
    },
    {
      title: 'Cloud & DevOps',
      icon: <Cloud size={22} />,
      skills: [
        { name: 'Azure' },
        { name: 'AWS', icon: <SiAmazon size={iconSize} /> },
        { name: 'Docker', icon: <SiDocker size={iconSize} /> },
        { name: 'GitHub Actions', icon: <SiGithubactions size={iconSize} /> },
        { name: 'CI/CD' },
        { name: 'Vercel', icon: <SiVercel size={iconSize} /> },
        { name: 'Supabase', icon: <SiSupabase size={iconSize} /> },
      ],
    },
    {
      title: 'AI & LLM',
      icon: <Brain size={22} />,
      skills: [
        { name: 'Anthropic Claude API' },
        { name: 'LangChain' },
        { name: 'OpenAI API' },
        { name: 'Vector Databases' },
        { name: 'RAG' },
      ],
    },
    {
      title: 'Tools',
      icon: <Wrench size={22} />,
      skills: [
        { name: 'Git', icon: <SiGit size={iconSize} /> },
        { name: 'Postman', icon: <SiPostman size={iconSize} /> },
        { name: 'Jest', icon: <SiJest size={iconSize} /> },
        { name: 'React Testing Library' },
        { name: 'Pytest', icon: <SiPytest size={iconSize} /> },
      ],
    },
  ];

  return (
    <section className="py-20 px-6 md:px-12 lg:px-24" id="skills">
      <div className="container mx-auto max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-12"
        >
          <span className="section-number">02 — SKILLS</span>
          <h2 className="text-3xl md:text-4xl font-bold mt-2 text-foreground">Skills & Expertise</h2>
          <p className="text-muted-foreground mt-2 max-w-xl">
            A comprehensive overview of my technical skills and areas of expertise.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {skillCategories.map((category, index) => (
            <SkillCategoryCard
              key={category.title}
              title={category.title}
              icon={category.icon}
              skills={category.skills}
              delay={index * 0.05}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
```

- [ ] **Step 2: Update SkillsPage.tsx wrapper**

```tsx
import React from 'react';
import Header from '@/components/Header';
import Skills from '@/components/Skills';
import Footer from '@/components/Footer';
import ChatBot from '@/components/ChatBot';
import Background3D from '@/components/Background3D';
import PageTransition from '@/components/PageTransition';

const SkillsPage: React.FC = () => {
  return (
    <PageTransition>
      <div className="relative min-h-screen">
        <Background3D />
        <div className="relative z-10">
          <Header />
          <main className="pt-24">
            <Skills />
          </main>
          <Footer />
          <ChatBot />
        </div>
      </div>
    </PageTransition>
  );
};

export default SkillsPage;
```

- [ ] **Step 3: Verify build + commit**

```bash
cd /Users/vamsikrishna/Documents/projects/vamsikrishnaportfolio && npm run build
git add src/components/Skills.tsx src/pages/SkillsPage.tsx
git commit -m "feat: dark Skills page with bento grid and spotlight hover"
```

---

## Task 9: Experience Page

**Files:**
- Modify: `src/components/Experience.tsx`
- Modify: `src/pages/ExperiencePage.tsx`

- [ ] **Step 1: Rewrite Experience.tsx — vertical timeline with scroll animations**

```tsx
import React, { useState } from 'react';
import { cn } from '@/lib/utils';
import { Briefcase, Calendar, ChevronRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

interface Job {
  id: string;
  title: string;
  company: string;
  location: string;
  startDate: string;
  endDate: string;
  description: string[];
  active?: boolean;
}

const Experience: React.FC = () => {
  const [activeJob, setActiveJob] = useState<string>('job1');

  const jobs: Job[] = [
    {
      id: 'job1',
      title: 'Full-Stack Developer',
      company: 'AIDM Software Consultancy',
      location: 'Remote',
      startDate: 'Jul 2025',
      endDate: 'Present',
      active: true,
      description: [
        'Architected a healthcare data integration pipeline ingesting clinical data from Homecare Homebase (HCHB) EHR via SFTP log shipping into SQL Server 2022 on Azure, feeding a Next.js operational analytics dashboard.',
        'Built PowerShell automation chaining WinSCP SFTP download and SQL Server transaction log restore into an idempotent hourly SQL Agent job, with lock-file concurrency control, structured logging, and exit-code-driven email alerts.',
        'Built and shipped a full-stack operations platform (React 18, TypeScript, Vite, Tailwind, shadcn/ui, GraphQL) on Supabase (PostgreSQL, Auth, Storage, Edge Functions, RLS), deployed via GitHub Actions CI/CD across AWS and Vercel, consolidating HR/applicant tracking, hospice CRM, email campaigns, training/LMS, and e-commerce into one SPA used daily across 8 organizational roles over 10 months.',
        'Integrated Anthropic Claude via Supabase Edge Functions to automate resume screening with fit scoring and reasoning (PDF/DOCX parsing via mammoth and pdfjs-dist), generate one-click application and CRM-account summaries, and surface natural-language insights across a 24-chart analytics system with DB-level caching and per-user rate limiting.',
        'Designed a hospice CRM with account management, a stage-tracked opportunity pipeline, territory assignment, a FullCalendar visit planner, Leaflet map views with OSRM route optimization, and an Excel-to-Supabase census pipeline powering 7/14/30-day branch visit analytics.',
        'Developed an email campaign engine with dynamic CRM-driven templates, business-day scheduling, and Microsoft Graph API integration for organizational sending, plus transactional emails with delayed queues and reply tracking.',
        'Enforced multi-tenant RBAC across 8 roles via a centralized permission matrix, Supabase Row Level Security, JWT-verified Edge Function auth, and Azure AD SSO with identity linking.',
      ],
    },
    {
      id: 'job2',
      title: 'Graduate Research & Teaching Assistant',
      company: 'Indiana State University',
      location: 'Terre Haute, IN',
      startDate: 'Aug 2023',
      endDate: 'May 2025',
      description: [
        'Built internal web applications for Indiana State University (React, Node.js, PostgreSQL), including a course catalog portal, faculty directory, and student resource dashboard used by academic departments.',
        'Built a RAG-powered knowledge assistant (LangChain, OpenAI API, Pinecone) for university staff to query academic policies and HR procedures, with configurable semantic retrieval, chunk-overlap tuning, and vector indexing.',
        "Built and open-sourced WebWeaver, a Python crawling library, and used it to ingest 40,000+ university URLs into a curated knowledge base of 8,000 documents powering the RAG assistant's semantic search.",
      ],
    },
    {
      id: 'job3',
      title: 'Full-Stack Developer',
      company: 'Cognizant Technology Solutions',
      location: 'Hyderabad, India',
      startDate: 'Jan 2022',
      endDate: 'Jul 2023',
      description: [
        "Developed React-based portal modules for Duke Energy's energy management platform, delivering real-time usage analytics, billing history, and outage status with interactive D3.js visualizations to residential and commercial customers.",
        'Built Node.js/Express REST APIs integrated with Oracle and SAP backends to surface smart meter telemetry data, achieving sub-200ms p95 latency through Redis caching and connection pooling.',
        'Built an internal outage reporting dashboard (React, PostgreSQL, Mapbox GL) aggregating grid sensor data to help operations teams identify fault zones and coordinate field crew dispatch.',
        'Optimized SQL queries on multi-million-row smart meter and billing tables, reducing average execution time by 30% through composite indexing, join restructuring, and eliminating N+1 patterns.',
        'Contributed to integrating grid event feeds into the customer notification system, building Node.js/RabbitMQ services that triggered real-time outage alerts via email and SMS.',
        'Wrote unit and integration tests (Jest, React Testing Library) achieving 85%+ code coverage across frontend and API layers.',
      ],
    },
  ];

  return (
    <section className="py-20 px-6 md:px-12 lg:px-24" id="experience">
      <div className="container mx-auto max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-12"
        >
          <span className="section-number">03 — EXPERIENCE</span>
          <h2 className="text-3xl md:text-4xl font-bold mt-2 text-foreground">Experience</h2>
          <p className="text-muted-foreground mt-2 max-w-xl">
            My professional journey in full-stack development, from enterprise systems to open-source tools.
          </p>
        </motion.div>

        <div className="flex flex-col md:flex-row gap-8">
          {/* Company tabs */}
          <div className="md:w-1/3">
            <div className="flex flex-row md:flex-col overflow-x-auto md:overflow-visible gap-1">
              {jobs.map((job, index) => (
                <motion.button
                  key={job.id}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, duration: 0.4 }}
                  onClick={() => setActiveJob(job.id)}
                  className={cn(
                    'px-4 py-3 text-left border-l-2 transition-all whitespace-nowrap md:whitespace-normal text-sm',
                    activeJob === job.id
                      ? 'border-primary text-foreground bg-primary/5'
                      : 'border-[hsl(var(--card-border))] text-muted-foreground hover:text-foreground hover:bg-card'
                  )}
                >
                  <div className="flex items-center gap-2">
                    <div className={cn(
                      'w-2 h-2 rounded-full flex-shrink-0',
                      job.active && activeJob === job.id ? 'bg-primary animate-pulse-green' : activeJob === job.id ? 'bg-primary' : 'bg-[hsl(var(--card-border))]'
                    )} />
                    {job.company}
                  </div>
                </motion.button>
              ))}
            </div>
          </div>

          {/* Job detail */}
          <div className="md:w-2/3">
            <AnimatePresence mode="wait">
              {jobs
                .filter((job) => job.id === activeJob)
                .map((job) => (
                  <motion.div
                    key={job.id}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="mb-4">
                      <h3 className="text-xl font-semibold text-foreground">
                        {job.title}{' '}
                        <span className="text-primary">@ {job.company}</span>
                      </h3>

                      <div className="flex items-center text-sm text-muted-foreground mt-1 gap-3">
                        <span className="flex items-center gap-1">
                          <Calendar size={14} />
                          {job.startDate} – {job.endDate}
                        </span>
                        <span className="flex items-center gap-1">
                          <Briefcase size={14} />
                          {job.location}
                        </span>
                      </div>
                    </div>

                    <ul className="space-y-3">
                      {job.description.map((item, index) => (
                        <motion.li
                          key={index}
                          initial={{ opacity: 0, x: 10 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: index * 0.05, duration: 0.3 }}
                          className="flex text-sm text-muted-foreground"
                        >
                          <ChevronRight size={16} className="mt-0.5 mr-2 text-primary flex-shrink-0" />
                          <span>{item}</span>
                        </motion.li>
                      ))}
                    </ul>
                  </motion.div>
                ))}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
```

- [ ] **Step 2: Update ExperiencePage.tsx wrapper** (same pattern as About — add PageTransition, Footer)

```tsx
import React from 'react';
import Header from '@/components/Header';
import Experience from '@/components/Experience';
import Footer from '@/components/Footer';
import ChatBot from '@/components/ChatBot';
import Background3D from '@/components/Background3D';
import PageTransition from '@/components/PageTransition';

const ExperiencePage: React.FC = () => {
  return (
    <PageTransition>
      <div className="relative min-h-screen">
        <Background3D />
        <div className="relative z-10">
          <Header />
          <main className="pt-24">
            <Experience />
          </main>
          <Footer />
          <ChatBot />
        </div>
      </div>
    </PageTransition>
  );
};

export default ExperiencePage;
```

- [ ] **Step 3: Verify build + commit**

```bash
cd /Users/vamsikrishna/Documents/projects/vamsikrishnaportfolio && npm run build
git add src/components/Experience.tsx src/pages/ExperiencePage.tsx
git commit -m "feat: dark Experience page with timeline tabs and scroll animations"
```

---

## Task 10: Projects Page

**Files:**
- Modify: `src/components/Projects.tsx`
- Modify: `src/pages/ProjectsPage.tsx`

- [ ] **Step 1: Rewrite Projects.tsx — dark stacked cards**

```tsx
import React from 'react';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { ExternalLink, Github } from 'lucide-react';
import { motion } from 'framer-motion';

interface Project {
  id: number;
  title: string;
  date: string;
  description: string;
  image: string;
  tags: string[];
  links: { github?: string; live?: string };
}

const Projects: React.FC = () => {
  const projects: Project[] = [
    {
      id: 1,
      title: 'GitBar — macOS Menubar Git Dashboard',
      date: 'Mar 2026',
      description: 'Built and published an open-source macOS menubar app providing a unified Git dashboard aggregating PRs, issues, CI/CD status, and local repo health across GitHub, GitLab, and Bitbucket.',
      image: '/screenshots/rag-chatbot.avif',
      tags: ['Python', 'PyObjC', 'GitHub/GitLab REST APIs', 'PyPI'],
      links: { github: 'https://github.com/vamsi876/gitbar', live: 'https://pypi.org/project/gitbar/' },
    },
    {
      id: 2,
      title: 'GadgetBox — Cross-Platform Developer Utilities',
      date: 'Feb 2026',
      description: 'Published a cross-platform system tray app bundling 12 developer utilities (JSON formatter, JWT decoder, UUID generator, Base64, hash, regex tester, etc.) with intelligent clipboard auto-detection.',
      image: '/images/webweaver.png',
      tags: ['Python', 'pystray', 'tkinter', 'PyPI'],
      links: { github: 'https://github.com/vamsi876/gadgetbox', live: 'https://pypi.org/project/gadgetbox/' },
    },
    {
      id: 3,
      title: 'WebWeaver — Web Scraping & Crawling Library',
      date: 'Sep 2024',
      description: 'Open-source Python library for configurable web crawling with URL validation, deduplication, robots.txt compliance, and recursive/breadth-first modes; powers the data ingestion layer behind the ISU RAG chatbot.',
      image: '/screenshots/voice-command-canvas.png',
      tags: ['Python', 'asyncio', 'aiohttp', 'PyPI'],
      links: { github: 'https://github.com/vamsi876/webweaver', live: 'https://pypi.org/project/WebWeaver/' },
    },
    {
      id: 4,
      title: 'Personal Portfolio Website',
      date: 'Jan 2025',
      description: 'A modern, responsive portfolio website built with React, TypeScript, and Tailwind CSS. Features include a dynamic chatbot, contact form with email integration, and a showcase of projects and skills.',
      image: '/screenshots/portfolio-homepage.png',
      tags: ['React', 'TypeScript', 'Tailwind CSS', 'Vite', 'EmailJS', 'Vercel'],
      links: { github: 'https://github.com/vamsi876/vamsikrishna-portfolio', live: 'https://vamsikrishnakollipara.vercel.app' },
    },
  ];

  return (
    <section className="py-20 px-6 md:px-12 lg:px-24" id="projects">
      <div className="container mx-auto max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-12"
        >
          <span className="section-number">04 — PROJECTS</span>
          <h2 className="text-3xl md:text-4xl font-bold mt-2 text-foreground">Projects</h2>
          <p className="text-muted-foreground mt-2 max-w-xl">
            Open-source tools and full-stack projects — 3 packages published on PyPI.
          </p>
        </motion.div>

        <div className="space-y-16">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className={cn(
                'flex flex-col md:flex-row gap-8 items-center',
                index % 2 === 1 && 'md:flex-row-reverse'
              )}
            >
              <div className="md:w-1/2 overflow-hidden rounded-xl">
                <div className="bg-card border border-[hsl(var(--card-border))] rounded-xl h-64 md:h-80 overflow-hidden transition-all duration-500 hover:border-[hsl(var(--accent-border))] group">
                  {project.links.live ? (
                    <a href={project.links.live} target="_blank" rel="noopener noreferrer" className="block w-full h-full">
                      <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                        loading="lazy"
                      />
                    </a>
                  ) : (
                    <img src={project.image} alt={project.title} className="w-full h-full object-cover" loading="lazy" />
                  )}
                </div>
              </div>

              <div className="md:w-1/2">
                <div className="flex items-center gap-3 mb-4">
                  <h3 className="text-xl font-bold text-foreground">{project.title}</h3>
                  <span className="text-xs text-muted-foreground bg-secondary px-2 py-1 rounded">{project.date}</span>
                </div>

                <div className="mb-4 bg-card border border-[hsl(var(--card-border))] p-5 rounded-xl">
                  <p className="text-sm text-muted-foreground">{project.description}</p>
                </div>

                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tags.map((tag) => (
                    <span key={tag} className="text-xs font-medium bg-secondary border border-[hsl(var(--card-border))] px-2.5 py-1 rounded-md text-muted-foreground">
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="flex gap-3">
                  {project.links.github && (
                    <Button variant="outline" size="sm" className="gap-2 border-[hsl(var(--card-border))] text-muted-foreground hover:text-foreground hover:border-foreground/20" asChild>
                      <a href={project.links.github} target="_blank" rel="noopener noreferrer">
                        <Github size={14} />
                        Code
                      </a>
                    </Button>
                  )}
                  {project.links.live && (
                    <Button size="sm" className="gap-2 bg-primary text-primary-foreground hover:bg-primary/90" asChild>
                      <a href={project.links.live} target="_blank" rel="noopener noreferrer">
                        <ExternalLink size={14} />
                        Live Demo
                      </a>
                    </Button>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
```

- [ ] **Step 2: Update ProjectsPage.tsx wrapper** (add PageTransition, Footer)

```tsx
import React from 'react';
import Header from '@/components/Header';
import Projects from '@/components/Projects';
import Footer from '@/components/Footer';
import ChatBot from '@/components/ChatBot';
import Background3D from '@/components/Background3D';
import PageTransition from '@/components/PageTransition';

const ProjectsPage: React.FC = () => {
  return (
    <PageTransition>
      <div className="relative min-h-screen">
        <Background3D />
        <div className="relative z-10">
          <Header />
          <main className="pt-24">
            <Projects />
          </main>
          <Footer />
          <ChatBot />
        </div>
      </div>
    </PageTransition>
  );
};

export default ProjectsPage;
```

- [ ] **Step 3: Verify build + commit**

```bash
cd /Users/vamsikrishna/Documents/projects/vamsikrishnaportfolio && npm run build
git add src/components/Projects.tsx src/pages/ProjectsPage.tsx
git commit -m "feat: dark Projects page with stacked cards and scroll entrance"
```

---

## Task 11: Contact Page

**Files:**
- Modify: `src/components/Contact.tsx`
- Modify: `src/pages/ContactPage.tsx`

- [ ] **Step 1: Rewrite Contact.tsx — dark split layout with green focus states**

```tsx
import React, { useState, useRef, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Mail, Phone, MapPin, Send, Github, Linkedin } from 'lucide-react';
import emailjs from '@emailjs/browser';
import { toast } from 'sonner';
import { motion } from 'framer-motion';
import { useMagnetic } from '@/hooks/useMagnetic';

const Contact: React.FC = () => {
  const formRef = useRef<HTMLFormElement>(null);
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isEmailJSInitialized, setIsEmailJSInitialized] = useState(false);
  const submitMagnetic = useMagnetic(0.15);

  useEffect(() => {
    const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;
    if (publicKey) {
      emailjs.init(publicKey);
      setIsEmailJSInitialized(true);
    }
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const validateForm = () => {
    const { name, email, subject, message } = formData;
    if (!name.trim() || !email.trim() || !subject.trim() || !message.trim()) {
      toast.error('Please fill in all fields');
      return false;
    }
    if (!email.includes('@') || !email.includes('.')) {
      toast.error('Please enter a valid email address');
      return false;
    }
    return true;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateForm()) return;
    if (!isEmailJSInitialized) {
      toast.error('Email service is not ready. Please try again later.');
      return;
    }
    setIsSubmitting(true);
    try {
      const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
      const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
      const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;
      if (!serviceId || !templateId || !publicKey || !formRef.current) throw new Error('Configuration error');
      const result = await emailjs.sendForm(serviceId, templateId, formRef.current, publicKey);
      if (result.text === 'OK') {
        toast.success('Message sent successfully!');
        setFormData({ name: '', email: '', subject: '', message: '' });
      } else {
        throw new Error('Unexpected response');
      }
    } catch {
      toast.error('Failed to send message. Please try again later.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const fadeUp = {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, margin: '-50px' },
    transition: { duration: 0.5 },
  };

  const inputClasses = 'w-full px-4 py-3 rounded-lg bg-card border border-[hsl(var(--card-border))] text-foreground placeholder:text-[hsl(var(--text-muted))] focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary/30 transition-colors text-sm';

  return (
    <section className="py-20 px-6 md:px-12 lg:px-24" id="contact">
      <div className="container mx-auto max-w-5xl">
        <motion.div {...fadeUp} className="mb-12">
          <span className="section-number">05 — CONTACT</span>
          <h2 className="text-3xl md:text-4xl font-bold mt-2 text-foreground">Get In Touch</h2>
          <p className="text-muted-foreground mt-2 max-w-xl">
            Have a project in mind or want to discuss potential opportunities? Feel free to reach out!
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12">
          <motion.div {...fadeUp} transition={{ delay: 0.1, duration: 0.5 }} className="space-y-8">
            <h3 className="text-xl font-semibold text-foreground">Contact Information</h3>

            <div className="space-y-4">
              {[
                { icon: Mail, label: 'Email', value: 'kolliparavamsikrishna80@gmail.com', href: 'mailto:kolliparavamsikrishna80@gmail.com' },
                { icon: Phone, label: 'Phone', value: '+1 (812) 223-8818', href: 'tel:+18122238818' },
                { icon: MapPin, label: 'Location', value: 'San Francisco, CA' },
              ].map((item) => (
                <div key={item.label} className="flex items-center">
                  <div className="w-11 h-11 flex items-center justify-center bg-card border border-[hsl(var(--card-border))] rounded-lg mr-4">
                    <item.icon className="text-primary" size={18} />
                  </div>
                  <div>
                    <p className="text-xs text-muted-foreground">{item.label}</p>
                    {item.href ? (
                      <a href={item.href} className="text-sm font-medium text-foreground hover:text-primary transition-colors">{item.value}</a>
                    ) : (
                      <p className="text-sm font-medium text-foreground">{item.value}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>

            <div className="pt-4">
              <h4 className="text-sm font-medium text-foreground mb-3">Connect with me</h4>
              <div className="flex gap-3">
                {[
                  { icon: Github, href: 'https://github.com/vamsi876', label: 'GitHub' },
                  { icon: Linkedin, href: 'https://www.linkedin.com/in/vamsikollipara/', label: 'LinkedIn' },
                ].map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 flex items-center justify-center rounded-lg bg-card border border-[hsl(var(--card-border))] text-muted-foreground hover:text-primary hover:border-primary/30 transition-colors"
                    aria-label={social.label}
                  >
                    <social.icon size={16} />
                  </a>
                ))}
              </div>
            </div>
          </motion.div>

          <motion.div {...fadeUp} transition={{ delay: 0.2, duration: 0.5 }}>
            <div className="bg-card border border-[hsl(var(--card-border))] p-6 rounded-xl">
              <h3 className="text-lg font-semibold text-foreground mb-5">Send a Message</h3>
              <form ref={formRef} onSubmit={handleSubmit} className="space-y-4">
                <input name="name" type="text" placeholder="Your Name" value={formData.name} onChange={handleChange} required className={inputClasses} />
                <input name="email" type="email" placeholder="Your Email" value={formData.email} onChange={handleChange} required className={inputClasses} />
                <input name="subject" type="text" placeholder="Subject" value={formData.subject} onChange={handleChange} required className={inputClasses} />
                <textarea name="message" placeholder="Your Message" value={formData.message} onChange={handleChange} required className={`${inputClasses} min-h-[120px] resize-none`} />
                <div
                  ref={submitMagnetic.ref as React.Ref<HTMLDivElement>}
                  {...submitMagnetic.handlers}
                  style={submitMagnetic.magneticStyle}
                >
                  <Button
                    type="submit"
                    className="w-full gap-2 bg-primary text-primary-foreground hover:bg-primary/90 active:scale-[0.97] transition-all"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? 'Sending...' : 'Send Message'}
                    <Send size={14} />
                  </Button>
                </div>
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
```

- [ ] **Step 2: Update ContactPage.tsx wrapper**

```tsx
import React from 'react';
import Header from '@/components/Header';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import ChatBot from '@/components/ChatBot';
import Background3D from '@/components/Background3D';
import PageTransition from '@/components/PageTransition';

const ContactPage: React.FC = () => {
  return (
    <PageTransition>
      <div className="relative min-h-screen">
        <Background3D />
        <div className="relative z-10">
          <Header />
          <main className="pt-24">
            <Contact />
          </main>
          <Footer />
          <ChatBot />
        </div>
      </div>
    </PageTransition>
  );
};

export default ContactPage;
```

- [ ] **Step 3: Verify build + commit**

```bash
cd /Users/vamsikrishna/Documents/projects/vamsikrishnaportfolio && npm run build
git add src/components/Contact.tsx src/pages/ContactPage.tsx
git commit -m "feat: dark Contact page with green focus states and magnetic submit"
```

---

## Task 12: Resume Page

**Files:**
- Modify: `src/components/Resume.tsx`
- Modify: `src/pages/ResumePage.tsx`

- [ ] **Step 1: Rewrite Resume.tsx — dark document style**

Update all styling to use dark card backgrounds, foreground text colors, and the accent green for links. Replace all `glass` and `glass-dark` classes with `bg-card border border-[hsl(var(--card-border))]`. Replace `text-gradient` with `text-foreground`. Replace `text-muted-foreground` links with `hover:text-primary`. Change the download button to green outline style: `border-primary/30 text-primary hover:border-primary hover:bg-primary/10`.

The data arrays (education, experience, skills, openSourceContributions) remain identical — only the JSX class names change. Key class replacements:

- Outer container: `bg-card border border-[hsl(var(--card-border))] p-8 rounded-2xl`
- Section cards: `bg-secondary/50 border border-[hsl(var(--card-border))] p-4 rounded-lg`
- Name heading: `text-4xl font-bold text-foreground`
- Section headings: `text-2xl font-bold text-foreground`
- Body text: `text-sm text-muted-foreground`
- Links: `hover:text-primary transition-colors`

- [ ] **Step 2: Update ResumePage.tsx wrapper**

```tsx
import React from 'react';
import Header from '@/components/Header';
import Resume from '@/components/Resume';
import Footer from '@/components/Footer';
import ChatBot from '@/components/ChatBot';
import Background3D from '@/components/Background3D';
import PageTransition from '@/components/PageTransition';

const ResumePage: React.FC = () => {
  return (
    <PageTransition>
      <div className="relative min-h-screen">
        <Background3D />
        <div className="relative z-10">
          <Header />
          <main className="pt-24">
            <Resume />
          </main>
          <Footer />
          <ChatBot />
        </div>
      </div>
    </PageTransition>
  );
};

export default ResumePage;
```

- [ ] **Step 3: Verify build + commit**

```bash
cd /Users/vamsikrishna/Documents/projects/vamsikrishnaportfolio && npm run build
git add src/components/Resume.tsx src/pages/ResumePage.tsx
git commit -m "feat: dark themed Resume page"
```

---

## Task 13: ChatBot — Dark Zinc + Green Theme

**Files:**
- Modify: `src/components/ChatBot.tsx`

- [ ] **Step 1: Update ChatBot styling**

The logic and data remain identical. Update only the JSX styling:

- Chat trigger button: replace `<img>` with a dark rounded button: `w-14 h-14 rounded-full bg-card border border-[hsl(var(--card-border))] flex items-center justify-center text-primary hover:border-primary/30 transition-colors` with a `MessageCircle` icon inside. Add a green dot indicator: `absolute -top-0.5 -right-0.5 w-3 h-3 rounded-full bg-primary animate-pulse-green`.
- Chat window: `bg-card border border-[hsl(var(--card-border))] rounded-xl shadow-2xl shadow-black/40`
- Header: `p-4 border-b border-[hsl(var(--card-border))] flex justify-between items-center`
- Header title: `text-sm font-semibold text-foreground`
- Close button: `text-muted-foreground hover:text-foreground`
- User messages: `bg-primary text-primary-foreground`
- Bot messages: `bg-surface text-muted-foreground`
- Input: `bg-card border border-[hsl(var(--card-border))] text-foreground placeholder:text-[hsl(var(--text-muted))] focus:border-primary focus:ring-1 focus:ring-primary/30`
- Send button: `bg-primary text-primary-foreground hover:bg-primary/90`
- Wrap open/close in `framer-motion` `AnimatePresence` with `scale` + `opacity` animation
- Remove the `<style>{floatingAnimation}</style>` tag and the floating animation CSS

- [ ] **Step 2: Verify build + commit**

```bash
cd /Users/vamsikrishna/Documents/projects/vamsikrishnaportfolio && npm run build
git add src/components/ChatBot.tsx
git commit -m "feat: dark themed ChatBot with green accents and smooth animations"
```

---

## Task 14: NotFound Page + Final Page Wrappers

**Files:**
- Modify: `src/pages/NotFound.tsx`

- [ ] **Step 1: Update NotFound.tsx**

```tsx
import { Link } from 'react-router-dom';
import ChatBot from '@/components/ChatBot';
import Background3D from '@/components/Background3D';
import PageTransition from '@/components/PageTransition';

const NotFound = () => {
  return (
    <PageTransition>
      <div className="relative min-h-screen">
        <Background3D />
        <div className="relative z-10 min-h-screen flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-6xl font-bold mb-4 text-primary">404</h1>
            <p className="text-xl text-muted-foreground mb-6">Page not found</p>
            <Link
              to="/"
              className="text-sm text-primary hover:text-primary/80 underline underline-offset-4 font-medium"
            >
              Return to Home
            </Link>
          </div>
        </div>
        <ChatBot />
      </div>
    </PageTransition>
  );
};

export default NotFound;
```

- [ ] **Step 2: Verify full build succeeds**

Run: `cd /Users/vamsikrishna/Documents/projects/vamsikrishnaportfolio && npm run build`
Expected: Build succeeds with no errors

- [ ] **Step 3: Commit**

```bash
git add src/pages/NotFound.tsx
git commit -m "feat: dark themed 404 page"
```

---

## Task 15: Visual QA + Final Polish

- [ ] **Step 1: Run dev server and verify all pages**

Run: `cd /Users/vamsikrishna/Documents/projects/vamsikrishnaportfolio && npm run dev`

Verify each route loads correctly:
- `/` — bento dashboard with hero, grid cards, typewriter, spotlight hover
- `/about` — dark cards, scroll animations, spotlight
- `/skills` — bento grid, spotlight hover, staggered chips
- `/experience` — timeline tabs, cross-fade, green accents
- `/projects` — stacked cards, scroll entrance, hover zoom
- `/contact` — dark form, green focus states, magnetic submit
- `/resume` — dark document, all sections readable
- Random route — 404 page

- [ ] **Step 2: Verify page transitions work**

Navigate between pages and confirm:
- Smooth fade + slide on enter
- Clean fade on exit
- Scroll resets to top on navigation
- Scroll progress bar tracks correctly

- [ ] **Step 3: Verify mobile responsive**

Check responsive behavior at 375px width:
- Floating pill nav collapses to hamburger
- Bento grid becomes single column
- Mobile overlay menu works
- All text readable, no overflow

- [ ] **Step 4: Final production build**

Run: `cd /Users/vamsikrishna/Documents/projects/vamsikrishnaportfolio && npm run build`
Expected: Build succeeds with no errors or warnings

- [ ] **Step 5: Commit any final fixes**

```bash
git add -A
git commit -m "fix: visual QA polish and responsive fixes"
```
