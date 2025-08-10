import React, { useState, useEffect, useRef } from 'react';
import '../Style/Expertise.css';

// Import images
import constructionImage from '../assets/Image/P1035972.jpg';
import industrielImage from '../assets/Image/P1035861.jpg';
import designImage from '../assets/Image/P1035841.jpg';
import maintenanceImage from '../assets/Image/P1035825.jpg';
import conseilImage from '../assets/Image/P1035799.jpg';

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
      description: 'De la tour élégante au complexe futuriste, nous bâtissons des structures iconiques qui marquent leur époque.',
      image: constructionImage,
      features: ['Design architectural unique', 'Normes HQE et durabilité', 'Intégration smart building', 'Finitions haut de gamme'],
      color: 'blue'
    },
    {
      icon: 'Hammer',
      title: 'Rénovation Prestige',
      subtitle: 'L’alliance du cachet et du confort moderne',
      description: 'Nous insufflons une seconde vie à vos espaces en respectant leur histoire tout en y intégrant l’innovation.',
      image: constructionImage,
      features: ['Restauration patrimoniale', 'Performance énergétique optimisée', 'Matériaux nobles', 'Respect du style d’origine'],
      color: 'emerald'
    },
    {
      icon: 'Factory',
      title: 'Infrastructures Industrielles',
      subtitle: 'Efficacité, sécurité et innovation',
      description: 'Des installations pensées pour la performance, alliant technologies de pointe et normes internationales.',
      image: industrielImage,
      features: ['Automatisation et IA', 'Conception modulaire', 'Basse consommation énergétique', 'Sécurité renforcée'],
      color: 'purple'
    },
    {
      icon: 'Brush',
      title: 'Design d’Intérieur',
      subtitle: 'Chaque détail compte',
      description: 'Création d’environnements sur mesure qui reflètent votre identité et maximisent le confort.',
      image: designImage,
      features: ['Éclairage sur mesure', 'Matériaux premium', 'Mobilier exclusif', 'Harmonie des espaces'],
      color: 'rose'
    },
    {
      icon: 'Tool',
      title: 'Maintenance Premium',
      subtitle: 'Toujours opérationnel, toujours impeccable',
      description: 'Un suivi proactif et réactif pour garantir la longévité et la performance de vos installations.',
      image: maintenanceImage,
      features: ['Assistance 24/7', 'Techniciens experts', 'Pièces certifiées', 'Suivi digitalisé'],
      color: 'orange'
    },
    {
      icon: 'Compass',
      title: 'Conseil & Stratégie',
      subtitle: 'Vision, planification, succès',
      description: 'Nous vous guidons de l’idée à la réalisation avec une expertise technique et stratégique éprouvée.',
      image: conseilImage,
      features: ['Études de faisabilité', 'Optimisation budgétaire', 'Gestion de projet clé en main', 'Veille réglementaire'],
      color: 'amber'
    }
  ];

  const renderIcon = (iconName) => {
    const icons = {
      Skyscraper: (
        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M3 22h18V10L12 2 3 10v12z" />
          <path d="M9 22V12h6v10" />
        </svg>
      ),
      Hammer: (
        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M15 3L21 9l-3 3-6-6V3h3z" />
          <path d="M3 21l9-9" />
        </svg>
      ),
      Factory: (
        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M3 21h18V8l-4 3V8l-4 3V8H3v13z" />
        </svg>
      ),
      Brush: (
        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M2 18a4 4 0 0 0 4 4h2v-4H2z" />
          <path d="M22 2L11 13" />
          <path d="M15 3h6v6" />
        </svg>
      ),
      Tool: (
        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M14.7 6.3l1.6 1.6 3.8-3.8a6 6 0 0 1-7.9 7.9l-7 7a2 2 0 0 1-2.8-2.8l7-7a6 6 0 0 1 7.9-7.9l-3.8 3.8z" />
        </svg>
      ),
      Compass: (
        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="12" r="10" />
          <polygon points="16 8 12 12 8 16 12 12" />
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
        
        <div className={`expertise-header ${isVisible ? 'fade-in' : ''}`}>
          <div className="expertise-badge">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="8" cy="8" r="7" /></svg>
            <span>NOS EXPERTISES</span>
          </div>
          <h2 className="expertise-title">
            Maîtrise <span className="highlight">Absolue</span>
          </h2>
          <p className="expertise-description">
            Nos 6 piliers d’excellence couvrent l’intégralité du cycle de vie d’un projet, du croquis initial à la performance sur le long terme.
          </p>
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
                  <span>En savoir plus</span>
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
                </div>
              </div>
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
                    <path fill="currentColor" d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z" />
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
                      <h4 className="features-title">Nos engagements</h4>
                      <ul className="features-list">
                        {expertises[activeExpertise].features.map((feature, idx) => (
                          <li key={idx} className="feature-item">
                            <span className="feature-icon">
                              <svg viewBox="0 0 24 24" width="20" height="20">
                                <path fill="currentColor" d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41L9 16.17z" />
                              </svg>
                            </span>
                            <span className="feature-text">{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div className="expertise-modal-actions">
                      <button className="expertise-modal-cta-btn primary">
                        <span>Demander un devis</span>
                        <svg viewBox="0 0 24 24" width="20" height="20">
                          <path fill="currentColor" d="M12 4l-1.41 1.41L16.17 11H4v2h12.17l-5.58 5.59L12 20l8-8-8-8z" />
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
