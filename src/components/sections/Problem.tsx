import React from 'react';
import { Card } from '../ui/Card';

export const Problem: React.FC = () => {
  return (
    <section className="tile-dark reveal active" id="probleme">
      <div className="section-eyebrow">Le Problème</div>
      <h2>L'eau traditionnelle<br />vous a menti.</h2>
      <p className="lead">Lourde. Mouillante. Liquide. Et si on faisait mieux ?</p>
      <div className="cards-3">
        <Card className="util-card">
          <div className="util-card-num">01</div>
          <h3>Trop mouillée</h3>
          <p>L'eau traditionnelle mouille tout ce qu'elle touche. Vos vêtements, votre canapé, votre dignité. Inacceptable en 2024.</p>
        </Card>
        <Card className="util-card">
          <div className="util-card-num">02</div>
          <h3>Trop lourde</h3>
          <p>Un litre d'eau pèse exactement 1 kg. Avons-nous vraiment accepté cela sans nous révolter ? Oui. Jusqu'à maintenant.</p>
        </Card>
        <Card className="util-card">
          <div className="util-card-num">03</div>
          <h3>Trop liquide</h3>
          <p>L'état liquide est un archaïsme. Dans un monde solide et connecté, être liquide est un manque de vision stratégique.</p>
        </Card>
      </div>
    </section>
  );
};
