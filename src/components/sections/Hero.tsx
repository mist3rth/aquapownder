import React, { useEffect, useState } from 'react';
import { Button } from '../ui/Button';

export const Hero: React.FC = () => {
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setOffset(window.pageYOffset);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const translateVal = offset < 600 ? offset * 0.15 : 90;
  const rotateVal = offset < 600 ? offset * 0.02 : 12;

  return (
    <section className="hero reveal active" id="accueil">
      <div className="hero-eyebrow">Nouveau</div>
      <h1 className="hero-title">AQUAPOWDER™</h1>
      <p className="hero-sub">L'eau. Réinventée. En poudre.</p>
      <div className="btn-row">
        <Button variant="primary" onClick={() => window.location.href = '#science'}>En savoir plus</Button>
        <Button variant="secondary" onClick={() => window.location.href = '#offres'}>Précommander</Button>
      </div>
      <div className="can-wrap">
        <img 
          className="product-can" 
          src="/images/aquapowder_can_render.webp" 
          alt="Canette de poudre d'eau AQUAPOWDER™ H₂O-DRY®" 
          style={{ transform: `translateY(${translateVal}px) rotate(${rotateVal}deg)` }}
        />
      </div>
    </section>
  );
};
