import React, { type CSSProperties } from 'react';

interface CardProps {
  children: React.ReactNode;
  className?: string;
  featured?: boolean;
  style?: CSSProperties;
}

export const Card: React.FC<CardProps> = ({ children, className = '', featured = false, style }) => {
  // Robust padding fallback to guarantee spacing even if Tailwind v4 utilities are overridden
  let padding = '24px';
  if (className.includes('step-card')) {
    padding = '32px 24px';
  } else if (className.includes('test-card')) {
    padding = '24px 0px 0px 0px';
  }

  return (
    <div 
      className={`bg-white text-[#1d1d1f] rounded-[18px] border transition-all duration-300 hover:-translate-y-1 ${
        featured ? 'border-2 border-[#0066cc] relative' : 'border-[#e0e0e0]'
      } ${className}`}
      style={{ padding, ...style }}
    >
      {children}
    </div>
  );
};
