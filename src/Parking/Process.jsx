import React from 'react';
import '../Parkstyle/Process.css';

const EleganceProcess = () => {
  const etapes = [
    {
      numero: "1",
      titre: "Visite & Sélection",
      description: "Découvrez nos véhicules disponibles à Kipé et choisissez celui qui vous convient.",
      details: [
        "80+ véhicules en stock",
        "Berlines, pickups, utilitaires",
        "Prix affichés en GNF"
      ],
      couleur: "linear-gradient(135deg, #1e88e5 0%, #64b5f6 100%)"
    },
    {
      numero: "2",
      titre: "Contrôle & Essai",
      description: "Testez le véhicule et vérifiez son état avec notre mécanicien.",
      details: [
        "Inspection mécanique complète",
        "Essai routier possible",
        "Documents en ordre"
      ],
      couleur: "linear-gradient(135deg, #43a047 0%, #81c784 100%)"
    },
    {
      numero: "3",
      titre: "Accord & Paiement",
      description: "Finalisez l’achat ou la location avec un contrat clair et sécurisé.",
      details: [
        "Paiement en espèces ou mobile money",
        "Contrat simple et transparent",
        "Pas de frais cachés"
      ],
      couleur: "linear-gradient(135deg, #fb8c00 0%, #ffcc80 100%)"
    },
    {
      numero: "4",
      titre: "Livraison Immédiate",
      description: "Repartez avec votre véhicule le jour même – prêt à rouler.",
      details: [
        "Livraison à Kipé ou Conakry",
        "Assistance au départ",
        "Conseils d’entretien offerts"
      ],
      couleur: "linear-gradient(135deg, #5e35b1 0%, #9575cd 100%)"
    }
  ];

  return (
    <section className="elegance-section">
      <div className="elegance-container">
        {/* En-tête */}
        <div className="elegance-header">
          <div className="elegance-badge">
            <span className="badge-icon">🚗</span>
            <span>G-TRAF+ | Kipé, Conakry</span>
          </div>
          <h2 className="elegance-titre">
            Un processus <span className="highlights-text">simple et rapide</span>
          </h2>
          <p className="elegance-sous-titre">
            Pas de complications. Choisissez, vérifiez, payez, roulez — en quelques heures seulement.
          </p>
        </div>

        {/* Étapes du processus */}
        <div className="elegance-etapes-container">
          <div className="elegance-etapes-grid">
            {etapes.map((etape, index) => (
              <div 
                key={index}
                className={`elegance-card card-delay-${index}`}
              >
                {/* Numéro de l'étape */}
                <div className="etape-numero-container">
                  <div 
                    className="etape-numero" 
                    style={{ background: etape.couleur }}
                  >
                    {etape.numero}
                  </div>
                  <div 
                    className="etape-ornement"
                    style={{ background: etape.couleur }}
                  >
                    {index === 0 && "✓"}
                    {index === 1 && "🔧"}
                    {index === 2 && "📝"}
                    {index === 3 && "🔑"}
                  </div>
                </div>

                {/* Titre et description */}
                <h3 className="etape-titre">
                  {etape.titre}
                </h3>
                <p className="etape-description">
                  {etape.description}
                </p>

                {/* Détails */}
                <ul className="etape-details">
                  {etape.details.map((detail, detailIndex) => (
                    <li key={detailIndex} className="detail-item">
                      <span className="detail-icon">—</span>
                      {detail}
                    </li>
                  ))}
                </ul>

                {/* Indicateur de progression (visuel) */}
                <div className="etape-indicateur">
                  <div className="indicateur-point"></div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Barre de séparation */}
        <div className="elegance-separateur">
          <div className="separateur-ligne"></div>
        </div>

        {/* Informations complémentaires */}
        <div className="elegance-infos-grid">
          <div className="elegance-info-card">
            <div className="info-icone">📍</div>
            <h3 className="info-titre">Parking à Kipé</h3>
            <p className="info-texte">Accès facile, bien gardé, ouvert 7j/7</p>
          </div>

          <div className="elegance-info-card">
            <div className="info-icone">✔️</div>
            <h3 className="info-titre">Véhicules Vérifiés</h3>
            <p className="info-texte">Contrôle technique fait avant mise en vente</p>
          </div>

          <div className="elegance-info-card">
            <div className="info-icone">📞</div>
            <h3 className="info-titre">Contact Direct</h3>
            <p className="info-texte">Appelez-nous pour réserver ou poser une question</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EleganceProcess;