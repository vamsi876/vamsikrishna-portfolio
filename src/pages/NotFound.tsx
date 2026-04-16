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
