import React, { useState, useEffect, useRef } from 'react';
import '../Style/Expertise.css';

// Import images
import constructionImage from '../assets/Image/P1035972.webp';
import industrielImage from '../assets/Image/P1035861.webp';
import designImage from '../assets/Image/P1035841.webp';
import maintenanceImage from '../assets/Image/P1035825.webp';
import conseilImage from '../assets/Image/P1035799.webp';

const Expertise = () => {
  const [activeExpertise, setActiveExpertise] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const ref = useRef(null);
  const modalRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setIsVisible(true);
      }
    }, { threshold: 0.1 });

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (modalRef.current && !modalRef.current.contains(event.target)) {
        closeModal();
      }
    };

    if (showModal) {
      document.addEventListener('mousedown', handleClickOutside);
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.body.style.overflow = 'auto';
    };
  }, [showModal]);

  const expertises = [
    {
      icon: 'Skyscraper',
      title: 'Construction Signature',
      subtitle: 'Des projets qui redéfinissent le skyline',
      description: 'De la tour élégante au complexe futuriste, nous bâtissons des structures iconiques qui marquent leur époque avec une précision d\'horloger et une vision audacieuse.',
      image: constructionImage,
      features: [
        'Design architectural unique et personnalisé',
        'Normes HQE et durabilité certifiées',
        'Intégration smart building dernier cri',
        'Finitions artisanales haut de gamme'
      ],
      color: 'blue'
    },
    {
      icon: 'Hammer',
      title: 'Rénovation Prestige',
      subtitle: 'L\'alliance du cachet et du confort moderne',
      description: 'Nous insufflons une seconde vie à vos espaces en respectant leur histoire tout en y intégrant les innovations les plus abouties pour un résultat sans compromis.',
      image: constructionImage,
      features: [
        'Restauration patrimoniale certifiée',
        'Performance énergétique optimisée',
        'Matériaux nobles et authentiques',
        'Respect scrupuleux du style d\'origine'
      ],
      color: 'emerald'
    },
    {
      icon: 'Factory',
      title: 'Infrastructures Industrielles',
      subtitle: 'Efficacité, sécurité et innovation',
      description: 'Des installations pensées pour la performance industrielle, alliant technologies de pointe et normes internationales les plus strictes.',
      image: industrielImage,
      features: [
        'Automatisation et IA intégrées',
        'Conception modulaire évolutive',
        'Basse consommation énergétique certifiée',
        'Systèmes de sécurité renforcée'
      ],
      color: 'purple'
    },
    {
      icon: 'Brush',
      title: 'Design d\'Intérieur',
      subtitle: 'Chaque détail compte',
      description: 'Création d\'environnements sur mesure qui reflètent votre identité exclusive tout en maximisant le confort et l\'ergonomie.',
      image: designImage,
      features: [
        'Éclairage architectural sur mesure',
        'Matériaux premium et exclusifs',
        'Mobilier design exclusif',
        'Harmonie parfaite des espaces'
      ],
      color: 'rose'
    },
    {
      icon: 'Tool',
      title: 'Maintenance Premium',
      subtitle: 'Toujours opérationnel, toujours impeccable',
      description: 'Un suivi proactif et réactif de haute précision pour garantir la longévité et la performance optimale de vos installations.',
      image: maintenanceImage,
      features: [
        'Assistance technique 24/7',
        'Techniciens experts certifiés',
        'Pièces d\'origine garanties',
        'Suivi digitalisé en temps réel'
      ],
      color: 'orange'
    },
    {
      icon: 'Compass',
      title: 'Conseil & Stratégie',
      subtitle: 'Vision, planification, succès',
      description: 'Nous vous guidons de l\'idée à la réalisation avec une expertise technique et stratégique éprouvée par des décennies d\'expérience.',
      image: conseilImage,
      features: [
        'Études de faisabilité approfondies',
        'Optimisation budgétaire rigoureuse',
        'Gestion de projet clé en main',
        'Veille réglementaire exhaustive'
      ],
      color: 'amber'
    }
  ];

  const renderIcon = (iconName) => {
    const icons = {
      Skyscraper: (
        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M19 21V5a2 2 0 0 0-2-2H7a2 2 0 0 0-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 8v-4a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v4m-4 0h4"/>
        </svg>
      ),
      Hammer: (
        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="m15 12-8.5 8.5c-.83.83-2.17.83-3 0 0 0 0 0 0 0a2.12 2.12 0 0 1 0-3L12 9"/>
          <path d="M17.64 15 22 10.64"/>
          <path d="m20.91 11.7-1.25-1.25c-.6-.6-.93-1.4-.93-2.25v-.86L16.01 4.6a5.56 5.56 0 0 0-3.94-1.64H9l.92.82A6.18 6.18 0 0 1 12 8.4v1.56l2 2h2.47l2.26 1.91"/>
        </svg>
      ),
      Factory: (
        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M2 20a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8l-7 5V8l-7 5V4a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2Z"/>
          <path d="M17 18h1"/>
          <path d="M12 18h1"/>
          <path d="M7 18h1"/>
        </svg>
      ),
      Brush: (
        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="m9.06 11.9 8.07-8.06a2.85 2.85 0 1 1 4.03 4.03l-8.06 8.08"/>
          <path d="M7.07 14.94c-1.66 0-3 1.35-3 3.02 0 1.33-2.5 1.52-2 2.02 1.08 1.1 2.49 2.02 4 2.02 2.2 0 4-1.8 4-4.04a3.01 3.01 0 0 0-3-3.02z"/>
        </svg>
      ),
      Tool: (
        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"/>
        </svg>
      ),
      Compass: (
        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="12" r="10"/>
          <polygon points="16.24 7.76 14.12 14.12 7.76 16.24 9.88 9.88 16.24 7.76"/>
        </svg>
      )
    };
    return icons[iconName] || null;
  };

  const handleCardClick = (index) => {
    setActiveExpertise(index);
    setShowModal(true);
  };

  const closeModal = () => setShowModal(false);

  return (
    <section id="Nos-expertises" className={`expertise-section ${isVisible ? 'visible' : ''}`} ref={ref}>
      <div className="expertise-container">
        {/* Background decorative elements */}
        <div className="expertise-bg-pattern"></div>
        <div className="expertise-bg-shape-1"></div>
        <div className="expertise-bg-shape-2"></div>

        <div className={`expertise-header-wrapper ${isVisible ? 'fade-in' : ''}`}>
          <div className="expertise-header">
            <div className="expertise-badge">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 2s3.5 2 3.5 7l-.5 5.5h-6L8.5 9c0-5 3.5-7 3.5-7z"/>
                <path d="M5 15s1 2 7 2 7-2 7-2"/>
                <path d="M12 22v-3"/>
              </svg>
              <span>DOMAINES D'EXCELLENCE</span>
            </div>
            <h2 className="expertise-title">
              <span className="title-line">Savoir-Faire</span>
              <span className="title-highlight">d'Exception</span>
            </h2>
            <p className="expertise-description">
              Nos six piliers d'expertise couvrent l'intégralité du cycle de vie d'un projet, conjuguant innovation technique et excellence exécutive pour des réalisations sans compromis.
            </p>
          </div>
        </div>

        <div className="expertise-grid">
          {expertises.map((item, index) => (
            <div
              key={index}
              className={`expertise-card ${activeExpertise === index ? 'active' : ''} ${isVisible ? 'fade-in' : ''}`}
              style={{ transitionDelay: `${index * 100}ms` }}
              onClick={() => handleCardClick(index)}
            >
              <div className={`expertise-card-inner ${activeExpertise === index ? 'active-inner' : ''}`}>
                <div className={`expertise-icon ${item.color}`}>
                  {renderIcon(item.icon)}
                </div>
                <h3 className="expertise-card-title">{item.title}</h3>
                <p className="expertise-card-subtitle">{item.subtitle}</p>
                <p className="expertise-card-desc">{item.description}</p>
                <div className="expertise-more">
                  <span>Explorer cette expertise</span>
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <line x1="5" y1="12" x2="19" y2="12"/>
                    <polyline points="12 5 19 12 12 19"/>
                  </svg>
                </div>
              </div>
              <div className="expertise-card-decoration"></div>
            </div>
          ))}
        </div>

        {showModal && (
          <div className="expertise-modal">
            <div className="expertise-modal-overlay"></div>
            <div className="expertise-modal-container" ref={modalRef}>
              <div className="expertise-modal-content">
                <button className="expertise-modal-close" onClick={closeModal}>
                  <svg viewBox="0 0 24 24" width="24" height="24">
                    <path fill="currentColor" d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"/>
                  </svg>
                </button>
                <div className="expertise-modal-grid">
                  <div className="expertise-modal-media">
                    <img 
                      src={expertises[activeExpertise].image} 
                      alt={expertises[activeExpertise].title}
                      className="expertise-modal-image"
                    />
                    <div className="expertise-modal-icon-container">
                      <div className={`expertise-modal-icon ${expertises[activeExpertise].color}`}>
                        {renderIcon(expertises[activeExpertise].icon)}
                      </div>
                    </div>
                  </div>
                  <div className="expertise-modal-body">
                    <div className="expertise-modal-header">
                      <h3 className="expertise-modal-title">{expertises[activeExpertise].title}</h3>
                      <p className="expertise-modal-subtitle">{expertises[activeExpertise].subtitle}</p>
                    </div>
                    <p className="expertise-modal-description">{expertises[activeExpertise].description}</p>
                    <div className="expertise-modal-features">
                      <h4 className="features-title">Nos engagements qualité</h4>
                      <ul className="features-list">
                        {expertises[activeExpertise].features.map((feature, idx) => (
                          <li key={idx} className="feature-item">
                            <span className="feature-icon">
                              <svg viewBox="0 0 24 24" width="20" height="20">
                                <path fill="currentColor" d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41L9 16.17z"/>
                              </svg>
                            </span>
                            <span className="feature-text">{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div className="expertise-modal-actions">
                      <button className="expertise-modal-cta-btn primary">
                        <span>Demander une consultation</span>
                        <svg viewBox="0 0 24 24" width="20" height="20">
                          <path fill="currentColor" d="M12 4l-1.41 1.41L16.17 11H4v2h12.17l-5.58 5.59L12 20l8-8-8-8z"/>
                        </svg>
                      </button>
                      <button className="expertise-modal-cta-btn secondary" onClick={closeModal}>
                        <span>Fermer</span>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Expertise;