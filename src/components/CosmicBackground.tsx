
import React, { useEffect, useRef } from 'react';

const CosmicBackground: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    
    const ctx = canvas.getContext('2d');
    if (!ctx) return;
    
    // Set canvas to full screen
    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    
    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);
    
    // Create cosmic rings
    class CosmicRing {
      x: number;
      y: number;
      radius: number;
      color: string;
      speed: number;
      growth: number;
      maxRadius: number;
      opacity: number;
      angle: number;
      
      constructor() {
        this.x = window.innerWidth / 2;
        this.y = window.innerHeight / 2;
        this.radius = Math.random() * 10;
        this.color = `rgba(104, 81, 255, ${Math.random() * 0.2})`;
        this.speed = 0.1 + Math.random() * 0.3;
        this.growth = 0.2 + Math.random() * 0.3;
        this.maxRadius = 50 + Math.random() * 200;
        this.opacity = Math.random() * 0.2;
        this.angle = Math.random() * Math.PI * 2;
      }
      
      update() {
        this.radius += this.growth;
        this.angle += this.speed * 0.01;
        this.x = window.innerWidth / 2 + Math.cos(this.angle) * 20;
        this.y = window.innerHeight / 2 + Math.sin(this.angle) * 20;
        
        if (this.radius > this.maxRadius) {
          this.radius = 0;
          this.opacity = Math.random() * 0.2;
        } else {
          // Fade out as it grows
          this.opacity = Math.max(0, 0.2 - (this.radius / this.maxRadius) * 0.2);
        }
      }
      
      draw(ctx: CanvasRenderingContext2D) {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
        ctx.strokeStyle = `rgba(104, 81, 255, ${this.opacity})`;
        ctx.lineWidth = 1;
        ctx.stroke();
      }
    }
    
    // Create nebula particles
    class NebulaParticle {
      x: number;
      y: number;
      size: number;
      speedX: number;
      speedY: number;
      color: string;
      
      constructor() {
        this.x = Math.random() * window.innerWidth;
        this.y = Math.random() * window.innerHeight;
        this.size = 0.5 + Math.random() * 2;
        this.speedX = (Math.random() - 0.5) * 0.2;
        this.speedY = (Math.random() - 0.5) * 0.2;
        this.color = `rgba(${142 + Math.random() * 50}, ${120 + Math.random() * 50}, ${255}, ${0.1 + Math.random() * 0.2})`;
      }
      
      update() {
        this.x += this.speedX;
        this.y += this.speedY;
        
        // Loop around screen
        if (this.x < 0) this.x = window.innerWidth;
        if (this.x > window.innerWidth) this.x = 0;
        if (this.y < 0) this.y = window.innerHeight;
        if (this.y > window.innerHeight) this.y = 0;
      }
      
      draw(ctx: CanvasRenderingContext2D) {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fillStyle = this.color;
        ctx.fill();
      }
    }
    
    const rings: CosmicRing[] = [];
    const particles: NebulaParticle[] = [];
    
    // Create initial elements
    for (let i = 0; i < 5; i++) {
      rings.push(new CosmicRing());
    }
    
    for (let i = 0; i < 50; i++) {
      particles.push(new NebulaParticle());
    }
    
    // Animation loop
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      // Draw particles first (background)
      particles.forEach(particle => {
        particle.update();
        particle.draw(ctx);
      });
      
      // Draw rings on top
      rings.forEach(ring => {
        ring.update();
        ring.draw(ctx);
      });
      
      requestAnimationFrame(animate);
    };
    
    animate();
    
    return () => {
      window.removeEventListener('resize', resizeCanvas);
    };
  }, []);
  
  return (
    <canvas 
      ref={canvasRef} 
      className="fixed inset-0 z-0 opacity-30 pointer-events-none"
    />
  );
};

export default CosmicBackground;
