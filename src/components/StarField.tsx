
import React, { useEffect, useState, useRef } from 'react';
import { getRandomQuote } from '@/utils/quotes';

type Star = {
  id: number;
  x: number;
  y: number;
  size: number;
  speed: number;
  opacity: number;
  isText: boolean;
  content: string;
  color: string;
};

const StarField: React.FC = () => {
  const [stars, setStars] = useState<Star[]>([]);
  const animationFrameRef = useRef<number | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const lastStarTime = useRef<number>(Date.now());
  
  useEffect(() => {
    const generateInitialStars = () => {
      const windowWidth = window.innerWidth;
      const windowHeight = window.innerHeight;
      const newStars: Star[] = [];
      
      const starCount = Math.min(Math.floor(windowWidth * windowHeight / 15000), 25);
      
      for (let i = 0; i < starCount; i++) {
        newStars.push(createStar(i, windowWidth));
      }
      
      setStars(newStars);
    };
    
    const createStar = (id: number, windowWidth: number): Star => {
      const isText = false; // hiring UI: visual stars only, no floating quotes
      const colors = ['#eef1f5', '#c8d0da', '#9aa8b8'];
      const colorIndex = Math.floor(Math.random() * colors.length);
      
      return {
        id,
        x: Math.random() * windowWidth,
        y: -20, // Start above the screen
        size: isText ? 0 : Math.random() * 2 + 1, // Smaller for normal stars
        speed: Math.random() * 1 + 0.5,
        opacity: Math.random() * 0.7 + 0.3,
        isText,
        content: isText ? getRandomQuote() : '',
        color: colors[colorIndex],
      };
    };
    
    const updateStars = (timestamp: number) => {
      const windowHeight = window.innerHeight;
      const windowWidth = window.innerWidth;
      
      // Add new star every 3-7 seconds
      const now = Date.now();
      if (now - lastStarTime.current > (Math.random() * 4000 + 3000)) {
        setStars(prevStars => {
          const newId = prevStars.length > 0 ? Math.max(...prevStars.map(s => s.id)) + 1 : 0;
          return [...prevStars, createStar(newId, windowWidth)];
        });
        lastStarTime.current = now;
      }
      
      setStars(prevStars => 
        prevStars
          .map(star => ({
            ...star,
            y: star.y + star.speed,
            opacity: star.y < windowHeight * 0.2 
              ? star.opacity * 1.02 // Fade in
              : star.y > windowHeight * 0.8 
                ? star.opacity * 0.98 // Fade out
                : star.opacity
          }))
          // Remove stars that have gone off screen
          .filter(star => star.y < windowHeight + 50 && star.opacity > 0.05)
      );
      
      animationFrameRef.current = requestAnimationFrame(updateStars);
    };
    
    const handleResize = () => {
      generateInitialStars();
    };
    
    generateInitialStars();
    animationFrameRef.current = requestAnimationFrame(updateStars);
    window.addEventListener('resize', handleResize);
    
    return () => {
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
      window.removeEventListener('resize', handleResize);
    };
  }, []);
  
  return (
    <div ref={containerRef} className="fixed inset-0 w-full h-full overflow-hidden z-0 pointer-events-none">
      {stars.map(star => (
        <div
          key={star.id}
          className={`absolute ${star.isText ? 'text-xs sm:text-sm font-serif' : 'rounded-full'} transition-opacity duration-1000`}
          style={{
            left: `${star.x}px`,
            top: `${star.y}px`,
            width: star.isText ? 'auto' : `${star.size}px`,
            height: star.isText ? 'auto' : `${star.size}px`,
            opacity: star.opacity,
            color: star.color,
            backgroundColor: !star.isText ? star.color : 'transparent',
            transform: star.isText ? 'translateX(-50%)' : 'none',
            maxWidth: '200px',
            textOverflow: 'ellipsis',
            whiteSpace: 'nowrap',
            overflow: 'hidden',
          }}
        >
          {star.isText ? star.content : ''}
        </div>
      ))}
    </div>
  );
};

export default StarField;
