import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'offer';
}

export const Button: React.FC<ButtonProps> = ({ variant = 'primary', children, className = '', ...props }) => {
  let buttonClass = '';
  if (variant === 'primary') buttonClass = 'btn-primary';
  else if (variant === 'secondary') buttonClass = 'btn-secondary';
  else if (variant === 'offer') buttonClass = 'offer-btn'; // Pour compatibilité existante

  return (
    <button 
      className={`${buttonClass} ${className}`} 
      {...props}
    >
      {children}
    </button>
  );
};
