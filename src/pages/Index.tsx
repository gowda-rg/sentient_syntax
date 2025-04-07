
import React, { useEffect, useState } from 'react';
import CustomCursor from '@/components/CustomCursor';
import NeuralBackground from '@/components/NeuralBackground';
import StarField from '@/components/StarField';
import ContentLayers from '@/components/ContentLayers';
import CosmicBackground from '@/components/CosmicBackground';
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

  // Add new CSS animations to the index.css file
  useEffect(() => {
    const style = document.createElement('style');
    style.innerHTML = `
      @keyframes float-slow {
        0%, 100% { transform: translateY(0); }
        50% { transform: translateY(-10px); }
      }
      
      .float-animation {
        animation: float-slow 8s ease-in-out infinite;
      }
      
      .hover-glow:hover {
        box-shadow: 0 0 15px rgba(104, 81, 255, 0.5);
      }
      
      @keyframes pulse-resonance {
        0% { transform: scale(1); box-shadow: 0 0 0 0 rgba(104, 81, 255, 0.4); }
        70% { transform: scale(1.05); box-shadow: 0 0 0 10px rgba(104, 81, 255, 0); }
        100% { transform: scale(1); box-shadow: 0 0 0 0 rgba(104, 81, 255, 0); }
      }
      
      .resonance-pulse:hover {
        animation: pulse-resonance 1.5s infinite;
      }
    `;
    document.head.appendChild(style);
    
    return () => {
      document.head.removeChild(style);
    };
  }, []);

  return (
    <main className="relative min-h-screen w-full overflow-hidden bg-gradient-to-b from-darshan-deep via-darshan-cosmic to-darshan-void">
      {!isMobile && <CustomCursor />}
      <NeuralBackground />
      <StarField />
      <CosmicBackground />
      
      {isLoading ? (
        <div className="fixed inset-0 flex items-center justify-center z-50 bg-gradient-to-b from-darshan-deep via-darshan-cosmic to-darshan-void">
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
