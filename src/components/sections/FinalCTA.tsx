import React from 'react';
import { useStockSimulation } from '../../hooks/useStockSimulation';
import { Button } from '../ui/Button';

export const FinalCTA: React.FC = () => {
  const { stock, isDecreasing } = useStockSimulation();

  return (
    <section className="tile-cta reveal active">
      <div className={`stock-pill ${isDecreasing ? 'pulse' : ''}`} id="stockPill">
        {stock} unités restantes
      </div>
      <h2>L'avenir de l'hydratation<br />commence maintenant.</h2>
      <p className="lead">Rejoignez la révolution de l'eau sèche.</p>
      <div className="btn-row">
        <Button variant="primary" onClick={() => window.location.href = '#offres'} style={{ fontSize: '18px', fontWeight: '300', padding: '14px 28px' }}>
          Précommander
        </Button>
      </div>
      <p className="guarantee">Satisfait ou remboursé si vous n'avez pas aimé boire de l'eau reconstituée.</p>
    </section>
  );
};
