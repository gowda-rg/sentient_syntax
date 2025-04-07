
import React, { useEffect, useState } from 'react';
import CustomCursor from '@/components/CustomCursor';
import NeuralBackground from '@/components/NeuralBackground';
import ContentLayers from '@/components/ContentLayers';
import { useIsMobile } from '@/hooks/use-mobile';

const Index = () => {
  const [isLoading, setIsLoading] = useState(true);
  const isMobile = useIsMobile();

  useEffect(() => {
    // Simulate loading
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <main className="relative min-h-screen w-full overflow-hidden bg-darshan-dark">
      {!isMobile && <CustomCursor />}
      <NeuralBackground />
      
      {isLoading ? (
        <div className="fixed inset-0 flex items-center justify-center z-50 bg-darshan-dark">
          <div className="w-16 h-16 rounded-full border-2 border-t-transparent border-darshan-accent animate-spin"></div>
        </div>
      ) : (
        <ContentLayers />
      )}
      
      <div className="fixed bottom-4 right-4 opacity-20 hover:opacity-100 transition-opacity duration-300 text-xs text-darshan-text/50">
        <span className="interactive">SentientSyntax.com</span>
      </div>
    </main>
  );
};

export default Index;
