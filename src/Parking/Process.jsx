import React from 'react';
import '../Parkstyle/Process.css'
const EleganceProcess = () => {
  const etapes = [
    {
      numero: "I",
      titre: "Sélection Exclusive",
      description: "Explorez notre collection d'exception et choisissez le véhicule qui correspond à vos exigences.",
      details: ["Collection exclusive de 200 modèles", "Filtres par prestige et performance", "Service conseil personnalisé"],
      couleur: "linear-gradient(135deg, #d4af37 0%, #f0e6c2 100%)"
    },
    {
      numero: "II",
      titre: "Réservation Privée",
      description: "Confirmez votre sélection avec notre système de réservation sur mesure.",
      details: ["Disponibilité en temps réel", "Service concierge disponible", "Paiement crypté"],
      couleur: "linear-gradient(135deg, #c0c0c0 0%, #e8e8e8 100%)"
    },
    {
      numero: "III",
      titre: "Accord Numérique",
      description: "Finalisez votre contrat avec notre système de signature électronique sécurisé.",
      details: ["Documents chiffrés", "Validation en 3 clics", "Archivage sécurisé"],
      couleur: "linear-gradient(135deg, #000000 0%, #333333 100%)"
    },
    {
      numero: "IV",
      titre: "Livraison Sur Mesure",
      description: "Recevez votre véhicule selon vos préférences avec notre service blanc-gants.",
      details: ["Livraison discrète 24h/24", "Préparation exemplaire", "Service d'accompagnement"],
      couleur: "linear-gradient(135deg, #1a1a1a 0%, #4d4d4d 100%)"
    }
  ];

  return (
    <section className="elegance-section">
      <div className="elegance-container">
        {/* En-tête */}
        <div className="elegance-header">
          <div className="elegance-badge">
            <span className="badge-icon">✧</span>
            <span>Expérience Exclusive</span>
          </div>
          <h2 className="elegance-titre">
            Un processus d'<span className="highlights-text">exception</span>
          </h2>
          <p className="elegance-sous-titre">
            Conçu pour les clients exigeants, notre service allie perfection technique et élégance discrète.
          </p>
        </div>

        {/* Étapes */}
        <div className="elegance-etapes-container">
          <div className="elegance-etapes-grid">
            {etapes.map((etape, index) => (
              <div 
                key={index}
                className={`elegance-card card-delay-${index}`}
              >
                {/* Numéro */}
                <div className="etape-numero-container">
                  <div 
                    className="etape-numero" 
                    style={{background: etape.couleur}}
                  >
                    {etape.numero}
                  </div>
                  <div 
                    className="etape-ornement"
                    style={{background: etape.couleur}}
                  >
                    {index === 0 && "✧"}
                    {index === 1 && "✦"}
                    {index === 2 && "✧"}
                    {index === 3 && "✦"}
                  </div>
                </div>

                {/* Contenu */}
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

                {/* Indicateur */}
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
            <div className="info-icone">⏳</div>
            <h3 className="info-titre">Discretion</h3>
            <p className="info-texte">Service entièrement confidentiel</p>
          </div>

          <div className="elegance-info-card">
            <div className="info-icone">✧</div>
            <h3 className="info-titre">Exclusivité</h3>
            <p className="info-texte">Accès à des modèles uniques</p>
          </div>

          <div className="elegance-info-card">
            <div className="info-icone">✦</div>
            <h3 className="info-titre">Sur Mesure</h3>
            <p className="info-texte">Personnalisation à votre image</p>
          </div>
        </div>


      </div>


    </section>
  );
};

export default EleganceProcess;