import React from 'react';

export const Footer: React.FC = () => {
  return (
    <footer className="footer">
      <div className="footer-inner">
        <hr className="footer-rule" />
        <p className="text-[12px] text-[#7a7a7a] mb-6 leading-[1.43]">
          Copyright © 2026 AQUAPOWDER™ SA, Genève, Suisse. Tous droits réservés. Ce produit est entièrement fictif. L'eau reste liquide. Ne pas tenter de boire la poudre sèche. AQUAPOWDER™ décline toute responsabilité en cas d'existentialisme post-achat.
        </p>
        <div className="footer-cols">
          <div className="footer-col">
            <h4>Produits</h4>
            <a href="#offres">Essentiel</a>
            <a href="#offres">Premium</a>
            <a href="#offres">Gazeuse</a>
            <a href="#offres">Pack Annuel</a>
          </div>
          <div className="footer-col">
            <h4>Science</h4>
            <a href="/science/technologie.html">Technologie H₂O-DRY®</a>
            <a href="/science/etudes.html">Études (847)</a>
            <a href="/science/certifications.html">Certifications</a>
            <a href="/science/bulleactiv.html">BulleActiv™</a>
          </div>
          <div className="footer-col">
            <h4>Support</h4>
            <a href="/support/mode-d-emploi.html">Mode d'emploi</a>
            <a href="/support/faq.html">FAQ</a>
            <a href="/support/sachets-d-urgence.html">Sachets d'urgence</a>
            <a href="/support/gaston.html">Gaston (beta)</a>
          </div>
          <div className="footer-col">
            <h4>AQUAPOWDER™</h4>
            <a href="/entreprise/mission.html">Notre mission</a>
            <a href="/entreprise/geneve-sous-sol-c.html">Genève, sous-sol C</a>
            <a href="/entreprise/presse.html">Presse</a>
            <a href="/entreprise/mentions-legales.html">Mentions légales</a>
          </div>
        </div>
        <div style={{ marginTop: '2rem', textAlign: 'center', fontSize: '12px', color: '#7a7a7a' }}>
          MAKE BY <a href="https://mist3rth.github.io/presentMe/" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--color-ink)', textDecoration: 'none', fontWeight: 600 }} onMouseOver={(e) => e.currentTarget.style.textDecoration = 'underline'} onMouseOut={(e) => e.currentTarget.style.textDecoration = 'none'}>T.THIESSON</a>
        </div>
      </div>
    </footer>
  );
};
