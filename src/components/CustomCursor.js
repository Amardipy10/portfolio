'use client';

import { useEffect, useRef } from 'react';

const CustomCursor = () => {
  const cursorRef = useRef(null);

  useEffect(() => {
    const cursor = cursorRef.current;

    const moveCursor = (e) => {
      if (!cursor) return;

      const target = e.target;
      const isClickable = target.closest('a, select, button');
      const noExpand = target.closest('.no-expand');

      if (isClickable && !noExpand) {
        const rect = isClickable.getBoundingClientRect();
        cursor.style.width = `${rect.width}px`;
        cursor.style.height = `${rect.height}px`;
        cursor.style.borderRadius = '100px';
        cursor.style.transform = `translate(${rect.left}px, ${rect.top}px)`;
      } else {
        cursor.style.width = '20px';
        cursor.style.height = '20px';
        cursor.style.borderRadius = '100px';
        cursor.style.transform = `translate(${e.clientX}px, ${e.clientY}px) translate(-50%, -50%)`;
      }
    };

    window.addEventListener('mousemove', moveCursor);
    return () => window.removeEventListener('mousemove', moveCursor);
  }, []);

  return (
    <div
      ref={cursorRef}
      className="hidden lg:block fixed top-0 left-0 w-4 h-4 border border-purple-300 pointer-events-none z-[9999] transition-all duration-500 ease-out"
    />
  );
};

export default CustomCursor;