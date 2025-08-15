import React, { useState, useRef, useEffect } from 'react';
import '../Style/Portfolio.css';

import project1 from '../assets/Image/P1035850.webp';
import project2 from '../assets/Image/P1035851.webp';
import project3 from '../assets/Image/P1035852.webp';

const ArchitecturalGallery = () => {
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
      { threshold: 0.2 }
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
    <section ref={sectionRef} className="archi-gallery-section" id='realisations'>
      <div className="archi-gallery-container">
        {/* Background Elements */}
        <div className="archi-gallery-bg-circle-1"></div>
        <div className="archi-gallery-bg-circle-2"></div>
        
        {/* Header */}
        <div className={`archi-gallery-header ${isVisible ? 'archi-gallery-visible' : ''}`}>
          <div className="archi-gallery-badge">NOS RÉALISATIONS D'EXCEPTION</div>
          <h2 className="archi-gallery-title">
            <span>Nos Réalisations</span> Immersives 360°
          </h2>
          <p className="archi-gallery-subtitle">
            Explorez nos réalisations phares avec une expérience visuelle immersive.
            Chaque projet incarne notre quête d'excellence architecturale.
          </p>
        </div>

        {/* Main Content */}
        <div className="archi-gallery-main-content">
          {/* 360° Showcase */}
          <div className="archi-gallery-showcase">
            <div
              className="archi-gallery-image-container"
              style={{
                transform: `rotateY(${mousePosition.x * 5}deg) rotateX(${mousePosition.y * 3}deg)`,
              }}
            >
              <img
                src={currentProject.image}
                alt={currentProject.title}
                className="archi-gallery-main-image"
              />
              <div className="archi-gallery-overlay"></div>
              
              {/* Play/Pause Button */}
              <button
                onClick={() => setIsPlaying(!isPlaying)}
                className="archi-gallery-play-button"
                aria-label={isPlaying ? 'Pause' : 'Play'}
              >
                {isPlaying ? (
                  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect x="6" y="5" width="4" height="14" fill="currentColor"/>
                    <rect x="14" y="5" width="4" height="14" fill="currentColor"/>
                  </svg>
                ) : (
                  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M5 3L19 12L5 21V3Z" fill="currentColor"/>
                  </svg>
                )}
              </button>
            </div>

            {/* Navigation Controls */}
            <div className="archi-gallery-nav-controls">
              <button onClick={prevProject} className="archi-gallery-nav-btn" aria-label="Projet précédent">
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M15 18L9 12L15 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </button>
              <button onClick={nextProject} className="archi-gallery-nav-btn" aria-label="Projet suivant">
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M9 6L15 12L9 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </button>
            </div>
          </div>

          {/* Project Details */}
          <div className={`archi-gallery-details ${isVisible ? 'archi-gallery-visible' : ''}`}>
            <div className="archi-gallery-category">{currentProject.category}</div>
            <h3 className="archi-gallery-project-title">{currentProject.title}</h3>
            <p className="archi-gallery-location">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 2C8.13 2 5 5.13 5 9C5 14.25 12 22 12 22C12 22 19 14.25 19 9C19 5.13 15.87 2 12 2Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M12 11C13.1046 11 14 10.1046 14 9C14 7.89543 13.1046 7 12 7C10.8954 7 10 7.89543 10 9C10 10.1046 10.8954 11 12 11Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              {currentProject.location}
            </p>
            <p className="archi-gallery-description">{currentProject.description}</p>

            {/* Technologies */}
            <div className="archi-gallery-tech-section">
              <h4 className="archi-gallery-tech-title">Technologies Clés :</h4>
              <div className="archi-gallery-tech-list">
                {currentProject.technologies.map((tech, index) => (
                  <span key={index} className="archi-gallery-tech-tag">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M5 12H19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      <path d="M12 5L19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Stats */}
            <div className="archi-gallery-stats">
              {Object.entries(currentProject.stats).map(([key, value], index) => (
                <div key={index} className="archi-gallery-stat-item">
                  <div className="archi-gallery-stat-value">{value}</div>
                  <div className="archi-gallery-stat-label">{key}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Thumbnails */}
        <div className="archi-gallery-thumbnails">
          {projects.map((project, index) => (
            <button
              key={project.id}
              onClick={() => setActiveProject(index)}
              className={`archi-gallery-thumb ${activeProject === index ? 'archi-gallery-thumb-active' : ''}`}
              aria-label={`Voir le projet ${project.title}`}
            >
              <img src={project.image} alt={project.title} />
              {activeProject === index && <div className="archi-gallery-thumb-overlay"></div>}
            </button>
          ))}
        </div>

        {/* Final CTA */}
        <div className="archi-gallery-final-cta">
          <div className="archi-gallery-cta-card">
            <h3 className="archi-gallery-cta-title">Prêt à concrétiser votre vision architecturale ?</h3>
            <p className="archi-gallery-cta-desc">
              Notre équipe d'experts est à votre disposition pour transformer vos idées en réalités tangibles.
            </p>
            <div className="archi-gallery-cta-buttons">
              <button className="archi-gallery-btn-primary">Demander un devis</button>
              <button className="archi-gallery-btn-secondary">Contactez-nous</button>
            </div>
          </div>
        </div>
      </div>
    </section>  
  );
};

export default ArchitecturalGallery;