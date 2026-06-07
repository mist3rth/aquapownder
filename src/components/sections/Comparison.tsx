import React from 'react';

// ─── Icons ────────────────────────────────────────────────────────────────────

const CheckIcon: React.FC = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true">
    <circle cx="12" cy="12" r="12" fill="rgba(0, 102, 204, 0.10)"/>
    <path d="M7 12.5L10.5 16L17 9" stroke="#0066cc" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

const CrossIcon: React.FC = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true">
    <circle cx="12" cy="12" r="12" fill="rgba(0,0,0,0.04)"/>
    <path d="M8.5 8.5L15.5 15.5M15.5 8.5L8.5 15.5" stroke="#c0c0c0" strokeWidth="2" strokeLinecap="round"/>
  </svg>
);

// ─── Types & Data ─────────────────────────────────────────────────────────────

type CellContent =
  | { kind: 'check' }
  | { kind: 'cross' }
  | { kind: 'text'; value: string; note?: string };

interface Row {
  label: string;
  sublabel?: string;
  aquapowder: CellContent;
  bouteille: CellContent;
  robinet: CellContent;
}

const rows: Row[] = [
  {
    label: 'Portabilité en avion',
    sublabel: 'Contrôle sûreté DGAC',
    aquapowder: { kind: 'check' },
    bouteille: { kind: 'cross' },
    robinet: { kind: 'cross' },
  },
  {
    label: 'Résistance au tsunami',
    aquapowder: { kind: 'check' },
    bouteille: { kind: 'cross' },
    robinet: { kind: 'cross' },
  },
  {
    label: 'Durée de conservation',
    aquapowder: { kind: 'text', value: '50 ans' },
    bouteille: { kind: 'text', value: '24h (ouvert)' },
    robinet: { kind: 'text', value: '∞ si tuyau' },
  },
  {
    label: 'Poids pour 100 doses',
    aquapowder: { kind: 'text', value: '4g', note: 'révolutionnaire' },
    bouteille: { kind: 'text', value: '~100 kg' },
    robinet: { kind: 'cross' },
  },
  {
    label: 'Compatible ISS / Starship',
    sublabel: 'Microgravité certifiée',
    aquapowder: { kind: 'check' },
    bouteille: { kind: 'cross' },
    robinet: { kind: 'cross' },
  },
  {
    label: 'Certifié H₂O-DRY®',
    aquapowder: { kind: 'check' },
    bouteille: { kind: 'cross' },
    robinet: { kind: 'cross' },
  },
  {
    label: 'Prix au litre',
    aquapowder: { kind: 'text', value: '~0,003 €', note: 'économies réelles' },
    bouteille: { kind: 'text', value: '~0,30 €' },
    robinet: { kind: 'text', value: '~0,001 €', note: 'sans glamour' },
  },
  {
    label: "Recommandé OMS *",
    sublabel: '* en cours',
    aquapowder: { kind: 'check' },
    bouteille: { kind: 'cross' },
    robinet: { kind: 'cross' },
  },
];

// ─── Cell ─────────────────────────────────────────────────────────────────────

const Cell: React.FC<{ content: CellContent; featured?: boolean }> = ({ content, featured }) => {
  const cls = `comp-cell${featured ? ' comp-cell--featured' : ''}`;
  if (content.kind === 'check') return <div className={cls} role="cell"><CheckIcon /></div>;
  if (content.kind === 'cross') return <div className={cls} role="cell"><CrossIcon /></div>;
  return (
    <div className={cls} role="cell">
      <span className="comp-value">{content.value}</span>
      {content.note && <span className="comp-note">{content.note}</span>}
    </div>
  );
};

// ─── Comparison Section ───────────────────────────────────────────────────────

export const Comparison: React.FC = () => (
  <section className="tile-comparison reveal active" id="comparatif">
    <div className="section-eyebrow" style={{ color: 'var(--color-action-blue)' }}>
      Pourquoi AQUAPOWDER™
    </div>
    <h2>La comparaison parle d'elle-même.</h2>
    <p className="lead">Nous avons tout testé. Les résultats sont sans appel.</p>

    <div className="comp-table-scroll">
      <div className="comp-table" role="table" aria-label="Comparatif AQUAPOWDER™">

        {/* ── En-têtes ── */}
        <div className="comp-header-row" role="row">
          <div className="comp-header-cell comp-header-cell--label sticky-col" role="columnheader">
            Critère
          </div>
          <div className="comp-header-cell comp-header-cell--featured" role="columnheader">
            <span className="comp-badge">Meilleur choix</span>
            <div className="comp-product-name">AQUAPOWDER™</div>
            <div className="comp-product-sub">H₂O-DRY® Technology</div>
          </div>
          <div className="comp-header-cell" role="columnheader">
            <div className="comp-product-name comp-product-name--grey">Eau en bouteille</div>
            <div className="comp-product-sub">Format classique</div>
          </div>
          <div className="comp-header-cell" role="columnheader">
            <div className="comp-product-name comp-product-name--grey">Eau du robinet</div>
            <div className="comp-product-sub">Option traditionnelle</div>
          </div>
        </div>

        {/* ── Lignes ── */}
        {rows.map((row, i) => (
          <div
            className={`comp-row${i % 2 === 0 ? ' comp-row--even' : ''}`}
            key={i}
            role="row"
          >
            <div className="comp-cell comp-cell--label sticky-col" role="cell">
              <span className="comp-label">{row.label}</span>
              {row.sublabel && <span className="comp-sublabel">{row.sublabel}</span>}
            </div>
            <Cell content={row.aquapowder} featured />
            <Cell content={row.bouteille} />
            <Cell content={row.robinet} />
          </div>
        ))}
      </div>
    </div>

    <p className="comp-footnote">
      * Données issues de nos propres recherches internes. Indépendance totale garantie
      par notre comité d'éthique, fondé par nous en 2023.
    </p>
  </section>
);
