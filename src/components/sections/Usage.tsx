import React from 'react';
import { Card } from '../ui/Card';

export const Usage: React.FC = () => {
  return (
    <section className="tile-parchment reveal active" id="utilisation">
      <h2>Comment ça marche.</h2>
      <p className="lead">Trois étapes vers une hydratation absolue.</p>
      <div className="steps-row">

        <Card className="step-card step-card--01">
          <div className="step-num">01</div>
          <h3>Dosez</h3>
          <p>Prélevez une cuillère à café d'AQUAPOWDER™ à l'aide de votre cuillère doseuse en inox. Déposez dans un verre de haute qualité.</p>
        </Card>

        <Card className="step-card step-card--02">
          <div className="step-num">02</div>
          <h3>Ajoutez de l'eau</h3>
          <p>Versez 100 ml d'eau froide dans le verre. Mélangez 8 secondes dans le sens des aiguilles d'une montre pour activer les molécules H₂O-DRY®.</p>
          <p className="fine">* Si vous n'avez pas d'eau pour reconstituer votre poudre d'eau, contactez notre service client. Des sachets d'urgence sont disponibles.</p>
        </Card>

        <Card className="step-card step-card--03">
          <div className="step-num">03</div>
          <h3>Hydratez-vous</h3>
          <p>Buvez. Vous venez de vivre l'avenir de l'hydratation humaine. Répétez jusqu'à 8 fois par jour selon les recommandations de l'OMS (qui ne nous connaît pas encore).</p>
        </Card>

      </div>
    </section>
  );
};
