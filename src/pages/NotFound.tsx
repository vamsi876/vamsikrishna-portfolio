import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import ChatBot from "@/components/ChatBot";
import Background3D from "@/components/Background3D";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="relative min-h-screen overflow-hidden">
      <Background3D />
      <div className="relative z-10 min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-6xl font-bold mb-4 text-primary">404</h1>
          <p className="text-xl text-muted-foreground mb-6">Oops! Page not found</p>
          <a href="/" className="text-primary hover:text-primary/80 underline font-medium">
            Return to Home
          </a>
        </div>
      </div>
      <ChatBot />
    </div>
  );
};

export default NotFound;
