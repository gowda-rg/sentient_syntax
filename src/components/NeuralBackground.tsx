
import React, { useEffect, useState, useRef } from 'react';

type NeuralNode = {
  id: number;
  x: number;
  y: number;
  size: number;
  speed: number;
  opacity: number;
  direction: number;
};

const NeuralBackground: React.FC = () => {
  const [nodes, setNodes] = useState<NeuralNode[]>([]);
  const animationFrameRef = useRef<number | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const generateNodes = () => {
      const windowWidth = window.innerWidth;
      const windowHeight = window.innerHeight;
      const newNodes: NeuralNode[] = [];
      
      // Generate fewer nodes for a more subtle effect
      const nodeCount = Math.min(Math.max(5, Math.floor(windowWidth * windowHeight / 100000)), 12);
      
      for (let i = 0; i < nodeCount; i++) {
        newNodes.push({
          id: i,
          x: Math.random() * windowWidth,
          y: Math.random() * windowHeight,
          size: Math.random() * 200 + 100, // Larger, more subtle glows
          speed: 0.1 + Math.random() * 0.1, // Very slow movement
          opacity: 0.1 + Math.random() * 0.2, // Low opacity
          direction: Math.random() * Math.PI * 2,
        });
      }
      
      setNodes(newNodes);
    };
    
    const updateNodes = () => {
      setNodes(prevNodes => 
        prevNodes.map(node => {
          // Very slight position change
          const newX = node.x + Math.cos(node.direction) * node.speed;
          const newY = node.y + Math.sin(node.direction) * node.speed;
          
          // Bounce off edges
          let newDirection = node.direction;
          const padding = node.size / 2;
          
          if (newX < -padding || newX > window.innerWidth + padding) {
            newDirection = Math.PI - node.direction;
          }
          if (newY < -padding || newY > window.innerHeight + padding) {
            newDirection = -node.direction;
          }
          
          // Occasionally change direction slightly
          if (Math.random() < 0.005) {
            newDirection += (Math.random() - 0.5) * 0.5;
          }
          
          return {
            ...node,
            x: newX,
            y: newY,
            direction: newDirection,
          };
        })
      );
      
      animationFrameRef.current = requestAnimationFrame(updateNodes);
    };
    
    const handleResize = () => {
      generateNodes();
    };
    
    generateNodes();
    updateNodes();
    window.addEventListener('resize', handleResize);
    
    return () => {
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
      window.removeEventListener('resize', handleResize);
    };
  }, []);
  
  return (
    <div ref={containerRef} className="fixed inset-0 w-full h-full overflow-hidden z-0 opacity-70">
      {nodes.map(node => (
        <div
          key={node.id}
          className="neural-glow"
          style={{
            left: `${node.x}px`,
            top: `${node.y}px`,
            width: `${node.size}px`,
            height: `${node.size}px`,
            opacity: node.opacity,
          }}
        />
      ))}
    </div>
  );
};

export default NeuralBackground;
