import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

export const AnimatedCursor: React.FC = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [cursorVariant, setCursorVariant] = useState('default');

  useEffect(() => {
    const mouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: e.clientX,
        y: e.clientY,
      });
    };

    window.addEventListener('mousemove', mouseMove);

    // Check for interactive elements and update cursor style
    const handleElementHover = () => {
      const hoveredElements = document.querySelectorAll('a, button, [role="button"], input, select, textarea');
      
      hoveredElements.forEach(element => {
        element.addEventListener('mouseenter', () => setCursorVariant('hover'));
        element.addEventListener('mouseleave', () => setCursorVariant('default'));
      });
    };

    // Initialize hoverable elements
    handleElementHover();

    // Setup mutation observer to watch for new elements
    const observer = new MutationObserver(handleElementHover);
    observer.observe(document.body, { childList: true, subtree: true });

    return () => {
      window.removeEventListener('mousemove', mouseMove);
      observer.disconnect();
    };
  }, []);

  const variants = {
    default: {
      x: mousePosition.x - 8,
      y: mousePosition.y - 8,
      scale: 1,
    },
    hover: {
      x: mousePosition.x - 12,
      y: mousePosition.y - 12,
      scale: 1.5,
      borderWidth: '2px',
      backgroundColor: 'rgba(59, 189, 196, 0.1)',
    },
  };

  // Only show custom cursor on non-touch devices
  const [isTouch, setIsTouch] = useState(false);
  
  useEffect(() => {
    setIsTouch('ontouchstart' in window || navigator.maxTouchPoints > 0);
  }, []);

  if (isTouch) return null;

  return (
    <>
      <motion.div
        className="fixed top-0 left-0 w-4 h-4 rounded-full border-2 border-primary-500 z-50 pointer-events-none"
        variants={variants}
        animate={cursorVariant}
        transition={{ type: 'spring', stiffness: 500, damping: 28, mass: 0.5 }}
      />
      <motion.div
        className="fixed top-0 left-0 w-2 h-2 rounded-full bg-primary-500 z-50 pointer-events-none"
        style={{
          x: mousePosition.x - 4,
          y: mousePosition.y - 4,
        }}
        transition={{ type: 'spring', stiffness: 1000, damping: 30, mass: 0.1 }}
      />
    </>
  );
};