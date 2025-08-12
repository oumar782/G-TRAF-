import React from 'react';
import '../Parkstyle/Testimonial.css';

const PrestigeTestimonials = () => {
  const avisClients = [
    {
      id: 1,
      nom: "Mamadou Sow",
      titre: "Transporteur",
      entreprise: "Sow Logistics",
      note: 5,
      citation: "J’ai acheté un Toyota Hilux 2021, toujours impeccable après 18 mois. Le contrôle mécanique était sérieux, et le prix juste. Je recommande à tous les chauffeurs.",
      projet: "Livraison Conakry - Nzérékoré"
    },
    {
      id: 2,
      nom: "Aïssatou Diallo",
      titre: "Commerçante",
      entreprise: "Diallo Import",
      note: 5,
      citation: "J’ai loué une Corolla pour 3 mois – très propre, économique, et service rapide. Le personnel est courtois et disponible même le week-end.",
      projet: "Transport de marchandises"
    },
    {
      id: 3,
      nom: "Ibrahima Camara",
      titre: "Chef de Chantier",
      entreprise: "BTP Kourouma",
      note: 4,
      citation: "Nous louons régulièrement des pickups pour le transport de matériel. Véhicules solides, bien entretenus, et livrés à temps. Un partenaire fiable.",
      projet: "Construction à Matam"
    }
  ];

  const indicateursConfiance = [
    {
      valeur: "4.8/5",
      label: "Note moyenne",
      details: "Sur 120 retours clients"
    },
    {
      valeur: "95%",
      label: "Clients satisfaits",
      details: "Selon enquête terrain"
    },
    {
      valeur: "24h",
      label: "Disponibilité",
      details: "Livraison rapide possible"
    },
    {
      valeur: "5 ans+",
      label: "D’expérience locale",
      details: "Depuis 2019 à Kipé"
    }
  ];

  return (
    <section className="prestige-section">
      <div className="prestige-container">
        {/* En-tête */}
        <div className="prestige-header">
          <div className="prestige-badge">
            <span className="badge-icon">👥</span>
            <span>G-TRAF+ | Kipé, Conakry</span>
          </div>
          <h2 className="prestige-titre">
            Ce que disent nos <span className="highlight-text">clients</span>
          </h2>
          <p className="prestige-sous-titre">
            Des professionnels et particuliers satisfaits partagent leur expérience avec notre parc automobile.
          </p>
        </div>

        {/* Grille de témoignages */}
        <div className="prestige-grid">
          {avisClients.map((avis, index) => (
            <div 
              key={avis.id}
              className={`prestige-card card-delay-${index}`}
            >
              {/* Icône de citation */}
              <div className="citation-icone">“</div>

              {/* Note en étoiles */}
              <div className="note-etoiles">
                {[...Array(avis.note)].map((_, i) => (
                  <span key={i} className="etoile">✧</span>
                ))}
              </div>

              {/* Citation */}
              <blockquote className="prestige-citation">
                {avis.citation}
              </blockquote>

              {/* Projet ou usage */}
              <div className="projet-badge">
                <span className="badge-label">Usage :</span> {avis.projet}
              </div>

              {/* Informations client */}
              <div className="client-info">
                <div className="client-initiales">
                  {avis.nom
                    .split(' ')
                    .map(nom => nom[0])
                    .join('')
                    .toUpperCase()}
                </div>
                <div className="client-details">
                  <div className="client-nom">{avis.nom}</div>
                  <div className="client-titre">{avis.titre}</div>
                  <div className="client-entreprise">{avis.entreprise}</div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Indicateurs de confiance */}
        <div className="prestige-indicateurs">
          <div className="indicateurs-grid">
            {indicateursConfiance.map((indicateur, index) => (
              <div 
                key={index}
                className={`indicateur-item indicateur-delay-${index}`}
              >
                <div className="indicateur-valeur">{indicateur.valeur}</div>
                <div className="indicateur-label">{indicateur.label}</div>
                <div className="indicateur-details">{indicateur.details}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default PrestigeTestimonials;