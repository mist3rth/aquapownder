import { useState, useEffect } from 'react';

export const useStockSimulation = (initialStock = 247) => {
  const [stock, setStock] = useState(initialStock);
  const [isDecreasing, setIsDecreasing] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      if (Math.random() > 0.65 && stock > 190) {
        setStock(prev => prev - 1);
        setIsDecreasing(true);
        const timer = setTimeout(() => setIsDecreasing(false), 300);
        return () => clearTimeout(timer);
      }
    }, 5000);

    return () => clearInterval(interval);
  }, [stock]);

  return { stock, isDecreasing };
};
