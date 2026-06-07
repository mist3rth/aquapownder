import React, { useState } from 'react';
import { SCIENCE_STATS, SCIENCE_CHIPS } from '../../constants/data';

export const Science: React.FC = () => {
  const [moleculeLegend, setMoleculeLegend] = useState('Survolez les atomes pour décrypter la structure H₂O-DRY®.');
  const [volume, setVolume] = useState(250);

  // Reconstitution Calculations
  const powderRequired = (volume * 1.0).toFixed(1);
  const stirTime = Math.max(8, Math.round(8 + (volume / 50)));
  const priceVal = (parseFloat(powderRequired) * 0.498).toFixed(2);

  const handleNodeHover = (info: string) => {
    setMoleculeLegend(info);
  };

  const resetLegend = () => {
    setMoleculeLegend('Survolez les atomes pour décrypter la structure H₂O-DRY®.');
  };

  return (
    <section className="tile-dark2 reveal active" id="science">
      {/* Utilisation de loading="lazy" sémantique ou simplement en background */}
      <div className="science-bg-image" style={{ backgroundImage: `url('${import.meta.env.BASE_URL}images/geneva_lab_render.webp')` }}></div>
      <div className="science-content-wrapper">
        <h2>La Science derrière la poudre.</h2>
        <p className="lead">847 études propriétaires. Des certifications. Des chiffres.</p>
        
        <div className="science-visuals-grid">
          {/* Interactive Molecule Schema */}
          <div className="molecule-container">
            <div className="molecule-title">Schéma Moléculaire H₂O-DRY®</div>
            <div className="molecule-svg-wrapper">
              <svg viewBox="0 0 200 200" className="w-full h-full" aria-label="Schéma interactif de la molécule déshydratée H2O-DRY">
                <line x1="100" y1="60" x2="60" y2="130" stroke="rgba(255,255,255,0.2)" strokeWidth="3" />
                <line x1="100" y1="60" x2="140" y2="130" stroke="rgba(255,255,255,0.2)" strokeWidth="3" />
                <circle cx="100" cy="95" r="45" fill="none" stroke="#2997ff" strokeWidth="1" strokeDasharray="4" />
                
                {/* Atom Oxygen */}
                <g 
                  className="interactive-node" 
                  onMouseEnter={() => handleNodeHover("Oxygène dépressurisé (O) : Totalement déshydraté par sublimation cryogénique à -196°C.")}
                  onMouseLeave={resetLegend}
                  tabIndex={0}
                >
                  <circle cx="100" cy="60" r="24" fill="#0066cc" />
                  <text x="100" y="65" textAnchor="middle" fill="#fff" fontSize="14" fontWeight="bold">O</text>
                </g>
                
                {/* Atom Hydrogen 1 */}
                <g 
                  className="interactive-node" 
                  onMouseEnter={() => handleNodeHover("Hydrogène Sec (H1) : Molécule de liaison structurelle privée de son enveloppe aqueuse périphérique.")}
                  onMouseLeave={resetLegend}
                  tabIndex={0}
                >
                  <circle cx="60" cy="130" r="18" fill="#555" />
                  <text x="60" y="135" textAnchor="middle" fill="#fff" fontSize="12">H</text>
                </g>
                
                {/* Atom Hydrogen 2 */}
                <g 
                  className="interactive-node" 
                  onMouseEnter={() => handleNodeHover("Hydrogène Sec (H2) : Deuxième point de fixation maintenant le vide hydro-statique breveté.")}
                  onMouseLeave={resetLegend}
                  tabIndex={0}
                >
                  <circle cx="140" cy="130" r="18" fill="#555" />
                  <text x="140" y="135" textAnchor="middle" fill="#fff" fontSize="12">H</text>
                </g>
              </svg>
            </div>
            <div className="molecule-legend-box" id="moleculeLegend" style={{ color: moleculeLegend.includes('Survolez') ? '#ccc' : '#2997ff' }}>
              {moleculeLegend}
            </div>
          </div>

          {/* Interactive Reconstitution Calculator */}
          <div className="calculator-container">
            <div className="calculator-title">Simulateur de Reconstitution</div>
            <div className="calculator-desc">Calculez précisément les doses requises pour transformer votre eau classique en eau déshydratée active.</div>
            
            <div className="calc-form">
              <div className="calc-input-group">
                <label htmlFor="volumeInput" className="calc-label">Volume d'eau cible (ml)</label>
                <input 
                  type="number" 
                  id="volumeInput" 
                  className="calc-input" 
                  value={volume} 
                  onChange={(e) => setVolume(Number(e.target.value))}
                  min="10" 
                  max="5000" 
                />
              </div>
              
              <div className="calc-results">
                <div className="calc-row">
                  <span>AQUAPOWDER™ nécessaire :</span>
                  <span className="calc-val">{powderRequired} g</span>
                </div>
                <div className="calc-row">
                  <span>Temps d'agitation requis :</span>
                  <span className="calc-val">{stirTime} s</span>
                </div>
                <div className="calc-row">
                  <span>Coût parodique estimé :</span>
                  <span className="calc-val cost">{priceVal} €</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="stats-4">
          {SCIENCE_STATS.map((stat, i) => (
            <div key={i} className="stat-box">
              <div className="stat-num">{stat.value}</div>
              <div className="stat-label">{stat.label}</div>
            </div>
          ))}
        </div>
        <div className="chips-row">
          {SCIENCE_CHIPS.map((chip, i) => (
            <div key={i} className="chip">{chip}</div>
          ))}
        </div>
      </div>
    </section>
  );
};
