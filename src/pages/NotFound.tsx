import { useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import PageTransition from '@/components/PageTransition';
import { useDocumentMeta } from '@/hooks/useDocumentMeta';

const NotFound = () => {
  const location = useLocation();

  useDocumentMeta({
    title: '404 — Page Not Found | Vamsi Krishna Kollipara',
    description: 'The page you are looking for does not exist. Return to the homepage of Vamsi Krishna Kollipara, AI Full-Stack Engineer.',
    path: location.pathname,
  });

  useEffect(() => {
    let robots = document.head.querySelector<HTMLMetaElement>('meta[name="robots"]');
    const previous = robots?.getAttribute('content') ?? null;
    if (!robots) {
      robots = document.createElement('meta');
      robots.setAttribute('name', 'robots');
      document.head.appendChild(robots);
    }
    robots.setAttribute('content', 'noindex, nofollow');
    return () => {
      if (previous !== null) robots?.setAttribute('content', previous);
    };
  }, []);

  return (
    <PageTransition>
      <div className="relative min-h-screen">
        <div className="relative z-10 min-h-screen flex items-center justify-center px-6">
          <div className="text-center max-w-md">
            <p className="mono-label text-primary mb-3">Error 404</p>
            <h1 className="text-6xl font-bold mb-4 text-foreground">Page Not Found</h1>
            <p className="text-base text-muted-foreground mb-8">
              The page <code className="px-1.5 py-0.5 rounded bg-card border border-[hsl(var(--card-border))] text-xs">{location.pathname}</code> does not exist.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-3 text-sm">
              <Link to="/" className="px-4 py-2 rounded-md bg-primary text-primary-foreground hover:bg-primary/90 transition-colors font-medium">
                Return to Home
              </Link>
              <Link to="/projects" className="px-4 py-2 rounded-md border border-[hsl(var(--card-border))] text-muted-foreground hover:text-foreground hover:border-foreground/20 transition-colors font-medium">
                View Projects
              </Link>
              <Link to="/contact" className="px-4 py-2 rounded-md border border-[hsl(var(--card-border))] text-muted-foreground hover:text-foreground hover:border-foreground/20 transition-colors font-medium">
                Contact
              </Link>
            </div>
          </div>
        </div>
      </div>
    </PageTransition>
  );
};

export default NotFound;
