import React, { useEffect, useRef, useState } from 'react';
import '../Style/Certificat.css';

const Certifications = () => {
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

  // SVG Icons
  const ShieldIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
    </svg>
  );

  const AwardIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="8" r="7"></circle>
      <polyline points="8.21 13.89 7 23 12 20 17 23 15.79 13.88"></polyline>
    </svg>
  );

  const LeafIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M20.24 12.24a6 6 0 0 0-8.49-8.49L5 10.5V19h8.5z"></path>
      <line x1="16" y1="8" x2="2" y2="22"></line>
      <line x1="17.5" y1="15" x2="9" y2="15"></line>
    </svg>
  );

  const UsersIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
      <circle cx="9" cy="7" r="4"></circle>
      <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
      <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
    </svg>
  );

  const CheckCircleIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="20 6 9 17 4 12"></polyline>
    </svg>
  );

  const StarIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
    </svg>
  );

  const ArrowRightIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <line x1="5" y1="12" x2="19" y2="12"></line>
      <polyline points="12 5 19 12 12 19"></polyline>
    </svg>
  );

  const certifications = [
    {
      icon: ShieldIcon,
      name: "ISO 9001:2015",
      description: "Management de la qualité",
      details: "Certification internationale garantissant la qualité de nos processus et services",
      color: "blue",
      bgColor: "blue",
      year: "2020"
    },
    {
      icon: AwardIcon,
      name: "Qualibat",
      description: "Qualification professionnelle",
      details: "Reconnaissance officielle de notre expertise dans le BTP haut de gamme",
      color: "emerald",
      bgColor: "emerald",
      year: "1998"
    },
    {
      icon: LeafIcon,
      name: "RGE Éco-Artisan",
      description: "Reconnu Garant Environnement",
      details: "Spécialiste des travaux d'efficacité énergétique et énergies renouvelables",
      color: "green",
      bgColor: "green",
      year: "2015"
    },
    {
      icon: UsersIcon,
      name: "OPPBTP",
      description: "Sécurité et prévention",
      details: "Engagement maximal pour la sécurité sur tous nos chantiers",
      color: "orange",
      bgColor: "orange",
      year: "2010"
    }
  ];

  const partners = [
    { 
      name: "Lafarge Holcim", 
      category: "Matériaux Premium",
      description: "Partenaire exclusif pour les bétons haute performance"
    },
    { 
      name: "Schneider Electric", 
      category: "Domotique & Énergie",
      description: "Solutions intelligentes et durables"
    },
    { 
      name: "Saint-Gobain", 
      category: "Innovation Matériaux",
      description: "Technologies de pointe pour l'habitat"
    },
    { 
      name: "Legrand", 
      category: "Équipements Électriques",
      description: "Excellence en installations électriques"
    },
    { 
      name: "Velux", 
      category: "Ouvertures Premium",
      description: "Fenêtres de toit haut de gamme"
    },
    { 
      name: "Bosch", 
      category: "Outillage Professionnel",
      description: "Équipements de précision"
    }
  ];

  const awards = [
    {
      year: "2024",
      title: "Prix de l'Excellence BTP",
      organization: "Fédération Française du Bâtiment",
      category: "Innovation & Qualité"
    },
    {
      year: "2023",
      title: "Trophée de l'Architecture",
      organization: "Ordre des Architectes",
      category: "Projet Résidentiel"
    },
    {
      year: "2022",
      title: "Label Entreprise Responsable",
      organization: "CCI Paris Île-de-France",
      category: "Développement Durable"
    }
  ];

  return (
    <section className={`certif-section ${isVisible ? 'visible' : ''}`} ref={ref}>
      {/* Background Pattern */}
      <div className="certif-bg-effects">
        <div className="certif-bg-circle-1"></div>
        <div className="certif-bg-circle-2"></div>
      </div>

      <div className="certif-container">
        {/* Header */}
        <div className={`certif-header ${isVisible ? 'fade-in' : ''}`}>
          <div className="certif-badge">
            <ShieldIcon />
            <span>CERTIFICATIONS & PARTENAIRES</span>
          </div>
          <h2 className="certif-title">
            Garanties <span className="highlight">d'Excellence</span>
          </h2>
          <p className="certif-description">
            Nos certifications prestigieuses et nos partenariats stratégiques témoignent de notre engagement 
            constant vers l'excellence, l'innovation et la durabilité.
          </p>
        </div>

        {/* Certifications Grid */}
        <div className="certif-certifications">
          <div className={`certif-subheader ${isVisible ? 'fade-in' : ''}`} style={{ transitionDelay: '200ms' }}>
            <h3 className="certif-subtitle">Nos Certifications Qualité</h3>
            <p className="certif-subdesc">
              Des labels reconnus qui garantissent la qualité, la sécurité et la durabilité de nos réalisations.
            </p>
          </div>

          <div className="certif-grid">
            {certifications.map((cert, index) => (
              <div
                key={index}
                className={`certif-card certif-${cert.color} ${isVisible ? 'fade-in' : ''}`}
                style={{ transitionDelay: `${index * 150 + 400}ms` }}
              >
                <div className="certif-icon">
                  <cert.icon />
                </div>
                <div className="certif-content">
                  <h4 className="certif-name">{cert.name}</h4>
                  <p className="certif-desc">{cert.description}</p>
                  <p className="certif-details">{cert.details}</p>
                </div>
                <div className="certif-footer">
                  <span className="certif-year">Depuis {cert.year}</span>
                  <CheckCircleIcon />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Awards Section */}
        <div className={`certif-awards ${isVisible ? 'fade-in' : ''}`} style={{ transitionDelay: '800ms' }}>
          <div className="certif-subheader">
            <h3 className="certif-subtitle">Prix & Distinctions</h3>
            <p className="certif-subdesc">
              Nos réalisations exceptionnelles reconnues par les plus hautes instances du secteur.
            </p>
          </div>

          <div className="certif-awards-grid">
            {awards.map((award, index) => (
              <div key={index} className="certif-award-card">
                <div className="certif-award-header">
                  <div className="certif-award-icon">
                    <StarIcon />
                  </div>
                  <div>
                    <div className="certif-award-year">{award.year}</div>
                    <h4 className="certif-award-title">{award.title}</h4>
                    <p className="certif-award-org">{award.organization}</p>
                    <p className="certif-award-category">{award.category}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Partners Section */}
        <div className={`certif-partners ${isVisible ? 'fade-in' : ''}`} style={{ transitionDelay: '1000ms' }}>
          <div className="certif-subheader">
            <h3 className="certif-subtitle">Nos Partenaires Stratégiques</h3>
            <p className="certif-subdesc">
              Des alliances privilégiées avec les leaders mondiaux pour vous offrir le meilleur de l'innovation.
            </p>
          </div>

          <div className="certif-partners-container">
            <div className="certif-partners-grid">
              {partners.map((partner, index) => (
                <div key={index} className="certif-partner-card">
                  <div className="certif-partner-icon">
                    <span>{partner.name.charAt(0)}</span>
                  </div>
                  <h4 className="certif-partner-name">{partner.name}</h4>
                  <p className="certif-partner-category">{partner.category}</p>
                  <p className="certif-partner-desc">{partner.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className={`certif-cta ${isVisible ? 'fade-in' : ''}`} style={{ transitionDelay: '1200ms' }}>
          <div className="certif-cta-box">
            <h3 className="certif-cta-title">Bénéficiez de notre expertise certifiée</h3>
            <p className="certif-cta-desc">
              Nos certifications et partenariats premium garantissent la réussite de votre projet. 
              Faites confiance à l'excellence reconnue.
            </p>
            <div className="certif-cta-buttons">
              <button className="certif-cta-btn-primary">
                <span>Demander un devis certifié</span>
                <ArrowRightIcon />
              </button>
              <button className="certif-cta-btn-secondary">
                Voir nos références
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Certifications;