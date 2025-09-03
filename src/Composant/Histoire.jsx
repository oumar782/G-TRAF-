import React, { useEffect, useRef, useState } from 'react';
import { Target, Eye, Award, Shield, Users2, Wrench, ArrowRight } from 'lucide-react';
import '../Style/Histoire.css';
import imageEquipe from '../assets/Image/projet.webp'; // ✅ import direct de l'image

const Histoire = () => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef(null);

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
      title: "Qualité & Sécurité",
      description: "Respect rigoureux des normes et application de protocoles de sécurité sur chaque chantier.",
      colorClass: "about-value-blue"
    },
    {
      icon: Users2,
      title: "Expertise locale",
      description: "Une équipe qualifiée et engagée pour répondre aux besoins des collectivités, entreprises et particuliers.",
      colorClass: "about-value-green"
    },
    {
      icon: Wrench,
      title: "Innovation & Durabilité",
      description: "Des solutions techniques modernes pour des infrastructures solides et respectueuses de l’environnement.",
      colorClass: "about-value-purple"
    }
  ];

  return (
    <section id="Notre-mission" className="about-section" ref={ref}>
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
                <span className={`about-title-line ${isVisible ? 'about-title-line-animate' : ''}`}>Près de trois décennies</span>
                <span className={`about-title-highlight ${isVisible ? 'about-title-highlight-animate' : ''}`}>
                  d’expertise en BTP
                </span>
              </h2>
              <p className={`about-description ${isVisible ? 'about-description-animate' : ''}`}>
                Depuis 2015, <strong>G-TRAF+</strong> réalise des projets d’aménagement, de construction et
                de fourniture de matériel dans toute la Guinée. Nous allions savoir-faire technique,
                respect des délais et engagement environnemental.
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
                      Offrir des solutions de génie civil et rural fiables, durables et adaptées aux
                      réalités locales, pour accompagner le développement des infrastructures en Guinée.
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
                      Devenir un acteur incontournable du développement national et régional, en
                      construisant des infrastructures modernes et respectueuses de l’environnement.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <button
  className={`about-button ${isVisible ? 'about-button-animate' : ''}`}
  onClick={() => {
    const section = document.getElementById('realisations');
    if (section) section.scrollIntoView({ behavior: 'smooth' });
  }}
>
  <span>Découvrir nos réalisations</span>
  <ArrowRight className="about-button-icon" />
</button>

          </div>

          {/* Visual */}
          <div className={`about-visual ${isVisible ? 'about-visible' : 'about-hidden-right'}`}>
            <div className="about-image-container">
              <div className="about-image-gradient"></div>
              <img 
                src={imageEquipe}
                alt="Équipe G-TRAF+" 
                className={`about-image ${isVisible ? 'about-image-animate' : ''}`}
              />
              
              {/* Floating Stats */}
             
              <div className={`about-stat about-stat-right ${isVisible ? 'about-stat-right-animate' : ''}`}>
                <div className="about-stat-number">5+</div>
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
                L’engagement comme
              </span>
              <span className={`about-values-title-highlight ${isVisible ? 'about-values-title-highlight-animate' : ''}`}>
                moteur
              </span>
            </h2>
            <p className={`about-values-description ${isVisible ? 'about-values-description-animate' : ''}`}>
              Nos valeurs guident chaque chantier et assurent la satisfaction de nos clients : qualité,
              sécurité et responsabilité sociale.
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
