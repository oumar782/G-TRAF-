import React, { useState, useRef, useEffect } from 'react';
import '../Style/Portfolio.css';

import project1 from '../assets/Image/P1035850.webp';
import project2 from '../assets/Image/P1035851.webp';
import project3 from '../assets/Image/P1035852.webp';

const Project360Gallery = () => {
  const [activeProject, setActiveProject] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  const projects = [
    {
      id: 1,
      title: 'Clinique Jean Paul 2 – Bâtiment Principal',
      category: 'Construction & Architecture',
      location: 'Conakry, Guinée',
      budget: '180M€',
      year: '2024',
      image: project1,
      description: 'Bâtiment principal de 300m conçu avec des matériaux durables et des espaces modulables intelligemment pensés pour une efficacité maximale.',
      technologies: ['Béton armé haute performance', 'Verre structural sécurisé', 'Isolation thermique avancée', 'Système de ventilation intelligent'],
      stats: {
        surface: '45,000m²',
        duration: '36 mois',
        team: '200 experts'
      },
      gallery: [project1, project2, project3]
    },
    {
      id: 2,
      title: 'Clinique Jean Paul 2 – Pavillon d\'Accueil',
      category: 'Architecture Hospitalière',
      location: 'Conakry, Guinée',
      budget: '45M€',
      year: '2024',
      image: project2,
      description: 'Pavillon d\'accueil moderne conçu pour optimiser le flux des patients tout en offrant un environnement apaisant et fonctionnel.',
      technologies: ['Charpente métallique légère', 'Revêtement en pierre naturelle', 'Éclairage naturel optimisé', 'Sols antibactériens'],
      stats: {
        surface: '5,000m²',
        duration: '12 mois',
        team: '30 experts'
      },
      gallery: [project2, project1, project3]
    },
    {
      id: 3,
      title: 'Clinique Jean Paul 2 – Espaces Techniques',
      category: 'Ingénierie Hospitalière',
      location: 'Conakry, Guinée',
      budget: '95M€',
      year: '2024',
      image: project3,
      description: 'Zones techniques et infrastructures de support réalisées avec les standards les plus élevés de la profession.',
      technologies: ['Béton haute performance', 'Toitures techniques renforcées', 'Systèmes d\'assainissement modernes', 'Équipements médicaux intégrés'],
      stats: {
        surface: '10,000m²',
        duration: '24 mois',
        team: '50 experts'
      },
      gallery: [project3, project1, project2]
    }
  ];

  const currentProject = projects[activeProject];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    const handleMouseMove = (e) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth) * 2 - 1,
        y: (e.clientY / window.innerHeight) * 2 - 1,
      });
    };

    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  useEffect(() => {
    let interval;
    if (isPlaying) {
      interval = setInterval(() => {
        setActiveProject((prev) => (prev + 1) % projects.length);
      }, 5000);
    }
    return () => clearInterval(interval);
  }, [isPlaying, projects.length]);

  const nextProject = () => {
    setActiveProject((prev) => (prev + 1) % projects.length);
  };

  const prevProject = () => {
    setActiveProject((prev) => (prev - 1 + projects.length) % projects.length);
  };

  return (
    <section ref={sectionRef} className="portfolio360-section" id='Nos-Réalisations'>
      <div className="portfolio360-container">
        {/* Background Elements */}
        <div className="portfolio360-bg-circle-1"></div>
        <div className="portfolio360-bg-circle-2"></div>
        
        {/* Header */}
        <div className={`portfolio360-header ${isVisible ? 'visible' : ''}`}>
          <div className="portfolio360-badge">NOS RÉALISATIONS D'EXCEPTION</div>
          <h2 className="portfolio360-title">
            <span>Nos Realisations</span> Immersif 360°
          </h2>
          <p className="portfolio360-subtitle">
            Explorez nos réalisations phares avec une expérience visuelle immersive.
            Chaque projet incarne notre quête d'excellence architecturale.
          </p>
        </div>

        {/* Main Content */}
        <div className="portfolio360-main-content">
          {/* 360° Showcase */}
          <div className="portfolio360-showcase">
            <div
              className="portfolio360-image-container"
              style={{
                transform: `rotateY(${mousePosition.x * 5}deg) rotateX(${mousePosition.y * 3}deg)`,
              }}
            >
              <img
                src={currentProject.image}
                alt={currentProject.title}
                className="portfolio360-main-image"
              />
              <div className="portfolio360-overlay"></div>
              
           
              
              {/* Play/Pause Button */}
              <button
                onClick={() => setIsPlaying(!isPlaying)}
                className="portfolio360-play-button"
              >
                {isPlaying ? (
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect x="6" y="5" width="4" height="14" fill="currentColor"/>
                    <rect x="14" y="5" width="4" height="14" fill="currentColor"/>
                  </svg>
                ) : (
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M5 3L19 12L5 21V3Z" fill="currentColor"/>
                  </svg>
                )}
              </button>
            </div>

            {/* Navigation Controls */}
            <div className="portfolio360-nav-controls">
              <button onClick={prevProject} className="portfolio360-nav-btn">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M15 18L9 12L15 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </button>
              <button onClick={nextProject} className="portfolio360-nav-btn">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M9 6L15 12L9 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </button>
            </div>
          </div>

          {/* Project Details */}
          <div className={`portfolio360-details ${isVisible ? 'visible' : ''}`}>
            <div className="portfolio360-category">{currentProject.category}</div>
            <h3 className="portfolio360-project-title">{currentProject.title}</h3>
            <p className="portfolio360-location">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 2C8.13 2 5 5.13 5 9C5 14.25 12 22 12 22C12 22 19 14.25 19 9C19 5.13 15.87 2 12 2Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M12 11C13.1046 11 14 10.1046 14 9C14 7.89543 13.1046 7 12 7C10.8954 7 10 7.89543 10 9C10 10.1046 10.8954 11 12 11Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              {currentProject.location}
            </p>
            <p className="portfolio360-description">{currentProject.description}</p>

            {/* Technologies */}
            <div className="portfolio360-tech-section">
              <h4>Technologies Clés :</h4>
              <div className="portfolio360-tech-list">
                {currentProject.technologies.map((tech, index) => (
                  <span key={index} className="portfolio360-tech-tag">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M5 12H19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      <path d="M12 5L19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Stats */}
            <div className="portfolio360-stats">
              {Object.entries(currentProject.stats).map(([key, value], index) => (
                <div key={index} className="portfolio360-stat-item">
                  <div className="portfolio360-stat-value">{value}</div>
                  <div className="portfolio360-stat-label">{key}</div>
                </div>
              ))}
            </div>

            {/* CTA Button */}
           
          </div>
        </div>

        {/* Thumbnails */}
        <div className="portfolio360-thumbnails">
          {projects.map((project, index) => (
            <button
              key={project.id}
              onClick={() => setActiveProject(index)}
              className={`portfolio360-thumb ${activeProject === index ? 'active' : ''}`}
            >
              <img src={project.image} alt={project.title} />
              {activeProject === index && <div className="portfolio360-thumb-overlay"></div>}
            </button>
          ))}
        </div>

        {/* Final CTA */}
        <div className="portfolio360-final-cta">
          <div className="portfolio360-cta-card">
            <h3 className="portfolio360-cta-title">Prêt à concrétiser votre vision architecturale ?</h3>
            <p className="portfolio360-cta-desc">
              Notre équipe d'experts est à votre disposition pour transformer vos idées en réalités tangibles.
            </p>
            <div className="portfolio360-cta-buttons">
              <button className="portfolio360-btn-primary">Demander un devis</button>
              <button className="portfolio360-btn-secondary">Contactez-nous</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Project360Gallery;