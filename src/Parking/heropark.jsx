import '../Parkstyle/Heropark.css';
import React from 'react';
import '../Parkstyle/Heropark.css';

// Icônes SVG premium
const LuxuryIconArrow = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M5 12h14" stroke="#f5f5f5"/>
    <path d="M12 5l7 7-7 7" stroke="#f5f5f5"/>
  </svg>
);

const LuxuryIconPhone = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72 15.9 15.9 0 00.7 7.2 15.9 15.9 0 007.2.7A2 2 0 0119 14.91z" stroke="#f5f5f5"/>
  </svg>
);

const LuxuryIconStar = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="#D4AF37" stroke="#D4AF37" strokeWidth="1">
    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
  </svg>
);

import heroBackground from '../assets/Image/P1035850.webp';

const LuxuryHeroSection = () => {
  return (
    <section className="luxury-hero-container">
      {/* Fond d'écran avec overlay */}
      <div className="luxury-hero-backdrop">
        <img src={heroBackground} alt="Engins de chantier haut de gamme" className="luxury-hero-image" />
        <div className="luxury-overlay-gradient"></div>
      </div>

      {/* Contenu principal */}
      <div className="luxury-content-wrapper">
        {/* Partie gauche - Texte */}
        <div className="luxury-text-section">
          <div className="luxury-badge">
            <LuxuryIconStar />
            <span>Excellence Industrielle</span>
          </div>

          <h1 className="luxury-main-heading">
            <span className="luxury-heading-line">Location d'élite</span>
            <span className="luxury-gradient-text">Machinerie Premium</span>
          </h1>

          <p className="luxury-subtext">
            Découvrez notre collection exclusive d'engins de chantier haut de gamme. 
            Performance inégalée, fiabilité absolue et design d'exception pour vos projets les plus ambitieux.
          </p>

          <div className="luxury-button-group">
            <button className="luxury-primary-btn">
              <span>Explorer la collection</span>
              <div className="luxury-btn-icon">
                <LuxuryIconArrow />
              </div>
            </button>
            <button className="luxury-secondary-btn">
              <LuxuryIconPhone />
              <span>Conciergerie Privée</span>
            </button>
          </div>

          <div className="luxury-stats-container">
            {[
              { value: "500+", label: "Unités disponibles" },
              { value: "24/7", label: "Service VIP" },
              { value: "15 ans", label: "Expertise" }
            ].map((stat, index) => (
              <div key={index} className="luxury-stat-item" style={{ animationDelay: `${index * 0.1}s` }}>
                <div className="luxury-stat-value">{stat.value}</div>
                <div className="luxury-stat-label">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Partie droite - Carte premium */}
        <div className="luxury-feature-card">
          <div className="luxury-card-header">
            <div className="luxury-card-icon">
              <LuxuryIconStar />
            </div>
            <div>
              <h3 className="luxury-card-title">Normes d'Excellence</h3>
              <p className="luxury-card-description">
                Chaque engin est minutieusement inspecté selon nos critères premium.
              </p>
            </div>
          </div>

          <ul className="luxury-feature-list">
            {[
              "Maintenance certifiée",
              "Livraison prioritaire",
              "Assurance tout risque",
              "Service sur mesure"
            ].map((feature, index) => (
              <li key={index} className="luxury-feature-item">
                <span>{feature}</span>
                <span className="luxury-checkmark">✓</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Indicateur de défilement */}
      <div className="luxury-scroll-hint">
        <div className="luxury-scroll-line"></div>
      </div>
    </section>
  );
};

export default LuxuryHeroSection;