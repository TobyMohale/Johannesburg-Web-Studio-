import React from 'react';

export const SpiderLogo = ({ className = "w-10 h-10" }: { className?: string }) => (
  <div className={`relative flex items-center justify-center bg-white rounded-full p-2 border-2 border-blue-500 shadow-[0_0_15px_rgba(37,99,235,0.5)] ${className}`}>
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      viewBox="0 0 24 24" 
      fill="none" 
      stroke="#000000" 
      strokeWidth="2" 
      strokeLinecap="round" 
      strokeLinejoin="round" 
      className="w-full h-full drop-shadow-md"
    >
      {/* Body */}
      <circle cx="12" cy="14" r="3.5" fill="#000000" />
      <circle cx="12" cy="8" r="2" fill="#000000" />
      
      {/* Fangs */}
      <path d="M11 5l-.5 2" />
      <path d="M13 5l.5 2" />

      {/* Legs - Left Side */}
      <path d="M10 8L6 4L3 5" />
      <path d="M9.5 10.5L3 9L1 11" />
      <path d="M9 13.5L4 15L2 19" />
      <path d="M10 16L7 21" />

      {/* Legs - Right Side */}
      <path d="M14 8L18 4L21 5" />
      <path d="M14.5 10.5L21 9L23 11" />
      <path d="M15 13.5L20 15L22 19" />
      <path d="M14 16L17 21" />
      
      {/* Connecting line */}
      <path d="M12 10v4" />
    </svg>
  </div>
);
