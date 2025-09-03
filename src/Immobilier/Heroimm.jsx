import React from 'react';
import './Heroimm.css';

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-image">
        <img 
          src="https://images.pexels.com/photos/1396122/pexels-photo-1396122.jpeg?auto=compress&cs=tinysrgb&w=1600" 
          alt="Immobilier de prestige en Guinée"
          className="hero-bg"
        />
        <div className="hero-overlay"></div>
        <div className="hero-gold-accent"></div>
      </div>
      
      <div className="hero-content">
        <div className="container">
          <div className="hero-text">
            <div className="hero-badge">
              <span>Exclusivité</span>
            </div>
            <h1 className="hero-title">
              L'immobilier de prestige
              <span className="hero-highlight"> en Guinée</span>
            </h1>
            <p className="hero-subtitle">
            G-TRAF+ vous accompagne dans la recherche de votre bien d'exception. 
              Découvrez notre sélection exclusive de propriétés de luxe à Conakry.
            </p>
            
           
            
            <div className="hero-stats">
              <div className="stat">
                <span className="stat-number">200+</span>
                <span className="stat-label">Biens disponibles</span>
              </div>
              <div className="stat">
                <span className="stat-number">10 ans</span>
                <span className="stat-label">D'expérience</span>
              </div>
              <div className="stat">
                <span className="stat-number">95%</span>
                <span className="stat-label">Clients satisfaits</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <div className="hero-scroll-indicator">
        <span>Explorer</span>
        <div className="scroll-line"></div>
      </div>
    </section>
  );
};

export default Hero;