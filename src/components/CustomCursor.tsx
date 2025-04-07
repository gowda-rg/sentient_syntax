
import React, { useState, useEffect } from 'react';

const CustomCursor: React.FC = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [hidden, setHidden] = useState(true);
  const [clicked, setClicked] = useState(false);
  const [hovered, setHovered] = useState(false);
  const [ripples, setRipples] = useState<{ x: number; y: number; id: number }[]>([]);
  let rippleId = 0;

  useEffect(() => {
    // Only show cursor once it has moved (prevents flash at (0,0))
    const addEventListeners = () => {
      document.addEventListener('mousemove', onMouseMove);
      document.addEventListener('mouseenter', onMouseEnter);
      document.addEventListener('mouseleave', onMouseLeave);
      document.addEventListener('mousedown', onMouseDown);
      document.addEventListener('mouseup', onMouseUp);
      
      // Detect hoverable elements
      document.querySelectorAll('.interactive').forEach(el => {
        el.addEventListener('mouseenter', onMouseHoverStart);
        el.addEventListener('mouseleave', onMouseHoverEnd);
      });
    };

    const removeEventListeners = () => {
      document.removeEventListener('mousemove', onMouseMove);
      document.removeEventListener('mouseenter', onMouseEnter);
      document.removeEventListener('mouseleave', onMouseLeave);
      document.removeEventListener('mousedown', onMouseDown);
      document.removeEventListener('mouseup', onMouseUp);
      
      document.querySelectorAll('.interactive').forEach(el => {
        el.removeEventListener('mouseenter', onMouseHoverStart);
        el.removeEventListener('mouseleave', onMouseHoverEnd);
      });
    };

    const onMouseMove = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
      setHidden(false);
    };

    const onMouseEnter = () => setHidden(false);
    const onMouseLeave = () => setHidden(true);
    const onMouseDown = (e: MouseEvent) => {
      setClicked(true);
      createRipple(e.clientX, e.clientY);
    };
    const onMouseUp = () => setClicked(false);
    const onMouseHoverStart = () => setHovered(true);
    const onMouseHoverEnd = () => setHovered(false);

    const createRipple = (x: number, y: number) => {
      const newRipple = { x, y, id: rippleId++ };
      setRipples(prev => [...prev, newRipple]);
      setTimeout(() => {
        setRipples(prev => prev.filter(ripple => ripple.id !== newRipple.id));
      }, 1000); // Match animation duration
    };

    // Set up event listeners
    addEventListeners();
    
    // Observer to add event listeners to dynamically added elements
    const observer = new MutationObserver(mutations => {
      mutations.forEach(mutation => {
        if (mutation.addedNodes.length) {
          document.querySelectorAll('.interactive').forEach(el => {
            el.addEventListener('mouseenter', onMouseHoverStart);
            el.addEventListener('mouseleave', onMouseHoverEnd);
          });
        }
      });
    });
    
    observer.observe(document.body, { childList: true, subtree: true });
    
    return () => {
      removeEventListeners();
      observer.disconnect();
    };
  }, []);

  // Set cursor visibility, position, and state
  const dotClass = `cursor-dot ${hidden ? 'opacity-0' : 'opacity-100'} ${clicked ? 'scale-50' : ''} ${hovered ? 'cursor-hover' : ''}`;
  const outlineClass = `cursor-outline ${hidden ? 'opacity-0' : 'opacity-100'} ${clicked ? 'scale-75' : ''} ${hovered ? 'cursor-hover' : ''}`;

  return (
    <>
      <div 
        className={dotClass}
        style={{ 
          left: `${position.x}px`,
          top: `${position.y}px`,
          transform: `translate(-50%, -50%) ${clicked ? 'scale(0.5)' : 'scale(1)'}` 
        }}
      />
      <div 
        className={outlineClass}
        style={{ 
          left: `${position.x}px`,
          top: `${position.y}px`,
          transform: `translate(-50%, -50%) ${clicked ? 'scale(0.75)' : 'scale(1)'}`
        }}
      />
      {ripples.map(ripple => (
        <div 
          key={ripple.id}
          className="ripple"
          style={{ 
            left: `${ripple.x}px`,
            top: `${ripple.y}px`,
            width: '10px',
            height: '10px',
          }}
        />
      ))}
    </>
  );
};

export default CustomCursor;
