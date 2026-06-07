import React, { useState } from 'react';

interface FAQItemProps {
  question: string;
  answer: string;
}

export const FAQItem: React.FC<FAQItemProps> = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className={`faq-item ${isOpen ? 'is-open' : ''}`} onClick={() => setIsOpen(!isOpen)} style={{ cursor: 'pointer' }}>
      <div className="faq-header" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <p className="faq-q" style={{ margin: 0 }}>{question}</p>
        <span className="faq-icon" style={{ 
          transform: isOpen ? 'rotate(45deg)' : 'rotate(0deg)', 
          transition: 'transform 0.3s ease',
          fontSize: '24px',
          color: 'var(--color-action-blue)'
        }}>+</span>
      </div>
      <div 
        className="faq-answer-wrapper" 
        style={{ 
          display: 'grid', 
          gridTemplateRows: isOpen ? '1fr' : '0fr',
          transition: 'grid-template-rows 0.3s ease'
        }}
      >
        <div style={{ overflow: 'hidden' }}>
          <p className="faq-a" style={{ paddingTop: '16px', margin: 0 }}>{answer}</p>
        </div>
      </div>
    </div>
  );
};
