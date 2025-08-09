import React, { useState, useEffect, useRef } from 'react';
import '../Style/Expertise.css';

const Expertise = () => {
  const [activeExpertise, setActiveExpertise] = useState(0);
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

  const expertises = [
    {
      icon: 'Building2',
      title: 'Construction Neuve',
      subtitle: 'Édifices d\'exception',
      description: 'Conception et réalisation de bâtiments prestigieux, du résidentiel haut de gamme aux complexes commerciaux d\'envergure.',
      image: 'https://images.pexels.com/photos/1216589/pexels-photo-1216589.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
      features: ['Architecture sur-mesure', 'Matériaux premium', 'Technologies avancées', 'Finitions luxueuses'],
      color: 'blue'
    },
    {
      icon: 'Home',
      title: 'Rénovation Prestige',
      subtitle: 'Renaissance architecturale',
      description: 'Transformation et modernisation de propriétés d\'exception, préservant le caractère tout en intégrant le confort moderne.',
      image: 'https://images.pexels.com/photos/1396132/pexels-photo-1396132.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
      features: ['Restauration patrimoniale', 'Modernisation énergétique', 'Design contemporain', 'Respect du cachet'],
      color: 'emerald'
    },
    {
      icon: 'Factory',
      title: 'Projets Industriels',
      subtitle: 'Infrastructure moderne',
      description: 'Réalisation d\'infrastructures industrielles et logistiques intégrant les dernières innovations technologiques.',
      image: 'https://images.pexels.com/photos/1268390/pexels-photo-1268390.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
      features: ['Automatisation avancée', 'Efficacité énergétique', 'Normes environnementales', 'Sécurité renforcée'],
      color: 'purple'
    },
    {
      icon: 'Palette',
      title: 'Design Intérieur',
      subtitle: 'Espaces sur-mesure',
      description: 'Création d\'ambiances uniques et d\'aménagements personnalisés pour des intérieurs d\'exception.',
      image: 'https://images.pexels.com/photos/1022936/pexels-photo-1022936.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
      features: ['Mobilier sur-mesure', 'Éclairage d\'ambiance', 'Matériaux nobles', 'Ergonomie optimale'],
      color: 'rose'
    },
    {
      icon: 'Wrench',
      title: 'Maintenance Premium',
      subtitle: 'Service d\'excellence',
      description: 'Maintenance préventive et curative de vos installations avec un service client dédié disponible 24h/24.',
      image: 'https://images.pexels.com/photos/3862132/pexels-photo-3862132.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
      features: ['Intervention rapide', 'Pièces d\'origine', 'Garantie étendue', 'Suivi personnalisé'],
      color: 'orange'
    },
    {
      icon: 'Shield',
      title: 'Conseil & Expertise',
      subtitle: 'Accompagnement global',
      description: 'Conseil stratégique et expertise technique pour optimiser vos projets de construction et d\'investissement.',
      image: 'https://images.pexels.com/photos/2736834/pexels-photo-2736834.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
      features: ['Étude de faisabilité', 'Optimisation budgétaire', 'Gestion de projet', 'Suivi réglementaire'],
      color: 'amber'
    }
  ];

  const renderIcon = (iconName) => {
    const icons = {
      Building2: <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="3" width="20" height="14" rx="2" ry="2"></rect><line x1="8" y1="21" x2="16" y2="21"></line><line x1="12" y1="17" x2="12" y2="21"></line></svg>,
      Home: <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path><polyline points="9 22 9 12 15 12 15 22"></polyline></svg>,
      Factory: <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M2 20a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8c0-1.1-.9-2-2-2h-4l-2-2H8a2 2 0 0 0-2 2v2H4a2 2 0 0 0-2 2v10z"></path><rect x="8" y="12" width="8" height="6" rx="1"></rect></svg>,
      Palette: <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"></circle><circle cx="12" cy="12" r="4"></circle><circle cx="18" cy="8" r="1"></circle><circle cx="12" cy="2" r="1"></circle><circle cx="6" cy="8" r="1"></circle><circle cx="6" cy="16" r="1"></circle><circle cx="12" cy="22" r="1"></circle><circle cx="18" cy="16" r="1"></circle></svg>,
      Wrench: <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"></path></svg>,
      Shield: <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path></svg>
    };
    return icons[iconName] || null;
  };

  return (
    <section id="expertise" className={`expertise-section ${isVisible ? 'visible' : ''}`} ref={ref}>
      <div className="expertise-container">
        {/* Header */}
        <div className={`expertise-header ${isVisible ? 'fade-in' : ''}`}>
          <div className="expertise-badge">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"></path></svg>
            <span>NOS EXPERTISES</span>
          </div>
          <h2 className="expertise-title">
            Maîtrise <span className="highlight">Absolue</span>
          </h2>
          <p className="expertise-description">
            Six domaines d'excellence où notre savoir-faire s'exprime pleinement, 
            de la conception à la réalisation de vos projets les plus ambitieux.
          </p>
        </div>

        {/* Expertise Grid */}
        <div className="expertise-grid">
          {expertises.map((item, index) => (
            <div
              key={index}
              className={`expertise-card ${activeExpertise === index ? 'active' : ''} ${isVisible ? 'fade-in' : ''}`}
              style={{ transitionDelay: `${index * 100}ms` }}
              onClick={() => setActiveExpertise(index)}
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
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Active Expertise Detail */}
        <div className={`expertise-detail ${isVisible ? 'fade-in' : ''}`}>
          <div className="expertise-detail-container">
            <div className="expertise-detail-content">
              <div className="expertise-detail-header">
                <div className={`expertise-detail-icon ${expertises[activeExpertise].color}`}>
                  {renderIcon(expertises[activeExpertise].icon)}
                </div>
                <div>
                  <h3 className="expertise-detail-title">{expertises[activeExpertise].title}</h3>
                  <p className="expertise-detail-subtitle">{expertises[activeExpertise].subtitle}</p>
                </div>
              </div>
              <p className="expertise-detail-description">
                {expertises[activeExpertise].description}
              </p>
              <div className="expertise-features">
                {expertises[activeExpertise].features.map((feature, idx) => (
                  <div key={idx} className="expertise-feature-item">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
                    <span>{feature}</span>
                  </div>
                ))}
              </div>
              <button className="expertise-cta-btn">
                <span>Demander un devis</span>
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
              </button>
            </div>
            <div className="expertise-detail-image">
              <img src={expertises[activeExpertise].image} alt={expertises[activeExpertise].title} />
              <div className="image-overlay"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Expertise;