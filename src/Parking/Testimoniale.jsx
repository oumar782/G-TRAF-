import React from 'react';
import '../Parkstyle/Testimonial.css'
const PrestigeTestimonials = () => {
  const avisClients = [
    {
      id: 1,
      nom: "Marie-Claire de Montpellier",
      titre: "Directrice de Chantier",
      entreprise: "Édifices & Prestige",
      note: 5,
      citation: "L'excellence à chaque interaction. Leur parc matériel est impeccable et leur service sur mesure a transformé notre façon de travailler.",
      projet: "Hôtel Particulier - Paris 16e"
    },
    {
      id: 2,
      nom: "Jean-Édouard Laurent",
      titre: "PDG",
      entreprise: "Transport d'Exception",
      note: 5,
      citation: "Une relation client qui transcende la simple location. Leur attention aux détails et leur discrétion professionnelle sont remarquables.",
      projet: "Collection Privée - Monaco"
    },
    {
      id: 3,
      nom: "Sophie-Hélène Van Der Leyen",
      titre: "Architecte d'Intérieur",
      entreprise: "Atelier Signature",
      note: 5,
      citation: "Pour nos chantiers les plus exigeants, nous n'avons qu'un seul partenaire. Leur service blanc-gants est à la hauteur de nos clients les plus prestigieux.",
      projet: "Résidence Côte d'Azur"
    }
  ];

  const indicateursConfiance = [
    {
      valeur: "4.98/5",
      label: "Note moyenne",
      details: "Sur 1500 évaluations"
    },
    {
      valeur: "100%",
      label: "Clients fidèles",
      details: "Taux de rétention"
    },
    {
      valeur: "24/7",
      label: "Service Concierge",
      details: "Disponibilité permanente"
    },
    {
      valeur: "20 ans",
      label: "D'expérience exclusive",
      details: "Depuis 2003"
    }
  ];

  return (
    <section className="prestige-section">
      <div className="prestige-container">
        {/* En-tête */}
        <div className="prestige-header">
          <div className="prestige-badge">
            <span className="badge-icon">✧</span>
            <span>Nos Clients d'Exception</span>
          </div>
          <h2 className="prestige-titre">
            La confiance des <span className="highlight-text">connaisseurs</span>
          </h2>
          <p className="prestige-sous-titre">
            Ceux qui exigent le meilleur partagent leur expérience avec nous.
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

              {/* Note */}
              <div className="note-etoiles">
                {[...Array(avis.note)].map((_, i) => (
                  <span key={i} className="etoile">✧</span>
                ))}
              </div>

              {/* Citation */}
              <blockquote className="prestige-citation">
                {avis.citation}
              </blockquote>

              {/* Badge de projet */}
              <div className="projet-badge">
                <span className="badge-label">Projet :</span> {avis.projet}
              </div>

              {/* Information client */}
              <div className="client-info">
                <div className="client-initiales">
                  {avis.nom.split(' ').map(n => n[0]).join('')}
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