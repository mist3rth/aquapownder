import React from 'react';
import { Card } from '../ui/Card';
import { Button } from '../ui/Button';
import { OFFERS_DATA } from '../../constants/data';
import { useIntersection } from '../../hooks/useIntersection';

export const Offers: React.FC = () => {
  const { ref, isVisible } = useIntersection();

  const handleBuy = (name: string, price: number) => {
    window.dispatchEvent(
      new CustomEvent('add-to-cart', {
        detail: { name, price }
      })
    );
  };

  return (
    <section className={`tile-light reveal ${isVisible ? 'active' : ''}`} id="offres" ref={ref}>
      <div className="offers-grid-container">
        <div className="offers-left-visual">
          <img 
            className="spoon-image" 
            src={`${import.meta.env.BASE_URL}images/aquapowder_spoon_render.webp`}
            alt="Cuillère doseuse AQUAPOWDER™ en acier inoxydable brossé" 
            loading="lazy" 
          />
          <div className="visual-caption">Cuillère doseuse de précision 18/10 incluse dans l'offre Premium.</div>
        </div>
        <div className="offers-right-content">
          <h2>Choisissez votre AQUAPOWDER™.</h2>
          <p className="lead">Quatre façons de ne plus jamais manquer d'eau.</p>
          <div className="offers-4">
            {OFFERS_DATA.map((offer, index) => (
              <Card 
                key={offer.id} 
                className={`offer-card ${offer.featured ? 'featured' : ''} ${isVisible ? 'animate-fade-up' : 'opacity-0'}`} 
                featured={offer.featured}
                style={{ animationDelay: `${index * 150}ms` }}
              >
                {offer.badge && <div className="offer-badge">{offer.badge}</div>}
                <div className="offer-header">
                  <h3 className="offer-name">{offer.name}</h3>
                  <div className="offer-sub">{offer.sub}</div>
                  <div className="offer-price"><sup>€</sup>{offer.price.toFixed(2).replace('.', ',')}</div>
                  <p className="offer-desc">{offer.desc}</p>
                </div>
                <ul className="offer-list">
                  {offer.features.map((feature, i) => (
                    <li key={i}>{feature}</li>
                  ))}
                </ul>
                <Button variant="offer" onClick={() => handleBuy(offer.buyName, offer.price)}>
                  Acheter
                </Button>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
