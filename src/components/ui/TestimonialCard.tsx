import React from 'react';

interface TestimonialCardProps {
  quote: string;
  name: string;
  role: string;
  className?: string;
  style?: React.CSSProperties;
}

export const TestimonialCard: React.FC<TestimonialCardProps> = ({ quote, name, role, className = '', style }) => {
  return (
    <article className={`test-card ${className}`} style={style}>
      <p className="test-quote">"{quote}"</p>
      <div className="test-name">{name}</div>
      <div className="test-role">{role}</div>
    </article>
  );
};
