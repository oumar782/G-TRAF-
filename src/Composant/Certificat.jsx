import React, { useEffect, useRef, useState } from 'react';
import '../Style/Certificat.css';

const Certifications = () => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true);
      },
      { threshold: 0.1 }
    );

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  const ShieldIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
    </svg>
  );

  const AwardIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="8" r="7" />
      <path d="M8.21 13.89L7 23l5-3 5 3-1.21-9.12" />
    </svg>
  );

  const LeafIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10z" />
      <path d="M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12" />
    </svg>
  );

  const UsersIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
      <circle cx="9" cy="7" r="4" />
      <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
      <path d="M16 3.13a4 4 0 0 1 0 7.75" />
    </svg>
  );

  const CheckCircleIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
      <path d="M22 4L12 14.01l-3-3" />
    </svg>
  );

  const StarIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
    </svg>
  );

  const ArrowRightIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
      <line x1="5" y1="12" x2="19" y2="12" />
      <polyline points="12 5 19 12 12 19" />
    </svg>
  );

  const certifications = [
    {
      icon: ShieldIcon,
      name: "ISO 9001:2015",
      description: "Système de Management de la Qualité",
      details: "Nous garantissons une qualité constante à chaque étape, de la conception à la livraison.",
      color: "blue",
      year: "2020"
    },
    {
      icon: AwardIcon,
      name: "Qualibat",
      description: "Qualification BTP Haut Niveau",
      details: "Reconnaissance officielle de notre excellence dans les travaux de construction et d'infrastructure.",
      color: "emerald",
      year: "1998"
    },
    {
      icon: LeafIcon,
      name: "RGE Éco-Artisan",
      description: "Performance Énergétique & Énergies Renouvelables",
      details: "Travaux respectueux de l’environnement, optimisant les performances énergétiques.",
      color: "green",
      year: "2015"
    },
    {
      icon: UsersIcon,
      name: "OPPBTP",
      description: "Sécurité & Prévention",
      details: "Une culture de la sécurité ancrée dans tous nos projets, protégeant nos équipes et nos clients.",
      color: "orange",
      year: "2010"
    }
  ];

  const partners = [
    { 
      name: "Lafarge Holcim", 
      category: "Matériaux Hautes Performances",
      description: "Partenaire exclusif pour les bétons de nouvelle génération, gages de durabilité.",
      logo: "LH"
    },
    { 
      name: "Schneider Electric", 
      category: "Énergie & Automatisation",
      description: "Solutions intelligentes pour optimiser la performance énergétique des bâtiments.",
      logo: "SE"
    },
    { 
      name: "Saint-Gobain", 
      category: "Innovation Matériaux",
      description: "Technologies avancées pour des constructions durables et performantes.",
      logo: "SG"
    },
    { 
      name: "Legrand", 
      category: "Infrastructures Électriques",
      description: "Fiabilité et innovation dans les solutions d’installation électrique.",
      logo: "LG"
    },
    { 
      name: "Velux", 
      category: "Ouvertures Premium",
      description: "Fenêtres de toit et solutions lumineuses haut de gamme.",
      logo: "VX"
    },
    { 
      name: "Bosch", 
      category: "Outillage de Précision",
      description: "Équipements professionnels pour une exécution parfaite sur chantier.",
      logo: "BS"
    }
  ];

  const awards = [
    {
      year: "2024",
      title: "Prix de l’Excellence en Génie Civil",
      organization: "Fédération Nationale du Bâtiment",
      category: "Innovation & Qualité"
    },
    {
      year: "2023",
      title: "Trophée de l’Architecture Moderne",
      organization: "Ordre des Architectes",
      category: "Projet d’Infrastructure Urbaine"
    },
    {
      year: "2022",
      title: "Label Entreprise Responsable",
      organization: "CCI Guinée",
      category: "Développement Durable"
    }
  ];

  return (
    <section className={`certif-section ${isVisible ? 'visible' : ''}`} ref={ref}>
      <div className="certif-bg-effects">
        <div className="certif-bg-diamond-1"></div>
        <div className="certif-bg-diamond-2"></div>
        <div className="certif-bg-grid"></div>
      </div>

      <div className="certif-container">
        <div className={`certif-header ${isVisible ? 'fade-in' : ''}`}>
          <div className="certif-badge">
            <ShieldIcon />
            <span>GARANTIES D'EXCELLENCE</span>
          </div>
          <h2 className="certif-title">
            <span className="title-line">Certifications & Partenariats</span>
            <span className="title-highlight">d'Exception</span>
          </h2>
          <p className="certif-description">
            G-TRAF+ allie expertise technique, innovation et engagement durable.  
            Nos certifications de prestige et partenariats d’élite assurent à nos clients des réalisations
            irréprochables, respectant les plus hauts standards internationaux.
          </p>
        </div>

        <div className="certif-certifications">
          <div className={`certif-subheader ${isVisible ? 'fade-in' : ''}`} style={{ transitionDelay: '200ms' }}>
            <div className="section-divider">
              <span className="divider-line"></span>
              <span className="divider-number">01</span>
              <span className="divider-line"></span>
            </div>
            <h3 className="certif-subtitle">Nos Accréditations</h3>
            <p className="certif-subdesc">
              Des labels internationaux qui attestent de notre rigueur, de notre savoir-faire et
              de notre engagement pour des chantiers fiables, sécurisés et durables.
            </p>
          </div>

          <div className="certif-grid">
            {certifications.map((cert, i) => (
              <div
                key={i}
                className={`certif-card certif-${cert.color} ${isVisible ? 'fade-in' : ''}`}
                style={{ transitionDelay: `${i * 150 + 400}ms` }}
              >
                <div className="certif-icon-container">
                  <div className="certif-icon">
                    <cert.icon />
                  </div>
                  <span className="certif-year">Depuis {cert.year}</span>
                </div>
                <div className="certif-content">
                  <h4 className="certif-name">{cert.name}</h4>
                  <p className="certif-desc">{cert.description}</p>
                  <div className="certif-details-container">
                    <p className="certif-details">{cert.details}</p>
                    <div className="certif-check">
                      <CheckCircleIcon />
                    </div>
                  </div>
                </div>
                <div className="certif-card-decoration"></div>
              </div>
            ))}
          </div>
        </div>

        <div className={`certif-awards ${isVisible ? 'fade-in' : ''}`} style={{ transitionDelay: '800ms' }}>
          <div className="certif-subheader">
            <div className="section-divider">
              <span className="divider-line"></span>
              <span className="divider-number">02</span>
              <span className="divider-line"></span>
            </div>
            <h3 className="certif-subtitle">Reconnaissances Sectorielles</h3>
            <p className="certif-subdesc">
              Des distinctions prestigieuses qui saluent notre capacité à livrer des projets d’exception,
              dans le respect des normes les plus exigeantes.
            </p>
          </div>

          <div className="certif-awards-grid">
            {awards.map((award, i) => (
              <div key={i} className="certif-award-card">
                <div className="certif-award-header">
                  <div className="certif-award-year">{award.year}</div>
                  <div className="certif-award-content">
                    <h4 className="certif-award-title">{award.title}</h4>
                    <div className="certif-award-meta">
                      <span className="certif-award-org">{award.organization}</span>
                      <span className="certif-award-separator">•</span>
                      <span className="certif-award-category">{award.category}</span>
                    </div>
                  </div>
                </div>
                <div className="certif-award-decoration">
                  <StarIcon />
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className={`certif-partners ${isVisible ? 'fade-in' : ''}`} style={{ transitionDelay: '1000ms' }}>
          <div className="certif-subheader">
            <div className="section-divider">
              <span className="divider-line"></span>
              <span className="divider-number">03</span>
              <span className="divider-line"></span>
            </div>
            <h3 className="certif-subtitle">Alliances Stratégiques</h3>
            <p className="certif-subdesc">
              Collaborations exclusives avec les leaders mondiaux pour une excellence sans compromis.
            </p>
          </div>

          <div className="certif-partners-container">
            <div className="certif-partners-grid">
              {partners.map((partner, i) => (
                <div key={i} className="certif-partner-card">
                  <div className="certif-partner-logo">
                    <span>{partner.logo}</span>
                  </div>
                  <div className="certif-partner-content">
                    <h4 className="certif-partner-name">{partner.name}</h4>
                    <p className="certif-partner-category">{partner.category}</p>
                    <p className="certif-partner-desc">{partner.description}</p>
                  </div>
                  <div className="certif-partner-hover-effect"></div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className={`certif-cta ${isVisible ? 'fade-in' : ''}`} style={{ transitionDelay: '1200ms' }}>
          <div className="certif-cta-box">
            <div className="certif-cta-content">
              <h3 className="certif-cta-title">Optez pour l’Excellence G-TRAF+</h3>
              <p className="certif-cta-desc">
                Chaque projet que nous livrons reflète notre exigence, notre passion et notre engagement
                envers l’excellence. Avec G-TRAF+, votre vision devient une réalité durable et haut de gamme.
              </p>
            </div>
            <div className="certif-cta-buttons">
  <button 
    className="certif-cta-btn-primary" 
    onClick={() => window.open('/Notre-contact', '_self')}
  >
    <span>Demander un devis sur mesure</span>
    <ArrowRightIcon />
  </button>
  <button 
  className="certif-cta-btn-secondary" 
  onClick={() => window.open('/Nos-realisations', '_self')}
    

>
  Découvrir nos réalisations
</button>
</div>
            <div className="certif-cta-decoration"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Certifications;
