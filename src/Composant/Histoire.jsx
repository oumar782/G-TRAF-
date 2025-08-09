import React, { useEffect, useRef, useState } from 'react';
import { Target, Eye, Award, Shield, Users2, Wrench, ArrowRight } from 'lucide-react';
import '../Style/Histoire.css';
import imageEquipe from '../assets/Image/P1035866.jpg'; // ✅ import direct de l'image

const Histoire = () => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef(null); // ✅ ref bien défini

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, []);

  const values = [
    {
      icon: Shield,
      title: "Excellence & Sécurité",
      description: "Standards de qualité irréprochables et protocoles de sécurité renforcés sur chaque chantier.",
      colorClass: "about-value-blue"
    },
    {
      icon: Users2,
      title: "Expertise Humaine",
      description: "Équipe de maîtres artisans et ingénieurs passionnés, formés aux technologies de pointe.",
      colorClass: "about-value-green"
    },
    {
      icon: Wrench,
      title: "Innovation Technique",
      description: "Intégration des dernières innovations pour des constructions durables et performantes.",
      colorClass: "about-value-purple"
    }
  ];

  return (
    <section id="about" className="about-section" ref={ref}>
      <div className="about-pattern"></div>

      <div className="about-container">
        <div className="about-grid">
          {/* Content */}
          <div className={`about-content ${isVisible ? 'about-visible' : 'about-hidden-left'}`}>
            <div className="about-header">
              <div className={`about-badge ${isVisible ? 'about-badge-animate' : ''}`}>
                <Award className="about-badge-icon" />
                <span>NOTRE HISTOIRE</span>
              </div>
              <h2 className="about-title">
                <span className={`about-title-line ${isVisible ? 'about-title-line-animate' : ''}`}>Trois décennies</span>
                <span className={`about-title-highlight ${isVisible ? 'about-title-highlight-animate' : ''}`}>
                  d'excellence
                </span>
              </h2>
              <p className={`about-description ${isVisible ? 'about-description-animate' : ''}`}>
                Fondée en 1995, EliteConstruct s'est imposée comme la référence absolue du BTP haut de gamme. 
                Notre vision : transformer chaque projet en chef-d'œuvre architectural, alliant tradition artisanale 
                et innovation technologique.
              </p>
            </div>

            {/* Mission & Vision */}
            <div className="about-cards">
              <div className={`about-card ${isVisible ? 'about-card-animate' : ''}`} style={{ transitionDelay: '200ms' }}>
                <div className="about-card-inner">
                  <div className="about-card-icon about-card-icon-amber">
                    <Target className="about-card-icon-svg" />
                  </div>
                  <div>
                    <h3 className="about-card-title">Notre Mission</h3>
                    <p className="about-card-text">
                      Concrétiser vos projets les plus ambitieux en créations d'exception, 
                      où chaque détail reflète notre engagement vers la perfection.
                    </p>
                  </div>
                </div>
              </div>

              <div className={`about-card ${isVisible ? 'about-card-animate' : ''}`} style={{ transitionDelay: '400ms' }}>
                <div className="about-card-inner">
                  <div className="about-card-icon about-card-icon-slate">
                    <Eye className="about-card-icon-svg" />
                  </div>
                  <div>
                    <h3 className="about-card-title">Notre Vision</h3>
                    <p className="about-card-text">
                      Être le partenaire privilégié des projets d'exception en France et à l'international, 
                      redéfinissant les standards du luxe architectural.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <button className={`about-button ${isVisible ? 'about-button-animate' : ''}`}>
              <span>Découvrir notre histoire</span>
              <ArrowRight className="about-button-icon" />
            </button>
          </div>

          {/* Visual */}
          <div className={`about-visual ${isVisible ? 'about-visible' : 'about-hidden-right'}`}>
            <div className="about-image-container">
              <div className="about-image-gradient"></div>
              <img 
                src={imageEquipe} // ✅ image gérée correctement
                alt="Équipe EliteConstruct" 
                className={`about-image ${isVisible ? 'about-image-animate' : ''}`}
              />
              
              {/* Floating Stats */}
              <div className={`about-stat about-stat-left ${isVisible ? 'about-stat-left-animate' : ''}`}>
                <div className="about-stat-number">30+</div>
                <div className="about-stat-label">Années d'expertise</div>
              </div>
              
              <div className={`about-stat about-stat-right ${isVisible ? 'about-stat-right-animate' : ''}`}>
                <div className="about-stat-number">1000+</div>
                <div className="about-stat-label">Projets réalisés</div>
              </div>
            </div>
          </div>
        </div>

        {/* Values */}
        <div className="about-values">
          <div className="about-values-header">
            <div className={`about-values-badge ${isVisible ? 'about-values-badge-animate' : ''}`}>
              <Shield className="about-values-badge-icon" />
              <span>NOS VALEURS</span>
            </div>
            <h2 className="about-values-title">
              <span className={`about-values-title-line ${isVisible ? 'about-values-title-line-animate' : ''}`}>
                L'excellence comme  
              </span>
              <span className={`about-values-title-highlight ${isVisible ? 'about-values-title-highlight-animate' : ''}`}>
                        standard
              </span>
            </h2>
            <p className={`about-values-description ${isVisible ? 'about-values-description-animate' : ''}`}>
              Nos valeurs fondamentales guident chaque décision et façonnent notre approche unique du BTP haut de gamme.
            </p>
          </div>

          <div className="about-values-grid">
            {values.map((value, index) => (
              <div 
                key={index} 
                className={`about-value-card ${isVisible ? 'about-value-visible' : 'about-value-hidden'}`}
                style={{ transitionDelay: `${index * 200 + 600}ms` }}
              >
                <div className={`about-value-icon ${value.colorClass} ${isVisible ? 'about-value-icon-animate' : ''}`}>
                  <value.icon className="about-value-icon-svg" />
                </div>
                <h3 className="about-value-title">{value.title}</h3>
                <p className="about-value-text">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Histoire;
