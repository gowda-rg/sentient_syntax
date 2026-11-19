
import React, { useEffect, useRef } from 'react';
import { useIsMobile } from '@/hooks/use-mobile';

const CosmicBackground: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const isMobile = useIsMobile();
  
  useEffect(() => {
    if (isMobile) return; // Skip animation on mobile
    
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
        this.color = `rgba(200, 210, 224, ${Math.random() * 0.12})`;
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
        ctx.strokeStyle = `rgba(190, 200, 215, ${this.opacity * 0.85})`;
        ctx.lineWidth = 1;
        ctx.stroke();
      }
    }
    
    // Golden nebula swirl class
    class GoldenNebulaSwirl {
      x: number;
      y: number;
      radius: number;
      rotationSpeed: number;
      particles: NebulaSwirlParticle[];
      angle: number;
      
      constructor() {
        this.x = Math.random() * window.innerWidth;
        this.y = Math.random() * window.innerHeight;
        this.radius = 50 + Math.random() * 150;
        this.rotationSpeed = 0.0005 + Math.random() * 0.001;
        this.angle = Math.random() * Math.PI * 2;
        this.particles = [];
        
        // Create particles for this swirl
        const particleCount = 15 + Math.floor(Math.random() * 10);
        for (let i = 0; i < particleCount; i++) {
          this.particles.push(new NebulaSwirlParticle(this));
        }
      }
      
      update() {
        this.angle += this.rotationSpeed;
        
        // Slowly move the swirl
        this.x += Math.sin(this.angle * 0.5) * 0.2;
        this.y += Math.cos(this.angle * 0.3) * 0.2;
        
        // Update particles
        this.particles.forEach(particle => particle.update());
      }
      
      draw(ctx: CanvasRenderingContext2D) {
        this.particles.forEach(particle => particle.draw(ctx));
      }
    }
    
    // Particle for the golden nebula swirl
    class NebulaSwirlParticle {
      swirl: GoldenNebulaSwirl;
      distance: number;
      angle: number;
      size: number;
      opacity: number;
      speed: number;
      color: string;
      
      constructor(swirl: GoldenNebulaSwirl) {
        this.swirl = swirl;
        this.distance = Math.random() * swirl.radius;
        this.angle = Math.random() * Math.PI * 2;
        this.size = 1 + Math.random() * 3;
        this.opacity = 0.1 + Math.random() * 0.3;
        this.speed = 0.01 + Math.random() * 0.03;
        
        const r = 255;
        const g = 195 + Math.floor(Math.random() * 45);
        const b = 80 + Math.floor(Math.random() * 60);
        this.color = `rgba(${r}, ${g}, ${b}, ${this.opacity * 0.55})`;
      }
      
      update() {
        this.angle += this.speed;
      }
      
      draw(ctx: CanvasRenderingContext2D) {
        const x = this.swirl.x + Math.cos(this.angle) * this.distance;
        const y = this.swirl.y + Math.sin(this.angle) * this.distance;
        
        ctx.beginPath();
        ctx.arc(x, y, this.size, 0, Math.PI * 2);
        ctx.fillStyle = this.color;
        ctx.fill();
        
        // Add glow effect
        const gradient = ctx.createRadialGradient(x, y, 0, x, y, this.size * 3);
        gradient.addColorStop(0, `rgba(255, 210, 130, ${this.opacity * 0.5})`);
        gradient.addColorStop(1, 'rgba(255, 210, 130, 0)');
        
        ctx.beginPath();
        ctx.arc(x, y, this.size * 3, 0, Math.PI * 2);
        ctx.fillStyle = gradient;
        ctx.fill();
      }
    }
    
    // Orbiting cosmic ring class
    class OrbitingRing {
      centerX: number;
      centerY: number;
      radius: number;
      thickness: number;
      angle: number;
      rotationSpeed: number;
      color: string;
      
      constructor() {
        this.centerX = window.innerWidth / 2;
        this.centerY = window.innerHeight / 2;
        this.radius = 100 + Math.random() * 300;
        this.thickness = 1 + Math.random() * 2;
        this.angle = Math.random() * Math.PI * 2;
        this.rotationSpeed = 0.0005 + Math.random() * 0.001;
        
        const colors = [
          'rgba(255, 200, 120, 0.16)',
          'rgba(200, 210, 230, 0.12)',
          'rgba(255, 215, 140, 0.14)',
        ];
        this.color = colors[Math.floor(Math.random() * colors.length)];
      }
      
      update() {
        this.angle += this.rotationSpeed;
      }
      
      draw(ctx: CanvasRenderingContext2D) {
        // Calculate elliptical orbit
        const xRadius = this.radius;
        const yRadius = this.radius * 0.6; // Flatten to create ellipse
        
        ctx.beginPath();
        ctx.ellipse(
          this.centerX, 
          this.centerY, 
          xRadius, 
          yRadius, 
          this.angle, 
          0, 
          Math.PI * 2
        );
        ctx.strokeStyle = this.color;
        ctx.lineWidth = this.thickness;
        ctx.stroke();
      }
    }
    
    // Create initial elements
    const rings: CosmicRing[] = [];
    const nebulae: GoldenNebulaSwirl[] = [];
    const orbitingRings: OrbitingRing[] = [];
    
    // Create initial cosmic rings
    for (let i = 0; i < 5; i++) {
      rings.push(new CosmicRing());
    }
    
    // Create golden nebula swirls
    for (let i = 0; i < 3; i++) {
      nebulae.push(new GoldenNebulaSwirl());
    }
    
    // Create orbiting rings
    for (let i = 0; i < 7; i++) {
      orbitingRings.push(new OrbitingRing());
    }
    
    // Animation loop
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      // Draw orbiting rings (background)
      orbitingRings.forEach(ring => {
        ring.update();
        ring.draw(ctx);
      });
      
      // Draw nebula swirls (mid-layer)
      nebulae.forEach(nebula => {
        nebula.update();
        nebula.draw(ctx);
      });
      
      // Draw cosmic rings (foreground)
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
  }, [isMobile]);
  
  if (isMobile) {
    return null; // Don't render on mobile
  }
  
  return (
    <canvas 
      ref={canvasRef} 
      className="fixed inset-0 z-0 opacity-50 pointer-events-none"
    />
  );
};

export default CosmicBackground;
